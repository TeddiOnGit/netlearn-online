import Header from "@/components/Header";
import Logo from "@/components/Logo";
import LogoMark from "@/components/LogoMark";

export default function Home() {
  return (
    <>
      <Header />

      {/* ---------------- Hero ---------------- */}
      <section className="hero" id="top">
        <span className="glow glow-1" />
        <span className="glow glow-2" />
        <div className="container hero-grid">
          <div>
            <span className="eyebrow">
              <span className="pulse" /> Registered Non-Profit · NPO 302-957
            </span>
            <h1>
              Empowering tomorrow,{" "}
              <span className="text-grad">today</span>
            </h1>
            <p className="lead">
              Netlearn partners with schools, communities and donors to deliver
              learning resources, mentorship and digital access to the learners
              who need it most — building a foundation for lifelong opportunity.
            </p>
            <div className="hero-actions">
              <a href="#donate" className="btn btn-primary">
                Support Our Mission
              </a>
              <a href="#programs" className="btn btn-ghost">
                Explore Programs
              </a>
            </div>
            <div className="hero-stats">
              <div>
                <div className="num text-grad">12,400+</div>
                <div className="lbl">Learners reached</div>
              </div>
              <div>
                <div className="num text-grad">86</div>
                <div className="lbl">Partner schools</div>
              </div>
              <div>
                <div className="num text-grad">97%</div>
                <div className="lbl">Funds to programs</div>
              </div>
            </div>
          </div>

          <div className="hero-visual">
            <div className="hero-card">
              <div className="logo-stage">
                <Logo variant="light" />
              </div>
              <div className="float float-1">
                <span className="ic">🎓</span>
                <div>
                  Curriculum Support
                  <small>Free study resources</small>
                </div>
              </div>
              <div className="float float-2">
                <span className="ic">✓</span>
                <div>
                  Verified NPO
                  <small>302-957</small>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ---------------- About ---------------- */}
      <section className="about" id="about">
        <div className="container">
          <div className="head">
            <span className="tag">Who we are</span>
            <h2>Education support, designed for real impact</h2>
            <p>
              Netlearn is a registered non-profit organisation committed to
              closing the education gap — giving learners, teachers and families
              the tools and support they need to thrive.
            </p>
          </div>
          <div className="cards-3">
            <article className="card">
              <div className="ic">📚</div>
              <h3>Learning Resources</h3>
              <p>
                Free study guides, e-learning content and exam preparation
                materials, accessible to every learner regardless of background.
              </p>
            </article>
            <article className="card">
              <div className="ic">🤝</div>
              <h3>Mentorship Network</h3>
              <p>
                Connecting students with mentors and tutors who provide
                guidance, encouragement and academic support all year round.
              </p>
            </article>
            <article className="card">
              <div className="ic">💻</div>
              <h3>Digital Access</h3>
              <p>
                Bridging the digital divide by equipping learning centres with
                devices, connectivity and digital-literacy training.
              </p>
            </article>
          </div>
        </div>
      </section>

      {/* ---------------- Programs ---------------- */}
      <section className="programs" id="programs">
        <div className="container">
          <div className="head">
            <span className="tag" style={{ color: "var(--cyan)" }}>
              What we do
            </span>
            <h2>Programs built around the learner</h2>
            <p>
              Every initiative is designed with educators and communities so
              support is relevant, sustainable and measurable.
            </p>
          </div>
          <div className="cards-4">
            <article className="pcard">
              <div className="num">01</div>
              <h3>After-School Tutoring</h3>
              <p>
                Structured sessions in core subjects, helping learners build
                confidence and close knowledge gaps.
              </p>
            </article>
            <article className="pcard">
              <div className="num">02</div>
              <h3>Scholarship Fund</h3>
              <p>
                Support covering school fees, uniforms and materials for
                promising students in need.
              </p>
            </article>
            <article className="pcard">
              <div className="num">03</div>
              <h3>Teacher Training</h3>
              <p>
                Workshops equipping educators with modern teaching methods and
                digital resources.
              </p>
            </article>
            <article className="pcard">
              <div className="num">04</div>
              <h3>Community Libraries</h3>
              <p>
                Establishing and stocking reading spaces that nurture a lifelong
                love of learning.
              </p>
            </article>
          </div>
        </div>
      </section>

      {/* ---------------- Impact ---------------- */}
      <section className="impact" id="impact">
        <div className="container">
          <div className="impact-band">
            <div>
              <div className="num">12,400+</div>
              <div className="lbl">Learners supported</div>
            </div>
            <div>
              <div className="num">86</div>
              <div className="lbl">Partner schools</div>
            </div>
            <div>
              <div className="num">340</div>
              <div className="lbl">Active volunteers</div>
            </div>
            <div>
              <div className="num">97%</div>
              <div className="lbl">Donations to programs</div>
            </div>
          </div>
        </div>
      </section>

      {/* ---------------- Donate ---------------- */}
      <section className="donate" id="donate">
        <div className="container">
          <div className="donate-box">
            <div>
              <h2>Your support changes a learner&apos;s story</h2>
              <p>
                As a registered non-profit (NPO 302-957), every donation is
                reinvested directly into education programs, resources and
                mentorship for the communities we serve.
              </p>
            </div>
            <div className="donate-actions">
              <a href="#contact" className="btn btn-primary">
                Make a Donation
              </a>
              <a href="#contact" className="btn btn-ghost">
                Become a Partner
              </a>
              <p className="npo-note">
                Netlearn · Registered Non-Profit Organisation · NPO 302-957
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* ---------------- Contact ---------------- */}
      <section className="contact" id="contact">
        <div className="container contact-grid">
          <div className="contact-info">
            <span className="tag">Get in touch</span>
            <h2>We&apos;d love to hear from you</h2>
            <p>
              Whether you&apos;re a school, donor, volunteer or learner — reach
              out and let&apos;s expand access to education together.
            </p>
            <ul className="contact-list">
              <li>
                <span className="ic">✉</span> hello@netlearn.online
              </li>
              <li>
                <span className="ic">☎</span> +27 00 000 0000
              </li>
              <li>
                <span className="ic">📍</span> South Africa
              </li>
            </ul>
          </div>
          <form>
            <div className="field">
              <label htmlFor="name">Full Name</label>
              <input id="name" name="name" type="text" placeholder="Your name" />
            </div>
            <div className="field">
              <label htmlFor="email">Email Address</label>
              <input
                id="email"
                name="email"
                type="email"
                placeholder="you@example.com"
              />
            </div>
            <div className="field">
              <label htmlFor="message">Message</label>
              <textarea
                id="message"
                name="message"
                rows={4}
                placeholder="How can we help?"
              />
            </div>
            <button type="submit" className="btn btn-primary">
              Send Message
            </button>
          </form>
        </div>
      </section>

      {/* ---------------- Footer ---------------- */}
      <footer className="footer">
        <div className="container">
          <div className="footer-grid">
            <div className="footer-brand">
              <a href="#top" className="brand">
                <LogoMark className="mark" />
                <span className="name">
                  Net<b className="text-grad">learn</b>
                </span>
              </a>
              <p>
                A registered non-profit organisation dedicated to expanding
                access to quality education and learning support across
                communities.
              </p>
            </div>
            <div>
              <h4>Quick Links</h4>
              <ul>
                <li><a href="#about">About Us</a></li>
                <li><a href="#programs">Programs</a></li>
                <li><a href="#impact">Our Impact</a></li>
                <li><a href="#donate">Donate</a></li>
              </ul>
            </div>
            <div>
              <h4>Contact</h4>
              <ul>
                <li>hello@netlearn.online</li>
                <li>+27 00 000 0000</li>
                <li>South Africa</li>
              </ul>
            </div>
          </div>
          <div className="footer-bottom">
            <span>© 2026 Netlearn. All rights reserved.</span>
            <span className="npo">
              Registered Non-Profit Organisation · NPO 302-957
            </span>
          </div>
        </div>
      </footer>
    </>
  );
}
