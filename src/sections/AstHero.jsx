// ast-hero — the section's real markup, read from the rendered page (route /ai-skills, section 1).
export default function AstHero() {
  return (
    <section className="ast-hero" data-clone-section="AstHero">
      <div className="ast-hero__inner">
        <div data-wf--slot-item-eyebrow-main--color="primary" className="eyebrow">
          <div className="eyebrow-dot"></div>
          <div className="eyebrow-text">AI Skills Training</div>
        </div>
        <h1 className="ast-hero__title">
          {"Build your finance stack. "}
          <br />
          On your terms.
        </h1>
        <p className="ast-hero__sub">The most powerful finance leaders of today and tomorrow build their own finance stack instead of paying six figures for it. Our free weekly program is built for finance and accounting professionals who are ready to learn how to do it.</p>
        <div data-wf--slot-item-button-main--style="primary-plus" data-button=" main" className="button_main_wrap">
          <div className="clickable_wrap u-cover-absolute">
            <a target="" href="#formhubspot" className="clickable_link w-inline-block">
              <span className="clickable_text u-sr-only">Button</span>
            </a>
            <button type="link" className="clickable_btn">
              <span className="clickable_text u-sr-only">Button</span>
            </button>
          </div>
          <div data-button="main-content" className="w-layout-vflex button_main_content-wrap">
            <div aria-hidden="true" className="button_main_text">Subscribe</div>
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
    </section>
  );
}
