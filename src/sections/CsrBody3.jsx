// csr-body — the section's real markup, read from the rendered page (route /case-study/clipboard-health, section 3).
export default function CsrBody3() {
  return (
    <section className="csr-body" data-clone-section="CsrBody3">
      <div className="csr-inner csr-body-grid">
        <div className="csr-sidebar">
          <div className="csr-deflist">
            <p className="csr-defterm">Company</p>
            <p className="csr-defdesc csr-def-company">Clipboard Health</p>
            <p className="csr-defterm">Sector</p>
            <p className="csr-defdesc csr-def-sector">Healthcare staffing marketplace</p>
            <p className="csr-defterm">Volume</p>
            <p className="csr-defdesc csr-def-volume">5,000+ facility accounts · $110M in receivables</p>
            <p className="csr-defterm">Time to value</p>
            <p className="csr-defdesc csr-def-time">Live in days</p>
          </div>
          <div className="csr-toc">
            <p className="csr-toc-h">On this page</p>
            <a href="#csr-sec-1" className="csr-toc-link">
              <span className="csr-toc-n">01</span>
              <span className="csr-toc-t">The problem</span>
            </a>
            <a href="#csr-sec-2" className="csr-toc-link">
              <span className="csr-toc-n">02</span>
              <span className="csr-toc-t">The decision</span>
            </a>
            <a href="#csr-sec-3" className="csr-toc-link">
              <span className="csr-toc-n">03</span>
              <span className="csr-toc-t">Going live</span>
            </a>
            <a href="#csr-sec-4" className="csr-toc-link is-active">
              <span className="csr-toc-n">04</span>
              <span className="csr-toc-t">The payoff</span>
            </a>
          </div>
        </div>
        <div className="csr-content">
          <section className="csr-section csr-sec0" id="csr-sec-0">
            <p className="csr-sec-eyebrow">00 / Overview</p>
            <h2 className="csr-h2 w-dyn-bind-empty"></h2>
            <div className="csr-rt-body w-dyn-bind-empty w-richtext"></div>
            <div className="csr-callouts csr-s0-stats">
              <div className="w-dyn-list">
                <div className="w-dyn-empty">
                  <div>No items found.</div>
                </div>
              </div>
            </div>
          </section>
          <section className="csr-section" id="csr-sec-1">
            <p className="csr-sec-eyebrow">01 / The problem</p>
            <h2 className="csr-h2 csr-s1-h2">What billing challenge does a staffing marketplace create?</h2>
            <div className="csr-rt-body w-richtext">
              <p>Clipboard Health operates a healthcare staffing marketplace that connects healthcare facilities with nurses and other healthcare professionals, filling shifts on demand across thousands of facilities nationwide.</p>
              <p>The marketplace model has powered rapid growth, but it also created a billing operation of enormous scale: every filled shift generates an invoice, and every facility is an account that must be managed, followed up with, and collected from.</p>
              <p>By 2026, Clipboard Health was carrying roughly $110 million in accounts receivable spread across more than 5,000 facility accounts. At that volume, collections is not a task, it is a full-scale operation. Every promise to pay had to be logged by hand, every dispute chased down across email threads, and every customer inquiry routed manually to the right owner. The cost to service the AR book kept climbing with the business: more accounts meant more inboxes to monitor, more follow-ups to schedule, and more collectors spending their days on repetitive administrative work instead of resolving the accounts that actually needed human judgment.</p>
              <p>The process worked, but it did not scale, and the manual cost to service the receivables book was eating into the economics of the business.</p>
            </div>
            <div className="csr-quote">
              <p className="csr-quote-q">“We were looking to bring in automation across Billing, Payments, and Collections. Collections was where the biggest headcount drag existed and we knew we needed help.”</p>
              <p className="csr-quote-cite" data-csr-cite="1">
                <strong>Charlie Eikenberg</strong>
                {" · Director of Billing, Clipboard Health"}
              </p>
            </div>
            <div className="csr-callouts csr-s1-stats">
              <div className="w-dyn-list">
                <div role="list" className="r-callouts w-dyn-items">
                  <div role="listitem" className="csr-stat w-dyn-item">
                    <div className="csr-stat-num">$110M</div>
                    <div>Accounts receivable under management</div>
                  </div>
                  <div role="listitem" className="csr-stat w-dyn-item">
                    <div className="csr-stat-num">5,000+</div>
                    <div>Facility accounts to manage and collect from</div>
                  </div>
                  <div role="listitem" className="csr-stat w-dyn-item">
                    <div className="csr-stat-num">1,000s</div>
                    <div>Of hours lost to manual per-account handling</div>
                  </div>
                </div>
              </div>
            </div>
            <div className="csr-pull">
              <p className="csr-pull-text csr-s1-pull" data-csr-hl="1">
                {"Clipboard Health needed a way to take the manual work out of "}
                <span className="hl">high-volume collections.</span>
              </p>
              <img src="/_ext/cdn.prod.website-files.com/68abd7e02c174baf0a9c5df1/6a4d5cf67888683881a2b93e_csr-pullquote-logomark.svg" loading="lazy" alt="" className="csr-logomark" />
            </div>
          </section>
          <section className="csr-section" id="csr-sec-2">
            <p className="csr-sec-eyebrow">02 / The decision</p>
            <h2 className="csr-h2 csr-s2-h2">Why did Clipboard Health choose Daylit?</h2>
            <div className="csr-rt-body w-richtext">
              <p>Clipboard Health needed a solution built for volume, one that could operate across thousands of accounts simultaneously without adding headcount, and one that could understand what customers were actually saying rather than just sending reminders on a timer.</p>
              <p>{"Daylit's platform deploys autonomous AI agents that listen inside customer inboxes. When a customer replies, the agents automatically detect what kind of issue the message contains, a promise to pay, a dispute, or an inquiry, and automatically create a case for it."}</p>
              <p>For a team managing 5,000+ accounts, this changed the fundamental unit of work. Instead of collectors reading every reply and manually triaging what to do next, the platform did the listening, the classification, and the case creation on its own, leaving the team to handle only the exceptions that genuinely required a human.</p>
              <ul>
                <li>
                  <strong>Detect</strong>
                  {" every reply as a promise to pay, a dispute, or an inquiry, the moment it arrives"}
                </li>
                <li>
                  <strong>{"Case & sequence"}</strong>
                  {" each issue automatically, following Clipboard Health's own SOPs"}
                </li>
                <li>
                  <strong>Act</strong>
                  {" autonomously, following up on payment dates, escalating disputes, answering routine inquiries"}
                </li>
              </ul>
            </div>
            <div className="csr-quote">
              <p className="csr-quote-q csr-s2q1 w-dyn-bind-empty"></p>
              <p className="csr-quote-cite csr-s2q1c w-dyn-bind-empty" data-csr-cite="1"></p>
            </div>
            <div className="csr-rt-body w-dyn-bind-empty w-richtext"></div>
            <div className="csr-quote">
              <p className="csr-quote-q csr-s2q2 w-dyn-bind-empty"></p>
              <p className="csr-quote-cite csr-s2q2c w-dyn-bind-empty" data-csr-cite="1"></p>
            </div>
            <div className="csr-callouts csr-s2-stats">
              <div className="w-dyn-list">
                <div className="w-dyn-empty">
                  <div>No items found.</div>
                </div>
              </div>
            </div>
          </section>
          <section className="csr-section" id="csr-sec-3">
            <p className="csr-sec-eyebrow">03 / Going live</p>
            <h2 className="csr-h2 csr-s3-h2">What happened after going live with Daylit?</h2>
            <div className="csr-rt-body w-richtext">
              <p>{"Work that once consumed the collections team's entire day, reading replies, logging promises to pay, opening dispute cases, scheduling follow-ups, now happened automatically, in the background, across the whole book of accounts at once."}</p>
            </div>
            <div className="csr-quote">
              <p className="csr-quote-q">“Daylit cut the time we spend on manual collections by more than 65%. Our team used to spend their days triaging inboxes and logging cases by hand. Now the agents catch everything, promises to pay, disputes, inquiries, and the right follow-up just happens.”</p>
              <p className="csr-quote-cite" data-csr-cite="1">
                <strong>Louis Case</strong>
                {" · Head of Collections, Clipboard Health"}
              </p>
            </div>
            <div className="csr-rt-body w-richtext">
              <p>Because every customer reply was detected and acted on the moment it arrived, nothing sat in an inbox waiting to be read. Promises to pay were tracked and followed up on their promised dates. Disputes were cased and routed immediately instead of aging in a thread.</p>
            </div>
            <div className="csr-grid csr-s3-grid">
              <div className="w-dyn-list">
                <div role="list" className="r-callouts w-dyn-items">
                  <div role="listitem" className="csr-stat w-dyn-item">
                    <div className="csr-stat-num">65%</div>
                    <div>Less manual work spent on collections</div>
                  </div>
                  <div role="listitem" className="csr-stat w-dyn-item">
                    <div className="csr-stat-num">10%</div>
                    <div>Faster collections across the entire book</div>
                  </div>
                  <div role="listitem" className="csr-stat w-dyn-item">
                    <div className="csr-stat-num">0</div>
                    <div>Replies left sitting unread in an inbox</div>
                  </div>
                </div>
              </div>
            </div>
            <div className="csr-pull">
              <p className="csr-pull-text" data-csr-hl="1">
                {"Collections moved 10% faster, while the team did "}
                <span className="hl">65% less manual work.</span>
              </p>
              <img src="/_ext/cdn.prod.website-files.com/68abd7e02c174baf0a9c5df1/6a4d5cf67888683881a2b93e_csr-pullquote-logomark.svg" loading="lazy" alt="" className="csr-logomark" />
            </div>
          </section>
          <section className="csr-section" id="csr-sec-4">
            <p className="csr-sec-eyebrow">04 / The payoff</p>
            <h2 className="csr-h2 csr-s4-h2">How did the business change?</h2>
            <div className="csr-rt-body w-richtext">
              <p>For a business carrying $110 million in receivables, faster collections translated directly into working capital.</p>
              <p>{"But the bigger change was structural: Clipboard Health's collections capacity is no longer tied to headcount. The team that once spent its days on manual triage now focuses on the high-value accounts and complex disputes where human judgment matters, while Daylit's agents run the volume."}</p>
              <p>As the marketplace continues to grow and the account base expands, the collections operation scales with it, without the manual cost that used to grow alongside it.</p>
            </div>
            <div className="csr-quote">
              <p className="csr-quote-q csr-s4q1 w-dyn-bind-empty"></p>
              <p className="csr-quote-cite csr-s4q1c w-dyn-bind-empty" data-csr-cite="1"></p>
            </div>
            <div className="csr-quote">
              <p className="csr-quote-q csr-s4q2 w-dyn-bind-empty"></p>
              <p className="csr-quote-cite csr-s4q2c w-dyn-bind-empty" data-csr-cite="1"></p>
            </div>
            <div className="csr-quote">
              <p className="csr-quote-q csr-s4q3 w-dyn-bind-empty"></p>
              <p className="csr-quote-cite csr-s4q3c w-dyn-bind-empty" data-csr-cite="1"></p>
            </div>
            <div className="csr-callouts csr-s4-stats">
              <div className="w-dyn-list">
                <div role="list" className="r-callouts w-dyn-items">
                  <div role="listitem" className="csr-stat w-dyn-item">
                    <div className="csr-stat-num" style={{ "fontSize": "40px" }}>$110M</div>
                    <div>In receivables collected faster, freeing working capital</div>
                  </div>
                  <div role="listitem" className="csr-stat w-dyn-item">
                    <div className="csr-stat-num" style={{ "fontSize": "40px" }}>Uncapped</div>
                    <div>Collections capacity, no longer tied to headcount</div>
                  </div>
                  <div role="listitem" className="csr-stat w-dyn-item">
                    <div className="csr-stat-num" style={{ "fontSize": "40px" }}>Scales</div>
                    <div>With the marketplace, without the manual cost</div>
                  </div>
                </div>
              </div>
            </div>
            <div className="csr-pull">
              <p className="csr-pull-text csr-s4-pull" data-csr-hl="1">
                {"Collections capacity, decoupled from headcount. "}
                <span className="hl">Say hello to daylit.</span>
              </p>
              <img src="/_ext/cdn.prod.website-files.com/68abd7e02c174baf0a9c5df1/6a4d5cf67888683881a2b93e_csr-pullquote-logomark.svg" loading="lazy" alt="" className="csr-logomark" />
            </div>
          </section>
        </div>
      </div>
    </section>
  );
}
