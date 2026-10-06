// Behaviour for the widgets in the captured markup. The crawl kept the markup and CSS but dropped the
// scripts, so every widget arrived inert; these are plain implementations of the standard patterns,
// driven by the hooks already present in the DOM (.w-dropdown / .w-nav / fs-accordion-* / .swiper).
//
// initInteractions() is called per route from usePageChrome and returns a cleanup. It is idempotent:
// elements it has already wired carry data-ix-bound so a re-run never double-binds.

const COLLAPSE_PX = { small: 479, medium: 767, large: 991, all: 99999 };
const DROPDOWN_MS = 200;

const on = (el, ev, fn, opts) => { el.addEventListener(ev, fn, opts); return () => el.removeEventListener(ev, fn, opts); };
const bind = (el) => { if (el.dataset.ixBound) return false; el.dataset.ixBound = "1"; return true; };

/* ---------------------------------------------------------------- dropdowns */
// .w-dropdown > .w-dropdown-toggle + .w-dropdown-list. Open adds .w--open (the site's CSS styles the
// open list); the list also carries an inline opacity/transform from the capture, so the closed values
// are remembered and restored rather than guessed.
function initDropdowns(root, offs) {
  root.querySelectorAll(".w-dropdown").forEach((dd) => {
    const toggle = dd.querySelector(":scope > .w-dropdown-toggle");
    const list = dd.querySelector(":scope > .w-dropdown-list");
    if (!toggle || !list || !bind(dd)) return;

    const hoverable = dd.getAttribute("data-hover") === "true";
    const closeDelay = parseInt(dd.getAttribute("data-delay") || "0", 10);
    const closedOpacity = list.style.opacity;
    const closedTransform = list.style.transform;
    let timer = null;
    let open = false;

    list.style.transition = `opacity ${DROPDOWN_MS}ms ease, transform ${DROPDOWN_MS}ms ease`;

    const clear = () => { if (timer) { clearTimeout(timer); timer = null; } };

    const setOpen = (next) => {
      clear();
      if (next === open) return;
      open = next;
      toggle.classList.toggle("w--open", next);
      list.classList.toggle("w--open", next);
      toggle.setAttribute("aria-expanded", String(next));
      if (next) {
        list.style.opacity = "1";
        list.style.transform = "translate3d(0px, 0px, 0px)";
      } else {
        list.style.opacity = closedOpacity;
        list.style.transform = closedTransform;
      }
    };

    // Hover only where the pointer can hover and the navbar has not collapsed to its mobile menu.
    const hoverActive = () => hoverable && window.matchMedia("(hover: hover) and (pointer: fine)").matches && !collapsed(dd);

    offs.push(on(toggle, "click", (e) => { e.preventDefault(); e.stopPropagation(); setOpen(!open); }));
    offs.push(on(toggle, "keydown", (e) => {
      if (e.key === "Enter" || e.key === " ") { e.preventDefault(); setOpen(!open); }
      if (e.key === "Escape") setOpen(false);
    }));
    if (hoverable) {
      offs.push(on(dd, "mouseenter", () => { if (hoverActive()) setOpen(true); }));
      offs.push(on(dd, "mouseleave", () => {
        if (!hoverActive()) return;
        clear();
        timer = setTimeout(() => setOpen(false), closeDelay);
      }));
    }
    // Clicking away or pressing Escape closes, matching the original widget.
    offs.push(on(document, "click", (e) => { if (open && !dd.contains(e.target)) setOpen(false); }));
    offs.push(on(document, "keydown", (e) => { if (e.key === "Escape") setOpen(false); }));
  });
}

// Is this element inside a navbar that has collapsed to its mobile menu at the current width?
function collapsed(el) {
  const nav = el.closest(".w-nav");
  if (!nav) return false;
  const px = COLLAPSE_PX[nav.getAttribute("data-collapse")] ?? COLLAPSE_PX.medium;
  return window.innerWidth <= px;
}

/* --------------------------------------------------------------- mobile nav */
// .w-nav-button toggles .w-nav-menu. The site's CSS shows the open menu via [data-nav-menu-open],
// so that attribute is the hook here; display is also set directly so it works without that rule.
function initNav(root, offs) {
  root.querySelectorAll(".w-nav").forEach((nav) => {
    const button = nav.querySelector(".w-nav-button");
    const menu = nav.querySelector(".w-nav-menu");
    if (!button || !menu || !bind(nav)) return;
    const overlay = nav.querySelector(".w-nav-overlay");
    const closedDisplay = menu.style.display;
    let open = false;

    const setOpen = (next) => {
      open = next;
      button.classList.toggle("w--open", next);
      button.setAttribute("aria-expanded", String(next));
      if (next) {
        menu.setAttribute("data-nav-menu-open", "");
        menu.style.display = "block";
        if (overlay) { overlay.style.display = "block"; overlay.classList.add("w--open"); }
      } else {
        menu.removeAttribute("data-nav-menu-open");
        menu.style.display = closedDisplay;
        if (overlay) { overlay.style.display = ""; overlay.classList.remove("w--open"); }
      }
      // The original locks the page behind the open menu.
      document.body.style.overflow = next ? "hidden" : "";
    };

    offs.push(on(button, "click", (e) => { e.preventDefault(); setOpen(!open); }));
    offs.push(on(button, "keydown", (e) => { if (e.key === "Enter" || e.key === " ") { e.preventDefault(); setOpen(!open); } }));
    offs.push(on(document, "keydown", (e) => { if (e.key === "Escape" && open) setOpen(false); }));
    // Following a link closes the menu; so does growing past the collapse width.
    offs.push(on(menu, "click", (e) => { if (open && e.target.closest("a")) setOpen(false); }));
    offs.push(on(window, "resize", () => { if (open && !collapsed(button)) setOpen(false); }));
    offs.push(() => { document.body.style.overflow = ""; });
  });
}

/* --------------------------------------------------------------- accordions */
// fs-accordion-* groups. The capture already encodes the initial state (the open item carries
// .is-active-accordion, closed content carries inline max-height:0/display:none), so that is read as
// the starting point instead of forcing item 0 open.
function initAccordions(root, offs) {
  const groups = [...root.querySelectorAll('[fs-accordion-element="group"]')];
  // An accordion outside any group still gets wired, on its own.
  const loose = [...root.querySelectorAll('[fs-accordion-element="accordion"]')].filter((a) => !a.closest('[fs-accordion-element="group"]'));
  const units = groups.map((g) => ({ group: g, items: [...g.querySelectorAll('[fs-accordion-element="accordion"]')] }));
  if (loose.length) units.push({ group: null, items: loose });

  units.forEach(({ group, items }) => {
    const single = group ? group.getAttribute("fs-accordion-single") === "true" : false;
    const api = [];

    items.forEach((item) => {
      const trigger = item.querySelector('[fs-accordion-element="trigger"]');
      const content = item.querySelector('[fs-accordion-element="content"]');
      if (!trigger || !content || !bind(item)) return;
      const arrow = item.querySelector('[fs-accordion-element="arrow"]');
      const rotateCls = (arrow && arrow.getAttribute("fs-accordion-active")) || "rotate";

      content.style.overflow = "hidden";
      content.style.transition = "max-height 400ms cubic-bezier(0.22, 1, 0.36, 1)";

      let open = item.classList.contains("is-active-accordion");
      const paint = (next, animate) => {
        open = next;
        item.classList.toggle("is-active-accordion", next);
        trigger.classList.toggle("is-active-accordion", next);
        content.classList.toggle("is-active-accordion", next);
        if (arrow) arrow.classList.toggle(rotateCls, next);
        trigger.setAttribute("aria-expanded", String(next));
        if (next) {
          content.style.display = "block";
          const target = content.scrollHeight;
          if (!animate) { content.style.maxHeight = "none"; return; }
          content.style.maxHeight = target + "px";
          // Release the cap once open so the panel can reflow with its content.
          setTimeout(() => { if (open) content.style.maxHeight = "none"; }, 420);
        } else {
          if (!animate) { content.style.maxHeight = "0px"; content.style.display = "none"; return; }
          content.style.maxHeight = content.scrollHeight + "px";
          requestAnimationFrame(() => { if (!open) content.style.maxHeight = "0px"; });
          setTimeout(() => { if (!open) content.style.display = "none"; }, 420);
        }
      };
      paint(open, false);
      const entry = { setOpen: (n) => paint(n, true), isOpen: () => open };
      api.push(entry);

      const toggle = (e) => {
        e.preventDefault();
        const next = !open;
        if (next && single) api.forEach((o) => { if (o !== entry && o.isOpen()) o.setOpen(false); });
        paint(next, true);
      };
      offs.push(on(trigger, "click", toggle));
      offs.push(on(trigger, "keydown", (e) => { if (e.key === "Enter" || e.key === " ") toggle(e); }));
    });
  });
}

/* ------------------------------------------------------------------ sliders */
// .swiper > .swiper-wrapper > .swiper-slide. Controls sit outside the container and are tied to it by
// aria-controls="<wrapper id>", with Previous/Next told apart by aria-label; bullets are generated into
// the paired .swiper-pagination* element, which the capture left empty.
function initSwipers(root, offs) {
  root.querySelectorAll(".swiper").forEach((sw) => {
    const wrapper = sw.querySelector(":scope > .swiper-wrapper");
    if (!wrapper || !bind(sw)) return;
    const slides = [...wrapper.children].filter((c) => c.classList.contains("swiper-slide"));
    if (slides.length < 2) return;

    // aria-controls="<wrapper id>" ties the arrows to this track unambiguously.
    const controls = wrapper.id ? [...document.querySelectorAll(`[aria-controls="${wrapper.id}"]`)] : [];
    const labelled = (re) => controls.find((c) => re.test(c.getAttribute("aria-label") || ""));
    const prev = labelled(/prev/i);
    const next = labelled(/next/i);
    // Pagination carries no such link, so climb from the arrows (or the track) to the nearest ancestor
    // holding one. Sibling carousels share a section, so claimed containers are skipped - otherwise two
    // tracks render their bullets into the same element and the second overwrites the first.
    const pagination = (() => {
      for (let node = prev || next || sw; node && node !== document.body; node = node.parentElement) {
        const hit = [...node.querySelectorAll('[class*="swiper-pagination"]')].find((p) => !p.dataset.ixPagFor);
        if (hit) { hit.dataset.ixPagFor = wrapper.id || "1"; return hit; }
      }
      return null;
    })();

    let i = 0;
    wrapper.style.transition = "transform 400ms cubic-bezier(0.22, 1, 0.36, 1)";
    wrapper.style.willChange = "transform";

    // How far the track can travel before its last slide is flush with the container's right edge.
    const maxShift = () => Math.max(0, wrapper.scrollWidth - sw.clientWidth);
    const shiftFor = (n) => Math.min(slides[n].offsetLeft - slides[0].offsetLeft, maxShift());
    // The last index that still scrolls the track, so paging stops at the true end.
    const lastIndex = () => { const m = maxShift(); for (let n = 0; n < slides.length; n++) if (shiftFor(n) >= m) return n; return slides.length - 1; };

    let bullets = [];
    if (pagination) {
      // Reuse the bullets the capture already contains - they carry the site's own element type and
      // classes, and replacing them with fresh nodes drops that styling. Only build them when the
      // container really is empty.
      const existing = [...pagination.children].filter((c) => c.classList.contains("swiper-pagination-bullet"));
      if (existing.length) {
        bullets = existing;
        bullets.forEach((b, n) => offs.push(on(b, "click", () => go(n))));
      } else {
        for (let n = 0; n <= lastIndex(); n++) {
          const b = document.createElement("span");
          b.className = "swiper-pagination-bullet";
          b.setAttribute("role", "button");
          b.setAttribute("tabindex", "0");
          b.setAttribute("aria-label", `Go to slide ${n + 1}`);
          offs.push(on(b, "click", () => go(n)));
          pagination.appendChild(b);
          bullets.push(b);
        }
        pagination.classList.add("swiper-pagination-bullets", "swiper-pagination-clickable", "swiper-pagination-horizontal");
      }
    }

    // The testimonials block pairs this track with a thumbnail nav and an "n/m" counter, both of which
    // sit outside .swiper and are inert on their own.
    const component = sw.closest('[data-swiper="testimonials"]');
    const fraction = component?.querySelector('[data-swiper="pagination-fraction"]');
    const thumbSlides = component && sw.matches('[data-swiper="slider"]')
      ? [...(component.querySelector('[data-swiper="thumbs"] > .swiper-wrapper')?.children || [])]
      : [];
    thumbSlides.forEach((t, n) => {
      offs.push(on(t, "click", (e) => { e.preventDefault(); go(n); }));
      offs.push(on(t, "keydown", (e) => { if (e.key === "Enter" || e.key === " ") { e.preventDefault(); go(n); } }));
    });

    function paint() {
      wrapper.style.transform = `translate3d(${-shiftFor(i)}px, 0px, 0px)`;
      const last = lastIndex();
      slides.forEach((s, n) => s.classList.toggle("swiper-slide-active", n === i));
      bullets.forEach((b, n) => {
        const on_ = n === i;
        b.classList.toggle("swiper-pagination-bullet-active", on_);
        b.setAttribute("aria-current", String(on_));
      });
      thumbSlides.forEach((t, n) => {
        t.classList.toggle("swiper-slide-thumb-active", n === i);
        t.classList.toggle("swiper-slide-active", n === i);
      });
      if (fraction) {
        // Keep whatever element actually holds the text; the wrapper repeats the same class.
        const label = `${i + 1}/${lastIndex() + 1}`;
        const leaf = fraction.querySelector("*") || fraction;
        if (leaf.textContent.trim() !== label) leaf.textContent = label;
      }
      [[prev, i <= 0], [next, i >= last]].forEach(([btn, disabled]) => {
        if (!btn) return;
        btn.classList.toggle("swiper-button-disabled", disabled);
        btn.setAttribute("aria-disabled", String(disabled));
      });
    }
    function go(n) { i = Math.max(0, Math.min(n, lastIndex())); paint(); }

    if (prev) { offs.push(on(prev, "click", (e) => { e.preventDefault(); go(i - 1); })); offs.push(on(prev, "keydown", (e) => { if (e.key === "Enter" || e.key === " ") { e.preventDefault(); go(i - 1); } })); }
    if (next) { offs.push(on(next, "click", (e) => { e.preventDefault(); go(i + 1); })); offs.push(on(next, "keydown", (e) => { if (e.key === "Enter" || e.key === " ") { e.preventDefault(); go(i + 1); } })); }

    // Pointer/touch drag, so the carousels work the way they do on the original on a phone.
    let startX = 0, startShift = 0, dragging = false;
    offs.push(on(wrapper, "pointerdown", (e) => {
      if (e.pointerType === "mouse" && e.button !== 0) return;
      dragging = true; startX = e.clientX; startShift = shiftFor(i);
      wrapper.style.transition = "none";
    }));
    offs.push(on(wrapper, "pointermove", (e) => {
      if (!dragging) return;
      const x = Math.max(0, Math.min(startShift - (e.clientX - startX), maxShift()));
      wrapper.style.transform = `translate3d(${-x}px, 0px, 0px)`;
    }));
    const endDrag = (e) => {
      if (!dragging) return;
      dragging = false;
      wrapper.style.transition = "transform 400ms cubic-bezier(0.22, 1, 0.36, 1)";
      const dx = (e.clientX ?? startX) - startX;
      if (Math.abs(dx) > 40) go(i + (dx < 0 ? 1 : -1)); else paint();
    };
    offs.push(on(wrapper, "pointerup", endDrag));
    offs.push(on(wrapper, "pointercancel", endDrag));
    offs.push(on(wrapper, "dragstart", (e) => e.preventDefault()));

    // Slide widths are responsive, so re-measure and stay in bounds.
    offs.push(on(window, "resize", () => go(i)));
    paint();
  });
}

/* ------------------------------------------------------------------- public */
export default function initInteractions(root = document) {
  const offs = [];
  try {
    initDropdowns(root, offs);
    initNav(root, offs);
    initAccordions(root, offs);
    initSwipers(root, offs);
  } catch (err) {
    // A failure in one widget must not take the page down with it.
    if (typeof console !== "undefined") console.error("[interactions]", err);
  }
  return () => offs.forEach((off) => { try { off(); } catch {} });
}
