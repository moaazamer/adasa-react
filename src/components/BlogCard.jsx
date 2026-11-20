import { Link } from "react-router-dom";

function BlogCard({ post }) {
  return (
    <article className="blog-card">
      <Link to={`/blog/${post.slug}`} className="blog-card-image">
        <img src={post.image} alt={post.title} loading="lazy" />
        <span className="blog-category">{post.category}</span>
      </Link>

      <div className="blog-card-content">
        <div className="blog-card-meta">
          <span>{post.date}</span>
          <span>{post.readTime}</span>
        </div>

        <h2>
          <Link to={`/blog/${post.slug}`}>{post.title}</Link>
        </h2>

        <p>{post.excerpt}</p>

        <div className="blog-card-footer">
          <div className="blog-author">
            <img
              src={post.author.avatar}
              alt={post.author.name}
              loading="lazy"
            />

            <div>
              <strong>{post.author.name}</strong>
              <span>{post.author.role}</span>
            </div>
          </div>

          <Link
            className="blog-card-arrow"
            to={`/blog/${post.slug}`}
            aria-label={`اقرأ مقال ${post.title}`}
          >
            ←
          </Link>
        </div>
      </div>
    </article>
  );
}

export default BlogCard;