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
    <section id="features" className="py-20 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">

        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            Comprehensive Monitoring Platform
          </h2>
          <p className="text-xl text-gray-600 dark:text-gray-400">
            Five integrated pillars for complete visibility and control
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <div
              key={index}
              className="glass-card rounded-2xl p-8 hover:shadow-2xl transition-all transform hover:-translate-y-2 group"
            >
              <div
                className={`w-16 h-16 bg-gradient-to-br ${feature.gradient} rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform shadow-lg`}
              >
                <i className={`${feature.icon} text-white text-2xl`} />
              </div>

              <h3 className="text-2xl font-bold mb-4">{feature.title}</h3>

              <p className="text-gray-600 dark:text-gray-400 mb-4">
                {feature.description}
              </p>

              <ul className="space-y-2 text-sm text-gray-600 dark:text-gray-400">
                {feature.bullets.map((bullet, i) => (
                  <li key={i}>
                    <i className="fas fa-check text-green-500 mr-2" />
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
