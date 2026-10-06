// IA section(s): content.section-blog-feed (ia/ia.json, design-repo/sections/)
import A from "../lib/A.jsx";

// section — the section's real markup, read from the rendered page (route /blog, section 3).
export default function Section3() {
  return (
    <section className="section_blog-feed" data-clone-section="Section3">
      <div data-wf--utility-spacer-section--padding="tiny" className="padding-section-wrap">
        <div className="padding-top w-variant-7f479514-2290-79d7-2a62-1d4ed829a7d3"></div>
      </div>
      <div className="big-section">
        <div className="w-layout-blockcontainer container-large w-container">
          <div className="w-layout-vflex blog-feed_layout">
            <div className="blog-filter_row">
              <div className="w-layout-vflex blog-filter_left-wrap hide-tablet">
                <div className="w-layout-vflex blog-filter_list-wrap">
                  <div>Filter by</div>
                  <div className="w-dyn-list">
                    <div role="list" className="blog-filter_list w-dyn-items">
                      <div role="listitem" className="w-dyn-item">
                        <label className="filter_radio w-radio">
                          <div className="w-form-formradioinput w-form-formradioinput--inputType-custom filter_radio-button w-radio-input"></div>
                          <input type="radio" name="radio" fs-list-value={"Daylit Product & News"} data-name="Radio" fs-list-field="categories" style={{ "position": "absolute", "zIndex": "-1" }} defaultValue="Radio" />
                          <span className="filter_radio-label w-form-label">{"Daylit Product & News"}</span>
                        </label>
                      </div>
                      <div role="listitem" className="w-dyn-item">
                        <label className="filter_radio w-radio">
                          <div className="w-form-formradioinput w-form-formradioinput--inputType-custom filter_radio-button w-radio-input"></div>
                          <input type="radio" name="radio" fs-list-value="PE Value Creation" data-name="Radio" fs-list-field="categories" style={{ "position": "absolute", "zIndex": "-1" }} defaultValue="Radio" />
                          <span className="filter_radio-label w-form-label">PE Value Creation</span>
                        </label>
                      </div>
                      <div role="listitem" className="w-dyn-item">
                        <label className="filter_radio w-radio">
                          <div className="w-form-formradioinput w-form-formradioinput--inputType-custom filter_radio-button w-radio-input"></div>
                          <input type="radio" name="radio" fs-list-value={"AR automation & AI agents"} data-name="Radio" fs-list-field="categories" style={{ "position": "absolute", "zIndex": "-1" }} defaultValue="Radio" />
                          <span className="filter_radio-label w-form-label">{"AR automation & AI agents"}</span>
                        </label>
                      </div>
                      <div role="listitem" className="w-dyn-item">
                        <label className="filter_radio w-radio">
                          <div className="w-form-formradioinput w-form-formradioinput--inputType-custom filter_radio-button w-radio-input"></div>
                          <input type="radio" name="radio" fs-list-value={"Cash flow & DSO"} data-name="Radio" fs-list-field="categories" style={{ "position": "absolute", "zIndex": "-1" }} defaultValue="Radio" />
                          <span className="filter_radio-label w-form-label">{"Cash flow & DSO"}</span>
                        </label>
                      </div>
                      <div role="listitem" className="w-dyn-item">
                        <label className="filter_radio w-radio">
                          <div className="w-form-formradioinput w-form-formradioinput--inputType-custom filter_radio-button w-radio-input"></div>
                          <input type="radio" name="radio" fs-list-value="Collections Operations" data-name="Radio" fs-list-field="categories" style={{ "position": "absolute", "zIndex": "-1" }} defaultValue="Radio" />
                          <span className="filter_radio-label w-form-label">Collections Operations</span>
                        </label>
                      </div>
                    </div>
                  </div>
                </div>
                <button fs-list-element="clear" className="blog-filter_clear" style={{ "display": "none" }}>
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
              <div data-hover="false" data-delay="0" className="blog-filter_dropdown show-tablet w-dropdown">
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
                  <div className="w-dyn-list">
                    <div role="list" className="blog-filter_list w-dyn-items">
                      <div role="listitem" className="w-dyn-item">
                        <label className="filter_radio w-radio">
                          <div className="w-form-formradioinput w-form-formradioinput--inputType-custom filter_radio-button w-radio-input"></div>
                          <input fs-list-value="Legal" fs-list-field="solution" name="radio" data-name="Radio" type="radio" id="radio" style={{ "opacity": "0", "position": "absolute", "zIndex": "-1" }} defaultValue="Radio" />
                          <span className="filter_radio-label w-form-label" htmlFor="radio">Legal</span>
                        </label>
                      </div>
                      <div role="listitem" className="w-dyn-item">
                        <label className="filter_radio w-radio">
                          <div className="w-form-formradioinput w-form-formradioinput--inputType-custom filter_radio-button w-radio-input"></div>
                          <input fs-list-value="Manufacturing" fs-list-field="solution" name="radio" data-name="Radio" type="radio" id="radio" style={{ "opacity": "0", "position": "absolute", "zIndex": "-1" }} defaultValue="Radio" />
                          <span className="filter_radio-label w-form-label" htmlFor="radio">Manufacturing</span>
                        </label>
                      </div>
                      <div role="listitem" className="w-dyn-item">
                        <label className="filter_radio w-radio">
                          <div className="w-form-formradioinput w-form-formradioinput--inputType-custom filter_radio-button w-radio-input"></div>
                          <input fs-list-value="Staffing" fs-list-field="solution" name="radio" data-name="Radio" type="radio" id="radio" style={{ "opacity": "0", "position": "absolute", "zIndex": "-1" }} defaultValue="Radio" />
                          <span className="filter_radio-label w-form-label" htmlFor="radio">Staffing</span>
                        </label>
                      </div>
                      <div role="listitem" className="w-dyn-item">
                        <label className="filter_radio w-radio">
                          <div className="w-form-formradioinput w-form-formradioinput--inputType-custom filter_radio-button w-radio-input"></div>
                          <input fs-list-value="Field Services" fs-list-field="solution" name="radio" data-name="Radio" type="radio" id="radio" style={{ "opacity": "0", "position": "absolute", "zIndex": "-1" }} defaultValue="Radio" />
                          <span className="filter_radio-label w-form-label" htmlFor="radio">Field Services</span>
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
              <div data-hover="false" data-delay="0" className="blog-filter_dropdown w-dropdown">
                <div className="blog-filter_dropdown-toggle w-dropdown-toggle" id="w-dropdown-toggle-5" aria-controls="w-dropdown-list-5" aria-haspopup="menu" aria-expanded="false" role="button" tabIndex="0">
                  <div>Select tags</div>
                  <div className="blog-filter_clear-icon-wrap">
                    <div className="icon-embed-xxsmall w-embed">
                      <svg xmlns="http://www.w3.org/2000/svg" width="100%" height="100%" viewBox="0 0 16 16" fill="none" preserveAspectRatio="xMidYMid meet" aria-hidden="true" role="img">
                        <path d="M13.0194 6.4569L8.3319 11.1444C8.28837 11.188 8.23667 11.2226 8.17976 11.2461C8.12286 11.2697 8.06186 11.2819 8.00026 11.2819C7.93866 11.2819 7.87766 11.2697 7.82076 11.2461C7.76385 11.2226 7.71215 11.188 7.66862 11.1444L2.98112 6.4569C2.89316 6.36894 2.84375 6.24965 2.84375 6.12526C2.84375 6.00087 2.89316 5.88158 2.98112 5.79362C3.06908 5.70566 3.18837 5.65625 3.31276 5.65625C3.43715 5.65625 3.55644 5.70566 3.6444 5.79362L8.00026 10.1501L12.3561 5.79362C12.3997 5.75007 12.4514 5.71552 12.5083 5.69195C12.5652 5.66838 12.6262 5.65625 12.6878 5.65625C12.7494 5.65625 12.8103 5.66838 12.8672 5.69195C12.9241 5.71552 12.9758 5.75007 13.0194 5.79362C13.063 5.83717 13.0975 5.88887 13.1211 5.94578C13.1446 6.00268 13.1568 6.06367 13.1568 6.12526C13.1568 6.18685 13.1446 6.24784 13.1211 6.30474C13.0975 6.36165 13.063 6.41335 13.0194 6.4569Z" fill="currentColor" />
                      </svg>
                    </div>
                  </div>
                </div>
                <nav className="blog-filter_dropdown-menu w-dropdown-list" id="w-dropdown-list-5" aria-labelledby="w-dropdown-toggle-5">
                  <div className="w-dyn-list">
                    <div role="list" className="w-dyn-items">
                      <div role="listitem" className="w-dyn-item">
                        <label className="w-checkbox filter_checkbox">
                          <div className="w-checkbox-input w-checkbox-input--inputType-custom filter_checkbox-button"></div>
                          <input fs-list-value="Benefits" fs-list-field="tags" name="checkbox" data-name="Checkbox" type="checkbox" id="checkbox" style={{ "opacity": "0", "position": "absolute", "zIndex": "-1" }} />
                          <span className="filter_checkbox-label w-form-label" htmlFor="checkbox">Benefits</span>
                        </label>
                      </div>
                      <div role="listitem" className="w-dyn-item">
                        <label className="w-checkbox filter_checkbox">
                          <div className="w-checkbox-input w-checkbox-input--inputType-custom filter_checkbox-button"></div>
                          <input fs-list-value="Accounts receivable" fs-list-field="tags" name="checkbox" data-name="Checkbox" type="checkbox" id="checkbox" style={{ "opacity": "0", "position": "absolute", "zIndex": "-1" }} />
                          <span className="filter_checkbox-label w-form-label" htmlFor="checkbox">Accounts receivable</span>
                        </label>
                      </div>
                      <div role="listitem" className="w-dyn-item">
                        <label className="w-checkbox filter_checkbox">
                          <div className="w-checkbox-input w-checkbox-input--inputType-custom filter_checkbox-button"></div>
                          <input fs-list-value="Chemicals" fs-list-field="tags" name="checkbox" data-name="Checkbox" type="checkbox" id="checkbox" style={{ "opacity": "0", "position": "absolute", "zIndex": "-1" }} />
                          <span className="filter_checkbox-label w-form-label" htmlFor="checkbox">Chemicals</span>
                        </label>
                      </div>
                      <div role="listitem" className="w-dyn-item">
                        <label className="w-checkbox filter_checkbox">
                          <div className="w-checkbox-input w-checkbox-input--inputType-custom filter_checkbox-button"></div>
                          <input fs-list-value="Ap financing" fs-list-field="tags" name="checkbox" data-name="Checkbox" type="checkbox" id="checkbox" style={{ "opacity": "0", "position": "absolute", "zIndex": "-1" }} />
                          <span className="filter_checkbox-label w-form-label" htmlFor="checkbox">Ap financing</span>
                        </label>
                      </div>
                      <div role="listitem" className="w-dyn-item">
                        <label className="w-checkbox filter_checkbox">
                          <div className="w-checkbox-input w-checkbox-input--inputType-custom filter_checkbox-button"></div>
                          <input fs-list-value="B2b payments" fs-list-field="tags" name="checkbox" data-name="Checkbox" type="checkbox" id="checkbox" style={{ "opacity": "0", "position": "absolute", "zIndex": "-1" }} />
                          <span className="filter_checkbox-label w-form-label" htmlFor="checkbox">B2b payments</span>
                        </label>
                      </div>
                      <div role="listitem" className="w-dyn-item">
                        <label className="w-checkbox filter_checkbox">
                          <div className="w-checkbox-input w-checkbox-input--inputType-custom filter_checkbox-button"></div>
                          <input fs-list-value="Customer story" fs-list-field="tags" name="checkbox" data-name="Checkbox" type="checkbox" id="checkbox" style={{ "opacity": "0", "position": "absolute", "zIndex": "-1" }} />
                          <span className="filter_checkbox-label w-form-label" htmlFor="checkbox">Customer story</span>
                        </label>
                      </div>
                      <div role="listitem" className="w-dyn-item">
                        <label className="w-checkbox filter_checkbox">
                          <div className="w-checkbox-input w-checkbox-input--inputType-custom filter_checkbox-button"></div>
                          <input fs-list-value="Specialty contractors" fs-list-field="tags" name="checkbox" data-name="Checkbox" type="checkbox" id="checkbox" style={{ "opacity": "0", "position": "absolute", "zIndex": "-1" }} />
                          <span className="filter_checkbox-label w-form-label" htmlFor="checkbox">Specialty contractors</span>
                        </label>
                      </div>
                      <div role="listitem" className="w-dyn-item">
                        <label className="w-checkbox filter_checkbox">
                          <div className="w-checkbox-input w-checkbox-input--inputType-custom filter_checkbox-button"></div>
                          <input fs-list-value="Bank" fs-list-field="tags" name="checkbox" data-name="Checkbox" type="checkbox" id="checkbox" style={{ "opacity": "0", "position": "absolute", "zIndex": "-1" }} />
                          <span className="filter_checkbox-label w-form-label" htmlFor="checkbox">Bank</span>
                        </label>
                      </div>
                      <div role="listitem" className="w-dyn-item">
                        <label className="w-checkbox filter_checkbox">
                          <div className="w-checkbox-input w-checkbox-input--inputType-custom filter_checkbox-button"></div>
                          <input fs-list-value="Article" fs-list-field="tags" name="checkbox" data-name="Checkbox" type="checkbox" id="checkbox" style={{ "opacity": "0", "position": "absolute", "zIndex": "-1" }} />
                          <span className="filter_checkbox-label w-form-label" htmlFor="checkbox">Article</span>
                        </label>
                      </div>
                      <div role="listitem" className="w-dyn-item">
                        <label className="w-checkbox filter_checkbox">
                          <div className="w-checkbox-input w-checkbox-input--inputType-custom filter_checkbox-button"></div>
                          <input fs-list-value="B2b finance" fs-list-field="tags" name="checkbox" data-name="Checkbox" type="checkbox" id="checkbox" style={{ "opacity": "0", "position": "absolute", "zIndex": "-1" }} />
                          <span className="filter_checkbox-label w-form-label" htmlFor="checkbox">B2b finance</span>
                        </label>
                      </div>
                      <div role="listitem" className="w-dyn-item">
                        <label className="w-checkbox filter_checkbox">
                          <div className="w-checkbox-input w-checkbox-input--inputType-custom filter_checkbox-button"></div>
                          <input fs-list-value="Demo" fs-list-field="tags" name="checkbox" data-name="Checkbox" type="checkbox" id="checkbox" style={{ "opacity": "0", "position": "absolute", "zIndex": "-1" }} />
                          <span className="filter_checkbox-label w-form-label" htmlFor="checkbox">Demo</span>
                        </label>
                      </div>
                      <div role="listitem" className="w-dyn-item">
                        <label className="w-checkbox filter_checkbox">
                          <div className="w-checkbox-input w-checkbox-input--inputType-custom filter_checkbox-button"></div>
                          <input fs-list-value="Accounts payable" fs-list-field="tags" name="checkbox" data-name="Checkbox" type="checkbox" id="checkbox" style={{ "opacity": "0", "position": "absolute", "zIndex": "-1" }} />
                          <span className="filter_checkbox-label w-form-label" htmlFor="checkbox">Accounts payable</span>
                        </label>
                      </div>
                      <div role="listitem" className="w-dyn-item">
                        <label className="w-checkbox filter_checkbox">
                          <div className="w-checkbox-input w-checkbox-input--inputType-custom filter_checkbox-button"></div>
                          <input fs-list-value="Modern credit policy" fs-list-field="tags" name="checkbox" data-name="Checkbox" type="checkbox" id="checkbox" style={{ "opacity": "0", "position": "absolute", "zIndex": "-1" }} />
                          <span className="filter_checkbox-label w-form-label" htmlFor="checkbox">Modern credit policy</span>
                        </label>
                      </div>
                      <div role="listitem" className="w-dyn-item">
                        <label className="w-checkbox filter_checkbox">
                          <div className="w-checkbox-input w-checkbox-input--inputType-custom filter_checkbox-button"></div>
                          <input fs-list-value="Efficiency" fs-list-field="tags" name="checkbox" data-name="Checkbox" type="checkbox" id="checkbox" style={{ "opacity": "0", "position": "absolute", "zIndex": "-1" }} />
                          <span className="filter_checkbox-label w-form-label" htmlFor="checkbox">Efficiency</span>
                        </label>
                      </div>
                      <div role="listitem" className="w-dyn-item">
                        <label className="w-checkbox filter_checkbox">
                          <div className="w-checkbox-input w-checkbox-input--inputType-custom filter_checkbox-button"></div>
                          <input fs-list-value="Packaging" fs-list-field="tags" name="checkbox" data-name="Checkbox" type="checkbox" id="checkbox" style={{ "opacity": "0", "position": "absolute", "zIndex": "-1" }} />
                          <span className="filter_checkbox-label w-form-label" htmlFor="checkbox">Packaging</span>
                        </label>
                      </div>
                      <div role="listitem" className="w-dyn-item">
                        <label className="w-checkbox filter_checkbox">
                          <div className="w-checkbox-input w-checkbox-input--inputType-custom filter_checkbox-button"></div>
                          <input fs-list-value="Lending" fs-list-field="tags" name="checkbox" data-name="Checkbox" type="checkbox" id="checkbox" style={{ "opacity": "0", "position": "absolute", "zIndex": "-1" }} />
                          <span className="filter_checkbox-label w-form-label" htmlFor="checkbox">Lending</span>
                        </label>
                      </div>
                      <div role="listitem" className="w-dyn-item">
                        <label className="w-checkbox filter_checkbox">
                          <div className="w-checkbox-input w-checkbox-input--inputType-custom filter_checkbox-button"></div>
                          <input fs-list-value="Fintech" fs-list-field="tags" name="checkbox" data-name="Checkbox" type="checkbox" id="checkbox" style={{ "opacity": "0", "position": "absolute", "zIndex": "-1" }} />
                          <span className="filter_checkbox-label w-form-label" htmlFor="checkbox">Fintech</span>
                        </label>
                      </div>
                      <div role="listitem" className="w-dyn-item">
                        <label className="w-checkbox filter_checkbox">
                          <div className="w-checkbox-input w-checkbox-input--inputType-custom filter_checkbox-button"></div>
                          <input fs-list-value="Factoring" fs-list-field="tags" name="checkbox" data-name="Checkbox" type="checkbox" id="checkbox" style={{ "opacity": "0", "position": "absolute", "zIndex": "-1" }} />
                          <span className="filter_checkbox-label w-form-label" htmlFor="checkbox">Factoring</span>
                        </label>
                      </div>
                      <div role="listitem" className="w-dyn-item">
                        <label className="w-checkbox filter_checkbox">
                          <div className="w-checkbox-input w-checkbox-input--inputType-custom filter_checkbox-button"></div>
                          <input fs-list-value="Embedded lending" fs-list-field="tags" name="checkbox" data-name="Checkbox" type="checkbox" id="checkbox" style={{ "opacity": "0", "position": "absolute", "zIndex": "-1" }} />
                          <span className="filter_checkbox-label w-form-label" htmlFor="checkbox">Embedded lending</span>
                        </label>
                      </div>
                      <div role="listitem" className="w-dyn-item">
                        <label className="w-checkbox filter_checkbox">
                          <div className="w-checkbox-input w-checkbox-input--inputType-custom filter_checkbox-button"></div>
                          <input fs-list-value="Payments" fs-list-field="tags" name="checkbox" data-name="Checkbox" type="checkbox" id="checkbox" style={{ "opacity": "0", "position": "absolute", "zIndex": "-1" }} />
                          <span className="filter_checkbox-label w-form-label" htmlFor="checkbox">Payments</span>
                        </label>
                      </div>
                      <div role="listitem" className="w-dyn-item">
                        <label className="w-checkbox filter_checkbox">
                          <div className="w-checkbox-input w-checkbox-input--inputType-custom filter_checkbox-button"></div>
                          <input fs-list-value="Paylater" fs-list-field="tags" name="checkbox" data-name="Checkbox" type="checkbox" id="checkbox" style={{ "opacity": "0", "position": "absolute", "zIndex": "-1" }} />
                          <span className="filter_checkbox-label w-form-label" htmlFor="checkbox">Paylater</span>
                        </label>
                      </div>
                      <div role="listitem" className="w-dyn-item">
                        <label className="w-checkbox filter_checkbox">
                          <div className="w-checkbox-input w-checkbox-input--inputType-custom filter_checkbox-button"></div>
                          <input fs-list-value="Embedded finance" fs-list-field="tags" name="checkbox" data-name="Checkbox" type="checkbox" id="checkbox" style={{ "opacity": "0", "position": "absolute", "zIndex": "-1" }} />
                          <span className="filter_checkbox-label w-form-label" htmlFor="checkbox">Embedded finance</span>
                        </label>
                      </div>
                      <div role="listitem" className="w-dyn-item">
                        <label className="w-checkbox filter_checkbox">
                          <div className="w-checkbox-input w-checkbox-input--inputType-custom filter_checkbox-button"></div>
                          <input fs-list-value="Partnerships" fs-list-field="tags" name="checkbox" data-name="Checkbox" type="checkbox" id="checkbox" style={{ "opacity": "0", "position": "absolute", "zIndex": "-1" }} />
                          <span className="filter_checkbox-label w-form-label" htmlFor="checkbox">Partnerships</span>
                        </label>
                      </div>
                      <div role="listitem" className="w-dyn-item">
                        <label className="w-checkbox filter_checkbox">
                          <div className="w-checkbox-input w-checkbox-input--inputType-custom filter_checkbox-button"></div>
                          <input fs-list-value="Report" fs-list-field="tags" name="checkbox" data-name="Checkbox" type="checkbox" id="checkbox" style={{ "opacity": "0", "position": "absolute", "zIndex": "-1" }} />
                          <span className="filter_checkbox-label w-form-label" htmlFor="checkbox">Report</span>
                        </label>
                      </div>
                      <div role="listitem" className="w-dyn-item">
                        <label className="w-checkbox filter_checkbox">
                          <div className="w-checkbox-input w-checkbox-input--inputType-custom filter_checkbox-button"></div>
                          <input fs-list-value="Wholesalers" fs-list-field="tags" name="checkbox" data-name="Checkbox" type="checkbox" id="checkbox" style={{ "opacity": "0", "position": "absolute", "zIndex": "-1" }} />
                          <span className="filter_checkbox-label w-form-label" htmlFor="checkbox">Wholesalers</span>
                        </label>
                      </div>
                      <div role="listitem" className="w-dyn-item">
                        <label className="w-checkbox filter_checkbox">
                          <div className="w-checkbox-input w-checkbox-input--inputType-custom filter_checkbox-button"></div>
                          <input fs-list-value="Pos" fs-list-field="tags" name="checkbox" data-name="Checkbox" type="checkbox" id="checkbox" style={{ "opacity": "0", "position": "absolute", "zIndex": "-1" }} />
                          <span className="filter_checkbox-label w-form-label" htmlFor="checkbox">Pos</span>
                        </label>
                      </div>
                      <div role="listitem" className="w-dyn-item">
                        <label className="w-checkbox filter_checkbox">
                          <div className="w-checkbox-input w-checkbox-input--inputType-custom filter_checkbox-button"></div>
                          <input fs-list-value="Supply chain" fs-list-field="tags" name="checkbox" data-name="Checkbox" type="checkbox" id="checkbox" style={{ "opacity": "0", "position": "absolute", "zIndex": "-1" }} />
                          <span className="filter_checkbox-label w-form-label" htmlFor="checkbox">Supply chain</span>
                        </label>
                      </div>
                      <div role="listitem" className="w-dyn-item">
                        <label className="w-checkbox filter_checkbox">
                          <div className="w-checkbox-input w-checkbox-input--inputType-custom filter_checkbox-button"></div>
                          <input fs-list-value="Press" fs-list-field="tags" name="checkbox" data-name="Checkbox" type="checkbox" id="checkbox" style={{ "opacity": "0", "position": "absolute", "zIndex": "-1" }} />
                          <span className="filter_checkbox-label w-form-label" htmlFor="checkbox">Press</span>
                        </label>
                      </div>
                      <div role="listitem" className="w-dyn-item">
                        <label className="w-checkbox filter_checkbox">
                          <div className="w-checkbox-input w-checkbox-input--inputType-custom filter_checkbox-button"></div>
                          <input fs-list-value="Reverse factoring" fs-list-field="tags" name="checkbox" data-name="Checkbox" type="checkbox" id="checkbox" style={{ "opacity": "0", "position": "absolute", "zIndex": "-1" }} />
                          <span className="filter_checkbox-label w-form-label" htmlFor="checkbox">Reverse factoring</span>
                        </label>
                      </div>
                      <div role="listitem" className="w-dyn-item">
                        <label className="w-checkbox filter_checkbox">
                          <div className="w-checkbox-input w-checkbox-input--inputType-custom filter_checkbox-button"></div>
                          <input fs-list-value="Working capital" fs-list-field="tags" name="checkbox" data-name="Checkbox" type="checkbox" id="checkbox" style={{ "opacity": "0", "position": "absolute", "zIndex": "-1" }} />
                          <span className="filter_checkbox-label w-form-label" htmlFor="checkbox">Working capital</span>
                        </label>
                      </div>
                      <div role="listitem" className="w-dyn-item">
                        <label className="w-checkbox filter_checkbox">
                          <div className="w-checkbox-input w-checkbox-input--inputType-custom filter_checkbox-button"></div>
                          <input fs-list-value="Small business" fs-list-field="tags" name="checkbox" data-name="Checkbox" type="checkbox" id="checkbox" style={{ "opacity": "0", "position": "absolute", "zIndex": "-1" }} />
                          <span className="filter_checkbox-label w-form-label" htmlFor="checkbox">Small business</span>
                        </label>
                      </div>
                      <div role="listitem" className="w-dyn-item">
                        <label className="w-checkbox filter_checkbox">
                          <div className="w-checkbox-input w-checkbox-input--inputType-custom filter_checkbox-button"></div>
                          <input fs-list-value="Working capital report" fs-list-field="tags" name="checkbox" data-name="Checkbox" type="checkbox" id="checkbox" style={{ "opacity": "0", "position": "absolute", "zIndex": "-1" }} />
                          <span className="filter_checkbox-label w-form-label" htmlFor="checkbox">Working capital report</span>
                        </label>
                      </div>
                      <div role="listitem" className="w-dyn-item">
                        <label className="w-checkbox filter_checkbox">
                          <div className="w-checkbox-input w-checkbox-input--inputType-custom filter_checkbox-button"></div>
                          <input fs-list-value="Specialty contractors" fs-list-field="tags" name="checkbox" data-name="Checkbox" type="checkbox" id="checkbox" style={{ "opacity": "0", "position": "absolute", "zIndex": "-1" }} />
                          <span className="filter_checkbox-label w-form-label" htmlFor="checkbox">Specialty contractors</span>
                        </label>
                      </div>
                      <div role="listitem" className="w-dyn-item">
                        <label className="w-checkbox filter_checkbox">
                          <div className="w-checkbox-input w-checkbox-input--inputType-custom filter_checkbox-button"></div>
                          <input fs-list-value="Accounts Receivable Automation" fs-list-field="tags" name="checkbox" data-name="Checkbox" type="checkbox" id="checkbox" style={{ "opacity": "0", "position": "absolute", "zIndex": "-1" }} />
                          <span className="filter_checkbox-label w-form-label" htmlFor="checkbox">Accounts Receivable Automation</span>
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
            </div>
            <div>
              <div className="blog-feed_wrap w-dyn-list">
                <div fs-list-load="pagination" fs-list-element="list" role="list" className="blog-feed_list w-dyn-items">
                  <div role="listitem" className="w-dyn-item">
                    <div className="blog-feed_card">
                      <div className="blog-feed_card_image-wrap">
                        <img loading="lazy" src="/_ext/cdn.prod.website-files.com/68ae872ea1f1fc625315711a/6abe5abe94d31f8cbbf57472_overlay-inflow-p-1080.png" alt="" sizes="(max-width: 767px) 100vw, (max-width: 991px) 727px, 940px" srcSet="/_ext/cdn.prod.website-files.com/68ae872ea1f1fc625315711a/6abe5abe94d31f8cbbf57472_overlay-inflow-p-500.png 500w, /_ext/cdn.prod.website-files.com/68ae872ea1f1fc625315711a/6abe5abe94d31f8cbbf57472_overlay-inflow-p-800.png 800w, /_ext/cdn.prod.website-files.com/68ae872ea1f1fc625315711a/6abe5abe94d31f8cbbf57472_overlay-inflow-p-1080.png 1080w, /_ext/cdn.prod.website-files.com/68ae872ea1f1fc625315711a/6abe5abe94d31f8cbbf57472_overlay-inflow.png 1292w" className="blog-feed_card_image" />
                      </div>
                      <div className="w-layout-vflex blog-feed_card_text-wrap">
                        <div className="heading-style-h5 text-style-2lines">{"Daylit vs. Oddr: Which One Moves a Law Firm's Collection Cycle Faster?"}</div>
                        <div className="text-color-secondary text-style-2lines">{"Oddr and Daylit both sell AI to law firm billing and collections teams, but they go after different halves of the revenue cycle. Here's how each one handles billing, disputes, and collection, using only what each has published."}</div>
                      </div>
                      <div data-wf--slot-item-button-main--style="primary-plus" data-button=" main" className="button_main_wrap">
                        <div className="clickable_wrap u-cover-absolute">
                          <A target="" href="/blog/daylit-vs-oddr" className="clickable_link w-inline-block">
                            <span className="clickable_text u-sr-only">Button</span>
                          </A>
                          <button type="link" className="clickable_btn">
                            <span className="clickable_text u-sr-only">Button</span>
                          </button>
                        </div>
                        <div data-button="main-content" className="w-layout-vflex button_main_content-wrap">
                          <div aria-hidden="true" className="button_main_text">Read more</div>
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
                      <A fs-list-element="item-link" href="/blog/daylit-vs-oddr" className="blog-feed_card-link w-inline-block">
                        <div>{"Daylit vs. Oddr: Which One Moves a Law Firm's Collection Cycle Faster?"}</div>
                        <div>Read more</div>
                      </A>
                      <div className="w-layout-vflex hide">
                        <div className="w-dyn-list">
                          <div role="list" className="w-dyn-items">
                            <div role="listitem" className="w-dyn-item">
                              <div fs-list-field="tags">Report</div>
                            </div>
                          </div>
                        </div>
                        <div>This is some text inside of a div block.</div>
                        <div fs-list-field="categories">{"AR automation & AI agents"}</div>
                      </div>
                    </div>
                  </div>
                  <div role="listitem" className="w-dyn-item">
                    <div className="blog-feed_card">
                      <div className="blog-feed_card_image-wrap">
                        <img loading="lazy" src="/_ext/cdn.prod.website-files.com/68ae872ea1f1fc625315711a/6aba7586a62cf5bc734c6af0_overlay-escalate-v3-p-1080.png" alt="" sizes="(max-width: 767px) 100vw, (max-width: 991px) 727px, 940px" srcSet="/_ext/cdn.prod.website-files.com/68ae872ea1f1fc625315711a/6aba7586a62cf5bc734c6af0_overlay-escalate-v3-p-500.png 500w, /_ext/cdn.prod.website-files.com/68ae872ea1f1fc625315711a/6aba7586a62cf5bc734c6af0_overlay-escalate-v3-p-800.png 800w, /_ext/cdn.prod.website-files.com/68ae872ea1f1fc625315711a/6aba7586a62cf5bc734c6af0_overlay-escalate-v3-p-1080.png 1080w, /_ext/cdn.prod.website-files.com/68ae872ea1f1fc625315711a/6aba7586a62cf5bc734c6af0_overlay-escalate-v3.png 1292w" className="blog-feed_card_image" />
                      </div>
                      <div className="w-layout-vflex blog-feed_card_text-wrap">
                        <div className="heading-style-h5 text-style-2lines">{"Your AR Inbox Isn't Slow. It's a Trust Problem. "}</div>
                        <div className="text-color-secondary text-style-2lines">{"Automated replies aren't risky because the AI sounds robotic. They're risky because you don't know what they'll say. Here's how Daylit lets AI answer routine customer emails from your own templates, checked again before every send."}</div>
                      </div>
                      <div data-wf--slot-item-button-main--style="primary-plus" data-button=" main" className="button_main_wrap">
                        <div className="clickable_wrap u-cover-absolute">
                          <A target="" href="/blog/your-ar-inbox-isnt-slow-its-a-trust-problem" className="clickable_link w-inline-block">
                            <span className="clickable_text u-sr-only">Button</span>
                          </A>
                          <button type="link" className="clickable_btn">
                            <span className="clickable_text u-sr-only">Button</span>
                          </button>
                        </div>
                        <div data-button="main-content" className="w-layout-vflex button_main_content-wrap">
                          <div aria-hidden="true" className="button_main_text">Read more</div>
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
                      <A fs-list-element="item-link" href="/blog/your-ar-inbox-isnt-slow-its-a-trust-problem" className="blog-feed_card-link w-inline-block">
                        <div>{"Your AR Inbox Isn't Slow. It's a Trust Problem. "}</div>
                        <div>Read more</div>
                      </A>
                      <div className="w-layout-vflex hide">
                        <div className="w-dyn-list">
                          <div role="list" className="w-dyn-items">
                            <div role="listitem" className="w-dyn-item">
                              <div fs-list-field="tags">Accounts Receivable Automation</div>
                            </div>
                          </div>
                        </div>
                        <div>This is some text inside of a div block.</div>
                        <div fs-list-field="categories">{"AR automation & AI agents"}</div>
                      </div>
                    </div>
                  </div>
                  <div role="listitem" className="w-dyn-item">
                    <div className="blog-feed_card">
                      <div className="blog-feed_card_image-wrap">
                        <img loading="lazy" src="/_ext/cdn.prod.website-files.com/68ae872ea1f1fc625315711a/6ab67947bbf146dc6b241bdf_overlay-before-after-v5-p-1080.png" alt="" sizes="(max-width: 767px) 100vw, (max-width: 991px) 727px, 940px" srcSet="/_ext/cdn.prod.website-files.com/68ae872ea1f1fc625315711a/6ab67947bbf146dc6b241bdf_overlay-before-after-v5-p-500.png 500w, /_ext/cdn.prod.website-files.com/68ae872ea1f1fc625315711a/6ab67947bbf146dc6b241bdf_overlay-before-after-v5-p-800.png 800w, /_ext/cdn.prod.website-files.com/68ae872ea1f1fc625315711a/6ab67947bbf146dc6b241bdf_overlay-before-after-v5-p-1080.png 1080w, /_ext/cdn.prod.website-files.com/68ae872ea1f1fc625315711a/6ab67947bbf146dc6b241bdf_overlay-before-after-v5.png 1292w" className="blog-feed_card_image" />
                      </div>
                      <div className="w-layout-vflex blog-feed_card_text-wrap">
                        <div className="heading-style-h5 text-style-2lines">Daylit vs. Monk: Collection Automation Compared for Mid-Market Teams</div>
                        <div className="text-color-secondary text-style-2lines">{"Monk and Daylit both go live in days and both pause follow-ups on disputed invoices. Here's where the two actually split: on what gets measured, how disputes get worked, and cash that can't wait for the customer."}</div>
                      </div>
                      <div data-wf--slot-item-button-main--style="primary-plus" data-button=" main" className="button_main_wrap">
                        <div className="clickable_wrap u-cover-absolute">
                          <A target="" href="/blog/daylit-vs-monk" className="clickable_link w-inline-block">
                            <span className="clickable_text u-sr-only">Button</span>
                          </A>
                          <button type="link" className="clickable_btn">
                            <span className="clickable_text u-sr-only">Button</span>
                          </button>
                        </div>
                        <div data-button="main-content" className="w-layout-vflex button_main_content-wrap">
                          <div aria-hidden="true" className="button_main_text">Read more</div>
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
                      <A fs-list-element="item-link" href="/blog/daylit-vs-monk" className="blog-feed_card-link w-inline-block">
                        <div>Daylit vs. Monk: Collection Automation Compared for Mid-Market Teams</div>
                        <div>Read more</div>
                      </A>
                      <div className="w-layout-vflex hide">
                        <div className="w-dyn-list">
                          <div role="list" className="w-dyn-items">
                            <div role="listitem" className="w-dyn-item">
                              <div fs-list-field="tags">Report</div>
                            </div>
                          </div>
                        </div>
                        <div>This is some text inside of a div block.</div>
                        <div fs-list-field="categories">{"AR automation & AI agents"}</div>
                      </div>
                    </div>
                  </div>
                  <div role="listitem" className="w-dyn-item">
                    <div className="blog-feed_card">
                      <div className="blog-feed_card_image-wrap">
                        <img loading="lazy" src="/_ext/cdn.prod.website-files.com/68ae872ea1f1fc625315711a/6ab42bba19d2830dd68e8b90_overlay-wide-p-1080.png" alt="" sizes="(max-width: 767px) 100vw, (max-width: 991px) 727px, 940px" srcSet="/_ext/cdn.prod.website-files.com/68ae872ea1f1fc625315711a/6ab42bba19d2830dd68e8b90_overlay-wide-p-500.png 500w, /_ext/cdn.prod.website-files.com/68ae872ea1f1fc625315711a/6ab42bba19d2830dd68e8b90_overlay-wide-p-800.png 800w, /_ext/cdn.prod.website-files.com/68ae872ea1f1fc625315711a/6ab42bba19d2830dd68e8b90_overlay-wide-p-1080.png 1080w, /_ext/cdn.prod.website-files.com/68ae872ea1f1fc625315711a/6ab42bba19d2830dd68e8b90_overlay-wide.png 1292w" className="blog-feed_card_image" />
                      </div>
                      <div className="w-layout-vflex blog-feed_card_text-wrap">
                        <div className="heading-style-h5 text-style-2lines">Daylit vs. Stuut: AR Automation Compared for Mid-Market Teams</div>
                        <div className="text-color-secondary text-style-2lines">{"Stuut and Daylit both go live faster than almost anyone in AR automation. Here's where the two actually split: on disputes, on workflows, and on cash that can't wait for the customer."}</div>
                      </div>
                      <div data-wf--slot-item-button-main--style="primary-plus" data-button=" main" className="button_main_wrap">
                        <div className="clickable_wrap u-cover-absolute">
                          <A target="" href="/blog/daylit-vs-stuut" className="clickable_link w-inline-block">
                            <span className="clickable_text u-sr-only">Button</span>
                          </A>
                          <button type="link" className="clickable_btn">
                            <span className="clickable_text u-sr-only">Button</span>
                          </button>
                        </div>
                        <div data-button="main-content" className="w-layout-vflex button_main_content-wrap">
                          <div aria-hidden="true" className="button_main_text">Read more</div>
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
                      <A fs-list-element="item-link" href="/blog/daylit-vs-stuut" className="blog-feed_card-link w-inline-block">
                        <div>Daylit vs. Stuut: AR Automation Compared for Mid-Market Teams</div>
                        <div>Read more</div>
                      </A>
                      <div className="w-layout-vflex hide">
                        <div className="w-dyn-list">
                          <div role="list" className="w-dyn-items">
                            <div role="listitem" className="w-dyn-item">
                              <div fs-list-field="tags">Report</div>
                            </div>
                          </div>
                        </div>
                        <div>This is some text inside of a div block.</div>
                        <div fs-list-field="categories">{"AR automation & AI agents"}</div>
                      </div>
                    </div>
                  </div>
                  <div role="listitem" className="w-dyn-item">
                    <div className="blog-feed_card">
                      <div className="blog-feed_card_image-wrap">
                        <img loading="lazy" src="/_ext/cdn.prod.website-files.com/68ae872ea1f1fc625315711a/6ab68b247bd8c4c4682edc60_overlay-apex-v2-p-1080.png" alt="" sizes="(max-width: 767px) 100vw, (max-width: 991px) 727px, 940px" srcSet="/_ext/cdn.prod.website-files.com/68ae872ea1f1fc625315711a/6ab68b247bd8c4c4682edc60_overlay-apex-v2-p-500.png 500w, /_ext/cdn.prod.website-files.com/68ae872ea1f1fc625315711a/6ab68b247bd8c4c4682edc60_overlay-apex-v2-p-800.png 800w, /_ext/cdn.prod.website-files.com/68ae872ea1f1fc625315711a/6ab68b247bd8c4c4682edc60_overlay-apex-v2-p-1080.png 1080w, /_ext/cdn.prod.website-files.com/68ae872ea1f1fc625315711a/6ab68b247bd8c4c4682edc60_overlay-apex-v2.png 1292w" className="blog-feed_card_image" />
                      </div>
                      <div className="w-layout-vflex blog-feed_card_text-wrap">
                        <div className="heading-style-h5 text-style-2lines">Daylit vs. Tesorio: AR Automation Compared for Mid-Market Teams</div>
                        <div className="text-color-secondary text-style-2lines">{"Tesorio built a public scorecard for evaluating AR platforms, exception handling included. Its own products never fill in that row. Here's the comparison, including where Tesorio genuinely has the edge."}</div>
                      </div>
                      <div data-wf--slot-item-button-main--style="primary-plus" data-button=" main" className="button_main_wrap">
                        <div className="clickable_wrap u-cover-absolute">
                          <A target="" href="/blog/daylit-vs-tesorio" className="clickable_link w-inline-block">
                            <span className="clickable_text u-sr-only">Button</span>
                          </A>
                          <button type="link" className="clickable_btn">
                            <span className="clickable_text u-sr-only">Button</span>
                          </button>
                        </div>
                        <div data-button="main-content" className="w-layout-vflex button_main_content-wrap">
                          <div aria-hidden="true" className="button_main_text">Read more</div>
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
                      <A fs-list-element="item-link" href="/blog/daylit-vs-tesorio" className="blog-feed_card-link w-inline-block">
                        <div>Daylit vs. Tesorio: AR Automation Compared for Mid-Market Teams</div>
                        <div>Read more</div>
                      </A>
                      <div className="w-layout-vflex hide">
                        <div className="w-dyn-list">
                          <div role="list" className="w-dyn-items">
                            <div role="listitem" className="w-dyn-item">
                              <div fs-list-field="tags">Report</div>
                            </div>
                          </div>
                        </div>
                        <div>This is some text inside of a div block.</div>
                        <div fs-list-field="categories">{"AR automation & AI agents"}</div>
                      </div>
                    </div>
                  </div>
                  <div role="listitem" className="w-dyn-item">
                    <div className="blog-feed_card">
                      <div className="blog-feed_card_image-wrap">
                        <img loading="lazy" src="/_ext/cdn.prod.website-files.com/68ae872ea1f1fc625315711a/6ab68aa8a6e85814cc3c6724_overlay-summary_AIPhone-p-1080.png" alt="" sizes="(max-width: 767px) 100vw, (max-width: 991px) 727px, 940px" srcSet="/_ext/cdn.prod.website-files.com/68ae872ea1f1fc625315711a/6ab68aa8a6e85814cc3c6724_overlay-summary_AIPhone-p-500.png 500w, /_ext/cdn.prod.website-files.com/68ae872ea1f1fc625315711a/6ab68aa8a6e85814cc3c6724_overlay-summary_AIPhone-p-800.png 800w, /_ext/cdn.prod.website-files.com/68ae872ea1f1fc625315711a/6ab68aa8a6e85814cc3c6724_overlay-summary_AIPhone-p-1080.png 1080w, /_ext/cdn.prod.website-files.com/68ae872ea1f1fc625315711a/6ab68aa8a6e85814cc3c6724_overlay-summary_AIPhone.png 1292w" className="blog-feed_card_image" />
                      </div>
                      <div className="w-layout-vflex blog-feed_card_text-wrap">
                        <div className="heading-style-h5 text-style-2lines">Why the Most Effective Collections Channel Gets Skipped First (And What to Do About It)</div>
                        <div className="text-color-secondary text-style-2lines">{"Most past-due invoices aren't stuck because someone's disputing them — they're stuck behind a phone call nobody had time to make. Daylit's agent now runs that call, so the channel that actually reaches people stops being the one your team skips."}</div>
                      </div>
                      <div data-wf--slot-item-button-main--style="primary-plus" data-button=" main" className="button_main_wrap">
                        <div className="clickable_wrap u-cover-absolute">
                          <A target="" href="/blog/why-the-most-effective-collections-channel-gets-skipped-first" className="clickable_link w-inline-block">
                            <span className="clickable_text u-sr-only">Button</span>
                          </A>
                          <button type="link" className="clickable_btn">
                            <span className="clickable_text u-sr-only">Button</span>
                          </button>
                        </div>
                        <div data-button="main-content" className="w-layout-vflex button_main_content-wrap">
                          <div aria-hidden="true" className="button_main_text">Read more</div>
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
                      <A fs-list-element="item-link" href="/blog/why-the-most-effective-collections-channel-gets-skipped-first" className="blog-feed_card-link w-inline-block">
                        <div>Why the Most Effective Collections Channel Gets Skipped First (And What to Do About It)</div>
                        <div>Read more</div>
                      </A>
                      <div className="w-layout-vflex hide">
                        <div className="w-dyn-list">
                          <div role="list" className="w-dyn-items">
                            <div role="listitem" className="w-dyn-item">
                              <div fs-list-field="tags">Accounts Receivable Automation</div>
                            </div>
                          </div>
                        </div>
                        <div>This is some text inside of a div block.</div>
                        <div fs-list-field="categories">Collections Operations</div>
                      </div>
                    </div>
                  </div>
                  <div role="listitem" className="w-dyn-item">
                    <div className="blog-feed_card">
                      <div className="blog-feed_card_image-wrap">
                        <img loading="lazy" src="/_ext/cdn.prod.website-files.com/68ae872ea1f1fc625315711a/6aaad1e13dbacd7fed4e24f0_hero-image-3-cropped-p-1080.png" alt="" sizes="(max-width: 767px) 100vw, (max-width: 991px) 727px, 940px" srcSet="/_ext/cdn.prod.website-files.com/68ae872ea1f1fc625315711a/6aaad1e13dbacd7fed4e24f0_hero-image-3-cropped-p-500.png 500w, /_ext/cdn.prod.website-files.com/68ae872ea1f1fc625315711a/6aaad1e13dbacd7fed4e24f0_hero-image-3-cropped-p-800.png 800w, /_ext/cdn.prod.website-files.com/68ae872ea1f1fc625315711a/6aaad1e13dbacd7fed4e24f0_hero-image-3-cropped-p-1080.png 1080w, /_ext/cdn.prod.website-files.com/68ae872ea1f1fc625315711a/6aaad1e13dbacd7fed4e24f0_hero-image-3-cropped.png 1168w" className="blog-feed_card_image" />
                      </div>
                      <div className="w-layout-vflex blog-feed_card_text-wrap">
                        <div className="heading-style-h5 text-style-2lines">Daylit vs. Billtrust: AR Automation Compared for Mid-Market Teams</div>
                        <div className="text-color-secondary text-style-2lines">{"Daylit and Billtrust both promise faster collections, but they're far apart on how long it takes to get there and on who does the work once you're live. Here's the comparison, including where Billtrust actually has the edge."}</div>
                      </div>
                      <div data-wf--slot-item-button-main--style="primary-plus" data-button=" main" className="button_main_wrap">
                        <div className="clickable_wrap u-cover-absolute">
                          <A target="" href="/blog/daylit-vs-billtrust" className="clickable_link w-inline-block">
                            <span className="clickable_text u-sr-only">Button</span>
                          </A>
                          <button type="link" className="clickable_btn">
                            <span className="clickable_text u-sr-only">Button</span>
                          </button>
                        </div>
                        <div data-button="main-content" className="w-layout-vflex button_main_content-wrap">
                          <div aria-hidden="true" className="button_main_text">Read more</div>
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
                      <A fs-list-element="item-link" href="/blog/daylit-vs-billtrust" className="blog-feed_card-link w-inline-block">
                        <div>Daylit vs. Billtrust: AR Automation Compared for Mid-Market Teams</div>
                        <div>Read more</div>
                      </A>
                      <div className="w-layout-vflex hide">
                        <div className="w-dyn-list">
                          <div role="list" className="w-dyn-items">
                            <div role="listitem" className="w-dyn-item">
                              <div fs-list-field="tags">Report</div>
                            </div>
                          </div>
                        </div>
                        <div>This is some text inside of a div block.</div>
                        <div fs-list-field="categories">{"AR automation & AI agents"}</div>
                      </div>
                    </div>
                  </div>
                  <div role="listitem" className="w-dyn-item">
                    <div className="blog-feed_card">
                      <div className="blog-feed_card_image-wrap">
                        <img loading="lazy" src="/_ext/cdn.prod.website-files.com/68ae872ea1f1fc625315711a/6aa81c2c06fd9f9d7c247384_hero-image-cropped-p-1080.png" alt="" sizes="(max-width: 767px) 100vw, (max-width: 991px) 727px, 940px" srcSet="/_ext/cdn.prod.website-files.com/68ae872ea1f1fc625315711a/6aa81c2c06fd9f9d7c247384_hero-image-cropped-p-500.png 500w, /_ext/cdn.prod.website-files.com/68ae872ea1f1fc625315711a/6aa81c2c06fd9f9d7c247384_hero-image-cropped-p-800.png 800w, /_ext/cdn.prod.website-files.com/68ae872ea1f1fc625315711a/6aa81c2c06fd9f9d7c247384_hero-image-cropped-p-1080.png 1080w, /_ext/cdn.prod.website-files.com/68ae872ea1f1fc625315711a/6aa81c2c06fd9f9d7c247384_hero-image-cropped.png 1168w" className="blog-feed_card_image" />
                      </div>
                      <div className="w-layout-vflex blog-feed_card_text-wrap">
                        <div className="heading-style-h5 text-style-2lines">Your Dispute Categories Aren’t Broken. They’re Not Yours.</div>
                        <div className="text-color-secondary text-style-2lines">{"Every dispute lands in the same generic bucket today, no matter what it's actually about. Here's how Dispute Reasons routes each one by your own categories, automatically."}</div>
                      </div>
                      <div data-wf--slot-item-button-main--style="primary-plus" data-button=" main" className="button_main_wrap">
                        <div className="clickable_wrap u-cover-absolute">
                          <A target="" href="/blog/your-dispute-categories-arent-broken-theyre-not-yours" className="clickable_link w-inline-block">
                            <span className="clickable_text u-sr-only">Button</span>
                          </A>
                          <button type="link" className="clickable_btn">
                            <span className="clickable_text u-sr-only">Button</span>
                          </button>
                        </div>
                        <div data-button="main-content" className="w-layout-vflex button_main_content-wrap">
                          <div aria-hidden="true" className="button_main_text">Read more</div>
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
                      <A fs-list-element="item-link" href="/blog/your-dispute-categories-arent-broken-theyre-not-yours" className="blog-feed_card-link w-inline-block">
                        <div>Your Dispute Categories Aren’t Broken. They’re Not Yours.</div>
                        <div>Read more</div>
                      </A>
                      <div className="w-layout-vflex hide">
                        <div className="w-dyn-list">
                          <div role="list" className="w-dyn-items">
                            <div role="listitem" className="w-dyn-item">
                              <div fs-list-field="tags">Accounts Receivable Automation</div>
                            </div>
                          </div>
                        </div>
                        <div>This is some text inside of a div block.</div>
                        <div fs-list-field="categories">Collections Operations</div>
                      </div>
                    </div>
                  </div>
                  <div role="listitem" className="w-dyn-item">
                    <div className="blog-feed_card">
                      <div className="blog-feed_card_image-wrap">
                        <img loading="lazy" src="/_ext/cdn.prod.website-files.com/68ae872ea1f1fc625315711a/6aa81c6dbd19da820e08be28_hero-image-2-cropped-p-1080.png" alt="" sizes="(max-width: 767px) 100vw, (max-width: 991px) 727px, 940px" srcSet="/_ext/cdn.prod.website-files.com/68ae872ea1f1fc625315711a/6aa81c6dbd19da820e08be28_hero-image-2-cropped-p-500.png 500w, /_ext/cdn.prod.website-files.com/68ae872ea1f1fc625315711a/6aa81c6dbd19da820e08be28_hero-image-2-cropped-p-800.png 800w, /_ext/cdn.prod.website-files.com/68ae872ea1f1fc625315711a/6aa81c6dbd19da820e08be28_hero-image-2-cropped-p-1080.png 1080w, /_ext/cdn.prod.website-files.com/68ae872ea1f1fc625315711a/6aa81c6dbd19da820e08be28_hero-image-2-cropped.png 1168w" className="blog-feed_card_image" />
                      </div>
                      <div className="w-layout-vflex blog-feed_card_text-wrap">
                        <div className="heading-style-h5 text-style-2lines">Daylit vs. HighRadius: AR Automation Compared for Mid-Market Teams</div>
                        <div className="text-color-secondary text-style-2lines">{"HighRadius runs on a decade of enterprise history. Daylit runs on days, not quarters. A row-by-row look at where each one actually holds up, sourced from each company's own published materials, with Gartner, IDC, and Forrester validation cited where HighRadius provides it."}</div>
                      </div>
                      <div data-wf--slot-item-button-main--style="primary-plus" data-button=" main" className="button_main_wrap">
                        <div className="clickable_wrap u-cover-absolute">
                          <A target="" href="/blog/daylit-vs-highradius" className="clickable_link w-inline-block">
                            <span className="clickable_text u-sr-only">Button</span>
                          </A>
                          <button type="link" className="clickable_btn">
                            <span className="clickable_text u-sr-only">Button</span>
                          </button>
                        </div>
                        <div data-button="main-content" className="w-layout-vflex button_main_content-wrap">
                          <div aria-hidden="true" className="button_main_text">Read more</div>
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
                      <A fs-list-element="item-link" href="/blog/daylit-vs-highradius" className="blog-feed_card-link w-inline-block">
                        <div>Daylit vs. HighRadius: AR Automation Compared for Mid-Market Teams</div>
                        <div>Read more</div>
                      </A>
                      <div className="w-layout-vflex hide">
                        <div className="w-dyn-list">
                          <div role="list" className="w-dyn-items">
                            <div role="listitem" className="w-dyn-item">
                              <div fs-list-field="tags">Report</div>
                            </div>
                          </div>
                        </div>
                        <div>This is some text inside of a div block.</div>
                        <div fs-list-field="categories">{"AR automation & AI agents"}</div>
                      </div>
                    </div>
                  </div>
                </div>
                <div role="navigation" aria-label="List" className="w-pagination-wrapper blog-list_page-wrap">
                  <div list_page-buttons="" className="list_page-buttons">
                    <a fs-list-element="page-button" href="#" className="list_page-button">1</a>
                    <div fs-list-element="page-dots" className="list_page-elipses">...</div>
                  </div>
                  <A href="/blog?5720ae83_page=2" aria-label="Next Page" className="w-pagination-next blog-list_page-nav">
                    <div className="blog-list_page-arrow is-flip w-embed">
                      <svg xmlns="http://www.w3.org/2000/svg" width="100%" height="100%" viewBox="0 0 18 18" fill="none" preserveAspectRatio="xMidYMid meet" aria-hidden="true" role="img">
                        <path d="M10.8517 2.97672L5.22672 8.60172C5.17442 8.65396 5.13293 8.716 5.10462 8.78428C5.07632 8.85257 5.06175 8.92577 5.06175 8.99969C5.06175 9.07361 5.07632 9.1468 5.10462 9.21509C5.13293 9.28338 5.17442 9.34542 5.22672 9.39766L10.8517 15.0227C10.9573 15.1282 11.1004 15.1875 11.2497 15.1875C11.399 15.1875 11.5421 15.1282 11.6477 15.0227C11.7532 14.9171 11.8125 14.774 11.8125 14.6247C11.8125 14.4754 11.7532 14.3323 11.6477 14.2267L6.41992 8.99969L11.6477 3.77266C11.6999 3.72039 11.7414 3.65835 11.7697 3.59007C11.7979 3.52178 11.8125 3.4486 11.8125 3.37469C11.8125 3.30078 11.7979 3.22759 11.7697 3.15931C11.7414 3.09102 11.6999 3.02898 11.6477 2.97672C11.5954 2.92446 11.5334 2.883 11.4651 2.85472C11.3968 2.82643 11.3236 2.81187 11.2497 2.81187C11.1758 2.81187 11.1026 2.82643 11.0343 2.85472C10.966 2.883 10.904 2.92446 10.8517 2.97672Z" fill="currentColor" />
                      </svg>
                    </div>
                  </A>
                  <div aria-label="Page 1 of 10" role="heading" className="w-page-count hide">1 / 10</div>
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
            </div>
          </div>
        </div>
      </div>
      <div className="clear_btn-js w-embed w-script"></div>
      <div data-wf--utility-spacer-section--padding="large" className="padding-section-wrap">
        <div className="padding-top"></div>
      </div>
    </section>
  );
}
