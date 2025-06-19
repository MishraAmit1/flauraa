import { useState } from "react";
import { Tabs, Tab, Box, Typography, Fade } from "@mui/material";
import { FiCircle } from "react-icons/fi";
import { Link, useLocation } from "react-router-dom";
import { Helmet } from "react-helmet-async";
import servicesData from "../../data/serviceData.js";

export default function Showcase() {
  const [activeTab, setActiveTab] = useState(0);
  const location = useLocation();
  const isHomepage = location.pathname === "/";

  const handleTabChange = (event, newValue) => {
    setActiveTab(newValue);
  };

  const currentService = servicesData[activeTab];

  return (
    <section className="py-10 sm:py-16 lg:py-20 bg-gray-50" id="showcase">
      {!isHomepage && (
        <Helmet>
          <title>
            Flauraa Services | Full-Funnel Marketing for Brand Growth
          </title>
          <meta
            name="description"
            content="Explore Flauraa’s creative, strategy, acquisition, consulting & retention services. 50+ brands scaled, 300% ROI average. Book your audit today."
          />
          <meta
            name="keywords"
            content="full-funnel marketing, flauraa services, brand growth agency, performance marketing, creative strategy, business scaling solutions"
          />
        </Helmet>
      )}

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="flex flex-col items-center text-center mb-12 sm:mb-16">
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
            We Build Brands That Scale Predictably
          </Typography>
          <div className="w-24 sm:w-32 h-1 bg-amber-500 mb-8 sm:mb-10 rounded" />
          <Typography
            variant="h5"
            sx={{
              fontSize: {
                xs: "1.2rem",
                sm: "1.875rem",
                md: "1.7rem",
              },
            }}
            className="text-gray-600"
          >
            Growth Engines We Specialize In
          </Typography>

          {/* Custom Styled Tabs */}
          <Box className="flex justify-center mt-8 sm:mt-10 w-full">
            <Tabs
              value={activeTab}
              onChange={handleTabChange}
              variant="scrollable"
              scrollButtons="auto"
              allowScrollButtonsMobile
              sx={{
                backgroundColor: "#2563eb",
                borderRadius: "50px",
                padding: "0.5rem",
                "& .MuiTabs-indicator": { display: "none" },
                "& .MuiTab-root": {
                  color: "white",
                  fontWeight: 600,
                  fontSize: { xs: "0.875rem", sm: "1rem" },
                  textTransform: "none",
                  minHeight: "2.5rem",
                  borderRadius: "40px",
                  margin: "0 0.25rem",
                  padding: "0.5rem 1rem",
                  transition: "all 0.3s ease",
                  "&.Mui-selected": {
                    backgroundColor: "white",
                    color: "#2563eb",
                  },
                },
                "& .MuiTabs-scrollButtons": {
                  color: "white",
                  "&.Mui-disabled": { opacity: 0.3 },
                },
              }}
            >
              {servicesData.map((service) => (
                <Tab key={service.id} label={service.label} />
              ))}
            </Tabs>
          </Box>
        </div>

        {/* Content Area */}
        <Fade in={true} timeout={600} key={activeTab}>
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12 items-center">
            {/* Left Content */}
            <div className="order-2 lg:order-1">
              <Typography
                variant="h3"
                component="h2"
                sx={{
                  fontSize: {
                    xs: "2.1rem",
                    sm: "1.875rem",
                    md: "3.5rem",
                  },
                }}
                className="text-2xl sm:text-3xl md:text-4xl font-bold text-gray-900 mb-4 sm:mb-6"
              >
                {currentService.title}
              </Typography>
              <Typography
                variant="body1"
                className="text-base sm:text-lg text-gray-600 mb-6 sm:mb-8 leading-relaxed"
              >
                {currentService.description}
              </Typography>
              <div className="flex flex-col gap-3 sm:gap-4 mt-4 mb-6 sm:mb-8">
                {currentService.features.map((feature, index) => (
                  <div key={index} className="flex items-center gap-3">
                    <FiCircle className="text-blue-600 w-2 h-2 fill-blue-600" />
                    <Typography
                      variant="body1"
                      className="text-base sm:text-lg text-gray-700"
                    >
                      {feature}
                    </Typography>
                  </div>
                ))}
              </div>
              {/* Read More Button */}
              <Link to={`/services/${currentService.id}`}>
                <button className="px-6 py-3 bg-cyan-700 text-white font-semibold text-lg rounded-full shadow-lg hover:bg-cyan-800 hover:scale-105 transition-all duration-300 ease-in-out focus:outline-none focus:ring-2 focus:ring-cyan-500 focus:ring-offset-2">
                  Read More
                </button>
              </Link>
            </div>

            {/* Right Content - Image/Visual */}
            <div className="order-1 lg:order-2 bg-white rounded-2xl p-4 sm:p-6 lg:p-8 shadow-lg flex items-center justify-center">
              <img
                src={currentService.image || "/placeholder.svg"}
                alt={`${currentService.title} showcase`}
                className="w-full h-64 sm:h-80 md:h-96 object-cover rounded-lg"
              />
            </div>
          </div>
        </Fade>
      </div>
    </section>
  );
}
