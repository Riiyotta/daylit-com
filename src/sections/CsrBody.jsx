// csr-body — the section's real markup, read from the rendered page (route /case-study/uptime-health-services, section 3).
export default function CsrBody() {
  return (
    <section className="csr-body" data-clone-section="CsrBody">
      <div className="csr-inner csr-body-grid">
        <div className="csr-sidebar">
          <div className="csr-deflist">
            <p className="csr-defterm">Company</p>
            <p className="csr-defdesc csr-def-company">Uptime Health Services</p>
            <p className="csr-defterm">Sector</p>
            <p className="csr-defdesc csr-def-sector">{"Healthcare & dental equipment services"}</p>
            <p className="csr-defterm">Volume</p>
            <p className="csr-defdesc csr-def-volume">~12 business units on NetSuite</p>
            <p className="csr-defterm">Time to value</p>
            <p className="csr-defdesc csr-def-time">Immediate impact</p>
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
                <div role="list" className="r-callouts w-dyn-items">
                  <div role="listitem" className="csr-stat w-dyn-item">
                    <div className="csr-stat-num">~12</div>
                    <div>Business units, grown through acquisition</div>
                  </div>
                  <div role="listitem" className="csr-stat w-dyn-item">
                    <div className="csr-stat-num">3</div>
                    <div>Distinct billing models: subscription, card-on-file, revenue-share</div>
                  </div>
                  <div role="listitem" className="csr-stat w-dyn-item">
                    <div className="csr-stat-num">80 / 20</div>
                    <div>Technician revenue-share split on every job invoiced</div>
                  </div>
                </div>
              </div>
            </div>
          </section>
          <section className="csr-section" id="csr-sec-1">
            <p className="csr-sec-eyebrow">01 / The problem</p>
            <h2 className="csr-h2 csr-s1-h2">High-volume collections, a team of one</h2>
            <div className="csr-rt-body w-richtext">
              <p>Uptime had nearly a dozen business units, and extremely limited resources to ensure timely payment across all of them.</p>
              <p>At any given time, roughly 1,000 accounts sat in active collections, the company was booking a bad debt reserve of 1 to 2% of revenue at year end, and the entire workload fell to a collections team of essentially one. The NetSuite consolidation exposed the real shape of the challenge: nearly a dozen business units, each with its own customers, billing models, and payment terms, all funneled into a collections function stretched far too thin. In practice, active collections across the entire organization worked invoice by invoice, by hand.</p>
              <p>Between manual notices, phone calls, disputes that required verifying whether a technician had actually completed the work, and statements that confused customers who had partially paid, the hours in the day ran out long before the AR book did. The volume of accounts across the business units simply exceeded what a lean team could touch.</p>
            </div>
            <div className="csr-quote">
              <p className="csr-quote-q w-dyn-bind-empty"></p>
              <p className="csr-quote-cite w-dyn-bind-empty" data-csr-cite="1"></p>
            </div>
            <div className="csr-callouts csr-s1-stats">
              <div className="w-dyn-list">
                <div role="list" className="r-callouts w-dyn-items">
                  <div role="listitem" className="csr-stat w-dyn-item">
                    <div className="csr-stat-num">1,000</div>
                    <div>Accounts in active collections at any time</div>
                  </div>
                  <div role="listitem" className="csr-stat w-dyn-item">
                    <div className="csr-stat-num">1–2%</div>
                    <div>Bad debt reserve as a share of revenue</div>
                  </div>
                  <div role="listitem" className="csr-stat w-dyn-item">
                    <div className="csr-stat-num">1</div>
                    <div>Person covering collections for the entire org</div>
                  </div>
                </div>
              </div>
            </div>
            <div className="csr-pull">
              <p className="csr-pull-text csr-s1-pull" data-csr-hl="1">
                {"The need was clear: run high-volume collections across a complex, multi-unit organization "}
                <span className="hl">without adding headcount.</span>
              </p>
              <img src="/_ext/cdn.prod.website-files.com/68abd7e02c174baf0a9c5df1/6a4d5cf67888683881a2b93e_csr-pullquote-logomark.svg" loading="lazy" alt="" className="csr-logomark" />
            </div>
          </section>
          <section className="csr-section" id="csr-sec-2">
            <p className="csr-sec-eyebrow">02 / The decision</p>
            <h2 className="csr-h2 csr-s2-h2">Why Uptime Health Services chose Daylit</h2>
            <div className="csr-rt-body w-richtext">
              <p>{"Uptime needed a solution that could operate across every business unit at once, one that mirrored the company's NetSuite structure and understood that each unit collects differently, rather than blasting the same reminder to every account."}</p>
              <p>{"Daylit's platform deploys autonomous AI agents that listen inside customer inboxes. When a customer replies, the agents automatically detect what kind of issue the message contains, a promise to pay, a dispute, or an inquiry, and create a case for it. Each case is registered into a sequence based on Uptime's own SOPs, and Daylit's agents carry out the outreach: following up on promised payment dates, escalating disputes to the right owner, and answering routine inquiries without a collector ever touching the thread."}</p>
              <ul>
                <li>
                  <strong>Configured around NetSuite tracking categories</strong>
                  , each business unit runs its own sequences with its own rules
                </li>
                <li>
                  <strong>Card-on-file units excluded</strong>
                  {" from outreach entirely, while units that need collections get them automatically"}
                </li>
                <li>
                  <strong>Payment links carried into outreach</strong>
                  , so customers can pay the moment an agent reaches them
                </li>
              </ul>
              <p>For an organization with nearly a dozen business units and one active collector, this changed the fundamental unit of work. The listening, the classification, and the case creation happened on their own, leaving the team to handle only the exceptions that genuinely required a human.</p>
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
                <div role="list" className="r-callouts w-dyn-items">
                  <div role="listitem" className="csr-stat w-dyn-item">
                    <div className="csr-stat-num">~12</div>
                    <div>Business units, each with its own rules and sequences</div>
                  </div>
                  <div role="listitem" className="csr-stat w-dyn-item">
                    <div className="csr-stat-num">3</div>
                    <div>Reply types auto-detected: promise, dispute, inquiry</div>
                  </div>
                  <div role="listitem" className="csr-stat w-dyn-item">
                    <div className="csr-stat-num">24/7</div>
                    <div>Agents listening inside their AR inbox</div>
                  </div>
                </div>
              </div>
            </div>
          </section>
          <section className="csr-section" id="csr-sec-3">
            <p className="csr-sec-eyebrow">03 / Going live</p>
            <h2 className="csr-h2 csr-s3-h2">What happened after going live with Daylit?</h2>
            <div className="csr-rt-body w-richtext">
              <p>The impact was immediate.</p>
              <p>{"Work that once consumed the collections lead's entire day, from selecting templates and sending notices invoice by invoice to reading replies and chasing disputes across email threads, now happened automatically, in the background, across every business unit at once."}</p>
            </div>
            <div className="csr-quote">
              <p className="csr-quote-q">{"“With nearly a dozen business units and one person running collections, we could never get to every account. Daylit's agents listen to every customer reply, catch every promise to pay and every dispute, and the follow-up just happens. We've seen nearly a 50% improvement in our AR without hiring a single additional person.”"}</p>
              <p className="csr-quote-cite" data-csr-cite="1">
                <strong>Patrick McClain</strong>
                {" · CFO, Uptime Health Services"}
              </p>
            </div>
            <div className="csr-rt-body w-richtext">
              <p>{"Because every customer reply was detected and acted on the moment it arrived, nothing sat unread in an inbox. Promises to pay were tracked and followed up on their promised dates. Disputes, including the operational ones that required verifying a technician's work, were cased and routed to the right owner immediately instead of aging in a thread. The result: nearly a 50% improvement in AR, delivered by the same lean team."}</p>
            </div>
            <div className="csr-grid csr-s3-grid">
              <div className="w-dyn-list">
                <div role="list" className="r-callouts w-dyn-items">
                  <div role="listitem" className="csr-stat w-dyn-item">
                    <div className="csr-stat-num">~50%</div>
                    <div>Improvement in AR after going live</div>
                  </div>
                  <div role="listitem" className="csr-stat w-dyn-item">
                    <div className="csr-stat-num">0</div>
                    <div>Additional people hired to get there</div>
                  </div>
                  <div role="listitem" className="csr-stat w-dyn-item">
                    <div className="csr-stat-num">Every</div>
                    <div>Reply detected and acted on the moment it arrived</div>
                  </div>
                </div>
              </div>
            </div>
            <div className="csr-pull">
              <p className="csr-pull-text w-dyn-bind-empty" data-csr-hl="1"></p>
              <img src="/_ext/cdn.prod.website-files.com/68abd7e02c174baf0a9c5df1/6a4d5cf67888683881a2b93e_csr-pullquote-logomark.svg" loading="lazy" alt="" className="csr-logomark" />
            </div>
          </section>
          <section className="csr-section" id="csr-sec-4">
            <p className="csr-sec-eyebrow">04 / The payoff</p>
            <h2 className="csr-h2 csr-s4-h2">How did the business change?</h2>
            <div className="csr-rt-body w-richtext">
              <p>For a company that grew through acquisition into nearly a dozen business units, the structural change matters more than any single number: collections capacity is no longer tied to headcount.</p>
              <p>{"The collections lead who once spent the day sending notices by hand now spends it on the phone with the accounts that need human judgment, complex disputes, revenue-share reconciliation, and high-value relationships, while Daylit's agents run the volume across every unit."}</p>
              <p>As Uptime Health Services continues to acquire and expand, new business units plug into the same automated collections operation, without the manual cost that used to grow alongside the business.</p>
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
                    <div className="csr-stat-num">50%</div>
                    <div>More AR, with the same lean team</div>
                  </div>
                  <div role="listitem" className="csr-stat w-dyn-item">
                    <div className="csr-stat-num">Human</div>
                    <div>Judgment reserved for disputes and key relationships</div>
                  </div>
                  <div role="listitem" className="csr-stat w-dyn-item">
                    <div className="csr-stat-num">→ ∞</div>
                    <div>New units plug into the same operation as Uptime scales</div>
                  </div>
                </div>
              </div>
            </div>
            <div className="csr-pull">
              <p className="csr-pull-text csr-s4-pull" data-csr-hl="1">
                {"Collections capacity is no longer tied to headcount. "}
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
