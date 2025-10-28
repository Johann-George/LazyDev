import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faTags,
  faSun,
  faMoon,
  faAngleDown,
  faBars,
  faTimes,
} from "@fortawesome/free-solid-svg-icons";
import { useState, useEffect, useRef } from "react";
import { Link, NavLink, useLocation, useNavigate } from "react-router-dom";
import { toast } from "react-toastify";

export default function Header() {
  const [theme, setTheme] = useState(() => {
    return localStorage.getItem("theme") === "dark" ? "dark" : "light";
  });

  const [isUserMenuOpen, setUserMenuOpen] = useState(false);
  const [isMobileMenuOpen, setMobileMenuOpen] = useState(false);
  const location = useLocation();
  const userMenuRef = useRef();
  const navigate = useNavigate();

  const toggleUserMenu = () => setUserMenuOpen((prev) => !prev);
  const toggleMobileMenu = () => setMobileMenuOpen((prev) => !prev);

  const isAuthenticated = false;

  useEffect(() => {
    if (theme === "dark") {
      document.documentElement.classList.add("dark");
    } else {
      document.documentElement.classList.remove("dark");
    }
    setUserMenuOpen(false);
    setMobileMenuOpen(false);
    
    const handleClickOutside = (event) => {
      if (userMenuRef.current && !userMenuRef.current.contains(event.target)) {
        setUserMenuOpen(false);
      }
    };
    document.addEventListener("mousedown", handleClickOutside);
    
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [theme, location.pathname]);

  const toggleTheme = () => {
    setTheme((prevTheme) => {
      const newTheme = prevTheme === "light" ? "dark" : "light";
      localStorage.setItem("theme", newTheme);
      return newTheme;
    });
  };

  const handleLogout = (e) => {
    e.preventDefault();
    toast.success("Logged out successfully!");
    navigate("/home");
  };

  const navLinkClass = ({ isActive }) =>
    `relative px-4 py-2 text-base font-semibold transition-all duration-300 ${
      isActive
        ? "text-emerald-500 dark:text-emerald-400"
        : "text-gray-700 dark:text-gray-300 hover:text-emerald-500 dark:hover:text-emerald-400"
    }`;

  const mobileNavLinkClass = ({ isActive }) =>
    `block px-4 py-3 text-lg font-semibold transition-all duration-300 rounded-lg ${
      isActive
        ? "bg-emerald-500/10 text-emerald-500 dark:text-emerald-400 border-l-4 border-emerald-500"
        : "text-gray-700 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-700"
    }`;

  const dropdownLinkClass =
    "block w-full text-left px-4 py-3 text-base font-medium text-gray-700 dark:text-gray-300 hover:bg-emerald-50 dark:hover:bg-gray-700 hover:text-emerald-600 dark:hover:text-emerald-400 transition-colors rounded-lg";

  return (
    <header className="bg-white/80 dark:bg-gray-900/80 backdrop-blur-lg border-b border-gray-200 dark:border-gray-700 shadow-sm z-50">
      <div className="max-w-[1400px] mx-auto px-6">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <Link 
            to="/" 
            className="flex items-center gap-2 group"
          >
            <div className="w-10 h-10 bg-gradient-to-br from-emerald-500 to-cyan-500 rounded-lg flex items-center justify-center transform group-hover:scale-110 transition-transform duration-300 shadow-lg">
              <FontAwesomeIcon icon={faTags} className="h-5 w-5 text-white" />
            </div>
            <span className="text-2xl font-bold bg-gradient-to-r from-emerald-600 to-cyan-600 dark:from-emerald-400 dark:to-cyan-400 bg-clip-text text-transparent">
              LazyDev
            </span>
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden lg:flex items-center gap-2">
            <NavLink to="/practice" className={navLinkClass}>
              Practice
            </NavLink>
            <NavLink to="/roadmap" className={navLinkClass}>
              Roadmap
            </NavLink>
            <NavLink to="/about" className={navLinkClass}>
              About
            </NavLink>
            <NavLink to="/contact" className={navLinkClass}>
              Contact
            </NavLink>
          </nav>

          {/* Right Section */}
          <div className="flex items-center gap-3">
            {/* Theme Toggle */}
            <button
              onClick={toggleTheme}
              className="w-10 h-10 flex items-center justify-center rounded-lg border-2 border-gray-300 dark:border-gray-600 hover:border-emerald-500 dark:hover:border-emerald-500 transition-all duration-300 hover:scale-110 group"
              aria-label="Toggle theme"
            >
              <FontAwesomeIcon
                icon={theme === "dark" ? faMoon : faSun}
                className="w-5 h-5 text-gray-700 dark:text-gray-300 group-hover:text-emerald-500 transition-colors"
              />
            </button>

            {/* User Menu / Login - Desktop */}
            <div className="hidden lg:block">
              {isAuthenticated ? (
                <div className="relative" ref={userMenuRef}>
                  <button
                    onClick={toggleUserMenu}
                    className="flex items-center gap-2 px-4 py-2 rounded-lg border-2 border-gray-300 dark:border-gray-600 hover:border-emerald-500 dark:hover:border-emerald-500 transition-all duration-300 group"
                  >
                    <div className="w-8 h-8 rounded-full bg-gradient-to-br from-emerald-500 to-cyan-500 flex items-center justify-center text-white font-semibold text-sm">
                      JD
                    </div>
                    <span className="font-semibold text-gray-700 dark:text-gray-300 group-hover:text-emerald-500 dark:group-hover:text-emerald-400">
                      John Doe
                    </span>
                    <FontAwesomeIcon
                      icon={faAngleDown}
                      className={`w-4 h-4 text-gray-700 dark:text-gray-300 transition-transform ${
                        isUserMenuOpen ? "rotate-180" : ""
                      }`}
                    />
                  </button>
                  
                  {isUserMenuOpen && (
                    <div className="absolute right-0 mt-2 w-56 bg-white dark:bg-gray-800 border-2 border-gray-200 dark:border-gray-700 rounded-xl shadow-2xl z-20 overflow-hidden animate-slideDown">
                      <div className="p-2 space-y-1">
                        <Link to="/profile" className={dropdownLinkClass}>
                          Profile
                        </Link>
                        <Link to="/orders" className={dropdownLinkClass}>
                          My Progress
                        </Link>
                        <Link to="/settings" className={dropdownLinkClass}>
                          Settings
                        </Link>
                        <hr className="my-2 border-gray-200 dark:border-gray-700" />
                        <Link
                          to="/home"
                          onClick={handleLogout}
                          className="block w-full text-left px-4 py-3 text-base font-medium text-rose-600 dark:text-rose-400 hover:bg-rose-50 dark:hover:bg-rose-900/20 transition-colors rounded-lg"
                        >
                          Logout
                        </Link>
                      </div>
                    </div>
                  )}
                </div>
              ) : (
                <Link
                  to="/login"
                  className="px-6 py-2.5 bg-gradient-to-r from-emerald-500 to-cyan-500 text-white font-semibold rounded-lg hover:shadow-lg hover:scale-105 transition-all duration-300"
                >
                  Login
                </Link>
              )}
            </div>

            {/* Mobile Menu Toggle */}
            <button
              onClick={toggleMobileMenu}
              className="lg:hidden w-10 h-10 flex items-center justify-center rounded-lg border-2 border-gray-300 dark:border-gray-600 hover:border-emerald-500 dark:hover:border-emerald-500 transition-all duration-300"
              aria-label="Toggle menu"
            >
              <FontAwesomeIcon
                icon={isMobileMenuOpen ? faTimes : faBars}
                className="w-5 h-5 text-gray-700 dark:text-gray-300"
              />
            </button>
          </div>
        </div>

        {/* Mobile Menu */}
        {isMobileMenuOpen && (
          <div className="lg:hidden py-4 border-t border-gray-200 dark:border-gray-700 animate-slideDown">
            <nav className="space-y-2">
              <NavLink to="/practice" className={mobileNavLinkClass}>
                Practice
              </NavLink>
              <NavLink to="/roadmap" className={mobileNavLinkClass}>
                Roadmap
              </NavLink>
              <NavLink to="/about" className={mobileNavLinkClass}>
                About
              </NavLink>
              <NavLink to="/contact" className={mobileNavLinkClass}>
                Contact
              </NavLink>
              
              <div className="pt-4 mt-4 border-t border-gray-200 dark:border-gray-700">
                {isAuthenticated ? (
                  <div className="space-y-2">
                    <Link to="/profile" className="block px-4 py-3 text-base font-medium text-gray-700 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-700 rounded-lg transition-colors">
                      Profile
                    </Link>
                    <Link to="/orders" className="block px-4 py-3 text-base font-medium text-gray-700 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-700 rounded-lg transition-colors">
                      My Progress
                    </Link>
                    <Link
                      to="/home"
                      onClick={handleLogout}
                      className="block px-4 py-3 text-base font-medium text-rose-600 dark:text-rose-400 hover:bg-rose-50 dark:hover:bg-rose-900/20 rounded-lg transition-colors"
                    >
                      Logout
                    </Link>
                  </div>
                ) : (
                  <Link
                    to="/login"
                    className="block px-4 py-3 bg-gradient-to-r from-emerald-500 to-cyan-500 text-white text-center font-semibold rounded-lg hover:shadow-lg transition-all duration-300"
                  >
                    Login
                  </Link>
                )}
              </div>
            </nav>
          </div>
        )}
      </div>

      <style jsx>{`
        @keyframes slideDown {
          from {
            opacity: 0;
            transform: translateY(-10px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }
        .animate-slideDown {
          animation: slideDown 0.3s ease-out;
        }
      `}</style>
    </header>
  );
}