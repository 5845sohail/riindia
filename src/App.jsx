import { useEffect, useState } from "react";
import "./styles.css";

const programs = [
  [
    "01",
    "Composite Lab Strategy",
    "A practical discovery process that maps space, institutional goals, budgets, and the right route to capability.",
    "PLAN",
  ],
  [
    "02",
    "Lab Design & Build",
    "From a clear room to a complete high-performance environment, designed for safe, future-facing work.",
    "BUILD",
  ],
  [
    "03",
    "Faculty Residency",
    "On-site and residential expert support that helps schools activate the environment with confidence.",
    "ENABLE",
  ],
  [
    "04",
    "AI & Robotics Applications",
    "Hands-on exploration that moves learners from observation to the intelligent systems shaping industry.",
    "ACTIVATE",
  ],
  [
    "05",
    "Innovation & Evidence",
    "Visible prototypes, challenges, and institutional proof that make future-readiness a lasting advantage.",
    "EVOLVE",
  ],
];
const heroSlides = [
  {
    image: "/assets/gallery/rii-humanoid-hero.png",
    label: "RII / SCHOOL TRANSFORMATION",
    title: <>Curating the future <em>of robotics.</em></>,
    subtitle: "Exclusivity. Innovation. Transforming tomorrow.",
    copy: "RII helps schools build the environments, expertise, and applied experiences needed to lead confidently into an intelligent future.",
    card: <>Future-ready<br />intelligence</>,
  },
  {
    image: "/assets/gallery/rii-composite-lab-hero.png",
    label: "RII / COMPOSITE LABS",
    title: <>From an empty room <em>to real capability.</em></>,
    subtitle: "A complete lab partnership, designed to scale.",
    copy: "We take schools from initial site planning to an advanced composite lab—space, equipment, setup, and expert delivery working as one system.",
    card: <>Build. Enable.<br />Advance.</>,
  },
  {
    image: "/assets/gallery/rii-ai-future-hero.png",
    label: "RII / APPLIED INTELLIGENCE",
    title: <>Make innovation <em>visible.</em></>,
    subtitle: "AI, robotics, and human potential—connected.",
    copy: "The value of an RII partnership is not a one-day launch. It is an active environment where projects, faculty, and technology move forward together.",
    card: <>Applied<br />intelligence</>,
  },
];
const dmpsMedia = [
  "/assets/dmps/01-lab-wide.jpeg",
  "/assets/dmps/02-lab-visit-portrait.jpeg",
  "/assets/dmps/03-lab-overview.jpeg",
  "/assets/dmps/04-robotics-demo.jpeg",
  "/assets/dmps/05-lab-panorama.jpeg",
  "/assets/dmps/06-ai-robotics-wide.jpeg",
  "/assets/dmps/07-3d-printing-demo.jpeg",
  "/assets/dmps/inauguration-poster.jpg",
];
const labStages = [
  { label: "Classes 1–5", name: "Foundation Lab", space: "350–500 sq. ft.", faculty: "1 Lab Mentor" },
  { label: "Classes 6–8", name: "Core Innovation Lab", space: "600–800 sq. ft.", faculty: "1 Senior Trainer" },
  { label: "Classes 9–10", name: "Applied Technology Lab", space: "800–1,000 sq. ft.", faculty: "1 Technical Faculty" },
  { label: "Classes 11–12", name: "Advanced Research Lab", space: "1,000+ sq. ft.", faculty: "Residential Faculty" },
];
const labModules = ["Assembly & Fabrication", "Coding & AI", "Robotics & Automation", "Rapid Prototyping"];
const faqs = [
  ["Does the school need to hire special teachers for Robotics and AI subjects?", "No. RII can provide experienced faculty support to activate the lab and guide practical delivery, including day-to-day lab routines and student projects."],
  ["How does the turnkey lab installation process work?", "RII begins with a space and requirement review, then plans the environment, coordinates setup, provisions the required technology resources, and activates the lab with expert support."],
  ["Is the program aligned with standard Indian education boards?", "RII’s school offering is designed with NEP 2020 alignment in mind. The exact scope is confirmed during the institutional planning and quotation conversation."],
  ["What competitions do students get prepared for?", "The environment is designed around applied projects, prototypes, and innovation challenges. The right competition pathway is selected with the school based on its students and goals."],
  ["Who covers lab maintenance and updates?", "RII defines the support scope during the quotation stage, so the school has clarity on setup, activation, faculty support, and the ongoing care of the environment."],
];
const Arrow = () => (
  <span className="arrow" aria-hidden="true">
    ↗
  </span>
);
const Logo = () => (
  <a
    className="brand"
    href="#top"
    aria-label="Robotics Institute of India home"
  >
    <img src="/assets/brand/logo.png" alt="Robotics Institute of India" />
  </a>
);
function CountMetric({ value, prefix = "", suffix = "", label }) {
  const [count, setCount] = useState(0);
  useEffect(() => {
    let start;
    const duration = 1100;
    const tick = (time) => {
      if (!start) start = time;
      const progress = Math.min((time - start) / duration, 1);
      setCount(Math.round(value * (1 - Math.pow(1 - progress, 3))));
      if (progress < 1) requestAnimationFrame(tick);
    };
    const frame = requestAnimationFrame(tick);
    return () => cancelAnimationFrame(frame);
  }, [value]);
  return <div className="count-metric"><strong>{prefix}{count}{suffix}</strong><span>{label}</span></div>;
}

function App() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [modalOpen, setModalOpen] = useState(false);
  const [activeHero, setActiveHero] = useState(0);
  const [activeDmps, setActiveDmps] = useState(0);
  const [plannerStage, setPlannerStage] = useState(1);
  const [selectedModules, setSelectedModules] = useState(["Assembly & Fabrication", "Coding & AI"]);
  const [quoteForm, setQuoteForm] = useState({ name: "", organisation: "", mobile: "", address: "" });
  const [openFaq, setOpenFaq] = useState(0);
  useEffect(() => {
    document.body.style.overflow = menuOpen || modalOpen ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [menuOpen, modalOpen]);
  useEffect(() => {
    const interval = window.setInterval(() => {
      setActiveHero((current) => (current + 1) % heroSlides.length);
    }, 3000);
    return () => window.clearInterval(interval);
  }, []);
  useEffect(() => {
    const interval = window.setInterval(() => {
      setActiveDmps((current) => (current + 1) % dmpsMedia.length);
    }, 3000);
    return () => window.clearInterval(interval);
  }, []);
  const closeMenu = () => setMenuOpen(false);
  const openInquiry = () => {
    closeMenu();
    setModalOpen(true);
  };
  const submitQuote = (event) => {
    event.preventDefault();
    const message = [
      "*RII — QUOTATION REQUEST*",
      "",
      `Name: ${quoteForm.name}`,
      `Company / School: ${quoteForm.organisation}`,
      `Mobile: ${quoteForm.mobile}`,
      `Address: ${quoteForm.address}`,
    ].join("\n");
    window.open(`https://wa.me/917488561205?text=${encodeURIComponent(message)}`, "_blank", "noopener,noreferrer");
  };
  const toggleModule = (module) => setSelectedModules((current) => current.includes(module) ? current.filter((item) => item !== module) : [...current, module]);
  return (
    <div className="app" id="top">
      <div className="noise" aria-hidden="true" />
      <header className="nav-wrap">
        <nav className="nav shell" aria-label="Main navigation">
          <Logo />
          <div className="nav-links">
            <a href="#programs">Five Pillars</a>
            <a href="#composite-lab">Composite Lab</a>
            <a href="#research">Research</a>
            <a href="#collaboration">Collaboration</a>
          </div>
          <button className="nav-cta" onClick={openInquiry}>
            Inquire <Arrow />
          </button>
          <button
            className="menu-toggle"
            onClick={() => setMenuOpen(!menuOpen)}
            aria-label="Toggle navigation"
            aria-expanded={menuOpen}
          >
            <i />
            <i />
          </button>
        </nav>
      </header>
      <div
        className={`mobile-nav ${menuOpen ? "is-open" : ""}`}
        onClick={closeMenu}
      >
        <div
          className="mobile-panel"
          onClick={(event) => event.stopPropagation()}
        >
          <div className="mobile-panel-head">
            <span>RII / CONNECT</span>
            <button onClick={closeMenu} aria-label="Close menu">
              ×
            </button>
          </div>
          <a href="#programs" onClick={closeMenu}>
            Five Pillars <Arrow />
          </a>
          <a href="#composite-lab" onClick={closeMenu}>
            Composite Lab <Arrow />
          </a>
          <a href="#research" onClick={closeMenu}>
            Research <Arrow />
          </a>
          <a href="#collaboration" onClick={closeMenu}>
            Collaboration <Arrow />
          </a>
          <button
            className="primary-button mobile-inquire"
            onClick={openInquiry}
          >
            Request a quotation <Arrow />
          </button>
        </div>
      </div>
      <main>
        <section className="hero shell">
          <div className="hero-copy">
            <div className="eyebrow">
              <span className="live-dot" /> {heroSlides[activeHero].label}
            </div>
            <div className="exclusive-badge">
              ✦ &nbsp; END-TO-END SCHOOL TRANSFORMATION
            </div><br/><br/>
            <h1>{heroSlides[activeHero].title}</h1>
            <br/>
            <p className="hero-subtitle">
              {heroSlides[activeHero].subtitle}
            </p>
            <br/><br/>
            <p className="hero-text">
              {heroSlides[activeHero].copy}
            </p>
            <div className="hero-actions">
              <a className="primary-button" href="#programs">
                Explore the RII model <Arrow />
              </a>
              <button className="secondary-button" onClick={openInquiry}>
                Request a quotation <Arrow />
              </button>
            </div>
            <div className="trust-line">
              <span>EST. IN INDIA</span>
              <i />
              <span>BUILT FOR FUTURE-READY SCHOOLS</span>
            </div>
          </div>
          <div
            className="hero-visual"
            aria-label="Futuristic humanoid robotics system"
          >
            <div className="visual-orbit orbit-a" />
            <div className="visual-orbit orbit-b" />
            <div className="visual-grid" />
            {heroSlides.map((slide, index) => (
              <img
                className={`hero-image ${index === activeHero ? "is-active" : ""}`}
                src={slide.image}
                alt="RII future-ready technology environment"
                key={slide.image}
              />
            ))}
            <div className="scan-line" />
            <div className="hero-card glass-card">
              <div>
                <span>RII / 01</span>
                <strong>
                  {heroSlides[activeHero].card}
                </strong>
              </div>
              <div className="card-status">
                <i /> ACCEPTING SELECT ENQUIRIES
              </div>
            </div>
            <div className="signal">SYSTEM / 2040</div>
            <div className="hero-dots" aria-label="Hero slides">
              {heroSlides.map((slide, index) => (
                <button key={slide.image} className={index === activeHero ? "active" : ""} onClick={() => setActiveHero(index)} aria-label={`Show slide ${index + 1}`} />
              ))}
            </div>
          </div>
        </section>
        <section className="proof shell" aria-label="RII highlights">
          <div>
            <strong>01</strong>
            <span>School-first design</span>
            <p>Every decision begins with your space, priorities, and institutional vision.</p>
          </div>
          <div>
            <strong>02</strong>
            <span>End-to-end delivery</span>
            <p>From first brief to advanced lab activation, one accountable partner.</p>
          </div>
          <div>
            <strong>03</strong>
            <span>Capability that lasts</span>
            <p>Faculty support and innovation evidence keep the lab relevant after launch.</p>
          </div>
          <div>
            <strong>04</strong>
            <span>100% turnkey setup</span>
            <p>One partner from the first site conversation to an activated advanced lab.</p>
          </div>
        </section>
        <section className="metrics shell" aria-label="RII implementation metrics">
          <CountMetric value={100} suffix="%" label="Turnkey setup" />
          <CountMetric value={2020} prefix="NEP " label="Curriculum met" />
          <CountMetric value={12} prefix="Class 1–" label="Continuous syllabus" />
          <CountMetric value={1} suffix="+" label="On-site deputed faculty" />
        </section>
        <section className="program-section" id="programs">
          <div className="section-glow" aria-hidden="true" />
          <div className="shell">
            <div className="section-intro">
              <div>
                <span className="section-label">01 — THE FIVE PILLARS OF RII</span>
                <h2>
                  One partnership.
                  <br />
                  Five connected capabilities.
                </h2>
              </div>
              <p>
                RII turns a school’s future-skills ambition into an operational environment that students, faculty, and leadership can use with confidence.
              </p>
            </div>
            <div className="program-grid">
              {programs.map(([number, title, copy, tag]) => (
                <article className="program-card glass-card" key={number}>
                  <div className="program-meta">
                    <span>{number}</span>
                    <span>{tag}</span>
                  </div>
                  <h3>{title}</h3>
                  <p>{copy}</p>
                  <a href="#composite-lab">
                    Explore this pillar <Arrow />
                  </a>
                </article>
              ))}
            </div>
          </div>
        </section>
        <section className="private-section shell" id="composite-lab">
          <div className="private-visual">
            <img
              src="/assets/gallery/ai.jpeg"
              alt="Artificial intelligence interface"
            />
            <span>RII / COMPOSITE LAB</span>
          </div>
          <div className="private-copy">
            <span className="section-label gold">
              02 — COMPOSITE LABS, FROM ZERO TO ADVANCED
            </span>
            <h2>
              A complete lab, <em>made operational.</em>
            </h2>
            <p>
              RII designs, sets up, and activates composite AI, robotics, and innovation labs. We begin with the room you have and build toward the advanced environment your school is ready to operate.
            </p>
            <ul>
              <li>Site planning, lab design, and safe installation</li>
              <li>Provisioned equipment and hands-on technology resources</li>
              <li>Residential faculty and expert activation support</li>
            </ul>
            <button className="text-button" onClick={openInquiry}>
              Plan your composite lab <Arrow />
            </button>
          </div>
        </section>
        <section className="planner-section shell" id="planner">
          <span className="section-label gold">INTERACTIVE PLANNER</span>
          <h2>Configure your <em>dream school lab.</em></h2>
          <p className="planner-intro">Select your grade band and preferred lab modules. The outline updates instantly to help you begin a practical quotation conversation with RII.</p>
          <div className="planner-tabs" role="tablist">
            {labStages.map((stage, index) => <button key={stage.label} onClick={() => setPlannerStage(index)} className={plannerStage === index ? "active" : ""} role="tab" aria-selected={plannerStage === index}>{stage.label}</button>)}
          </div>
          <div className="planner-body glass-card">
            <div className="planner-summary">
              <span>YOUR LAB DIRECTION</span>
              <h3>{labStages[plannerStage].name}</h3>
              <p>A considered environment for hands-on discovery, technology fluency, and meaningful student innovation.</p>
              <div className="module-options">
                <strong>Select lab modules</strong>
                {labModules.map((module) => <button key={module} className={selectedModules.includes(module) ? "selected" : ""} onClick={() => toggleModule(module)}><i>{selectedModules.includes(module) ? "✓" : "+"}</i>{module}</button>)}
              </div>
            </div>
            <div className="planner-output">
              <div className="planner-output-cards"><div><span>SPACE NEEDED</span><strong>{labStages[plannerStage].space}</strong></div><div><span>ACTIVE MODULES</span><strong>{selectedModules.length} Selected</strong></div><div><span>NEP COMPLIANCE</span><strong>2020 Align</strong></div><div><span>DEPLOYED FACULTY</span><strong>{labStages[plannerStage].faculty}</strong></div></div>
              <div className="blueprint"><div className="blueprint-head"><span>↗ CONCEPTUAL LAB BLUEPRINT</span><small>Dynamic spatial model</small></div><div className="zone-grid"><div><span>ZONE A</span><strong>Assembly & Fabrication</strong><small>Hands-on workbench</small></div><div><span>ZONE B</span><strong>Coding & AI</strong><small>Computing & intelligence</small></div><div><span>ZONE C</span><strong>Robotics</strong><small>Build, test, refine</small></div><div><span>ZONE D</span><strong>Showcase</strong><small>Projects & prototypes</small></div></div></div>
              <button className="primary-button planner-quote" onClick={openInquiry}>Request this lab quotation <Arrow /></button>
            </div>
          </div>
        </section>
        <section className="research-section" id="research">
          <div className="shell research-grid">
            <div>
              <span className="section-label">
                03 — WHAT CONNECTION WITH RII UNLOCKS
              </span>
              <h2>
                Build the confidence
                <br />
                to lead tomorrow.
              </h2>
            </div>
            <div className="research-quote">
              <p>
                “A future-ready lab is not a room of technology. It is a school-wide capability built around people, purpose, and practical innovation.”
              </p>
              <span>RII INSTITUTIONAL PARTNERSHIPS</span>
            </div>
            <div className="research-stat">
              <strong>∞</strong>
              <span>one connected ecosystem, built with intent</span>
            </div>
          </div>
        </section>
        <section className="collaboration shell" id="collaboration">
          <div className="collaboration-copy">
            <span className="section-label gold">04 — RECENT COLLABORATION</span>
            <h2>A real school.<br /><em>A working environment.</em></h2>
            <p>On 1 September, RII successfully collaborated with D.M. Public School, Parsia, Putki, Dhanbad—bringing an AI and robotics learning environment into the school community.</p>
            <div className="collaboration-meta"><img src="/assets/dmps/dmps-logo.jpeg" alt="D.M. Public School" /><span>D.M. PUBLIC SCHOOL<br /><small>PARSIA, PUTKI, DHANBAD</small></span></div>
          </div>
          <div className="collaboration-media"><div className="collaboration-count">0{activeDmps + 1} / 0{dmpsMedia.length}</div>{dmpsMedia.map((image, index) => <img key={image} className={index === activeDmps ? "is-active" : ""} src={image} alt="RII collaboration at D.M. Public School" />)}<div className="collaboration-dots">{dmpsMedia.map((image, index) => <button key={image} className={index === activeDmps ? "active" : ""} onClick={() => setActiveDmps(index)} aria-label={`Show D.M. Public School image ${index + 1}`} />)}</div></div>
        </section>
        <section className="faq-section shell" aria-label="Frequently asked questions">
          <span className="section-label gold">COMMON QUESTIONS</span>
          <h2>Frequently Asked Questions</h2>
          <p className="faq-intro">Everything school administrators need to know about partnering with the Robotics Institute of India.</p>
          <div className="faq-list">
            {faqs.map(([question, answer], index) => <article className={`faq-item ${openFaq === index ? "open" : ""}`} key={question}><button onClick={() => setOpenFaq(openFaq === index ? -1 : index)} aria-expanded={openFaq === index}><span className="faq-icon">?</span><strong>{question}</strong><span className="faq-chevron">⌄</span></button>{openFaq === index && <p>{answer}</p>}</article>)}
          </div>
        </section>
        <section className="closing shell" id="about">
          <div className="closing-glow" />
          <span className="section-label gold">READY TO BUILD YOUR NEXT ADVANTAGE?</span>
          <h2>
            Build the future
            <br />
            <em>inside your school.</em>
          </h2>
          <p>
            Start with a clear conversation about your space, your goals, and the lab your institution is ready to build.
          </p>
          <button className="primary-button" onClick={openInquiry}>
            Request a quotation <Arrow />
          </button>
        </section>
      </main>
      <footer className="footer">
        <div className="shell footer-grid">
          <div>
            <Logo />
            <p>
              Robotics Institute of India
              <br />
              Building future-ready school capability.
            </p>
          </div>
          <div>
            <span>CONTACT</span>
            <a href="mailto:roboticsinstituteofindia@riindia.in">
              roboticsinstituteofindia@riindia.in
            </a>
            <a href="tel:+917488561205">+91 74885 61205</a>
          </div>
          <div>
            <span>CONNECT</span>
            <a href="#top">LinkedIn</a>
            <a href="#top">Instagram</a>
            <a href="#top">Research Journal</a>
          </div>
          <div>
            <span>LEGAL</span>
            <a href="#top">Privacy</a>
            <a href="#top">Terms</a>
          </div>
        </div>
        <div className="shell footer-bottom">
          <span>© {new Date().getFullYear()} RII. ALL RIGHTS RESERVED.</span>
          <span>Developed by <a href="https://zigacode.com" target="_blank" rel="noreferrer">ZigaCode</a></span>
          <span>INDIA / GLOBAL INTELLIGENCE</span>
        </div>
      </footer>
      {modalOpen && (
        <div className="modal-backdrop" onMouseDown={() => setModalOpen(false)}>
          <section
            className="inquiry-modal glass-card"
            role="dialog"
            aria-modal="true"
            aria-label="Private inquiry"
            onMouseDown={(event) => event.stopPropagation()}
          >
            <button
              className="modal-close"
              onClick={() => setModalOpen(false)}
              aria-label="Close"
            >
              ×
            </button>
            <span className="section-label gold">REQUEST A QUOTATION</span>
            <h2>Tell us about your school.</h2>
            <p>
              Share the essentials and we’ll open WhatsApp with your quotation request ready to send.
            </p>
            <form className="quote-form" onSubmit={submitQuote}>
              <label>Full name<input required value={quoteForm.name} onChange={(event) => setQuoteForm({ ...quoteForm, name: event.target.value })} placeholder="Your name" /></label>
              <label>Company / School name<input required value={quoteForm.organisation} onChange={(event) => setQuoteForm({ ...quoteForm, organisation: event.target.value })} placeholder="Institution name" /></label>
              <label>Mobile number<input required type="tel" inputMode="tel" value={quoteForm.mobile} onChange={(event) => setQuoteForm({ ...quoteForm, mobile: event.target.value })} placeholder="Your WhatsApp number" /></label>
              <label>Address<textarea required value={quoteForm.address} onChange={(event) => setQuoteForm({ ...quoteForm, address: event.target.value })} placeholder="City, state, and school address" rows="3" /></label>
              <button className="primary-button" type="submit">Submit to Get Quote <Arrow /></button>
            </form>
          </section>
        </div>
      )}
      <div className="floating-connect" aria-label="Quick contact">
        <a className="floating-whatsapp" href="https://wa.me/917488561205" target="_blank" rel="noreferrer" aria-label="Connect on WhatsApp"><img src="/assets/icons/whatsapp.webp" alt="" /></a>
        <a className="floating-call" href="tel:+917488561205" aria-label="Call RII">☎</a>
      </div>
    </div>
  );
}
export default App;
