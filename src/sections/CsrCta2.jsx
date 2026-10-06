// IA section(s): cta.csr-cta (ia/ia.json, design-repo/sections/)
import A from "../lib/A.jsx";

// csr-cta — the section's real markup, read from the rendered page (route /case-study/maintera, section 4).
export default function CsrCta2() {
  return (
    <section className="csr-cta" data-clone-section="CsrCta2">
      <div className="csr-cta-inner">
        <p className="csr-cta-eyebrow">More customer stories</p>
        <h2 className="csr-cta-h">See how finance teams stay close to cash flow.</h2>
        <p className="csr-cta-sub" data-csr-nm="1">Maintera is one of many teams running collections on autopilot with Daylit. Read how others got there.</p>
        <div className="csr-cta-btns">
          <A href="/case-studies" className="csr-btn-primary">Read more customer stories</A>
          <a className="csr-btn-ghost">Book a demo</a>
        </div>
      </div>
    </section>
  );
}
