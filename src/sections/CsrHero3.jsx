// IA section(s): hero.csr-hero (ia/ia.json, design-repo/sections/)
// csr-hero — the section's real markup, read from the rendered page (route /case-study/clipboard-health, section 1).
export default function CsrHero3() {
  return (
    <section className="csr-hero" data-clone-section="CsrHero3">
      <div className="csr-hero-tex"></div>
      <div className="csr-inner csr-hero-inner">
        <div className="csr-eyebrow">
          <p className="csr-eyebrow-pre">Customer story ·</p>
          <p className="csr-eyebrow-sector">Staffing</p>
        </div>
        <h1 className="csr-hero-h1" data-csr-hl="1">
          {"Autonomous collections at "}
          <span className="hl">marketplace scale.</span>
        </h1>
        <p className="csr-hero-sub">How Clipboard Health took the manual work out of collections across 5,000+ facility accounts, cutting manual effort by more than 65% while moving collections 10% faster.</p>
        <img src="/_ext/cdn.prod.website-files.com/68abd7e02c174baf0a9c5df1/6a4d5cf6658182960e08723e_csr-hero-starburst.svg" loading="lazy" alt="" className="csr-hero-star" />
      </div>
    </section>
  );
}
