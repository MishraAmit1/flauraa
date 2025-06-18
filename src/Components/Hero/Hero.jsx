import { lazy, Suspense } from "react";
import { Helmet } from "react-helmet-async";
import { toast } from "react-toastify"; // Add toast
import { useCalendly } from "../../context/CalendlyContext"; // Use Context
// Lazy-load sub-components
const About = lazy(() => import("../AboutUs/About"));
const WhyUs = lazy(() => import("../WhyUS/WhyUs"));
const Showcase = lazy(() => import("../ServiceSection/ShowCase"));
const Consulting = lazy(() => import("../Consulting/Consulting"));
const Blogs = lazy(() => import("../Blogs/Blogs"));
const Testimonial = lazy(() => import("../Testimonial/Testimonial"));
const ContactUs = lazy(() => import("../ContactUs/ContactUs"));

function Hero() {
  const { isCalendlyLoaded } = useCalendly(); // Get state from Context

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

  return (
    <>
      <Helmet>
        <title>
          Full Stack Marketing Agency | Funnels, Ads & Growth at Scale
        </title>
        <meta
          name="description"
          content="Flauraa offers end-to-end marketing—from creative to conversion. Launch full-funnel campaigns that drive ROI. Scale faster with our full stack team."
        />
        <meta
          name="keywords"
          content="full stack marketing, full funnel marketing agency, creative to conversion, performance marketing, full stack digital agency, marketing strategy, ad funnels"
        />
      </Helmet>
      <div
        id="home"
        className="lg:flex gap-4 px-5 md:px-10 lg:px-20 items-center py-5 md:py-10 lg:py-15 mt-4"
      >
        <div className="left w-full lg:w-1/2 md:space-y-7 space-y-4">
          <h1 className="text-[9.5vw] leading-11 md:leading-[72px] lg:text-6xl font-bold">
            Scale Faster with <br />
            <span className="bg-gradient-to-r from-cyan-400 to-cyan-600 bg-clip-text text-transparent">
              Full Stack
            </span>{" "}
            <span className="bg-gradient-to-r from-blue-900 to-blue-700 bg-clip-text text-transparent">
              Marketing
            </span>{" "}
            That Works
          </h1>
          <p className="lg:text-xl text-zinc-400">
            Funnels. Ads. Automation. Strategy. <br />
            One team. One system. Built to scale — not guess.
          </p>
          <div className="actionBtns flex gap-4 justify-center lg:justify-start">
            <button
              className="px-4 py-2 lg:px-8 lg:py-3 rounded-3xl border-2 border-gray-200 text-sm md:text-lg lg:text-lg cursor-pointer hover:bg-gray-200 transition-colors duration-200"
              aria-label="Request Free Growth Audit"
            >
              Get Free Audit
            </button>
            <button
              onClick={openCalendlyPopup}
              disabled={!isCalendlyLoaded}
              className="px-6 py-3 bg-cyan-700 text-white font-semibold text-[14px] md:text-lg rounded-full cursor-pointer shadow-lg hover:bg-cyan-800 hover:scale-105 transition-all duration-300 ease-in-out focus:outline-none focus:ring-2 focus:ring-cyan-500 focus:ring-offset-2"
              aria-label="Book a Free Consultation Call"
            >
              Book a Free Call
            </button>
          </div>
          <div className="text-sm text-gray-500">
            <p>No fluff. No pressure. Just clarity.</p>
          </div>
        </div>
        <div className="right w-full lg:w-1/2 mt-12 lg:mt-0">
          <img
            src="/Dashboard_3.avif"
            alt="Flauraa Marketing Dashboard"
            className="w-full rounded-lg shadow-lg"
            loading="lazy"
          />
        </div>
      </div>
      <Suspense
        fallback={
          <div className="min-h-96 flex items-center justify-center">
            Loading...
          </div>
        }
      >
        <About />
        <WhyUs />
        <Showcase />
        <Consulting />
        <Blogs />
        <Testimonial />
        <ContactUs />
      </Suspense>
    </>
  );
}

export default Hero;
