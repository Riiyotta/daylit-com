import A from "../lib/A.jsx";
import usePageChrome from "../lib/usePageChrome.js";
import NavbarSticky3 from "../sections/NavbarSticky3.jsx";
import Form2 from "../sections/Form2.jsx";
import TheHiddenTruthBehind from "../sections/TheHiddenTruthBehind.jsx";
import Section3 from "../sections/Section3.jsx";
import FooterComponent2 from "../sections/FooterComponent2.jsx";
import css0 from "../styles/inline-04.css?inline"; // only this page loads it
import css1 from "../styles/inline-05.css?inline"; // only this page loads it
import css2 from "../styles/inline-06.css?inline"; // only this page loads it
import css3 from "../styles/inline-07.css?inline"; // only this page loads it
import css4 from "../styles/inline-08.css?inline"; // only this page loads it
import css5 from "../styles/inline-09.css?inline"; // only this page loads it
import css6 from "../styles/inline-10.css?inline"; // only this page loads it
import css7 from "../styles/inline-11.css?inline"; // only this page loads it
import css8 from "../styles/inline-12.css?inline"; // only this page loads it
import css9 from "../styles/inline-13.css?inline"; // only this page loads it
import css10 from "../styles/inline-14.css?inline"; // only this page loads it
import css11 from "../styles/inline-15.css?inline"; // only this page loads it
import css12 from "../styles/inline-16.css?inline"; // only this page loads it
import css13 from "../styles/inline-17.css?inline"; // only this page loads it
import css14 from "../styles/inline-18.css?inline"; // only this page loads it
import css15 from "../styles/inline-19.css?inline"; // only this page loads it
import css16 from "../styles/inline-22.css?inline"; // only this page loads it
import css17 from "../styles/inline-27.css?inline"; // only this page loads it

// Route /blog — 5 section(s), in page order.
export default function Blog() {
  usePageChrome({ title: "Daylit's Blog | AI Agents for A/R Insights, Tips and Guides", html: { "data-wf-domain": "www.daylit.com", "data-wf-page": "68b14387377e2ca4f9b9f5b5", "data-wf-site": "68abd7e02c174baf0a9c5df1", "lang": "en", "class": "w-mod-js w-mod-ix wf-opensans-n3-active wf-opensans-n6-active wf-opensans-n8-active wf-opensans-n7-active wf-opensans-n4-active wf-opensans-i8-active wf-opensans-i6-active wf-opensans-i3-active wf-opensans-i7-active wf-opensans-i4-active wf-active" }, body: {  } });
  return (
    <>
      <style>{css0}</style>
      <style>{css1}</style>
      <style>{css2}</style>
      <style>{css3}</style>
      <style>{css4}</style>
      <style>{css5}</style>
      <style>{css6}</style>
      <style>{css7}</style>
      <style>{css8}</style>
      <style>{css9}</style>
      <style>{css10}</style>
      <style>{css11}</style>
      <style>{css12}</style>
      <style>{css13}</style>
      <style>{css14}</style>
      <style>{css15}</style>
      <style>{css16}</style>
      <style>{css17}</style>
    <div className="page-wrapper">
      <div className="global-styles">
        <div className="style-overrides w-embed"></div>
        <div className="w-embed"></div>
        <div className="w-embed"></div>
        <div className="w-embed"></div>
        <div className="w-embed"></div>
        <div className="w-embed"></div>
        <div className="w-embed"></div>
      </div>
      <NavbarSticky3 />
      <main className="main-wrapper">
        <Form2 />
        <div className="w-form w-form-loading">
          <form id="wf-form-Blog-Feed" name="wf-form-Blog-Feed" data-name="Blog Feed" method="get" fs-list-element="filters" data-wf-page-id="68b14387377e2ca4f9b9f5b5" data-wf-element-id="a6d2e1bd-aa40-b9a2-8cdb-b374e7857a32" data-turnstile-sitekey="0x4AAAAAAAQTptj2So4dx43e" aria-label="Blog Feed" onSubmit={(e) => e.preventDefault()}>
            <TheHiddenTruthBehind />
            <Section3 />
            <div></div>
          </form>
          <div className="w-form-done" tabIndex="-1" role="region" aria-label="Blog Feed success">
            <div>Thank you! Your submission has been received!</div>
          </div>
          <div className="w-form-fail" tabIndex="-1" role="region" aria-label="Blog Feed failure">
            <div>Oops! Something went wrong while submitting the form.</div>
          </div>
        </div>
      </main>
      <FooterComponent2 />
    </div>
    </>
  );
}
