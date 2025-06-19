import { Typography } from "@mui/material";
import { useState } from "react";
import {
  HiOutlineClock,
  HiOutlineGlobeAlt,
  HiOutlineMail,
} from "react-icons/hi";
import { PiArrowBendRightDownDuotone } from "react-icons/pi";
import { toast } from "react-toastify";
import { useCalendly } from "../../context/CalendlyContext";

const auditBenefits = [
  {
    id: 1,
    title: "SEO Performance Analysis",
    description: "Complete technical audit and keyword opportunities",
    bgColor: "bg-cyan-500",
  },
  {
    id: 2,
    title: "Conversion Funnel Review",
    description: "Identify bottlenecks in your customer journey",
    bgColor: "bg-blue-600",
  },
  {
    id: 3,
    title: "Competitor Benchmark",
    description: "See how you stack up against your competition",
    bgColor: "bg-indigo-600",
  },
  {
    id: 4,
    title: "Growth Roadmap",
    description: "Strategic plan to accelerate your business growth",
    bgColor: "bg-purple-600",
  },
];

function Consulting() {
  const [email, setEmail] = useState("");
  const [website, setWebsite] = useState("");
  const [error, setError] = useState("");
  const [isSubmitting, setIsSubmitting] = useState(false);
  const { isCalendlyLoaded } = useCalendly();

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

  const handleSubmit = async (e) => {
    e.preventDefault();
    e.stopPropagation();

    if (isSubmitting) return;
    setIsSubmitting(true);
    setError("");

    try {
      console.log("Submitting form with:", { email, website });
      const response = await fetch("https://formcarry.com/s/Ibs_gVSIecC", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Accept: "application/json",
        },
        body: JSON.stringify({ email, website }),
      });

      const responseData = await response.json();

      if (response.status === 200 || response.status === 201) {
        toast.success(
          "Form submitted successfully! We'll get back to you soon.",
          {
            toastId: "consulting-success",
            position: "top-right",
            autoClose: 3000,
            hideProgressBar: false,
            closeOnClick: true,
            pauseOnHover: true,
            draggable: true,
          }
        );
        setEmail("");
        setWebsite("");
      } else {
        const errorMsg =
          responseData.message ||
          "Failed to submit the form. Please try again.";
        setError(errorMsg);
        toast.error(errorMsg, {
          toastId: "consulting-error",
          position: "top-right",
          autoClose: 3000,
        });
      }
    } catch (error) {
      console.error("Submission error:", error);
      const errorMsg = "An error occurred. Please try again later.";
      setError(errorMsg);
      toast.error(errorMsg, {
        toastId: "consulting-error",
        position: "top-right",
        autoClose: 3000,
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div className="py-8 sm:py-12 md:py-16 px-4 sm:px-6 lg:px-8 flex items-center justify-center bg-zinc-100">
      <div className="bg-white rounded-2xl p-6 sm:p-8 md:p-10 shadow-xl w-full max-w-5xl">
        <div className="text-center mb-8 sm:mb-12 md:mb-16">
          <Typography
            variant="h2"
            component="h1"
            sx={{
              fontSize: {
                xs: "2.2rem",
                sm: "1.875rem",
                md: "3.5rem",
              },
              fontWeight: {
                xs: 400,
                sm: 400,
                md: 500,
              },
            }}
          >
            Get a Free Growth Audit
          </Typography>
          <p className="text-base sm:text-lg text-gray-600 max-w-xl sm:max-w-2xl mx-auto leading-relaxed">
            Discover untapped opportunities in your digital marketing strategy.
            Our experts will analyze your current performance and provide
            actionable insights.
          </p>
        </div>
        <div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-8">
            <form
              onSubmit={handleSubmit}
              className="space-y-4 flex flex-col"
              aria-label="Free growth audit form"
            >
              <div>
                <label
                  htmlFor="email"
                  className="flex items-center gap-2 text-gray-700 font-medium mb-2 text-sm sm:text-base"
                >
                  <HiOutlineMail className="w-4 h-4 sm:w-5 sm:h-5" />
                  Email Address
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  placeholder="Enter your email"
                  required
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  disabled={isSubmitting}
                  className="w-full px-3 sm:px-4 py-2 sm:py-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-blue-500 focus:border-transparent outline-none transition-all text-sm sm:text-base disabled:opacity-50"
                  aria-required="true"
                />
              </div>
              <div>
                <label
                  htmlFor="website"
                  className="flex items-center gap-2 text-gray-700 font-medium mb-2 text-sm sm:text-base"
                >
                  <HiOutlineGlobeAlt className="w-4 h-4 sm:w-5 sm:h-5" />
                  Website URL
                </label>
                <input
                  type="url"
                  id="website"
                  name="website"
                  placeholder="https://yourwebsite.com"
                  required
                  value={website}
                  onChange={(e) => setWebsite(e.target.value)}
                  disabled={isSubmitting}
                  className="w-full px-3 sm:px-4 py-2 sm:py-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-blue-500 focus:border-transparent outline-none transition-all text-sm sm:text-base disabled:opacity-50"
                  aria-required="true"
                />
              </div>
              {error && (
                <p className="text-red-500 text-sm" role="alert">
                  {error}
                </p>
              )}
              <button
                type="submit"
                disabled={isSubmitting}
                className="cursor-pointer w-full bg-cyan-700 text-white font-semibold py-3 sm:py-4 px-4 sm:px-6 rounded-xl hover:bg-cyan-800 transition-colors duration-200 shadow-sm hover:shadow-md text-sm sm:text-base disabled:opacity-50 disabled:cursor-not-allowed"
                aria-label="Submit growth audit request"
              >
                {isSubmitting ? "Submitting..." : "Send My Audit"}
              </button>
              <div className="flex items-center justify-center gap-2 text-gray-500 text-xs sm:text-sm">
                <HiOutlineClock className="w-3 h-3 sm:w-4 sm:h-4" />
                <span>We respond within 12 hours</span>
              </div>
              <div className="flex justify-center text-gray-500 text-xs sm:text-sm pb-1 relative">
                <span className="relative pr-8 sm:pr-10">
                  Not Sure What to Do Next?
                  <PiArrowBendRightDownDuotone className="w-6 h-6 sm:w-8 sm:h-8 absolute right-0 sm:-right-2 top-1/2 transform -translate-y-1/2" />
                </span>
              </div>
              <button
                type="button"
                className="cursor-pointer w-full font-semibold py-3 sm:py-4 px-4 sm:px-6 rounded-xl border-2 border-gray-300 hover:bg-zinc-100 transition-colors duration-200 shadow-sm hover:shadow-md text-sm sm:text-base"
                onClick={openCalendlyPopup}
                disabled={!isCalendlyLoaded}
                aria-label="Book a consultation call"
              >
                Book a Call Now
              </button>
            </form>
            <div className="space-y-4 sm:space-y-6">
              <h3 className="text-xl sm:text-2xl font-bold text-gray-900 mb-4 sm:mb-6">
                What You'll Get:
              </h3>
              <div className="space-y-4 sm:space-y-6">
                {auditBenefits.map((benefit) => (
                  <div
                    key={benefit.id}
                    className="flex items-start gap-3 sm:gap-4"
                    role="listitem"
                  >
                    <div
                      className={`${benefit.bgColor} text-white w-6 h-6 sm:w-8 sm:h-8 rounded-full flex items-center justify-center font-bold text-xs sm:text-sm shrink-0`}
                    >
                      {benefit.id}
                    </div>
                    <div>
                      <h4 className="text-base sm:text-xl font-semibold text-gray-900 mb-1 sm:mb-2">
                        {benefit.title}
                      </h4>
                      <p className="text-sm sm:text-base text-gray-600 leading-relaxed">
                        {benefit.description}
                      </p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Consulting;
