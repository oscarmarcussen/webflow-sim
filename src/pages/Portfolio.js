import React from "react";
import "./Page.css";

const Portfolio = () => {
  const projects = [
    {
      id: 1,
      title: "TechStart Landing Page",
      category: "Landing Page",
      description:
        "Modern landing page for a tech startup with smooth animations and mobile-first design.",
      tags: ["React", "Animation", "Responsive"],
    },
    {
      id: 2,
      title: "EcoShop E-commerce",
      category: "E-commerce",
      description:
        "Sustainable products online store with advanced filtering and cart functionality.",
      tags: ["E-commerce", "Sustainability", "UX"],
    },
    {
      id: 3,
      title: "Creative Agency Portfolio",
      category: "Portfolio",
      description:
        "Stunning portfolio website showcasing creative work with interactive galleries.",
      tags: ["Portfolio", "Creative", "Interactive"],
    },
    {
      id: 4,
      title: "HealthCare Dashboard",
      category: "Web App",
      description:
        "Administrative dashboard for healthcare professionals with data visualization.",
      tags: ["Dashboard", "Healthcare", "Data Viz"],
    },
    {
      id: 5,
      title: "Restaurant Website",
      category: "Business",
      description:
        "Elegant restaurant website with online reservations and menu showcase.",
      tags: ["Restaurant", "Booking", "Food"],
    },
    {
      id: 6,
      title: "Education Platform",
      category: "Platform",
      description:
        "Online learning platform with course management and student progress tracking.",
      tags: ["Education", "Learning", "Progress"],
    },
  ];

  return (
    <div className="page">
      {/* Portfolio Hero */}
      <section className="page-hero">
        <div className="container">
          <h1 className="page-title">Our Portfolio</h1>
          <p className="page-subtitle">
            Discover the amazing websites and applications we've built for our
            clients.
          </p>
        </div>
      </section>

      {/* Filter Tabs */}
      <section className="content-section">
        <div className="container">
          <div className="filter-tabs">
            <button className="filter-tab active">All Projects</button>
            <button className="filter-tab">Landing Pages</button>
            <button className="filter-tab">E-commerce</button>
            <button className="filter-tab">Web Apps</button>
            <button className="filter-tab">Portfolios</button>
          </div>

          {/* Portfolio Grid */}
          <div className="portfolio-grid">
            {projects.map((project) => (
              <div key={project.id} className="portfolio-item">
                <div className="portfolio-image">
                  <div className="image-placeholder">
                    <div className="placeholder-content">Project Image</div>
                  </div>
                  <div className="portfolio-overlay">
                    <button className="view-btn">View Project</button>
                  </div>
                </div>
                <div className="portfolio-content">
                  <div className="portfolio-category">{project.category}</div>
                  <h3 className="portfolio-title">{project.title}</h3>
                  <p className="portfolio-description">{project.description}</p>
                  <div className="portfolio-tags">
                    {project.tags.map((tag, index) => (
                      <span key={index} className="tag">
                        {tag}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="stats alt-bg">
        <div className="container">
          <div className="stats-grid">
            <div className="stat">
              <div className="stat-number">150+</div>
              <div className="stat-label">Projects Completed</div>
            </div>
            <div className="stat">
              <div className="stat-number">98%</div>
              <div className="stat-label">Client Satisfaction</div>
            </div>
            <div className="stat">
              <div className="stat-number">50+</div>
              <div className="stat-label">Industries Served</div>
            </div>
            <div className="stat">
              <div className="stat-number">24h</div>
              <div className="stat-label">Average Response Time</div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Portfolio;
