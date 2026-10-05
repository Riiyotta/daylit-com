// csr-band — the section's real markup, read from the rendered page (route /case-study/uptime-health-services, section 2).
export default function CsrBand() {
  return (
    <section className="csr-band" data-clone-section="CsrBand">
      <div className="csr-inner csr-band-inner">
        <div className="csr-band-quote">
          <p className="csr-band-quote-text">{"Uptime Health Services grew through acquisition into nearly a dozen business units on NetSuite, with collections handled by a team of essentially one. With Daylit's autonomous agents working inside their AR inbox, they improved AR by 50%, without hiring a single collector."}</p>
          <div className="csr-band-author">
            <div className="csr-band-avatar">
              <img src="/_ext/cdn.prod.website-files.com/68ae872ea1f1fc625315711a/6a4ed5d3212c88a97c9c2597_6a4ed58e212c88a97c9bec5c_csr-patrick-mcclain-avatar.png" loading="lazy" alt="Aaron Lynch" className="csr-band-img" />
            </div>
            <div className="csr-band-author-meta">
              <p className="csr-band-name">Patrick McClain</p>
              <p className="csr-band-title">CFO, Uptime Health Services</p>
            </div>
          </div>
        </div>
        <div className="csr-band-stats">
          <div className="csr-stat is-dawn">
            <p className="csr-stat-num csr-bs1v">50%</p>
            <p className="csr-stat-label csr-bs1l">Improvement in AR, same lean team</p>
          </div>
          <div className="csr-stat">
            <p className="csr-stat-num csr-bs2v">0</p>
            <p className="csr-stat-label csr-bs2l">Additional collectors hired</p>
          </div>
          <div className="csr-stat">
            <p className="csr-stat-num csr-bs3v">~12</p>
            <p className="csr-stat-label csr-bs3l">Business units running on one operation</p>
          </div>
        </div>
      </div>
    </section>
  );
}
