import { Typography } from "@mui/material";
import { Award, BarChart3, LineChart, Users, Zap } from "lucide-react";
import { whyUsData } from "../../data/whyUsData.js";

const iconMap = {
  Award,
  BarChart3,
  LineChart,
  Users,
  Zap,
};

function WhyUs() {
  const { analytics, features, testimonial } = whyUsData;

  return (
    <section
      className="px-5 py-10 md:py-7 md:px-10 lg:py-14 lg:px-20 bg-zinc-100"
      aria-labelledby="why-us-heading"
    >
      {/* Schema.org Review Markup */}
      <script type="application/ld+json">
        {JSON.stringify({
          "@context": "https://schema.org",
          "@type": "Review",
          reviewBody: testimonial.quote,
          author: {
            "@type": "Person",
            name: testimonial.author,
          },
          itemReviewed: {
            "@type": "Organization",
            name: "Flauraa",
          },
        })}
      </script>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-20 items-center">
        {/* Analytics Card - Left Side */}
        <div className="bg-sky-50 p-6 rounded-3xl shadow-sm transform transition-all hover:shadow-md">
          <div className="bg-white border-0 shadow-sm overflow-hidden rounded-2xl">
            <div className="p-6">
              {/* Analytics Header */}
              <div className="flex items-center gap-3 mb-8">
                <div className="bg-sky-500 p-2 rounded-lg">
                  <BarChart3
                    className="h-6 w-6 text-white"
                    aria-hidden="true"
                  />
                </div>
                <div>
                  <h3 className="font-bold md:text-xl text-gray-800">
                    {analytics.title}
                  </h3>
                  <p className="text-gray-500 text-sm">{analytics.subtitle}</p>
                </div>
              </div>

              {/* Metrics */}
              <div className="grid grid-cols-3 gap-4 text-center">
                {analytics.metrics.map((metric, index) => (
                  <div key={index} className="space-y-1">
                    <p
                      className={`text-xl md:text-3xl font-bold ${metric.color}`}
                    >
                      {metric.value}
                    </p>
                    <p className="text-gray-500 text-sm">{metric.label}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>

        {/* Content - Right Side */}
        <div className="space-y-8">
          {/* Heading */}
          <div className="space-y-4">
            <Typography
              variant="h2"
              component="h2"
              id="why-us-heading"
              className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-gray-900 mb-3 sm:mb-4 leading-tight"
            >
              Why Choose Flauraa?
            </Typography>
            <p className="text-sm md:text-lg text-gray-600 leading-relaxed">
              Because we're not here to just run ads. We're here to build
              revenue machines.
            </p>
          </div>

          {/* Features Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {features.map((feature, index) => {
              const IconComponent = iconMap[feature.icon];
              return (
                <div key={index} className="flex gap-4 group">
                  <div
                    className={`${feature.bgColor} p-3 rounded-xl h-fit ${feature.hoverBgColor} transition-colors`}
                  >
                    <IconComponent
                      className={`h-6 w-6 ${feature.iconColor}`}
                      aria-hidden="true"
                    />
                  </div>
                  <div>
                    <h3 className="font-semibold text-lg text-gray-800 mb-1">
                      {feature.title}
                    </h3>
                    <p className="text-gray-600">{feature.description}</p>
                  </div>
                </div>
              );
            })}
          </div>

          {/* Testimonial */}
          <div className="bg-white rounded-2xl p-6 border border-gray-100 shadow-sm hover:shadow-md transition-shadow">
            <div className="flex items-start gap-4">
              <div
                className="bg-gray-100 rounded-full w-12 h-12 flex items-center justify-center overflow-hidden shrink-0"
                aria-hidden="true"
              >
                <span className="text-gray-500 font-medium">
                  {testimonial.initials}
                </span>
              </div>
              <div>
                <p className="text-gray-700 italic mb-4">{testimonial.quote}</p>
                <div>
                  <p className="font-semibold text-gray-900">
                    {testimonial.author}
                  </p>
                  <p className="text-gray-500 text-sm">{testimonial.title}</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default WhyUs;
