// IA section(s): hero.section-legal-article (ia/ia.json, design-repo/sections/)
// DAYLIT SERVICE LEVEL AGREEMENT — the section's real markup, read from the rendered page (route /legal/sla-customer, section 1).
export default function DAYLITSERVICELEVELAGREEMENT() {
  return (
    <article className="section_legal-article" data-clone-section="DAYLITSERVICELEVELAGREEMENT">
      <div data-wf--utility-spacer-section--padding="medium" className="padding-section-wrap">
        <div className="padding-top w-variant-1adb59ca-4a0d-7415-a8be-0ad7bbe77144"></div>
      </div>
      <div className="big-section">
        <div className="w-layout-blockcontainer container-large w-container">
          <div className="legal-article_layout">
            <div className="w-layout-vflex legal-article_title-wrap">
              <h1 className="heading-style-h4 text-style-allcaps">DAYLIT SERVICE LEVEL AGREEMENT</h1>
            </div>
            <div id="w-node-c44cc2ed-4c3f-f56e-ff5b-27173427c416-1ded97ec" className="legal-article_richtext w-richtext">
              <p>
                <strong>Effective Date:</strong>
                {" January 1, 2026"}
                <br />
                <strong>Services Covered:</strong>
                {" All services and functions on the Daylit Receivables Intelligence Platform"}
              </p>
              <p>
                This Service Level Agreement (“
                <strong>SLA</strong>
                ”) outlines Daylit’s commitments to service availability, maintenance practices, support responsiveness, and security for its full suite of services.
              </p>
              <h2>1. Uptime Commitment</h2>
              <p>
                {"Daylit is committed to maintaining at least "}
                <strong>99.9% uptime</strong>
                {" for the Daylit Platform each calendar month. This means the services will be available and fully functional the vast majority of the time, allowing for minimal unplanned downtime."}
              </p>
              <h3>Monthly Uptime Calculation</h3>
              <p>Uptime is measured as the percentage of total minutes in a month that the Daylit Platform is operational.</p>
              <p>
                <strong>Monthly Uptime % = (Total minutes in the month – Unplanned Downtime minutes) / Total minutes in the month × 100%</strong>
              </p>
              <p>
                <strong>Example:</strong>
                {" In a 30-day month (43,200 minutes), 99.9% uptime allows for at most approximately "}
                <strong>43 minutes</strong>
                {" of unplanned downtime."}
              </p>
              <h3>Downtime Definition</h3>
              <p>
                “
                <strong>Downtime</strong>
                ” refers to minutes when key Daylit services are unavailable or failing to process requests as expected, including:
              </p>
              <ul role="list">
                <li>Daylit X dashboard</li>
                <li>Accounts tab</li>
                <li>Customers tab</li>
                <li>Action Center</li>
              </ul>
              <p>Downtime is typically measured when error rates exceed acceptable thresholds or services do not respond.</p>
              <h3>Excluded Downtime</h3>
              <p>
                {"Some downtime is excluded from “Unplanned Downtime” and is "}
                <strong>not counted against uptime</strong>
                , including:
              </p>
              <ul role="list">
                <li>
                  <strong>Scheduled maintenance windows</strong>
                  {" performed during announced, pre-planned windows (see Section 2)"}
                </li>
                <li>
                  <strong>Emergency maintenance</strong>
                  {" (e.g., critical security patches) performed with short notice (see Section 3)"}
                </li>
                <li>
                  <strong>External factors</strong>
                  {" outside Daylit’s control, including upstream provider failures (e.g., cloud providers, data centers, identity verification partners, payment systems, banking partners), internet backbone issues, DNS failures, cloud platform failures, or Force Majeure events (e.g., natural disasters, widespread internet outages)"}
                </li>
                <li>
                  <strong>Client-side issues</strong>
                  {" arising from Customer-controlled settings, misuse of the service, incorrect integration calls, or Customer-side network issues"}
                </li>
              </ul>
              <p>
                {"Daylit will use commercially reasonable efforts to achieve the "}
                <strong>99.9% uptime target</strong>
                {" each month."}
              </p>
              <p>If you experience an outage or incident, please notify our support team so we can investigate and resolve the issue promptly.</p>
              <h2>2. Scheduled Maintenance</h2>
              <p>Regular maintenance is necessary to improve and update the Daylit Platform.</p>
              <h3>Maintenance Windows</h3>
              <p>
                {"Daylit reserves a standard maintenance window during low-traffic hours (for example, "}
                <strong>Sundays from 09:00 – 15:00 EST</strong>
                ) for routine maintenance and upgrades. During this time, services may be intermittently unavailable.
              </p>
              <p>Daylit designs most updates to be seamless with zero downtime and will only take the system offline if absolutely required.</p>
              <h3>Advance Notification</h3>
              <p>
                {"For planned maintenance that may cause downtime or significant impact outside the standard window, Daylit will provide notice at least "}
                <strong>3 business days in advance</strong>
                .
              </p>
              <p>Notifications may be delivered via:</p>
              <ul role="list">
                <li>Email to the designated Customer contact</li>
                <li>In-platform banners</li>
              </ul>
              <h3>Minimal Impact Planning</h3>
              <p>Daylit schedules maintenance with consideration of global customer usage patterns, aiming to minimize disruption. Whenever possible, maintenance will be performed in a read-only mode or using rolling deployments to avoid full outages.</p>
              <h3>Status Page Updates</h3>
              <p>Planned maintenance events will be communicated through one or more of the following:</p>
              <ul role="list">
                <li>A banner in the Daylit Platform dashboard</li>
                <li>Email communication</li>
                <li>Publication on the Daylit website</li>
              </ul>
              <h2>3. Emergency Maintenance</h2>
              <p>In rare cases, Daylit may need to perform unplanned emergency maintenance—for example, to address a critical security vulnerability or to stabilize the system during an incident.</p>
              <p>In such situations:</p>
              <ul role="list">
                <li>Daylit will provide as much prior notice as practicably possible via in-platform notice and email or Slack alerts</li>
                <li>In urgent scenarios, advance notice may be short, but Daylit will communicate promptly when emergency work begins and will provide frequent updates through the same channels</li>
              </ul>
              <p>
                {"Emergency maintenance downtime is considered "}
                <strong>Excluded Downtime</strong>
                {" for uptime calculation purposes, given its necessity to protect platform security or stability."}
              </p>
              <p>Following emergency maintenance, Daylit will conduct post-incident reviews and will share summaries of the issue and resolution on the status page.</p>
              <h2>4. Customer Support and Communication</h2>
              <p>Daylit is committed to providing responsive, high-quality support. Timely communication and issue resolution are critical to our service.</p>
              <h3>Support Availability and Channels</h3>
              <p>
                <strong>Standard Support Hours:</strong>
                {" Monday through Friday, "}
                <strong>9:00 AM – 6:00 PM EST</strong>
                , during local business days in the regions we serve.
              </p>
              <p>During standard hours, Daylit provides support via:</p>
              <ul role="list">
                <li>
                  {"Email: "}
                  <a href="#">
                    <strong>opsx@daylit.com</strong>
                  </a>
                </li>
                <li>Slack (for applicable customers with a shared channel)</li>
                <li>In-app chat (for applicable customers)</li>
              </ul>
              <p>
                <strong>Emergency Support:</strong>
                {" For material urgent issues outside standard hours, Daylit provides "}
                <strong>24/7 emergency support</strong>
                {" with on-call engineers available for critical incidents."}
              </p>
              <h3>Support Channels</h3>
              <p>Customers can reach Daylit Support through:</p>
              <ul role="list">
                <li>
                  <strong>Email:</strong>
                  {" "}
                  <a href="#">opsx@daylit.com</a>
                  {" (primary channel; creates a support ticket)"}
                </li>
                <li>
                  <strong>Chat:</strong>
                  {" in-app chat window available in the Daylit X dashboard"}
                </li>
                <li>
                  <strong>Dedicated Slack Channel:</strong>
                  {" for customers with Slack support arrangements"}
                </li>
                <li>
                  <strong>Phone:</strong>
                  {" for critical issues via the 24/7 on-call engineer hotline (phone number provided to customers who require phone support). Phone is recommended for Severity 1 emergencies."}
                </li>
              </ul>
              <h2>5. Incident Response and Severity Levels</h2>
              <p>Daylit categorizes support requests by severity to prioritize urgent issues. Target initial response times are as follows:</p>
              <h3>Severity 1 — Critical</h3>
              <p>Critical production issues affecting all users, such as complete service outage or data integrity issues (including major leakage of highly sensitive and confidential data).</p>
              <p>
                <strong>Target Response Time:</strong>
                {" within "}
                <strong>4 hours</strong>
              </p>
              <p>Daylit’s on-call team will actively work on the issue until a resolution or workaround is in place and will provide frequent updates via the status page or direct communications.</p>
              <h3>Severity 2 — High</h3>
              <p>Major issue with significant impact, such as a key feature outage or severe performance degradation, while partial service remains available.</p>
              <p>
                <strong>Target Response Time:</strong>
                {" within "}
                <strong>1 business day</strong>
              </p>
              <p>Daylit will address the issue with high priority during business hours, or immediately if escalated by the on-call engineer.</p>
              <h3>Severity 3 — Medium</h3>
              <p>Minor issue affecting a subset of users or a non-critical feature, or an issue with an available workaround.</p>
              <p>
                <strong>Target Response Time:</strong>
                {" within "}
                <strong>2 business days</strong>
              </p>
              <p>Daylit will work to resolve medium issues in a timely manner and provide periodic updates.</p>
              <h3>Severity 4 — Low</h3>
              <p>Trivial issue or general inquiry, such as a cosmetic bug, documentation question, or feature suggestion.</p>
              <p>
                <strong>Target Response Time:</strong>
                {" within "}
                <strong>5–10 business days</strong>
              </p>
              <p>These requests are handled in Daylit’s normal support and development queue.</p>
              <p>
                <strong>Note:</strong>
                {" “Response Time” means the time for a support engineer to first respond and acknowledge the issue, not necessarily the time to fully resolve it. Resolution times may vary, but Daylit will use commercially reasonable efforts to resolve issues as quickly as possible."}
              </p>
              <p>Throughout the lifecycle of an incident, Daylit will communicate status updates and next steps via the designated support channel and/or the status page.</p>
              <p>For Severity 1 and Severity 2 incidents, Daylit may also initiate proactive outreach (for example, calling the Customer’s technical contact or sending a high-priority Slack message) to ensure awareness and facilitate two-way communication during incident response.</p>
              <p>After resolving a critical incident, Daylit can provide an Incident Report or Post-Mortem summary upon request.</p>
              <h2>6. Security, Compliance, and Business Continuity</h2>
              <p>Daylit understands that uptime includes both availability and resilience. Daylit adheres to industry-leading practices to support security and continuity.</p>
              <h3>SOC 2 Type I Certification</h3>
              <p>
                {"Daylit has achieved "}
                <strong>SOC 2 Type I certification</strong>
                , which involves independent annual audits of controls related to security, availability, and confidentiality.
              </p>
              <p>SOC 2 reports can be provided under NDA upon request.</p>
              <h3>Industry Best Practices</h3>
              <p>Daylit employs strong encryption, secure coding practices, and continuous monitoring to protect the integrity and availability of the Daylit Platform.</p>
              <h3>Business Continuity and Disaster Recovery</h3>
              <p>
                {"Daylit maintains documented "}
                <strong>Business Continuity (BCP)</strong>
                {" and "}
                <strong>Disaster Recovery (DR)</strong>
                {" plans designed to ensure service continuity and timely restoration following major disruptions."}
              </p>
              <p>Daylit’s disaster recovery strategy includes:</p>
              <ul role="list">
                <li>Data replication</li>
                <li>Regular backups</li>
                <li>Periodic recovery testing</li>
                <li>Validation of recovery procedures against defined recovery objectives</li>
              </ul>
              <h2>7. Conclusion</h2>
              <p>This SLA reflects Daylit’s commitment to being a reliable, transparent, and customer-focused partner. By maintaining 99.9% uptime, providing timely communications and 24/7 support for critical issues, and upholding rigorous security and continuity standards, Daylit aims to ensure your experience with the Daylit Platform is consistently excellent.</p>
              <p>
                {"If you have any questions about this SLA or need clarification, please contact your Daylit account representative or Daylit Support at "}
                <a href="#">
                  <strong>opsx@daylit.com</strong>
                </a>
                .
              </p>
              <p>‍</p>
              <p>‍</p>
            </div>
          </div>
        </div>
      </div>
      <div data-wf--utility-spacer-section--padding="medium" className="padding-section-wrap">
        <div className="padding-top w-variant-1adb59ca-4a0d-7415-a8be-0ad7bbe77144"></div>
      </div>
    </article>
  );
}
