// Lottie playback. The crawl saved every animation's JSON under public/ and kept the elements that
// referenced them, but dropped both runtimes that drove them, so each one arrived motionless:
//
//   [data-animation-type="lottie"]  Webflow's own element. Its runtime is gone, so what remains is the
//                                   single rendered SVG frame the crawler happened to capture.
//   <lottie-player>                 A web component. Its script is gone, so the tag never upgrades and
//                                   lays out at 0x0 - the animation is absent rather than frozen.
//
// Both are mounted here with lottie-web, reading the options back off the attributes already in the
// markup. The player is imported lazily and only once a target scrolls near the viewport, so a route
// with no animation never pays for it.

const NEAR_VIEWPORT = "200px 0px";

let playerPromise = null;
const loadPlayer = () => (playerPromise ||= import("lottie-web").then((m) => m.default || m));

const reducedMotion = () => window.matchMedia("(prefers-reduced-motion: reduce)").matches;

// Every target, normalised to the options lottie-web wants.
function collect(root) {
  const out = [];

  root.querySelectorAll('[data-animation-type="lottie"][data-src]').forEach((el) => {
    out.push({
      el,
      path: el.getAttribute("data-src"),
      loop: el.getAttribute("data-loop") === "1",
      autoplay: el.getAttribute("data-autoplay") === "1",
      direction: el.getAttribute("data-direction") === "-1" ? -1 : 1,
      renderer: el.getAttribute("data-renderer") === "canvas" ? "canvas" : "svg",
      speed: 1,
      // Replace the captured still: it is a frame of the animation about to mount in its place.
      clear: true,
    });
  });

  root.querySelectorAll("lottie-player[src]").forEach((el) => {
    out.push({
      el,
      path: el.getAttribute("src"),
      // The real component loops only when the attribute is present, so the markup is honoured as-is.
      loop: el.hasAttribute("loop"),
      autoplay: el.getAttribute("autoplay") !== "false" && el.hasAttribute("autoplay"),
      direction: 1,
      renderer: "svg",
      speed: parseFloat(el.getAttribute("speed") || "1") || 1,
      clear: false,
      // An unknown tag is inline and collapses; the class's own width/height need a block box.
      block: true,
    });
  });

  return out.filter((t) => t.path && !t.el.dataset.ixLottie);
}

export default function initLottie(root = document) {
  let targets;
  try { targets = collect(root); } catch { return () => {}; }
  if (!targets.length) return () => {};

  const anims = [];
  let io = null;
  let dead = false;

  // Before observing: an empty <lottie-player> is an inline unknown tag, and its class supplies only
  // max-width/max-height at desktop, so it measures 0x0 - and a zero-area box never intersects, which
  // would leave it unmounted for good. Give it a block box up front so it can be seen.
  targets.forEach((t) => { if (t.block) t.el.style.display = "block"; });

  const mount = (t) => {
    if (dead || t.el.dataset.ixLottie) return;
    t.el.dataset.ixLottie = "1";

    loadPlayer().then((lottie) => {
      if (dead) return;
      // The frozen frame is removed only now, so the artwork never blinks out if the player fails.
      if (t.clear) t.el.replaceChildren();
      let anim;
      try {
        anim = lottie.loadAnimation({
          container: t.el,
          renderer: t.renderer,
          loop: t.loop,
          // Never autoplay on mount. A target can mount while off screen (the fail-safe below, or the
          // 200px pre-roll margin), and a play-once animation would then run to its end unseen and sit
          // on its last frame - which is exactly how these looked motionless. Playback starts on first
          // view instead, handled by the visibility observer.
          autoplay: false,
          path: t.path,
        });
      } catch (err) {
        console.error("[lottie] mount failed", t.path, err);
        return;
      }
      anims.push(anim);
      anim.setSpeed(t.speed);
      if (t.direction === -1) anim.setDirection(-1);
      anim.addEventListener("DOMLoaded", () => {
        // Still collapsed once mounted: nothing in the CSS gives this element a height, so take the
        // ratio from the animation's own canvas and let max-width decide the rest.
        if (t.el.getBoundingClientRect().height < 1) {
          const { w, h } = anim.animationData || {};
          if (w && h) { t.el.style.width = "100%"; t.el.style.aspectRatio = `${w} / ${h}`; }
        }
        if (reducedMotion()) { anim.goToAndStop(0, true); return; } // artwork shown, held on frame 0
        // The JSON loads asynchronously, so the visibility observer may already have reported this
        // element before there was an animation to start - and it gets no second callback without
        // another intersection change. Start it here if it is on screen already.
        const r = t.el.getBoundingClientRect();
        if (t.autoplay && !t.started && r.top < window.innerHeight && r.bottom > 0) {
          t.started = true;
          anim.goToAndPlay(0, true);
        }
      });
      if (dead) anim.destroy();
    }).catch((err) => console.error("[lottie] player unavailable", err));
  };

  if (!("IntersectionObserver" in window)) {
    targets.forEach(mount);
  } else {
    io = new IntersectionObserver((entries) => {
      entries.forEach((en) => {
        if (!en.isIntersecting) return;
        io.unobserve(en.target);
        const t = targets.find((x) => x.el === en.target);
        if (t) mount(t);
      });
    }, { rootMargin: NEAR_VIEWPORT });
    targets.forEach((t) => io.observe(t.el));
  }

  // Fail-safe, for the same reason the reveal observer has one: a clipped, translated or still-collapsed
  // target may never report an intersection, and a lottie container holds the only artwork in its slot,
  // so an unmounted one is a visibly empty box. Mount whatever is left once the page has settled.
  const sweep = window.setTimeout(() => {
    if (!dead) targets.forEach((t) => { if (!t.el.dataset.ixLottie) mount(t); });
  }, 2500);

  // Ten looping animations on one page is a lot of main thread, so only what is on screen runs.
  let visIo = null;
  if ("IntersectionObserver" in window) {
    visIo = new IntersectionObserver((entries) => {
      entries.forEach((en) => {
        const t = targets.find((x) => x.el === en.target);
        if (!t || !t.el.dataset.ixLottie || reducedMotion()) return;
        const anim = anims.find((a) => a.wrapper === t.el);
        if (!anim || !t.autoplay) return;
        if (!en.isIntersecting) { anim.pause(); return; }
        // First time on screen, play from the top; a play-once animation gets its one run where it can
        // actually be seen. Afterwards, resume whatever frame it was paused on.
        if (t.started) anim.play();
        else { t.started = true; anim.goToAndPlay(0, true); }
      });
    }, { threshold: 0 });
    targets.forEach((t) => visIo.observe(t.el));
  }

  return () => {
    dead = true;
    window.clearTimeout(sweep);
    if (io) io.disconnect();
    if (visIo) visIo.disconnect();
    anims.forEach((a) => { try { a.destroy(); } catch {} });
  };
}
