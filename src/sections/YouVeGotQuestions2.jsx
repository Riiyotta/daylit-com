// IA section(s): proof.section-faqs-preview (ia/ia.json, design-repo/sections/)
import A from "../lib/A.jsx";

// You’ve got questions, we’ve go — the section's real markup, read from the rendered page (route /ai-collections-strategy, section 10).
export default function YouVeGotQuestions2() {
  return (
    <section data-texture-section="true" className="section_faqs-preview" data-clone-section="YouVeGotQuestions2">
      <div className="w-embed"></div>
      <div data-wf--utility-spacer-section--padding="large" className="padding-section-wrap">
        <div className="padding-top"></div>
      </div>
      <div className="big-section">
        <div className="w-layout-blockcontainer container-large w-container">
          <div className="faqs-preview_layout">
            <div id="w-node-d2ce531d-5258-86f8-f70e-575572ee3d61-72ee3d5b" className="w-layout-vflex max-width-large">
              <div className="w-layout-vflex faqs-preview_top-wrap">
                <div data-wf--slot-item-eyebrow-main--color="primary" className="eyebrow">
                  <div className="eyebrow-dot"></div>
                  <div className="eyebrow-text">FAQs</div>
                </div>
                <div className="spacer-medium"></div>
                <h2>You’ve got questions, we’ve got answers</h2>
              </div>
            </div>
            <div className="w-dyn-list">
              <div cc-accordion-element="list" role="list" className="faqs-preview_list w-dyn-items">
                <div role="listitem" className="w-dyn-item">
                  <div cc-schema-element="faq" cc-accordion-element="accordion" className="card-faq_component" open>
                    <div className="card-border-gradient"></div>
                    <div>
                      Q
                      <span data-faq="number">1</span>
                      .
                    </div>
                    <div className="spacer-xxsmall"></div>
                    <button aria-expanded="true" aria-controls="accordion-details-1" id="accordion-summary-1" cc-accordion-element="trigger" cc-schema-element="question" className="card-faq_header-wrap" role="button" tabIndex="0">
                      <h3 className="heading-style-h6">What is an AI agent for accounts receivable?</h3>
                      <div cc-accordion-element="icon" className="card-faq_icon w-embed" style={{ "transform": "rotate(180deg)" }}>
                        <svg xmlns="http://www.w3.org/2000/svg" width="100%" height="100%" viewBox="0 0 16 16" fill="none" preserveAspectRatio="xMidYMid meet" aria-hidden="true" role="img">
                          <path fillRule="evenodd" clipRule="evenodd" d="M12.7803 5.88971C13.0732 6.18261 13.0732 6.65748 12.7803 6.95037L8.88387 10.8468C8.39572 11.335 7.60426 11.335 7.11611 10.8468L3.21967 6.95037C2.92678 6.65748 2.92678 6.18261 3.21967 5.88971C3.51256 5.59682 3.98744 5.59682 4.28033 5.88971L7.99999 9.60938L11.7197 5.88971C12.0126 5.59682 12.4874 5.59682 12.7803 5.88971Z" fill="currentColor" />
                        </svg>
                      </div>
                    </button>
                    <div id="accordion-details-1" role="region" aria-labelledby="accordion-summary-1" cc-accordion-element="content" cc-schema-element="answer" className="card-faq_content-container" style={{ "height": "303px", "opacity": "1" }}>
                      <div className="card-faq_content-wrap">
                        <div className="legal-article_richtext w-richtext">
                          <p>{"An AI agent for accounts receivable refers to software that acts like an extension to your A/R team, automatically chasing invoices, drafting replies, and handling even the more complex tasks like disputes and reconciliation. "}</p>
                          <p>{"Imagine a 24/7 copilot that can take care of all the lower priority items on your team's behalf so they can spend more time on higher priorities. Daylit’s agents also help management be more proactive by learning customer habits and signaling issues before they become serious."}</p>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div role="listitem" className="w-dyn-item">
                  <div cc-schema-element="faq" cc-accordion-element="accordion" className="card-faq_component">
                    <div className="card-border-gradient"></div>
                    <div>
                      Q
                      <span data-faq="number">2</span>
                      .
                    </div>
                    <div className="spacer-xxsmall"></div>
                    <button aria-expanded="false" aria-controls="accordion-details-2" id="accordion-summary-2" cc-accordion-element="trigger" cc-schema-element="question" className="card-faq_header-wrap" role="button" tabIndex="0">
                      <h3 className="heading-style-h6">How will Daylit AI agents handle my manual work?</h3>
                      <div cc-accordion-element="icon" className="card-faq_icon w-embed" style={{ "transform": "rotate(0deg)" }}>
                        <svg xmlns="http://www.w3.org/2000/svg" width="100%" height="100%" viewBox="0 0 16 16" fill="none" preserveAspectRatio="xMidYMid meet" aria-hidden="true" role="img">
                          <path fillRule="evenodd" clipRule="evenodd" d="M12.7803 5.88971C13.0732 6.18261 13.0732 6.65748 12.7803 6.95037L8.88387 10.8468C8.39572 11.335 7.60426 11.335 7.11611 10.8468L3.21967 6.95037C2.92678 6.65748 2.92678 6.18261 3.21967 5.88971C3.51256 5.59682 3.98744 5.59682 4.28033 5.88971L7.99999 9.60938L11.7197 5.88971C12.0126 5.59682 12.4874 5.59682 12.7803 5.88971Z" fill="currentColor" />
                        </svg>
                      </div>
                    </button>
                    <div id="accordion-details-2" role="region" aria-labelledby="accordion-summary-2" cc-accordion-element="content" cc-schema-element="answer" className="card-faq_content-container" style={{ "height": "0px", "opacity": "0" }}>
                      <div className="card-faq_content-wrap">
                        <div className="legal-article_richtext w-richtext">
                          <p>Daylit’s AI agents are trained to handle all A/R communication by referencing your ERP and historical email communication. Our agents are able to understand all the context of your customer relationship and accurately draft responses for email, call or text to save each team member hundreds of hours of work every year.</p>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div role="listitem" className="w-dyn-item">
                  <div cc-schema-element="faq" cc-accordion-element="accordion" className="card-faq_component">
                    <div className="card-border-gradient"></div>
                    <div>
                      Q
                      <span data-faq="number">3</span>
                      .
                    </div>
                    <div className="spacer-xxsmall"></div>
                    <button aria-expanded="false" aria-controls="accordion-details-3" id="accordion-summary-3" cc-accordion-element="trigger" cc-schema-element="question" className="card-faq_header-wrap" role="button" tabIndex="0">
                      <h3 className="heading-style-h6">Is it safe to let AI agents respond to emails from my customers?</h3>
                      <div cc-accordion-element="icon" className="card-faq_icon w-embed" style={{ "transform": "rotate(0deg)" }}>
                        <svg xmlns="http://www.w3.org/2000/svg" width="100%" height="100%" viewBox="0 0 16 16" fill="none" preserveAspectRatio="xMidYMid meet" aria-hidden="true" role="img">
                          <path fillRule="evenodd" clipRule="evenodd" d="M12.7803 5.88971C13.0732 6.18261 13.0732 6.65748 12.7803 6.95037L8.88387 10.8468C8.39572 11.335 7.60426 11.335 7.11611 10.8468L3.21967 6.95037C2.92678 6.65748 2.92678 6.18261 3.21967 5.88971C3.51256 5.59682 3.98744 5.59682 4.28033 5.88971L7.99999 9.60938L11.7197 5.88971C12.0126 5.59682 12.4874 5.59682 12.7803 5.88971Z" fill="currentColor" />
                        </svg>
                      </div>
                    </button>
                    <div id="accordion-details-3" role="region" aria-labelledby="accordion-summary-3" cc-accordion-element="content" cc-schema-element="answer" className="card-faq_content-container" style={{ "height": "0px", "opacity": "0" }}>
                      <div className="card-faq_content-wrap">
                        <div className="legal-article_richtext w-richtext">
                          <p>Yes, our agents draft the messages for your team to send, giving you complete control over the tone and content. Daylit will provide the option to respond to certain messages or customers autonomously but will require users to opt-in to this feature.</p>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div role="listitem" className="w-dyn-item">
                  <div cc-schema-element="faq" cc-accordion-element="accordion" className="card-faq_component">
                    <div className="card-border-gradient"></div>
                    <div>
                      Q
                      <span data-faq="number">4</span>
                      .
                    </div>
                    <div className="spacer-xxsmall"></div>
                    <button aria-expanded="false" aria-controls="accordion-details-4" id="accordion-summary-4" cc-accordion-element="trigger" cc-schema-element="question" className="card-faq_header-wrap" role="button" tabIndex="0">
                      <h3 className="heading-style-h6">What data does Daylit use to respond accurately to my customers?</h3>
                      <div cc-accordion-element="icon" className="card-faq_icon w-embed" style={{ "transform": "rotate(0deg)" }}>
                        <svg xmlns="http://www.w3.org/2000/svg" width="100%" height="100%" viewBox="0 0 16 16" fill="none" preserveAspectRatio="xMidYMid meet" aria-hidden="true" role="img">
                          <path fillRule="evenodd" clipRule="evenodd" d="M12.7803 5.88971C13.0732 6.18261 13.0732 6.65748 12.7803 6.95037L8.88387 10.8468C8.39572 11.335 7.60426 11.335 7.11611 10.8468L3.21967 6.95037C2.92678 6.65748 2.92678 6.18261 3.21967 5.88971C3.51256 5.59682 3.98744 5.59682 4.28033 5.88971L7.99999 9.60938L11.7197 5.88971C12.0126 5.59682 12.4874 5.59682 12.7803 5.88971Z" fill="currentColor" />
                        </svg>
                      </div>
                    </button>
                    <div id="accordion-details-4" role="region" aria-labelledby="accordion-summary-4" cc-accordion-element="content" cc-schema-element="answer" className="card-faq_content-container" style={{ "height": "0px", "opacity": "0" }}>
                      <div className="card-faq_content-wrap">
                        <div className="legal-article_richtext w-richtext">
                          <p>We use data from your ERP, CRM, and historical communication, such as phone calls and email, to always understand the context of each customer and accurately respond to any situation.</p>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div role="listitem" className="w-dyn-item">
                  <div cc-schema-element="faq" cc-accordion-element="accordion" className="card-faq_component">
                    <div className="card-border-gradient"></div>
                    <div>
                      Q
                      <span data-faq="number">5</span>
                      .
                    </div>
                    <div className="spacer-xxsmall"></div>
                    <button aria-expanded="false" aria-controls="accordion-details-5" id="accordion-summary-5" cc-accordion-element="trigger" cc-schema-element="question" className="card-faq_header-wrap" role="button" tabIndex="0">
                      <h3 className="heading-style-h6">How does Daylit protect my data and privacy?</h3>
                      <div cc-accordion-element="icon" className="card-faq_icon w-embed" style={{ "transform": "rotate(0deg)" }}>
                        <svg xmlns="http://www.w3.org/2000/svg" width="100%" height="100%" viewBox="0 0 16 16" fill="none" preserveAspectRatio="xMidYMid meet" aria-hidden="true" role="img">
                          <path fillRule="evenodd" clipRule="evenodd" d="M12.7803 5.88971C13.0732 6.18261 13.0732 6.65748 12.7803 6.95037L8.88387 10.8468C8.39572 11.335 7.60426 11.335 7.11611 10.8468L3.21967 6.95037C2.92678 6.65748 2.92678 6.18261 3.21967 5.88971C3.51256 5.59682 3.98744 5.59682 4.28033 5.88971L7.99999 9.60938L11.7197 5.88971C12.0126 5.59682 12.4874 5.59682 12.7803 5.88971Z" fill="currentColor" />
                        </svg>
                      </div>
                    </button>
                    <div id="accordion-details-5" role="region" aria-labelledby="accordion-summary-5" cc-accordion-element="content" cc-schema-element="answer" className="card-faq_content-container" style={{ "height": "0px", "opacity": "0" }}>
                      <div className="card-faq_content-wrap">
                        <div className="legal-article_richtext w-richtext">
                          <p>We are actively completing our SOC II Type 1 compliance and in the process of completing compliance for SOC II Type 2. Please review our privacy policy to get a full review of our data privacy and protection standards.</p>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div role="listitem" className="w-dyn-item">
                  <div cc-schema-element="faq" cc-accordion-element="accordion" className="card-faq_component">
                    <div className="card-border-gradient"></div>
                    <div>
                      Q
                      <span data-faq="number">6</span>
                      .
                    </div>
                    <div className="spacer-xxsmall"></div>
                    <button aria-expanded="false" aria-controls="accordion-details-6" id="accordion-summary-6" cc-accordion-element="trigger" cc-schema-element="question" className="card-faq_header-wrap" role="button" tabIndex="0">
                      <h3 className="heading-style-h6">How can I sell my invoices to Daylit?</h3>
                      <div cc-accordion-element="icon" className="card-faq_icon w-embed" style={{ "transform": "rotate(0deg)" }}>
                        <svg xmlns="http://www.w3.org/2000/svg" width="100%" height="100%" viewBox="0 0 16 16" fill="none" preserveAspectRatio="xMidYMid meet" aria-hidden="true" role="img">
                          <path fillRule="evenodd" clipRule="evenodd" d="M12.7803 5.88971C13.0732 6.18261 13.0732 6.65748 12.7803 6.95037L8.88387 10.8468C8.39572 11.335 7.60426 11.335 7.11611 10.8468L3.21967 6.95037C2.92678 6.65748 2.92678 6.18261 3.21967 5.88971C3.51256 5.59682 3.98744 5.59682 4.28033 5.88971L7.99999 9.60938L11.7197 5.88971C12.0126 5.59682 12.4874 5.59682 12.7803 5.88971Z" fill="currentColor" />
                        </svg>
                      </div>
                    </button>
                    <div id="accordion-details-6" role="region" aria-labelledby="accordion-summary-6" cc-accordion-element="content" cc-schema-element="answer" className="card-faq_content-container" style={{ "height": "0px", "opacity": "0" }}>
                      <div className="card-faq_content-wrap">
                        <div className="legal-article_richtext w-richtext">
                          <p>Our platform comes with a bank that is ready to buy your invoices. When a customer invoice needs immediate liquidity, simply click on the “Sell invoice” button on the Invoices table and select all the invoices you’d like to sell. We will buy your invoices or offer a workout plan with your customers to get you paid on time without the manual work or risk of collection.</p>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="align-center">
              <div data-wf--slot-item-button-main--style="ghost" data-button=" main" className="button_main_wrap w-variant-bc08b67a-cdce-03f8-3fd3-cdc658df9199">
                <div className="clickable_wrap u-cover-absolute">
                  <A target="" href="/faq" className="clickable_link w-inline-block">
                    <span className="clickable_text u-sr-only">Button</span>
                  </A>
                  <button type="link" className="clickable_btn">
                    <span className="clickable_text u-sr-only">Button</span>
                  </button>
                </div>
                <div data-button="main-content" className="w-layout-vflex button_main_content-wrap w-variant-bc08b67a-cdce-03f8-3fd3-cdc658df9199">
                  <div aria-hidden="true" className="button_main_text">See more FAQs</div>
                  <div className="w-layout-vflex button-main-icon-list">
                    <div className="w-layout-vflex button-main-icon-wrap w-variant-bc08b67a-cdce-03f8-3fd3-cdc658df9199">
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
                    <div className="button-arrow-dots w-variant-bc08b67a-cdce-03f8-3fd3-cdc658df9199 w-embed">
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
      </div>
      <div data-wf--utility-spacer-section--padding="medium" className="padding-section-wrap">
        <div className="padding-top w-variant-1adb59ca-4a0d-7415-a8be-0ad7bbe77144"></div>
      </div>
      <div className="hide w-embed w-script"></div>
      <div className="hide w-embed w-script"></div>
    </section>
  );
}
