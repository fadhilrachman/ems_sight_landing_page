import { useModal } from "./ModalProvider";

export function Footer() {
  const { openPrivacy, openTos } = useModal();

  return (
    <footer className="glass border-t border-white/20 py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-8">
          {/* Company Info */}
          <div className="col-span-1 md:col-span-2">
            <div className="flex items-center space-x-3 mb-4">
              <div className="w-10 h-10 rounded-lg flex items-center justify-center overflow-hidden">
                <img
                  src="https://arnatech.ap-south-1.linodeobjects.com/public%2Femsplus-mark.svg"
                  alt="EMS+ logo"
                  className="w-full h-full"
                  loading="lazy"
                  decoding="async"
                />
              </div>
              <span className="text-xl font-bold">EMS+ by Arnatech</span>
            </div>
            <p className="text-gray-600 dark:text-gray-400 mb-4">
              AI-powered employee monitoring, KPI management, and smart attendance for modern organizations.
            </p>
            <div className="space-y-2 text-sm text-gray-600 dark:text-gray-400">
              <div className="flex items-center">
                <i className="fas fa-envelope mr-3 text-blue-500" />
                <a href="mailto:contact@arnatech.id" className="hover:text-blue-600 dark:hover:text-blue-400">
                  contact@arnatech.id
                </a>
              </div>
              <div className="flex items-center">
                <i className="fas fa-globe mr-3 text-blue-500" />
                <a href="https://arnatech.id" target="_blank" rel="noreferrer" className="hover:text-blue-600 dark:hover:text-blue-400">
                  arnatech.id
                </a>
              </div>
              <div className="flex items-start">
                <i className="fas fa-map-marker-alt mr-3 text-blue-500 mt-1" />
                <span>165 Tower 14th Unit E - TB Simatupang, South Jakarta</span>
              </div>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="font-bold mb-4">Product</h3>
            <ul className="space-y-2 text-sm text-gray-600 dark:text-gray-400">
              <li><a href="#features" className="hover:text-blue-600 dark:hover:text-blue-400">Features</a></li>
              <li><a href="#security" className="hover:text-blue-600 dark:hover:text-blue-400">Security</a></li>
              <li><a href="#use-cases" className="hover:text-blue-600 dark:hover:text-blue-400">Use Cases</a></li>
            </ul>
          </div>

          {/* Resources */}
          <div>
            <h3 className="font-bold mb-4">Resources</h3>
            <ul className="space-y-2 text-sm text-gray-600 dark:text-gray-400">
              <li><a href="#faq" className="hover:text-blue-600 dark:hover:text-blue-400">FAQ</a></li>
              <li>
                <button type="button" onClick={openPrivacy} className="hover:text-blue-600 dark:hover:text-blue-400">
                  Privacy Policy
                </button>
              </li>
              <li>
                <button type="button" onClick={openTos} className="hover:text-blue-600 dark:hover:text-blue-400">
                  Terms of Service
                </button>
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-white/20 pt-8 flex flex-col md:flex-row justify-between items-center text-sm text-gray-600 dark:text-gray-400">
          <p>&copy; 2025 ARNA Technology. All rights reserved.</p>
          <div className="flex space-x-6 mt-4 md:mt-0">
            <button type="button" onClick={openPrivacy} className="hover:text-blue-600 dark:hover:text-blue-400">
              Privacy Policy
            </button>
            <button type="button" onClick={openTos} className="hover:text-blue-600 dark:hover:text-blue-400">
              Terms of Service
            </button>
          </div>
        </div>
      </div>
    </footer>
  );
}
