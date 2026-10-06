import { useEffect } from "react";
import initInteractions from "./interactions.js";
import initLottie from "./lottie.js";

// Per-route <title>, <html> and <body> attributes as they were on the original page after its scripts ran.
export default function usePageChrome({ title, html = {}, body = {} }) {
  useEffect(() => {
    document.title = title;
    const apply = (el, attrs) => { for (const [k, v] of Object.entries(attrs)) el.setAttribute(k, v); };
    apply(document.documentElement, html);
    apply(document.body, body);
    const els = Array.from(document.querySelectorAll("[data-reveal]"));
    document.documentElement.classList.add("reveal-ready");
    if (!("IntersectionObserver" in window)) { els.forEach((e) => e.classList.add("is-in")); return; }
    // Sub-elements of an <svg> are revealed immediately: the observer fires unreliably for them and a
    // miss would leave part of an illustration invisible for good (clone.css also un-gates them).
    const observable = [];
    els.forEach((e) => { if (e.ownerSVGElement) e.classList.add("is-in"); else observable.push(e); });
    const io = new IntersectionObserver((entries) => entries.forEach((en) => { if (en.isIntersecting) { en.target.classList.add("is-in"); io.unobserve(en.target); } }), { rootMargin: "0px 0px -8% 0px", threshold: 0.05 });
    observable.forEach((e) => io.observe(e));
    // Fail-safe: a zero-area, clipped or never-scrolled-past target never intersects, so reveal whatever
    // is still hidden once the page has settled rather than leaving it permanently at opacity 0.
    const sweep = window.setTimeout(() => {
      observable.forEach((e) => { if (!e.classList.contains("is-in")) { e.classList.add("is-in"); io.unobserve(e); } });
    }, 3000);
    // Widget behaviour (dropdowns, mobile nav, accordions, carousels): the crawl kept their markup but
    // dropped the scripts that drove them.
    const teardownInteractions = initInteractions(document);
    // Lottie animations: their JSON is in public/, but both runtimes that played it were dropped.
    const teardownLottie = initLottie(document);
    return () => { window.clearTimeout(sweep); io.disconnect(); teardownInteractions(); teardownLottie(); };
  }, [title]);
}
