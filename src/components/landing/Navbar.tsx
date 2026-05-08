import { useState, useEffect } from "react";

const NAV_LINKS = [
  { label: "Features",  href: "#features"  },
  { label: "Security",  href: "#security"  },
  { label: "Use Cases", href: "#use-cases" },
  { label: "FAQ",       href: "#faq"       },
];

export function Navbar() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [darkMode, setDarkMode] = useState(true);

  useEffect(() => {
    const saved = localStorage.getItem("darkMode");
    let isDark: boolean;
    if (saved !== null) {
      isDark = saved === "true";
    } else {
      isDark = window.matchMedia?.("(prefers-color-scheme: dark)").matches ?? false;
      localStorage.setItem("darkMode", String(isDark));
    }
    setDarkMode(isDark);
    applyTheme(isDark);
  }, []);

  const applyTheme = (isDark: boolean) => {
    if (isDark) {
      document.documentElement.classList.add("dark");
    } else {
      document.documentElement.classList.remove("dark");
    }
  };

  const toggleDarkMode = () => {
    const next = !darkMode;
    setDarkMode(next);
    localStorage.setItem("darkMode", String(next));
    applyTheme(next);
  };

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 glass shadow-lg">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">

          {/* Logo */}
          <div className="flex items-center space-x-3">
            <div className="w-10 h-10 rounded-lg flex items-center justify-center shadow-lg overflow-hidden">
              <img
                src="https://arnatech.ap-south-1.linodeobjects.com/public%2Femsplus-mark.svg"
                alt="EMSight logo"
                className="w-full h-full"
              />
            </div>
            <span className="text-xl font-bold bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
              EMSight by Arnatech
            </span>
          </div>

          {/* Desktop Menu */}
          <div className="hidden md:flex items-center space-x-8">
            {NAV_LINKS.map((link) => (
              <a
                key={link.href}
                href={link.href}
                className="hover:text-blue-600 dark:hover:text-blue-400 transition"
              >
                {link.label}
              </a>
            ))}
            <button
              onClick={toggleDarkMode}
              className="p-2 rounded-lg hover:bg-white/20 dark:hover:bg-gray-800/50 transition"
              aria-label={darkMode ? "Switch to light mode" : "Switch to dark mode"}
            >
              <i className={`fas ${darkMode ? "fa-sun" : "fa-moon"}`} />
            </button>
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setMobileMenuOpen((prev) => !prev)}
            className="md:hidden p-2 rounded-lg hover:bg-white/20 dark:hover:bg-gray-800/50"
            aria-label="Toggle mobile menu"
          >
            <i className={`fas ${mobileMenuOpen ? "fa-times" : "fa-bars"}`} />
          </button>

        </div>
      </div>

      {/* Mobile Menu */}
      {mobileMenuOpen && (
        <div className="md:hidden glass-card border-t border-white/20">
          <div className="px-4 py-4 space-y-3">
            {NAV_LINKS.map((link) => (
              <a
                key={link.href}
                href={link.href}
                onClick={() => setMobileMenuOpen(false)}
                className="block py-2 hover:text-blue-600 dark:hover:text-blue-400 transition"
              >
                {link.label}
              </a>
            ))}
          </div>
        </div>
      )}
    </nav>
  );
}
