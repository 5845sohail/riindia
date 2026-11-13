import { useState } from "react";
import "./institute-management.css";

const services = [
  {
    label: "Fees & optional AutoPay",
    heading: "Fees, without all the follow-up.",
    copy: "Bring dues and receipts into one view. Families who choose AutoPay can authorise recurring fee payments through a supported payment gateway.",
    benefit: "Simpler collections, with clear parent consent.",
    note: "AutoPay is optional. Parent authorisation comes before recurring payments.",
    desk: "FEE DESK",
    status: "Dues and receipts, together",
    rows: [["Fee records", "Unified dues & receipts"], ["AutoPay", "Optional for families"], ["Authorisation", "Explicit parent consent"], ["Payment setup", "Supported gateway"]],
    photo: { image: "photo-1681926338131-804ed16164b4", source: "iiZ7YoPKQZs", credit: "Sanket Mishra", alt: "A woman in Delhi using her phone while seated at a table", position: "50% 40%", label: "A SIMPLER FEE ROUTINE", caption: "Less paperwork for your office. A clearer routine for families." },
    steps: [
      ["Keep the fee picture together", "Your office works from one view of dues and receipts, so it’s easier to check what’s paid and what still needs attention."],
      ["Let families choose AutoPay", "Families can opt into recurring fee payments. Setup through a supported gateway happens only after explicit parent authorisation."],
      ["Follow up with a clearer record", "Use the fee records to answer payment queries and follow up on pending dues, with less searching through separate registers."],
    ],
  },
  {
    label: "Student attendance",
    heading: "Record it once. Keep people informed.",
    copy: "Teachers mark attendance once. Authorised staff can review exceptions before alerts go out, helping the office and families get a clearer picture of the school day.",
    benefit: "Less repeated entry. Faster visibility for the office and families.",
    note: "Attendance exceptions are reviewed by authorised staff before alerts are sent.",
    desk: "ATTENDANCE DESK",
    status: "A clearer view of the school day",
    rows: [["Attendance entry", "Recorded once by the teacher"], ["Exceptions", "Reviewed by authorised staff"], ["Alerts", "After staff review"], ["Visibility", "Office & families"]],
    photo: { image: "photo-1719159381916-062fa9f435a6", source: "OcDJhBm8Jnc", credit: "Haseeb Modi", alt: "Students in school uniforms attending a class in Chennai, India", position: "50% 50%", label: "EVERY SCHOOL DAY", caption: "A familiar classroom routine, with less repeated office work." },
    steps: [
      ["The teacher marks attendance", "Attendance is entered once, giving the school a shared starting point instead of asking different teams to repeat the same work."],
      ["Staff check the exceptions", "Authorised staff review exceptions before alerts are sent, keeping a human check in the process."],
      ["Keep the right people informed", "Reviewed attendance information gives the office and families a clearer view of the school day."],
    ],
  },
  {
    label: "Exams & report cards",
    heading: "Spend less time formatting results.",
    copy: "Set up your subject and grade rules, then prepare term results for teacher approval. Generate print-ready report cards without rebuilding the same result sheets each term.",
    benefit: "Consistent term results, with teachers in control.",
    note: "Subject and grade rules are configured for your school. Teacher approval comes before final results.",
    desk: "EXAM DESK",
    status: "From marks to report cards",
    rows: [["Subject & grade rules", "Configured for your school"], ["Term results", "Prepared from those rules"], ["Approval", "Reviewed by teachers"], ["Report cards", "Ready to print"]],
    photo: { image: "photo-1686624386665-4cd01b96d0f6", source: "SPO0ST4nVbY", credit: "Aswin Thomas Bony", alt: "Students writing in their notebooks during a class in Kerala, India", position: "50% 45%", label: "BEHIND EVERY RESULT", caption: "More time to review each student’s work. Less time formatting sheets." },
    steps: [
      ["Set your school’s rules", "Configure the subjects and grade rules your school uses, so term results follow a consistent structure."],
      ["Prepare results for review", "Generate term results using those rules and put them before teachers for approval."],
      ["Produce report cards", "Once teachers approve the results, prepare print-ready report cards without rebuilding the layout each term."],
    ],
  },
  {
    label: "Website & admissions",
    heading: "Make your website useful every day.",
    copy: "Refresh your existing school website with admissions enquiry tracking, timely notices, and verified disclosures. Give families a useful place to learn about your school and take the next step.",
    benefit: "A stronger first impression and a clearer admissions process.",
    note: "Your existing website is part of the plan, with school-approved information kept in view.",
    desk: "ADMISSIONS DESK",
    status: "A better front door for families",
    rows: [["School website", "Refresh your existing site"], ["Admissions", "Track incoming enquiries"], ["Notices", "Keep updates easy to find"], ["Disclosures", "Publish verified information"]],
    photo: { image: "photo-1719159381981-1327b22aff9b", source: "LKySOH0mr38", credit: "Haseeb Modi", alt: "Students using computers in a school lab in Chennai, India", position: "50% 50%", label: "YOUR SCHOOL, ONLINE", caption: "Help families get to know your school and find their next step." },
    steps: [
      ["Refresh the website you have", "Present your school clearly, with current information and a useful first impression for families exploring admissions."],
      ["Keep track of admissions enquiries", "Bring incoming enquiries into view, so your team can follow up with interested families."],
      ["Keep information current", "Publish notices and verified disclosures that help families find the information they need."],
    ],
  },
  {
    label: "Events & school identity",
    heading: "Let your school’s stories be seen.",
    copy: "Two scheduled photographer visit days each month help capture campus life and school achievements. Selected, edited photos keep your website connected to what’s happening at school.",
    benefit: "Fresh campus stories, with photos worth sharing.",
    note: "Two scheduled photography visit days per month, with selected edited images for the school website.",
    desk: "CAMPUS STORIES",
    status: "Make room for your achievements",
    rows: [["Photographer visits", "2 scheduled days each month"], ["Campus coverage", "Events & school achievements"], ["Photo selection", "Selected images, edited"], ["Website stories", "Kept current"]],
    photo: { image: "photo-1622831877966-18a6c8731a01", source: "APtcTa6Xqp8", credit: "Joydeep Sensarma", alt: "Students performing at an Independence Day celebration at a school in Bengaluru, India", position: "50% 50%", label: "MOMENTS THAT MATTER", caption: "Give school achievements and campus celebrations a place to be seen." },
    steps: [
      ["Plan two visit days each month", "Schedule photographer visits around school activities, with two photography days available each month."],
      ["Capture campus life", "Photograph events, student achievements, and the moments that show what makes your school its own."],
      ["Share selected, edited photos", "Use the selected edited images on the school website, keeping achievements and campus stories up to date."],
    ],
  },
];

export default function InstituteManagement({ onEnquire }) {
  const [activeService, setActiveService] = useState(0);
  const service = services[activeService];
  const selectWithKeyboard = (event, index) => {
    const keys = ["ArrowRight", "ArrowLeft", "ArrowDown", "ArrowUp", "Home", "End"];
    if (!keys.includes(event.key)) return;
    event.preventDefault();
    const forward = event.key === "ArrowRight" || event.key === "ArrowDown";
    const next = event.key === "Home" ? 0 : event.key === "End" ? services.length - 1 : (index + (forward ? 1 : services.length - 1)) % services.length;
    setActiveService(next);
    event.currentTarget.parentElement.children[next].focus();
  };
  return (
    <section className="crm-section" id="institute-management" aria-labelledby="crm-title">
      <div className="shell">
        <header className="crm-intro">
          <div>
            <span className="crm-eyebrow"><i /> NEW AT RII</span>
            <p className="crm-category">COMPLETE INSTITUTE CRM & MANAGEMENT</p>
            <h2 id="crm-title">Your school, at its best.<br /><em>Every single day.</em></h2>
          </div>
          <div className="crm-intro-copy"><p>Fees, attendance, results, admissions, and campus stories. RII helps your school bring these everyday needs together, so your team has more time for the people who matter.</p><a href="#crm-services">Explore all five services</a></div>
        </header>

        <div className="crm-service-tabs" id="crm-services" role="tablist" aria-label="Explore RII’s five institute management services">
          {services.map((item, index) => <button type="button" key={item.label} id={`crm-service-${index}`} role="tab" aria-selected={activeService === index} aria-controls="crm-service-panel" tabIndex={activeService === index ? 0 : -1} className={activeService === index ? "active" : ""} onClick={() => setActiveService(index)} onKeyDown={(event) => selectWithKeyboard(event, index)}><span>0{index + 1}</span>{item.label}</button>)}
        </div>

        <div className="crm-story" id="crm-service-panel" role="tabpanel" aria-labelledby={`crm-service-${activeService}`} tabIndex="0">
          <div className="crm-people">
            <figure className="crm-campus-photo">
              {services.map((item, index) => <img key={item.photo.image} className={index === activeService ? "crm-photo-current" : ""} src={`https://images.unsplash.com/${item.photo.image}?auto=format&fit=crop&w=1100&q=85`} alt={item.photo.alt} style={{ objectPosition: item.photo.position }} aria-hidden={index !== activeService} loading="lazy" width="1100" height="740" />)}
              <span className="crm-photo-counter" aria-hidden="true">0{activeService + 1} / 05</span>
              <figcaption><a href={`https://unsplash.com/photos/${service.photo.source}`} target="_blank" rel="noreferrer">{service.photo.credit} / Unsplash</a></figcaption>
            </figure>
            <div className="crm-photo-note"><span>{service.photo.label}</span><p>{service.photo.caption}</p></div>
          </div>

          <div className="crm-service-panel">
            <div className="crm-panel-copy"><span className="crm-service-number">SERVICE 0{activeService + 1} OF 05</span><h3>{service.heading}</h3><p>{service.copy}</p><strong className="crm-benefit">{service.benefit}</strong></div>
            <div className="crm-how-it-works"><h4>How it works for your school</h4><ol>{service.steps.map(([title, copy]) => <li key={title}><strong>{title}</strong><p>{copy}</p></li>)}</ol></div>
            <div className="crm-preview-sheet" key={service.desk}>
              <div className="crm-sheet-top"><span>RII / {service.desk}</span><small>ILLUSTRATIVE OVERVIEW</small></div>
              <h4>{service.status}</h4>
              <dl>{service.rows.map(([label, value]) => <div key={label}><dt>{label}</dt><dd>{value}</dd></div>)}</dl>
              <p>{service.note}</p>
            </div>
            <button type="button" className="primary-button crm-enquire" onClick={onEnquire}>Let’s talk about the complete setup</button>
            <p className="crm-help-text">Tell us how your school works today. We’ll walk you through all five services.</p>
          </div>
        </div>

      </div>
    </section>
  );
}
