import A from "../lib/A.jsx";
import usePageChrome from "../lib/usePageChrome.js";
import Div2 from "../sections/Div2.jsx";
import UnlockMassiveSavingsIn from "../sections/UnlockMassiveSavingsIn.jsx";
import css0 from "../styles/inline-46.css?inline"; // only this page loads it
import css1 from "../styles/inline-47.css?inline"; // only this page loads it
import css2 from "../styles/inline-48.css?inline"; // only this page loads it
import css3 from "../styles/inline-49.css?inline"; // only this page loads it

// Route /learn-more/demo — 2 section(s), in page order.
export default function LearnMoreDemo() {
  usePageChrome({ title: "Accounts Receivable Software Demo | Daylit AI Agents", html: { "data-wf-domain": "www.daylit.com", "data-wf-page": "68c2d55c449ed1aed9c80d31", "data-wf-site": "68abd7e02c174baf0a9c5df1", "lang": "en", "class": "w-mod-js w-mod-ix wf-opensans-n6-active wf-opensans-n3-active wf-opensans-n8-active wf-opensans-n7-active wf-opensans-n4-active wf-opensans-i8-active wf-opensans-i7-active wf-opensans-i4-active wf-opensans-i6-active wf-opensans-i3-active wf-active" }, body: {  } });
  return (
    <>
      <style>{css0}</style>
      <style>{css1}</style>
      <style>{css2}</style>
      <style>{css3}</style>
    <section data-wf--section-demo--variant="base" className="section_demo">
      <div className="section_demo-wrap">
        <Div2 />
        <UnlockMassiveSavingsIn />
      </div>
    </section>
    </>
  );
}
