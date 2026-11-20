import { Link } from "react-router-dom";

function Footer() {
  return (
    <footer className="site-footer">
      <div className="footer-content">
        <div className="footer-brand">
          <Link className="logo" to="/">
            عدسة<span>.</span>
          </Link>

          <p>
            مساحة لعشاق التصوير، نشارك فيها المعرفة والإلهام
            لنساعدك على التقاط صور تحكي قصتك.
          </p>
        </div>

        <nav className="footer-links" aria-label="روابط أسفل الصفحة">
          <h2>استكشف</h2>
          <Link to="/">الرئيسية</Link>
          <Link to="/blog">المدونة</Link>
        </nav>

        <div className="footer-about">
          <h2>كل صورة لها حكاية</h2>
          <p>
            اكتشف تقنيات التصوير والإضاءة والتكوين، وابدأ رحلتك
            نحو صور أكثر إبداعًا.
          </p>
        </div>
      </div>

      <div className="footer-bottom">
        © {new Date().getFullYear()} عدسة. جميع الحقوق محفوظة.
      </div>
    </footer>
  );
}

export default Footer;