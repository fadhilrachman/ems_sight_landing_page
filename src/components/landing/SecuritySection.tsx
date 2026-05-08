const securityCards = [
  { icon: "fas fa-lock",           gradient: "from-blue-500 to-blue-600",   title: "Encryption",   description: "HTTPS/TLS in transit, secure storage at rest" },
  { icon: "fas fa-user-shield",    gradient: "from-purple-500 to-purple-600", title: "RBAC",        description: "Role-based access control for all users" },
  { icon: "fas fa-clipboard-list", gradient: "from-indigo-500 to-indigo-600", title: "Audit Trail", description: "Complete logging of all system actions" },
  { icon: "fas fa-database",       gradient: "from-green-500 to-green-600",   title: "Retention",   description: "Configurable data retention policies" },
];

export function SecuritySection() {
  return (
    <section
      id="security"
      style={{ paddingTop: "5rem", paddingBottom: "5rem", paddingLeft: "1rem", paddingRight: "1rem" }}
    >
      <div style={{ maxWidth: "80rem", margin: "0 auto" }}>

        <div className="text-center" style={{ marginBottom: "4rem" }}>
          <h2 className="text-4xl md:text-5xl font-bold" style={{ marginBottom: "1rem" }}>
            Security, Privacy &amp; Compliance
          </h2>
          <p className="text-xl text-gray-600 dark:text-gray-400">
            Built-in protections designed for transparency and governance
          </p>
        </div>

        <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(200px, 1fr))", gap: "2rem", marginBottom: "3rem" }}>
          {securityCards.map((card, i) => (
            <div key={i} className="glass-card rounded-2xl text-center hover:shadow-xl transition-all" style={{ padding: "1.5rem" }}>
              <div className={`bg-gradient-to-br ${card.gradient} rounded-xl flex items-center justify-center`} style={{ width: "3rem", height: "3rem", margin: "0 auto 1rem" }}>
                <i className={`${card.icon} text-white text-xl`} />
              </div>
              <h3 className="font-bold text-lg" style={{ marginBottom: "0.5rem" }}>{card.title}</h3>
              <p className="text-sm text-gray-600 dark:text-gray-400">{card.description}</p>
            </div>
          ))}
        </div>

        <div className="glass-card rounded-2xl" style={{ padding: "2rem" }}>
          <h3 className="text-2xl font-bold text-center" style={{ marginBottom: "1rem" }}>
            Technical Security Features
          </h3>

          <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(280px, 1fr))", gap: "1.5rem" }}>
            {/* Col 1 — Authentication & Authorization */}
            <div>
              <h4 className="font-semibold text-blue-600 dark:text-blue-400" style={{ marginBottom: "0.75rem" }}>
                Authentication &amp; Authorization
              </h4>
              <ul className="text-sm text-gray-600 dark:text-gray-400" style={{ display: "flex", flexDirection: "column", gap: "0.5rem", listStyle: "none", padding: 0, margin: 0 }}>
                <li><i className="fas fa-check-circle text-green-500" style={{ marginRight: "0.5rem" }} />JWT RS256 token-based auth</li>
                <li><i className="fas fa-check-circle text-green-500" style={{ marginRight: "0.5rem" }} />API key authentication for agents</li>
                <li><i className="fas fa-check-circle text-green-500" style={{ marginRight: "0.5rem" }} />SSO integration ready</li>
                <li><i className="fas fa-check-circle text-green-500" style={{ marginRight: "0.5rem" }} />Session management and timeout</li>
              </ul>
            </div>

            {/* Col 2 — Data Protection */}
            <div>
              <h4 className="font-semibold text-purple-600 dark:text-purple-400" style={{ marginBottom: "0.75rem" }}>
                Data Protection
              </h4>
              <ul className="text-sm text-gray-600 dark:text-gray-400" style={{ display: "flex", flexDirection: "column", gap: "0.5rem", listStyle: "none", padding: 0, margin: 0 }}>
                <li><i className="fas fa-check-circle text-green-500" style={{ marginRight: "0.5rem" }} />S3/local storage with encryption</li>
                <li><i className="fas fa-check-circle text-green-500" style={{ marginRight: "0.5rem" }} />PostgreSQL/SQLite with secure config</li>
                <li><i className="fas fa-check-circle text-green-500" style={{ marginRight: "0.5rem" }} />Redis cache with authentication</li>
                <li><i className="fas fa-check-circle text-green-500" style={{ marginRight: "0.5rem" }} />CORS and throttling safeguards</li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
