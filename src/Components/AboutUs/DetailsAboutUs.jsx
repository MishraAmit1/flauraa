import { useLocation, useNavigate } from "react-router-dom"; // Add for navigation
import { Helmet } from "react-helmet-async"; // Add for SEO
import { Users, Target, TrendingUp, Award, Clock, Globe } from "lucide-react";

const DetailsAboutUs = () => {
  const navigate = useNavigate(); // For programmatic navigation
  const location = useLocation();
  const isHomepage = location.pathname === "/";
  const stats = [
    {
      number: "20+",
      label: "Brands Scaled",
      icon: <Globe className="w-6 h-6" />,
    },
    {
      number: "300%",
      label: "Average ROI Increase",
      icon: <TrendingUp className="w-6 h-6" />,
    },
    {
      number: "24/7",
      label: "Support Available",
      icon: <Clock className="w-6 h-6" />,
    },
    {
      number: "98%",
      label: "Client Satisfaction",
      icon: <Award className="w-6 h-6" />,
    },
  ];

  const values = [
    {
      title: "Data-Driven Excellence",
      description:
        " We don’t guess—we calculate. Every campaign is powered by real-time analytics, deep market research, and performance insights to maximize your ROI and reduce ad waste",
      icon: <Target className="w-8 h-8" />,
    },
    {
      title: "Transparent Collaboration",
      description:
        " No black boxes here. From timelines to KPIs, you get full access and total clarity. We grow together, and you’re in the loop—always",
      icon: <Users className="w-8 h-8" />,
    },
    {
      title: "Creative Innovation",
      description:
        "We merge left-brain logic with right-brain magic. Our creatives don’t just look good—they’re built to convert, inspire, and leave a lasting impression.",
      icon: <TrendingUp className="w-8 h-8" />,
    },
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-50 via-white to-gray-100">
      {!isHomepage && (
        <Helmet>
          <title>
            About Flauraa | Creative-Led, Data-Driven Growth Marketing Agency
          </title>
          <meta
            name="description"
            content="Meet Flauraa—where creativity meets performance. 50+ brands scaled with data-led marketing, funnel innovation, and full-funnel execution. Let’s scale together."
          />
          <meta
            name="keywords"
            content="about flauraa, growth marketing agency, data-driven agency, creative marketing company, performance marketing firm"
          />
        </Helmet>
      )}

      {/* Hero Section */}
      <section
        className="py-16 sm:py-20 md:py-24 px-4 sm:px-6 lg:px-8 bg-gradient-to-r from-cyan-700 via-cyan-600 to-blue-600 text-white relative overflow-hidden"
        aria-labelledby="hero-heading"
      >
        <div className="absolute inset-0 bg-black opacity-10"></div>
        <div className="max-w-7xl mx-auto relative z-10">
          <div className="text-center">
            <h1
              id="hero-heading"
              className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold mb-6 leading-tight"
            >
              The Story Behind
              <span className="block text-cyan-200">Flauraa</span>
            </h1>
            <p className="text-xl sm:text-2xl text-cyan-100 max-w-3xl mx-auto leading-relaxed">
              From a vision to transform how businesses grow, to a reality
              that's scaled over 20 brands worldwide.
            </p>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section
        className="py-12 sm:py-16 px-4 sm:px-6 lg:px-8 -mt-16 relative z-20"
        aria-labelledby="stats-heading"
      >
        <div className="max-w-7xl mx-auto">
          <h2 id="stats-heading" className="sr-only">
            Company Statistics
          </h2>
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-6 sm:gap-8">
            {stats.map((stat, index) => (
              <div
                key={index}
                className="bg-white rounded-2xl p-6 sm:p-8 shadow-xl hover:shadow-2xl transition-all duration-300 hover:-translate-y-2 text-center"
                role="listitem"
              >
                <div className="flex justify-center mb-4 text-cyan-600">
                  {stat.icon}
                </div>
                <div className="text-3xl sm:text-4xl font-bold text-gray-900 mb-2">
                  {stat.number}
                </div>
                <div className="text-gray-600 font-medium">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Our Story Section */}
      <section
        className="py-16 sm:py-20 px-4 sm:px-6 lg:px-8"
        aria-labelledby="story-heading"
      >
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center">
            <div>
              <h2
                id="story-heading"
                className="text-3xl sm:text-4xl md:text-5xl font-bold text-gray-900 mb-8 leading-tight"
              >
                Our Journey of
                <span className="text-cyan-600 block">Innovation</span>
              </h2>
              <div className="space-y-6 text-lg text-gray-700 leading-relaxed">
                <p>
                  <span className="text-8xl font-bold leading-none -mr-2.5 font-serif text-cyan-600">
                    F
                  </span>
                  lauraa was born in 2020—right when the world realized digital
                  was no longer optional. We saw it clearly: most marketing
                  agencies were stuck in outdated tactics, failing to keep up
                  with today’s fast-changing digital ecosystem.
                </p>
                <p>
                  Backed by expertise in data science, UI/UX design, and growth
                  strategy, our founders built Flauraa at the intersection of
                  performance and storytelling—where data meets creativity, and
                  growth becomes predictable.
                </p>
                <p>
                  From humble beginnings, we’ve scaled 50+ brands across
                  healthcare, wellness, tech, fashion, and more. Whether it’s a
                  D2C startup in India or a global SaaS brand, our work speaks
                  through real ROI and repeatable results.
                </p>
                <p>
                  Flauraa is not just a digital marketing agency—we’re your
                  full-stack growth partner. Our mission? Make digital growth
                  effortless, measurable, and human.
                </p>
              </div>
            </div>
            <div className="relative">
              <div className="relative group">
                <img
                  src="https://images.unsplash.com/photo-1600880292203-757bb62b4baf?q=80&w=2070&auto=format&fit=crop"
                  alt="Flauraa team working on innovative marketing strategies"
                  className="w-full h-96 sm:h-[500px] object-cover rounded-3xl shadow-2xl group-hover:scale-105 transition-transform duration-500"
                  loading="lazy"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-cyan-900/30 to-transparent rounded-3xl"></div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Our Values Section */}
      <section
        className="py-16 sm:py-20 px-4 sm:px-6 lg:px-8 bg-gray-900 text-white"
        aria-labelledby="values-heading"
      >
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2
              id="values-heading"
              className="text-3xl sm:text-4xl md:text-5xl font-bold mb-6 leading-tight"
            >
              Our Core Values
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              The principles that fuel every strategy we craft, every decision
              we take, and every brand we help grow.
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {values.map((value, index) => (
              <div
                key={index}
                className="bg-gray-800 rounded-2xl p-8 hover:bg-gray-700 transition-all duration-300 hover:scale-105"
                role="listitem"
              >
                <div className="text-cyan-400 mb-6">{value.icon}</div>
                <h3 className="text-2xl font-bold mb-4">{value.title}</h3>
                <p className="text-gray-300 leading-relaxed">
                  {value.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section
        className="py-16 sm:py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-r from-cyan-50 to-blue-50"
        aria-labelledby="mission-heading"
      >
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center">
            <div className="relative">
              <img
                src="/about-us.jpg"
                alt="Flauraa mission visualization"
                className="w-full h-96 sm:h-[500px] object-cover rounded-3xl shadow-2xl"
                loading="lazy"
              />
            </div>
            <div>
              <h2
                id="mission-heading"
                className="text-3xl sm:text-4xl md:text-5xl font-bold text-gray-900 mb-8 leading-tight"
              >
                Our Mission &<span className="text-cyan-600 block">Vision</span>
              </h2>
              <div className="space-y-6">
                <div className="bg-white rounded-2xl p-6 shadow-lg">
                  <h3 className="text-2xl font-bold text-gray-900 mb-4">
                    Mission
                  </h3>
                  <p className="text-gray-700 leading-relaxed">
                    Empowering businesses of all sizes with result-oriented,
                    data-driven marketing strategies—founded on trust,
                    transparency, and long-term partnerships.
                  </p>
                </div>
                <div className="bg-white rounded-2xl p-6 shadow-lg">
                  <h3 className="text-2xl font-bold text-gray-900 mb-4">
                    Vision
                  </h3>
                  <p className="text-gray-700 leading-relaxed">
                    To empower businesses and creators to own their narrative,
                    unlock their true potential, and build brands that inspire,
                    grow, and uplift the people they serve.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      {/* CTA Section */}
      <section
        className="py-16 sm:py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-r from-gray-900 via-cyan-900 to-blue-900 text-white"
        aria-labelledby="cta-heading"
      >
        <div className="max-w-4xl mx-auto text-center">
          <h2
            id="cta-heading"
            className="text-3xl sm:text-4xl md:text-5xl font-bold mb-6 leading-tight"
          >
            Ready to Write Your
            <span className="text-cyan-300 block">Success Story?</span>
          </h2>
          <p className="text-xl text-gray-300 mb-8 max-w-2xl mx-auto">
            Join the 20+ brands that have transformed their growth trajectory
            with Flauraa. Let's create something extraordinary together.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <button
              type="button"
              onClick={() => navigate("/contact-us")}
              className="max-w-xs sm:max-w-none md:px-8 md:py-4 px-9 py-5 bg-cyan-600 text-white font-semibold text-lg rounded-full shadow-xl hover:bg-cyan-700 hover:scale-105 transition-all duration-300 focus:outline-none focus:ring-4 focus:ring-cyan-500/50"
              aria-label="Contact us to start your journey"
            >
              Start Your Journey
            </button>
            <button
              type="button"
              onClick={() => navigate("/contact-us")}
              className="max-w-xs sm:max-w-none md:px-8 md:py-4 px-12 py-4 bg-transparent border-2 border-white text-white font-semibold text-lg rounded-full hover:bg-white hover:text-gray-900 transition-all duration-300 focus:outline-none focus:ring-4 focus:ring-white/50"
              aria-label="Contact us for portfolio details"
            >
              View Our Work
            </button>
          </div>
        </div>
      </section>
    </div>
  );
};

export default DetailsAboutUs;
