import { Link } from "react-router-dom";
function Hero() {
  return (
    <section className="hero">
      <span className="hero-badge">مرحبًا بك في عدسة</span>

      <h1>
        اكتشف <span>فن</span>
        <br />
        التصوير الفوتوغرافي
      </h1>

      <p>
        انغمس في أسرار المحترفين ونصائح عملية لتطوير مهاراتك في التصوير.
      </p>
<Link className="explore-button" to="/blog">
  استكشف المقالات ←
</Link>
    </section>
  );
}

export default Hero;