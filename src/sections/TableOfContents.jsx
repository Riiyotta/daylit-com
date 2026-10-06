// IA section(s): support.section-article-blog (ia/ia.json, design-repo/sections/)
import A from "../lib/A.jsx";

// Table of Contents — the section's real markup, read from the rendered page (route /blog/why-the-most-effective-collections-channel-gets-skipped-first, section 2).
export default function TableOfContents() {
  return (
    <article className="section_article-blog" data-clone-section="TableOfContents">
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
                  <div className="apc-post">
                    <div className="blog-wrap">
                      <div className="blog-title-underline"></div>
                      <nav className="toc">
                        <h2>Table of Contents</h2>
                        <ol style={{ "listStyle": "none", "paddingLeft": "0", "counterReset": "none" }}>
                          <li>
                            <span style={{ "color": "var(--maroon)", "fontWeight": "600" }}>1.</span>
                            {" "}
                            <a href="#why-the-phone-still-works-when-email-doesnt" className="">{"Why the Phone Still Works When Email Doesn't"}</a>
                          </li>
                          <li>
                            <span style={{ "color": "var(--maroon)", "fontWeight": "600" }}>2.</span>
                            {" "}
                            <a href="#why-its-also-the-first-channel-a-team-cuts" className="">{"Why It's Also the First Channel a Team Cuts"}</a>
                          </li>
                          <li>
                            <span style={{ "color": "var(--maroon)", "fontWeight": "600" }}>3.</span>
                            {" "}
                            <a href="#what-changes-when-an-agent-runs-the-call" className="">What Changes When an Agent Runs the Call</a>
                          </li>
                          <li>
                            <span style={{ "color": "var(--maroon)", "fontWeight": "600" }}>4.</span>
                            {" "}
                            <a href="#the-part-that-stays-human" className="">The Part That Stays Human: A Person Starts Every Call</a>
                          </li>
                          <li>
                            <span style={{ "color": "var(--maroon)", "fontWeight": "600" }}>5.</span>
                            {" "}
                            <a href="#how-it-works-end-to-end" className="">How AI Calls Work in Daylit, End to End</a>
                          </li>
                          <li>
                            <span style={{ "color": "var(--maroon)", "fontWeight": "600" }}>6.</span>
                            {" "}
                            <a href="#what-actually-changes">What Actually Changes</a>
                          </li>
                          <li>
                            <span style={{ "color": "var(--maroon)", "fontWeight": "600" }}>7.</span>
                            {" "}
                            <a href="#faq" className="">Frequently Asked Questions</a>
                          </li>
                        </ol>
                      </nav>
                      <section id="why-the-phone-still-works-when-email-doesnt" className="blog-section">
                        <h2>{"Why the Phone Still Works When Email Doesn't"}</h2>
                        <p>{"Most past-due invoices aren't disputed. They're stuck behind a phone call nobody had time to make."}</p>
                        <p>
                          {"Every outreach channel fails a different way. The biggest one being email, which fails silently — you send it, and unless someone tells you, you have no idea whether it landed on a real inbox or a dead one. And it's the first thing an AR team stops doing when the "}
                          <A href="/blog/glossary-defining-commonly-used-financial-terms#accounts-receivable">accounts receivable</A>
                          {" queue gets long — not a staffing failure, just math: a collector can burn an entire afternoon getting through four real conversations, and most of that afternoon is voicemail greetings, wrong numbers, and repeating the same balance out loud."}
                        </p>
                        <p>{"The phone doesn't fail that way. Either someone picks up, or you get a clear signal — voicemail, a busy line, a disconnected number — and you know immediately where you stand. That's precisely what makes it the channel most likely to actually reach a person: it forces a resolution instead of disappearing into an inbox."}</p>
                        <p>{"It's also the channel most teams have quietly stopped using. Not because it doesn't work — because it's priced in people, not clicks. A collector working through a call list is doing something email automation made structurally cheaper to skip: spending a full hour to have two or three real conversations, compared to a sequence that can queue hundreds of emails in the same hour. So even when everyone on the team knows a phone call would move the needle on a specific account, it's the first thing that gets deprioritized because of the time that goes into it."}</p>
                        <p>{"This feature doesn't make the phone easier to ignore. It makes it cheap enough to actually use."}</p>
                      </section>
                      <section id="why-its-also-the-first-channel-a-team-cuts" className="blog-section">
                        <h2>{"Why It's Also the First Channel a Team Cuts"}</h2>
                        <p>{"Ask any AR manager what happens to the call list during a busy week, and the answer is consistent: it's the first thing that gets set aside. Not because anyone decided calling was low priority — because it's the one task on the list that can't be batched, can't be automated with the tools most teams have."}</p>
                        <p>{"The tools that would normally close this gap haven't been available until recently. Automating a phone conversation is a fundamentally different problem than automating a send: it requires understanding what's being said in real time, recognizing a voicemail greeting instead of talking into it, routing a wrong number instead of continuing a conversation with the wrong person, and doing all of that without a script to fall back on. That's a harder problem than templated email, and until the underlying voice technology caught up, the honest answer to \"why don't we just automate the calls too\" was: because it didn't work well enough yet."}</p>
                        <p>{"We changed that. The latency and conversational quality needed to run a real call in real time are no longer the blocker — which is what makes it possible to finally close the gap between \"the channel that works\" and \"the channel nobody has time to run.\""}</p>
                      </section>
                      <section id="what-changes-when-an-agent-runs-the-call" className="blog-section">
                        <h2>What Changes When an Agent Runs the Call</h2>
                        <p>{"Here's what's actually built today. A collector starts the call — from a customer record, from a sequence step, or from the call queue — and Daylit's agent runs the conversation from there. It recognizes a voicemail greeting instead of talking into it. It routes a wrong-number pickup into a case instead of continuing the conversation with the wrong person. And when the call ends, the outcome is written back to the account automatically, so whoever looks at that customer next sees what actually happened — not just that a call took place."}</p>
                        <p>{"None of this happens without a policy check first. Every outbound call is designed to run against one set of contact rules before it happens: consent, the contact's local calling hours, a cap of seven calls to one number in seven days, and a stop the moment someone opts out, disputes the balance, or is in bankruptcy."}</p>
                        <p>{"What that adds up to, in practical terms: the afternoon a collector used to lose to voicemail greetings and repeated balance questions goes back to being an afternoon spent on the calls that actually need a person's judgment. The channel that was too expensive to run consistently stops being the one that gets skipped."}</p>
                      </section>
                    </div>
                  </div>
                </div>
                <figure style={{ "maxWidth": "1932pxpx" }} className="w-richtext-align-fullwidth w-richtext-figure-type-image">
                  <div>
                    <img alt="" src="/_ext/cdn.prod.website-files.com/68ae872ea1f1fc625315711a/6ab14597250ef03aeef0093c_screenshot-no-frame.png" loading="lazy" />
                  </div>
                </figure>
                <div className="w-embed w-iframe">
                  <div className="apc-post">
                    <div className="blog-wrap">
                      <section id="the-part-that-stays-human" className="blog-section">
                        <h2>The Part That Stays Human: A Person Starts Every Call</h2>
                        <p>{"Worth being exact about what \"an agent runs the call\" means, because it's easy to round it up into something bigger."}</p>
                        <p>{"A person starts every outbound call. The agent doesn't decide who to call or when — a collector does that, the same way they always have. What the agent does is run the conversation once that call is placed: listening, responding, recognizing what kind of call it's turned into, and logging the outcome. There's no unsupervised auto-dial today, anywhere, for any account. That capability is explicitly gated behind measuring how accurate the agent is on a given company's calls first — and that measurement hasn't happened yet for any customer."}</p>
                        <p>{"This isn't a temporary limitation waiting on a toggle. It's how the feature is designed to roll out: prove the conversation quality account by account, in review mode, before any account gets to skip the human-initiated step. If you're evaluating this for your team, the honest framing is: the agent conducts the call. Your collector still decides which calls happen."}</p>
                      </section>
                      <section id="how-it-works-end-to-end" className="blog-section">
                        <h2>How AI Calls Work in Daylit, End to End</h2>
                        <p>Start from a customer record, a ready sequence step, or the call queue in the drawer. Press start. From there, the agent takes the conversation: greeting the person who picks up, working through whatever the call is actually about, recognizing a voicemail and leaving the right message instead of talking past it, and routing a wrong number into a case instead of pushing forward with the wrong contact.</p>
                        <p>{"Every one of those calls is designed to clear the same eligibility check before it dials — the contact's consent status, their local calling window, how many times they've already been called this week, and whether anything on the account (a dispute, an opt-out, a bankruptcy filing) should stop the call before it starts. If a call doesn't clear that check, it doesn't happen, and the reason is visible rather than silent."}</p>
                        <p>When the call ends, the outcome writes back to the account. The next person who opens that customer record sees exactly what happened — not a blank space where a call used to be a mystery.</p>
                        <p>{"If your team is spending real hours a week on calls that mostly repeat the same handful of questions — balance confirmations, \"can you resend that invoice,\" basic promise-to-pay conversations — this is built for exactly that layer of the work."}</p>
                        <div className="blog-video-wrap">
                          <div data-removed="iframe" style={{ "width": "803px", "height": "453px" }}></div>
                        </div>
                        <section fs-richtext-component="demo-cta" className="blog-cta-dynamic">
                          <div fs-richtext-component="" className="blog-cta-content-wrap">
                            <div className="blog-cta-content-inner">
                              <img src="/_ext/cdn.prod.website-files.com/68abd7e02c174baf0a9c5df1/68dcf1279b56a75325050551_logomark.svg" loading="lazy" alt="" className="blog-cta-icon" />
                              <div className="blog-cta-content">
                                <div className="heading-style-h5">See it against your own queue</div>
                                <p className="blog-cta-p">
                                  {"If the accounts that need this call are already sitting in your queue, "}
                                  <a>book a demo</a>
                                  {" and we’ll run it against your own list."}
                                </p>
                              </div>
                            </div>
                            <div className="blog-cta-btn-wrap">
                              <div className="blog-cta-btn">
                                {" "}
                                <div data-wf--slot-item-button-main--style="primary-plus" className="button_main_wrap" data-button=" main">
                                  <div className="clickable_wrap u-cover-absolute">
                                    <a target="_blank" className="clickable_link w-inline-block">
                                      <span className="clickable_text u-sr-only">Book a demo</span>
                                    </a>
                                    <button type="link" className="clickable_btn">
                                      <span className="clickable_text u-sr-only">Book a demo</span>
                                    </button>
                                  </div>
                                  <div data-button="main-content" className="w-layout-vflex button_main_content-wrap">
                                    <div aria-hidden="true" className="button_main_text">Book a demo</div>
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
                      <section id="what-actually-changes" className="blog-section">
                        <h2>What Actually Changes</h2>
                        <p>{"The phone didn't stop working. Staffing it did. Daylit's agent picks up the part that used to eat the afternoon — it handles the voicemail, routes the wrong number, and writes the outcome back to the account, so the call happens even on the days nobody had the hour to make it."}</p>
                        <p>{"Have a question about how this fits your setup specifically? Ask us directly — we'd rather talk it through than have you guess."}</p>
                      </section>
                      <section id="faq" className="blog-section">
                        <h2>Frequently Asked Questions</h2>
                        <div className="faq-item">
                          <h3>Does the AI call our customers on its own?</h3>
                          <p>{"No. A person starts every outbound call from a customer record, a sequence step, or the call queue. The agent runs the conversation once that call is placed — it doesn't decide who to call or when. Unsupervised auto-dial isn't available for any account today."}</p>
                        </div>
                        <div className="faq-item">
                          <h3>{"Will the call come from our company's phone number?"}</h3>
                          <p>Not yet. Numbers used for this feature are newly provisioned rather than ported from your existing line. Per-company caller ID is live, so calls will consistently show the same number for your account — just not your existing one.</p>
                        </div>
                        <div className="faq-item">
                          <h3>What happens if the call goes to voicemail or hits a wrong number?</h3>
                          <p>The agent recognizes a voicemail greeting and responds appropriately instead of talking into it, and a wrong-number pickup gets routed into a case rather than continuing the conversation. Either way, the outcome is written back to the account so your team can see what actually happened.</p>
                        </div>
                        <div className="faq-item">
                          <h3>Is everything the agent says on a call checked for accuracy?</h3>
                          <p>{"The agent works from a real, current snapshot of the account when the call starts. What isn't built yet is a check on the agent's own arithmetic or invoice selection once the conversation is underway — so treat any specific figure stated mid-call as something worth a second look until that verification layer ships."}</p>
                        </div>
                        <div className="faq-item">
                          <h3>Does this work alongside text messaging too?</h3>
                          <p>Not today. This feature covers voice calls only.</p>
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
