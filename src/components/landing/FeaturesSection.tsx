const features = [
  {
    icon: "fas fa-desktop",
    gradient: "from-blue-500 to-blue-600",
    title: "Comprehensive Activity Tracking",
    description: "Monitor apps, websites, files, USB devices, clipboards, and screens to capture a complete picture of employees' behaviors.",
    bullets: [
      "Application and window monitoring",
      "Website visit tracking",
      "File operation detection",
      "USB device events",
      "Screenshot with OCR",
    ],
  },
  {
    icon: "fas fa-brain",
    gradient: "from-purple-500 to-purple-600",
    title: "AI-Powered Risk Detection",
    description: "Leverage NLP and LLM-based analysis, combined with OCR and anomaly detection, to spot insider threats, data leaks, and policy violations in real time.",
    bullets: [
      "Credential exposure detection",
      "Compliance violation alerts",
      "Phishing URL checks",
      "Confidence scoring",
      "Context-aware flagging",
    ],
  },
  {
    icon: "fas fa-chart-line",
    gradient: "from-indigo-500 to-indigo-600",
    title: "Behavior & Trust Scoring",
    description: "Translate raw activity into productivity scores and risk levels, helping you identify employees and teams that need attention.",
    bullets: [
      "Productivity metrics",
      "Risk level assessment",
      "Trend analysis",
      "Outlier detection",
      "Coaching insights",
    ],
  },
  {
    icon: "fas fa-bullseye",
    gradient: "from-pink-500 to-pink-600",
    title: "KPI Management Integration",
    description: "Manage goals and expectations organization-wide, then the system will compare them with the actual activities from tracked employees' devices.",
    bullets: [
      "OKR/KPI alignment",
      "Progress tracking",
      "Goal cascading",
      "Performance validation",
      "API integration ready",
    ],
  },
  {
    icon: "fas fa-map-marker-alt",
    gradient: "from-green-500 to-green-600",
    title: "Smart Attendance Insights",
    description: "Add attendance and working-hour data into the analysis, creating deeper context for productivity and compliance.",
    bullets: [
      "Geo-based clock-in/out",
      "Location timestamps",
      "Daily plan tracking",
      "EOD result reports",
      "Geofencing compliance",
    ],
  },
  {
    icon: "fas fa-plug",
    gradient: "from-orange-500 to-orange-600",
    title: "Integrations & APIs",
    description: "REST endpoints for logs, dashboard stats, bulk upload, employee management, and security configuration.",
    bullets: [
      "RESTful API endpoints",
      "Swagger/Redoc documentation",
      "Webhook support",
      "CSV/JSON exports",
      "BI tool compatibility",
    ],
  },
];

export function FeaturesSection() {
  return (
    <section
      id="features"
      style={{ paddingTop: "5rem", paddingBottom: "5rem", paddingLeft: "1rem", paddingRight: "1rem" }}
    >
      <div style={{ maxWidth: "80rem", margin: "0 auto" }}>

        <div className="text-center" style={{ marginBottom: "4rem" }}>
          <h2 className="text-4xl md:text-5xl font-bold" style={{ marginBottom: "1rem" }}>
            Comprehensive Monitoring Platform
          </h2>
          <p className="text-xl text-gray-600 dark:text-gray-400">
            Five integrated pillars for complete visibility and control
          </p>
        </div>

        <div
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(auto-fit, minmax(300px, 1fr))",
            gap: "2rem",
          }}
        >
          {features.map((feature, index) => (
            <div
              key={index}
              className="glass-card rounded-2xl hover:shadow-2xl transition-all transform hover:-translate-y-2 group"
              style={{ padding: "2rem" }}
            >
              <div
                className={`bg-gradient-to-br ${feature.gradient} rounded-2xl flex items-center justify-center group-hover:scale-110 transition-transform shadow-lg`}
                style={{ width: "4rem", height: "4rem", marginBottom: "1.5rem" }}
              >
                <i className={`${feature.icon} text-white text-2xl`} />
              </div>

              <h3 className="text-2xl font-bold" style={{ marginBottom: "1rem" }}>
                {feature.title}
              </h3>

              <p className="text-gray-600 dark:text-gray-400" style={{ marginBottom: "1rem" }}>
                {feature.description}
              </p>

              <ul
                className="text-sm text-gray-600 dark:text-gray-400"
                style={{ display: "flex", flexDirection: "column", gap: "0.5rem", listStyle: "none", padding: 0, margin: 0 }}
              >
                {feature.bullets.map((bullet, i) => (
                  <li key={i} style={{ display: "flex", alignItems: "center" }}>
                    <i className="fas fa-check text-green-500" style={{ marginRight: "0.5rem", flexShrink: 0 }} />
                    {bullet}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}
