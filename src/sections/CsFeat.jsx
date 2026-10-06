// IA section(s): content.cs-feat (ia/ia.json, design-repo/sections/)
import A from "../lib/A.jsx";

// cs-feat — the section's real markup, read from the rendered page (route /case-studies, section 7).
export default function CsFeat() {
  return (
    <section className="cs-feat" data-clone-section="CsFeat">
      <div className="cs-feat-card">
        <div className="cs-feat-content">
          <h3 className="cs-feat-title">Ready to get paid faster?</h3>
          <p className="cs-feat-body">{"See how Daylit's AI agents for accounts receivable help teams collect faster, forecast cash with confidence, and unlock working capital."}</p>
        </div>
        <div className="cs-feat-actions">
          <div data-wf--slot-item-button-main--style="primary-plus" data-button=" main" className="button_main_wrap">
            <div className="clickable_wrap u-cover-absolute">
              <a target="" className="clickable_link w-inline-block">
                <span className="clickable_text u-sr-only">Button</span>
              </a>
              <button type="link" className="clickable_btn">
                <span className="clickable_text u-sr-only">Button</span>
              </button>
            </div>
            <div data-button="main-content" className="w-layout-vflex button_main_content-wrap">
              <div aria-hidden="true" className="button_main_text">Book a Demo</div>
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
          <A href="/case-studies" aria-current="page" className="cs-feat-btn-outline w--current">View all case studies</A>
        </div>
      </div>
    </section>
  );
}
