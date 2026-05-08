import { useState } from "react";

const FAQ_DATA = [
  {
    question: "What platforms do the agents support?",
    answer: "Windows and macOS. Agents capture application, website, screenshot/OCR, file, USB, and clipboard events depending on OS capabilities."
  },
  {
    question: "How is data secured?",
    answer: "HTTPS/TLS in transit, S3/local storage at rest, JWT RS256 auth, role-based access, and full audit logging. Optional throttling and CORS rules for production environments."
  },
  {
    question: "Can we customize what's monitored?",
    answer: "Yes. Include/exclude rules for directories, screenshot intervals, and sensitive-term lists are fully configurable through the admin dashboard."
  },
  {
    question: "Does EMSight replace our OKR/KPI tool?",
    answer: "No. EMSight integrates with your existing OKR/KPI system, aligning goals with verified device activities and showing progress widgets."
  },
  {
    question: "How does geo attendance work?",
    answer: "Users clock-in/out with location and timestamp. Daily plans and EOD results are attached to each day. Optional geofencing is available for compliance."
  },
  {
    question: "Will employees be notified about monitoring?",
    answer: "We recommend transparent policy notices. Admins can provide policy banners and documentation; EMSight provides audit trails for compliance verification."
  },
  {
    question: "What about performance impact?",
    answer: "The agent is lightweight, batches events, and uses backoff/retry logic. Screenshot intervals and monitored scopes can be tuned to minimize impact."
  },
  {
    question: "How do we get data out?",
    answer: "Use our REST APIs, CSV export in the Logs Explorer, or integrate with your BI stack via webhooks and standard data formats."
  },
  {
    question: "Can we host on-prem?",
    answer: "Yes. The Django backend supports containerized/on-prem deployments with Postgres/Redis/S3-compatible storage."
  },
  {
    question: "What's the typical rollout?",
    answer: "Create admin users, configure security terms, deploy agents with API keys, validate data flow, and iterate monitoring scopes based on organizational needs."
  }
];

function FAQItem({ question, answer }: { question: string; answer: string }) {
  const [open, setOpen] = useState(false);

  return (
    <div className="glass-card rounded-xl overflow-hidden">
      <button 
        onClick={() => setOpen(!open)} 
        className="w-full px-6 py-4 text-left flex justify-between items-center hover:bg-white/50 dark:hover:bg-gray-800/50 transition"
      >
        <span className="font-semibold text-lg">{question}</span>
        <i className={`fas fa-chevron-down transition-transform ${open ? "rotate-180" : ""}`}></i>
      </button>
      {open && (
        <div className="px-6 pb-4 text-gray-600 dark:text-gray-400 fade-in-up">
          <p>{answer}</p>
        </div>
      )}
    </div>
  );
}

export function FAQSection() {
  return (
    <section id="faq" className="py-20 px-4 sm:px-6 lg:px-8">
      <div className="max-w-4xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-4">Frequently Asked Questions</h2>
          <p className="text-xl text-gray-600 dark:text-gray-400">Everything you need to know about EMSight</p>
        </div>
        
        <div className="space-y-4">
          {FAQ_DATA.map((item, idx) => (
            <FAQItem key={idx} question={item.question} answer={item.answer} />
          ))}
        </div>
      </div>
    </section>
  );
}
