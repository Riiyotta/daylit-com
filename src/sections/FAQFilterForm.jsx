// FAQ Filter Form — the section's real markup, read from the rendered page (route /faq, section 4).
export default function FAQFilterForm() {
  return (
    <form id="wf-form-FAQ-Filter-Form" name="wf-form-FAQ-Filter-Form" data-name="FAQ Filter Form" method="get" fs-list-element="filters" data-wf-page-id="68b15dd7a1d4bbbd0256c660" data-wf-element-id="937d8d10-b5cb-433d-ec33-3fb7dc96e36f" data-turnstile-sitekey="0x4AAAAAAAQTptj2So4dx43e" aria-label="FAQ Filter Form" data-clone-section="FAQFilterForm" onSubmit={(e) => e.preventDefault()}>
      <section className="section_faq-feed">
        <div data-wf--utility-spacer-section--padding="small" className="padding-section-wrap">
          <div className="padding-top w-variant-be9514d5-b59a-26cd-e5bf-b06f381984af"></div>
        </div>
        <div className="big-section">
          <div className="w-layout-blockcontainer container-large w-container">
            <div className="faq-feed_layout">
              <div className="faq-filter_block">
                <div className="w-layout-vflex faq-filter_list hide-tablet">
                  <label className="w-checkbox intelligence-page">
                    <div className="w-checkbox-input w-checkbox-input--inputType-custom filter-faq_checkbox-button is-absolute"></div>
                    <input type="checkbox" name="checkbox" fs-list-value="General" data-name="Checkbox" fs-list-field="products" style={{ "opacity": "0", "position": "absolute", "zIndex": "-1" }} />
                    <span className="filter-faq_checkbox-label w-form-label" htmlFor="checkbox">General FAQs</span>
                  </label>
                  <div className="w-dyn-list">
                    <div role="list" className="faq-filter_list w-dyn-items">
                      <div role="listitem" className="faq-filter_item w-dyn-item">
                        <label className="w-checkbox intelligence-page">
                          <div className="w-checkbox-input w-checkbox-input--inputType-custom filter-faq_checkbox-button is-absolute"></div>
                          <input type="checkbox" name="checkbox" fs-list-value="Sell an invoice" data-name="Checkbox" fs-list-field="products" style={{ "opacity": "0", "position": "absolute", "zIndex": "-1" }} />
                          <span className="filter-faq_checkbox-label w-form-label" htmlFor="checkbox">Sell an invoice</span>
                        </label>
                      </div>
                      <div role="listitem" className="faq-filter_item w-dyn-item">
                        <label className="w-checkbox intelligence-page">
                          <div className="w-checkbox-input w-checkbox-input--inputType-custom filter-faq_checkbox-button is-absolute"></div>
                          <input type="checkbox" name="checkbox" fs-list-value="Outsource net terms" data-name="Checkbox" fs-list-field="products" style={{ "opacity": "0", "position": "absolute", "zIndex": "-1" }} />
                          <span className="filter-faq_checkbox-label w-form-label" htmlFor="checkbox">Outsource net terms</span>
                        </label>
                      </div>
                      <div role="listitem" className="faq-filter_item w-dyn-item">
                        <label className="w-checkbox intelligence-page">
                          <div className="w-checkbox-input w-checkbox-input--inputType-custom filter-faq_checkbox-button is-absolute"></div>
                          <input type="checkbox" name="checkbox" fs-list-value="Offer payment plans" data-name="Checkbox" fs-list-field="products" style={{ "opacity": "0", "position": "absolute", "zIndex": "-1" }} />
                          <span className="filter-faq_checkbox-label w-form-label" htmlFor="checkbox">Offer payment plans</span>
                        </label>
                      </div>
                      <div role="listitem" className="faq-filter_item w-dyn-item">
                        <label className="w-checkbox intelligence-page">
                          <div className="w-checkbox-input w-checkbox-input--inputType-custom filter-faq_checkbox-button is-absolute"></div>
                          <input type="checkbox" name="checkbox" fs-list-value="Draw working capital" data-name="Checkbox" fs-list-field="products" style={{ "opacity": "0", "position": "absolute", "zIndex": "-1" }} />
                          <span className="filter-faq_checkbox-label w-form-label" htmlFor="checkbox">Draw working capital</span>
                        </label>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="w-layout-vflex faq-filter_list-mobile show-tablet">
                  <div data-hover="false" data-delay="0" className="blog-filter_dropdown w-dropdown">
                    <div className="blog-filter_dropdown-toggle w-dropdown-toggle" id="w-dropdown-toggle-4" aria-controls="w-dropdown-list-4" aria-haspopup="menu" aria-expanded="false" role="button" tabIndex="0">
                      <div>Filter by</div>
                      <div className="blog-filter_clear-icon-wrap">
                        <div className="icon-embed-xxsmall w-embed">
                          <svg xmlns="http://www.w3.org/2000/svg" width="100%" height="100%" viewBox="0 0 16 16" fill="none" preserveAspectRatio="xMidYMid meet" aria-hidden="true" role="img">
                            <path d="M13.0194 6.4569L8.3319 11.1444C8.28837 11.188 8.23667 11.2226 8.17976 11.2461C8.12286 11.2697 8.06186 11.2819 8.00026 11.2819C7.93866 11.2819 7.87766 11.2697 7.82076 11.2461C7.76385 11.2226 7.71215 11.188 7.66862 11.1444L2.98112 6.4569C2.89316 6.36894 2.84375 6.24965 2.84375 6.12526C2.84375 6.00087 2.89316 5.88158 2.98112 5.79362C3.06908 5.70566 3.18837 5.65625 3.31276 5.65625C3.43715 5.65625 3.55644 5.70566 3.6444 5.79362L8.00026 10.1501L12.3561 5.79362C12.3997 5.75007 12.4514 5.71552 12.5083 5.69195C12.5652 5.66838 12.6262 5.65625 12.6878 5.65625C12.7494 5.65625 12.8103 5.66838 12.8672 5.69195C12.9241 5.71552 12.9758 5.75007 13.0194 5.79362C13.063 5.83717 13.0975 5.88887 13.1211 5.94578C13.1446 6.00268 13.1568 6.06367 13.1568 6.12526C13.1568 6.18685 13.1446 6.24784 13.1211 6.30474C13.0975 6.36165 13.063 6.41335 13.0194 6.4569Z" fill="currentColor" />
                          </svg>
                        </div>
                      </div>
                    </div>
                    <nav className="blog-filter_dropdown-menu is-left w-dropdown-list" id="w-dropdown-list-4" aria-labelledby="w-dropdown-toggle-4">
                      <label className="w-checkbox filter_checkbox">
                        <div className="w-checkbox-input w-checkbox-input--inputType-custom filter_checkbox-button"></div>
                        <input type="checkbox" fs-list-value="General" name="checkbox" data-name="Checkbox" fs-list-field="products" style={{ "opacity": "0", "position": "absolute", "zIndex": "-1" }} />
                        <span className="filter_checkbox-label w-form-label" htmlFor="checkbox">General</span>
                      </label>
                      <div className="w-dyn-list">
                        <div role="list" className="w-dyn-items">
                          <div role="listitem" className="w-dyn-item">
                            <label className="w-checkbox filter_checkbox">
                              <div className="w-checkbox-input w-checkbox-input--inputType-custom filter_checkbox-button"></div>
                              <input fs-list-value="Sell an invoice" fs-list-field="products" name="checkbox" data-name="Checkbox" type="checkbox" id="checkbox" style={{ "opacity": "0", "position": "absolute", "zIndex": "-1" }} />
                              <span className="filter_checkbox-label w-form-label" htmlFor="checkbox">Sell an invoice</span>
                            </label>
                          </div>
                          <div role="listitem" className="w-dyn-item">
                            <label className="w-checkbox filter_checkbox">
                              <div className="w-checkbox-input w-checkbox-input--inputType-custom filter_checkbox-button"></div>
                              <input fs-list-value="Outsource net terms" fs-list-field="products" name="checkbox" data-name="Checkbox" type="checkbox" id="checkbox" style={{ "opacity": "0", "position": "absolute", "zIndex": "-1" }} />
                              <span className="filter_checkbox-label w-form-label" htmlFor="checkbox">Outsource net terms</span>
                            </label>
                          </div>
                          <div role="listitem" className="w-dyn-item">
                            <label className="w-checkbox filter_checkbox">
                              <div className="w-checkbox-input w-checkbox-input--inputType-custom filter_checkbox-button"></div>
                              <input fs-list-value="Offer payment plans" fs-list-field="products" name="checkbox" data-name="Checkbox" type="checkbox" id="checkbox" style={{ "opacity": "0", "position": "absolute", "zIndex": "-1" }} />
                              <span className="filter_checkbox-label w-form-label" htmlFor="checkbox">Offer payment plans</span>
                            </label>
                          </div>
                          <div role="listitem" className="w-dyn-item">
                            <label className="w-checkbox filter_checkbox">
                              <div className="w-checkbox-input w-checkbox-input--inputType-custom filter_checkbox-button"></div>
                              <input fs-list-value="Draw working capital" fs-list-field="products" name="checkbox" data-name="Checkbox" type="checkbox" id="checkbox" style={{ "opacity": "0", "position": "absolute", "zIndex": "-1" }} />
                              <span className="filter_checkbox-label w-form-label" htmlFor="checkbox">Draw working capital</span>
                            </label>
                          </div>
                        </div>
                      </div>
                      <button fs-list-element="clear" className="blog-filter_clear">
                        <div>Clear</div>
                        <div className="blog-filter_clear-icon-wrap">
                          <div className="icon-embed-xxsmall w-embed">
                            <svg xmlns="http://www.w3.org/2000/svg" width="100%" height="100%" viewBox="0 0 16 16" fill="none" preserveAspectRatio="xMidYMid meet" aria-hidden="true" role="img">
                              <path d="M12.854 12.1465C12.9005 12.193 12.9373 12.2481 12.9625 12.3088C12.9876 12.3695 13.0006 12.4346 13.0006 12.5003C13.0006 12.566 12.9876 12.631 12.9625 12.6917C12.9373 12.7524 12.9005 12.8076 12.854 12.854C12.8076 12.9005 12.7524 12.9373 12.6917 12.9625C12.631 12.9876 12.566 13.0006 12.5003 13.0006C12.4346 13.0006 12.3695 12.9876 12.3088 12.9625C12.2481 12.9373 12.193 12.9005 12.1465 12.854L8.00028 8.70715L3.85403 12.854C3.76021 12.9478 3.63296 13.0006 3.50028 13.0006C3.3676 13.0006 3.24035 12.9478 3.14653 12.854C3.05271 12.7602 3 12.633 3 12.5003C3 12.3676 3.05271 12.2403 3.14653 12.1465L7.2934 8.00028L3.14653 3.85403C3.05271 3.76021 3 3.63296 3 3.50028C3 3.3676 3.05271 3.24035 3.14653 3.14653C3.24035 3.05271 3.3676 3 3.50028 3C3.63296 3 3.76021 3.05271 3.85403 3.14653L8.00028 7.2934L12.1465 3.14653C12.2403 3.05271 12.3676 3 12.5003 3C12.633 3 12.7602 3.05271 12.854 3.14653C12.9478 3.24035 13.0006 3.3676 13.0006 3.50028C13.0006 3.63296 12.9478 3.76021 12.854 3.85403L8.70715 8.00028L12.854 12.1465Z" fill="currentColor" />
                            </svg>
                          </div>
                        </div>
                      </button>
                    </nav>
                  </div>
                  <button fs-list-element="clear" className="blog-filter_clear">
                    <div>Clear</div>
                    <div className="blog-filter_clear-icon-wrap">
                      <div className="icon-embed-xxsmall w-embed">
                        <svg xmlns="http://www.w3.org/2000/svg" width="100%" height="100%" viewBox="0 0 16 16" fill="none" preserveAspectRatio="xMidYMid meet" aria-hidden="true" role="img">
                          <path d="M12.854 12.1465C12.9005 12.193 12.9373 12.2481 12.9625 12.3088C12.9876 12.3695 13.0006 12.4346 13.0006 12.5003C13.0006 12.566 12.9876 12.631 12.9625 12.6917C12.9373 12.7524 12.9005 12.8076 12.854 12.854C12.8076 12.9005 12.7524 12.9373 12.6917 12.9625C12.631 12.9876 12.566 13.0006 12.5003 13.0006C12.4346 13.0006 12.3695 12.9876 12.3088 12.9625C12.2481 12.9373 12.193 12.9005 12.1465 12.854L8.00028 8.70715L3.85403 12.854C3.76021 12.9478 3.63296 13.0006 3.50028 13.0006C3.3676 13.0006 3.24035 12.9478 3.14653 12.854C3.05271 12.7602 3 12.633 3 12.5003C3 12.3676 3.05271 12.2403 3.14653 12.1465L7.2934 8.00028L3.14653 3.85403C3.05271 3.76021 3 3.63296 3 3.50028C3 3.3676 3.05271 3.24035 3.14653 3.14653C3.24035 3.05271 3.3676 3 3.50028 3C3.63296 3 3.76021 3.05271 3.85403 3.14653L8.00028 7.2934L12.1465 3.14653C12.2403 3.05271 12.3676 3 12.5003 3C12.633 3 12.7602 3.05271 12.854 3.14653C12.9478 3.24035 13.0006 3.3676 13.0006 3.50028C13.0006 3.63296 12.9478 3.76021 12.854 3.85403L8.70715 8.00028L12.854 12.1465Z" fill="currentColor" />
                        </svg>
                      </div>
                    </div>
                  </button>
                </div>
              </div>
              <div>
                <div className="w-dyn-list">
                  <div cc-accordion-element="list" fs-list-element="list" role="list" className="faq-main-accordion-list_wrap w-dyn-items">
                    <div role="listitem" className="w-dyn-item">
                      <div cc-schema-element="faq" cc-accordion-element="accordion" className="faq-main-accordion_wrap" open>
                        <button aria-expanded="true" aria-controls="accordion-details-1" id="accordion-summary-1" cc-accordion-element="trigger" cc-schema-element="question" className="faq-main-accordion_top-container" role="button" tabIndex="0">
                          <h3 className="heading-style-h6">{"What is Daylit's Receivables Intelligence?"}</h3>
                          <div className="faq-main-accordion_icon-wrap">
                            <div className="faq-main-accordion_icon-svg w-embed">
                              <svg xmlns="http://www.w3.org/2000/svg" width="100%" height="100%" viewBox="0 0 14 15" fill="none" preserveAspectRatio="xMidYMid meet" aria-hidden="true" role="img">
                                <circle cx="2.05078" cy="7.78273" r="1.16667" transform="rotate(45 2.05078 7.78273)" fill="currentColor" />
                                <circle cx="11.9492" cy="7.78468" r="1.16667" transform="rotate(45 11.9492 7.78468)" fill="currentColor" />
                                <circle cx="7" cy="7.7837" r="1.16667" transform="rotate(45 7 7.7837)" fill="currentColor" />
                              </svg>
                            </div>
                            <div cc-accordion-element="icon" className="faq-main-accordion_icon-svg w-embed" style={{ "transform": "rotate(180deg)" }}>
                              <svg xmlns="http://www.w3.org/2000/svg" width="100%" height="100%" viewBox="0 0 14 15" fill="none" preserveAspectRatio="xMidYMid meet" aria-hidden="true" role="img">
                                <circle cx="6.99879" cy="12.7329" r="1.16667" transform="rotate(-45 6.99879 12.7329)" fill="currentColor" />
                                <circle cx="7.00123" cy="2.83447" r="1.16667" transform="rotate(-45 7.00123 2.83447)" fill="currentColor" />
                                <circle cx="7.00001" cy="7.78369" r="1.16667" transform="rotate(-45 7.00001 7.78369)" fill="currentColor" />
                              </svg>
                            </div>
                          </div>
                        </button>
                        <div id="accordion-details-1" role="region" aria-labelledby="accordion-summary-1" cc-accordion-element="content" cc-schema-element="answer" className="faq-main-accordion_bottom-container" style={{ "height": "136px", "opacity": "1" }}>
                          <div className="faq-main-accordion_content-wrapper">
                            <div className="content-rich-text text-color-secondary w-richtext">
                              <p>Daylit is a next-generation approach to Accounts Receivable. It centralizes customer payment behavior, predicts cash flow, surfaces risk, and automatically drives the next best action for A/R teams. It’s the intelligence layer that transforms A/R from a reactive collections function into a strategic part of finance.</p>
                            </div>
                            <div aria-hidden="true" className="faq-main-accordion_spacer"></div>
                          </div>
                        </div>
                      </div>
                      <div className="w-layout-vflex u-sr-only">
                        <div className="w-dyn-list">
                          <div role="list" className="w-dyn-items">
                            <div role="listitem" className="w-dyn-item">
                              <div fs-list-field="products">Offer payment plans</div>
                            </div>
                            <div role="listitem" className="w-dyn-item">
                              <div fs-list-field="products">Draw working capital</div>
                            </div>
                            <div role="listitem" className="w-dyn-item">
                              <div fs-list-field="products">Sell an invoice</div>
                            </div>
                            <div role="listitem" className="w-dyn-item">
                              <div fs-list-field="products">Outsource net terms</div>
                            </div>
                          </div>
                        </div>
                        <div fs-list-field="products">General</div>
                      </div>
                    </div>
                    <div role="listitem" className="w-dyn-item">
                      <div cc-schema-element="faq" cc-accordion-element="accordion" className="faq-main-accordion_wrap">
                        <button aria-expanded="false" aria-controls="accordion-details-2" id="accordion-summary-2" cc-accordion-element="trigger" cc-schema-element="question" className="faq-main-accordion_top-container" role="button" tabIndex="0">
                          <h3 className="heading-style-h6">How is Daylit different from traditional A/R automation?</h3>
                          <div className="faq-main-accordion_icon-wrap">
                            <div className="faq-main-accordion_icon-svg w-embed">
                              <svg xmlns="http://www.w3.org/2000/svg" width="100%" height="100%" viewBox="0 0 14 15" fill="none" preserveAspectRatio="xMidYMid meet" aria-hidden="true" role="img">
                                <circle cx="2.05078" cy="7.78273" r="1.16667" transform="rotate(45 2.05078 7.78273)" fill="currentColor" />
                                <circle cx="11.9492" cy="7.78468" r="1.16667" transform="rotate(45 11.9492 7.78468)" fill="currentColor" />
                                <circle cx="7" cy="7.7837" r="1.16667" transform="rotate(45 7 7.7837)" fill="currentColor" />
                              </svg>
                            </div>
                            <div cc-accordion-element="icon" className="faq-main-accordion_icon-svg w-embed" style={{ "transform": "rotate(0deg)" }}>
                              <svg xmlns="http://www.w3.org/2000/svg" width="100%" height="100%" viewBox="0 0 14 15" fill="none" preserveAspectRatio="xMidYMid meet" aria-hidden="true" role="img">
                                <circle cx="6.99879" cy="12.7329" r="1.16667" transform="rotate(-45 6.99879 12.7329)" fill="currentColor" />
                                <circle cx="7.00123" cy="2.83447" r="1.16667" transform="rotate(-45 7.00123 2.83447)" fill="currentColor" />
                                <circle cx="7.00001" cy="7.78369" r="1.16667" transform="rotate(-45 7.00001 7.78369)" fill="currentColor" />
                              </svg>
                            </div>
                          </div>
                        </button>
                        <div id="accordion-details-2" role="region" aria-labelledby="accordion-summary-2" cc-accordion-element="content" cc-schema-element="answer" className="faq-main-accordion_bottom-container" style={{ "height": "0px", "opacity": "0" }}>
                          <div className="faq-main-accordion_content-wrapper">
                            <div className="content-rich-text text-color-secondary w-richtext">
                              <p>Most A/R tools focus on workflow automation, dunning, or dashboards. Receivables Intelligence goes further by providing a source of truth for what is owed, why, and what needs to happen next. It eliminates manual reconciliation work, aligns teams, and generates true insights leadership can act on.</p>
                              <p>‍</p>
                            </div>
                            <div aria-hidden="true" className="faq-main-accordion_spacer"></div>
                          </div>
                        </div>
                      </div>
                      <div className="w-layout-vflex u-sr-only">
                        <div className="w-dyn-list">
                          <div role="list" className="w-dyn-items">
                            <div role="listitem" className="w-dyn-item">
                              <div fs-list-field="products">Offer payment plans</div>
                            </div>
                            <div role="listitem" className="w-dyn-item">
                              <div fs-list-field="products">Sell an invoice</div>
                            </div>
                            <div role="listitem" className="w-dyn-item">
                              <div fs-list-field="products">Outsource net terms</div>
                            </div>
                            <div role="listitem" className="w-dyn-item">
                              <div fs-list-field="products">Draw working capital</div>
                            </div>
                          </div>
                        </div>
                        <div fs-list-field="products">General</div>
                      </div>
                    </div>
                    <div role="listitem" className="w-dyn-item">
                      <div cc-schema-element="faq" cc-accordion-element="accordion" className="faq-main-accordion_wrap">
                        <button aria-expanded="false" aria-controls="accordion-details-3" id="accordion-summary-3" cc-accordion-element="trigger" cc-schema-element="question" className="faq-main-accordion_top-container" role="button" tabIndex="0">
                          <h3 className="heading-style-h6">Who is Daylit built for?</h3>
                          <div className="faq-main-accordion_icon-wrap">
                            <div className="faq-main-accordion_icon-svg w-embed">
                              <svg xmlns="http://www.w3.org/2000/svg" width="100%" height="100%" viewBox="0 0 14 15" fill="none" preserveAspectRatio="xMidYMid meet" aria-hidden="true" role="img">
                                <circle cx="2.05078" cy="7.78273" r="1.16667" transform="rotate(45 2.05078 7.78273)" fill="currentColor" />
                                <circle cx="11.9492" cy="7.78468" r="1.16667" transform="rotate(45 11.9492 7.78468)" fill="currentColor" />
                                <circle cx="7" cy="7.7837" r="1.16667" transform="rotate(45 7 7.7837)" fill="currentColor" />
                              </svg>
                            </div>
                            <div cc-accordion-element="icon" className="faq-main-accordion_icon-svg w-embed" style={{ "transform": "rotate(0deg)" }}>
                              <svg xmlns="http://www.w3.org/2000/svg" width="100%" height="100%" viewBox="0 0 14 15" fill="none" preserveAspectRatio="xMidYMid meet" aria-hidden="true" role="img">
                                <circle cx="6.99879" cy="12.7329" r="1.16667" transform="rotate(-45 6.99879 12.7329)" fill="currentColor" />
                                <circle cx="7.00123" cy="2.83447" r="1.16667" transform="rotate(-45 7.00123 2.83447)" fill="currentColor" />
                                <circle cx="7.00001" cy="7.78369" r="1.16667" transform="rotate(-45 7.00001 7.78369)" fill="currentColor" />
                              </svg>
                            </div>
                          </div>
                        </button>
                        <div id="accordion-details-3" role="region" aria-labelledby="accordion-summary-3" cc-accordion-element="content" cc-schema-element="answer" className="faq-main-accordion_bottom-container" style={{ "height": "0px", "opacity": "0" }}>
                          <div className="faq-main-accordion_content-wrapper">
                            <div className="content-rich-text text-color-secondary w-richtext">
                              <p>Daylit is designed for CFOs, controllers, A/R managers, and collections teams who want a more predictable, data-driven approach to cash flow and customer payments. It’s built for organizations that want to eliminate manual processes and move toward strategic</p>
                            </div>
                            <div aria-hidden="true" className="faq-main-accordion_spacer"></div>
                          </div>
                        </div>
                      </div>
                      <div className="w-layout-vflex u-sr-only">
                        <div className="w-dyn-list">
                          <div role="list" className="w-dyn-items">
                            <div role="listitem" className="w-dyn-item">
                              <div fs-list-field="products">Offer payment plans</div>
                            </div>
                            <div role="listitem" className="w-dyn-item">
                              <div fs-list-field="products">Draw working capital</div>
                            </div>
                            <div role="listitem" className="w-dyn-item">
                              <div fs-list-field="products">Outsource net terms</div>
                            </div>
                            <div role="listitem" className="w-dyn-item">
                              <div fs-list-field="products">Sell an invoice</div>
                            </div>
                          </div>
                        </div>
                        <div fs-list-field="products">General</div>
                      </div>
                    </div>
                    <div role="listitem" className="w-dyn-item">
                      <div cc-schema-element="faq" cc-accordion-element="accordion" className="faq-main-accordion_wrap">
                        <button aria-expanded="false" aria-controls="accordion-details-4" id="accordion-summary-4" cc-accordion-element="trigger" cc-schema-element="question" className="faq-main-accordion_top-container" role="button" tabIndex="0">
                          <h3 className="heading-style-h6">What problems does Daylit solve?</h3>
                          <div className="faq-main-accordion_icon-wrap">
                            <div className="faq-main-accordion_icon-svg w-embed">
                              <svg xmlns="http://www.w3.org/2000/svg" width="100%" height="100%" viewBox="0 0 14 15" fill="none" preserveAspectRatio="xMidYMid meet" aria-hidden="true" role="img">
                                <circle cx="2.05078" cy="7.78273" r="1.16667" transform="rotate(45 2.05078 7.78273)" fill="currentColor" />
                                <circle cx="11.9492" cy="7.78468" r="1.16667" transform="rotate(45 11.9492 7.78468)" fill="currentColor" />
                                <circle cx="7" cy="7.7837" r="1.16667" transform="rotate(45 7 7.7837)" fill="currentColor" />
                              </svg>
                            </div>
                            <div cc-accordion-element="icon" className="faq-main-accordion_icon-svg w-embed" style={{ "transform": "rotate(0deg)" }}>
                              <svg xmlns="http://www.w3.org/2000/svg" width="100%" height="100%" viewBox="0 0 14 15" fill="none" preserveAspectRatio="xMidYMid meet" aria-hidden="true" role="img">
                                <circle cx="6.99879" cy="12.7329" r="1.16667" transform="rotate(-45 6.99879 12.7329)" fill="currentColor" />
                                <circle cx="7.00123" cy="2.83447" r="1.16667" transform="rotate(-45 7.00123 2.83447)" fill="currentColor" />
                                <circle cx="7.00001" cy="7.78369" r="1.16667" transform="rotate(-45 7.00001 7.78369)" fill="currentColor" />
                              </svg>
                            </div>
                          </div>
                        </button>
                        <div id="accordion-details-4" role="region" aria-labelledby="accordion-summary-4" cc-accordion-element="content" cc-schema-element="answer" className="faq-main-accordion_bottom-container" style={{ "height": "0px", "opacity": "0" }}>
                          <div className="faq-main-accordion_content-wrapper">
                            <div className="content-rich-text text-color-secondary w-richtext">
                              <p>Daylit addresses the biggest pain points across finance and A/R teams, including unpredictable cash flow, fragmented systems, lack of visibility into customer behavior, manual reconciliation work, and chaotic weekly A/R meetings.</p>
                            </div>
                            <div aria-hidden="true" className="faq-main-accordion_spacer"></div>
                          </div>
                        </div>
                      </div>
                      <div className="w-layout-vflex u-sr-only">
                        <div className="w-dyn-list">
                          <div role="list" className="w-dyn-items">
                            <div role="listitem" className="w-dyn-item">
                              <div fs-list-field="products">Offer payment plans</div>
                            </div>
                            <div role="listitem" className="w-dyn-item">
                              <div fs-list-field="products">Draw working capital</div>
                            </div>
                            <div role="listitem" className="w-dyn-item">
                              <div fs-list-field="products">Sell an invoice</div>
                            </div>
                            <div role="listitem" className="w-dyn-item">
                              <div fs-list-field="products">Outsource net terms</div>
                            </div>
                          </div>
                        </div>
                        <div fs-list-field="products">General</div>
                      </div>
                    </div>
                    <div role="listitem" className="w-dyn-item">
                      <div cc-schema-element="faq" cc-accordion-element="accordion" className="faq-main-accordion_wrap">
                        <button aria-expanded="false" aria-controls="accordion-details-5" id="accordion-summary-5" cc-accordion-element="trigger" cc-schema-element="question" className="faq-main-accordion_top-container" role="button" tabIndex="0">
                          <h3 className="heading-style-h6">Which systems does Daylit integrate with?</h3>
                          <div className="faq-main-accordion_icon-wrap">
                            <div className="faq-main-accordion_icon-svg w-embed">
                              <svg xmlns="http://www.w3.org/2000/svg" width="100%" height="100%" viewBox="0 0 14 15" fill="none" preserveAspectRatio="xMidYMid meet" aria-hidden="true" role="img">
                                <circle cx="2.05078" cy="7.78273" r="1.16667" transform="rotate(45 2.05078 7.78273)" fill="currentColor" />
                                <circle cx="11.9492" cy="7.78468" r="1.16667" transform="rotate(45 11.9492 7.78468)" fill="currentColor" />
                                <circle cx="7" cy="7.7837" r="1.16667" transform="rotate(45 7 7.7837)" fill="currentColor" />
                              </svg>
                            </div>
                            <div cc-accordion-element="icon" className="faq-main-accordion_icon-svg w-embed" style={{ "transform": "rotate(0deg)" }}>
                              <svg xmlns="http://www.w3.org/2000/svg" width="100%" height="100%" viewBox="0 0 14 15" fill="none" preserveAspectRatio="xMidYMid meet" aria-hidden="true" role="img">
                                <circle cx="6.99879" cy="12.7329" r="1.16667" transform="rotate(-45 6.99879 12.7329)" fill="currentColor" />
                                <circle cx="7.00123" cy="2.83447" r="1.16667" transform="rotate(-45 7.00123 2.83447)" fill="currentColor" />
                                <circle cx="7.00001" cy="7.78369" r="1.16667" transform="rotate(-45 7.00001 7.78369)" fill="currentColor" />
                              </svg>
                            </div>
                          </div>
                        </button>
                        <div id="accordion-details-5" role="region" aria-labelledby="accordion-summary-5" cc-accordion-element="content" cc-schema-element="answer" className="faq-main-accordion_bottom-container" style={{ "height": "0px", "opacity": "0" }}>
                          <div className="faq-main-accordion_content-wrapper">
                            <div className="content-rich-text text-color-secondary w-richtext">
                              <p>Daylit is designed to centralize data from the systems teams already use, including most ERPs, CRMs, email, and spreadsheets. We currently support integrations with Netsuite, Quickbooks, Microsoft Dynamics, ZohoBooks, Freshbooks, and several more.</p>
                            </div>
                            <div aria-hidden="true" className="faq-main-accordion_spacer"></div>
                          </div>
                        </div>
                      </div>
                      <div className="w-layout-vflex u-sr-only">
                        <div className="w-dyn-list">
                          <div role="list" className="w-dyn-items">
                            <div role="listitem" className="w-dyn-item">
                              <div fs-list-field="products">Offer payment plans</div>
                            </div>
                            <div role="listitem" className="w-dyn-item">
                              <div fs-list-field="products">Draw working capital</div>
                            </div>
                            <div role="listitem" className="w-dyn-item">
                              <div fs-list-field="products">Outsource net terms</div>
                            </div>
                            <div role="listitem" className="w-dyn-item">
                              <div fs-list-field="products">Sell an invoice</div>
                            </div>
                          </div>
                        </div>
                        <div fs-list-field="products">General</div>
                      </div>
                    </div>
                    <div role="listitem" className="w-dyn-item">
                      <div cc-schema-element="faq" cc-accordion-element="accordion" className="faq-main-accordion_wrap">
                        <button aria-expanded="false" aria-controls="accordion-details-6" id="accordion-summary-6" cc-accordion-element="trigger" cc-schema-element="question" className="faq-main-accordion_top-container" role="button" tabIndex="0">
                          <h3 className="heading-style-h6">How does Daylit help companies get paid faster?</h3>
                          <div className="faq-main-accordion_icon-wrap">
                            <div className="faq-main-accordion_icon-svg w-embed">
                              <svg xmlns="http://www.w3.org/2000/svg" width="100%" height="100%" viewBox="0 0 14 15" fill="none" preserveAspectRatio="xMidYMid meet" aria-hidden="true" role="img">
                                <circle cx="2.05078" cy="7.78273" r="1.16667" transform="rotate(45 2.05078 7.78273)" fill="currentColor" />
                                <circle cx="11.9492" cy="7.78468" r="1.16667" transform="rotate(45 11.9492 7.78468)" fill="currentColor" />
                                <circle cx="7" cy="7.7837" r="1.16667" transform="rotate(45 7 7.7837)" fill="currentColor" />
                              </svg>
                            </div>
                            <div cc-accordion-element="icon" className="faq-main-accordion_icon-svg w-embed" style={{ "transform": "rotate(0deg)" }}>
                              <svg xmlns="http://www.w3.org/2000/svg" width="100%" height="100%" viewBox="0 0 14 15" fill="none" preserveAspectRatio="xMidYMid meet" aria-hidden="true" role="img">
                                <circle cx="6.99879" cy="12.7329" r="1.16667" transform="rotate(-45 6.99879 12.7329)" fill="currentColor" />
                                <circle cx="7.00123" cy="2.83447" r="1.16667" transform="rotate(-45 7.00123 2.83447)" fill="currentColor" />
                                <circle cx="7.00001" cy="7.78369" r="1.16667" transform="rotate(-45 7.00001 7.78369)" fill="currentColor" />
                              </svg>
                            </div>
                          </div>
                        </button>
                        <div id="accordion-details-6" role="region" aria-labelledby="accordion-summary-6" cc-accordion-element="content" cc-schema-element="answer" className="faq-main-accordion_bottom-container" style={{ "height": "0px", "opacity": "0" }}>
                          <div className="faq-main-accordion_content-wrapper">
                            <div className="content-rich-text text-color-secondary w-richtext">
                              <p>By eliminating manual reconciliation, surfacing risk early, and telling teams exactly where to focus, Daylit removes the friction that slows down collections. Teams spend less time searching for answers and more time driving outcomes.</p>
                            </div>
                            <div aria-hidden="true" className="faq-main-accordion_spacer"></div>
                          </div>
                        </div>
                      </div>
                      <div className="w-layout-vflex u-sr-only">
                        <div className="w-dyn-list">
                          <div role="list" className="w-dyn-items">
                            <div role="listitem" className="w-dyn-item">
                              <div fs-list-field="products">Offer payment plans</div>
                            </div>
                            <div role="listitem" className="w-dyn-item">
                              <div fs-list-field="products">Draw working capital</div>
                            </div>
                            <div role="listitem" className="w-dyn-item">
                              <div fs-list-field="products">Outsource net terms</div>
                            </div>
                            <div role="listitem" className="w-dyn-item">
                              <div fs-list-field="products">Sell an invoice</div>
                            </div>
                          </div>
                        </div>
                        <div fs-list-field="products">General</div>
                      </div>
                    </div>
                    <div role="listitem" className="w-dyn-item">
                      <div cc-schema-element="faq" cc-accordion-element="accordion" className="faq-main-accordion_wrap">
                        <button aria-expanded="false" aria-controls="accordion-details-7" id="accordion-summary-7" cc-accordion-element="trigger" cc-schema-element="question" className="faq-main-accordion_top-container" role="button" tabIndex="0">
                          <h3 className="heading-style-h6">How does factoring (invoice factoring) work?</h3>
                          <div className="faq-main-accordion_icon-wrap">
                            <div className="faq-main-accordion_icon-svg w-embed">
                              <svg xmlns="http://www.w3.org/2000/svg" width="100%" height="100%" viewBox="0 0 14 15" fill="none" preserveAspectRatio="xMidYMid meet" aria-hidden="true" role="img">
                                <circle cx="2.05078" cy="7.78273" r="1.16667" transform="rotate(45 2.05078 7.78273)" fill="currentColor" />
                                <circle cx="11.9492" cy="7.78468" r="1.16667" transform="rotate(45 11.9492 7.78468)" fill="currentColor" />
                                <circle cx="7" cy="7.7837" r="1.16667" transform="rotate(45 7 7.7837)" fill="currentColor" />
                              </svg>
                            </div>
                            <div cc-accordion-element="icon" className="faq-main-accordion_icon-svg w-embed" style={{ "transform": "rotate(0deg)" }}>
                              <svg xmlns="http://www.w3.org/2000/svg" width="100%" height="100%" viewBox="0 0 14 15" fill="none" preserveAspectRatio="xMidYMid meet" aria-hidden="true" role="img">
                                <circle cx="6.99879" cy="12.7329" r="1.16667" transform="rotate(-45 6.99879 12.7329)" fill="currentColor" />
                                <circle cx="7.00123" cy="2.83447" r="1.16667" transform="rotate(-45 7.00123 2.83447)" fill="currentColor" />
                                <circle cx="7.00001" cy="7.78369" r="1.16667" transform="rotate(-45 7.00001 7.78369)" fill="currentColor" />
                              </svg>
                            </div>
                          </div>
                        </button>
                        <div id="accordion-details-7" role="region" aria-labelledby="accordion-summary-7" cc-accordion-element="content" cc-schema-element="answer" className="faq-main-accordion_bottom-container" style={{ "height": "0px", "opacity": "0" }}>
                          <div className="faq-main-accordion_content-wrapper">
                            <div className="content-rich-text text-color-secondary w-richtext">
                              <p>With factoring, a business uploads customer invoices into our portal or ERP integration. We then advance cash to the business right away, and the customer continues to pay on their standard schedule. Repayment occurs up to 60 days later, often after the invoice has already been paid, making it seamless for the business.</p>
                            </div>
                            <div aria-hidden="true" className="faq-main-accordion_spacer"></div>
                          </div>
                        </div>
                      </div>
                      <div className="w-layout-vflex u-sr-only">
                        <div className="w-dyn-list">
                          <div role="list" className="w-dyn-items">
                            <div role="listitem" className="w-dyn-item">
                              <div fs-list-field="products">Sell an invoice</div>
                            </div>
                          </div>
                        </div>
                        <div fs-list-field="products">General</div>
                      </div>
                    </div>
                    <div role="listitem" className="w-dyn-item">
                      <div cc-schema-element="faq" cc-accordion-element="accordion" className="faq-main-accordion_wrap">
                        <button aria-expanded="false" aria-controls="accordion-details-8" id="accordion-summary-8" cc-accordion-element="trigger" cc-schema-element="question" className="faq-main-accordion_top-container" role="button" tabIndex="0">
                          <h3 className="heading-style-h6">What’s the difference between accounts receivable financing and reverse factoring?</h3>
                          <div className="faq-main-accordion_icon-wrap">
                            <div className="faq-main-accordion_icon-svg w-embed">
                              <svg xmlns="http://www.w3.org/2000/svg" width="100%" height="100%" viewBox="0 0 14 15" fill="none" preserveAspectRatio="xMidYMid meet" aria-hidden="true" role="img">
                                <circle cx="2.05078" cy="7.78273" r="1.16667" transform="rotate(45 2.05078 7.78273)" fill="currentColor" />
                                <circle cx="11.9492" cy="7.78468" r="1.16667" transform="rotate(45 11.9492 7.78468)" fill="currentColor" />
                                <circle cx="7" cy="7.7837" r="1.16667" transform="rotate(45 7 7.7837)" fill="currentColor" />
                              </svg>
                            </div>
                            <div cc-accordion-element="icon" className="faq-main-accordion_icon-svg w-embed" style={{ "transform": "rotate(0deg)" }}>
                              <svg xmlns="http://www.w3.org/2000/svg" width="100%" height="100%" viewBox="0 0 14 15" fill="none" preserveAspectRatio="xMidYMid meet" aria-hidden="true" role="img">
                                <circle cx="6.99879" cy="12.7329" r="1.16667" transform="rotate(-45 6.99879 12.7329)" fill="currentColor" />
                                <circle cx="7.00123" cy="2.83447" r="1.16667" transform="rotate(-45 7.00123 2.83447)" fill="currentColor" />
                                <circle cx="7.00001" cy="7.78369" r="1.16667" transform="rotate(-45 7.00001 7.78369)" fill="currentColor" />
                              </svg>
                            </div>
                          </div>
                        </button>
                        <div id="accordion-details-8" role="region" aria-labelledby="accordion-summary-8" cc-accordion-element="content" cc-schema-element="answer" className="faq-main-accordion_bottom-container" style={{ "height": "0px", "opacity": "0" }}>
                          <div className="faq-main-accordion_content-wrapper">
                            <div className="content-rich-text text-color-secondary w-richtext">
                              <p>Accounts receivable financing is supplier-led; the business (supplier) gets paid early on its receivables.Reverse factoring is buyer-led; we pay the supplier upfront while the buyer repays us later.Receivables financing accelerates incoming cash while reverse factoring extends outgoing payments. We offer both, giving businesses liquidity on both sides of the cash cycle.</p>
                            </div>
                            <div aria-hidden="true" className="faq-main-accordion_spacer"></div>
                          </div>
                        </div>
                      </div>
                      <div className="w-layout-vflex u-sr-only">
                        <div className="w-dyn-list">
                          <div role="list" className="w-dyn-items">
                            <div role="listitem" className="w-dyn-item">
                              <div fs-list-field="products">Sell an invoice</div>
                            </div>
                          </div>
                        </div>
                        <div fs-list-field="products">General</div>
                      </div>
                    </div>
                    <div role="listitem" className="w-dyn-item">
                      <div cc-schema-element="faq" cc-accordion-element="accordion" className="faq-main-accordion_wrap">
                        <button aria-expanded="false" aria-controls="accordion-details-9" id="accordion-summary-9" cc-accordion-element="trigger" cc-schema-element="question" className="faq-main-accordion_top-container" role="button" tabIndex="0">
                          <h3 className="heading-style-h6">How much of the invoice value can I receive upfront?</h3>
                          <div className="faq-main-accordion_icon-wrap">
                            <div className="faq-main-accordion_icon-svg w-embed">
                              <svg xmlns="http://www.w3.org/2000/svg" width="100%" height="100%" viewBox="0 0 14 15" fill="none" preserveAspectRatio="xMidYMid meet" aria-hidden="true" role="img">
                                <circle cx="2.05078" cy="7.78273" r="1.16667" transform="rotate(45 2.05078 7.78273)" fill="currentColor" />
                                <circle cx="11.9492" cy="7.78468" r="1.16667" transform="rotate(45 11.9492 7.78468)" fill="currentColor" />
                                <circle cx="7" cy="7.7837" r="1.16667" transform="rotate(45 7 7.7837)" fill="currentColor" />
                              </svg>
                            </div>
                            <div cc-accordion-element="icon" className="faq-main-accordion_icon-svg w-embed" style={{ "transform": "rotate(0deg)" }}>
                              <svg xmlns="http://www.w3.org/2000/svg" width="100%" height="100%" viewBox="0 0 14 15" fill="none" preserveAspectRatio="xMidYMid meet" aria-hidden="true" role="img">
                                <circle cx="6.99879" cy="12.7329" r="1.16667" transform="rotate(-45 6.99879 12.7329)" fill="currentColor" />
                                <circle cx="7.00123" cy="2.83447" r="1.16667" transform="rotate(-45 7.00123 2.83447)" fill="currentColor" />
                                <circle cx="7.00001" cy="7.78369" r="1.16667" transform="rotate(-45 7.00001 7.78369)" fill="currentColor" />
                              </svg>
                            </div>
                          </div>
                        </button>
                        <div id="accordion-details-9" role="region" aria-labelledby="accordion-summary-9" cc-accordion-element="content" cc-schema-element="answer" className="faq-main-accordion_bottom-container" style={{ "height": "0px", "opacity": "0" }}>
                          <div className="faq-main-accordion_content-wrapper">
                            <div className="content-rich-text text-color-secondary w-richtext">
                              <p>We can fund up to 100% of an invoice value, with a practical limit of $500,000 per invoice. This enables businesses to finance large customer orders and scale with confidence.</p>
                            </div>
                            <div aria-hidden="true" className="faq-main-accordion_spacer"></div>
                          </div>
                        </div>
                      </div>
                      <div className="w-layout-vflex u-sr-only">
                        <div className="w-dyn-list">
                          <div role="list" className="w-dyn-items">
                            <div role="listitem" className="w-dyn-item">
                              <div fs-list-field="products">Sell an invoice</div>
                            </div>
                          </div>
                        </div>
                        <div fs-list-field="products">General</div>
                      </div>
                    </div>
                    <div role="listitem" className="w-dyn-item">
                      <div cc-schema-element="faq" cc-accordion-element="accordion" className="faq-main-accordion_wrap">
                        <button aria-expanded="false" aria-controls="accordion-details-10" id="accordion-summary-10" cc-accordion-element="trigger" cc-schema-element="question" className="faq-main-accordion_top-container" role="button" tabIndex="0">
                          <h3 className="heading-style-h6">What are the costs of accounts receivable financing?</h3>
                          <div className="faq-main-accordion_icon-wrap">
                            <div className="faq-main-accordion_icon-svg w-embed">
                              <svg xmlns="http://www.w3.org/2000/svg" width="100%" height="100%" viewBox="0 0 14 15" fill="none" preserveAspectRatio="xMidYMid meet" aria-hidden="true" role="img">
                                <circle cx="2.05078" cy="7.78273" r="1.16667" transform="rotate(45 2.05078 7.78273)" fill="currentColor" />
                                <circle cx="11.9492" cy="7.78468" r="1.16667" transform="rotate(45 11.9492 7.78468)" fill="currentColor" />
                                <circle cx="7" cy="7.7837" r="1.16667" transform="rotate(45 7 7.7837)" fill="currentColor" />
                              </svg>
                            </div>
                            <div cc-accordion-element="icon" className="faq-main-accordion_icon-svg w-embed" style={{ "transform": "rotate(0deg)" }}>
                              <svg xmlns="http://www.w3.org/2000/svg" width="100%" height="100%" viewBox="0 0 14 15" fill="none" preserveAspectRatio="xMidYMid meet" aria-hidden="true" role="img">
                                <circle cx="6.99879" cy="12.7329" r="1.16667" transform="rotate(-45 6.99879 12.7329)" fill="currentColor" />
                                <circle cx="7.00123" cy="2.83447" r="1.16667" transform="rotate(-45 7.00123 2.83447)" fill="currentColor" />
                                <circle cx="7.00001" cy="7.78369" r="1.16667" transform="rotate(-45 7.00001 7.78369)" fill="currentColor" />
                              </svg>
                            </div>
                          </div>
                        </button>
                        <div id="accordion-details-10" role="region" aria-labelledby="accordion-summary-10" cc-accordion-element="content" cc-schema-element="answer" className="faq-main-accordion_bottom-container" style={{ "height": "0px", "opacity": "0" }}>
                          <div className="faq-main-accordion_content-wrapper">
                            <div className="content-rich-text text-color-secondary w-richtext">
                              <p>Pricing is simple and transparent:</p>
                              <p>1% flat processing fee at the time of funding.</p>
                              <p>~1% monthly financing fee, depending on risk profile.</p>
                              <p>For example, funding a $10,000 receivable for 60 days would typically cost about $200 in financing plus the $100 processing fee.</p>
                            </div>
                            <div aria-hidden="true" className="faq-main-accordion_spacer"></div>
                          </div>
                        </div>
                      </div>
                      <div className="w-layout-vflex u-sr-only">
                        <div className="w-dyn-list">
                          <div role="list" className="w-dyn-items">
                            <div role="listitem" className="w-dyn-item">
                              <div fs-list-field="products">Sell an invoice</div>
                            </div>
                          </div>
                        </div>
                        <div fs-list-field="products">General</div>
                      </div>
                    </div>
                    <div role="listitem" className="w-dyn-item">
                      <div cc-schema-element="faq" cc-accordion-element="accordion" className="faq-main-accordion_wrap">
                        <button aria-expanded="false" aria-controls="accordion-details-11" id="accordion-summary-11" cc-accordion-element="trigger" cc-schema-element="question" className="faq-main-accordion_top-container" role="button" tabIndex="0">
                          <h3 className="heading-style-h6">How quickly can I access funds with accounts receivable financing?</h3>
                          <div className="faq-main-accordion_icon-wrap">
                            <div className="faq-main-accordion_icon-svg w-embed">
                              <svg xmlns="http://www.w3.org/2000/svg" width="100%" height="100%" viewBox="0 0 14 15" fill="none" preserveAspectRatio="xMidYMid meet" aria-hidden="true" role="img">
                                <circle cx="2.05078" cy="7.78273" r="1.16667" transform="rotate(45 2.05078 7.78273)" fill="currentColor" />
                                <circle cx="11.9492" cy="7.78468" r="1.16667" transform="rotate(45 11.9492 7.78468)" fill="currentColor" />
                                <circle cx="7" cy="7.7837" r="1.16667" transform="rotate(45 7 7.7837)" fill="currentColor" />
                              </svg>
                            </div>
                            <div cc-accordion-element="icon" className="faq-main-accordion_icon-svg w-embed" style={{ "transform": "rotate(0deg)" }}>
                              <svg xmlns="http://www.w3.org/2000/svg" width="100%" height="100%" viewBox="0 0 14 15" fill="none" preserveAspectRatio="xMidYMid meet" aria-hidden="true" role="img">
                                <circle cx="6.99879" cy="12.7329" r="1.16667" transform="rotate(-45 6.99879 12.7329)" fill="currentColor" />
                                <circle cx="7.00123" cy="2.83447" r="1.16667" transform="rotate(-45 7.00123 2.83447)" fill="currentColor" />
                                <circle cx="7.00001" cy="7.78369" r="1.16667" transform="rotate(-45 7.00001 7.78369)" fill="currentColor" />
                              </svg>
                            </div>
                          </div>
                        </button>
                        <div id="accordion-details-11" role="region" aria-labelledby="accordion-summary-11" cc-accordion-element="content" cc-schema-element="answer" className="faq-main-accordion_bottom-container" style={{ "height": "0px", "opacity": "0" }}>
                          <div className="faq-main-accordion_content-wrapper">
                            <div className="content-rich-text text-color-secondary w-richtext">
                              <p>Funding is designed to be immediate. Once invoices are uploaded and approved, businesses can receive payment the same day or the next business day via ACH. This is significantly faster than waiting 30–60 days for customers to pay.</p>
                            </div>
                            <div aria-hidden="true" className="faq-main-accordion_spacer"></div>
                          </div>
                        </div>
                      </div>
                      <div className="w-layout-vflex u-sr-only">
                        <div className="w-dyn-list">
                          <div role="list" className="w-dyn-items">
                            <div role="listitem" className="w-dyn-item">
                              <div fs-list-field="products">Sell an invoice</div>
                            </div>
                          </div>
                        </div>
                        <div fs-list-field="products">General</div>
                      </div>
                    </div>
                    <div role="listitem" className="w-dyn-item">
                      <div cc-schema-element="faq" cc-accordion-element="accordion" className="faq-main-accordion_wrap">
                        <button aria-expanded="false" aria-controls="accordion-details-12" id="accordion-summary-12" cc-accordion-element="trigger" cc-schema-element="question" className="faq-main-accordion_top-container" role="button" tabIndex="0">
                          <h3 className="heading-style-h6">What is a payment terms product?</h3>
                          <div className="faq-main-accordion_icon-wrap">
                            <div className="faq-main-accordion_icon-svg w-embed">
                              <svg xmlns="http://www.w3.org/2000/svg" width="100%" height="100%" viewBox="0 0 14 15" fill="none" preserveAspectRatio="xMidYMid meet" aria-hidden="true" role="img">
                                <circle cx="2.05078" cy="7.78273" r="1.16667" transform="rotate(45 2.05078 7.78273)" fill="currentColor" />
                                <circle cx="11.9492" cy="7.78468" r="1.16667" transform="rotate(45 11.9492 7.78468)" fill="currentColor" />
                                <circle cx="7" cy="7.7837" r="1.16667" transform="rotate(45 7 7.7837)" fill="currentColor" />
                              </svg>
                            </div>
                            <div cc-accordion-element="icon" className="faq-main-accordion_icon-svg w-embed" style={{ "transform": "rotate(0deg)" }}>
                              <svg xmlns="http://www.w3.org/2000/svg" width="100%" height="100%" viewBox="0 0 14 15" fill="none" preserveAspectRatio="xMidYMid meet" aria-hidden="true" role="img">
                                <circle cx="6.99879" cy="12.7329" r="1.16667" transform="rotate(-45 6.99879 12.7329)" fill="currentColor" />
                                <circle cx="7.00123" cy="2.83447" r="1.16667" transform="rotate(-45 7.00123 2.83447)" fill="currentColor" />
                                <circle cx="7.00001" cy="7.78369" r="1.16667" transform="rotate(-45 7.00001 7.78369)" fill="currentColor" />
                              </svg>
                            </div>
                          </div>
                        </button>
                        <div id="accordion-details-12" role="region" aria-labelledby="accordion-summary-12" cc-accordion-element="content" cc-schema-element="answer" className="faq-main-accordion_bottom-container" style={{ "height": "0px", "opacity": "0" }}>
                          <div className="faq-main-accordion_content-wrapper">
                            <div className="content-rich-text text-color-secondary w-richtext">
                              <p>A payment terms product allows vendors to extend flexible net terms to their customers. It’s designed to help vendors close bigger deals and help buyers manage cash flow, all while ensuring the vendor gets paid upfront with no added risk.</p>
                            </div>
                            <div aria-hidden="true" className="faq-main-accordion_spacer"></div>
                          </div>
                        </div>
                      </div>
                      <div className="w-layout-vflex u-sr-only">
                        <div className="w-dyn-list">
                          <div role="list" className="w-dyn-items">
                            <div role="listitem" className="w-dyn-item">
                              <div fs-list-field="products">Outsource net terms</div>
                            </div>
                          </div>
                        </div>
                        <div fs-list-field="products">General</div>
                      </div>
                    </div>
                    <div role="listitem" className="w-dyn-item">
                      <div cc-schema-element="faq" cc-accordion-element="accordion" className="faq-main-accordion_wrap">
                        <button aria-expanded="false" aria-controls="accordion-details-13" id="accordion-summary-13" cc-accordion-element="trigger" cc-schema-element="question" className="faq-main-accordion_top-container" role="button" tabIndex="0">
                          <h3 className="heading-style-h6">How does a payment terms solution work?</h3>
                          <div className="faq-main-accordion_icon-wrap">
                            <div className="faq-main-accordion_icon-svg w-embed">
                              <svg xmlns="http://www.w3.org/2000/svg" width="100%" height="100%" viewBox="0 0 14 15" fill="none" preserveAspectRatio="xMidYMid meet" aria-hidden="true" role="img">
                                <circle cx="2.05078" cy="7.78273" r="1.16667" transform="rotate(45 2.05078 7.78273)" fill="currentColor" />
                                <circle cx="11.9492" cy="7.78468" r="1.16667" transform="rotate(45 11.9492 7.78468)" fill="currentColor" />
                                <circle cx="7" cy="7.7837" r="1.16667" transform="rotate(45 7 7.7837)" fill="currentColor" />
                              </svg>
                            </div>
                            <div cc-accordion-element="icon" className="faq-main-accordion_icon-svg w-embed" style={{ "transform": "rotate(0deg)" }}>
                              <svg xmlns="http://www.w3.org/2000/svg" width="100%" height="100%" viewBox="0 0 14 15" fill="none" preserveAspectRatio="xMidYMid meet" aria-hidden="true" role="img">
                                <circle cx="6.99879" cy="12.7329" r="1.16667" transform="rotate(-45 6.99879 12.7329)" fill="currentColor" />
                                <circle cx="7.00123" cy="2.83447" r="1.16667" transform="rotate(-45 7.00123 2.83447)" fill="currentColor" />
                                <circle cx="7.00001" cy="7.78369" r="1.16667" transform="rotate(-45 7.00001 7.78369)" fill="currentColor" />
                              </svg>
                            </div>
                          </div>
                        </button>
                        <div id="accordion-details-13" role="region" aria-labelledby="accordion-summary-13" cc-accordion-element="content" cc-schema-element="answer" className="faq-main-accordion_bottom-container" style={{ "height": "0px", "opacity": "0" }}>
                          <div className="faq-main-accordion_content-wrapper">
                            <div className="content-rich-text text-color-secondary w-richtext">
                              <p>With a payment terms solution, when a buyer makes a purchase, they can opt to pay over time. We pay the vendor immediately (typically 90–98% of invoice value at delivery), and the buyer repays us on their extended schedule. Vendors can decide whether to absorb the financing cost themselves (to offer “free terms”) or pass it along to their customer.</p>
                            </div>
                            <div aria-hidden="true" className="faq-main-accordion_spacer"></div>
                          </div>
                        </div>
                      </div>
                      <div className="w-layout-vflex u-sr-only">
                        <div className="w-dyn-list">
                          <div role="list" className="w-dyn-items">
                            <div role="listitem" className="w-dyn-item">
                              <div fs-list-field="products">Outsource net terms</div>
                            </div>
                          </div>
                        </div>
                        <div fs-list-field="products">General</div>
                      </div>
                    </div>
                    <div role="listitem" className="w-dyn-item">
                      <div cc-schema-element="faq" cc-accordion-element="accordion" className="faq-main-accordion_wrap">
                        <button aria-expanded="false" aria-controls="accordion-details-14" id="accordion-summary-14" cc-accordion-element="trigger" cc-schema-element="question" className="faq-main-accordion_top-container" role="button" tabIndex="0">
                          <h3 className="heading-style-h6">Who benefits from a payment terms product?</h3>
                          <div className="faq-main-accordion_icon-wrap">
                            <div className="faq-main-accordion_icon-svg w-embed">
                              <svg xmlns="http://www.w3.org/2000/svg" width="100%" height="100%" viewBox="0 0 14 15" fill="none" preserveAspectRatio="xMidYMid meet" aria-hidden="true" role="img">
                                <circle cx="2.05078" cy="7.78273" r="1.16667" transform="rotate(45 2.05078 7.78273)" fill="currentColor" />
                                <circle cx="11.9492" cy="7.78468" r="1.16667" transform="rotate(45 11.9492 7.78468)" fill="currentColor" />
                                <circle cx="7" cy="7.7837" r="1.16667" transform="rotate(45 7 7.7837)" fill="currentColor" />
                              </svg>
                            </div>
                            <div cc-accordion-element="icon" className="faq-main-accordion_icon-svg w-embed" style={{ "transform": "rotate(0deg)" }}>
                              <svg xmlns="http://www.w3.org/2000/svg" width="100%" height="100%" viewBox="0 0 14 15" fill="none" preserveAspectRatio="xMidYMid meet" aria-hidden="true" role="img">
                                <circle cx="6.99879" cy="12.7329" r="1.16667" transform="rotate(-45 6.99879 12.7329)" fill="currentColor" />
                                <circle cx="7.00123" cy="2.83447" r="1.16667" transform="rotate(-45 7.00123 2.83447)" fill="currentColor" />
                                <circle cx="7.00001" cy="7.78369" r="1.16667" transform="rotate(-45 7.00001 7.78369)" fill="currentColor" />
                              </svg>
                            </div>
                          </div>
                        </button>
                        <div id="accordion-details-14" role="region" aria-labelledby="accordion-summary-14" cc-accordion-element="content" cc-schema-element="answer" className="faq-main-accordion_bottom-container" style={{ "height": "0px", "opacity": "0" }}>
                          <div className="faq-main-accordion_content-wrapper">
                            <div className="content-rich-text text-color-secondary w-richtext">
                              <p>Both sides win:</p>
                              <p>Vendors benefit by increasing order sizes, boosting sales, and getting cash upfront without carrying credit risk.</p>
                              <p>Buyers benefit by gaining more time to pay for purchases, smoothing cash flow, and securing larger or more frequent orders without needing immediate capital.</p>
                            </div>
                            <div aria-hidden="true" className="faq-main-accordion_spacer"></div>
                          </div>
                        </div>
                      </div>
                      <div className="w-layout-vflex u-sr-only">
                        <div className="w-dyn-list">
                          <div role="list" className="w-dyn-items">
                            <div role="listitem" className="w-dyn-item">
                              <div fs-list-field="products">Outsource net terms</div>
                            </div>
                          </div>
                        </div>
                        <div fs-list-field="products">General</div>
                      </div>
                    </div>
                    <div role="listitem" className="w-dyn-item">
                      <div cc-schema-element="faq" cc-accordion-element="accordion" className="faq-main-accordion_wrap">
                        <button aria-expanded="false" aria-controls="accordion-details-15" id="accordion-summary-15" cc-accordion-element="trigger" cc-schema-element="question" className="faq-main-accordion_top-container" role="button" tabIndex="0">
                          <h3 className="heading-style-h6">How does a payment terms product affect suppliers?</h3>
                          <div className="faq-main-accordion_icon-wrap">
                            <div className="faq-main-accordion_icon-svg w-embed">
                              <svg xmlns="http://www.w3.org/2000/svg" width="100%" height="100%" viewBox="0 0 14 15" fill="none" preserveAspectRatio="xMidYMid meet" aria-hidden="true" role="img">
                                <circle cx="2.05078" cy="7.78273" r="1.16667" transform="rotate(45 2.05078 7.78273)" fill="currentColor" />
                                <circle cx="11.9492" cy="7.78468" r="1.16667" transform="rotate(45 11.9492 7.78468)" fill="currentColor" />
                                <circle cx="7" cy="7.7837" r="1.16667" transform="rotate(45 7 7.7837)" fill="currentColor" />
                              </svg>
                            </div>
                            <div cc-accordion-element="icon" className="faq-main-accordion_icon-svg w-embed" style={{ "transform": "rotate(0deg)" }}>
                              <svg xmlns="http://www.w3.org/2000/svg" width="100%" height="100%" viewBox="0 0 14 15" fill="none" preserveAspectRatio="xMidYMid meet" aria-hidden="true" role="img">
                                <circle cx="6.99879" cy="12.7329" r="1.16667" transform="rotate(-45 6.99879 12.7329)" fill="currentColor" />
                                <circle cx="7.00123" cy="2.83447" r="1.16667" transform="rotate(-45 7.00123 2.83447)" fill="currentColor" />
                                <circle cx="7.00001" cy="7.78369" r="1.16667" transform="rotate(-45 7.00001 7.78369)" fill="currentColor" />
                              </svg>
                            </div>
                          </div>
                        </button>
                        <div id="accordion-details-15" role="region" aria-labelledby="accordion-summary-15" cc-accordion-element="content" cc-schema-element="answer" className="faq-main-accordion_bottom-container" style={{ "height": "0px", "opacity": "0" }}>
                          <div className="faq-main-accordion_content-wrapper">
                            <div className="content-rich-text text-color-secondary w-richtext">
                              <p>For suppliers, a payment terms product means they don’t have to wait for buyers to pay. They receive near-instant cash while still offering attractive terms to customers. This strengthens vendor–customer relationships by giving customers more purchasing flexibility, without suppliers having to act as the bank.</p>
                            </div>
                            <div aria-hidden="true" className="faq-main-accordion_spacer"></div>
                          </div>
                        </div>
                      </div>
                      <div className="w-layout-vflex u-sr-only">
                        <div className="w-dyn-list">
                          <div role="list" className="w-dyn-items">
                            <div role="listitem" className="w-dyn-item">
                              <div fs-list-field="products">Outsource net terms</div>
                            </div>
                          </div>
                        </div>
                        <div fs-list-field="products">General</div>
                      </div>
                    </div>
                    <div role="listitem" className="w-dyn-item">
                      <div cc-schema-element="faq" cc-accordion-element="accordion" className="faq-main-accordion_wrap">
                        <button aria-expanded="false" aria-controls="accordion-details-16" id="accordion-summary-16" cc-accordion-element="trigger" cc-schema-element="question" className="faq-main-accordion_top-container" role="button" tabIndex="0">
                          <h3 className="heading-style-h6">How quickly can suppliers get paid with a payment terms product?</h3>
                          <div className="faq-main-accordion_icon-wrap">
                            <div className="faq-main-accordion_icon-svg w-embed">
                              <svg xmlns="http://www.w3.org/2000/svg" width="100%" height="100%" viewBox="0 0 14 15" fill="none" preserveAspectRatio="xMidYMid meet" aria-hidden="true" role="img">
                                <circle cx="2.05078" cy="7.78273" r="1.16667" transform="rotate(45 2.05078 7.78273)" fill="currentColor" />
                                <circle cx="11.9492" cy="7.78468" r="1.16667" transform="rotate(45 11.9492 7.78468)" fill="currentColor" />
                                <circle cx="7" cy="7.7837" r="1.16667" transform="rotate(45 7 7.7837)" fill="currentColor" />
                              </svg>
                            </div>
                            <div cc-accordion-element="icon" className="faq-main-accordion_icon-svg w-embed" style={{ "transform": "rotate(0deg)" }}>
                              <svg xmlns="http://www.w3.org/2000/svg" width="100%" height="100%" viewBox="0 0 14 15" fill="none" preserveAspectRatio="xMidYMid meet" aria-hidden="true" role="img">
                                <circle cx="6.99879" cy="12.7329" r="1.16667" transform="rotate(-45 6.99879 12.7329)" fill="currentColor" />
                                <circle cx="7.00123" cy="2.83447" r="1.16667" transform="rotate(-45 7.00123 2.83447)" fill="currentColor" />
                                <circle cx="7.00001" cy="7.78369" r="1.16667" transform="rotate(-45 7.00001 7.78369)" fill="currentColor" />
                              </svg>
                            </div>
                          </div>
                        </button>
                        <div id="accordion-details-16" role="region" aria-labelledby="accordion-summary-16" cc-accordion-element="content" cc-schema-element="answer" className="faq-main-accordion_bottom-container" style={{ "height": "0px", "opacity": "0" }}>
                          <div className="faq-main-accordion_content-wrapper">
                            <div className="content-rich-text text-color-secondary w-richtext">
                              <p>Suppliers are paid immediately upon delivery, typically 90–98% of the invoice value is disbursed upfront. There’s no waiting for the buyer’s 30-, 45-, or 60-day repayment cycle. The remaining balance (if any) is reconciled once the buyer pays their full invoice.</p>
                            </div>
                            <div aria-hidden="true" className="faq-main-accordion_spacer"></div>
                          </div>
                        </div>
                      </div>
                      <div className="w-layout-vflex u-sr-only">
                        <div className="w-dyn-list">
                          <div role="list" className="w-dyn-items">
                            <div role="listitem" className="w-dyn-item">
                              <div fs-list-field="products">Outsource net terms</div>
                            </div>
                          </div>
                        </div>
                        <div fs-list-field="products">General</div>
                      </div>
                    </div>
                    <div role="listitem" className="w-dyn-item">
                      <div cc-schema-element="faq" cc-accordion-element="accordion" className="faq-main-accordion_wrap">
                        <button aria-expanded="false" aria-controls="accordion-details-17" id="accordion-summary-17" cc-accordion-element="trigger" cc-schema-element="question" className="faq-main-accordion_top-container" role="button" tabIndex="0">
                          <h3 className="heading-style-h6">What are the costs of using a payment terms product?</h3>
                          <div className="faq-main-accordion_icon-wrap">
                            <div className="faq-main-accordion_icon-svg w-embed">
                              <svg xmlns="http://www.w3.org/2000/svg" width="100%" height="100%" viewBox="0 0 14 15" fill="none" preserveAspectRatio="xMidYMid meet" aria-hidden="true" role="img">
                                <circle cx="2.05078" cy="7.78273" r="1.16667" transform="rotate(45 2.05078 7.78273)" fill="currentColor" />
                                <circle cx="11.9492" cy="7.78468" r="1.16667" transform="rotate(45 11.9492 7.78468)" fill="currentColor" />
                                <circle cx="7" cy="7.7837" r="1.16667" transform="rotate(45 7 7.7837)" fill="currentColor" />
                              </svg>
                            </div>
                            <div cc-accordion-element="icon" className="faq-main-accordion_icon-svg w-embed" style={{ "transform": "rotate(0deg)" }}>
                              <svg xmlns="http://www.w3.org/2000/svg" width="100%" height="100%" viewBox="0 0 14 15" fill="none" preserveAspectRatio="xMidYMid meet" aria-hidden="true" role="img">
                                <circle cx="6.99879" cy="12.7329" r="1.16667" transform="rotate(-45 6.99879 12.7329)" fill="currentColor" />
                                <circle cx="7.00123" cy="2.83447" r="1.16667" transform="rotate(-45 7.00123 2.83447)" fill="currentColor" />
                                <circle cx="7.00001" cy="7.78369" r="1.16667" transform="rotate(-45 7.00001 7.78369)" fill="currentColor" />
                              </svg>
                            </div>
                          </div>
                        </button>
                        <div id="accordion-details-17" role="region" aria-labelledby="accordion-summary-17" cc-accordion-element="content" cc-schema-element="answer" className="faq-main-accordion_bottom-container" style={{ "height": "0px", "opacity": "0" }}>
                          <div className="faq-main-accordion_content-wrapper">
                            <div className="content-rich-text text-color-secondary w-richtext">
                              <p>Costs are structured flexibly:</p>
                              <p>Vendors can cover the financing fee to offer free terms as a sales incentive.</p>
                              <p>Alternatively, the buyer pays the fee in exchange for the ability to extend payment.This makes the product adaptable. Vendors can use it to drive sales growth, while buyers can use it as a cash flow tool.</p>
                            </div>
                            <div aria-hidden="true" className="faq-main-accordion_spacer"></div>
                          </div>
                        </div>
                      </div>
                      <div className="w-layout-vflex u-sr-only">
                        <div className="w-dyn-list">
                          <div role="list" className="w-dyn-items">
                            <div role="listitem" className="w-dyn-item">
                              <div fs-list-field="products">Outsource net terms</div>
                            </div>
                          </div>
                        </div>
                        <div fs-list-field="products">General</div>
                      </div>
                    </div>
                    <div role="listitem" className="w-dyn-item">
                      <div cc-schema-element="faq" cc-accordion-element="accordion" className="faq-main-accordion_wrap">
                        <button aria-expanded="false" aria-controls="accordion-details-18" id="accordion-summary-18" cc-accordion-element="trigger" cc-schema-element="question" className="faq-main-accordion_top-container" role="button" tabIndex="0">
                          <h3 className="heading-style-h6">What is a working capital line of credit?</h3>
                          <div className="faq-main-accordion_icon-wrap">
                            <div className="faq-main-accordion_icon-svg w-embed">
                              <svg xmlns="http://www.w3.org/2000/svg" width="100%" height="100%" viewBox="0 0 14 15" fill="none" preserveAspectRatio="xMidYMid meet" aria-hidden="true" role="img">
                                <circle cx="2.05078" cy="7.78273" r="1.16667" transform="rotate(45 2.05078 7.78273)" fill="currentColor" />
                                <circle cx="11.9492" cy="7.78468" r="1.16667" transform="rotate(45 11.9492 7.78468)" fill="currentColor" />
                                <circle cx="7" cy="7.7837" r="1.16667" transform="rotate(45 7 7.7837)" fill="currentColor" />
                              </svg>
                            </div>
                            <div cc-accordion-element="icon" className="faq-main-accordion_icon-svg w-embed" style={{ "transform": "rotate(0deg)" }}>
                              <svg xmlns="http://www.w3.org/2000/svg" width="100%" height="100%" viewBox="0 0 14 15" fill="none" preserveAspectRatio="xMidYMid meet" aria-hidden="true" role="img">
                                <circle cx="6.99879" cy="12.7329" r="1.16667" transform="rotate(-45 6.99879 12.7329)" fill="currentColor" />
                                <circle cx="7.00123" cy="2.83447" r="1.16667" transform="rotate(-45 7.00123 2.83447)" fill="currentColor" />
                                <circle cx="7.00001" cy="7.78369" r="1.16667" transform="rotate(-45 7.00001 7.78369)" fill="currentColor" />
                              </svg>
                            </div>
                          </div>
                        </button>
                        <div id="accordion-details-18" role="region" aria-labelledby="accordion-summary-18" cc-accordion-element="content" cc-schema-element="answer" className="faq-main-accordion_bottom-container" style={{ "height": "0px", "opacity": "0" }}>
                          <div className="faq-main-accordion_content-wrapper">
                            <div className="content-rich-text text-color-secondary w-richtext">
                              <p>Working capital line of credit (for larger purchases) is designed for larger business needs like inventory, taxes, or expansion projects. It provides a revolving credit facility with terms ranging from 45 to 180 days, allowing businesses to borrow, repay, and redraw as needed.</p>
                            </div>
                            <div aria-hidden="true" className="faq-main-accordion_spacer"></div>
                          </div>
                        </div>
                      </div>
                      <div className="w-layout-vflex u-sr-only">
                        <div className="w-dyn-list">
                          <div role="list" className="w-dyn-items">
                            <div role="listitem" className="w-dyn-item">
                              <div fs-list-field="products">Draw working capital</div>
                            </div>
                          </div>
                        </div>
                        <div fs-list-field="products">General</div>
                      </div>
                    </div>
                    <div role="listitem" className="w-dyn-item">
                      <div cc-schema-element="faq" cc-accordion-element="accordion" className="faq-main-accordion_wrap">
                        <button aria-expanded="false" aria-controls="accordion-details-19" id="accordion-summary-19" cc-accordion-element="trigger" cc-schema-element="question" className="faq-main-accordion_top-container" role="button" tabIndex="0">
                          <h3 className="heading-style-h6">How does a business line of credit work?</h3>
                          <div className="faq-main-accordion_icon-wrap">
                            <div className="faq-main-accordion_icon-svg w-embed">
                              <svg xmlns="http://www.w3.org/2000/svg" width="100%" height="100%" viewBox="0 0 14 15" fill="none" preserveAspectRatio="xMidYMid meet" aria-hidden="true" role="img">
                                <circle cx="2.05078" cy="7.78273" r="1.16667" transform="rotate(45 2.05078 7.78273)" fill="currentColor" />
                                <circle cx="11.9492" cy="7.78468" r="1.16667" transform="rotate(45 11.9492 7.78468)" fill="currentColor" />
                                <circle cx="7" cy="7.7837" r="1.16667" transform="rotate(45 7 7.7837)" fill="currentColor" />
                              </svg>
                            </div>
                            <div cc-accordion-element="icon" className="faq-main-accordion_icon-svg w-embed" style={{ "transform": "rotate(0deg)" }}>
                              <svg xmlns="http://www.w3.org/2000/svg" width="100%" height="100%" viewBox="0 0 14 15" fill="none" preserveAspectRatio="xMidYMid meet" aria-hidden="true" role="img">
                                <circle cx="6.99879" cy="12.7329" r="1.16667" transform="rotate(-45 6.99879 12.7329)" fill="currentColor" />
                                <circle cx="7.00123" cy="2.83447" r="1.16667" transform="rotate(-45 7.00123 2.83447)" fill="currentColor" />
                                <circle cx="7.00001" cy="7.78369" r="1.16667" transform="rotate(-45 7.00001 7.78369)" fill="currentColor" />
                              </svg>
                            </div>
                          </div>
                        </button>
                        <div id="accordion-details-19" role="region" aria-labelledby="accordion-summary-19" cc-accordion-element="content" cc-schema-element="answer" className="faq-main-accordion_bottom-container" style={{ "height": "0px", "opacity": "0" }}>
                          <div className="faq-main-accordion_content-wrapper">
                            <div className="content-rich-text text-color-secondary w-richtext">
                              <p>Businesses draw only the funds they need and repay them in weekly installments. Each repayment refreshes the available limit, so companies can continue accessing capital without reapplying. The credit line scales with the company’s revenue and working capital needs, making it highly adaptable.</p>
                            </div>
                            <div aria-hidden="true" className="faq-main-accordion_spacer"></div>
                          </div>
                        </div>
                      </div>
                      <div className="w-layout-vflex u-sr-only">
                        <div className="w-dyn-list">
                          <div role="list" className="w-dyn-items">
                            <div role="listitem" className="w-dyn-item">
                              <div fs-list-field="products">Draw working capital</div>
                            </div>
                          </div>
                        </div>
                        <div fs-list-field="products">General</div>
                      </div>
                    </div>
                    <div role="listitem" className="w-dyn-item">
                      <div cc-schema-element="faq" cc-accordion-element="accordion" className="faq-main-accordion_wrap">
                        <button aria-expanded="false" aria-controls="accordion-details-20" id="accordion-summary-20" cc-accordion-element="trigger" cc-schema-element="question" className="faq-main-accordion_top-container" role="button" tabIndex="0">
                          <h3 className="heading-style-h6">How is a line of credit different from a term loan?</h3>
                          <div className="faq-main-accordion_icon-wrap">
                            <div className="faq-main-accordion_icon-svg w-embed">
                              <svg xmlns="http://www.w3.org/2000/svg" width="100%" height="100%" viewBox="0 0 14 15" fill="none" preserveAspectRatio="xMidYMid meet" aria-hidden="true" role="img">
                                <circle cx="2.05078" cy="7.78273" r="1.16667" transform="rotate(45 2.05078 7.78273)" fill="currentColor" />
                                <circle cx="11.9492" cy="7.78468" r="1.16667" transform="rotate(45 11.9492 7.78468)" fill="currentColor" />
                                <circle cx="7" cy="7.7837" r="1.16667" transform="rotate(45 7 7.7837)" fill="currentColor" />
                              </svg>
                            </div>
                            <div cc-accordion-element="icon" className="faq-main-accordion_icon-svg w-embed" style={{ "transform": "rotate(0deg)" }}>
                              <svg xmlns="http://www.w3.org/2000/svg" width="100%" height="100%" viewBox="0 0 14 15" fill="none" preserveAspectRatio="xMidYMid meet" aria-hidden="true" role="img">
                                <circle cx="6.99879" cy="12.7329" r="1.16667" transform="rotate(-45 6.99879 12.7329)" fill="currentColor" />
                                <circle cx="7.00123" cy="2.83447" r="1.16667" transform="rotate(-45 7.00123 2.83447)" fill="currentColor" />
                                <circle cx="7.00001" cy="7.78369" r="1.16667" transform="rotate(-45 7.00001 7.78369)" fill="currentColor" />
                              </svg>
                            </div>
                          </div>
                        </button>
                        <div id="accordion-details-20" role="region" aria-labelledby="accordion-summary-20" cc-accordion-element="content" cc-schema-element="answer" className="faq-main-accordion_bottom-container" style={{ "height": "0px", "opacity": "0" }}>
                          <div className="faq-main-accordion_content-wrapper">
                            <div className="content-rich-text text-color-secondary w-richtext">
                              <p>Unlike a term loan, which provides a lump sum with fixed repayment over a long period, a line of credit is revolving: funds are borrowed, repaid, and then available again. This makes it more flexible for businesses with short-term or recurring working capital needs rather than long-term, fixed obligations.</p>
                            </div>
                            <div aria-hidden="true" className="faq-main-accordion_spacer"></div>
                          </div>
                        </div>
                      </div>
                      <div className="w-layout-vflex u-sr-only">
                        <div className="w-dyn-list">
                          <div role="list" className="w-dyn-items">
                            <div role="listitem" className="w-dyn-item">
                              <div fs-list-field="products">Draw working capital</div>
                            </div>
                          </div>
                        </div>
                        <div fs-list-field="products">General</div>
                      </div>
                    </div>
                    <div role="listitem" className="w-dyn-item">
                      <div cc-schema-element="faq" cc-accordion-element="accordion" className="faq-main-accordion_wrap">
                        <button aria-expanded="false" aria-controls="accordion-details-21" id="accordion-summary-21" cc-accordion-element="trigger" cc-schema-element="question" className="faq-main-accordion_top-container" role="button" tabIndex="0">
                          <h3 className="heading-style-h6">What are the costs of a working capital line of credit for large purchases?</h3>
                          <div className="faq-main-accordion_icon-wrap">
                            <div className="faq-main-accordion_icon-svg w-embed">
                              <svg xmlns="http://www.w3.org/2000/svg" width="100%" height="100%" viewBox="0 0 14 15" fill="none" preserveAspectRatio="xMidYMid meet" aria-hidden="true" role="img">
                                <circle cx="2.05078" cy="7.78273" r="1.16667" transform="rotate(45 2.05078 7.78273)" fill="currentColor" />
                                <circle cx="11.9492" cy="7.78468" r="1.16667" transform="rotate(45 11.9492 7.78468)" fill="currentColor" />
                                <circle cx="7" cy="7.7837" r="1.16667" transform="rotate(45 7 7.7837)" fill="currentColor" />
                              </svg>
                            </div>
                            <div cc-accordion-element="icon" className="faq-main-accordion_icon-svg w-embed" style={{ "transform": "rotate(0deg)" }}>
                              <svg xmlns="http://www.w3.org/2000/svg" width="100%" height="100%" viewBox="0 0 14 15" fill="none" preserveAspectRatio="xMidYMid meet" aria-hidden="true" role="img">
                                <circle cx="6.99879" cy="12.7329" r="1.16667" transform="rotate(-45 6.99879 12.7329)" fill="currentColor" />
                                <circle cx="7.00123" cy="2.83447" r="1.16667" transform="rotate(-45 7.00123 2.83447)" fill="currentColor" />
                                <circle cx="7.00001" cy="7.78369" r="1.16667" transform="rotate(-45 7.00001 7.78369)" fill="currentColor" />
                              </svg>
                            </div>
                          </div>
                        </button>
                        <div id="accordion-details-21" role="region" aria-labelledby="accordion-summary-21" cc-accordion-element="content" cc-schema-element="answer" className="faq-main-accordion_bottom-container" style={{ "height": "0px", "opacity": "0" }}>
                          <div className="faq-main-accordion_content-wrapper">
                            <div className="content-rich-text text-color-secondary w-richtext">
                              <p>Processing fee: 3–5% at the time of draw (deducted upfront).</p>
                              <p>Financing fee: ~1–2% per month, depending on risk profile.</p>
                              <p>{"There are no hidden fees, setup fees, or prepayment penalties, and businesses only pay for what they use. "}</p>
                            </div>
                            <div aria-hidden="true" className="faq-main-accordion_spacer"></div>
                          </div>
                        </div>
                      </div>
                      <div className="w-layout-vflex u-sr-only">
                        <div className="w-dyn-list">
                          <div role="list" className="w-dyn-items">
                            <div role="listitem" className="w-dyn-item">
                              <div fs-list-field="products">Draw working capital</div>
                            </div>
                          </div>
                        </div>
                        <div fs-list-field="products">General</div>
                      </div>
                    </div>
                    <div role="listitem" className="w-dyn-item">
                      <div cc-schema-element="faq" cc-accordion-element="accordion" className="faq-main-accordion_wrap">
                        <button aria-expanded="false" aria-controls="accordion-details-22" id="accordion-summary-22" cc-accordion-element="trigger" cc-schema-element="question" className="faq-main-accordion_top-container" role="button" tabIndex="0">
                          <h3 className="heading-style-h6">Do I need collateral for a business line of credit for large purchases?</h3>
                          <div className="faq-main-accordion_icon-wrap">
                            <div className="faq-main-accordion_icon-svg w-embed">
                              <svg xmlns="http://www.w3.org/2000/svg" width="100%" height="100%" viewBox="0 0 14 15" fill="none" preserveAspectRatio="xMidYMid meet" aria-hidden="true" role="img">
                                <circle cx="2.05078" cy="7.78273" r="1.16667" transform="rotate(45 2.05078 7.78273)" fill="currentColor" />
                                <circle cx="11.9492" cy="7.78468" r="1.16667" transform="rotate(45 11.9492 7.78468)" fill="currentColor" />
                                <circle cx="7" cy="7.7837" r="1.16667" transform="rotate(45 7 7.7837)" fill="currentColor" />
                              </svg>
                            </div>
                            <div cc-accordion-element="icon" className="faq-main-accordion_icon-svg w-embed" style={{ "transform": "rotate(0deg)" }}>
                              <svg xmlns="http://www.w3.org/2000/svg" width="100%" height="100%" viewBox="0 0 14 15" fill="none" preserveAspectRatio="xMidYMid meet" aria-hidden="true" role="img">
                                <circle cx="6.99879" cy="12.7329" r="1.16667" transform="rotate(-45 6.99879 12.7329)" fill="currentColor" />
                                <circle cx="7.00123" cy="2.83447" r="1.16667" transform="rotate(-45 7.00123 2.83447)" fill="currentColor" />
                                <circle cx="7.00001" cy="7.78369" r="1.16667" transform="rotate(-45 7.00001 7.78369)" fill="currentColor" />
                              </svg>
                            </div>
                          </div>
                        </button>
                        <div id="accordion-details-22" role="region" aria-labelledby="accordion-summary-22" cc-accordion-element="content" cc-schema-element="answer" className="faq-main-accordion_bottom-container" style={{ "height": "0px", "opacity": "0" }}>
                          <div className="faq-main-accordion_content-wrapper">
                            <div className="content-rich-text text-color-secondary w-richtext">
                              <p>No. We do not require collateral or a personal guarantee for our line of credit product. Instead, approval is based on business performance and AI-driven underwriting, unlike banks or MCA providers.</p>
                            </div>
                            <div aria-hidden="true" className="faq-main-accordion_spacer"></div>
                          </div>
                        </div>
                      </div>
                      <div className="w-layout-vflex u-sr-only">
                        <div className="w-dyn-list">
                          <div role="list" className="w-dyn-items">
                            <div role="listitem" className="w-dyn-item">
                              <div fs-list-field="products">Draw working capital</div>
                            </div>
                          </div>
                        </div>
                        <div fs-list-field="products">General</div>
                      </div>
                    </div>
                    <div role="listitem" className="w-dyn-item">
                      <div cc-schema-element="faq" cc-accordion-element="accordion" className="faq-main-accordion_wrap">
                        <button aria-expanded="false" aria-controls="accordion-details-23" id="accordion-summary-23" cc-accordion-element="trigger" cc-schema-element="question" className="faq-main-accordion_top-container" role="button" tabIndex="0">
                          <h3 className="heading-style-h6">How quickly can I access funds once approved?</h3>
                          <div className="faq-main-accordion_icon-wrap">
                            <div className="faq-main-accordion_icon-svg w-embed">
                              <svg xmlns="http://www.w3.org/2000/svg" width="100%" height="100%" viewBox="0 0 14 15" fill="none" preserveAspectRatio="xMidYMid meet" aria-hidden="true" role="img">
                                <circle cx="2.05078" cy="7.78273" r="1.16667" transform="rotate(45 2.05078 7.78273)" fill="currentColor" />
                                <circle cx="11.9492" cy="7.78468" r="1.16667" transform="rotate(45 11.9492 7.78468)" fill="currentColor" />
                                <circle cx="7" cy="7.7837" r="1.16667" transform="rotate(45 7 7.7837)" fill="currentColor" />
                              </svg>
                            </div>
                            <div cc-accordion-element="icon" className="faq-main-accordion_icon-svg w-embed" style={{ "transform": "rotate(0deg)" }}>
                              <svg xmlns="http://www.w3.org/2000/svg" width="100%" height="100%" viewBox="0 0 14 15" fill="none" preserveAspectRatio="xMidYMid meet" aria-hidden="true" role="img">
                                <circle cx="6.99879" cy="12.7329" r="1.16667" transform="rotate(-45 6.99879 12.7329)" fill="currentColor" />
                                <circle cx="7.00123" cy="2.83447" r="1.16667" transform="rotate(-45 7.00123 2.83447)" fill="currentColor" />
                                <circle cx="7.00001" cy="7.78369" r="1.16667" transform="rotate(-45 7.00001 7.78369)" fill="currentColor" />
                              </svg>
                            </div>
                          </div>
                        </button>
                        <div id="accordion-details-23" role="region" aria-labelledby="accordion-summary-23" cc-accordion-element="content" cc-schema-element="answer" className="faq-main-accordion_bottom-container" style={{ "height": "0px", "opacity": "0" }}>
                          <div className="faq-main-accordion_content-wrapper">
                            <div className="content-rich-text text-color-secondary w-richtext">
                              <p>Once approved and onboarded, businesses can draw funds directly from our portal. Funding is typically available immediately after a request and disbursed via ACH, making access much faster than traditional banks.</p>
                            </div>
                            <div aria-hidden="true" className="faq-main-accordion_spacer"></div>
                          </div>
                        </div>
                      </div>
                      <div className="w-layout-vflex u-sr-only">
                        <div className="w-dyn-list">
                          <div role="list" className="w-dyn-items">
                            <div role="listitem" className="w-dyn-item">
                              <div fs-list-field="products">Draw working capital</div>
                            </div>
                          </div>
                        </div>
                        <div fs-list-field="products">General</div>
                      </div>
                    </div>
                    <div role="listitem" className="w-dyn-item">
                      <div cc-schema-element="faq" cc-accordion-element="accordion" className="faq-main-accordion_wrap">
                        <button aria-expanded="false" aria-controls="accordion-details-24" id="accordion-summary-24" cc-accordion-element="trigger" cc-schema-element="question" className="faq-main-accordion_top-container" role="button" tabIndex="0">
                          <h3 className="heading-style-h6">What is an AI agent for accounts receivable?</h3>
                          <div className="faq-main-accordion_icon-wrap">
                            <div className="faq-main-accordion_icon-svg w-embed">
                              <svg xmlns="http://www.w3.org/2000/svg" width="100%" height="100%" viewBox="0 0 14 15" fill="none" preserveAspectRatio="xMidYMid meet" aria-hidden="true" role="img">
                                <circle cx="2.05078" cy="7.78273" r="1.16667" transform="rotate(45 2.05078 7.78273)" fill="currentColor" />
                                <circle cx="11.9492" cy="7.78468" r="1.16667" transform="rotate(45 11.9492 7.78468)" fill="currentColor" />
                                <circle cx="7" cy="7.7837" r="1.16667" transform="rotate(45 7 7.7837)" fill="currentColor" />
                              </svg>
                            </div>
                            <div cc-accordion-element="icon" className="faq-main-accordion_icon-svg w-embed" style={{ "transform": "rotate(0deg)" }}>
                              <svg xmlns="http://www.w3.org/2000/svg" width="100%" height="100%" viewBox="0 0 14 15" fill="none" preserveAspectRatio="xMidYMid meet" aria-hidden="true" role="img">
                                <circle cx="6.99879" cy="12.7329" r="1.16667" transform="rotate(-45 6.99879 12.7329)" fill="currentColor" />
                                <circle cx="7.00123" cy="2.83447" r="1.16667" transform="rotate(-45 7.00123 2.83447)" fill="currentColor" />
                                <circle cx="7.00001" cy="7.78369" r="1.16667" transform="rotate(-45 7.00001 7.78369)" fill="currentColor" />
                              </svg>
                            </div>
                          </div>
                        </button>
                        <div id="accordion-details-24" role="region" aria-labelledby="accordion-summary-24" cc-accordion-element="content" cc-schema-element="answer" className="faq-main-accordion_bottom-container" style={{ "height": "0px", "opacity": "0" }}>
                          <div className="faq-main-accordion_content-wrapper">
                            <div className="content-rich-text text-color-secondary w-richtext">
                              <p>{"An AI agent for accounts receivable refers to software that acts like an extension to your A/R team, automatically chasing invoices, drafting replies, and handling even the more complex tasks like disputes and reconciliation. "}</p>
                              <p>{"Imagine a 24/7 copilot that can take care of all the lower priority items on your team's behalf so they can spend more time on higher priorities. Daylit’s agents also help management be more proactive by learning customer habits and signaling issues before they become serious."}</p>
                            </div>
                            <div aria-hidden="true" className="faq-main-accordion_spacer"></div>
                          </div>
                        </div>
                      </div>
                      <div className="w-layout-vflex u-sr-only">
                        <div className="w-dyn-list">
                          <div className="w-dyn-empty">
                            <div>No items found.</div>
                          </div>
                        </div>
                        <div fs-list-field="products">General</div>
                      </div>
                    </div>
                    <div role="listitem" className="w-dyn-item">
                      <div cc-schema-element="faq" cc-accordion-element="accordion" className="faq-main-accordion_wrap">
                        <button aria-expanded="false" aria-controls="accordion-details-25" id="accordion-summary-25" cc-accordion-element="trigger" cc-schema-element="question" className="faq-main-accordion_top-container" role="button" tabIndex="0">
                          <h3 className="heading-style-h6">How will Daylit AI agents handle my manual work?</h3>
                          <div className="faq-main-accordion_icon-wrap">
                            <div className="faq-main-accordion_icon-svg w-embed">
                              <svg xmlns="http://www.w3.org/2000/svg" width="100%" height="100%" viewBox="0 0 14 15" fill="none" preserveAspectRatio="xMidYMid meet" aria-hidden="true" role="img">
                                <circle cx="2.05078" cy="7.78273" r="1.16667" transform="rotate(45 2.05078 7.78273)" fill="currentColor" />
                                <circle cx="11.9492" cy="7.78468" r="1.16667" transform="rotate(45 11.9492 7.78468)" fill="currentColor" />
                                <circle cx="7" cy="7.7837" r="1.16667" transform="rotate(45 7 7.7837)" fill="currentColor" />
                              </svg>
                            </div>
                            <div cc-accordion-element="icon" className="faq-main-accordion_icon-svg w-embed" style={{ "transform": "rotate(0deg)" }}>
                              <svg xmlns="http://www.w3.org/2000/svg" width="100%" height="100%" viewBox="0 0 14 15" fill="none" preserveAspectRatio="xMidYMid meet" aria-hidden="true" role="img">
                                <circle cx="6.99879" cy="12.7329" r="1.16667" transform="rotate(-45 6.99879 12.7329)" fill="currentColor" />
                                <circle cx="7.00123" cy="2.83447" r="1.16667" transform="rotate(-45 7.00123 2.83447)" fill="currentColor" />
                                <circle cx="7.00001" cy="7.78369" r="1.16667" transform="rotate(-45 7.00001 7.78369)" fill="currentColor" />
                              </svg>
                            </div>
                          </div>
                        </button>
                        <div id="accordion-details-25" role="region" aria-labelledby="accordion-summary-25" cc-accordion-element="content" cc-schema-element="answer" className="faq-main-accordion_bottom-container" style={{ "height": "0px", "opacity": "0" }}>
                          <div className="faq-main-accordion_content-wrapper">
                            <div className="content-rich-text text-color-secondary w-richtext">
                              <p>Daylit’s AI agents are trained to handle all A/R communication by referencing your ERP and historical email communication. Our agents are able to understand all the context of your customer relationship and accurately draft responses for email, call or text to save each team member hundreds of hours of work every year.</p>
                            </div>
                            <div aria-hidden="true" className="faq-main-accordion_spacer"></div>
                          </div>
                        </div>
                      </div>
                      <div className="w-layout-vflex u-sr-only">
                        <div className="w-dyn-list">
                          <div className="w-dyn-empty">
                            <div>No items found.</div>
                          </div>
                        </div>
                        <div fs-list-field="products">General</div>
                      </div>
                    </div>
                    <div role="listitem" className="w-dyn-item">
                      <div cc-schema-element="faq" cc-accordion-element="accordion" className="faq-main-accordion_wrap">
                        <button aria-expanded="false" aria-controls="accordion-details-26" id="accordion-summary-26" cc-accordion-element="trigger" cc-schema-element="question" className="faq-main-accordion_top-container" role="button" tabIndex="0">
                          <h3 className="heading-style-h6">Is it safe to let AI agents respond to emails from my customers?</h3>
                          <div className="faq-main-accordion_icon-wrap">
                            <div className="faq-main-accordion_icon-svg w-embed">
                              <svg xmlns="http://www.w3.org/2000/svg" width="100%" height="100%" viewBox="0 0 14 15" fill="none" preserveAspectRatio="xMidYMid meet" aria-hidden="true" role="img">
                                <circle cx="2.05078" cy="7.78273" r="1.16667" transform="rotate(45 2.05078 7.78273)" fill="currentColor" />
                                <circle cx="11.9492" cy="7.78468" r="1.16667" transform="rotate(45 11.9492 7.78468)" fill="currentColor" />
                                <circle cx="7" cy="7.7837" r="1.16667" transform="rotate(45 7 7.7837)" fill="currentColor" />
                              </svg>
                            </div>
                            <div cc-accordion-element="icon" className="faq-main-accordion_icon-svg w-embed" style={{ "transform": "rotate(0deg)" }}>
                              <svg xmlns="http://www.w3.org/2000/svg" width="100%" height="100%" viewBox="0 0 14 15" fill="none" preserveAspectRatio="xMidYMid meet" aria-hidden="true" role="img">
                                <circle cx="6.99879" cy="12.7329" r="1.16667" transform="rotate(-45 6.99879 12.7329)" fill="currentColor" />
                                <circle cx="7.00123" cy="2.83447" r="1.16667" transform="rotate(-45 7.00123 2.83447)" fill="currentColor" />
                                <circle cx="7.00001" cy="7.78369" r="1.16667" transform="rotate(-45 7.00001 7.78369)" fill="currentColor" />
                              </svg>
                            </div>
                          </div>
                        </button>
                        <div id="accordion-details-26" role="region" aria-labelledby="accordion-summary-26" cc-accordion-element="content" cc-schema-element="answer" className="faq-main-accordion_bottom-container" style={{ "height": "0px", "opacity": "0" }}>
                          <div className="faq-main-accordion_content-wrapper">
                            <div className="content-rich-text text-color-secondary w-richtext">
                              <p>Yes, our agents draft the messages for your team to send, giving you complete control over the tone and content. Daylit will provide the option to respond to certain messages or customers autonomously but will require users to opt-in to this feature.</p>
                            </div>
                            <div aria-hidden="true" className="faq-main-accordion_spacer"></div>
                          </div>
                        </div>
                      </div>
                      <div className="w-layout-vflex u-sr-only">
                        <div className="w-dyn-list">
                          <div className="w-dyn-empty">
                            <div>No items found.</div>
                          </div>
                        </div>
                        <div fs-list-field="products">General</div>
                      </div>
                    </div>
                    <div role="listitem" className="w-dyn-item">
                      <div cc-schema-element="faq" cc-accordion-element="accordion" className="faq-main-accordion_wrap">
                        <button aria-expanded="false" aria-controls="accordion-details-27" id="accordion-summary-27" cc-accordion-element="trigger" cc-schema-element="question" className="faq-main-accordion_top-container" role="button" tabIndex="0">
                          <h3 className="heading-style-h6">What data does Daylit use to respond accurately to my customers?</h3>
                          <div className="faq-main-accordion_icon-wrap">
                            <div className="faq-main-accordion_icon-svg w-embed">
                              <svg xmlns="http://www.w3.org/2000/svg" width="100%" height="100%" viewBox="0 0 14 15" fill="none" preserveAspectRatio="xMidYMid meet" aria-hidden="true" role="img">
                                <circle cx="2.05078" cy="7.78273" r="1.16667" transform="rotate(45 2.05078 7.78273)" fill="currentColor" />
                                <circle cx="11.9492" cy="7.78468" r="1.16667" transform="rotate(45 11.9492 7.78468)" fill="currentColor" />
                                <circle cx="7" cy="7.7837" r="1.16667" transform="rotate(45 7 7.7837)" fill="currentColor" />
                              </svg>
                            </div>
                            <div cc-accordion-element="icon" className="faq-main-accordion_icon-svg w-embed" style={{ "transform": "rotate(0deg)" }}>
                              <svg xmlns="http://www.w3.org/2000/svg" width="100%" height="100%" viewBox="0 0 14 15" fill="none" preserveAspectRatio="xMidYMid meet" aria-hidden="true" role="img">
                                <circle cx="6.99879" cy="12.7329" r="1.16667" transform="rotate(-45 6.99879 12.7329)" fill="currentColor" />
                                <circle cx="7.00123" cy="2.83447" r="1.16667" transform="rotate(-45 7.00123 2.83447)" fill="currentColor" />
                                <circle cx="7.00001" cy="7.78369" r="1.16667" transform="rotate(-45 7.00001 7.78369)" fill="currentColor" />
                              </svg>
                            </div>
                          </div>
                        </button>
                        <div id="accordion-details-27" role="region" aria-labelledby="accordion-summary-27" cc-accordion-element="content" cc-schema-element="answer" className="faq-main-accordion_bottom-container" style={{ "height": "0px", "opacity": "0" }}>
                          <div className="faq-main-accordion_content-wrapper">
                            <div className="content-rich-text text-color-secondary w-richtext">
                              <p>We use data from your ERP, CRM, and historical communication, such as phone calls and email, to always understand the context of each customer and accurately respond to any situation.</p>
                            </div>
                            <div aria-hidden="true" className="faq-main-accordion_spacer"></div>
                          </div>
                        </div>
                      </div>
                      <div className="w-layout-vflex u-sr-only">
                        <div className="w-dyn-list">
                          <div className="w-dyn-empty">
                            <div>No items found.</div>
                          </div>
                        </div>
                        <div fs-list-field="products">General</div>
                      </div>
                    </div>
                    <div role="listitem" className="w-dyn-item">
                      <div cc-schema-element="faq" cc-accordion-element="accordion" className="faq-main-accordion_wrap">
                        <button aria-expanded="false" aria-controls="accordion-details-28" id="accordion-summary-28" cc-accordion-element="trigger" cc-schema-element="question" className="faq-main-accordion_top-container" role="button" tabIndex="0">
                          <h3 className="heading-style-h6">How does Daylit protect my data and privacy?</h3>
                          <div className="faq-main-accordion_icon-wrap">
                            <div className="faq-main-accordion_icon-svg w-embed">
                              <svg xmlns="http://www.w3.org/2000/svg" width="100%" height="100%" viewBox="0 0 14 15" fill="none" preserveAspectRatio="xMidYMid meet" aria-hidden="true" role="img">
                                <circle cx="2.05078" cy="7.78273" r="1.16667" transform="rotate(45 2.05078 7.78273)" fill="currentColor" />
                                <circle cx="11.9492" cy="7.78468" r="1.16667" transform="rotate(45 11.9492 7.78468)" fill="currentColor" />
                                <circle cx="7" cy="7.7837" r="1.16667" transform="rotate(45 7 7.7837)" fill="currentColor" />
                              </svg>
                            </div>
                            <div cc-accordion-element="icon" className="faq-main-accordion_icon-svg w-embed" style={{ "transform": "rotate(0deg)" }}>
                              <svg xmlns="http://www.w3.org/2000/svg" width="100%" height="100%" viewBox="0 0 14 15" fill="none" preserveAspectRatio="xMidYMid meet" aria-hidden="true" role="img">
                                <circle cx="6.99879" cy="12.7329" r="1.16667" transform="rotate(-45 6.99879 12.7329)" fill="currentColor" />
                                <circle cx="7.00123" cy="2.83447" r="1.16667" transform="rotate(-45 7.00123 2.83447)" fill="currentColor" />
                                <circle cx="7.00001" cy="7.78369" r="1.16667" transform="rotate(-45 7.00001 7.78369)" fill="currentColor" />
                              </svg>
                            </div>
                          </div>
                        </button>
                        <div id="accordion-details-28" role="region" aria-labelledby="accordion-summary-28" cc-accordion-element="content" cc-schema-element="answer" className="faq-main-accordion_bottom-container" style={{ "height": "0px", "opacity": "0" }}>
                          <div className="faq-main-accordion_content-wrapper">
                            <div className="content-rich-text text-color-secondary w-richtext">
                              <p>We are actively completing our SOC II Type 1 compliance and in the process of completing compliance for SOC II Type 2. Please review our privacy policy to get a full review of our data privacy and protection standards.</p>
                            </div>
                            <div aria-hidden="true" className="faq-main-accordion_spacer"></div>
                          </div>
                        </div>
                      </div>
                      <div className="w-layout-vflex u-sr-only">
                        <div className="w-dyn-list">
                          <div className="w-dyn-empty">
                            <div>No items found.</div>
                          </div>
                        </div>
                        <div fs-list-field="products">General</div>
                      </div>
                    </div>
                    <div role="listitem" className="w-dyn-item">
                      <div cc-schema-element="faq" cc-accordion-element="accordion" className="faq-main-accordion_wrap">
                        <button aria-expanded="false" aria-controls="accordion-details-29" id="accordion-summary-29" cc-accordion-element="trigger" cc-schema-element="question" className="faq-main-accordion_top-container" role="button" tabIndex="0">
                          <h3 className="heading-style-h6">How can I sell my invoices to Daylit?</h3>
                          <div className="faq-main-accordion_icon-wrap">
                            <div className="faq-main-accordion_icon-svg w-embed">
                              <svg xmlns="http://www.w3.org/2000/svg" width="100%" height="100%" viewBox="0 0 14 15" fill="none" preserveAspectRatio="xMidYMid meet" aria-hidden="true" role="img">
                                <circle cx="2.05078" cy="7.78273" r="1.16667" transform="rotate(45 2.05078 7.78273)" fill="currentColor" />
                                <circle cx="11.9492" cy="7.78468" r="1.16667" transform="rotate(45 11.9492 7.78468)" fill="currentColor" />
                                <circle cx="7" cy="7.7837" r="1.16667" transform="rotate(45 7 7.7837)" fill="currentColor" />
                              </svg>
                            </div>
                            <div cc-accordion-element="icon" className="faq-main-accordion_icon-svg w-embed" style={{ "transform": "rotate(0deg)" }}>
                              <svg xmlns="http://www.w3.org/2000/svg" width="100%" height="100%" viewBox="0 0 14 15" fill="none" preserveAspectRatio="xMidYMid meet" aria-hidden="true" role="img">
                                <circle cx="6.99879" cy="12.7329" r="1.16667" transform="rotate(-45 6.99879 12.7329)" fill="currentColor" />
                                <circle cx="7.00123" cy="2.83447" r="1.16667" transform="rotate(-45 7.00123 2.83447)" fill="currentColor" />
                                <circle cx="7.00001" cy="7.78369" r="1.16667" transform="rotate(-45 7.00001 7.78369)" fill="currentColor" />
                              </svg>
                            </div>
                          </div>
                        </button>
                        <div id="accordion-details-29" role="region" aria-labelledby="accordion-summary-29" cc-accordion-element="content" cc-schema-element="answer" className="faq-main-accordion_bottom-container" style={{ "height": "0px", "opacity": "0" }}>
                          <div className="faq-main-accordion_content-wrapper">
                            <div className="content-rich-text text-color-secondary w-richtext">
                              <p>Our platform comes with a bank that is ready to buy your invoices. When a customer invoice needs immediate liquidity, simply click on the “Sell invoice” button on the Invoices table and select all the invoices you’d like to sell. We will buy your invoices or offer a workout plan with your customers to get you paid on time without the manual work or risk of collection.</p>
                            </div>
                            <div aria-hidden="true" className="faq-main-accordion_spacer"></div>
                          </div>
                        </div>
                      </div>
                      <div className="w-layout-vflex u-sr-only">
                        <div className="w-dyn-list">
                          <div className="w-dyn-empty">
                            <div>No items found.</div>
                          </div>
                        </div>
                        <div fs-list-field="products">General</div>
                      </div>
                    </div>
                  </div>
                </div>
                <div fs-list-element="empty" className="blog-list_empty">
                  <div>No items found</div>
                  <button fs-list-element="clear" className="blog-filter_clear">
                    <div>Clear</div>
                    <div className="blog-filter_clear-icon-wrap">
                      <div className="icon-embed-xxsmall w-embed">
                        <svg xmlns="http://www.w3.org/2000/svg" width="100%" height="100%" viewBox="0 0 16 16" fill="none" preserveAspectRatio="xMidYMid meet" aria-hidden="true" role="img">
                          <path d="M12.854 12.1465C12.9005 12.193 12.9373 12.2481 12.9625 12.3088C12.9876 12.3695 13.0006 12.4346 13.0006 12.5003C13.0006 12.566 12.9876 12.631 12.9625 12.6917C12.9373 12.7524 12.9005 12.8076 12.854 12.854C12.8076 12.9005 12.7524 12.9373 12.6917 12.9625C12.631 12.9876 12.566 13.0006 12.5003 13.0006C12.4346 13.0006 12.3695 12.9876 12.3088 12.9625C12.2481 12.9373 12.193 12.9005 12.1465 12.854L8.00028 8.70715L3.85403 12.854C3.76021 12.9478 3.63296 13.0006 3.50028 13.0006C3.3676 13.0006 3.24035 12.9478 3.14653 12.854C3.05271 12.7602 3 12.633 3 12.5003C3 12.3676 3.05271 12.2403 3.14653 12.1465L7.2934 8.00028L3.14653 3.85403C3.05271 3.76021 3 3.63296 3 3.50028C3 3.3676 3.05271 3.24035 3.14653 3.14653C3.24035 3.05271 3.3676 3 3.50028 3C3.63296 3 3.76021 3.05271 3.85403 3.14653L8.00028 7.2934L12.1465 3.14653C12.2403 3.05271 12.3676 3 12.5003 3C12.633 3 12.7602 3.05271 12.854 3.14653C12.9478 3.24035 13.0006 3.3676 13.0006 3.50028C13.0006 3.63296 12.9478 3.76021 12.854 3.85403L8.70715 8.00028L12.854 12.1465Z" fill="currentColor" />
                        </svg>
                      </div>
                    </div>
                  </button>
                </div>
                <div className="hide w-embed w-script"></div>
              </div>
            </div>
          </div>
        </div>
        <div data-wf--utility-spacer-section--padding="large" className="padding-section-wrap">
          <div className="padding-top"></div>
        </div>
      </section>
      <div></div>
    </form>
  );
}
