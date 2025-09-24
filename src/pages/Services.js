import React from "react";
import "./Page.css";

const Services = () => {
  return (
    <div className="page">
      {/* Services Hero */}
      <section className="page-hero">
        <div className="container">
          <h1 className="page-title">Our Services</h1>
          <p className="page-subtitle">
            Comprehensive web solutions tailored to your business needs.
          </p>
        </div>
      </section>

      {/* Services Grid */}
      <section className="content-section">
        <div className="container">
          <div className="services-grid">
            <div className="service-card">
              <div className="service-icon">🌐</div>
              <h3>Website Design</h3>
              <p>
                Custom website design that reflects your brand and engages your
                audience.
              </p>
              <ul>
                <li>Responsive design</li>
                <li>SEO optimization</li>
                <li>Content management</li>
                <li>Analytics integration</li>
              </ul>
              <div className="service-price">Starting at $999</div>
            </div>

            <div className="service-card featured">
              <div className="featured-badge">Most Popular</div>
              <div className="service-icon">🚀</div>
              <h3>E-commerce Solutions</h3>
              <p>
                Complete online store setup with payment processing and
                inventory management.
              </p>
              <ul>
                <li>Shopping cart functionality</li>
                <li>Payment gateway integration</li>
                <li>Inventory management</li>
                <li>Order tracking</li>
              </ul>
              <div className="service-price">Starting at $2,499</div>
            </div>

            <div className="service-card">
              <div className="service-icon">📱</div>
              <h3>Mobile Apps</h3>
              <p>Native mobile applications for iOS and Android platforms.</p>
              <ul>
                <li>iOS development</li>
                <li>Android development</li>
                <li>Cross-platform solutions</li>
                <li>App store deployment</li>
              </ul>
              <div className="service-price">Starting at $4,999</div>
            </div>

            <div className="service-card">
              <div className="service-icon">🔧</div>
              <h3>Maintenance & Support</h3>
              <p>Ongoing website maintenance and technical support services.</p>
              <ul>
                <li>Regular updates</li>
                <li>Security monitoring</li>
                <li>Performance optimization</li>
                <li>24/7 support</li>
              </ul>
              <div className="service-price">$199/month</div>
            </div>

            <div className="service-card">
              <div className="service-icon">📊</div>
              <h3>Digital Marketing</h3>
              <p>
                Comprehensive digital marketing strategies to grow your online
                presence.
              </p>
              <ul>
                <li>SEO optimization</li>
                <li>Social media marketing</li>
                <li>Content creation</li>
                <li>PPC advertising</li>
              </ul>
              <div className="service-price">Starting at $799/month</div>
            </div>

            <div className="service-card">
              <div className="service-icon">🎨</div>
              <h3>Brand Design</h3>
              <p>
                Complete brand identity design including logos, colors, and
                style guides.
              </p>
              <ul>
                <li>Logo design</li>
                <li>Brand guidelines</li>
                <li>Marketing materials</li>
                <li>Brand strategy</li>
              </ul>
              <div className="service-price">Starting at $1,499</div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="cta-section">
        <div className="container">
          <div className="cta-content">
            <h2>Ready to Get Started?</h2>
            <p>Contact us today for a free consultation and project quote.</p>
            <a href="/contact" className="btn btn-primary">
              Get a Quote
            </a>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Services;
