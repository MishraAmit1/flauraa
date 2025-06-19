import { Typography } from "@mui/material";
import { FiCalendar, FiClock, FiArrowRight } from "react-icons/fi";
import { Link, useLocation } from "react-router-dom";
import { Helmet } from "react-helmet-async";
import blogPosts from "../../data/blogData.js";

// Blog card component
const BlogCard = ({ post }) => (
  <article className="bg-white rounded-2xl shadow-sm hover:shadow-lg transition-all duration-300 overflow-hidden group">
    {/* Image with category tag */}

    <div className="relative">
      <img
        src={post.image || "/placeholder.svg"}
        alt={post.title}
        className="w-full h-40 sm:h-48 md:h-52 object-cover group-hover:scale-105 transition-transform duration-300"
        loading="lazy"
      />
      <div
        className={`absolute top-3 left-3 ${post.categoryColor} text-white px-2 sm:px-3 py-1 rounded-full text-xs sm:text-sm font-medium`}
      >
        {post.category}
      </div>
    </div>

    {/* Content */}
    <div className="p-4 sm:p-6">
      {/* Meta information */}
      <div className="flex items-center gap-3 sm:gap-4 text-gray-500 text-xs sm:text-sm mb-3 sm:mb-4">
        <div className="flex items-center gap-1">
          <FiCalendar className="w-3 h-3 sm:w-4 sm:h-4" />
          <span>{post.date}</span>
        </div>
        <div className="flex items-center gap-1">
          <FiClock className="w-3 h-3 sm:w-4 sm:h-4" />
          <span>{post.readTime}</span>
        </div>
      </div>

      {/* Title */}
      <h3 className="text-lg sm:text-xl font-bold text-gray-900 mb-2 sm:mb-3 line-clamp-2 group-hover:text-blue-600 transition-colors">
        {post.title}
      </h3>

      {/* Excerpt */}
      <p className="text-sm sm:text-base text-gray-600 mb-3 sm:mb-4 line-clamp-3">
        {post.excerpt}
      </p>

      {/* Read more link */}
      <Link
        to={`/blogs/${post.slug}`}
        className="inline-flex items-center gap-2 text-blue-600 font-medium text-sm sm:text-base hover:text-blue-700 transition-colors group/link"
      >
        Read More
        <FiArrowRight className="w-4 h-4 group-hover/link:translate-x-1 transition-transform" />
      </Link>
    </div>
  </article>
);

function DetailsBlogs() {
  const location = useLocation();
  const isHomepage = location.pathname === "/";
  return (
    <div className="pt-8 sm:pt-12 md:pt-16">
      {!isHomepage && (
        <Helmet>
          <title>
            Flauraa Blog | Performance Marketing Tips, Strategy Guides & Brand
            Hacks
          </title>
          <meta
            name="description"
            content="Stay ahead with Flauraa’s expert blogs on paid ads, funnel building, creative strategy & scaling secrets from top-performing brands."
          />
          <meta
            name="keywords"
            content="marketing blog, growth marketing tips, funnel strategy blog, ad copywriting tips, scaling D2C brand, performance marketing resources"
          />
        </Helmet>
      )}
      <div className="text-center mb-8 sm:mb-12 md:mb-16 px-4">
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
          Growth Strategies That Actually Work
        </Typography>
        <p className="text-base sm:text-lg md:text-xl text-gray-600 max-w-xl sm:max-w-2xl mx-auto leading-relaxed">
          Actionable marketing insights for founders who want more leads, more
          conversions, and fewer headaches. No fluff. Just results.
        </p>
      </div>
      <section className="py-8 sm:py-12 md:py-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          {/* Blog posts grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8 mb-8 sm:mb-12">
            {blogPosts.map((post) => (
              <BlogCard key={post.id} post={post} />
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}

export default DetailsBlogs;
