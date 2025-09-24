import React from "react";
import "./Page.css";

const Home = () => {
  return (
    <div className="page">
      {/* Hero Section */}
      <section className="hero">
        <div className="container">
          <div className="hero-content">
            <h1 className="hero-title">
              Build Amazing Websites
              <span className="highlight"> Without Code</span>
            </h1>
            <p className="hero-subtitle">
              Create professional, responsive websites with our intuitive
              drag-and-drop builder. No coding required, endless possibilities.
            </p>
            <div className="hero-cta">
              <a href="/contact" className="btn btn-primary">
                Start Building
              </a>
              <a href="/portfolio" className="btn btn-secondary">
                View Examples
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="features">
        <div className="container">
          <h2 className="section-title">Why Choose WebflowSim?</h2>
          <div className="features-grid">
            <div className="feature-card">
              <div className="feature-icon">🎨</div>
              <h3>Visual Design</h3>
              <p>
                Design with complete visual control. What you see is what you
                get.
              </p>
            </div>
            <div className="feature-card">
              <div className="feature-icon">📱</div>
              <h3>Responsive</h3>
              <p>
                Every site automatically adapts to mobile, tablet, and desktop.
              </p>
            </div>
            <div className="feature-card">
              <div className="feature-icon">⚡</div>
              <h3>Fast Loading</h3>
              <p>Optimized code and hosting for lightning-fast performance.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="stats">
        <div className="container">
          <div className="stats-grid">
            <div className="stat">
              <div className="stat-number">10M+</div>
              <div className="stat-label">Websites Created</div>
            </div>
            <div className="stat">
              <div className="stat-number">500K+</div>
              <div className="stat-label">Happy Users</div>
            </div>
            <div className="stat">
              <div className="stat-number">99.9%</div>
              <div className="stat-label">Uptime</div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Home;
