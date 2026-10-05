import A from "../lib/A.jsx";

// ast-detail — the section's real markup, read from the rendered page (route /ai-skills-training/welcome-to-the-ai-survival-guide, section 1).
export default function AstDetail2() {
  return (
    <section className="ast-detail" data-clone-section="AstDetail2">
      <div className="ast-detail__inner">
        <a className="ast-detail__back w-inline-block">
          <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" className="ast-detail__back-icon ast-detail__back-icon">
            <path d="M15 18l-6-6 6-6" stroke="#4d1520" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
          </svg>
          <span className="text-span">AI Skills Training</span>
        </a>
        <div id="ast-detail-video" className="ast-detail__video">
          <div style={{ "paddingTop": "56.20608899297424%" }} className="video w-video w-embed">
            <div data-removed="iframe" style={{ "width": "1320px", "height": "742px" }}></div>
          </div>
        </div>
        <div className="ast-detail__meta">2 minutes</div>
        <div className="ast-detail__title-row">
          <h1 data-cms-bind="name" className="ast-detail__title">Welcome to the AI Survival Guide</h1>
          <a aria-label="Mark this video as complete" type="button" href="#" className="ast-mark-complete is-visible">Mark as complete</a>
        </div>
        <div data-cms-bind="long-description" className="ast-detail__body">
          <div className="w-richtext">
            <p>{"Meet Jared and Jerry, your guides through six AI skills built for finance and accounting teams. We'll walk Boston's most iconic landmarks and learn how history keeps repeating — and what that means for the future of your work."}</p>
          </div>
        </div>
        <div>
          <div id="formhubspot-sub-wrap">
            <div id="formhubspot" style={{ "position": "relative", "zIndex": "1" }} className="ast-toolkit">
              <div className="ast-toolkit__title">
                <p>{"Be first in line to get every course as soon as they drop. Subscribe today. "}</p>
              </div>
              <div className="ast-toolkit__form">
                <div className="tool-form_block tk-block-flat w-form w-form-loading">
                  <form id="wf-form-Report-Form" name="wf-form-Report-Form" data-name="Report Form" method="get" className="tool-form_form is-inline tk-form-mob" data-wf-page-id="69e2a6ec849aaf05e0dbeba1" data-wf-element-id="1c7777df-38d3-e3d2-e9ee-0bceb60052d9" data-turnstile-sitekey="0x4AAAAAAAQTptj2So4dx43e" aria-label="Report Form" onSubmit={(e) => e.preventDefault()}>
                    <div className="w-layout-vflex tool-form_list is-inline tk-list-mob">
                      <label htmlFor="Email" className="u-sr-only">Email Address</label>
                      <input className="form_input is-inline tk-input-mob w-input" maxLength="256" name="Email" data-name="Email" style={{ "maxWidth": "200px", "width": "200px" }} placeholder="Email*" type="email" id="Email" required />
                      <div className="w-layout-vflex tool-form_button-wrap is-inline tk-btn-mob">
                        <div data-wf--slot-item-button-main--style="primary-plus" data-button=" main" className="button_main_wrap">
                          <div className="clickable_wrap u-cover-absolute">
                            <A target="" href="/learn-more/demo" className="clickable_link w-inline-block">
                              <span className="clickable_text u-sr-only">Button</span>
                            </A>
                            <button type="submit" className="clickable_btn w-form-loading" disabled>
                              <span className="clickable_text u-sr-only">Button</span>
                            </button>
                          </div>
                          <div data-button="main-content" className="w-layout-vflex button_main_content-wrap">
                            <div aria-hidden="true" className="button_main_text">Subscribe Now</div>
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
                    <input type="submit" data-wait="Please wait..." className="hide w-button w-form-loading" defaultValue="Submit" disabled />
                    <div></div>
                  </form>
                  <div className="success-message w-form-done" tabIndex="-1" role="region" aria-label="Report Form success">
                    <div>
                      {"Thank you! "}
                      <br />
                      Your submission has been received!
                    </div>
                    <div className="spacer-small"></div>
                  </div>
                  <div className="error-message w-form-fail" tabIndex="-1" role="region" aria-label="Report Form failure">
                    <div className="error-message-text">Oops! Something went wrong while submitting the form.</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="w-embed w-script"></div>
          <div className="w-embed w-iframe w-script"></div>
        </div>
        <div className="ast-detail__nav">
          <div className="ast-detail__nav-inner">
            <div className="ast-nav-wrap">
              <A aria-label="Previous module" href="/ai-skills-training/getting-started-ai-agents-ar" className="ast-nav-prev">
                <span aria-hidden="true">←</span>
                <span>Previous Module</span>
              </A>
              <A aria-label="Next module" href="/ai-skills-training/how-to-match-bank-records-to-open-invoices" className="ast-nav-next">
                <span>Next Module</span>
                <span aria-hidden="true">→</span>
              </A>
              <div className="ast-nav-locked-hint">Watch 90% of the video to unlock →</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
