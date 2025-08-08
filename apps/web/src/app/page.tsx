import LoginForm from "../components/forms/authentication/login.form";

export default function Page() {
  return (
    <>
      <header>
        <nav>
          <div className="logo"></div>
          <ul className="nav-links"></ul>
          <div className="nav-cta"></div>
        </nav>
      </header>

      <section id="hero">
        <LoginForm />
        <h1 className="headline"></h1>
        <p className="subheadline"></p>
        <div className="hero-cta"></div>
        <div className="hero-media"></div>
      </section>

      <section id="problem-solution">
        <h2 className="section-title"></h2>
        <p className="problem-description"></p>
        <p className="solution-description"></p>
      </section>

      <section id="features">
        <h2 className="section-title"></h2>
        <div className="feature-list"></div>
      </section>

      <section id="demo">
        <h2 className="section-title"></h2>
        <div className="demo-media"></div>
      </section>

      <section id="social-proof">
        <div className="testimonials"></div>
        <div className="company-logos"></div>
      </section>

      <section id="pricing">
        <h2 className="section-title"></h2>
        <div className="pricing-plans"></div>
      </section>

      <section id="integrations">
        <h2 className="section-title"></h2>
        <div className="integration-logos"></div>
      </section>

      <section id="faqs">
        <h2 className="section-title"></h2>
        <div className="faq-list"></div>
      </section>

      <section id="final-cta">
        <h2 className="section-title"></h2>
        <p className="cta-subtext"></p>
        <div className="cta-button"></div>
      </section>

      <footer>
        <div className="footer-logo"></div>
        <div className="footer-links"></div>
        <div className="social-links"></div>
        <div className="legal-links"></div>
        <div className="contact-info"></div>
      </footer>
    </>
  );
}
