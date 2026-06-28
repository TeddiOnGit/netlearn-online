import Header from "@/components/Header";
import LogoMark from "@/components/LogoMark";
import Icon from "@/components/Icon";

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
              From classroom to{" "}
              <span className="text-grad">career</span>
            </h1>
            <p className="lead">
              Netlearn partners with schools, communities and donors to help
              learners build the skills, confidence and connections they need for
              meaningful careers. We go beyond the syllabus with mentorship,
              workshops and digital access that prepare young people for what
              comes next.
            </p>
          </div>

          <div className="hero-visual">
            <div className="hero-photo">
              <img
                src="/images/resources.jpg"
                alt="A learner studying with notebooks and study tools"
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
            </div>
          </div>
        </div>
      </section>

      {/* ---------------- About ---------------- */}
      <section className="about" id="about">
        <div className="container">
          <div className="head">
            <span className="tag">Who we are</span>
            <h2>Education that opens doors to real careers</h2>
            <p>
              Netlearn is a registered non-profit organisation committed to
              helping learners see a clear path from school to work. We combine
              academic support with career guidance so students can plan,
              prepare and pursue opportunities with confidence.
            </p>
          </div>
          <div className="cards-3">
            <article className="card">
              <div className="card-photo">
                <img src="/images/learning%20resources.jpg" alt="A learner studying with notebooks and study tools" />
              </div>
              <div className="card-body">
                <div className="ic"><Icon name="book" className="ic-svg" /></div>
                <h3>Learning Resources</h3>
                <p>
                  Free study guides, e-learning content and exam preparation
                  materials that build the academic foundation learners need to
                  qualify for further study and early career opportunities.
                </p>
              </div>
            </article>
            <article className="card">
              <div className="card-photo">
                <img src="/images/mentorship.jpg" alt="Two students learning together at a desk" />
              </div>
              <div className="card-body">
                <div className="ic"><Icon name="mentor" className="ic-svg" /></div>
                <h3>Mentorship Network</h3>
                <p>
                  Connecting students with mentors who share career insight,
                  academic guidance and encouragement, helping learners explore
                  paths and make informed choices about their future.
                </p>
              </div>
            </article>
            <article className="card">
              <div className="card-photo">
                <img src="/images/digital.jpg" alt="Learners using a digital device in class" />
              </div>
              <div className="card-body">
                <div className="ic"><Icon name="device" className="ic-svg" /></div>
                <h3>Digital Access</h3>
                <p>
                  Bridging the digital divide with devices, connectivity and
                  training in the digital skills that today&apos;s workplaces
                  and career paths increasingly expect.
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
            <h2>Programs that prepare learners for what comes next</h2>
            <p>
              Every initiative connects classroom learning to career outcomes,
              shaped with educators and communities so support stays relevant,
              practical and measurable.
            </p>
          </div>
          <div className="cards-3">
            <article className="pcard">
              <div className="pcard-photo">
                <img src="/images/exam.jpg" alt="Students preparing for an exam" />
              </div>
              <div className="pcard-body">
                <div className="num">01</div>
                <h3>Exam Preparation</h3>
                <p>
                  Focused revision, past-paper practice and study strategies
                  that help learners achieve the results they need to access
                  tertiary study, apprenticeships and career pathways.
                </p>
              </div>
            </article>
            <article className="pcard">
              <div className="pcard-photo">
                <img src="/images/weekly.jpg" alt="Two students learning together" />
              </div>
              <div className="pcard-body">
                <div className="num">02</div>
                <h3>Weekly Classes</h3>
                <p>
                  Extra lessons in core subjects through regular, structured
                  sessions that build understanding steadily and keep learners
                  on track for the qualifications their careers will depend on.
                </p>
              </div>
            </article>
            <article className="pcard">
              <div className="pcard-photo">
                <img src="/images/workshop.jpg" alt="Students in a development workshop" />
              </div>
              <div className="pcard-body">
                <div className="num">03</div>
                <h3>Development Workshops</h3>
                <p>
                  Hands-on workshops covering career planning, CV writing,
                  interview skills and workplace readiness, alongside digital
                  and life skills that prepare learners for opportunities
                  beyond the classroom.
                </p>
              </div>
            </article>
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
            <h2>Every learner deserves a path to a meaningful career</h2>
            <p>
              As a registered non-profit organisation, Netlearn exists to make
              career-focused education accessible to all. We invest directly
              into programmes, resources and mentorship, meeting learners where
              they are and walking with them from school toward work they can
              be proud of.
            </p>
            <ul className="ticks">
              <li>Career guidance that reaches under-served communities</li>
              <li>Mentors who stay with learners through the whole journey</li>
              <li>Transparent stewardship, with funds going straight to programmes</li>
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
              Whether you&apos;re a school, donor, volunteer or learner, reach
              out and let&apos;s help more young people build the careers they
              deserve.
            </p>
          </div>
          <div className="contact-cards">
            <div className="contact-card">
              <span className="ic"><Icon name="mail" className="ic-svg" /></span>
              <h4>Email</h4>
              <p>wearenetlearn@gmail.com</p>
            </div>
            <div className="contact-card">
              <span className="ic"><Icon name="phone" className="ic-svg" /></span>
              <h4>Phone</h4>
              <p>+27 81 771 8643</p>
            </div>
            <div className="contact-card">
              <span className="ic"><Icon name="pin" className="ic-svg" /></span>
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
                A registered non-profit organisation dedicated to career
                development for young learners, through education, mentorship
                and community partnerships across South Africa.
              </p>
            </div>
            <div>
              <h4>Explore</h4>
              <ul>
                <li><a href="#about">About Us</a></li>
                <li><a href="#programs">Programs</a></li>
                <li><a href="#mission">Mission</a></li>
              </ul>
            </div>
            <div>
              <h4>Contact</h4>
              <ul>
                <li>wearenetlearn@gmail.com</li>
                <li>+27 81 771 8643</li>
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
