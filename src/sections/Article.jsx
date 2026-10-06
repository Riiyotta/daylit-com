// IA section(s): support.section-article-blog (ia/ia.json, design-repo/sections/)
// article — the section's real markup, read from the rendered page (route /blog/this-ai-startup-is-giving-away-the-playbook-to-kill-its-own-category, section 2).
export default function Article() {
  return (
    <article className="section_article-blog" data-clone-section="Article">
      <div data-wf--utility-spacer-section--padding="small" className="padding-section-wrap">
        <div className="padding-top w-variant-be9514d5-b59a-26cd-e5bf-b06f381984af"></div>
      </div>
      <div className="big-section">
        <div className="w-layout-blockcontainer container-large w-container">
          <div className="w-layout-grid article-blog_layout">
            <aside id="w-node-_9ec83123-3b91-2a8c-b34d-4a3c7bf2deab-fac81fab" className="w-layout-vflex article-aside_sticky-wrap">
              <div className="blog-aside_block">
                <div className="w-layout-vflex blog-author_layout">
                  <div id="w-node-f924fece-72ba-8f02-8376-addd84207940-fac81fab" className="blog-author_img-wrap">
                    <img src="/_ext/cdn.prod.website-files.com/68ae872ea1f1fc625315711a/68c9757c74340bd92977410e_jared-p-500.webp" loading="lazy" alt="" sizes="(max-width: 767px) 48vw, (max-width: 991px) 47vw, 462px" srcSet="/_ext/cdn.prod.website-files.com/68ae872ea1f1fc625315711a/68c9757c74340bd92977410e_jared-p-500.webp 500w, /_ext/cdn.prod.website-files.com/68ae872ea1f1fc625315711a/68c9757c74340bd92977410e_jared.webp 763w" className="u-image-cover" />
                  </div>
                  <div className="text-size-small">Jared Shulman</div>
                  <div className="text-size-small text-color-secondary">{"Co-Founder & CEO"}</div>
                </div>
                <div fs-list-instance="tags" fs-list-element="wrapper" className="w-dyn-list">
                  <div role="list" className="button-group is-tags w-dyn-items">
                    <div role="listitem" className="w-dyn-item">
                      <div data-wf--slot-item-tag--color="secondary" className="tag w-variant-d499f11c-d76f-d0b8-632f-a8d092fac3d4">
                        <div className="tag-dot"></div>
                        <div fs-list-field="tags" className="tag-text">Accounts receivable</div>
                      </div>
                    </div>
                    <div role="listitem" className="w-dyn-item">
                      <div data-wf--slot-item-tag--color="secondary" className="tag w-variant-d499f11c-d76f-d0b8-632f-a8d092fac3d4">
                        <div className="tag-dot"></div>
                        <div fs-list-field="tags" className="tag-text">Accounts Receivable Automation</div>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="tool-form_divider"></div>
                <div className="blog-form_block w-form w-form-loading">
                  <form id="wf-form-Blog-Sign-Up-Form" name="wf-form-Blog-Sign-Up-Form" data-name="Blog Sign Up Form" method="get" className="blog-form_form" data-wf-page-id="68ae973e5e84ee02fac81fab" data-wf-element-id="c0608e88-7dc7-bd58-d757-2ae22b3f889d" data-turnstile-sitekey="0x4AAAAAAAQTptj2So4dx43e" aria-label="Blog Sign Up Form" onSubmit={(e) => e.preventDefault()}>
                    <div className="w-layout-vflex blog-form_content-wrap">
                      <div className="heading-style-h6">Boost your financial savvy</div>
                      <p className="text-size-small text-wrap-pretty">Monthly insights on working capital planning, cash flow management and payment strategies.</p>
                    </div>
                    <div className="w-layout-vflex blog-form_list">
                      <label htmlFor="Email" className="u-sr-only">Email Address</label>
                      <div className="hs_form-code w-embed w-script"></div>
                      <div className="hs_form-css w-embed"></div>
                    </div>
                    <input type="submit" data-wait="Please wait..." className="hide w-button w-form-loading" defaultValue="Submit" disabled />
                    <div></div>
                  </form>
                  <div className="success-message w-form-done" tabIndex="-1" role="region" aria-label="Blog Sign Up Form success">
                    <div>
                      {"Thank you! "}
                      <br />
                      Your submission has been received!
                    </div>
                  </div>
                  <div className="error-message w-form-fail" tabIndex="-1" role="region" aria-label="Blog Sign Up Form failure">
                    <div className="error-message-text">Oops! Something went wrong while submitting the form.</div>
                  </div>
                </div>
                <div className="social_list">
                  <button data-clipboard="url" className="social_button">
                    <div className="social_button-icon-link w-embed">
                      <svg xmlns="http://www.w3.org/2000/svg" width="100%" height="100%" viewBox="0 0 23 23" fill="none" preserveAspectRatio="xMidYMid meet" aria-hidden="true" role="img">
                        <path d="M8.09619 10.9312L5.64893 13.3794C5.10338 13.9267 4.79639 14.6682 4.79639 15.4409C4.79646 16.2135 5.10346 16.9543 5.64893 17.5015V17.5024C6.19642 18.0475 6.9379 18.353 7.71045 18.353C8.48281 18.353 9.22358 18.0473 9.771 17.5024H9.77197L12.2192 15.0542L13.2495 16.0845L10.8022 18.5327C10.3964 18.9389 9.9139 19.2606 9.3833 19.48C8.85286 19.6993 8.28444 19.812 7.71045 19.811H7.70947C7.1355 19.8121 6.56703 19.6993 6.03662 19.48C5.50624 19.2606 5.02423 18.9388 4.61865 18.5327C3.79995 17.712 3.3404 16.6001 3.34033 15.4409C3.34033 14.2817 3.79901 13.1689 4.61768 12.3481L4.61865 12.3491L7.06592 9.90088L8.09619 10.9312ZM15.8267 8.35498L8.35303 15.8276L7.32275 14.7964L14.7954 7.32471L15.8267 8.35498ZM15.4399 3.34131C16.5991 3.34138 17.7111 3.80093 18.5317 4.61963V4.61865C19.3501 5.43963 19.8091 6.55224 19.8091 7.71143C19.809 8.79816 19.405 9.84316 18.6802 10.646L18.5317 10.8032L16.0835 13.2505L15.0532 12.2202L17.5015 9.77295V9.77197C18.0468 9.22479 18.353 8.48393 18.353 7.71143C18.353 6.93872 18.047 6.19716 17.5015 5.6499H17.5005C16.9531 5.10492 16.2124 4.79841 15.4399 4.79834C14.7638 4.79834 14.1115 5.0327 13.5923 5.45654L13.3784 5.6499L10.9302 8.09717L9.8999 7.06689L12.3481 4.61963L12.3472 4.61865C13.1679 3.79999 14.2807 3.34131 15.4399 3.34131Z" fill="#FBF9F6" stroke="#4D1520" strokeWidth="0.364384" />
                      </svg>
                    </div>
                    <div data-clipboard="label" className="social_button-label">Copied!</div>
                  </button>
                  <button fs-socialshare-element="linkedin" className="social_button">
                    <div className="social_button-icon-linkedin w-embed">
                      <svg xmlns="http://www.w3.org/2000/svg" width="100%" height="100%" viewBox="0 0 19 19" fill="none" preserveAspectRatio="xMidYMid meet" aria-hidden="true" role="img">
                        <path d="M15.4549 2.17383H2.92923C2.62722 2.17383 2.33759 2.2938 2.12404 2.50735C1.9105 2.72089 1.79053 3.01053 1.79053 3.31253V15.8382C1.79053 16.1402 1.9105 16.4298 2.12404 16.6434C2.33759 16.8569 2.62722 16.9769 2.92923 16.9769H15.4549C15.7569 16.9769 16.0465 16.8569 16.2601 16.6434C16.4736 16.4298 16.5936 16.1402 16.5936 15.8382V3.31253C16.5936 3.01053 16.4736 2.72089 16.2601 2.50735C16.0465 2.2938 15.7569 2.17383 15.4549 2.17383ZM15.4549 15.8382H2.92923V3.31253H15.4549V15.8382ZM6.91467 8.43667V12.9915C6.91467 13.1425 6.85469 13.2873 6.74791 13.3941C6.64114 13.5008 6.49632 13.5608 6.34532 13.5608C6.19432 13.5608 6.04951 13.5008 5.94273 13.3941C5.83596 13.2873 5.77597 13.1425 5.77597 12.9915V8.43667C5.77597 8.28567 5.83596 8.14085 5.94273 8.03408C6.04951 7.92731 6.19432 7.86732 6.34532 7.86732C6.49632 7.86732 6.64114 7.92731 6.74791 8.03408C6.85469 8.14085 6.91467 8.28567 6.91467 8.43667ZM13.1775 10.4294V12.9915C13.1775 13.1425 13.1175 13.2873 13.0108 13.3941C12.904 13.5008 12.7592 13.5608 12.6082 13.5608C12.4572 13.5608 12.3123 13.5008 12.2056 13.3941C12.0988 13.2873 12.0388 13.1425 12.0388 12.9915V10.4294C12.0388 10.0519 11.8889 9.68985 11.6219 9.42292C11.355 9.15598 10.9929 9.00602 10.6154 9.00602C10.2379 9.00602 9.8759 9.15598 9.60897 9.42292C9.34203 9.68985 9.19207 10.0519 9.19207 10.4294V12.9915C9.19207 13.1425 9.13208 13.2873 9.02531 13.3941C8.91854 13.5008 8.77372 13.5608 8.62272 13.5608C8.47172 13.5608 8.3269 13.5008 8.22013 13.3941C8.11336 13.2873 8.05337 13.1425 8.05337 12.9915V8.43667C8.05408 8.29721 8.10594 8.16286 8.19913 8.05911C8.29232 7.95535 8.42035 7.88941 8.55893 7.87379C8.69752 7.85817 8.83701 7.89395 8.95096 7.97436C9.06491 8.05476 9.14539 8.17419 9.17712 8.30999C9.56228 8.04871 10.0113 7.89728 10.4761 7.87196C10.9408 7.84664 11.4036 7.94839 11.8149 8.16627C12.2262 8.38416 12.5703 8.70996 12.8104 9.10868C13.0504 9.5074 13.1774 9.96398 13.1775 10.4294ZM7.19935 6.44395C7.19935 6.61286 7.14926 6.77797 7.05542 6.91842C6.96158 7.05886 6.8282 7.16832 6.67214 7.23296C6.51609 7.2976 6.34437 7.31452 6.17871 7.28156C6.01305 7.24861 5.86087 7.16727 5.74144 7.04783C5.622 6.9284 5.54066 6.77622 5.50771 6.61056C5.47476 6.4449 5.49167 6.27318 5.55631 6.11713C5.62095 5.96107 5.73041 5.82769 5.87085 5.73385C6.0113 5.64001 6.17641 5.58992 6.34532 5.58992C6.57182 5.58992 6.78905 5.6799 6.94921 5.84006C7.10937 6.00022 7.19935 6.21745 7.19935 6.44395Z" fill="currentColor" />
                      </svg>
                    </div>
                  </button>
                  <button fs-socialshare-element="x" className="social_button">
                    <div className="social_button-icon-x w-embed">
                      <svg xmlns="http://www.w3.org/2000/svg" width="100%" height="100%" viewBox="0 0 23 23" fill="none" preserveAspectRatio="xMidYMid meet" aria-hidden="true" role="img">
                        <path d="M8.70825 4.69141L12.2356 9.27734L12.3704 9.45215L12.5168 9.28711L16.6047 4.69141H18.6311L13.4084 10.5615L13.3079 10.6738L13.4006 10.7939L19.637 18.9023H15.0364L11.1282 13.877L10.9934 13.7041L10.8479 13.8672L6.36646 18.9023H4.33911L9.94458 12.6016L10.0461 12.4883L9.95239 12.3682L3.98267 4.69141H8.70825ZM6.40161 6.02246L15.4973 17.7158L15.552 17.7861H17.4045L17.179 17.4932L8.18579 5.7998L8.1311 5.72852H6.1731L6.40161 6.02246Z" fill="#FBF9F6" stroke="#4D1520" strokeWidth="0.364384" />
                      </svg>
                    </div>
                  </button>
                  <button fs-socialshare-element="facebook" className="social_button">
                    <div className="social_button-icon-facebook w-embed">
                      <svg xmlns="http://www.w3.org/2000/svg" width="100%" height="100%" viewBox="0 0 23 23" fill="none" preserveAspectRatio="xMidYMid meet" aria-hidden="true" role="img">
                        <path d="M11.4256 2.69189C9.66889 2.69189 7.95168 3.21281 6.49106 4.18876C5.03045 5.16471 3.89204 6.55186 3.2198 8.17481C2.54755 9.79775 2.37166 11.5836 2.71437 13.3065C3.05708 15.0294 3.90299 16.612 5.14514 17.8542C6.38729 19.0963 7.96988 19.9422 9.69279 20.2849C11.4157 20.6276 13.2015 20.4517 14.8245 19.7795C16.4474 19.1073 17.8346 17.9688 18.8105 16.5082C19.7865 15.0476 20.3074 13.3304 20.3074 11.5737C20.3049 9.21889 19.3684 6.96121 17.7032 5.29607C16.0381 3.63094 13.7804 2.69438 11.4256 2.69189ZM12.1088 19.0576V13.6234H14.1584C14.3396 13.6234 14.5134 13.5514 14.6415 13.4233C14.7697 13.2952 14.8417 13.1214 14.8417 12.9402C14.8417 12.759 14.7697 12.5852 14.6415 12.4571C14.5134 12.3289 14.3396 12.257 14.1584 12.257H12.1088V10.2073C12.1088 9.8449 12.2527 9.49734 12.509 9.24109C12.7653 8.98483 13.1128 8.84087 13.4752 8.84087H14.8417C15.0229 8.84087 15.1966 8.76889 15.3248 8.64076C15.4529 8.51263 15.5249 8.33885 15.5249 8.15765C15.5249 7.97645 15.4529 7.80267 15.3248 7.67454C15.1966 7.54641 15.0229 7.47443 14.8417 7.47443H13.4752C12.7504 7.47443 12.0553 7.76236 11.5428 8.27487C11.0303 8.78738 10.7423 9.4825 10.7423 10.2073V12.257H8.69268C8.51148 12.257 8.3377 12.3289 8.20957 12.4571C8.08144 12.5852 8.00946 12.759 8.00946 12.9402C8.00946 13.1214 8.08144 13.2952 8.20957 13.4233C8.3377 13.5514 8.51148 13.6234 8.69268 13.6234H10.7423V19.0576C8.81634 18.8817 7.03225 17.9702 5.76119 16.5125C4.49012 15.0549 3.82993 13.1633 3.91793 11.2313C4.00593 9.2993 4.83535 7.47558 6.23367 6.13951C7.63198 4.80343 9.49155 4.05785 11.4256 4.05785C13.3596 4.05785 15.2191 4.80343 16.6174 6.13951C18.0158 7.47558 18.8452 9.2993 18.9332 11.2313C19.0212 13.1633 18.361 15.0549 17.0899 16.5125C15.8189 17.9702 14.0348 18.8817 12.1088 19.0576Z" fill="currentColor" />
                      </svg>
                    </div>
                  </button>
                  <div className="hide w-embed w-script"></div>
                </div>
              </div>
            </aside>
            <div className="w-layout-vflex blog-article_content">
              <div className="w-dyn-bind-empty w-richtext"></div>
              <div fs-richtext-element="rich-text" className="text-rich-text w-richtext">
                <p>
                  BOSTON--(
                  <a target="_blank">
                    <strong>BUSINESS WIRE</strong>
                  </a>
                  {")--The enterprise software industry built a $50B business by selling CFOs one more tool for every finance problem. "}
                  <a target="_blank">
                    <strong>Daylit</strong>
                  </a>
                  , an AI agents for Accounts Receivable (AR) platform, is betting that era is over — and giving away the tools to help accelerate its transformation.
                </p>
                <p>
                  {"Today, the AI startup — fresh off a "}
                  <a target="_blank">
                    <strong>$110M capital raise</strong>
                  </a>
                  {" in September — is open-sourcing the playbook it has run privately with customers: "}
                  <a target="_blank">
                    <strong>a free, weekly program</strong>
                  </a>
                  {" teaching customers to build with AI, aimed at the legacy AR software providers it intends to displace."}
                </p>
                <p>The numbers from early customers are the kind that reprice a category. Daylit customers see AR operating costs down more than 75%, collections on high-risk accounts tripling, all while saving 40+ hours of manual follow-up for every 200 accounts per week. One customer — a PE-backed HVAC roll-up across 14 markets — saw ROI within 30 days, grew current AR 20%, and redeployed full-time headcount to higher-value work.</p>
                <p>{"\"The end of SaaS is coming, and we're helping our customers and future customers get there faster,\" said Jared Shulman, Co-founder and CEO of Daylit. \"The sooner people become comfortable ditching dashboards and managing both humans and AI agents, the sooner they can truly automate the mundane.\""}</p>
                <p>“This course is just the start,” adds Jerry Shu, Daylit’s Co-founder and CTO. “No CFO is going to pay six figures a year for software and then another six figures for its AI layer. The investment in the AI layer is clearly a stronger ROI, so we’re helping people get there faster.”</p>
                <p>
                  <strong>The Thesis: “Headless Finance”</strong>
                </p>
                <p>Daylit likens the approach to headless finance — running collections, reconciliation, credit analysis, and the rest of order-to-cash through AI agents the finance team orchestrates, not off-the-shelf SaaS. The training teaches customers to build AI skills — structured workflow blueprints any AI model can execute as SOPs. The point is a repeatable, auditable way to replace SaaS tools, not another prompt to remember. The bet cuts against the dominant enterprise-AI narrative: incumbents bolting GenAI onto legacy products and charging a premium. Daylit argues the economics don’t hold, and finance teams will soon prefer to leverage task-specific AI agents that deliver outcomes over legacy SaaS tools.</p>
                <p>
                  <strong>What’s in the Program</strong>
                </p>
                <p>This ten-week, hands-on course includes modules for the most painful manual tasks typically addressed through expensive, legacy software. The audience will walk away with free Skills.md files and the tools required to completely replace them, including:</p>
                <ul role="list">
                  <li>
                    Automated invoice validation
                    <strong></strong>
                    — catching errors before invoices leave the building
                  </li>
                  <li>
                    Bank-to-invoice matching
                    <strong></strong>
                    — end-to-end cash application without manual reconciliation
                  </li>
                  <li>
                    AI-generated credit reports
                    <strong></strong>
                    — investigative-depth analysis on every customer
                  </li>
                </ul>
                <p>The training is built for controllers, AR and AP leaders, accounting managers, and CFO-track professionals who are interested in building with AI experimentation and ready to make an operational impact.</p>
                <p>
                  <strong>A Customer Perspective</strong>
                </p>
                <p>“I’ve worked across roll-ups, private equity portfolios, and restructurings, and one thing always becomes clear: you can’t fake efficiency. Fast-moving finance teams need real leverage, and AI is how they create it now. Daylit is a platform I keep bringing with me because it delivers every time. What seals it for me is the new AI Skills platform — it shows they’re invested in making my team better, not just earning a renewal,” said Melanie Salmonsen, finance transformation consultant.</p>
                <p>
                  <strong>Company Momentum</strong>
                </p>
                <p>
                  {"Daylit raised $110 million in September 2025, led by Companyon Ventures with participation from NextView Ventures, SixThirty Ventures, Viola Credit, and executives from Meta and Yelp. The company announced its "}
                  <a target="_blank">
                    <strong>SOC 2 examination</strong>
                  </a>
                  {" in February 2026 and launched its "}
                  <a target="_blank">
                    <strong>AI agents platform</strong>
                  </a>
                  {" for accounts receivable in March. AI Skills is the first public artifact of a broader thesis about how finance teams will operate by 2028."}
                </p>
                <p>
                  <strong>Availability</strong>
                </p>
                <p>
                  {"The first session launches April 28, 2026, with new modules released weekly throughout the summer. Registration and materials are free at "}
                  <a target="_blank">
                    <strong>/ai-skills</strong>
                  </a>
                  .
                </p>
                <p>
                  <strong>About Daylit</strong>
                </p>
                <p>
                  {"Daylit (formerly Lendica) is the AI agents platform for accounts receivable. Its system automates collections, dispute resolution, and cash-flow visibility across ERP, email, and banking systems, paired with flexible financing tools that make working capital simple, predictable, and within reach. Learn more at "}
                  <a target="_blank">
                    <strong>/</strong>
                  </a>
                  .
                </p>
                <p>‍</p>
              </div>
              <div className="blog-table-css w-embed"></div>
            </div>
          </div>
        </div>
      </div>
      <div data-wf--utility-spacer-section--padding="large" className="padding-section-wrap">
        <div className="padding-top"></div>
      </div>
    </article>
  );
}
