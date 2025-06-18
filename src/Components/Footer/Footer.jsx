import { lazy, Suspense } from "react";
import { X, Linkedin, Twitter, Instagram } from "lucide-react";
import { Link } from "react-router-dom";
import { useModal } from "../../hooks/useModal";

// Lazy-load modal components
const PrivacyPolicy = lazy(() => import("../../pages/PolicyPage"));
const TermsOfService = lazy(() => import("../../pages/TermsOfService"));

function Footer() {
  const {
    isOpen: isTermsOpen,
    open: openTermsModal,
    close: closeTermsModal,
  } = useModal();
  const {
    isOpen: isPrivacyOpen,
    open: openPrivacyModal,
    close: closePrivacyModal,
  } = useModal();

  const scrollToSection = (sectionId) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  // Social links with env variables
  const socialLinks = [
    {
      name: "LinkedIn",
      icon: Linkedin,
      url:
        import.meta.env.VITE_LINKEDIN_URL ||
        "https://www.linkedin.com/company/flauraa1",
      ariaLabel: "Follow us on LinkedIn",
    },
    {
      name: "X",
      icon: Twitter,
      url: import.meta.env.VITE_TWITTER_URL || "https://x.com/teamflauraa",
      ariaLabel: "Follow us on X",
    },
    {
      name: "Instagram",
      icon: Instagram,
      url:
        import.meta.env.VITE_INSTAGRAM_URL ||
        "https://www.instagram.com/flauraa.marketing",
      ariaLabel: "Follow us on Instagram",
    },
  ];

  return (
    <footer
      className="bg-black text-white py-16 px-6 md:px-8"
      role="contentinfo"
      aria-label="Footer"
    >
      <div className="max-w-7xl mx-auto">
        <div className="flex flex-col md:flex-row justify-between mb-16 gap-12 md:gap-0">
          {/* Company Info */}
          <div className="space-y-6">
            <div className="logo flex gap-2 items-center">
              <img
                src="/logo-removebg-preview.png"
                alt="Flauraa marketing agency logo"
                className="w-10"
                loading="lazy"
              />
              <h1 className="font-bold text-3xl text-[#024f98]">Flauraa</h1>
            </div>
            <p className="text-gray-400 max-w-md">
              Empowering businesses with marketing solutions that deliver
              measurable results.
            </p>
            <div className="flex space-x-4">
              {socialLinks.map((social) => {
                const IconComponent = social.icon;
                return (
                  <a
                    key={social.name}
                    href={social.url}
                    className="bg-gray-800 hover:bg-gray-700 hover:scale-110 p-3 rounded-full transition-all duration-300"
                    aria-label={social.ariaLabel}
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <IconComponent className="h-5 w-5" aria-hidden="true" />
                  </a>
                );
              })}
            </div>
          </div>

          {/* Quick Links */}
          <div className="space-y-6">
            <h3 className="text-xl font-semibold">Quick Links</h3>
            <ul className="space-y-4">
              <li>
                <Link
                  to="/"
                  onClick={() => scrollToSection("about")}
                  className="text-gray-400 hover:text-white hover:translate-x-1 transition-all duration-200"
                >
                  About
                </Link>
              </li>
              <li>
                <Link
                  to="/"
                  onClick={() => scrollToSection("blog")}
                  className="text-gray-400 hover:text-white hover:translate-x-1 transition-all duration-200"
                >
                  Blog
                </Link>
              </li>
              <li>
                <Link
                  to="/"
                  onClick={() => scrollToSection("services")}
                  className="text-gray-400 hover:text-white hover:translate-x-1 transition-all duration-200"
                >
                  Services
                </Link>
              </li>
              <li>
                <Link
                  to="/contact-us"
                  className="text-gray-400 hover:text-white hover:translate-x-1 transition-all duration-200"
                >
                  Contact
                </Link>
              </li>
            </ul>
          </div>

          {/* Company Links */}
          <div className="space-y-6">
            <h3 className="text-xl font-semibold">Company</h3>
            <ul className="space-y-4">
              <li>
                <button
                  onClick={openTermsModal}
                  className="cursor-pointer text-gray-400 hover:text-white hover:translate-x-1 transition-all duration-200"
                  aria-controls="terms-modal"
                  aria-expanded={isTermsOpen}
                >
                  Terms of Service
                </button>
              </li>
              <li>
                <button
                  onClick={openPrivacyModal}
                  className="cursor-pointer text-gray-400 hover:text-white hover:translate-x-1 transition-all duration-200"
                  aria-controls="privacy-modal"
                  aria-expanded={isPrivacyOpen}
                >
                  Privacy Policy
                </button>
              </li>
            </ul>
          </div>
        </div>

        {/* Divider */}
        <div className="h-px bg-gray-800 w-full my-8"></div>

        {/* Bottom Section */}
        <div className="flex flex-col md:flex-row justify-between items-center -mb-8">
          <p className="text-gray-200 text-sm text-center">
            © 2025 Flauraa. All rights reserved.
          </p>
        </div>
      </div>

      {/* Terms of Service Modal */}
      {isTermsOpen && (
        <div
          id="terms-modal"
          className="fixed inset-0 bg-opacity-50 backdrop-blur-sm flex items-center justify-center z-50 p-4"
          onClick={(e) => isTermsOpen && handleOutsideClick(e, closeTermsModal)}
          role="dialog"
          aria-modal="true"
          aria-labelledby="terms-heading"
        >
          <div className="bg-gray-200 p-6 rounded-lg max-w-2xl w-full max-h-[80vh] overflow-y-auto relative shadow-2xl transform transition-all duration-300 scale-100">
            <button
              onClick={closeTermsModal}
              className="cursor-pointer absolute top-4 right-4 text-gray-600 hover:text-gray-800 hover:bg-gray-100 rounded-full p-1 transition-all duration-200"
              aria-label="Close Terms of Service modal"
            >
              <X className="h-6 w-6" aria-hidden="true" />
            </button>
            <Suspense fallback={<div>Loading...</div>}>
              <TermsOfService />
            </Suspense>
          </div>
        </div>
      )}

      {/* Privacy Policy Modal */}
      {isPrivacyOpen && (
        <div
          id="privacy-modal"
          className="fixed inset-0 bg-black bg-opacity-50 backdrop-blur-sm flex items-center justify-center z-50 p-4"
          onClick={(e) =>
            isPrivacyOpen && handleOutsideClick(e, closePrivacyModal)
          }
          role="dialog"
          aria-modal="true"
          aria-labelledby="privacy-heading"
        >
          <div className="bg-gray-200 text-black p-6 rounded-lg max-w-2xl w-full max-h-[80vh] overflow-y-auto relative shadow-2xl transform transition-all duration-300 scale-100">
            <button
              onClick={closePrivacyModal}
              className="cursor-pointer absolute top-4 right-4 text-gray-600 hover:text-gray-800 hover:bg-gray-100 rounded-full p-1 transition-all duration-200"
              aria-label="Close Privacy Policy modal"
            >
              <X className="h-6 w-6" aria-hidden="true" />
            </button>
            <Suspense fallback={<div>Loading...</div>}>
              <PrivacyPolicy />
            </Suspense>
          </div>
        </div>
      )}
    </footer>
  );
}

export default Footer;
