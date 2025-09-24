import React from "react";
import "./Page.css";

const About = () => {
  return (
    <div className="page">
      {/* About Hero */}
      <section className="page-hero">
        <div className="container">
          <h1 className="page-title">About WebflowSim</h1>
          <p className="page-subtitle">
            We're on a mission to democratize web design and empower everyone to
            create beautiful websites.
          </p>
        </div>
      </section>

      {/* Story Section */}
      <section className="content-section">
        <div className="container">
          <div className="two-column">
            <div className="column">
              <h2>Our Story</h2>
              <p>
                Founded in 2023, WebflowSim emerged from a simple belief:
                everyone should be able to create professional websites without
                needing to learn complex code.
              </p>
              <p>
                Our team of designers and developers worked tirelessly to create
                a platform that combines the power of code with the simplicity
                of visual design.
              </p>
            </div>
            <div className="column">
              <div className="image-placeholder">
                <div className="placeholder-content">Team Photo</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Mission Section */}
      <section className="content-section alt-bg">
        <div className="container">
          <div className="centered-content">
            <h2>Our Mission</h2>
            <p className="large-text">
              To empower creators, entrepreneurs, and businesses of all sizes to
              bring their digital visions to life without technical barriers.
            </p>
          </div>
        </div>
      </section>

      {/* Team Section */}
      <section className="content-section">
        <div className="container">
          <h2 className="section-title">Meet the Team</h2>
          <div className="team-grid">
            <div className="team-member">
              <div className="member-photo"></div>
              <h3>Sarah Johnson</h3>
              <p>CEO & Founder</p>
            </div>
            <div className="team-member">
              <div className="member-photo"></div>
              <h3>Mike Chen</h3>
              <p>CTO</p>
            </div>
            <div className="team-member">
              <div className="member-photo"></div>
              <h3>Emily Rodriguez</h3>
              <p>Head of Design</p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default About;
