import { useState, useRef, useEffect } from "react";
import { GiHamburgerMenu } from "react-icons/gi";
import { X, ChevronDown } from "lucide-react";
import { NavLink, useLocation, useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
import { useCalendly } from "../../context/CalendlyContext";

function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isServicesDropdownOpen, setIsServicesDropdownOpen] = useState(false);
  const [isMobileServicesOpen, setIsMobileServicesOpen] = useState(false);
  const { isCalendlyLoaded } = useCalendly();
  const location = useLocation();
  const navigate = useNavigate();
  const dropdownRef = useRef(null);

  const toggleMenu = () => setIsMenuOpen(!isMenuOpen);
  const toggleServicesDropdown = () =>
    setIsServicesDropdownOpen(!isServicesDropdownOpen);
  const toggleMobileServices = () =>
    setIsMobileServicesOpen(!isMobileServicesOpen);

  const serviceLinks = [
    { name: "Creative", path: "/services/creative" },
    { name: "Strategy", path: "/services/performance-strategy" },
    { name: "Consulting", path: "/services/growth-consulting" },
    { name: "Retention", path: "/services/retention-ltv" },
    { name: "Acquisition", path: "/services/customer-acquisition" },
  ];

  // Close dropdown when clicking outside
  useEffect(() => {
    const handleClickOutside = (event) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
        setIsServicesDropdownOpen(false);
      }
    };

    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

  const handleOutsideClick = (e) => {
    if (e.target === e.currentTarget) {
      setIsMenuOpen(false);
    }
  };

  const openCalendlyPopup = () => {
    if (!isCalendlyLoaded || !window.Calendly) {
      console.error("Calendly not loaded yet");
      toast.error("Unable to open scheduler. Please try again later.", {
        position: "top-right",
        autoClose: 3000,
      });
      return;
    }

    try {
      const wrapper = document.createElement("div");
      wrapper.id = "calendly-wrapper";
      wrapper.style.position = "fixed";
      wrapper.style.top = "0";
      wrapper.style.left = "0";
      wrapper.style.width = "100%";
      wrapper.style.height = "100%";
      wrapper.style.background = "rgba(0, 0, 0, 0.5)";
      wrapper.style.zIndex = "1000";
      wrapper.style.display = "flex";
      wrapper.style.justifyContent = "center";
      wrapper.style.alignItems = "center";

      const iframe = document.createElement("iframe");
      iframe.src = "https://calendly.com/mahendrasuthar7069/30min";
      iframe.allow = "payment";
      iframe.style.width = "80%";
      iframe.style.maxWidth = "600px";
      iframe.style.height = "80%";
      iframe.style.maxHeight = "800px";
      iframe.style.border = "none";
      iframe.style.background = "white";
      iframe.style.borderRadius = "8px";
      iframe.style.boxShadow = "0 4px 16px rgba(0,0,0,0.2)";

      wrapper.onclick = (e) => {
        if (e.target === wrapper) {
          document.body.removeChild(wrapper);
        }
      };

      wrapper.appendChild(iframe);
      document.body.appendChild(wrapper);

      console.log("Calendly iframe initialized with payment permission");
    } catch (error) {
      console.error("Error initializing Calendly iframe:", error);
      toast.error("Failed to open scheduler. Please try again.", {
        position: "top-right",
        autoClose: 3000,
      });
    }
  };

  const handleNavClick = (sectionId) => {
    if (location.pathname === "/") {
      const element = document.getElementById(sectionId);
      if (element) {
        element.scrollIntoView({ behavior: "smooth" });
      }
    } else {
      navigate("/");
      setTimeout(() => {
        const element = document.getElementById(sectionId);
        if (element) {
          element.scrollIntoView({ behavior: "smooth" });
        }
      }, 100);
    }
    toggleMenu();
  };

  return (
    <nav
      className="flex justify-between px-4 sm:px-10 md:px-20 py-3 md:py-6 bg-white items-center sticky top-0 z-50"
      aria-label="Main navigation"
    >
      <div className="logo flex gap-2 items-center">
        <img
          src="/logo-removebg-preview.png"
          alt="Flauraa Logo"
          className="w-8 sm:w-10"
        />
        <h1 className="font-bold text-2xl sm:text-3xl text-[#024f98]">
          Flauraa
        </h1>
      </div>

      <div className="links hidden lg:flex gap-6 items-center">
        <NavLink
          to="/"
          className={({ isActive }) =>
            `text-base md:text-lg transition-colors ${
              isActive
                ? "text-cyan-700 font-semibold"
                : "text-gray-700 hover:text-cyan-700"
            }`
          }
          end
          aria-label="Home page"
        >
          Home
        </NavLink>

        {/* Services Dropdown */}
        <div className="relative" ref={dropdownRef}>
          <button
            onClick={toggleServicesDropdown}
            className="flex items-center gap-1 text-base md:text-lg text-gray-700 hover:text-cyan-700 transition-colors"
            aria-label="Services menu"
          >
            Services
            <ChevronDown
              className={`w-4 h-4 transition-transform duration-200 ${
                isServicesDropdownOpen ? "rotate-180" : ""
              }`}
            />
          </button>

          {isServicesDropdownOpen && (
            <div className="absolute top-full left-0 mt-2 w-56 bg-white border border-gray-200 rounded-lg shadow-lg z-50">
              <div className="py-2">
                {serviceLinks.map((service, index) => (
                  <NavLink
                    key={index}
                    to={service.path}
                    className={({ isActive }) =>
                      `block px-4 py-2 text-sm transition-colors ${
                        isActive
                          ? "text-cyan-700 bg-cyan-50 font-semibold"
                          : "text-gray-700 hover:text-cyan-700 hover:bg-gray-50"
                      }`
                    }
                    onClick={() => setIsServicesDropdownOpen(false)}
                  >
                    {service.name}
                  </NavLink>
                ))}
              </div>
            </div>
          )}
        </div>

        <NavLink
          to="/blogs"
          className={({ isActive }) =>
            `text-base md:text-lg transition-colors ${
              isActive
                ? "text-cyan-700 font-semibold"
                : "text-gray-700 hover:text-cyan-700"
            }`
          }
          aria-label="Blog page"
        >
          Blog
        </NavLink>
        <NavLink
          to="/about-us"
          className={({ isActive }) =>
            `text-base md:text-lg transition-colors ${
              isActive
                ? "text-cyan-700 font-semibold"
                : "text-gray-700 hover:text-cyan-700"
            }`
          }
          aria-label="About us page"
        >
          About
        </NavLink>
        <NavLink
          to="/contact-us"
          className={({ isActive }) =>
            `text-base md:text-lg transition-colors ${
              isActive
                ? "text-cyan-700 font-semibold"
                : "text-gray-700 hover:text-cyan-700"
            }`
          }
          aria-label="Contact us page"
        >
          Contact
        </NavLink>
      </div>

      <div className="callToAction hidden lg:block">
        <button
          onClick={openCalendlyPopup}
          disabled={!isCalendlyLoaded}
          className="bg-cyan-700 px-4 py-2 text-white rounded-3xl hover:scale-105 transition-all duration-300 ease-in-out focus:outline-none focus:ring-2 focus:ring-cyan-500 focus:ring-offset-2 hover:bg-cyan-800 cursor-pointer text-base disabled:opacity-50 disabled:cursor-not-allowed"
          aria-label="Book a consultation call"
        >
          Book a Call Now
        </button>
      </div>

      <div className="hamburger lg:hidden">
        <button
          onClick={toggleMenu}
          className="cursor-pointer"
          aria-label={isMenuOpen ? "Close Menu" : "Open Menu"}
        >
          {isMenuOpen ? (
            <X className="text-2xl text-gray-700" />
          ) : (
            <GiHamburgerMenu className="text-2xl text-gray-700" />
          )}
        </button>
      </div>

      {isMenuOpen && (
        <div
          className="fixed inset-0 bg-[#007595] bg-opacity-30 flex justify-end z-50 lg:hidden will-change-transform"
          onClick={handleOutsideClick}
          aria-label="Mobile menu"
        >
          <div className="bg-white w-4/5 sm:w-3/5 max-w-sm h-full p-6 flex flex-col gap-6 transform transition-transform duration-300 ease-in-out translate-x-0 overflow-y-auto">
            <div className="flex justify-between items-center">
              <div className="logo flex gap-2 items-center">
                <img
                  src="/logo-removebg-preview.png"
                  alt="Flauraa Logo"
                  className="w-8"
                />
                <h1 className="font-bold text-2xl text-[#024f98]">Flauraa</h1>
              </div>
              <button
                onClick={toggleMenu}
                className="cursor-pointer"
                aria-label="Close Menu"
              >
                <X className="text-2xl text-gray-700" />
              </button>
            </div>
            <div className="flex flex-col gap-4 mt-6">
              <NavLink
                to="/"
                className={({ isActive }) =>
                  `text-lg transition-colors ${
                    isActive
                      ? "text-cyan-700 font-semibold"
                      : "text-gray-700 hover:text-cyan-700"
                  }`
                }
                onClick={toggleMenu}
                end
                aria-label="Home page"
              >
                Home
              </NavLink>

              {/* Mobile Services Dropdown */}
              <div>
                <button
                  onClick={toggleMobileServices}
                  className="flex items-center justify-between w-full text-lg text-gray-700 hover:text-cyan-700 transition-colors text-left"
                  aria-label="Services menu"
                >
                  Services
                  <ChevronDown
                    className={`w-4 h-4 transition-transform duration-200 ${
                      isMobileServicesOpen ? "rotate-180" : ""
                    }`}
                  />
                </button>

                {isMobileServicesOpen && (
                  <div className="ml-4 mt-2 space-y-2">
                    {serviceLinks.map((service, index) => (
                      <NavLink
                        key={index}
                        to={service.path}
                        className={({ isActive }) =>
                          `block text-base transition-colors ${
                            isActive
                              ? "text-cyan-700 font-semibold"
                              : "text-gray-600 hover:text-cyan-700"
                          }`
                        }
                        onClick={toggleMenu}
                      >
                        {service.name}
                      </NavLink>
                    ))}
                  </div>
                )}
              </div>

              <NavLink
                to="/blogs"
                className={({ isActive }) =>
                  `text-lg transition-colors ${
                    isActive
                      ? "text-cyan-700 font-semibold"
                      : "text-gray-700 hover:text-cyan-700"
                  }`
                }
                onClick={toggleMenu}
                aria-label="Blog page"
              >
                Blog
              </NavLink>
              <NavLink
                to="/about-us"
                className={({ isActive }) =>
                  `text-lg transition-colors ${
                    isActive
                      ? "text-cyan-700 font-semibold"
                      : "text-gray-700 hover:text-cyan-700"
                  }`
                }
                onClick={toggleMenu}
                aria-label="About us page"
              >
                About
              </NavLink>
              <button
                onClick={() => handleNavClick("contact")}
                className="text-lg text-gray-700 hover:text-cyan-700 transition-colors text-left"
                aria-label="Scroll to Contact section"
              >
                Contact
              </button>
              <button
                className="bg-cyan-700 px-4 py-2 text-white rounded-3xl duration-200 transition-all hover:bg-cyan-800 cursor-pointer text-base mt-4"
                onClick={() => {
                  toggleMenu();
                  openCalendlyPopup();
                }}
                disabled={!isCalendlyLoaded}
                aria-label="Book a consultation call"
              >
                Book a Call Now
              </button>
            </div>
          </div>
        </div>
      )}
    </nav>
  );
}

export default Navbar;
