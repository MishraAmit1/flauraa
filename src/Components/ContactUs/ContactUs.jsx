import { useState } from "react";
import {
  HiOutlineMail,
  HiOutlinePhone,
  HiOutlineLocationMarker,
} from "react-icons/hi";
import { FaLinkedin, FaTwitter, FaInstagram } from "react-icons/fa";
import { toast, ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { Typography } from "@mui/material";
import { Helmet } from "react-helmet-async";
import { useLocation } from "react-router-dom";

export default function ContactUs() {
  const [fullName, setFullName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");
  const [error, setError] = useState("");
  const location = useLocation();
  const isHomepage = location.pathname === "/";
  // Contact information data
  const contactInfo = [
    {
      id: "email",
      title: "Email",
      icon: HiOutlineMail,
      iconBg: "bg-cyan-500",
      details: ["support@flauraa.com"],
    },
    {
      id: "phone",
      title: "Phone",
      icon: HiOutlinePhone,
      iconBg: "bg-blue-600",
      details: ["+91 6363003045", "+91 7433940011"],
    },
    {
      id: "address",
      title: "Address",
      icon: HiOutlineLocationMarker,
      iconBg: "bg-purple-600",
      details: [
        "2nd floor, Arihant complex,",
        "Gunjan Rd, near Vishal Mega Mart,",
        "Vapi (396-191) Gujarat",
        "India",
      ],
    },
  ];

  // Social media links
  const socialLinks = [
    {
      name: "LinkedIn",
      icon: FaLinkedin,
      url:
        import.meta.env.VITE_LINKEDIN_URL ||
        "https://www.linkedin.com/company/flauraa1",
      bgColor: "bg-cyan-500 hover:bg-cyan-600",
    },
    {
      name: "Twitter",
      icon: FaTwitter,
      url: import.meta.env.VITE_TWITTER_URL || "https://x.com/teamflauraa",
      bgColor: "bg-blue-600 hover:bg-blue-700",
    },
    {
      name: "Instagram",
      icon: FaInstagram,
      url:
        import.meta.env.VITE_INSTAGRAM_URL ||
        "https://www.instagram.com/flauraa.marketing",
      bgColor: "bg-purple-600 hover:bg-purple-700",
    },
  ];

  // Business hours data
  const businessHours = [
    { days: "Monday - Friday", hours: "10:00 AM - 7:00 PM" },
    { days: "Saturday", hours: "10:00 AM - 4:00 PM" },
    { days: "Sunday", hours: "Closed" },
  ];

  const validateEmail = (email) => {
    const regex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return regex.test(email);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError("");

    if (!validateEmail(email)) {
      setError("Please enter a valid email address.");
      toast.error("Please enter a valid email address.", {
        position: "top-right",
        autoClose: 3000,
      });
      return;
    }

    try {
      const response = await fetch(
        import.meta.env.VITE_FORMCARRY_URL ||
          "https://formcarry.com/s/Ibs_gVSIecC",
        {
          method: "POST",
          headers: {
            Accept: "application/json",
            "Content-Type": "application/json",
          },
          body: JSON.stringify({ fullName, email, message }),
        }
      );

      const responseData = await response.json();

      if (response.status === 200 || response.status === 201) {
        toast.success(
          "Message sent successfully! We'll get back to you soon.",
          {
            position: "top-right",
            autoClose: 3000,
            hideProgressBar: false,
            closeOnClick: true,
            pauseOnHover: true,
            draggable: true,
          }
        );
        setFullName("");
        setEmail("");
        setMessage("");
      } else {
        const errorMsg =
          responseData.message ||
          "Failed to send the message. Please try again.";
        setError(errorMsg);
        toast.error(errorMsg, {
          position: "top-right",
          autoClose: 3000,
        });
      }
    } catch (error) {
      const errorMsg = "An error occurred. Please try again later.";
      setError(errorMsg);
      toast.error(errorMsg, {
        position: "top-right",
        autoClose: 3000,
      });
    }
  };

  return (
    <section
      className="py-20 px-4 bg-gray-50"
      id="contact"
      aria-labelledby="contact-heading"
    >
      {!isHomepage && (
        <Helmet>
          <title>
            Contact Flauraa | Scale Faster with a Proven Marketing Team
          </title>
          <meta
            name="description"
            content="Ready to grow? Contact Flauraa for expert-led marketing, creative strategy & performance campaigns. Let's build your success story."
          />
          <meta
            name="keywords"
            content="contact flauraa, marketing consultation, growth marketing team, performance agency India, digital agency contact"
          />
        </Helmet>
      )}

      <div className="text-center mb-16">
        <Typography
          variant="h2"
          component="h1"
          id="contact-heading"
          className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-gray-900 mb-3 sm:mb-4 leading-tight"
        >
          Get In Touch
        </Typography>
        <p className="text-xl text-gray-600 max-w-2xl mx-auto">
          Ready to accelerate your business growth? Let's discuss how we can
          help you achieve your goals.
        </p>
      </div>
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* Left Side - Contact Form */}
          <div className="bg-white rounded-3xl p-8 shadow-sm">
            <h2 className="text-3xl font-bold text-gray-900 mb-8">
              Send us a message
            </h2>
            <form
              onSubmit={handleSubmit}
              className="space-y-6"
              aria-describedby={error ? "form-error" : undefined}
            >
              {/* Full Name */}
              <div>
                <label
                  htmlFor="fullName"
                  className="block text-gray-700 font-medium mb-3"
                >
                  Full Name
                </label>
                <input
                  type="text"
                  id="fullName"
                  name="fullName"
                  placeholder="Enter your full name"
                  required
                  value={fullName}
                  onChange={(e) => setFullName(e.target.value)}
                  className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-blue-500 focus:border-transparent outline-none transition-all"
                  aria-required="true"
                />
              </div>

              {/* Email Address */}
              <div>
                <label
                  htmlFor="email"
                  className="block text-gray-700 font-medium mb-3"
                >
                  Email Address
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  placeholder="Enter your email address"
                  required
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-blue-500 focus:border-transparent outline-none transition-all"
                  aria-required="true"
                />
              </div>

              {/* Message */}
              <div>
                <label
                  htmlFor="message"
                  className="block text-gray-700 font-medium mb-3"
                >
                  Message
                </label>
                <textarea
                  id="message"
                  name="message"
                  rows={6}
                  placeholder="Tell us about your project and goals..."
                  required
                  value={message}
                  onChange={(e) => setMessage(e.target.value)}
                  className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-blue-500 focus:border-transparent outline-none transition-all resize-none"
                  aria-required="true"
                />
              </div>

              {/* Error Message */}
              {error && (
                <p id="form-error" className="text-red-500 text-sm">
                  {error}
                </p>
              )}

              {/* Submit Button */}
              <button
                type="submit"
                className="w-full bg-cyan-700 text-white font-semibold py-4 px-6 rounded-xl hover:bg-cyan-800 transition-colors duration-200 shadow-sm hover:shadow-md"
                aria-label="Send message"
              >
                Send Message
              </button>
            </form>
          </div>

          {/* Right Side - Contact Information */}
          <div className="space-y-8">
            <h2 className="text-3xl font-bold text-gray-900">
              Contact Information
            </h2>

            {/* Contact Details */}
            <div className="space-y-8">
              {contactInfo.map((info) => {
                const IconComponent = info.icon;
                return (
                  <div key={info.id} className="flex items-start gap-4">
                    <div className={`${info.iconBg} p-3 rounded-xl`}>
                      <IconComponent
                        className="w-6 h-6 text-white"
                        aria-hidden="true"
                      />
                    </div>
                    <div>
                      <h3 className="text-xl font-semibold text-gray-900 mb-2">
                        {info.title}
                      </h3>
                      <div className="space-y-1">
                        {info.details.map((detail, index) => (
                          <p key={index} className="text-gray-600">
                            {detail}
                          </p>
                        ))}
                      </div>
                    </div>
                  </div>
                );
              })}
            </div>

            {/* Social Media */}
            <div>
              <h3 className="text-2xl font-bold text-gray-900 mb-6">
                Follow Us
              </h3>
              <div className="flex gap-4">
                {socialLinks.map((social) => {
                  const IconComponent = social.icon;
                  return (
                    <a
                      key={social.name}
                      href={social.url}
                      target="_blank"
                      rel="noopener noreferrer"
                      className={`${social.bgColor} p-3 rounded-xl transition-colors duration-200`}
                      aria-label={`Follow us on ${social.name}`}
                    >
                      <IconComponent
                        className="w-6 h-6 text-white"
                        aria-hidden="true"
                      />
                    </a>
                  );
                })}
              </div>
            </div>

            {/* Business Hours */}
            <div className="bg-white rounded-2xl p-6 shadow-sm">
              <h3 className="text-xl font-semibold text-gray-900 mb-4">
                Business Hours
              </h3>
              <div className="space-y-3">
                {businessHours.map((schedule, index) => (
                  <div
                    key={index}
                    className="flex justify-between items-center"
                  >
                    <span className="text-gray-600">{schedule.days}:</span>
                    <span className="text-gray-900 font-medium">
                      {schedule.hours}
                    </span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
      <ToastContainer />
    </section>
  );
}
