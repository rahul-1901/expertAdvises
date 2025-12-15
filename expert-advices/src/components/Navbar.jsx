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

    // Check auth state from localStorage (you can use token/session)
    const token = localStorage.getItem("token");
    setIsAuthenticated(!!token);
  }, [location]);

  const handleLogout = () => {
    localStorage.removeItem("token"); // clear auth token
    setIsAuthenticated(false);
    navigate("/"); // redirect to homepage
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
              className={`text-sm font-medium transition-colors ${
                activeRoute === "home"
                  ? "text-red-600"
                  : "text-blue-900 hover:text-blue-700"
              }`}
            >
              Home
            </Link>

            {/* Services */}
            <div
              className="relative"
              onMouseEnter={() => setIsServicesOpen(true)}
              onMouseLeave={() => setIsServicesOpen(false)}
            >
              <button
                className={`flex items-center text-sm cursor-pointer font-medium transition-colors ${
                  activeRoute === "services"
                    ? "text-red-600"
                    : "text-blue-900 hover:text-blue-800"
                }`}
              >
                Services
                <svg
                  className={`w-4 h-4 ml-1 transition-transform ${
                    isServicesOpen ? "rotate-180" : ""
                  }`}
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M19 9l-7 7-7-7"
                  />
                </svg>
              </button>

              <div
                className={`absolute cursor-pointer top-full left-0 mt-0 w-54 bg-white rounded-lg shadow-lg border border-gray-100 transition-all duration-300 origin-top z-50 ${
                  isServicesOpen
                    ? "opacity-100 scale-100 translate-y-0"
                    : "opacity-0 scale-95 -translate-y-2 pointer-events-none"
                }`}
              >
                <div className="py-2">
                  {servicesDropdown.map((service, index) => (
                    <div key={index} className="relative group">
                      <Link
                        to={service.hasSubmenu ? "#" : service.to}
                        className="flex items-center justify-between px-4 py-3 text-blue-900 hover:bg-blue-50 transition-colors text-sm"
                      >
                        <span>{service.name}</span>
                        {service.hasSubmenu && (
                          <svg
                            className="w-4 h-4 text-gray-400"
                            fill="none"
                            stroke="currentColor"
                            viewBox="0 0 24 24"
                          >
                            <path
                              strokeLinecap="round"
                              strokeLinejoin="round"
                              strokeWidth={2}
                              d="M9 5l7 7-7 7"
                            />
                          </svg>
                        )}
                      </Link>

                      {/* Submenu blocks (unchanged) */}
                      {service.name === "Investment" && (
                        <div className="absolute overflow-hidden top-0 left-full -ml-2 bg-white rounded-lg shadow-lg border border-gray-100 hidden group-hover:block w-40">
                          <ul className="flex flex-col">
                            <li>
                              <Link
                                to="services/investments"
                                className="block text-sm px-4 py-2 text-blue-900 hover:bg-gray-100"
                              >
                                Mutual Funds
                              </Link>
                            </li>
                            <li>
                              <Link
                                to="services/investments"
                                className="block text-sm px-4 py-2 text-blue-900 hover:bg-gray-100"
                              >
                                Bonds
                              </Link>
                            </li>
                            <li>
                              <Link
                                to="services/investments"
                                className="block text-sm px-4 py-2 text-blue-900 hover:bg-gray-100"
                              >
                                FDRS
                              </Link>
                            </li>
                            <li>
                              <Link
                                to="/"
                                className="block text-sm px-4 py-2 text-blue-900 hover:bg-gray-100"
                              >
                                FMP
                              </Link>
                            </li>
                            <li>
                              <Link
                                to="/"
                                className="block text-sm px-4 py-2 text-blue-900 hover:bg-gray-100"
                              >
                                IPO
                              </Link>
                            </li>
                            <li>
                              <Link
                                to="/"
                                className="block text-sm px-4 py-2 text-blue-900 hover:bg-gray-100"
                              >
                                NCD
                              </Link>
                            </li>
                            <li>
                              <Link
                                to=""
                                className="block text-sm px-4 py-2 text-blue-900 hover:bg-gray-100"
                              >
                                P2P
                              </Link>
                            </li>
                          </ul>
                        </div>
                      )}

                      {/* Insurance */}
                      {service.name === "Insurance" && (
                        <div className="absolute overflow-hidden top-0 left-full -ml-2 bg-white rounded-lg shadow-lg border border-gray-100 hidden group-hover:block w-40">
                          <ul className="flex flex-col">
                            <li>
                              <Link
                                to="services/insurance/health"
                                className="block text-sm px-4 py-2 text-blue-900 hover:bg-gray-100"
                              >
                                Health
                              </Link>
                            </li>
                            <li>
                              <Link
                                to="services/insurance/life"
                                className="block text-sm px-4 py-2 text-blue-900 hover:bg-gray-100"
                              >
                                Life
                              </Link>
                            </li>
                            <li>
                              <Link
                                to="services/insurance/general"
                                className="block text-sm px-4 py-2 text-blue-900 hover:bg-gray-100"
                              >
                                General
                              </Link>
                            </li>
                          </ul>
                        </div>
                      )}

                      {/* Share Broking */}
                      {service.name === "Share Broking" && (
                        <div className="absolute overflow-hidden top-0 left-full -ml-2 bg-white rounded-lg shadow-lg border border-gray-100 hidden group-hover:block w-40">
                          <ul className="flex flex-col">
                            <li>
                              <Link
                                to="/"
                                className="block text-sm px-4 py-2 text-blue-900 hover:bg-gray-100"
                              >
                                BSE
                              </Link>
                            </li>
                            <li>
                              <Link
                                to="/"
                                className="block text-sm px-4 py-2 text-blue-900 hover:bg-gray-100"
                              >
                                NSE
                              </Link>
                            </li>
                            <li>
                              <Link
                                to="/"
                                className="block text-sm px-4 py-2 text-blue-900 hover:bg-gray-100"
                              >
                                PMS
                              </Link>
                            </li>
                            <li>
                              <Link
                                to="/"
                                className="block text-sm px-4 py-2 text-blue-900 hover:bg-gray-100"
                              >
                                Demat A/C
                              </Link>
                            </li>
                          </ul>
                        </div>
                      )}

                      {/* Financial Services */}
                      {service.name === "Financial Services" && (
                        <div className="absolute overflow-hidden top-0 left-full -ml-2 bg-white rounded-lg shadow-lg border border-gray-100 hidden group-hover:block w-40">
                          <ul className="flex flex-col">
                            <li>
                              <Link
                                to="/"
                                className="block text-sm px-4 py-2 text-blue-900 hover:bg-gray-100"
                              >
                                Loan
                              </Link>
                            </li>
                            <li>
                              <Link
                                to="/"
                                className="block text-sm px-4 py-2 text-blue-900 hover:bg-gray-100"
                              >
                                GST Return
                              </Link>
                            </li>
                            <li>
                              <Link
                                to="/"
                                className="block text-sm px-4 py-2 text-blue-900 hover:bg-gray-100"
                              >
                                PAN Card
                              </Link>
                            </li>
                            <li>
                              <Link
                                to="/"
                                className="block text-sm px-4 py-2 text-blue-900 hover:bg-gray-100"
                              >
                                Credit Card
                              </Link>
                            </li>
                            <li>
                              <Link
                                to="/"
                                className="block text-sm px-4 py-2 text-blue-900 hover:bg-gray-100"
                              >
                                GST Assessment
                              </Link>
                            </li>
                            <li>
                              <Link
                                to="/"
                                className="block text-sm px-4 py-2 text-blue-900 hover:bg-gray-100"
                              >
                                IT Return
                              </Link>
                            </li>
                          </ul>
                        </div>
                      )}
                    </div>
                  ))}
                </div>
              </div>
            </div>

            <Link
              to="/about"
              className={`text-sm font-medium ${
                activeRoute === "about"
                  ? "text-red-600"
                  : "text-blue-900 hover:text-blue-800"
              }`}
            >
              About Us
            </Link>
            <Link
              to="/career"
              className={`text-sm font-medium ${
                activeRoute === "career"
                  ? "text-red-600"
                  : "text-blue-900 hover:text-blue-800"
              }`}
            >
              Career
            </Link>
            <Link
              to="/contact"
              className={`text-sm font-medium ${
                activeRoute === "contact"
                  ? "text-red-600"
                  : "text-blue-900 hover:text-blue-700"
              }`}
            >
              Contact Us
            </Link>

            {/* Conditionally render auth buttons */}
            {/* {!isAuthenticated ? (
              <>
                <Link to="/login">
                  <button className="bg-blue-900/90 hover:bg-blue-900/80 text-white px-6 py-2 rounded-full  cursor-pointer font-medium text-sm">
                    Login
                  </button>
                </Link>
                <Link to="/signup">
                  <button className="bg-blue-900/90 hover:bg-blue-900/80 text-white px-6 py-2 rounded-full  cursor-pointer font-medium text-sm">
                    Sign up
                  </button>
                </Link>
              </>
            ) : (
              <button
                onClick={handleLogout}
                className="bg-blue-900/90 hover:bg-blue-900/80  cursor-pointer text-white px-6 py-2 rounded-full font-medium text-sm"
              >
                Logout
              </button>
            )} */}
          </div>

          {/* Mobile Menu Button */}
          <div className="md:hidden">
            <button
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              className="text-gray-600 hover:text-gray-900"
            >
              {isMobileMenuOpen ? (
                <svg
                  className="w-6 h-6"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M6 18L18 6M6 6l12 12"
                  />
                </svg>
              ) : (
                <svg
                  className="w-6 h-6"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M4 6h16M4 12h16M4 18h16"
                  />
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
              <Link to="/" className="text-blue-900">
                Home
              </Link>
              <details>
                <summary className="cursor-pointer text-blue-900">
                  Services
                </summary>
                <div className="ml-4 mt-2 space-y-2">
                  {servicesDropdown.map((s, idx) => (
                    <Link key={idx} to={s.to} className="block text-blue-700">
                      {s.name}
                    </Link>
                  ))}
                </div>
              </details>
              <Link to="/about" className="text-blue-900">
                About Us
              </Link>
              <Link to="/career" className="text-blue-900">
                Career
              </Link>
              <Link to="/contact" className="text-blue-900">
                Contact Us
              </Link>

              {/* {!isAuthenticated ? (
                <>
                  <Link to="/login">
                    <button className="w-full  cursor-pointer bg-blue-900 text-white py-2 rounded-full">
                      Login
                    </button>
                  </Link>
                  <Link to="/signup">
                    <button className="w-full  cursor-pointer bg-blue-900 text-white py-2 rounded-full">
                      Sign up
                    </button>
                  </Link>
                </>
              ) : (
                <button
                  onClick={handleLogout}
                  className="bg-blue-900 hover:bg-blue-900/80 cursor-pointer w-full bg-red-600 text-white py-2 rounded-full"
                >
                  Logout
                </button>
              )} */}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
};

export default Navbar;
