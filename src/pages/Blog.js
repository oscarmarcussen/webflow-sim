import React from "react";
import "./Page.css";

const Blog = () => {
  const blogPosts = [
    {
      id: 1,
      title: "10 Web Design Trends That Will Dominate 2024",
      excerpt:
        "Discover the latest web design trends that are shaping the digital landscape this year.",
      date: "March 15, 2024",
      category: "Design",
      readTime: "5 min read",
    },
    {
      id: 2,
      title: "How to Optimize Your Website for Mobile Users",
      excerpt:
        "Essential tips and strategies to ensure your website performs perfectly on mobile devices.",
      date: "March 10, 2024",
      category: "Development",
      readTime: "7 min read",
    },
    {
      id: 3,
      title: "The Psychology of Color in Web Design",
      excerpt:
        "Understanding how colors affect user behavior and conversion rates on your website.",
      date: "March 5, 2024",
      category: "Psychology",
      readTime: "6 min read",
    },
    {
      id: 4,
      title: "SEO Best Practices for Modern Websites",
      excerpt:
        "A comprehensive guide to improving your website's search engine visibility in 2024.",
      date: "February 28, 2024",
      category: "SEO",
      readTime: "8 min read",
    },
    {
      id: 5,
      title: "Building Accessible Websites: A Complete Guide",
      excerpt:
        "Learn how to create inclusive web experiences that work for users of all abilities.",
      date: "February 20, 2024",
      category: "Accessibility",
      readTime: "10 min read",
    },
    {
      id: 6,
      title: "The Future of No-Code Development",
      excerpt:
        "Exploring how no-code platforms are revolutionizing the way we build websites and applications.",
      date: "February 15, 2024",
      category: "Technology",
      readTime: "6 min read",
    },
  ];

  return (
    <div className="page">
      {/* Blog Hero */}
      <section className="page-hero">
        <div className="container">
          <h1 className="page-title">Our Blog</h1>
          <p className="page-subtitle">
            Stay updated with the latest insights, trends, and tips from the
            world of web design and development.
          </p>
        </div>
      </section>

      {/* Featured Post */}
      <section className="content-section">
        <div className="container">
          <div className="featured-post">
            <div className="featured-image">
              <div className="image-placeholder">
                <div className="placeholder-content">
                  Featured Article Image
                </div>
              </div>
            </div>
            <div className="featured-content">
              <div className="post-meta">
                <span className="category featured">Featured</span>
                <span className="date">March 15, 2024</span>
                <span className="read-time">5 min read</span>
              </div>
              <h2 className="featured-title">
                10 Web Design Trends That Will Dominate 2024
              </h2>
              <p className="featured-excerpt">
                The web design landscape is constantly evolving, and 2024 brings
                exciting new trends that will shape how we create digital
                experiences. From bold typography to immersive animations,
                discover what's trending this year.
              </p>
              <a href="#" className="btn btn-primary">
                Read Full Article
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Blog Grid */}
      <section className="content-section alt-bg">
        <div className="container">
          <h2 className="section-title">Latest Articles</h2>
          <div className="blog-grid">
            {blogPosts.slice(1).map((post) => (
              <article key={post.id} className="blog-card">
                <div className="blog-image">
                  <div className="image-placeholder">
                    <div className="placeholder-content">Article Image</div>
                  </div>
                </div>
                <div className="blog-content">
                  <div className="post-meta">
                    <span className="category">{post.category}</span>
                    <span className="date">{post.date}</span>
                    <span className="read-time">{post.readTime}</span>
                  </div>
                  <h3 className="blog-title">{post.title}</h3>
                  <p className="blog-excerpt">{post.excerpt}</p>
                  <a href="#" className="read-more">
                    Read More →
                  </a>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* Newsletter Signup */}
      <section className="newsletter-section">
        <div className="container">
          <div className="newsletter-content">
            <h2>Stay in the Loop</h2>
            <p>
              Get the latest articles and insights delivered directly to your
              inbox.
            </p>
            <form className="newsletter-form">
              <input
                type="email"
                placeholder="Enter your email address"
                className="newsletter-input"
              />
              <button type="submit" className="btn btn-primary">
                Subscribe
              </button>
            </form>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Blog;
