import { useParams, Link, useLocation } from "react-router-dom";
import { Typography } from "@mui/material";
import { FiArrowLeft, FiCheck } from "react-icons/fi";
import { useEffect } from "react";
import servicesData from "../../data/serviceData.js";

function ParticularService() {
  const { id } = useParams();
  const { pathname } = useLocation();
  const service = servicesData.find((s) => s.id === id);

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);

  if (!service) {
    return (
      <div className="text-center py-16">
        <Typography variant="h4" component="h1" className="text-gray-900">
          Service Not Found
        </Typography>
        <Link
          to="/showcase"
          className="inline-flex items-center gap-2 text-blue-600 font-medium text-base hover:text-blue-700 mt-4"
        >
          <FiArrowLeft className="w-5 h-5" />
          Back to Services
        </Link>
      </div>
    );
  }

  return (
    <section className="py-12 sm:py-16 md:py-20 px-4 sm:px-6 lg:px-8 bg-gray-50">
      <div className="max-w-4xl mx-auto">
        {/* Back to services link */}
        <Link
          to="/showcase"
          className="inline-flex items-center gap-2 text-blue-600 font-medium text-base hover:text-blue-700 mb-6 sm:mb-8 transition-colors"
        >
          <FiArrowLeft className="w-5 h-5" />
          Back to Services
        </Link>

        {/* Service header */}
        <div className="mb-8 sm:mb-12">
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
            {service.title}
          </Typography>
          <Typography
            variant="body1"
            className="text-base sm:text-lg text-gray-600 mb-4 leading-relaxed"
          >
            {service.description}
          </Typography>
        </div>

        {/* Service image */}
        <div className="mb-8 sm:mb-12">
          <img
            src={service.image || "/placeholder.svg"}
            alt={service.title}
            className="w-full h-64 sm:h-80 md:h-96 object-cover rounded-2xl shadow-lg"
            loading="lazy"
          />
        </div>

        {/* Service content */}
        <div className="space-y-8 sm:space-y-12">
          {/* Introduction with animated background */}
          <div className="relative bg-gradient-to-br from-white via-blue-50 to-indigo-50 rounded-3xl p-8 sm:p-10 shadow-xl border border-blue-100 overflow-hidden">
            <div className="absolute top-0 right-0 w-32 h-32 bg-gradient-to-br from-blue-200 to-indigo-300 rounded-full opacity-20 -translate-y-16 translate-x-16"></div>
            <div className="absolute bottom-0 left-0 w-24 h-24 bg-gradient-to-tr from-purple-200 to-pink-300 rounded-full opacity-20 translate-y-12 -translate-x-12"></div>
            <div className="relative z-10">
              <div className="flex items-center gap-4 mb-6">
                <div className="w-12 h-12 bg-gradient-to-br from-blue-600 to-indigo-700 rounded-2xl flex items-center justify-center shadow-lg">
                  <span className="text-white text-xl">💡</span>
                </div>
                <h3 className="text-2xl sm:text-3xl font-bold bg-gradient-to-r from-gray-900 to-gray-700 bg-clip-text text-transparent">
                  Why This Matters
                </h3>
              </div>
              <p className="text-gray-700 text-lg sm:text-xl leading-relaxed font-medium">
                {service.detailedContent.intro}
              </p>
            </div>
          </div>

          {/* What We Offer with enhanced styling */}
          <div className="bg-white rounded-3xl p-8 sm:p-10 shadow-xl border border-gray-100">
            <div className="flex items-center gap-4 mb-8">
              <div className="w-12 h-12 bg-gradient-to-br from-green-500 to-emerald-600 rounded-2xl flex items-center justify-center shadow-lg">
                <span className="text-white text-xl">🎯</span>
              </div>
              <h3 className="text-2xl sm:text-3xl font-bold bg-gradient-to-r from-gray-900 to-gray-700 bg-clip-text text-transparent">
                What We Deliver
              </h3>
            </div>
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 sm:gap-8">
              {service.detailedContent.offerings.map((offering, index) => (
                <div key={index} className="group relative">
                  <div className="absolute left-0 top-0 w-1 h-full bg-gradient-to-b from-blue-500 to-indigo-600 rounded-full"></div>
                  <div className="pl-8 py-6 hover:bg-gray-50 rounded-2xl transition-all duration-300 group-hover:translate-x-2 h-full">
                    <div className="flex items-start gap-4 h-full">
                      <div className="w-8 h-8 bg-gradient-to-br from-blue-100 to-indigo-200 rounded-lg flex items-center justify-center flex-shrink-0 mt-1">
                        <span className="text-blue-600 text-sm font-bold">
                          {index + 1}
                        </span>
                      </div>
                      <div className="flex-1">
                        <h4 className="font-bold text-gray-900 text-lg sm:text-xl mb-3 group-hover:text-blue-600 transition-colors">
                          {offering.title}
                        </h4>
                        <p className="text-gray-600 text-base sm:text-lg leading-relaxed">
                          {offering.description}
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Why Flauraa with premium styling */}
          <div className="relative bg-gradient-to-br from-[#8181c7] via-[#9f84cf] to-[#b78aca]  rounded-3xl p-8 sm:p-10 shadow-2xl overflow-hidden">
            <div className="absolute top-0 right-0 w-40 h-40 bg-white opacity-10 rounded-full -translate-y-20 translate-x-20"></div>
            <div className="absolute bottom-0 left-0 w-32 h-32 bg-[#b2b2e6] opacity-20 rounded-full translate-y-16 -translate-x-16"></div>
            <div className="relative z-10">
              <div className="flex items-center gap-4 mb-8">
                <div className="w-12 h-12 bg-white/20 backdrop-blur-sm rounded-2xl flex items-center justify-center shadow-lg">
                  <span className="text-white text-xl">⭐</span>
                </div>
                <h3 className="text-2xl sm:text-3xl font-bold text-white">
                  Flauraa Advantage
                </h3>
              </div>
              <div className="grid gap-5 sm:gap-6">
                {service.detailedContent.whyUs.map((reason, index) => (
                  <div key={index} className="flex items-start gap-4 group">
                    <div className="w-8 h-8 bg-[#60608e] rounded-full flex items-center justify-center flex-shrink-0 shadow-lg group-hover:scale-110 transition-transform">
                      <FiCheck className="w-4 h-4 text-white font-bold" />
                    </div>
                    <p className="text-white/90 text-base sm:text-lg leading-relaxed font-medium group-hover:text-white transition-colors">
                      {reason}
                    </p>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Enhanced Call to Action */}
          <div className="relative bg-gradient-to-r from-[#42c6b2] via-[#62b1c8] to-[#51a6c5] rounded-3xl p-8 sm:p-10 text-center text-white shadow-2xl overflow-hidden">
            <div className="absolute inset-0 bg-black/10"></div>
            <div className="absolute top-0 left-1/4 w-24 h-24 bg-white/20 rounded-full -translate-y-12"></div>
            <div className="absolute bottom-0 right-1/4 w-32 h-32 bg-white/10 rounded-full translate-y-16"></div>
            <div className="relative z-10">
              <div className="w-20 h-20 bg-white/20 backdrop-blur-sm rounded-full flex items-center justify-center mx-auto mb-6 shadow-lg">
                <span className="text-3xl">🚀</span>
              </div>
              <h3 className="text-2xl sm:text-3xl font-bold mb-4">
                Ready to Transform Your Business?
              </h3>
              <p className="text-white/90 mb-8 text-base sm:text-lg max-w-2xl mx-auto leading-relaxed">
                Join 100+ brands who've accelerated their growth with our{" "}
                {service.title.toLowerCase()} expertise. Let's build something
                extraordinary together.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
                <Link
                  to="/contact-us"
                  className="group relative inline-flex items-center gap-2 bg-white text-gray-900 px-8 py-4 rounded-2xl font-bold hover:bg-gray-100 transition-all duration-300 shadow-lg hover:shadow-xl hover:scale-105"
                >
                  <span>Start Your Journey</span>
                  <span className="group-hover:translate-x-1 transition-transform font-extrabold">
                    →
                  </span>
                </Link>
                <Link
                  to="/showcase"
                  className="inline-flex items-center gap-2 border-2 border-white/30 text-white px-6 py-3 rounded-2xl font-semibold hover:bg-white/10 transition-all duration-300"
                >
                  View More Services
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default ParticularService;
