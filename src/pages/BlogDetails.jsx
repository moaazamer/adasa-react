import { useEffect } from "react";
import { Link, useParams } from "react-router-dom";
import data from "../data/posts.json";
import BlogCard from "../components/BlogCard";
import NotFound from "./NotFound";

function BlogDetails() {
  const { slug } = useParams();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [slug]);

  const post = data.posts.find((item) => item.slug === slug);

  if (!post) {
    return <NotFound />;
  }

  const relatedPosts = data.posts
    .filter(
      (item) => item.category === post.category && item.id !== post.id
    )
    .slice(0, 3);

  return (
    <div className="page-container article-page">
      <nav className="article-breadcrumb" aria-label="مسار الصفحة">
        <Link to="/">الرئيسية</Link>
        <span>/</span>
        <Link to="/blog">المدونة</Link>
        <span>/</span>
        <span>{post.category}</span>
      </nav>

      <article>
        <header className="article-header">
          <span className="hero-badge">{post.category}</span>

          <h1>{post.title}</h1>

          <p className="article-excerpt">{post.excerpt}</p>

          <div className="article-meta">
            <div className="blog-author">
              <img
                src={post.author.avatar}
                alt={post.author.name}
              />

              <div>
                <strong>{post.author.name}</strong>
                <span>{post.author.role}</span>
              </div>
            </div>

            <time dateTime={post.date}>{post.date}</time>
            <span>{post.readTime}</span>
          </div>
        </header>

        <img
          className="article-cover"
          src={post.image}
          alt={post.title}
        />

        <div className="article-body">
          {post.content.split(/\r?\n/).map((line, index) => {
            const text = line.trim();

            if (!text) {
              return null;
            }

            if (text.startsWith("### ")) {
              return <h3 key={index}>{text.slice(4)}</h3>;
            }

            if (text.startsWith("## ")) {
              return <h2 key={index}>{text.slice(3)}</h2>;
            }

            return <p key={index}>{text}</p>;
          })}
        </div>

        <div className="article-tags">
          {(post.tags ?? []).map((tag) => (
            <span key={tag}>#{tag}</span>
          ))}
        </div>

        <div className="article-back">
          <Link className="explore-button" to="/blog">
            العودة إلى المقالات
          </Link>
        </div>
      </article>

      {relatedPosts.length > 0 && (
        <section className="related-posts">
          <h2>مقالات قد تعجبك</h2>

          <div className="blog-grid">
            {relatedPosts.map((relatedPost) => (
              <BlogCard key={relatedPost.id} post={relatedPost} />
            ))}
          </div>
        </section>
      )}
    </div>
  );
}

export default BlogDetails;