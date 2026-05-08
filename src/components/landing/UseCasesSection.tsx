export function UseCasesSection() {
  return (
    <section id="use-cases" className="py-20 px-4 sm:px-6 lg:px-8 bg-white/50 dark:bg-dark-secondary/50">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-4">Built for Every Team</h2>
          <p className="text-xl text-gray-600 dark:text-gray-400">From HR to IT, everyone benefits from unified insights</p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {/* Use Case 1 */}
          <div className="glass-card rounded-2xl p-8 hover:shadow-2xl transition-all">
            <div className="flex items-start space-x-4">
              <div className="w-14 h-14 bg-gradient-to-br from-blue-500 to-blue-600 rounded-xl flex items-center justify-center flex-shrink-0 shadow-lg">
                <i className="fas fa-users text-white text-xl"></i>
              </div>
              <div>
                <h3 className="text-2xl font-bold mb-3">HR & People Ops</h3>
                <p className="text-gray-600 dark:text-gray-400 mb-4">Attendance, timesheets, and KPI progress views in one place.</p>
                <ul className="space-y-2 text-sm text-gray-600 dark:text-gray-400">
                  <li><i className="fas fa-arrow-right text-blue-500 mr-2"></i> Automated timesheet generation</li>
                  <li><i className="fas fa-arrow-right text-blue-500 mr-2"></i> Attendance compliance tracking</li>
                  <li><i className="fas fa-arrow-right text-blue-500 mr-2"></i> Performance review data</li>
                </ul>
              </div>
            </div>
          </div>
          
          {/* Use Case 2 */}
          <div className="glass-card rounded-2xl p-8 hover:shadow-2xl transition-all">
            <div className="flex items-start space-x-4">
              <div className="w-14 h-14 bg-gradient-to-br from-red-500 to-red-600 rounded-xl flex items-center justify-center flex-shrink-0 shadow-lg">
                <i className="fas fa-shield-alt text-white text-xl"></i>
              </div>
              <div>
                <h3 className="text-2xl font-bold mb-3">Security & Compliance</h3>
                <p className="text-gray-600 dark:text-gray-400 mb-4">Insider risk, data leak detection, and full audit trail.</p>
                <ul className="space-y-2 text-sm text-gray-600 dark:text-gray-400">
                  <li><i className="fas fa-arrow-right text-red-500 mr-2"></i> Real-time threat alerts</li>
                  <li><i className="fas fa-arrow-right text-red-500 mr-2"></i> Compliance reporting</li>
                  <li><i className="fas fa-arrow-right text-red-500 mr-2"></i> Incident investigation tools</li>
                </ul>
              </div>
            </div>
          </div>
          
          {/* Use Case 3 */}
          <div className="glass-card rounded-2xl p-8 hover:shadow-2xl transition-all">
            <div className="flex items-start space-x-4">
              <div className="w-14 h-14 bg-gradient-to-br from-purple-500 to-purple-600 rounded-xl flex items-center justify-center flex-shrink-0 shadow-lg">
                <i className="fas fa-user-tie text-white text-xl"></i>
              </div>
              <div>
                <h3 className="text-2xl font-bold mb-3">Department Leaders</h3>
                <p className="text-gray-600 dark:text-gray-400 mb-4">Team productivity dashboards and coaching insights.</p>
                <ul className="space-y-2 text-sm text-gray-600 dark:text-gray-400">
                  <li><i className="fas fa-arrow-right text-purple-500 mr-2"></i> Team performance metrics</li>
                  <li><i className="fas fa-arrow-right text-purple-500 mr-2"></i> Workload distribution analysis</li>
                  <li><i className="fas fa-arrow-right text-purple-500 mr-2"></i> Coaching priority identification</li>
                </ul>
              </div>
            </div>
          </div>
          
          {/* Use Case 4 */}
          <div className="glass-card rounded-2xl p-8 hover:shadow-2xl transition-all">
            <div className="flex items-start space-x-4">
              <div className="w-14 h-14 bg-gradient-to-br from-green-500 to-green-600 rounded-xl flex items-center justify-center flex-shrink-0 shadow-lg">
                <i className="fas fa-cogs text-white text-xl"></i>
              </div>
              <div>
                <h3 className="text-2xl font-bold mb-3">IT & Operations</h3>
                <p className="text-gray-600 dark:text-gray-400 mb-4">Device inventory, agent health, and system metrics at a glance.</p>
                <ul className="space-y-2 text-sm text-gray-600 dark:text-gray-400">
                  <li><i className="fas fa-arrow-right text-green-500 mr-2"></i> Device posture monitoring</li>
                  <li><i className="fas fa-arrow-right text-green-500 mr-2"></i> Agent connectivity status</li>
                  <li><i className="fas fa-arrow-right text-green-500 mr-2"></i> System health dashboards</li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
