import React, { useState, useEffect } from "react";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { motion, AnimatePresence } from "framer-motion";
import logo from "../assets/logo.png";

const Navbar = () => {
  const location = useLocation();
  const navigate = useNavigate();
  const [isServicesOpen, setIsServicesOpen] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [activeRoute, setActiveRoute] = useState("");
  const [isAuthenticated, setIsAuthenticated] = useState(false);

  useEffect(() => {
    const path = location.pathname.split("/")[1];
    setActiveRoute(path || "home");
    setIsMobileMenuOpen(false);

    // Check login state from localStorage (you can also use context or redux)
    const token = localStorage.getItem("token");
    setIsAuthenticated(!!token);
  }, [location]);

  const handleLogout = () => {
    localStorage.removeItem("token");
    setIsAuthenticated(false);
    navigate("/login");
  };

  const servicesDropdown = [
    { name: "Investment", to: "/services/investment", hasSubmenu: true },
    { name: "Insurance", to: "/services/insurance", hasSubmenu: true },
    { name: "Share Broking", to: "/services/retirement", hasSubmenu: true },
    { name: "Financial Services", to: "/services/tax", hasSubmenu: true }
  ];

  return (
    <nav className="bg-gray-50 border-b border-gray-100 sticky top-0 z-50 shadow-md">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          {/* Logo */}
          <Link to="/" className="flex items-center space-x-3">
            <img className="w-12 h-10" src={logo} alt="Logo" />
          </Link>

          {/* Desktop Nav */}
          <div className="hidden md:flex items-center space-x-6">
            <Link
              to="/"
              className={`text-sm font-medium transition-colors ${activeRoute === "home"
                ? "text-red-600"
                : "text-blue-900 hover:text-blue-700"
                }`}
            >
              Home
            </Link>


            <Link
              to="/about"
              className={`text-sm font-medium ${activeRoute === "about"
                ? "text-red-600"
                : "text-blue-900 hover:text-blue-800"
                }`}
            >
              About Us
            </Link>
            <Link
              to="/career"
              className={`text-sm font-medium ${activeRoute === "career"
                ? "text-red-600"
                : "text-blue-900 hover:text-blue-800"
                }`}
            >
              Career
            </Link>
            <Link
              to="/contact"
              className={`text-sm font-medium ${activeRoute === "contact"
                ? "text-red-600"
                : "text-blue-900 hover:text-blue-700"
                }`}
            >
              Contact Us
            </Link>

            {/* Auth Buttons */}
            {!isAuthenticated ? (
              <>
                <Link to="/login">
                  <button className="bg-blue-900/90 hover:bg-blue-900/80 text-white px-6 py-2 rounded-full font-medium text-sm">
                    Login
                  </button>
                </Link>
                <Link to="/signup">
                  <button className="bg-blue-900/90 hover:bg-blue-900/80 text-white px-6 py-2 rounded-full font-medium text-sm">
                    Sign up
                  </button>
                </Link>
              </>
            ) : (
              <button
                onClick={handleLogout}
                className="bg-blue-900 cursor-pointer hover:bg-blue-900/80 text-white px-6 py-2 rounded-full font-medium text-sm"
              >
                Logout
              </button>
            )}
          </div>

          {/* Mobile Menu Button */}
          <div className="md:hidden">
            <button
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              className="text-gray-600 hover:text-gray-900"
            >
              {isMobileMenuOpen ? (
                <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                </svg>
              ) : (
                <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
                </svg>
              )}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu with Framer Motion */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.3, ease: "easeInOut" }}
            className="md:hidden bg-white border-t border-gray-200 shadow-lg overflow-hidden"
          >
            <div className="flex flex-col px-4 py-3 space-y-3">
              <Link to="/" className="text-blue-900">Home</Link>
              <details>
                <summary className="cursor-pointer text-blue-900">Services</summary>
                <div className="ml-4 mt-2 space-y-2">
                  {servicesDropdown.map((s, idx) => (
                    <Link key={idx} to={s.to} className="block text-blue-700">
                      {s.name}
                    </Link>
                  ))}
                </div>
              </details>
              <Link to="/about" className="text-blue-900">About Us</Link>
              <Link to="/career" className="text-blue-900">Career</Link>
              <Link to="/contact" className="text-blue-900">Contact Us</Link>

              {!isAuthenticated ? (
                <>
                  <Link to="/login">
                    <button className="w-full bg-blue-900 text-white py-2 rounded-full">
                      Login
                    </button>
                  </Link>
                  <Link to="/signup">
                    <button className="w-full bg-blue-900 text-white py-2 rounded-full">
                      Sign up
                    </button>
                  </Link>
                </>
              ) : (
                <button
                  onClick={handleLogout}
                  className="w-full bg-blue-900 text-white py-2 rounded-full hover:bg-blue-900/80"
                >
                  Logout
                </button>
              )}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
};

export default Navbar;
