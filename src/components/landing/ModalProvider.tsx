import { createContext, useContext, useState, type ReactNode } from "react";

// ─── Context ───────────────────────────────────────────────────────
interface ModalContextType {
  openCTA: () => void;
  openPrivacy: () => void;
  openTos: () => void;
}

const ModalContext = createContext<ModalContextType>({
  openCTA: () => {},
  openPrivacy: () => {},
  openTos: () => {},
});

export function useModal() {
  return useContext(ModalContext);
}

// ─── Provider + all 3 modals ───────────────────────────────────────
export function ModalProvider({ children }: { children: ReactNode }) {
  const [showCTA, setShowCTA] = useState(false);
  const [showPrivacy, setShowPrivacy] = useState(false);
  const [showTos, setShowTos] = useState(false);

  return (
    <ModalContext.Provider
      value={{
        openCTA: () => setShowCTA(true),
        openPrivacy: () => setShowPrivacy(true),
        openTos: () => setShowTos(true),
      }}
    >
      {children}

      {/* ═══ CTA Modal ═══ */}
      {showCTA && (
        <div
          className="fixed inset-0 z-50 overflow-y-auto"
          onClick={(e) => { if (e.target === e.currentTarget) setShowCTA(false); }}
        >
          <div className="flex items-center justify-center min-h-screen px-4 pt-4 pb-20 text-center sm:block sm:p-0">
            <div className="fixed inset-0 transition-opacity bg-gray-900/75 backdrop-blur-sm" aria-hidden="true" />
            <div className="inline-block align-bottom glass-card rounded-3xl text-left overflow-hidden shadow-2xl transform transition-all sm:my-8 sm:align-middle sm:max-w-lg sm:w-full">
              <div className="p-8">
                <div className="flex justify-between items-start mb-6">
                  <h3 className="text-3xl font-bold bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
                    Get Started
                  </h3>
                  <button
                    onClick={() => setShowCTA(false)}
                    className="text-gray-500 hover:text-gray-700 dark:text-gray-400 dark:hover:text-gray-200"
                    aria-label="Close modal"
                  >
                    <i className="fas fa-times text-xl" />
                  </button>
                </div>

                <p className="text-gray-600 dark:text-gray-400 mb-8">
                  Choose how you'd like to connect with us:
                </p>

                <div className="space-y-4">
                  <a
                    href="https://wa.me/6285811144421?text=Hi%2C%20I%27m%20interested%20in%20learning%20more%20about%20EMS%2B"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="block w-full px-6 py-4 bg-gradient-to-r from-green-500 to-green-600 hover:from-green-600 hover:to-green-700 text-white rounded-xl font-semibold shadow-lg hover:shadow-green-500/50 transition-all transform hover:scale-105 text-center"
                  >
                    <i className="fab fa-whatsapp mr-3 text-xl" /> Chat on WhatsApp
                  </a>
                  <a
                    href="mailto:contact@arnatech.id?subject=EMS%2B%20Demo%20Request&body=Hi%2C%0A%0AI%27m%20interested%20in%20scheduling%20a%20demo%20of%20EMS%2B.%0A%0AName%3A%20%0ACompany%3A%20%0ARole%3A%20%0A%0AThank%20you!"
                    className="block w-full px-6 py-4 glass hover:bg-white/90 dark:hover:bg-gray-800/90 rounded-xl font-semibold shadow-lg transition-all transform hover:scale-105 text-center"
                  >
                    <i className="fas fa-envelope mr-3" /> Email Us
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}

      {/* ═══ Privacy Policy Modal ═══ */}
      {showPrivacy && (
        <div
          className="fixed inset-0 z-50 overflow-y-auto"
          onClick={(e) => { if (e.target === e.currentTarget) setShowPrivacy(false); }}
        >
          <div className="flex items-center justify-center min-h-screen px-4 py-10 text-center">
            <div className="fixed inset-0 bg-gray-900/75 backdrop-blur-sm" />
            <div className="relative glass-card rounded-3xl text-left overflow-hidden shadow-2xl sm:max-w-3xl w-full">
              <div className="p-8 max-h-[80vh] overflow-y-auto">
                <div className="flex justify-between items-start mb-6">
                  <h3 className="text-2xl font-bold">Privacy Policy</h3>
                  <button
                    onClick={() => setShowPrivacy(false)}
                    className="text-gray-500 hover:text-gray-700 dark:text-gray-400 dark:hover:text-gray-200"
                    aria-label="Close privacy policy"
                  >
                    <i className="fas fa-times text-xl" />
                  </button>
                </div>
                <div className="prose prose-invert max-w-none text-gray-200 policy-content">
                  <p className="text-sm opacity-80">Last updated: 13 Oct 2025</p>
                  <h4>1. Who We Are</h4>
                  <p>EMSight is an employee monitoring and productivity platform operated by your organization (the "Customer"). In most deployments, the Customer is the <strong>Data Controller</strong> of the personal data processed in EMSight, and ARNA Technology acts as a <strong>Data Processor</strong>/service provider. Where ARNA Technology operates EMSight directly for a client, ARNA Technology may act as controller for limited service operations data (e.g., support tickets, billing contacts).</p>
                  <h4>2. Scope</h4>
                  <p>This Privacy Policy describes how EMSight processes information collected from endpoints (devices), users, and administrators when the platform is used by Customer's workforce. It does not replace your company's internal monitoring policy; rather, it should be read together with it.</p>
                  <h4>3. Information We Collect</h4>
                  <ul>
                    <li><strong>Activity &amp; Usage Data</strong>: application names, window titles, website titles/URLs, durations, clipboard text events (if enabled), file operations metadata (path, action, size), and USB device events.</li>
                    <li><strong>Screenshots &amp; OCR</strong>: screen images and extracted text, captured at configured intervals or triggers (if enabled).</li>
                    <li><strong>Device &amp; Technical Data</strong>: device identifiers, operating system, timestamps, agent status, IPs/logs necessary for security and troubleshooting.</li>
                    <li><strong>Attendance Data</strong>: clock-in/out timestamps, geolocation at attendance events, daily plan and end-of-day notes (if attendance is enabled).</li>
                    <li><strong>Account &amp; Admin Data</strong>: names, emails, roles/permissions for platform administrators and users.</li>
                  </ul>
                  <h4>4. Purposes of Processing</h4>
                  <ul>
                    <li>Provide monitoring dashboards, analytics, alerts, exports, and audit logs to authorized users.</li>
                    <li>Help detect policy violations, insider risk, phishing, and data leakage using configured rules and AI-assisted analysis.</li>
                    <li>Support productivity measurement (e.g., behavior/trust scoring) and operational insights.</li>
                    <li>Enable attendance, workforce management, and compliance reporting.</li>
                    <li>Secure, maintain, and improve the platform; debug incidents; prevent fraud and abuse.</li>
                  </ul>
                  <h4>5. Legal Bases</h4>
                  <p>Depending on jurisdiction and Customer policy, processing may rely on one or more of: legitimate interests in security and productivity; performance of a contract; compliance with legal obligations; or consent where required. The Customer determines the appropriate legal basis for workforce monitoring within its organization.</p>
                  <h4>6. Data Sharing &amp; Transfers</h4>
                  <ul>
                    <li><strong>Sub‑processors</strong>: cloud storage (e.g., S3‑compatible), email/push notification providers, analytics and security vendors used to operate EMSight. We require appropriate data protection commitments by contract.</li>
                    <li><strong>Intra‑group/International Transfers</strong>: where data moves across borders, we use appropriate safeguards (e.g., SCCs or equivalent mechanisms) as applicable.</li>
                    <li><strong>Legal Requests</strong>: data may be disclosed to competent authorities when required by law, following due process.</li>
                  </ul>
                  <h4>7. Security</h4>
                  <ul>
                    <li>Transport security via HTTPS/TLS; signed JWT (RS256) for API access.</li>
                    <li>Role‑based access control, audit logging, and configurable throttling/CORS.</li>
                    <li>Media in S3/local storage per deployment; access controlled by Customer policy.</li>
                  </ul>
                  <h4>8. Retention</h4>
                  <p>Retention periods are defined by the Customer's policy and regulatory requirements. EMSight provides tools to configure retention, export data, and delete content upon authorized request.</p>
                  <h4>9. Your Rights</h4>
                  <p>Subject to applicable law and relationship with the Customer, you may have rights to access, rectify, erase, restrict, port, or object to processing of your personal data. Requests should be directed to your employer (the Customer). ARNA Technology will support the Customer in responding to such requests.</p>
                  <h4>10. Cookies &amp; Similar Technologies</h4>
                  <p>EMSight primarily uses essential cookies/local storage for authentication and preferences (e.g., theme). Optional analytics cookies are only used if configured by the Customer with appropriate notices.</p>
                  <h4>11. Children</h4>
                  <p>EMSight is a business product not intended for children. It should only be used for workforce monitoring by organizations.</p>
                  <h4>12. Contact</h4>
                  <p>Questions about this policy or data protection should be sent to <a href="mailto:contact@arnatech.id" className="underline">contact@arnatech.id</a>. For workforce monitoring matters, contact your organization's administrator or HR.</p>
                  <h4>13. Changes</h4>
                  <p>We may update this Privacy Policy to reflect operational, legal, or regulatory changes. Material changes will be communicated through the product or via the Customer.</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}

      {/* ═══ Terms of Service Modal ═══ */}
      {showTos && (
        <div
          className="fixed inset-0 z-50 overflow-y-auto"
          onClick={(e) => { if (e.target === e.currentTarget) setShowTos(false); }}
        >
          <div className="flex items-center justify-center min-h-screen px-4 py-10 text-center">
            <div className="fixed inset-0 bg-gray-900/75 backdrop-blur-sm" />
            <div className="relative glass-card rounded-3xl text-left overflow-hidden shadow-2xl sm:max-w-3xl w-full">
              <div className="p-8 max-h-[80vh] overflow-y-auto">
                <div className="flex justify-between items-start mb-6">
                  <h3 className="text-2xl font-bold">Terms of Service</h3>
                  <button
                    onClick={() => setShowTos(false)}
                    className="text-gray-500 hover:text-gray-700 dark:text-gray-400 dark:hover:text-gray-200"
                    aria-label="Close terms of service"
                  >
                    <i className="fas fa-times text-xl" />
                  </button>
                </div>
                <div className="prose prose-invert max-w-none text-gray-200 policy-content">
                  <p className="text-sm opacity-80">Last updated: 13 Oct 2025</p>
                  <h4>1. Agreement to Terms</h4>
                  <p>These Terms of Service (the "Terms") govern access to and use of EMSight by organizations and their authorized users ("Customer", "you"). By accessing EMSight, you agree to these Terms and any policies referenced herein.</p>
                  <h4>2. Accounts &amp; Access</h4>
                  <ul>
                    <li>Customer is responsible for configuring roles/permissions and for maintaining the confidentiality of credentials.</li>
                    <li>Customer ensures users are authorized and comply with applicable laws and corporate policies.</li>
                    <li>Customer remains responsible for activities conducted under its accounts.</li>
                  </ul>
                  <h4>3. Acceptable Use</h4>
                  <ul>
                    <li>No interference with or disruption of the service or networks.</li>
                    <li>No attempts to bypass or defeat security controls.</li>
                    <li>No reverse engineering except as permitted by law.</li>
                    <li>No use that violates privacy, employment, export, or other applicable laws.</li>
                  </ul>
                  <h4>4. Customer Data &amp; Ownership</h4>
                  <p>All monitoring data and content collected through EMSight is owned and controlled by the Customer. ARNA Technology processes such data solely to provide the service, in accordance with Customer instructions and applicable data protection agreements.</p>
                  <h4>5. Security &amp; Privacy</h4>
                  <p>We implement administrative, technical, and physical safeguards appropriate to the risk, including HTTPS/TLS, RBAC, audit logs, and secure storage. Privacy practices are described in our Privacy Policy.</p>
                  <h4>6. Availability &amp; Support</h4>
                  <p>We aim for high availability but do not guarantee uninterrupted operation. Planned maintenance or factors beyond our control may cause downtime. Support scope and SLAs (if any) are defined in the applicable order or agreement.</p>
                  <h4>7. Third‑Party Services</h4>
                  <p>EMSight may integrate with third‑party services (e.g., storage, notifications, OKR/attendance systems). Customer's use of third‑party services is governed by those providers' terms and privacy notices.</p>
                  <h4>8. Term &amp; Termination</h4>
                  <ul>
                    <li>These Terms apply for the subscription term or while you access EMSight.</li>
                    <li>Either party may terminate for material breach not cured within a reasonable period.</li>
                    <li>Upon termination, Customer may export data within a limited window; thereafter data may be deleted according to retention policies.</li>
                  </ul>
                  <h4>9. Warranties &amp; Disclaimers</h4>
                  <p>EMSight is provided "as is" and "as available." To the maximum extent permitted by law, we disclaim implied warranties of merchantability, fitness for a particular purpose, and non‑infringement.</p>
                  <h4>10. Limitation of Liability</h4>
                  <p>To the maximum extent permitted by law, neither party will be liable for indirect, incidental, special, consequential, or punitive damages, or for lost profits, revenues, or data. Each party's aggregate liability under these Terms is limited to the amounts paid or payable for the service in the 12 months preceding the claim.</p>
                  <h4>11. Confidentiality</h4>
                  <p>Each party will protect the other's confidential information with at least reasonable care and use it only as necessary to perform under these Terms.</p>
                  <h4>12. Compliance</h4>
                  <p>Customer is responsible for implementing the service in a manner compliant with labor, privacy, and monitoring laws applicable to its workforce (including providing required notices and obtaining consents where necessary).</p>
                  <h4>13. Governing Law</h4>
                  <p>These Terms are governed by the laws applicable at ARNA Technology's principal place of business, without regard to conflict‑of‑law principles, unless otherwise agreed in writing.</p>
                  <h4>14. Changes</h4>
                  <p>We may update these Terms to reflect operational or legal changes. Material changes will be communicated through the product or via the Customer. Continued use after changes becomes effective constitutes acceptance.</p>
                  <h4>15. Contact</h4>
                  <p>For questions about these Terms, contact <a href="mailto:contact@arnatech.id" className="underline">contact@arnatech.id</a>.</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}
    </ModalContext.Provider>
  );
}
