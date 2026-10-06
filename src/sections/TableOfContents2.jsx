// IA section(s): support.section-article-blog (ia/ia.json, design-repo/sections/)
// Table of Contents — the section's real markup, read from the rendered page (route /blog/your-dispute-categories-arent-broken-theyre-not-yours, section 2).
export default function TableOfContents2() {
  return (
    <article className="section_article-blog" data-clone-section="TableOfContents2">
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
                <div className="w-embed">
                  <div className="dr-post">
                    <div className="blog-wrap">
                      <div className="blog-title-underline"></div>
                      <nav className="toc">
                        <h2>Table of Contents</h2>
                        <ol style={{ "listStyle": "none", "paddingLeft": "0", "counterReset": "none" }}>
                          <li>
                            <span style={{ "color": "var(--maroon)", "fontWeight": "600" }}>1.</span>
                            {" "}
                            <a href="#one-generic-bucket">One Generic Bucket, Six Different Problems</a>
                          </li>
                          <li>
                            <span style={{ "color": "var(--maroon)", "fontWeight": "600" }}>2.</span>
                            {" "}
                            <a href="#why-it-persists" className="">Why Every Dispute Ends Up in the Same Bucket</a>
                          </li>
                          <li>
                            <span style={{ "color": "var(--maroon)", "fontWeight": "600" }}>3.</span>
                            {" "}
                            <a href="#confidence-isnt-enough" className="">{"The Part Everyone Skips: Why Confidence Alone Isn't Enough"}</a>
                          </li>
                          <li>
                            <span style={{ "color": "var(--maroon)", "fontWeight": "600" }}>4.</span>
                            {" "}
                            <a href="#how-it-works" className="">How Dispute Reasons Work in Daylit, End to End</a>
                          </li>
                          <li>
                            <span style={{ "color": "var(--maroon)", "fontWeight": "600" }}>5.</span>
                            {" "}
                            <a href="#stays-human">The Part That Stays Human: Reviewed Before It Goes Live</a>
                          </li>
                          <li>
                            <span style={{ "color": "var(--maroon)", "fontWeight": "600" }}>6.</span>
                            {" "}
                            <a href="#why-it-matters" className="">Why This Matters Beyond Any Single Dispute</a>
                          </li>
                          <li>
                            <span style={{ "color": "var(--maroon)", "fontWeight": "600" }}>7.</span>
                            {" "}
                            <a href="#not-ours-to-define">{"Your Dispute Categories Aren't Ours to Define"}</a>
                          </li>
                          <li>
                            <span style={{ "color": "var(--maroon)", "fontWeight": "600" }}>8.</span>
                            {" "}
                            <a href="#faq" className="">Frequently Asked Questions</a>
                          </li>
                        </ol>
                      </nav>
                      <section id="one-generic-bucket" className="blog-section">
                        <h2>One Generic Bucket, Six Different Problems</h2>
                        <p>{"Every dispute that comes into your inbox gets treated the same way today: tagged \"dispute,\" full stop. It doesn't matter whether it's a missing purchase order, a missing tax form, a duplicate invoice, a pricing discrepancy, a payment acknowledgement, or a remittance question — they all land in the same place, and from there, it's on your team to read the message, figure out what it actually is, and route it using your own process and terminology. Most AR platforms only let you store that terminology as a static config field for manual tagging — not something an AI actually reads incoming messages and classifies against automatically."}</p>
                        <p>{"Say a customer emails back on a $40,000 invoice citing both a $2,000 pricing error and a short shipment on the same order. Today, that's one dispute, one generic tag, and one person who has to read the whole thing carefully enough to catch that it's actually two separate problems bundled into one email."}</p>
                      </section>
                      <section id="why-it-persists" className="blog-section">
                        <h2>Why Every Dispute Ends Up in the Same Bucket</h2>
                        <p>{"This isn't a discipline problem. It's an arithmetic problem."}</p>
                        <p>{"Picture a company running 40 or more dispute codes across different billing groups. Each one needs its own routing logic, worked out and maintained by hand, before it's actually useful. A team that's already stretched thin re-triaging every dispute one at a time doesn't also have the hours to build and maintain dozens of separate routing rules on top of that. So something gives: either everything collapses into one bucket, which is fast to maintain but tells you almost nothing, or routing becomes a patchwork someone half-remembers, which quietly falls out of date the moment a process changes or the person who built it leaves."}</p>
                        <p>{"A generic, one-size-fits-all reason list doesn't fix this either. Every company's dispute vocabulary is different, so even a well-designed default taxonomy still needs the same manual setup, per company, before it's actually usable. And the cost of skipping that setup is real: money sits exposed as effectively unlabeled, with no confident way to tell whether it's actually disputed or simply never got tagged."}</p>
                      </section>
                    </div>
                  </div>
                </div>
                <figure style={{ "maxWidth": "2158pxpx" }} className="w-richtext-align-fullwidth w-richtext-figure-type-image">
                  <div>
                    <img alt="" src="/_ext/cdn.prod.website-files.com/68ae872ea1f1fc625315711a/6aa819ce7c4e2ca9d9a70887_window-cropped.png" loading="lazy" />
                  </div>
                </figure>
                <div className="w-embed w-iframe">
                  <div className="dr-post">
                    <div className="blog-wrap">
                      <section id="confidence-isnt-enough" className="blog-section">
                        <h2>{"The Part Everyone Skips: Why Confidence Alone Isn't Enough"}</h2>
                        <p>{"Most automation that gets quietly abandoned doesn't fail because it was wrong. It fails because nobody trusted it enough to stop double-checking it by hand."}</p>
                        <p>{"Say an AR specialist opens a case and sees a reason assigned that doesn't look right to them — maybe they just got off a call with the customer and heard something different. If all they have is a label and a confidence score, they're back to re-reading the dispute themselves anyway, which defeats the point. That's why a reason alone was never going to be enough on its own — the team also needs to see why the AI landed there before they can trust it without re-checking everything by hand."}</p>
                      </section>
                      <section id="how-it-works" className="blog-section">
                        <h2>How Dispute Reasons Work in Daylit, End to End</h2>
                        <p>{"In practice: you define your own dispute reasons, in your own words, right alongside Daylit's built-in categories. It's not Daylit guessing at a universal list that fits every business — it's the opposite. Different companies use different terminology, policies, and standard operating procedures for classifying disputes, and no fixed, one-size-fits-all reason list adequately represents any one company's actual business. Say your team already calls a specific recurring issue a \"freight claim\" internally, with its own owner and its own paperwork attached to it — that's now a reason Daylit can recognize, in the words you already use for it."}</p>
                        <p>{"From there, Daylit's classifier reads every inbound dispute and tags it with the best-matching reason automatically, one of your own custom reasons, one of Daylit's built-in categories, or \"Other\" if nothing fits confidently. Go back to that $40,000 invoice with the pricing error and the short shipment: instead of one generic \"dispute\" tag, or two separate cases you'd have to reconcile by hand, it gets tagged with both reasons at once, on the same case. Collectors then see the assigned reason, a confidence level, and the reasoning behind it right on the case, with the final say one click away. And the tag isn't the end of it: assign a default sequence to a reason, and every future dispute classified into it comes with that sequence already suggested, so the case is pointed at the right next step, not just labeled and left sitting there."}</p>
                        <div className="blog-video-wrap">
                          <div data-removed="iframe" style={{ "width": "803px", "height": "453px" }}></div>
                        </div>
                        <section fs-richtext-component="demo-cta" className="blog-cta-dynamic">
                          <div fs-richtext-component="" className="blog-cta-content-wrap">
                            <div className="blog-cta-content-inner">
                              <img src="/_ext/cdn.prod.website-files.com/68abd7e02c174baf0a9c5df1/68dcf1279b56a75325050551_logomark.svg" loading="lazy" alt="" className="blog-cta-icon" />
                              <div className="blog-cta-content">
                                <div className="heading-style-h5">Want to see how your own dispute categories would actually get classified?</div>
                                <p className="blog-cta-p">We’ll walk through a handful of your real disputes with you and show you exactly which reason each one would get — and where a generic bucket would’ve missed it.</p>
                              </div>
                            </div>
                            <div className="blog-cta-btn-wrap">
                              <div className="blog-cta-btn">
                                {" "}
                                <div data-wf--slot-item-button-main--style="primary-plus" className="button_main_wrap" data-button=" main">
                                  <div className="clickable_wrap u-cover-absolute">
                                    <a target="_blank" className="clickable_link w-inline-block">
                                      <span className="clickable_text u-sr-only">Book a Meeting</span>
                                    </a>
                                    <button type="link" className="clickable_btn">
                                      <span className="clickable_text u-sr-only">Book a Meeting</span>
                                    </button>
                                  </div>
                                  <div data-button="main-content" className="w-layout-vflex button_main_content-wrap">
                                    <div aria-hidden="true" className="button_main_text">Book a Meeting</div>
                                    <div className="w-layout-vflex button-main-icon-list">
                                      <div className="w-layout-vflex button-main-icon-wrap">
                                        <div className="button-main-icon w-embed">
                                          <svg xmlns="http://www.w3.org/2000/svg" width="100%" height="100%" viewBox="0 0 14 14" fill="none">
                                            <circle cx="7" cy="2.05031" r="1.16667" transform="rotate(45 7 2.05031)" fill="currentColor" />
                                            <circle cx="2.05078" cy="6.99855" r="1.16667" transform="rotate(45 2.05078 6.99855)" fill="currentColor" />
                                            <circle cx="11.9492" cy="7.00148" r="1.16667" transform="rotate(45 11.9492 7.00148)" fill="currentColor" />
                                            <circle cx="7" cy="11.9497" r="1.16667" transform="rotate(45 7 11.9497)" fill="currentColor" />
                                            <circle cx="7" cy="7.00001" r="1.16667" transform="rotate(45 7 7.00001)" fill="currentColor" />
                                          </svg>
                                        </div>
                                      </div>
                                      <div className="button-arrow-dots w-embed">
                                        <svg xmlns="http://www.w3.org/2000/svg" width="100%" height="100%" viewBox="0 0 11 14" fill="none">
                                          <circle cx="3.66927" cy="3.99984" r="1.33333" fill="currentColor" />
                                          <circle cx="3.66927" cy="11.9998" r="1.33333" fill="currentColor" />
                                          <circle cx="7.66927" cy="7.99984" r="1.33333" fill="currentColor" />
                                        </svg>
                                      </div>
                                    </div>
                                  </div>
                                </div>
                                {" "}
                              </div>
                            </div>
                          </div>
                          <div className="css-style w-embed"></div>
                        </section>
                      </section>
                      <section id="stays-human" className="blog-section">
                        <h2>The Part That Stays Human: Reviewed Before It Goes Live</h2>
                        <p>{"Before any custom reason starts classifying real disputes, your team reviews it first. Every new custom reason is calibrated against 5 example disputes, real historical ones first, with an AI-generated example only filling in when your own dispute history is too thin to pull a real one, so your team confirms the AI's understanding is correct before it publishes."}</p>
                        <p>That review habit carries through everywhere else, too. No confidence score skips it: every classification, high or low confidence, is surfaced to a collector with the final say one click away. Nothing applies itself invisibly.</p>
                      </section>
                      <section id="why-it-matters" className="blog-section">
                        <h2>Why This Matters Beyond Any Single Dispute</h2>
                        <p>One dispute handled well is a nice outcome. The bigger shift is what happens across your whole portfolio once disputes are actually sorted by reason instead of dumped into one bucket: patterns become visible.</p>
                        <p>{"Say one customer disputes pricing three times in two months. Today, that's three individual disputes, each one probably handled by whoever happened to pick it up, with no obvious reason to connect them. Once each dispute carries its actual reason, that pattern shows up immediately — and someone can look at whether it's a one-off, a data entry issue on a specific SKU, or a sign that a pricing agreement needs to be revisited before it costs you a fourth dispute."}</p>
                        <p>{"The same logic holds at the portfolio level. If a specific reason keeps climbing as a share of total disputes — more pricing disagreements this quarter than last, say — that's a signal about where your process is breaking down, not just a number buried inside a single undifferentiated \"dispute\" count."}</p>
                      </section>
                      <section id="not-ours-to-define" className="blog-section">
                        <h2>{"Your Dispute Categories Aren't Ours to Define"}</h2>
                        <p>Your dispute categories were never generic, they were always specific to how your business actually works, and now Daylit can read them. Disputes only got treated as one bucket because building a system that could tell them apart was harder than not bothering.</p>
                      </section>
                      <section id="faq" className="blog-section">
                        <h2>Frequently Asked Questions</h2>
                        <div className="faq-item">
                          <h3>{"Isn't this just categorizing? Many AR tools have reason codes."}</h3>
                          <p>{"Most AR tools let you configure reason codes, that part isn't new. What's different is what happens after you define one: Daylit's AI reads every inbound dispute and classifies it against your own list automatically, including messages that raise more than one issue at once, and every new reason gets reviewed against real examples before it ever touches live traffic."}</p>
                        </div>
                        <div className="faq-item">
                          <h3>{"Can we see what the AI is going to do before it's live on our real disputes?"}</h3>
                          <p>Yes. Every new custom reason goes through calibration — 5 example disputes, pulled from real history first, reviewed and confirmed or rejected by your team before the reason is published.</p>
                        </div>
                        <div className="faq-item">
                          <h3>Does this apply to disputes that are already open?</h3>
                          <p>{"No — classification only applies going forward. That was a deliberate scope decision for this release; backfilling existing open disputes isn't part of what shipped."}</p>
                        </div>
                        <div className="faq-item">
                          <h3>Does a custom reason come with its own resolution steps or evidence requests?</h3>
                          <p>{"No. A custom reason decides which existing sequence a dispute routes to — it doesn't write new resolution steps or evidence requests for you. What that sequence actually asks the customer for is still whatever your team has already built into it."}</p>
                        </div>
                      </section>
                    </div>
                  </div>
                </div>
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
