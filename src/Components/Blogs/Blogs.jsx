import { Typography } from "@mui/material";
import { FiCalendar, FiClock, FiArrowRight } from "react-icons/fi";
import { Link } from "react-router-dom";

const blogPosts = [
  {
    id: 1,
    category: "Conversion Optimization",
    categoryColor: "bg-cyan-500",
    image:
      "https://plus.unsplash.com/premium_photo-1683121716061-3faddf4dc504?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Nnx8dGVjaHxlbnwwfHwwfHx8MA%3D%3D",
    date: "3/15/2024",
    readTime: "8 min read",
    title: "10 Proven Strategies to Increase Your Conversion Rate by 300%",
    excerpt:
      "Discover the data-driven tactics that top-performing brands use to optimize their conversion funnels and maximize ROI.",
    slug: "conversion-rate-strategies",
  },
  {
    id: 2,
    category: "SEO",
    categoryColor: "bg-blue-600",
    image:
      "https://plus.unsplash.com/premium_photo-1681399975135-252eab5fd2db?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTR8fHRlY2h8ZW58MHx8MHx8fDA%3D",
    date: "3/12/2024",
    readTime: "12 min read",
    title: "The Ultimate Guide to SEO in 2024: What Actually Works",
    excerpt:
      "Navigate the latest algorithm updates and learn the SEO strategies that are driving real results for businesses this year.",
    slug: "seo-guide-2024",
  },
  {
    id: 3,
    category: "Content Marketing",
    categoryColor: "bg-indigo-600",
    image:
      "https://images.unsplash.com/photo-1434494878577-86c23bcb06b9?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NDN8fHRlY2h8ZW58MHx8MHx8fDA%3D",
    date: "3/10/2024",
    readTime: "10 min read",
    title: "How We Generated 45,000 Qualified Leads Using Content Marketing",
    excerpt:
      "A deep dive into our proven content strategy framework that consistently generates high-quality leads for B2B companies.",
    slug: "content-marketing-leads",
  },
];

// Blog card component
const BlogCard = ({ post }) => (
  <article
    id={`blog-${post.id}`}
    className="bg-white rounded-2xl shadow-sm hover:shadow-lg transition-all duration-300 overflow-hidden group"
    aria-labelledby={`blog-title-${post.id}`}
  >
    {/* Image with category tag */}
    <div className="relative">
      <img
        src={post.image || "/img/placeholder.webp"}
        alt={`Featured image for ${post.title}`}
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
          <FiCalendar className="w-3 h-3 sm:w-4 sm:h-4" aria-hidden="true" />
          <span>{post.date}</span>
        </div>
        <div className="flex items-center gap-1">
          <FiClock className="w-3 h-3 sm:w-4 sm:h-4" aria-hidden="true" />
          <span>{post.readTime}</span>
        </div>
      </div>

      {/* Title */}
      <h3
        id={`blog-title-${post.id}`}
        className="text-lg sm:text-xl font-bold text-gray-900 mb-2 sm:mb-3 line-clamp-2 group-hover:text-blue-600 transition-colors"
      >
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
        aria-label={`Read more about ${post.title}`}
      >
        Read More
        <FiArrowRight
          className="w-4 h-4 group-hover/link:translate-x-1 transition-transform"
          aria-hidden="true"
        />
      </Link>
    </div>
  </article>
);

function Blogs() {
  return (
    <div className="pt-8 sm:pt-12 md:pt-16">
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
      <section
        className="py-8 sm:py-12 md:py-16 px-4 sm:px-6 lg:px-8"
        aria-labelledby="blogs-heading"
      >
        <div className="max-w-7xl mx-auto">
          <h2 id="blogs-heading" className="sr-only">
            Blog Articles
          </h2>
          {/* Blog posts grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8 mb-8 sm:mb-12">
            {blogPosts.map((post) => (
              <BlogCard key={post.id} post={post} />
            ))}
          </div>

          {/* Explore all articles button */}
          <div className="text-center">
            <Link
              to="/blogs"
              className="inline-flex items-center gap-2 px-6 sm:px-8 py-2 sm:py-3 border-2 border-blue-600 text-blue-600 font-medium rounded-full text-sm sm:text-base hover:bg-blue-600 hover:text-white transition-all duration-300 group"
              aria-label="Explore all blog articles"
            >
              Explore All Articles
              <FiArrowRight
                className="w-4 h-4 sm:w-5 sm:h-5 group-hover:translate-x-1 transition-transform"
                aria-hidden="true"
              />
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}

export default Blogs;
