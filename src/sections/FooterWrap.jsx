import A from "../lib/A.jsx";

// footer-wrap — the section's real markup, read from the rendered page (route /, section 9).
export default function FooterWrap() {
  return (
    <footer className="footer-wrap" data-clone-section="FooterWrap">
      <div className="hide w-embed"></div>
      <div className="big-section">
        <div className="container-large">
          <div className="footer-top">
            <div className="footer_left-wrapper">
              <A href="/" aria-label="Home" aria-current="page" className="footer_logo-link w-nav-brand w--current">
                <div className="w-embed">
                  <svg width="97" height="26" viewBox="0 0 97 26" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M95.093 20.59C94.1397 20.59 93.3009 20.3803 92.5764 19.9609C91.8519 19.5414 91.28 18.9409 90.8606 18.1592C90.4602 17.3585 90.26 16.4148 90.26 15.3281V8.63631H87.7148V5.91953H88.9159C89.4879 5.91953 89.9264 5.77654 90.2314 5.49056C90.5365 5.18552 90.689 4.74703 90.689 4.17508V2.03027H93.4629V5.74794H96.9518V8.63631H93.4629V15.0707C93.4629 15.9096 93.6631 16.5387 94.0635 16.9581C94.4638 17.3585 95.0263 17.5587 95.7507 17.5587C96.2083 17.5587 96.6086 17.4824 96.9518 17.3299V20.2468C96.704 20.3422 96.418 20.4184 96.0939 20.4756C95.7889 20.5519 95.4552 20.59 95.093 20.59Z" fill="#4D1520" />
                    <path d="M83.5672 5.74808H86.7701V20.2184H83.5672V5.74808ZM85.1973 3.74626C84.6444 3.74626 84.1868 3.56515 83.8246 3.20291C83.4624 2.84068 83.2812 2.40218 83.2812 1.88743C83.2812 1.54426 83.367 1.22969 83.5386 0.94371C83.7102 0.65774 83.939 0.42896 84.225 0.25737C84.53 0.0857902 84.8541 0 85.1973 0C85.7502 0 86.2077 0.18111 86.57 0.54335C86.9322 0.90558 87.1133 1.35361 87.1133 1.88743C87.1133 2.2306 87.0275 2.54517 86.8559 2.83114C86.6843 3.11712 86.4556 3.3459 86.1696 3.51748C85.8836 3.67 85.5595 3.74626 85.1973 3.74626Z" fill="#4D1520" />
                    <path d="M77.8789 0.1997H81.0818V20.2179H77.8789V0.1997Z" fill="#4D1520" />
                    <path d="M68.4058 18.8171V20.6759L62 5.74804H65.4603L69.9501 16.8438H69.2924L73.6106 5.74804H76.9279L68.7204 25.3659H65.5747L68.4058 18.8171Z" fill="#4D1520" />
                    <path d="M53.5259 20.5903C52.2676 20.5903 51.1047 20.2662 50.037 19.618C48.9694 18.9507 48.1115 18.0356 47.4632 16.8726C46.8341 15.7097 46.5195 14.4132 46.5195 12.9834C46.5195 11.5344 46.8341 10.238 47.4632 9.09411C48.1115 7.93121 48.9694 7.02558 50.037 6.37737C51.1047 5.7101 52.2676 5.37646 53.5259 5.37646C54.2694 5.37646 54.9558 5.49085 55.5849 5.71963C56.2141 5.94841 56.7384 6.21532 57.1578 6.52036C57.5772 6.8254 57.9013 7.10184 58.1301 7.34969H58.2731L58.845 5.74823H61.2472V20.2185H58.845L58.2731 18.5885H58.1301C57.9013 18.8554 57.5772 19.1414 57.1578 19.4464C56.7384 19.7514 56.2141 20.0183 55.5849 20.2471C54.9558 20.4759 54.2694 20.5903 53.5259 20.5903ZM53.8977 17.6162C54.6412 17.6162 55.3275 17.4255 55.9567 17.0442C56.6049 16.6438 57.1101 16.091 57.4724 15.3856C57.8537 14.6802 58.0443 13.8794 58.0443 12.9834C58.0443 12.0873 57.8537 11.2866 57.4724 10.5812C57.1101 9.87581 56.6049 9.33241 55.9567 8.95111C55.3275 8.55081 54.6412 8.35061 53.8977 8.35061C53.1351 8.35061 52.3129 8.55081 51.6647 8.95111C51.0356 9.33241 50.5304 9.87581 50.1491 10.5812C49.7868 11.2866 49.6057 12.0873 49.6057 12.9834C49.6057 13.8794 49.7868 14.6802 50.1491 15.3856C50.5304 16.091 51.0356 16.6438 51.6647 17.0442C52.3129 17.4255 53.1351 17.6162 53.8977 17.6162Z" fill="#4D1520" />
                    <path d="M37.6665 20.5897C36.4082 20.5897 35.2453 20.2656 34.1776 19.6174C33.11 18.9501 32.2521 18.035 31.6039 16.872C30.9747 15.709 30.6602 14.4126 30.6602 12.9828C30.6602 11.5338 30.9747 10.2374 31.6039 9.09351C32.2521 7.93051 33.11 7.02496 34.1776 6.37675C35.2453 5.70948 36.4082 5.37584 37.6665 5.37584C38.3719 5.37584 39.0297 5.49023 39.6398 5.71901C40.2498 5.92873 40.7551 6.17657 41.1554 6.46255C41.5749 6.74852 41.8704 7.01543 42.0419 7.26328H42.1849V0.1997H45.3878V20.2179H42.9857L42.4137 18.5879H42.2707C42.0419 18.8548 41.7178 19.1407 41.2984 19.4458C40.879 19.7508 40.3547 20.0177 39.7255 20.2465C39.0964 20.4753 38.4101 20.5897 37.6665 20.5897ZM38.0383 17.6155C38.7818 17.6155 39.4682 17.4249 40.0973 17.0436C40.7455 16.6432 41.2507 16.0903 41.613 15.3849C41.9943 14.6795 42.1849 13.8788 42.1849 12.9828C42.1849 12.0867 41.9943 11.286 41.613 10.5806C41.2507 9.87521 40.7455 9.33181 40.0973 8.95051C39.4682 8.55021 38.7818 8.35001 38.0383 8.35001C37.2757 8.35001 36.5703 8.55021 35.9221 8.95051C35.2929 9.33181 34.7877 9.87521 34.4064 10.5806C34.0442 11.286 33.8631 12.0867 33.8631 12.9828C33.8631 13.8788 34.0442 14.6795 34.4064 15.3849C34.7877 16.0903 35.2929 16.6432 35.9221 17.0436C36.5703 17.4249 37.2757 17.6155 38.0383 17.6155Z" fill="#4D1520" />
                    <path d="M13.9759 20.373C15.508 20.3166 16.0688 21.9575 14.5991 22.3941C13.5744 22.6986 12.4891 22.8623 11.3652 22.8623C10.254 22.8623 9.18034 22.7023 8.16568 22.4044C6.69371 21.9723 7.25106 20.33 8.78427 20.3822C9.61285 20.4104 10.4324 20.4257 11.2363 20.4258C12.1321 20.4258 13.0485 20.4072 13.9759 20.373ZM19.6424 15.4163C20.7979 15.3118 21.6693 16.4296 21.0639 17.4193C21.026 17.4813 20.9875 17.5429 20.9485 17.6041C20.7053 17.985 20.2908 18.2162 19.8409 18.2581C16.9538 18.5268 13.9908 18.7082 11.2373 18.708C8.5613 18.7077 5.69656 18.5348 2.90187 18.277C2.45274 18.2355 2.03875 18.0053 1.79515 17.6257C1.75603 17.5647 1.71748 17.5034 1.6795 17.4416C1.07108 16.4524 1.94196 15.3324 3.09874 15.4358C5.82332 15.6795 8.61309 15.8405 11.2363 15.8408C13.938 15.841 16.8254 15.671 19.6424 15.4163ZM11.3652 0.13183C17.642 0.13187 22.7305 5.22031 22.7305 11.4971C22.7305 11.6822 22.7259 11.8663 22.7169 12.0493C22.6818 12.7637 22.1009 13.3103 21.3896 13.3848C18.0258 13.7368 14.4854 13.9915 11.2373 13.9912C8.06059 13.9909 4.61725 13.7457 1.34079 13.4038C0.630419 13.3297 0.050224 12.7844 0.0144024 12.0711C0.00485393 11.8809 2.10238e-06 11.6896 0 11.4971C0 5.22028 5.08845 0.13183 11.3652 0.13183Z" fill="#4D1520" />
                  </svg>
                  {" "}
                </div>
              </A>
              <div className="footer_link-contact is-wrap">
                <a href="mailto:info@daylit.com?subject=Contact%20Us" className="footer_link is-dark">info@daylit.com</a>
                <a href="tel:(617)-419-7106" className="footer_link is-dark">(617)-419-7106</a>
                <div className="footer_link is-dark">One Boston Place | Boston, MA 02108</div>
              </div>
            </div>
            <div className="footer-top-right">
              <div className="w-layout-vflex">
                <h2 className="footer_top-title">Transport your A/R into the AI-era</h2>
                <p className="footer_cta-banner_content-para">Monthly insights on AI strategy for forward thinking finance teams.</p>
              </div>
              <div className="w-layout-vflex cta-banner_form footer">
                <div className="hs_form-css w-embed"></div>
                <div data-hubspot="" className="hs_form-code w-embed w-script"></div>
              </div>
            </div>
          </div>
        </div>
        <div className="w-layout-blockcontainer footer_container w-container">
          <div className="footer-mid">
            <div className="footer_link-list-wrap">
              <div className="footer_link-list-label-wrap">
                <div className="footer_link-list-label is-dark">Products</div>
              </div>
              <div className="w-dyn-list">
                <div role="list" className="footer_link-list padding-0 is-wrap w-dyn-items">
                  <div role="listitem" className="w-dyn-item">
                    <A href="/product/fundnow" className="footer_link is-link">Sell an invoice</A>
                  </div>
                  <div role="listitem" className="w-dyn-item">
                    <A href="/product/offerterms" className="footer_link is-link">Outsource net terms</A>
                  </div>
                  <div role="listitem" className="w-dyn-item">
                    <A href="/product/paylater" className="footer_link is-link">Offer payment plans</A>
                  </div>
                  <div role="listitem" className="w-dyn-item">
                    <A href="/product/drawdown" className="footer_link is-link">Draw working capital</A>
                  </div>
                </div>
              </div>
            </div>
            <div className="footer_link-list-wrap">
              <div className="footer_link-list-label-wrap">
                <div className="footer_link-list-label is-dark">RESOURCES</div>
              </div>
              <A href="/blog" className="footer_link is-link">Blog</A>
              <a className="footer_link is-link">Developer docs</a>
              <A href="/faq" className="footer_link is-link">FAQs</A>
            </div>
            <div className="footer_link-list-wrap">
              <div className="footer_link-list-label-wrap">
                <div className="footer_link-list-label is-dark">INDUSTRIES</div>
              </div>
              <div className="w-dyn-list">
                <div role="list" className="footer_link-list padding-0 is-wrap w-dyn-items">
                  <div role="listitem" className="w-dyn-item">
                    <A href="/solution/services" className="footer_link is-link">Field Services</A>
                  </div>
                  <div role="listitem" className="w-dyn-item">
                    <A href="/solution/staffing" className="footer_link is-link">Staffing</A>
                  </div>
                  <div role="listitem" className="w-dyn-item">
                    <A href="/solution/manufacturing" className="footer_link is-link">Manufacturing</A>
                  </div>
                  <div role="listitem" className="w-dyn-item">
                    <A href="/solution/legal" className="footer_link is-link">Legal</A>
                  </div>
                </div>
              </div>
            </div>
            <div className="footer_link-list-wrap">
              <div className="footer_link-list-label-wrap">
                <div className="footer_link-list-label is-dark">ABOUT</div>
              </div>
              <A href="/our-team-story" className="footer_link is-link">{"Our team & story"}</A>
              <A href="/testimonial" className="footer_link is-link">Customer reviews</A>
              <A href="/referral" className="footer_link is-link">Referral program</A>
              <a target="_blank" className="footer_link is-link">
                {"Careers  "}
                <span className="footer_link-highlight-text">We’re hiring!</span>
              </a>
            </div>
          </div>
          <div className="footer-btm">
            <div className="footer-btm-text">© 2026 Daylit. All rights reserved.</div>
            <div className="w-layout-grid footerfooter_social-list">
              <a target="_blank" className="footer_social-link w-inline-block">
                <div className="icon-embed-xsmall w-embed">
                  <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <mask id="mask0_19903_657" style={{ "maskType": "alpha" }} maskUnits="userSpaceOnUse" x="0" y="0" width="24" height="24">
                      <rect width="24" height="24" fill="#D9D9D9" />
                    </mask>
                    <g mask="url(#mask0_19903_657)">
                      <path d="M16.6009 5.21777H19.0544L13.6943 11.3439L20 19.6803H15.0627L11.1957 14.6243L6.77087 19.6803H4.31595L10.049 13.1277L4 5.21777H9.06262L12.5581 9.83911L16.6009 5.21777ZM15.7399 18.2118H17.0993L8.32392 6.60914H6.86506L15.7399 18.2118Z" fill="#4D1520" />
                    </g>
                  </svg>
                </div>
              </a>
              <a target="_blank" className="footer_social-link w-inline-block">
                <div className="icon-embed-xsmall w-embed">
                  <svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M14.8156 0H1.18125C0.528125 0 0 0.515625 0 1.15313V14.8438C0 15.4813 0.528125 16 1.18125 16H14.8156C15.4688 16 16 15.4813 16 14.8469V1.15313C16 0.515625 15.4688 0 14.8156 0ZM4.74687 13.6344H2.37188V5.99687H4.74687V13.6344ZM3.55938 4.95625C2.79688 4.95625 2.18125 4.34062 2.18125 3.58125C2.18125 2.82188 2.79688 2.20625 3.55938 2.20625C4.31875 2.20625 4.93437 2.82188 4.93437 3.58125C4.93437 4.3375 4.31875 4.95625 3.55938 4.95625ZM13.6344 13.6344H11.2625V9.92188C11.2625 9.0375 11.2469 7.89687 10.0281 7.89687C8.79375 7.89687 8.60625 8.8625 8.60625 9.85938V13.6344H6.2375V5.99687H8.5125V7.04063H8.54375C8.85938 6.44063 9.63438 5.80625 10.7875 5.80625C13.1906 5.80625 13.6344 7.3875 13.6344 9.44375V13.6344Z" fill="#4D1520" />
                  </svg>
                </div>
              </a>
              <a target="_blank" className="footer_social-link w-inline-block">
                <div className="icon-embed-xsmall w-embed">
                  <svg width="18" height="13" viewBox="0 0 18 13" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M17.8207 2.80505C17.8207 2.80505 17.6449 1.53069 17.1035 0.971119C16.418 0.234657 15.6516 0.231047 15.3 0.187726C12.7828 -1.03286e-07 9.00352 0 9.00352 0H8.99648C8.99648 0 5.21719 -1.03286e-07 2.7 0.187726C2.34844 0.231047 1.58203 0.234657 0.896484 0.971119C0.355078 1.53069 0.182812 2.80505 0.182812 2.80505C0.182812 2.80505 0 4.30325 0 5.79783V7.19855C0 8.69314 0.179297 10.1913 0.179297 10.1913C0.179297 10.1913 0.355078 11.4657 0.892969 12.0253C1.57852 12.7617 2.47852 12.7365 2.8793 12.8159C4.3207 12.9567 9 13 9 13C9 13 12.7828 12.9928 15.3 12.8087C15.6516 12.7653 16.418 12.7617 17.1035 12.0253C17.6449 11.4657 17.8207 10.1913 17.8207 10.1913C17.8207 10.1913 18 8.69675 18 7.19855V5.79783C18 4.30325 17.8207 2.80505 17.8207 2.80505ZM7.14023 8.89892V3.70397L12.0023 6.31047L7.14023 8.89892Z" fill="#4D1520" />
                  </svg>
                </div>
              </a>
            </div>
            <div className="footer_legal-wrap w-dyn-list">
              <div role="list" className="footer_legal-list is-left w-dyn-items">
                <div role="listitem" className="w-dyn-item">
                  <A href="/legal/dpa-customer" className="footer_legal-link is-link w-inline-block">
                    <div>DPA</div>
                    <div className="footer_legal-link-dot"></div>
                  </A>
                </div>
                <div role="listitem" className="w-dyn-item">
                  <A href="/legal/sla-customer" className="footer_legal-link is-link w-inline-block">
                    <div>SLA</div>
                    <div className="footer_legal-link-dot"></div>
                  </A>
                </div>
                <div role="listitem" className="w-dyn-item">
                  <A href="/legal/cookie-consent" className="footer_legal-link is-link w-inline-block">
                    <div>Cookie Consent</div>
                    <div className="footer_legal-link-dot"></div>
                  </A>
                </div>
                <div role="listitem" className="w-dyn-item">
                  <A href="/legal/privacy-policy" className="footer_legal-link is-link w-inline-block">
                    <div>Privacy Policy</div>
                    <div className="footer_legal-link-dot"></div>
                  </A>
                </div>
                <div role="listitem" className="w-dyn-item">
                  <A href="/legal/terms-conditions" className="footer_legal-link is-link w-inline-block">
                    <div>{"Terms & Conditions"}</div>
                    <div className="footer_legal-link-dot"></div>
                  </A>
                </div>
              </div>
            </div>
          </div>
          <div className="footer-divider"></div>
          <div className="footer-divider is-btm"></div>
        </div>
        <div data-wf--utility-spacer-section--padding="tiny" className="padding-section-wrap">
          <div className="padding-top w-variant-7f479514-2290-79d7-2a62-1d4ed829a7d3"></div>
        </div>
      </div>
    </footer>
  );
}
