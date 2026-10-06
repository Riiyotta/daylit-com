// IA section(s): hero.csr-hero (ia/ia.json, design-repo/sections/)
// csr-hero — the section's real markup, read from the rendered page (route /case-study/uptime-health-services, section 1).
export default function CsrHero() {
  return (
    <section className="csr-hero" data-clone-section="CsrHero">
      <div className="csr-hero-tex"></div>
      <div className="csr-inner csr-hero-inner">
        <div className="csr-eyebrow">
          <p className="csr-eyebrow-pre">Customer story ·</p>
          <p className="csr-eyebrow-sector">Field Services</p>
        </div>
        <h1 className="csr-hero-h1" data-csr-hl="1">
          {"Nearly "}
          <span className="hl">50% more current AR</span>
          , without a single new hire.
        </h1>
        <p className="csr-hero-sub">{"How Uptime Health Services runs high-volume collections across nearly a dozen business units with a team of one, by putting Daylit's autonomous AI agents to work inside their AR inbox."}</p>
        <img src="/_ext/cdn.prod.website-files.com/68abd7e02c174baf0a9c5df1/6a4d5cf6658182960e08723e_csr-hero-starburst.svg" loading="lazy" alt="" className="csr-hero-star" />
      </div>
    </section>
  );
}
