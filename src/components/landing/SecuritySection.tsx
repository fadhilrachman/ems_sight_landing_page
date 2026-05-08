const securityCards = [
  { icon: "fas fa-lock",           gradient: "from-blue-500 to-blue-600",   title: "Encryption",   description: "HTTPS/TLS in transit, secure storage at rest" },
  { icon: "fas fa-user-shield",    gradient: "from-purple-500 to-purple-600", title: "RBAC",        description: "Role-based access control for all users" },
  { icon: "fas fa-clipboard-list", gradient: "from-indigo-500 to-indigo-600", title: "Audit Trail", description: "Complete logging of all system actions" },
  { icon: "fas fa-database",       gradient: "from-green-500 to-green-600",   title: "Retention",   description: "Configurable data retention policies" },
];

export function SecuritySection() {
  return (
    <section id="security" className="py-20 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">

        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            Security, Privacy &amp; Compliance
          </h2>
          <p className="text-xl text-gray-600 dark:text-gray-400">
            Built-in protections designed for transparency and governance
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {securityCards.map((card, i) => (
            <div key={i} className="glass-card rounded-2xl p-6 text-center hover:shadow-xl transition-all">
              <div className={`w-12 h-12 bg-gradient-to-br ${card.gradient} rounded-xl flex items-center justify-center mx-auto mb-4`}>
                <i className={`${card.icon} text-white text-xl`} />
              </div>
              <h3 className="font-bold text-lg mb-2">{card.title}</h3>
              <p className="text-sm text-gray-600 dark:text-gray-400">{card.description}</p>
            </div>
          ))}
        </div>

        <div className="mt-12 glass-card rounded-2xl p-8">
          <h3 className="text-2xl font-bold mb-4 text-center">Technical Security Features</h3>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div>
              <h4 className="font-semibold mb-3 text-blue-600 dark:text-blue-400">
                Authentication &amp; Authorization
              </h4>
              <ul className="space-y-2 text-sm text-gray-600 dark:text-gray-400">
                <li><i className="fas fa-check-circle text-green-500 mr-2" />JWT RS256 token-based auth</li>
                <li><i className="fas fa-check-circle text-green-500 mr-2" />API key authentication for agents</li>
                <li><i className="fas fa-check-circle text-green-500 mr-2" />SSO integration ready</li>
                <li><i className="fas fa-check-circle text-green-500 mr-2" />Session management and timeout</li>
              </ul>
            </div>
            <div>
              <h4 className="font-semibold mb-3 text-purple-600 dark:text-purple-400">
                Data Protection
              </h4>
              <ul className="space-y-2 text-sm text-gray-600 dark:text-gray-400">
                <li><i className="fas fa-check-circle text-green-500 mr-2" />S3/local storage with encryption</li>
                <li><i className="fas fa-check-circle text-green-500 mr-2" />PostgreSQL/SQLite with secure config</li>
                <li><i className="fas fa-check-circle text-green-500 mr-2" />Redis cache with authentication</li>
                <li><i className="fas fa-check-circle text-green-500 mr-2" />CORS and throttling safeguards</li>
              </ul>
            </div>
          </div>
        </div>

      </div>
    </section>
  );
}
