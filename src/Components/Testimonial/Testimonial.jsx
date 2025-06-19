import { Typography } from "@mui/material";
import { FaStar } from "react-icons/fa";
import { Helmet } from "react-helmet-async"; // Add for Schema.org
import testimonials from "../../data/testimonialData.js"; // Import data

export default function Testimonial() {
  // Star rating component
  const StarRating = ({ rating = 5 }) => (
    <div className="flex gap-1 mb-4 sm:mb-6">
      {Array.from({ length: rating }, (_, index) => (
        <FaStar
          key={`star-${index}`}
          className="text-yellow-400 w-4 h-4 sm:w-5 sm:h-5"
          aria-hidden="true"
        />
      ))}
    </div>
  );

  // Testimonial card component
  const TestimonialCard = ({ testimonial }) => (
    <div className="bg-white p-6 sm:p-8 flex flex-col justify-between rounded-2xl shadow-sm hover:shadow-md transition-shadow duration-300 h-full">
      <div>
        <StarRating rating={testimonial.rating} />
        <blockquote className="text-gray-700 text-base sm:text-lg leading-relaxed mb-6 sm:mb-8">
          "{testimonial.quote}"
        </blockquote>
      </div>
      <div className="flex items-center gap-3 sm:gap-4">
        <img
          src={testimonial.avatar || "/img/placeholder.webp"}
          alt={`Profile photo of ${testimonial.name}, ${testimonial.title}`}
          className="w-10 h-10 sm:w-12 sm:h-12 rounded-full object-cover"
          loading="lazy"
        />
        <div>
          <div className="font-semibold text-gray-900 text-sm sm:text-base">
            {testimonial.name}
          </div>
          <div className="text-gray-500 text-xs sm:text-sm">
            {testimonial.title}
          </div>
        </div>
      </div>
    </div>
  );

  // Schema.org structured data for reviews
  const schemaData = {
    "@context": "https://schema.org",
    "@type": "AggregateRating",
    itemReviewed: {
      "@type": "Organization",
      name: "Flauraa",
    },
    ratingValue: 5,
    reviewCount: testimonials.length,
    bestRating: 5,
    worstRating: 1,
    review: testimonials.map((t) => ({
      "@type": "Review",
      author: {
        "@type": "Person",
        name: t.name,
      },
      reviewRating: {
        "@type": "Rating",
        ratingValue: t.rating,
        bestRating: 5,
      },
      reviewBody: t.quote,
    })),
  };

  return (
    <section
      className="py-12 sm:py-16 md:py-20 px-4 sm:px-6 lg:px-8 bg-gray-50"
      aria-labelledby="testimonials-heading"
    >
      <Helmet>
        <script type="application/ld+json">{JSON.stringify(schemaData)}</script>
      </Helmet>
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="text-center mb-10 sm:mb-12 md:mb-16">
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
            Loved by thousands of businesses
          </Typography>
          <p className="text-base sm:text-lg md:text-xl text-gray-600 max-w-xl sm:max-w-2xl mx-auto leading-relaxed">
            Join the companies that trust Flauraa to drive their growth
          </p>
        </div>

        {/* Testimonials Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
          {testimonials.map((testimonial) => (
            <TestimonialCard key={testimonial.id} testimonial={testimonial} />
          ))}
        </div>
      </div>
    </section>
  );
}
