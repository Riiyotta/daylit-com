// IA section(s): hero.section-cta-banner (ia/ia.json, design-repo/sections/)
import A from "../lib/A.jsx";

// Want to see how DrawDown works — the section's real markup, read from the rendered page (route /product/drawdown, section 6).
export default function WantToSeeHow4() {
  return (
    <section data-wf--build-section-cta-banner--style-color="dark" className="section_cta-banner" data-clone-section="WantToSeeHow4">
      <div data-wf--utility-spacer-section--padding="none" className="padding-section-wrap">
        <div className="padding-top w-variant-37e52f42-4f6a-8752-ba2f-a689615f4a26"></div>
      </div>
      <div className="big-section">
        <div className="w-layout-blockcontainer container-large w-container">
          <div data-texture="true" className="cta-banner_layout">
            <div className="max-width-large">
              <h2 className="heading-style-h4">Want to see how DrawDown works?</h2>
            </div>
            <div className="cta-banner_btn-wrap">
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
                  <div aria-hidden="true" className="button_main_text">Book a meeting</div>
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
      <div data-wf--utility-spacer-section--padding="small" className="padding-section-wrap">
        <div className="padding-top w-variant-be9514d5-b59a-26cd-e5bf-b06f381984af"></div>
      </div>
    </section>
  );
}
