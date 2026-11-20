import { Link } from "react-router-dom";

function NotFound() {
  return (
    <section className="page-container">
      <h1>404</h1>
      <p>عذرًا، الصفحة التي تبحث عنها غير موجودة.</p>

      <Link className="explore-button" to="/">
        العودة للرئيسية
      </Link>
    </section>
  );
}

export default NotFound;