import React, { useState } from "react";
import "./Page.css";

const Contact = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    company: "",
    message: "",
  });

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    alert("Thank you for your message! We'll get back to you soon.");
    setFormData({ name: "", email: "", company: "", message: "" });
  };

  return (
    <div className="page">
      {/* Contact Hero */}
      <section className="page-hero">
        <div className="container">
          <h1 className="page-title">Get in Touch</h1>
          <p className="page-subtitle">
            Ready to start your project? Let's discuss how we can help bring
            your vision to life.
          </p>
        </div>
      </section>

      {/* Contact Content */}
      <section className="content-section">
        <div className="container">
          <div className="contact-grid">
            {/* Contact Form */}
            <div className="contact-form-container">
              <h2>Send us a Message</h2>
              <form className="contact-form" onSubmit={handleSubmit}>
                <div className="form-row">
                  <div className="form-group">
                    <label htmlFor="name">Name *</label>
                    <input
                      type="text"
                      id="name"
                      name="name"
                      value={formData.name}
                      onChange={handleChange}
                      required
                    />
                  </div>
                  <div className="form-group">
                    <label htmlFor="email">Email *</label>
                    <input
                      type="email"
                      id="email"
                      name="email"
                      value={formData.email}
                      onChange={handleChange}
                      required
                    />
                  </div>
                </div>
                <div className="form-group">
                  <label htmlFor="company">Company</label>
                  <input
                    type="text"
                    id="company"
                    name="company"
                    value={formData.company}
                    onChange={handleChange}
                  />
                </div>
                <div className="form-group">
                  <label htmlFor="message">Message *</label>
                  <textarea
                    id="message"
                    name="message"
                    rows="5"
                    value={formData.message}
                    onChange={handleChange}
                    required
                  ></textarea>
                </div>
                <button type="submit" className="btn btn-primary full-width">
                  Send Message
                </button>
              </form>
            </div>

            {/* Contact Info */}
            <div className="contact-info">
              <h2>Let's Talk</h2>
              <p>
                We're here to help you create something amazing. Reach out using
                any of the methods below.
              </p>

              <div className="contact-methods">
                <div className="contact-method">
                  <div className="method-icon">📧</div>
                  <div className="method-content">
                    <h4>Email</h4>
                    <p>hello@webflowsim.com</p>
                  </div>
                </div>

                <div className="contact-method">
                  <div className="method-icon">📞</div>
                  <div className="method-content">
                    <h4>Phone</h4>
                    <p>+1 (555) 123-4567</p>
                  </div>
                </div>

                <div className="contact-method">
                  <div className="method-icon">📍</div>
                  <div className="method-content">
                    <h4>Office</h4>
                    <p>
                      123 Design Street
                      <br />
                      San Francisco, CA 94103
                    </p>
                  </div>
                </div>

                <div className="contact-method">
                  <div className="method-icon">⏰</div>
                  <div className="method-content">
                    <h4>Business Hours</h4>
                    <p>
                      Mon - Fri: 9:00 AM - 6:00 PM
                      <br />
                      Sat - Sun: Closed
                    </p>
                  </div>
                </div>
              </div>

              <div className="social-links">
                <h4>Follow Us</h4>
                <div className="social-icons">
                  <a href="#" className="social-icon">
                    Twitter
                  </a>
                  <a href="#" className="social-icon">
                    LinkedIn
                  </a>
                  <a href="#" className="social-icon">
                    Instagram
                  </a>
                  <a href="#" className="social-icon">
                    Dribbble
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="content-section alt-bg">
        <div className="container">
          <h2 className="section-title">Frequently Asked Questions</h2>
          <div className="faq-grid">
            <div className="faq-item">
              <h4>How long does a typical project take?</h4>
              <p>
                Project timelines vary based on complexity, but most websites
                take 2-6 weeks to complete.
              </p>
            </div>
            <div className="faq-item">
              <h4>Do you provide ongoing support?</h4>
              <p>
                Yes! We offer maintenance packages and ongoing support for all
                our projects.
              </p>
            </div>
            <div className="faq-item">
              <h4>Can you work with our existing brand?</h4>
              <p>
                Absolutely. We can work with your existing brand guidelines or
                help you develop new ones.
              </p>
            </div>
            <div className="faq-item">
              <h4>What's included in your pricing?</h4>
              <p>
                Our pricing includes design, development, basic SEO setup, and
                initial training.
              </p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Contact;
