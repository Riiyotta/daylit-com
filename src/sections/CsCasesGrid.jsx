import A from "../lib/A.jsx";

// cs-cases-grid — the section's real markup, read from the rendered page (route /case-studies, section 5).
export default function CsCasesGrid() {
  return (
    <div role="list" className="cs-cases-grid w-dyn-items" data-clone-section="CsCasesGrid">
      <div role="listitem" className="w-dyn-item">
        <A data-industry="Field Services" href="/case-study/uptime-health-services" className="cs-card w-inline-block">
          <div className="cs-card-media">
            <img src="/_ext/cdn.prod.website-files.com/68ae872ea1f1fc625315711a/6a4ed5d3212c88a97c9c258b_6a4ed58e212c88a97c9bec5c_csr-patrick-mcclain-avatar.png" loading="lazy" alt="" className="cs-card-logo" />
          </div>
          <div className="cs-card-content">
            <div className="cs-card-meta">
              <div className="cs-card-readtime">
                <span className="cs-card-clock"></span>
                <div>5</div>
                <span>minutes read</span>
              </div>
              <div className="cs-card-cat">Field Services</div>
            </div>
            <div className="cs-card-title">Uptime Health Services</div>
            <div className="cs-card-snippet">{"How Uptime Health Services runs high-volume collections across nearly a dozen business units with a team of one, by putting Daylit's autonomous AI agents to work inside their AR inbox."}</div>
            <div className="cs-card-more">
              <span>View more</span>
              <span className="cs-card-chevron">›</span>
            </div>
          </div>
        </A>
      </div>
      <div role="listitem" className="w-dyn-item">
        <A data-industry="Staffing" href="/case-study/clipboard-health" className="cs-card w-inline-block">
          <div className="cs-card-media">
            <img src="/_ext/cdn.prod.website-files.com/68ae872ea1f1fc625315711a/6a4ed5d3212c88a97c9c2594_6a4ed58e056694531e0c11d2_csr-charlie-eikenberg-avatar.png" loading="lazy" alt="" className="cs-card-logo" />
          </div>
          <div className="cs-card-content">
            <div className="cs-card-meta">
              <div className="cs-card-readtime">
                <span className="cs-card-clock"></span>
                <div>5</div>
                <span>minutes read</span>
              </div>
              <div className="cs-card-cat">Staffing</div>
            </div>
            <div className="cs-card-title">Clipboard Health</div>
            <div className="cs-card-snippet">How Clipboard Health took the manual work out of collections across 5,000+ facility accounts, cutting manual effort by more than 65% while moving collections 10% faster.</div>
            <div className="cs-card-more">
              <span>View more</span>
              <span className="cs-card-chevron">›</span>
            </div>
          </div>
        </A>
      </div>
      <div role="listitem" className="w-dyn-item">
        <A data-industry="Facility Management" href="/case-study/maintera" className="cs-card w-inline-block">
          <div className="cs-card-media">
            <img src="/_ext/cdn.prod.website-files.com/68ae872ea1f1fc625315711a/6a47e386f5a06f65fbbf32bd_6a47e2f4bff990d8ef0d76e4_maintera-hero.jpeg" loading="lazy" alt="Maintera team member" className="cs-card-logo" />
          </div>
          <div className="cs-card-content">
            <div className="cs-card-meta">
              <div className="cs-card-readtime">
                <span className="cs-card-clock"></span>
                <div>4</div>
                <span>minutes read</span>
              </div>
              <div className="cs-card-cat">Facility Management</div>
            </div>
            <div className="cs-card-title">Maintera</div>
            <div className="cs-card-snippet">How Maintera built a fully structured collections automation program across two companies, within weeks of going live on Daylit.</div>
            <div className="cs-card-more">
              <span>View more</span>
              <span className="cs-card-chevron">›</span>
            </div>
          </div>
        </A>
      </div>
    </div>
  );
}
