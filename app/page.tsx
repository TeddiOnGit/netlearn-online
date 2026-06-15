import Header from "@/components/Header";
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
            <div className="hero-photo">
              <img
                src="/images/hero.jpg"
                alt="Students learning together in a classroom"
              />
              <div className="float float-1">
                <span className="ic">
                  <LogoMark className="mini-mark" />
                </span>
                <div>
                  Verified NPO
                  <small>302-957</small>
                </div>
              </div>
              <div className="float float-2">
                <span className="ic">🎓</span>
                <div>
                  12,400+ learners
                  <small>and counting</small>
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
              <div className="card-photo">
                <img src="/images/resources.jpg" alt="Books and learning materials" />
              </div>
              <div className="card-body">
                <div className="ic">📚</div>
                <h3>Learning Resources</h3>
                <p>
                  Free study guides, e-learning content and exam preparation
                  materials, accessible to every learner regardless of
                  background.
                </p>
              </div>
            </article>
            <article className="card">
              <div className="card-photo">
                <img src="/images/mentorship.jpg" alt="A teacher with a class of students" />
              </div>
              <div className="card-body">
                <div className="ic">🤝</div>
                <h3>Mentorship Network</h3>
                <p>
                  Connecting students with mentors and tutors who provide
                  guidance, encouragement and academic support all year round.
                </p>
              </div>
            </article>
            <article className="card">
              <div className="card-photo">
                <img src="/images/digital.jpg" alt="A learner using a laptop with headphones" />
              </div>
              <div className="card-body">
                <div className="ic">💻</div>
                <h3>Digital Access</h3>
                <p>
                  Bridging the digital divide by equipping learning centres with
                  devices, connectivity and digital-literacy training.
                </p>
              </div>
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
          <div className="head">
            <span className="tag">Our impact</span>
            <h2>Measurable change, year after year</h2>
          </div>
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

      {/* ---------------- Mission (split) ---------------- */}
      <section className="mission" id="mission">
        <div className="container split">
          <div className="split-photo">
            <img src="/images/mission.jpg" alt="Students collaborating over a laptop" />
          </div>
          <div className="split-text">
            <span className="tag">Our mission</span>
            <h2>Every learner deserves the chance to thrive</h2>
            <p>
              As a registered non-profit organisation, Netlearn exists to make
              quality education accessible to all. We invest directly into
              programmes, resources and mentorship — meeting learners where they
              are and walking with them toward their potential.
            </p>
            <ul className="ticks">
              <li>Resources that reach under-served communities</li>
              <li>Mentors who stay through the whole journey</li>
              <li>Transparent stewardship — 97% straight to programmes</li>
            </ul>
          </div>
        </div>
      </section>

      {/* ---------------- Contact ---------------- */}
      <section className="contact" id="contact">
        <div className="container">
          <div className="head">
            <span className="tag">Get in touch</span>
            <h2>We&apos;d love to hear from you</h2>
            <p>
              Whether you&apos;re a school, donor, volunteer or learner — reach
              out and let&apos;s expand access to education together.
            </p>
          </div>
          <div className="contact-cards">
            <div className="contact-card">
              <span className="ic">✉</span>
              <h4>Email</h4>
              <p>hello@netlearn.online</p>
            </div>
            <div className="contact-card">
              <span className="ic">☎</span>
              <h4>Phone</h4>
              <p>+27 00 000 0000</p>
            </div>
            <div className="contact-card">
              <span className="ic">📍</span>
              <h4>Location</h4>
              <p>South Africa</p>
            </div>
          </div>
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
              <h4>Explore</h4>
              <ul>
                <li><a href="#about">About Us</a></li>
                <li><a href="#programs">Programs</a></li>
                <li><a href="#impact">Our Impact</a></li>
                <li><a href="#mission">Mission</a></li>
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
