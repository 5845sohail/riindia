import { useEffect, useState } from "react";
import Lenis from "lenis";
import "lenis/dist/lenis.css";
import Typewriter from "./Typewriter";
import "./styles.css";
import "./polish.css";
import "./motion.css";
import "./composite-lab.css";
import InstituteManagement from "./InstituteManagement";

const headingWords = ["robotics.", "AI.", "innovation."];
const subheadingWords = ["explore new ideas.", "build real projects.", "learn by doing."];

const programs = [
  [
    "01",
    "Planning Your Lab",
    "We start by listening: what your school needs, the space you have, and the budget you’re working with.",
    "PLAN",
  ],
  [
    "02",
    "Setting Up Your Space",
    "We help turn an available room into a well-equipped lab where students can safely build, test, and explore.",
    "BUILD",
  ],
  [
    "03",
    "Teachers on Campus",
    "Our residential faculty guide students through practical sessions and help keep the lab running day to day.",
    "TEACH",
  ],
  [
    "04",
    "Learning by Doing",
    "Students get hands-on with AI, robotics, and electronics, using what they learn to solve practical problems.",
    "EXPLORE",
  ],
  [
    "05",
    "Helping Ideas Grow",
    "With project guidance and innovation challenges, students can develop their ideas into working prototypes.",
    "GROW",
  ],
];
const pillarPhotos = {
  "01": { image: "photo-1603901622056-0a5bee231395", alt: "Blueprints and drafting tools used to plan a space", credit: "Lucas Kepner", source: "Yn8D5B8C-eY" },
  "02": { image: "photo-1737703121444-c568a9d3bc0e", alt: "Maker workspace with tools and a 3D printer", credit: "Jakub Żerdzicki", source: "kVuzH0KFs1w" },
  "03": { image: "photo-1778489769184-45868633c527", alt: "Teacher helping students in a computer lab", credit: "Poddar Group of Institutions", source: "ereEoYDIl20" },
  "04": { image: "photo-1678390210450-22bd7664dc05", alt: "Robotics project with a model car and traffic light", credit: "Gabriel Vasiliu", source: "kQ7eDgjP5po" },
  "05": { image: "photo-1653566031536-4d1b6a9da15e", alt: "Two students exploring science equipment together", credit: "UK Black Tech", source: "Ib3ocAKccyI" },
};
const heroSlides = [
  {
    image: "/assets/gallery/rii-humanoid-hero.png",
    label: "RII / AI & ROBOTICS FOR SCHOOLS",
    copy: "Give your students a place to ask questions, try things out, and build something of their own. We help your school set up the lab and find the right people to guide them.",
    card: <>Small steps.<br />Real discoveries.</>,
  },
  {
    image: "/assets/gallery/rii-composite-lab-hero.png",
    label: "RII / COMPOSITE LABS",
    copy: "Have a room in mind? We’ll help you plan the space, choose the equipment and kits, and get your composite lab ready for its first hands-on session.",
    card: <>Your space.<br />Their next idea.</>,
  },
  {
    image: "/assets/gallery/rii-ai-future-hero.png",
    label: "RII / HANDS-ON LEARNING",
    copy: "Our support continues after the lab opens. With faculty guidance and practical projects, students can keep learning, testing their ideas, and taking on bigger challenges.",
    card: <>Learn it.<br />Try it. Build it.</>,
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
  { label: "Classes 9–10", name: "Applied Technology Lab", space: "800–1,000 sq. ft.", faculty: "1 Technical Instructor" },
  { label: "Classes 11–12", name: "Advanced Research Lab", space: "1,000+ sq. ft.", faculty: "Residential Faculty" },
];
const labModules = ["Assembly & Fabrication", "Coding & AI", "Robotics & Automation", "Rapid Prototyping"];
const faqs = [
  ["What does RII’s institute management service include?", "Five services: fees with optional AutoPay, student attendance, exams and report cards, your school website and admissions enquiries, and events and school identity. We’ll help you plan how they fit into your school’s daily work."],
  ["Is fee AutoPay compulsory for families?", "No. AutoPay is optional and requires explicit parent authorisation. Recurring fee payments are set up through a supported payment gateway, alongside a unified view of dues and receipts."],
  ["Do we need to hire our own AI and robotics teachers?", "RII can provide faculty to guide hands-on sessions, mentor student projects, and help with daily lab routines. We’ll discuss the residential faculty arrangement with you when planning your lab."],
  ["How do you set up a lab from scratch?", "First, we look at your space and talk through what your school needs. Then we plan the layout, choose the equipment and kits, arrange installation, and help your team get started."],
  ["Will this fit our school’s board requirements?", "We plan the school offering with NEP 2020 in mind. Tell us your board and class levels, and we’ll discuss how the proposed lab can fit your school’s requirements."],
  ["Can you help students prepare for competitions?", "Yes, project work can help students prepare for innovation challenges and competitions. We’ll work with your school to choose opportunities that suit their age, experience, and interests."],
  ["How are maintenance and updates handled?", "We’ll explain what support is included in your proposal, along with any separate costs for maintenance or updates. That way, you know what to expect before you decide."],
];
const Logo = () => (
  <a
    className="brand"
    href="https://www.riindia.in/"
    aria-label="Robotics Institute of India home"
  >
   <div className="brand-glow-wrapper">
      <img src="/assets/brand/logo.png" alt="Robotics Institute of India" />
    </div>
  </a>
);
function useGhostScroll() {
  useEffect(() => {
    const lenis = new Lenis({ duration: 1.15, lerp: 0.075, smoothWheel: true, wheelMultiplier: 0.88, anchors: { offset: -100 }, respectReducedMotion: false });
    let frame;
    const raf = (time) => { lenis.raf(time); frame = requestAnimationFrame(raf); };
    frame = requestAnimationFrame(raf);
    const targets = [...document.querySelectorAll([
      ".proof > div", ".metrics > div", ".section-intro", ".program-card",
      ".private-section > div", ".composite-intro", ".lab-service", ".composite-outcome", ".planner-section > .section-label", ".planner-section > h2",
      ".planner-intro", ".planner-tabs", ".planner-body", ".research-grid > div",
      ".collaboration > div", ".faq-section > .section-label", ".faq-section > h2",
      ".faq-intro", ".faq-item", ".closing > :not(.closing-glow)", ".footer-grid > div", ".footer-bottom",
      ".crm-intro", ".crm-service-tabs", ".crm-people", ".crm-service-panel", ".crm-more-intro", ".crm-management-list > div",
    ].join(","))];
    targets.forEach((target) => target.classList.add("ghost-reveal"));
    document.documentElement.classList.add("ghost-ready");
    const observer = new IntersectionObserver((entries) => entries.forEach((entry) => {
      if (entry.isIntersecting) { entry.target.classList.add("ghost-visible"); observer.unobserve(entry.target); }
    }), { threshold: 0, rootMargin: "0px" });
    targets.forEach((target) => observer.observe(target));
    const onFocus = (event) => {
      const target = event.target.closest(".ghost-reveal");
      if (target) { target.classList.add("ghost-visible"); observer.unobserve(target); }
    };
    document.addEventListener("focusin", onFocus);
    return () => {
      cancelAnimationFrame(frame);
      lenis.destroy();
      observer.disconnect();
      document.removeEventListener("focusin", onFocus);
      document.documentElement.classList.remove("ghost-ready");
      targets.forEach((target) => target.classList.remove("ghost-reveal", "ghost-visible"));
    };
  }, []);
}
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
  const [enquiryInterest, setEnquiryInterest] = useState("School lab setup");
  const [scrolled, setScrolled] = useState(false);
  const [activeHero, setActiveHero] = useState(0);
  const [activeDmps, setActiveDmps] = useState(0);
  const [plannerStage, setPlannerStage] = useState(1);
  const [selectedModules, setSelectedModules] = useState(["Assembly & Fabrication", "Coding & AI"]);
  const [quoteForm, setQuoteForm] = useState({ name: "", organisation: "", mobile: "", address: "" });
  const [openFaq, setOpenFaq] = useState(0);
  useGhostScroll();
  useEffect(() => {
    document.body.style.overflow = menuOpen || modalOpen ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [menuOpen, modalOpen]);
  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);
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
    setEnquiryInterest("School lab setup");
    closeMenu();
    setModalOpen(true);
  };
  const openManagementInquiry = () => {
    setEnquiryInterest("Complete institute management");
    closeMenu();
    setModalOpen(true);
  };
  const submitQuote = (event) => {
    event.preventDefault();
    const message = [
      "*RII QUOTATION REQUEST*",
      "",
      `Interested in: ${enquiryInterest}`,
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
      <header className={`nav-wrap ${scrolled ? "is-scrolled" : ""}`}>
        <nav className="nav shell" aria-label="Main navigation">
          <Logo />
          <div className="nav-links">
            <a href="#programs">Five Pillars</a>
            <a href="#composite-lab">Composite Lab</a>
            <a href="#institute-management">Institute CRM</a>
            <a href="#research">Why RII</a>
            <a href="#collaboration">Collaboration</a>
          </div>
          <button className="nav-cta" onClick={openInquiry}>
            Get in touch
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
            <span>LET’S GET YOU STARTED</span>
            <button onClick={closeMenu} aria-label="Close menu">
              ×
            </button>
          </div>
          <a href="#programs" onClick={closeMenu}>
            Five Pillars
          </a>
          <a href="#composite-lab" onClick={closeMenu}>
            Composite Lab
          </a>
          <a href="#institute-management" onClick={closeMenu}>
            Institute CRM
          </a>
          <a href="#research" onClick={closeMenu}>
            Why RII
          </a>
          <a href="#collaboration" onClick={closeMenu}>
            Collaboration
          </a>
          <button
            className="primary-button mobile-inquire"
            onClick={openInquiry}
          >
            Get a quote
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
              ✦ &nbsp; YOUR SCHOOL LAB, FROM START TO FINISH
            </div><br/><br/>
            <h1>Make room for <em><Typewriter words={headingWords} label="robotics, AI, and innovation" /></em></h1>
            <br/>
            <p className="hero-subtitle">
              Help your students <Typewriter words={subheadingWords} label="explore new ideas, build real projects, and learn by doing" speed={100} />
            </p>
            <br/><br/>
            <p className="hero-text">
              {heroSlides[activeHero].copy}
            </p>
            <div className="hero-actions">
              <a className="primary-button" href="#programs">
                See how we help
              </a>
              <button className="secondary-button" onClick={openInquiry}>
                Get a quote
              </button>
            </div>
            <div className="trust-line">
              <span>ROBOTICS INSTITUTE OF INDIA</span>
              <i />
              <span>HERE TO HELP YOUR SCHOOL</span>
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
                alt="Robot and lab illustrations showing what students can explore with AI and robotics"
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
                <i /> LET’S TALK ABOUT YOUR LAB
              </div>
            </div>
            <div className="signal">A SPACE TO EXPLORE</div>
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
            <span>Built around your school</span>
            <p>We start with your space, your students, and what you want them to achieve.</p>
          </div>
          <div>
            <strong>02</strong>
            <span>Help at every step</span>
            <p>From planning the room to running the first session, you have one team to turn to.</p>
          </div>
          <div>
            <strong>03</strong>
            <span>Support after opening day</span>
            <p>Faculty guidance and student projects help keep your lab active throughout the year.</p>
          </div>
          <div>
            <strong>04</strong>
            <span>A complete lab setup</span>
            <p>We bring the space, equipment, kits, and teaching support together for your school.</p>
          </div>
        </section>
        <section className="metrics shell" aria-label="RII implementation metrics">
          <CountMetric value={100} suffix="%" label="Setup from start to finish" />
          <CountMetric value={2020} prefix="NEP " label="Planned with NEP in mind" />
          <CountMetric value={12} prefix="Class 1–" label="Learning across school years" />
          <CountMetric value={1} suffix="+" label="Faculty on campus" />
        </section>
        <section className="program-section" id="programs">
          <div className="section-glow" aria-hidden="true" />
          <div className="shell">
            <div className="section-intro">
              <div>
                <span className="section-label">01 THE FIVE PILLARS OF RII</span>
                <h2>
                  What we help with.
                  <br />
                  From the first idea onward.
                </h2>
              </div>
              <p>
                Setting up a lab involves more than choosing equipment. We help with the space, the people, and the practical work that makes it useful for your school.
              </p>
            </div>
            <div className="program-grid">
              {programs.map(([number, title, copy, tag]) => (
                <article className="program-card glass-card" key={number}>
                  <figure className="pillar-photo">
                    <img src={`https://images.unsplash.com/${pillarPhotos[number].image}?auto=format&fit=crop&w=700&q=85`} alt={pillarPhotos[number].alt} loading="lazy" width="700" height="490" />
                    <figcaption><a href={`https://unsplash.com/photos/${pillarPhotos[number].source}`} target="_blank" rel="noreferrer">{pillarPhotos[number].credit} / Unsplash</a></figcaption>
                  </figure>
                  <div className="pillar-copy">
                  <div className="program-meta">
                    <span>{number}</span>
                    <span>{tag}</span>
                  </div>
                  <h3>{title}</h3>
                  <p>{copy}</p>
                  <a href="#composite-lab">
                    Learn more
                  </a>
                  </div>
                </article>
              ))}
            </div>
          </div>
        </section>
        <section className="composite-section shell" id="composite-lab" aria-labelledby="composite-title">
          <div className="composite-intro">
            <div>
              <span className="section-label gold">02 THE COMPLETE COMPOSITE LAB</span>
              <h2 id="composite-title">Have a room in mind?<br /><em>Let’s make it a lab.</em></h2>
            </div>
            <p>A composite lab brings AI, robotics, electronics, and making into one space. We’ll help you set it up from scratch, supply the kits and equipment, and arrange residential faculty to guide your students.</p>
          </div>
          <div className="composite-services">
            <article className="lab-service">
              <figure>
                <img src="https://images.unsplash.com/photo-1737703121444-c568a9d3bc0e?auto=format&fit=crop&w=1000&q=85" alt="Maker workspace with a 3D printer, tools, and prototyping equipment" loading="lazy" width="1000" height="700" />
                <figcaption><a href="https://unsplash.com/photos/kVuzH0KFs1w" target="_blank" rel="noreferrer">Jakub Żerdzicki / Unsplash</a></figcaption>
              </figure>
              <div className="lab-service-copy">
                <span className="lab-service-step">01 / PLAN & SET UP</span>
                <h3>Get the space ready.</h3>
                <p>We look at the room you have and plan a layout that works for your school. Work areas, storage, and equipment are chosen with your budget and students in mind.</p>
                <ul><li>Site assessment and lab layout</li><li>Workbench and equipment planning</li><li>Installation, testing, and handover</li></ul>
              </div>
            </article>
            <article className="lab-service">
              <figure>
                <img src="https://images.unsplash.com/photo-1631378297854-185cff6b0986?auto=format&fit=crop&w=1000&q=85" alt="Microcontroller and sensors wired on a breadboard for hands-on electronics projects" loading="lazy" width="1000" height="700" />
                <figcaption><a href="https://unsplash.com/photos/vtg8tAdoWVQ" target="_blank" rel="noreferrer">Vishnu Mohanan / Unsplash</a></figcaption>
              </figure>
              <div className="lab-service-copy">
                <span className="lab-service-step">02 / EQUIP & EXPLORE</span>
                <h3>Give students tools to try.</h3>
                <p>We supply robotics kits, sensors, electronics, and making tools suited to your lab. Students can start with simple builds and work toward AI projects, automation, and more advanced prototypes.</p>
                <ul><li>Robotics and electronics kits</li><li>AI and sensor-based applications</li><li>Advanced prototyping and 3D printing options</li></ul>
              </div>
            </article>
            <article className="lab-service">
              <figure>
                <img src="https://images.unsplash.com/photo-1778489769184-45868633c527?auto=format&fit=crop&w=1000&q=85" alt="Teacher guiding students through a practical computer lab activity" loading="lazy" width="1000" height="700" />
                <figcaption><a href="https://unsplash.com/photos/ereEoYDIl20" target="_blank" rel="noreferrer">Poddar Group of Institutions / Unsplash</a></figcaption>
              </figure>
              <div className="lab-service-copy">
                <span className="lab-service-step">03 / TEACH & SUPPORT</span>
                <h3>A teacher to guide them.</h3>
                <p>With residential faculty on campus, students have someone to ask, learn from, and build alongside. We help with practical sessions, student projects, and the daily routines that keep the lab running.</p>
                <ul><li>Residential faculty on campus</li><li>Help with builds and student projects</li><li>Day-to-day lab guidance and support</li></ul>
              </div>
            </article>
          </div>
          <div className="composite-outcome">
            <div><strong>Let’s work out what your school needs.</strong><p>We’ll talk through the space, kits, equipment, and faculty arrangements, then put together a proposal for you.</p></div>
            <button className="primary-button" onClick={openInquiry}>Let’s plan your composite lab</button>
          </div>
        </section>
        <InstituteManagement onEnquire={openManagementInquiry} />
        <section className="planner-section shell" id="planner">
          <span className="section-label gold">PLAN YOUR SCHOOL LAB</span>
          <h2>What could <em>your lab look like?</em></h2>
          <p className="planner-intro">Choose the classes you teach and the activities you’d like to offer. Use this starting outline to talk through the space, equipment, and teaching support with us.</p>
          <div className="planner-tabs" role="tablist">
            {labStages.map((stage, index) => <button key={stage.label} onClick={() => setPlannerStage(index)} className={plannerStage === index ? "active" : ""} role="tab" aria-selected={plannerStage === index}>{stage.label}</button>)}
          </div>
          <div className="planner-body glass-card">
            <div className="planner-summary">
              <span>A STARTING POINT FOR YOUR SCHOOL</span>
              <h3>{labStages[plannerStage].name}</h3>
              <p>A place for students to try things, ask questions, and put their ideas to work. We’ll adapt the setup to your school when we talk.</p>
              <div className="module-options">
                <strong>What would you like students to try?</strong>
                {labModules.map((module) => <button key={module} className={selectedModules.includes(module) ? "selected" : ""} onClick={() => toggleModule(module)}><i>{selectedModules.includes(module) ? "✓" : "+"}</i>{module}</button>)}
              </div>
            </div>
            <div className="planner-output">
              <div className="planner-output-cards"><div><span>SUGGESTED SPACE</span><strong>{labStages[plannerStage].space}</strong></div><div><span>YOUR ACTIVITIES</span><strong>{selectedModules.length} selected</strong></div><div><span>LEARNING APPROACH</span><strong>NEP 2020</strong></div><div><span>TEACHING SUPPORT</span><strong>{labStages[plannerStage].faculty}</strong></div></div>
              <div className="blueprint"><div className="blueprint-head"><span>YOUR LAB AT A GLANCE</span><small>Suggested layout</small></div><div className="zone-grid"><div><span>ZONE A</span><strong>Assembly & Fabrication</strong><small>Hands-on workbench</small></div><div><span>ZONE B</span><strong>Coding & AI</strong><small>Computing & intelligence</small></div><div><span>ZONE C</span><strong>Robotics</strong><small>Build, test, refine</small></div><div><span>ZONE D</span><strong>Showcase</strong><small>Projects & prototypes</small></div></div></div>
              <button className="primary-button planner-quote" onClick={openInquiry}>Get a quote for this lab</button>
            </div>
          </div>
        </section>
        <section className="research-section" id="research">
          <div className="shell research-grid">
            <div>
              <span className="section-label">
                03 WHY WORK WITH RII?
              </span>
              <h2>
                Help your students
                <br />
                take the next step.
              </h2>
            </div>
            <div className="research-quote">
              <p>
                A lab comes to life when students have time to explore and someone to guide them. We help your school bring both together.
              </p>
              <span>HERE FOR YOUR SCHOOL</span>
            </div>
            <div className="research-stat">
              <strong>∞</strong>
              <span>room for the next question, idea, or discovery</span>
            </div>
          </div>
        </section>
        <section className="collaboration shell" id="collaboration">
          <div className="collaboration-copy">
            <span className="section-label gold">04 RECENT COLLABORATION</span>
            <h2>See where<br /><em>the learning happens.</em></h2>
            <p>On 1 September, we partnered with D.M. Public School in Parsia, Putki, Dhanbad. Here’s a look at the inauguration and the AI and robotics lab students will use to explore, build, and learn.</p>
            <div className="collaboration-meta"><img src="/assets/dmps/dmps-logo.jpeg" alt="D.M. Public School" /><span>D.M. PUBLIC SCHOOL<br /><small>PARSIA, PUTKI, DHANBAD</small></span></div>
          </div>
          <div className="collaboration-media"><div className="collaboration-count">0{activeDmps + 1} / 0{dmpsMedia.length}</div>{dmpsMedia.map((image, index) => <img key={image} className={index === activeDmps ? "is-active" : ""} src={image} alt="RII collaboration at D.M. Public School" />)}<div className="collaboration-dots">{dmpsMedia.map((image, index) => <button key={image} className={index === activeDmps ? "active" : ""} onClick={() => setActiveDmps(index)} aria-label={`Show D.M. Public School image ${index + 1}`} />)}</div></div>
        </section>
        <section className="faq-section shell" aria-label="Frequently asked questions">
          <span className="section-label gold">COMMON QUESTIONS</span>
          <h2>Frequently Asked Questions</h2>
          <p className="faq-intro">Thinking about a lab for your school? Here are a few things you might want to know.</p>
          <div className="faq-list">
            {faqs.map(([question, answer], index) => <article className={`faq-item ${openFaq === index ? "open" : ""}`} key={question}><button onClick={() => setOpenFaq(openFaq === index ? -1 : index)} aria-expanded={openFaq === index}><span className="faq-icon">?</span><strong>{question}</strong><span className="faq-chevron">⌄</span></button>{openFaq === index && <p>{answer}</p>}</article>)}
          </div>
        </section>
        <section className="closing shell" id="about">
          <div className="closing-glow" />
          <span className="section-label gold">HAVE SOMETHING IN MIND?</span>
          <h2>
            Let’s plan something
            <br />
            <em>for your school.</em>
          </h2>
          <p>
            Tell us what you’re thinking, even if it’s just an idea. We’ll help you work out the space, setup, and support your school needs.
          </p>
          <button className="primary-button" onClick={openInquiry}>
            Get a quote
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
              Helping schools bring AI and robotics to life.
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
            <a href="#institute-management">Institute management</a>
            <a href="https://www.linkedin.com/company/robotics-institute-of-india1/">LinkedIn</a>
            <a href="https://www.instagram.com/roboticsinstituteofindia">Instagram</a>
            {/* <a href="#top">Research Journal</a> */}
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
          <span>BASED IN INDIA. HERE FOR YOUR SCHOOL.</span>
        </div>
      </footer>
      {modalOpen && (
        <div className="modal-backdrop" onMouseDown={() => setModalOpen(false)}>
          <section
            className="inquiry-modal glass-card"
            role="dialog"
            aria-modal="true"
            aria-label={enquiryInterest === "Complete institute management" ? "Ask about institute management" : "Get a quote for your school lab"}
            onMouseDown={(event) => event.stopPropagation()}
          >
            <button
              className="modal-close"
              onClick={() => setModalOpen(false)}
              aria-label="Close"
            >
              ×
            </button>
            <span className="section-label gold">{enquiryInterest === "Complete institute management" ? "LET’S SIMPLIFY YOUR SCHOOL DAY" : "LET’S TALK ABOUT YOUR LAB"}</span>
            <h2>{enquiryInterest === "Complete institute management" ? "Tell us about your institute." : "Tell us about your school."}</h2>
            <p>
              {enquiryInterest === "Complete institute management" ? "Tell us a little about your school or institute. We’ll open WhatsApp with your request to discuss fees, attendance, results, your website, and campus stories." : "Leave a few details below. We’ll open WhatsApp with your request filled in, so you can send it to our team."}
            </p>
            <form className="quote-form" onSubmit={submitQuote}>
              <label>Full name<input required value={quoteForm.name} onChange={(event) => setQuoteForm({ ...quoteForm, name: event.target.value })} placeholder="Your name" /></label>
              <label>School or company name<input required value={quoteForm.organisation} onChange={(event) => setQuoteForm({ ...quoteForm, organisation: event.target.value })} placeholder="Your school or company" /></label>
              <label>Mobile number<input required type="tel" inputMode="tel" value={quoteForm.mobile} onChange={(event) => setQuoteForm({ ...quoteForm, mobile: event.target.value })} placeholder="Your WhatsApp number" /></label>
              <label>Address<textarea required value={quoteForm.address} onChange={(event) => setQuoteForm({ ...quoteForm, address: event.target.value })} placeholder="City, state, and school address" rows="3" /></label>
              <button className="primary-button" type="submit">Submit to Get Quote</button>
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
