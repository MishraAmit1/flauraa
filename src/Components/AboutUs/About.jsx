import { Typography } from "@mui/material";
import { Link } from "react-router-dom";

export default function About() {
  return (
    <section
      className="py-12 sm:py-16 md:py-20 px-4 sm:px-6 lg:px-8 bg-gray-50"
      id="about"
      aria-labelledby="about-heading"
    >
      <div className="max-w-7xl mx-auto">
        {/* Hero Section */}
        <div className="text-center mb-12 sm:mb-16 md:mb-20">
          <Typography
            variant="h2"
            component="h1"
            id="about-heading"
            className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-gray-900 mb-3 sm:mb-4 leading-tight"
          >
            About Flauraa
          </Typography>
          <p className="text-base sm:text-lg md:text-xl text-gray-600 max-w-xl sm:max-w-2xl mx-auto leading-relaxed">
            We’re a growth-focused marketing agency dedicated to scaling
            businesses through data-driven strategies and creative excellence.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 sm:gap-12 mb-12 sm:mb-16 md:mb-20 items-center">
          <div>
            <p className="text-lg text-gray-900 leading-relaxed mb-6">
              <span className="text-8xl font-bold leading-none -mr-2.5 font-serif text-cyan-600">
                F
              </span>
              lauraa is a growth-driven marketing startup dedicated to helping
              businesses scale with precision. We combine data-driven
              strategies, creative brilliance, and transparent collaboration to
              deliver measurable results, empowering startups and small
              businesses to thrive in competitive markets.
            </p>
            <p className="text-lg text-gray-900 leading-relaxed mb-6">
              Today, we’ve helped over 50 brands across industries achieve
              exponential growth, from startups to established enterprises. Our
              approach is rooted in transparency, collaboration, and relentless
              focus on ROI.
            </p>
            <Link
              to="/about-us"
              className="inline-block px-6 py-3 bg-cyan-700 text-white font-semibold text-lg rounded-full shadow-lg hover:bg-cyan-800 hover:scale-105 transition-all duration-300 ease-in-out focus:outline-none focus:ring-2 focus:ring-cyan-500 focus:ring-offset-2"
              aria-label="Learn more about Flauraa"
            >
              Read More
            </Link>
          </div>
          <div className="flex justify-center lg:justify-end">
            <div className="relative group">
              <img
                src="/about-main.jpg"
                alt="Team collaboration at Flauraa marketing agency"
                className="relative w-full h-80 md:h-96 object-cover rounded-3xl shadow-2xl group-hover:scale-105 transition-transform duration-500"
                loading="lazy"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
