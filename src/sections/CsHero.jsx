// IA section(s): hero.cs-hero (ia/ia.json, design-repo/sections/)
// cs-hero — the section's real markup, read from the rendered page (route /case-studies, section 1).
export default function CsHero() {
  return (
    <section className="cs-hero" data-clone-section="CsHero">
      <div className="cs-hero-inner">
        <div className="cs-hero-copy">
          <div className="cs-hero-head">
            <div className="cs-pill">
              <span className="cs-pill-dot"></span>
              <span>Customer Stories</span>
            </div>
            <h1 className="cs-hero-title">Real results from teams running collections on autopilot</h1>
            <p className="cs-hero-body">{"Maintera, Clipboard Health, and Uptime Health Services use Daylit's AI agents for A/R to get paid faster, cut manual work, and stay close to cash flow. Read how they got there."}</p>
          </div>
          <div data-wf--slot-item-button-main--style="primary-plus" data-button=" main" className="button_main_wrap">
            <div className="clickable_wrap u-cover-absolute">
              <a target="" href="#case-studies" className="clickable_link w-inline-block">
                <span className="clickable_text u-sr-only">Button</span>
              </a>
              <button type="link" className="clickable_btn">
                <span className="clickable_text u-sr-only">Button</span>
              </button>
            </div>
            <div data-button="main-content" className="w-layout-vflex button_main_content-wrap">
              <div aria-hidden="true" className="button_main_text">See Case Studies</div>
              <div className="w-layout-vflex button-main-icon-list">
                <div className="w-layout-vflex button-main-icon-wrap">
                  <div className="button-main-icon w-embed">
                    <svg xmlns="http://www.w3.org/2000/svg" width="100%" height="100%" viewBox="0 0 14 14" fill="none" preserveAspectRatio="xMidYMid meet" aria-hidden="true" role="img">
                      <circle cx="7" cy="2.05031" r="1.16667" transform="rotate(45 7 2.05031)" fill="currentColor" />
                      <circle cx="2.05078" cy="6.99855" r="1.16667" transform="rotate(45 2.05078 6.99855)" fill="currentColor" />
                      <circle cx="11.9492" cy="7.00148" r="1.16667" transform="rotate(45 11.9492 7.00148)" fill="currentColor" />
                      <circle cx="7" cy="11.9497" r="1.16667" transform="rotate(45 7 11.9497)" fill="currentColor" />
                      <circle cx="7" cy="7.00001" r="1.16667" transform="rotate(45 7 7.00001)" fill="currentColor" />
                    </svg>
                  </div>
                </div>
                <div className="button-arrow-dots w-embed">
                  <svg xmlns="http://www.w3.org/2000/svg" width="100%" height="100%" viewBox="0 0 11 14" fill="none" preserveAspectRatio="xMidYMid meet" aria-hidden="true" role="img">
                    <circle cx="3.66927" cy="3.99984" r="1.33333" fill="currentColor" />
                    <circle cx="3.66927" cy="11.9998" r="1.33333" fill="currentColor" />
                    <circle cx="7.66927" cy="7.99984" r="1.33333" fill="currentColor" />
                  </svg>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="cs-quote">
          <div className="cs-quote-text">“Daylit has been transformative for us.”</div>
          <div className="cs-quote-author">
            <div className="cs-quote-avatar">
              <imgraw data-raw-src="/_ext/cdn.prod.website-files.com/68abd7e02c174baf0a9c5df1/6a4ec232eb124dfdc15427e1_csr-aaron-lynch-avatar.png" alt="Aaron Lynch"></imgraw>
              <img src="/_ext/cdn.prod.website-files.com/68abd7e02c174baf0a9c5df1/6a4ec232eb124dfdc15427e1_csr-aaron-lynch-avatar.png" loading="lazy" sizes="(max-width: 692px) 100vw, 692px" srcSet="/_ext/cdn.prod.website-files.com/68abd7e02c174baf0a9c5df1/6a4ec232eb124dfdc15427e1_csr-aaron-lynch-avatar-p-500.png 500w, /_ext/cdn.prod.website-files.com/68abd7e02c174baf0a9c5df1/6a4ec232eb124dfdc15427e1_csr-aaron-lynch-avatar.png 692w" alt="Aaron Lynch, VP, Finance at Maintera" className="cs-quote-avatar-img" />
            </div>
            <div className="cs-quote-name">Aaron Lynch, VP, Finance at Maintera</div>
          </div>
        </div>
      </div>
    </section>
  );
}
