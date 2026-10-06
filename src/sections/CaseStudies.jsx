// IA section(s): proof.case-studies (ia/ia.json, design-repo/sections/)
// case-studies — the section's real markup, read from the rendered page (route /case-studies, section 4).
export default function CaseStudies() {
  return (
    <div id="case-studies" className="cs-cases-head" data-clone-section="CaseStudies">
      <div className="cs-cases-head-inner">
        <div className="cs-pill">
          <span className="cs-pill-dot"></span>
          <span>Case studies</span>
        </div>
        <h2 className="cs-cases-title">Case Studies</h2>
        <p className="cs-cases-sub">{"Real results from teams using Daylit's AI agents for accounts receivable — see how they get paid faster, cut A/R costs, and free up their finance teams."}</p>
      </div>
      <div className="cs-filter">
        <div data-cs-filter="all" className="cs-filter-btn cs-filter-active">View all</div>
        <div data-cs-filter="Facility Management" className="cs-filter-btn">Facility Management</div>
        <div data-cs-filter="Staffing" className="cs-filter-btn">Staffing</div>
        <div data-cs-filter="Manufacturing" className="cs-filter-btn" style={{ "display": "none" }}>Manufacturing</div>
        <div data-cs-filter="Wholesale" className="cs-filter-btn" style={{ "display": "none" }}>Wholesale</div>
        <div data-cs-filter="Field Services" className="cs-filter-btn">Field Services</div>
      </div>
    </div>
  );
}
