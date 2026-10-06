// IA section(s): support.section-article-blog (ia/ia.json, design-repo/sections/)
import A from "../lib/A.jsx";

// What is an early-pay discount? — the section's real markup, read from the rendered page (route /blog/early-pay-discounts-101-a-simple-playbook, section 2).
export default function WhatIsAnEarly() {
  return (
    <article className="section_article-blog" data-clone-section="WhatIsAnEarly">
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
                        <div fs-list-field="tags" className="tag-text">Accounts payable</div>
                      </div>
                    </div>
                    <div role="listitem" className="w-dyn-item">
                      <div data-wf--slot-item-tag--color="secondary" className="tag w-variant-d499f11c-d76f-d0b8-632f-a8d092fac3d4">
                        <div className="tag-dot"></div>
                        <div fs-list-field="tags" className="tag-text">Ap financing</div>
                      </div>
                    </div>
                    <div role="listitem" className="w-dyn-item">
                      <div data-wf--slot-item-tag--color="secondary" className="tag w-variant-d499f11c-d76f-d0b8-632f-a8d092fac3d4">
                        <div className="tag-dot"></div>
                        <div fs-list-field="tags" className="tag-text">Paylater</div>
                      </div>
                    </div>
                    <div role="listitem" className="w-dyn-item">
                      <div data-wf--slot-item-tag--color="secondary" className="tag w-variant-d499f11c-d76f-d0b8-632f-a8d092fac3d4">
                        <div className="tag-dot"></div>
                        <div fs-list-field="tags" className="tag-text">Payments</div>
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
                <h2>
                  <strong>What is an early-pay discount?</strong>
                </h2>
                <p>
                  {"An early pay discount is a price break for paying a supplier "}
                  <strong>sooner than the standard due date</strong>
                  {". You’ll often see it written like "}
                  <strong>“2/10 net 30.”</strong>
                </p>
                <ul role="list">
                  <li>
                    <strong>2/10:</strong>
                    {" Pay within 10 days and take "}
                    <strong>2% off</strong>
                    {" the invoice."}
                    <br />
                    <br />
                  </li>
                  <li>
                    <strong>Net 30:</strong>
                    {" If you don’t pay early, the full amount is due in 30 days."}
                  </li>
                </ul>
                <p>
                  {"These formats may vary by industry, but the idea is the same: "}
                  <strong>pay early, save money.</strong>
                </p>
                <h2>
                  <strong>Why early-pay discount matters in this market</strong>
                </h2>
                <p>
                  {"Large enterprises are tightening up their working capital. That pressure often flows downstream as "}
                  <strong>longer terms</strong>
                  {" or "}
                  <strong>slower payments</strong>
                  {" to vendors. If you’re a smaller or mid-sized business, early-pay discounts help you "}
                  <strong>protect margin</strong>
                  {" and "}
                  <strong>strengthen supplier relationships</strong>
                  {" even when the market gets bumpy."}
                </p>
                <h2>
                  <strong>Why do so many companies miss early-pay discounts?</strong>
                </h2>
                <p>
                  {"Only about "}
                  <strong>1 in 5 invoices</strong>
                  {" actually capture an early-pay discount. The big three reasons:"}
                </p>
                <ol role="list">
                  <li>
                    <strong>{"The customer doesn't know one exists."}</strong>
                    {" It’s not always printed on the invoice, and many teams never ask."}
                    <br />
                    <br />
                  </li>
                  <li>
                    <strong>Operational friction.</strong>
                    {" The 10-day window can vanish while A/P (accounts payable) does the “triple match” (PO ⇄ invoice ⇄ goods received)."}
                    <br />
                    <br />
                  </li>
                  <li>
                    <strong>Cash fear.</strong>
                    {" Teams worry an unexpected expense will hit right after they use cash to pay early."}
                  </li>
                </ol>
                <p>
                  <strong>{"Quick win: "}</strong>
                  {"Ask every supplier if they offer early pay discounts and record the terms. "}
                </p>
                <h2>
                  <strong>
                    {"The two habits of companies that "}
                    <em>do</em>
                    {" capture early-pay discounts"}
                  </strong>
                </h2>
                <p>
                  <strong>1) A “Discount-First” Policy</strong>
                </p>
                <p>
                  <strong>
                    ‍
                    <br />
                  </strong>
                  {" CFOs set simple rules so A/P doesn’t hesitate. Examples:"}
                </p>
                <ul role="list">
                  <li>
                    “Always take it if the discount is ≥ 1.5%.”
                    <br />
                    <br />
                  </li>
                  <li>
                    {"“Prioritize discounts on items that are "}
                    <strong>≥10% of COGS</strong>
                    .”
                    <br />
                    <br />
                  </li>
                  <li>
                    {"“Prioritize discounts on "}
                    <strong>fast-turning inventory</strong>
                    {" (compounds the margin benefit through the year).”"}
                    <br />
                    <br />
                  </li>
                </ul>
                <p>
                  <strong>2) Do the basic math (it’s eye-opening).</strong>
                </p>
                <p>
                  <strong>
                    ‍
                    <br />
                  </strong>
                  {" “2/10 net 30” is roughly a "}
                  <strong>36% APR equivalent</strong>
                  . Even “1/10 net 30” is ~
                  <strong>18–19%</strong>
                  {". For many businesses, "}
                  <strong>
                    your borrowing cost is lower than the discount’s ‘implied return.’
                    <br />
                    Translation:
                  </strong>
                  {" if you can borrow for less than that implied APR (via a line of credit, A/P financing, etc.), "}
                  <strong>you make money</strong>
                  {" by taking the discount."}
                </p>
                <h2>
                  <strong>A calculator and a safety net</strong>
                </h2>
                <p>
                  {"Daylit’s "}
                  <A target="_blank" href="/early-pay-savings-calculator-daylit-working-capital">
                    <strong>Early Pay Savings Calculator</strong>
                  </A>
                  {" shows how much you can save and how financing affects the total. A common pattern:"}
                </p>
                <ul role="list">
                  <li>
                    {"Spend with one vendor: "}
                    <strong>
                      $500,000/month
                      <br />
                      <br />
                    </strong>
                  </li>
                  <li>
                    {"Terms negotiated: "}
                    <strong>2/10 net 30</strong>
                    {" → saves "}
                    <strong>$10,000/month</strong>
                    {" (2%)"}
                    <br />
                    <br />
                  </li>
                  <li>
                    Use A/P financing to pay the supplier on Day 10; repay the financing on Day 30
                    <br />
                    <br />
                  </li>
                  <li>
                    <strong>Cost of financing:</strong>
                    {" about "}
                    <strong>$4,100/month</strong>
                    {" (in this example)"}
                    <br />
                    <br />
                  </li>
                  <li>
                    <strong>Net annual savings:</strong>
                    {" ≈ "}
                    <strong>$72,000</strong>
                    {" (about "}
                    <strong>$6,000/month</strong>
                    )
                    <br />
                  </li>
                </ul>
                <p>{"That's a real margin lift without permanently shortening your cash cycle."}</p>
                <h2>
                  <strong>How “PayLater” (A/P financing product) fits</strong>
                </h2>
                <p>
                  {"Think of "}
                  <A target="_blank" href="/product/paylater">
                    <strong>PayLater</strong>
                  </A>
                  {" as simple A/P support:"}
                </p>
                <ul role="list">
                  <li>
                    <strong>Daylit pays your supplier</strong>
                    {" within the discount window."}
                    <br />
                    <br />
                  </li>
                  <li>
                    <strong>You repay Daylit</strong>
                    {" on your preferred schedule (often "}
                    <strong>30–45 days</strong>
                    ).
                    <br />
                    <br />
                  </li>
                  <li>
                    <strong>Goal:</strong>
                    {" Keep your cash conversion cycle (CCC) intact while still taking the discount."}
                    <br />
                    <br />
                  </li>
                  <li>
                    <strong>Result:</strong>
                    {" Margin up without starving working capital."}
                  </li>
                </ul>
                <section fs-richtext-component="paylater-learn-more" className="blog-cta-dynamic">
                  <div fs-richtext-component="" className="blog-cta-content-wrap">
                    <div className="blog-cta-content-inner">
                      <img src="/_ext/cdn.prod.website-files.com/68abd7e02c174baf0a9c5df1/68dcf1279b56a75325050551_logomark.svg" loading="lazy" alt="" className="blog-cta-icon" />
                      <div className="blog-cta-content">
                        <div className="heading-style-h5">{"Delay supplier payments with PayLater "}</div>
                        <p className="blog-cta-p">{"Learn how you can pay your suppliers early, enjoy early-pay discounts and pay back up to 90 days later. "}</p>
                      </div>
                    </div>
                    <div className="blog-cta-btn-wrap">
                      <div className="blog-cta-btn">
                        <div data-wf--slot-item-button-main--style="primary-plus" data-button=" main" className="button_main_wrap">
                          <div className="clickable_wrap u-cover-absolute">
                            <a target="" className="clickable_link w-inline-block">
                              <span className="clickable_text u-sr-only">Button</span>
                            </a>
                            <button type="link" className="clickable_btn">
                              <span className="clickable_text u-sr-only">Button</span>
                            </button>
                          </div>
                          <div data-button="main-content" className="w-layout-vflex button_main_content-wrap">
                            <div aria-hidden="true" className="button_main_text">Learn more</div>
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
                      <div className="blog-cta-btn w-condition-invisible">
                        <div data-wf--slot-item-button-main--style="secondary" data-button=" main" className="button_main_wrap w-variant-fdc41ed9-12f0-19e2-c0f0-c8f03cbab875">
                          <div className="clickable_wrap u-cover-absolute">
                            <a target="" href="#" className="clickable_link w-inline-block">
                              <span className="clickable_text u-sr-only">Button</span>
                            </a>
                            <button type="link" className="clickable_btn">
                              <span className="clickable_text u-sr-only">Button</span>
                            </button>
                          </div>
                          <div data-button="main-content" className="w-layout-vflex button_main_content-wrap w-variant-fdc41ed9-12f0-19e2-c0f0-c8f03cbab875">
                            <div aria-hidden="true" className="button_main_text"></div>
                            <div className="w-layout-vflex button-main-icon-list">
                              <div className="w-layout-vflex button-main-icon-wrap w-variant-fdc41ed9-12f0-19e2-c0f0-c8f03cbab875">
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
                  <div className="css-style w-embed"></div>
                </section>
                <h2>
                  <strong>What to measure (and when)</strong>
                </h2>
                <p>
                  <strong>In the first 90 days, track:</strong>
                </p>
                <ol role="list">
                  <li>
                    <strong>
                      Gross Margin Lift
                      <br />
                    </strong>
                    {"Your discounts should appear as "}
                    <strong>higher gross margin</strong>
                    {" (or strategic price flexibility, if you pass savings to customers)."}
                    <br />
                    <br />
                  </li>
                  <li>
                    <strong>
                      Cash Conversion Cycle (CCC) impact
                      <br />
                    </strong>
                    {"Early payments reduce "}
                    <strong>DPO</strong>
                    {", which can "}
                    <strong>lengthen</strong>
                    {" your CCC, unless you use financing to offset the timing. Aim for: "}
                    <strong>
                      margin up, CCC minimal change.
                      <br />
                      <br />
                    </strong>
                  </li>
                  <li>
                    <strong>Supplier performance</strong>
                    {" (on-time delivery, fill rates, fewer stockouts)"}
                    <br />
                    Suppliers paid early prioritize you. Over time, that adds resilience and speed to your supply chain.
                  </li>
                </ol>
                <h2>
                  <strong>A quick CCC (cash conversion cycle) refresher (and why big companies care)</strong>
                </h2>
                <p>
                  <strong>CCC = DSO + DIO – DPO</strong>
                </p>
                <ul role="list">
                  <li>
                    <strong>DSO:</strong>
                    {" How fast customers pay you (lower is better)."}
                    <br />
                    <br />
                  </li>
                  <li>
                    <strong>DIO:</strong>
                    {" How fast you turn inventory (lower is better)."}
                    <br />
                    <br />
                  </li>
                  <li>
                    <strong>DPO:</strong>
                    {" How long you take to pay vendors (higher is better)."}
                    <br />
                    <br />
                  </li>
                </ul>
                <p>
                  {"Fortune 500s are focused on "}
                  <strong>shrinking CCC</strong>
                  {" to reduce risk. That’s why smaller vendors are seeing "}
                  <strong>longer requested terms</strong>
                  {" and "}
                  <strong>slower payments</strong>
                  {". Having an early-pay strategy (with financing) helps you "}
                  <strong>hold your ground</strong>
                  .
                </p>
                <h2>
                  <strong>How to negotiate early-pay discount terms (even without big leverage)</strong>
                </h2>
                <ol role="list">
                  <li>
                    <strong>
                      Start small and prove reliability.
                      <br />
                    </strong>
                    {"Ask for "}
                    <strong>1%</strong>
                    {" early pay for a trial "}
                    <strong>90-day</strong>
                    {" period. Hit it every time."}
                    <br />
                    <br />
                  </li>
                  <li>
                    <strong>
                      Make it easy (go digital).
                      <br />
                    </strong>
                    {"Commit to "}
                    <strong>ACH or wire</strong>
                    . Checks plus mail delays can make a 10-day window impossible.
                    <br />
                    <br />
                  </li>
                  <li>
                    <strong>
                      {"Show the math "}
                      <em>for them</em>
                      .
                      <br />
                    </strong>
                    {"Your supplier also pays to carry A/R (staff time, collections, securitization costs). Early, digital payments "}
                    <strong>lower their risk and cost</strong>
                    .
                  </li>
                </ol>
                <h2>
                  <strong>A real-world example</strong>
                </h2>
                <p>
                  {"A Houston-based chemical distributor spent "}
                  <strong>$500k/month</strong>
                  {" with a vendor but had "}
                  <strong>never</strong>
                  {" received an early-pay discount. After negotiating "}
                  <strong>2/10 net 30</strong>
                  {" and using PayLater to fund Day-10 payments, they:"}
                </p>
                <ul role="list">
                  <li>
                    {"Saved "}
                    <strong>~$10k/month</strong>
                    {" on invoices"}
                    <br />
                    <br />
                  </li>
                  <li>
                    {"Paid "}
                    <strong>~$4.1k/month</strong>
                    {" in financing"}
                    <br />
                    <br />
                  </li>
                  <li>
                    Kept their working capital timing intact
                    <br />
                    <br />
                  </li>
                  <li>
                    {"Netted "}
                    <strong>~$72k/year</strong>
                    {" in savings, enough to fund a key operations hire (which then improved deliveries and customer experience)."}
                  </li>
                </ul>
                <h2>
                  <strong>The road ahead: Plan for both scenarios</strong>
                </h2>
                <p>
                  {"Rates may fall over the next "}
                  <strong>6–12 months</strong>
                  {" (good for borrowing costs). Or corporate buyers may continue to "}
                  <strong>tighten</strong>
                  {" (more term pressure). In either case, having a "}
                  <strong>Discount-First policy</strong>
                  {" and an "}
                  <strong>A/P financing option</strong>
                  {" positions you to win on margin and on supply chain reliability."}
                </p>
                <h2>
                  <strong>Your 3-step action plan</strong>
                </h2>
                <ol role="list">
                  <li>
                    <strong>
                      Inventory your opportunities.
                      <br />
                    </strong>
                    Ask every supplier about early-pay terms and capture each format (e.g., 1/10 net 30, 2/10 net 45).
                    <br />
                    <br />
                  </li>
                  <li>
                    <strong>
                      Set your Discount-First rules.
                      <br />
                    </strong>
                    Example: “Always take ≥1.5%,” “Prioritize fast-turning SKUs,” “Focus on big COGS items.”
                    <br />
                    <br />
                  </li>
                  <li>
                    <strong>
                      Run the numbers with financing on/off.
                      <br />
                    </strong>
                    {"Use "}
                    <A target="_blank" href="/early-pay-savings-calculator-daylit-working-capital">the savings calculator</A>
                    {". If the discount’s implied APR beats your cost of funds, "}
                    <strong>take the discount</strong>
                    {" and use PayLater to protect CCC."}
                  </li>
                </ol>
                <h2>
                  <strong>Want help? Reach out to Daylit today!</strong>
                </h2>
                <ul role="list">
                  <li>
                    <strong>Early Pay Savings Calculator:</strong>
                    {" "}
                    <A target="_blank" href="/early-pay-savings-calculator-daylit-working-capital">See your savings in minutes</A>
                    .
                    <br />
                    <br />
                  </li>
                  <li>
                    <strong>{"Free CCC Snapshot & Benchmark:"}</strong>
                    {" We’ll calculate your CCC, show your trend, and benchmark against peers."}
                    <br />
                    <br />
                  </li>
                  <li>
                    <strong>Negotiation support:</strong>
                    {" We can help craft a supplier-friendly proposal and share what’s “market” in your industry."}
                    <br />
                    <br />
                  </li>
                </ul>
                <section fs-richtext-component="book-a-free-consultation-with-daylit" className="blog-cta-dynamic">
                  <div fs-richtext-component="" className="blog-cta-content-wrap">
                    <div className="blog-cta-content-inner">
                      <img src="/_ext/cdn.prod.website-files.com/68abd7e02c174baf0a9c5df1/68dcf1279b56a75325050551_logomark.svg" loading="lazy" alt="" className="blog-cta-icon" />
                      <div className="blog-cta-content">
                        <div className="heading-style-h5">Book a free consultation with Daylit</div>
                        <p className="blog-cta-p">Learn how to shorten your cash conversion cycle by reducing inventory levels, extending vendor payment terms, and accelerating customer collections.</p>
                      </div>
                    </div>
                    <div className="blog-cta-btn-wrap">
                      <div className="blog-cta-btn">
                        <div data-wf--slot-item-button-main--style="primary-plus" data-button=" main" className="button_main_wrap">
                          <div className="clickable_wrap u-cover-absolute">
                            <a target="" className="clickable_link w-inline-block">
                              <span className="clickable_text u-sr-only">Button</span>
                            </a>
                            <button type="link" className="clickable_btn">
                              <span className="clickable_text u-sr-only">Button</span>
                            </button>
                          </div>
                          <div data-button="main-content" className="w-layout-vflex button_main_content-wrap">
                            <div aria-hidden="true" className="button_main_text">Book today</div>
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
                      <div className="blog-cta-btn w-condition-invisible">
                        <div data-wf--slot-item-button-main--style="secondary" data-button=" main" className="button_main_wrap w-variant-fdc41ed9-12f0-19e2-c0f0-c8f03cbab875">
                          <div className="clickable_wrap u-cover-absolute">
                            <a target="" href="#" className="clickable_link w-inline-block">
                              <span className="clickable_text u-sr-only">Button</span>
                            </a>
                            <button type="link" className="clickable_btn">
                              <span className="clickable_text u-sr-only">Button</span>
                            </button>
                          </div>
                          <div data-button="main-content" className="w-layout-vflex button_main_content-wrap w-variant-fdc41ed9-12f0-19e2-c0f0-c8f03cbab875">
                            <div aria-hidden="true" className="button_main_text"></div>
                            <div className="w-layout-vflex button-main-icon-list">
                              <div className="w-layout-vflex button-main-icon-wrap w-variant-fdc41ed9-12f0-19e2-c0f0-c8f03cbab875">
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
                  <div className="css-style w-embed"></div>
                </section>
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
