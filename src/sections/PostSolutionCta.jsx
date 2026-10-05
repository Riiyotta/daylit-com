import A from "../lib/A.jsx";

// post-solution-cta — the section's real markup, read from the rendered page (route /blog/how-chemical-companies-use-daylit-to-unlock-working-capital, section 3; shared by 3 routes).
export default function PostSolutionCta() {
  return (
    <div className="post-solution-cta" data-clone-section="PostSolutionCta">
      <h3 className="ar-automation-built-for-staffing">Manufacturing</h3>
      <A href="/solution/manufacturing" className="see-the-staffing-solution w-inline-block">
        <div className="text-block-3">See the solution →</div>
      </A>
    </div>
  );
}
