import { useParams, Link } from "react-router-dom";
import { Typography } from "@mui/material";
import { FiCalendar, FiClock, FiArrowLeft } from "react-icons/fi";
import { Helmet } from "react-helmet-async";
import blogPosts from "../../data/blogData.js";

function ParticularBlogs() {
  const { slug } = useParams();
  const post = blogPosts.find((p) => p.slug === slug);

  if (!post) {
    return (
      <div className="text-center py-16">
        <Helmet>
          <title>Flauraa | Blog Not Found</title>
          <meta
            name="description"
            content="The requested blog post was not found. Explore other marketing insights on our blog."
          />
        </Helmet>
        <Typography variant="h4" component="h1" className="text-gray-900">
          Blog Not Found
        </Typography>
        <Link
          to="/blogs"
          className="inline-flex items-center gap-2 text-blue-600 font-medium text-base hover:text-blue-700 mt-4"
          aria-label="Return to blog list"
        >
          <FiArrowLeft className="w-5 h-5" aria-hidden="true" />
          Back to Blogs
        </Link>
      </div>
    );
  }

  return (
    <section
      className="py-12 sm:py-16 md:py-20 px-4 sm:px-6 lg:px-8 bg-gray-50"
      aria-labelledby="blog-heading"
    >
      <div className="max-w-4xl mx-auto">
        <Helmet>
          <title>{`Flauraa | ${post.title}`}</title>
          <meta name="description" content={post.excerpt} />
          <meta
            name="keywords"
            content={`${post.category.toLowerCase()}, marketing, flauraa`}
          />
        </Helmet>

        {/* Back to blogs link */}
        <Link
          to="/blogs"
          className="inline-flex items-center gap-2 text-blue-600 font-medium text-base hover:text-blue-700 mb-6 sm:mb-8 transition-colors"
          aria-label="Return to blog list"
        >
          <FiArrowLeft className="w-5 h-5" aria-hidden="true" />
          Back to Blogs
        </Link>

        {/* Blog header */}
        <div className="mb-8 sm:mb-12">
          <div
            className={`inline-block ${post.categoryColor} text-white px-3 py-1 rounded-full text-sm font-medium mb-4`}
          >
            {post.category}
          </div>
          <Typography
            variant="h2"
            component="h1"
            id="blog-heading"
            className="text-2xl sm:text-3xl md:text-4xl font-bold text-gray-900 mb-4 leading-tight"
          >
            {post.title}
          </Typography>
          <div className="flex items-center gap-4 text-gray-500 text-sm sm:text-base">
            <div className="flex items-center gap-1">
              <FiCalendar className="w-4 h-4" aria-hidden="true" />
              <span>{post.date}</span>
            </div>
            <div className="flex items-center gap-1">
              <FiClock className="w-4 h-4" aria-hidden="true" />
              <span>{post.readTime}</span>
            </div>
          </div>
        </div>

        {/* Blog image */}
        <div className="mb-8 sm:mb-12">
          <img
            src={post.image || "/img/placeholder.webp"}
            alt={`Featured image for ${post.title}`}
            className="w-full h-64 sm:h-80 md:h-96 object-cover rounded-2xl shadow-lg"
            loading="lazy"
          />
        </div>

        {/* Blog content */}
        <div className="prose prose-sm sm:prose-base max-w-none text-gray-800 leading-relaxed">
          {post.content.split("\n").map((paragraph, index) => (
            <p key={index} className="mb-4">
              {paragraph}
            </p>
          ))}
        </div>
      </div>
    </section>
  );
}

export default ParticularBlogs;
