import A from "../lib/A.jsx";

// post-solution-cta — the section's real markup, read from the rendered page (route /blog/cicis-pizza-customer-story, section 3; shared by 5 routes).
export default function PostSolutionCta2() {
  return (
    <div className="post-solution-cta" data-clone-section="PostSolutionCta2">
      <h3 className="ar-automation-built-for-staffing">Legal</h3>
      <A href="/solution/legal" className="see-the-staffing-solution w-inline-block">
        <div className="text-block-3">See the solution →</div>
      </A>
    </div>
  );
}
