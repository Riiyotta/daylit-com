// IA section(s): content.csr-band (ia/ia.json, design-repo/sections/)
// csr-band — the section's real markup, read from the rendered page (route /case-study/maintera, section 2).
export default function CsrBand2() {
  return (
    <section className="csr-band" data-clone-section="CsrBand2">
      <div className="csr-inner csr-band-inner">
        <div className="csr-band-quote">
          <p className="csr-band-quote-text">Maintera runs 200 invoices a day and $11–15M in monthly receivables, and had never run a formal collections process. Weeks after going live on Daylit, they reached ~80% current AR and a 45% AI-drafted reply rate.</p>
          <div className="csr-band-author">
            <div className="csr-band-avatar">
              <img src="/_ext/cdn.prod.website-files.com/68ae872ea1f1fc625315711a/6a4ec264650604800c2f7931_6a4ec232eb124dfdc15427e1_csr-aaron-lynch-avatar.png" loading="lazy" alt="Aaron Lynch" className="csr-band-img" />
            </div>
            <div className="csr-band-author-meta">
              <p className="csr-band-name">Aaron Lynch</p>
              <p className="csr-band-title">Director of Finance, Maintera</p>
            </div>
          </div>
        </div>
        <div className="csr-band-stats">
          <div className="csr-stat is-dawn">
            <p className="csr-stat-num csr-bs1v">~80%</p>
            <p className="csr-stat-label csr-bs1l">Current AR reached at Maintera</p>
          </div>
          <div className="csr-stat">
            <p className="csr-stat-num csr-bs2v">45%</p>
            <p className="csr-stat-label csr-bs2l">AI-drafted reply rate, vs. a 10–12% industry average</p>
          </div>
          <div className="csr-stat">
            <p className="csr-stat-num csr-bs3v">21.7%</p>
            <p className="csr-stat-label csr-bs3l">Fully automated reply rate, no human touch</p>
          </div>
        </div>
      </div>
    </section>
  );
}
