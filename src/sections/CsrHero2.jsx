// IA section(s): hero.csr-hero (ia/ia.json, design-repo/sections/)
// csr-hero — the section's real markup, read from the rendered page (route /case-study/maintera, section 1).
export default function CsrHero2() {
  return (
    <section className="csr-hero" data-clone-section="CsrHero2">
      <div className="csr-hero-tex"></div>
      <div className="csr-inner csr-hero-inner">
        <div className="csr-eyebrow">
          <p className="csr-eyebrow-pre">Customer story ·</p>
          <p className="csr-eyebrow-sector">Facility Management</p>
        </div>
        <h1 className="csr-hero-h1" data-csr-hl="1">
          {"From zero collections process to "}
          <span className="hl">80% current AR.</span>
        </h1>
        <p className="csr-hero-sub">How Maintera built a fully structured collections automation program across two companies, within weeks of going live on Daylit.</p>
        <img src="/_ext/cdn.prod.website-files.com/68abd7e02c174baf0a9c5df1/6a4d5cf6658182960e08723e_csr-hero-starburst.svg" loading="lazy" alt="" className="csr-hero-star" />
      </div>
    </section>
  );
}
