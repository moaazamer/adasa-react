import { useState } from "react";
import data from "../data/posts.json";
import BlogCard from "../components/BlogCard";
import { useSearchParams } from "react-router-dom";

const categories = [
  "الكل",
  ...new Set(data.posts.map((post) => post.category)),
];

const postsPerPage = 6;

function Blog() {
 const [searchParams, setSearchParams] = useSearchParams();
const [search, setSearch] = useState("");

const categoryFromUrl = searchParams.get("category");

const selectedCategory = categories.includes(categoryFromUrl)
  ? categoryFromUrl
  : "الكل";

function setSelectedCategory(category) {
  setSearchParams(
    category === "الكل" ? {} : { category },
    { replace: true }
  );
}
  const [view, setView] = useState("grid");
  const [currentPage, setCurrentPage] = useState(1);

  const searchText = search.trim().toLowerCase();

  const filteredPosts = data.posts.filter((post) => {
    const matchesSearch =
      post.title.toLowerCase().includes(searchText) ||
      post.excerpt.toLowerCase().includes(searchText);

    const matchesCategory =
      selectedCategory === "الكل" ||
      post.category === selectedCategory;

    return matchesSearch && matchesCategory;
  });

  const totalPages = Math.ceil(filteredPosts.length / postsPerPage);
  const startIndex = (currentPage - 1) * postsPerPage;

  const visiblePosts = filteredPosts.slice(
    startIndex,
    startIndex + postsPerPage
  );

  function resetFilters() {
    setSearch("");
    setSelectedCategory("الكل");
    setCurrentPage(1);
  }

  return (
    <section className="page-container">
      <div className="blog-heading">
        <span className="hero-badge">مدونتنا</span>

        <h1>
          استكشف <span>المقالات</span>
        </h1>

        <p>نصائح وخبرات تلهمك لتطوير مهاراتك في التصوير.</p>
      </div>

      <div className="blog-filters">
        <input
          className="blog-search"
          type="search"
          placeholder="ابحث عن مقال..."
          aria-label="ابحث عن مقال"
          value={search}
          onChange={(event) => {
            setSearch(event.target.value);
            setCurrentPage(1);
          }}
        />

        <div className="category-filters">
          {categories.map((category) => (
            <button
              key={category}
              type="button"
              className={
                selectedCategory === category
                  ? "category-button selected"
                  : "category-button"
              }
              aria-pressed={selectedCategory === category}
              onClick={() => {
                setSelectedCategory(category);
                setCurrentPage(1);
              }}
            >
              {category}
            </button>
          ))}
        </div>
      </div>

      <div className="blog-toolbar">
        <p className="results-count" role="status">
          {filteredPosts.length > 0
            ? `عرض ${startIndex + 1}–${
                startIndex + visiblePosts.length
              } من ${filteredPosts.length} مقال`
            : "عدد المقالات: 0"}
        </p>

        <div className="view-switch" role="group" aria-label="طريقة العرض">
          <button
            type="button"
            className={view === "grid" ? "view-button selected" : "view-button"}
            aria-pressed={view === "grid"}
            onClick={() => setView("grid")}
          >
            شبكة ▦
          </button>

          <button
            type="button"
            className={view === "list" ? "view-button selected" : "view-button"}
            aria-pressed={view === "list"}
            onClick={() => setView("list")}
          >
            قائمة ☰
          </button>
        </div>
      </div>

      {filteredPosts.length > 0 ? (
        <>
          <div className={view === "grid" ? "blog-grid" : "blog-list"}>
            {visiblePosts.map((post) => (
              <BlogCard key={post.id} post={post} />
            ))}
          </div>

          {totalPages > 1 && (
            <nav className="pagination" aria-label="صفحات المقالات">
              <button
                type="button"
                disabled={currentPage === 1}
                onClick={() => setCurrentPage(currentPage - 1)}
              >
                السابق
              </button>

              {Array.from({ length: totalPages }, (_, index) => {
                const pageNumber = index + 1;

                return (
                  <button
                    key={pageNumber}
                    type="button"
                    className={currentPage === pageNumber ? "selected" : ""}
                    aria-label={`الصفحة ${pageNumber}`}
                    aria-current={
                      currentPage === pageNumber ? "page" : undefined
                    }
                    onClick={() => setCurrentPage(pageNumber)}
                  >
                    {pageNumber}
                  </button>
                );
              })}

              <button
                type="button"
                disabled={currentPage === totalPages}
                onClick={() => setCurrentPage(currentPage + 1)}
              >
                التالي
              </button>
            </nav>
          )}
        </>
      ) : (
        <div className="empty-state">
          <h2>لا توجد مقالات مطابقة</h2>
          <p>جرّب كلمة بحث مختلفة أو اختار تصنيفًا آخر.</p>

          <button
            className="reset-filters"
            type="button"
            onClick={resetFilters}
          >
            عرض كل المقالات
          </button>
        </div>
      )}
    </section>
  );
}

export default Blog;