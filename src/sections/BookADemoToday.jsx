import A from "../lib/A.jsx";

// Book a demo today to unlock ma — the section's real markup, read from the rendered page (route /, section 8).
export default function BookADemoToday() {
  return (
    <section className="section_cta-banner" data-clone-section="BookADemoToday">
      <div className="big-section is-cta">
        <div data-texture="true" className="cta-banner_wrap">
          <div className="home_cta-wrap">
            <h2 className="home_cta-title">Book a demo today to unlock massive savings in your finance department with Daylit</h2>
            <div>
              <p className="home_cta-text">One easy to set up platform to make sure every invoice is paid on time.</p>
            </div>
          </div>
          <div>
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
                <div aria-hidden="true" className="button_main_text">Book a demo</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
