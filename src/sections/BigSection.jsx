import A from "../lib/A.jsx";

// big-section — the section's real markup, read from the rendered page (route /intelligence, section 6).
export default function BigSection() {
  return (
    <div className="big-section" data-clone-section="BigSection">
      <div className="w-layout-blockcontainer container-large w-container">
        <div className="impact_layout">
          <div id="w-node-fa30ff06-b6cb-b16f-f41b-de85e3e97a3e-e3e97a3b" className="w-layout-vflex why_top-wrap">
            <div data-wf--slot-item-eyebrow-main--color="primary" className="eyebrow">
              <div className="eyebrow-dot"></div>
              <div className="eyebrow-text">OUR PRODUCT</div>
            </div>
            <div className="spacer-medium"></div>
            <h2>Enterprise grade. Onboarded in days.</h2>
            <div className="spacer-small"></div>
            <div className="w-layout-vflex max-width-large text-wrap-balance">
              <p className="u-is-100">Find out how our customers are live within 48 hours of kickoff with our lightening fast connections into most cloud ERP platofrms.</p>
            </div>
            <div className="w-layout-vflex">
              <div className="spacer-xlarge"></div>
              <div data-wf--slot-item-button-main--style="primary-plus" data-button=" main" className="button_main_wrap">
                <div className="clickable_wrap u-cover-absolute">
                  <A target="" href="/learn-more/demo" className="clickable_link w-inline-block">
                    <span className="clickable_text u-sr-only">Button</span>
                  </A>
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
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
