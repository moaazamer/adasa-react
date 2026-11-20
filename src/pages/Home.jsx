import { Link } from "react-router-dom";
import Hero from "../components/Hero";
import BlogCard from "../components/BlogCard";
import data from "../data/posts.json";
import Newsletter from "../components/Newsletter";

const categories = [
  ...new Set(data.posts.map((post) => post.category)),
];

const authorsCount = new Set(
  data.posts.map((post) => post.author.name)
).size;

function Home() {
  const featuredPosts = data.posts
    .filter((post) => post.featured)
    .slice(0, 3);

  const latestPosts = [...data.posts]
    .sort((a, b) => b.date.localeCompare(a.date))
    .slice(0, 3);

  return (
    <>
      <Hero />

      <section className="home-stats" aria-label="إحصائيات المدونة">
        <div className="stat-card">
          <strong>{data.posts.length}</strong>
          <span>مقالة</span>
        </div>

        <div className="stat-card">
          <strong>{categories.length}</strong>
          <span>تصنيفات</span>
        </div>

        <div className="stat-card">
          <strong>{authorsCount}</strong>
          <span>كاتب</span>
        </div>
      </section>

      <section className="page-container home-section">
        <div className="section-heading">
          <div>
            <span className="hero-badge">اختياراتنا لك</span>
            <h2>مقالات مميزة</h2>
            <p>محتوى منتقى لبدء رحلة تعلمك.</p>
          </div>

          <Link className="section-link" to="/blog">
            عرض كل المقالات ←
          </Link>
        </div>

        <div className="blog-grid">
          {featuredPosts.map((post) => (
            <BlogCard key={post.id} post={post} />
          ))}
        </div>
      </section>

      <section className="home-categories-section">
        <div className="page-container home-section">
          <div className="blog-heading">
            <span className="hero-badge">التصنيفات</span>
            <h2>استكشف حسب الموضوع</h2>
            <p>اعثر على محتوى يناسب اهتماماتك.</p>
          </div>

          <div className="home-categories">
            {categories.map((category) => {
              const count = data.posts.filter(
                (post) => post.category === category
              ).length;

              return (
                <Link
                  key={category}
                  className="home-category-card"
                  to={`/blog?category=${encodeURIComponent(category)}`}
                >
                  <span className="category-symbol" aria-hidden="true">
                    ◉
                  </span>

                  <h3>{category}</h3>
                  <p>{count} مقالات</p>
                  <span className="category-arrow" aria-hidden="true">
                    ←
                  </span>
                </Link>
              );
            })}
          </div>
        </div>
      </section>

      <section className="latest-section">
        <div className="page-container home-section">
          <div className="section-heading">
            <div>
              <span className="hero-badge">الجديد في عدسة</span>
              <h2>أحدث المقالات</h2>
              <p>تابع أحدث موضوعاتنا في عالم التصوير.</p>
            </div>

            <Link className="section-link" to="/blog">
              تصفّح المدونة ←
            </Link>
          </div>

          <div className="blog-grid">
            {latestPosts.map((post) => (
              <BlogCard key={post.id} post={post} />
            ))}
          </div>
        </div>
      </section>
      <Newsletter/>
    </>
  );
}

export default Home;