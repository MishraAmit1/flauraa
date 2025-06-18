import { Outlet, useNavigation, useLocation } from "react-router-dom";
import { useEffect, lazy, Suspense } from "react";
import { Helmet } from "react-helmet-async";
import { CircularProgress, Typography } from "@mui/material";
import { ToastContainer } from "react-toastify"; // For toast notifications
import "react-toastify/dist/ReactToastify.css"; // Add CSS for toasts

// Lazy-load Navbar and Footer
const Navbar = lazy(() => import("../Components/Navbar/Navbar"));
const Footer = lazy(() => import("../Components/Footer/Footer"));

const AppLayout = () => {
  const navigation = useNavigation();
  const { pathname } = useLocation();

  // Scroll to top on route change
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);

  return (
    <div role="document">
      <Helmet>
        <title>Flauraa | Digital Marketing Agency</title>
        <meta
          name="description"
          content="Flauraa helps businesses scale with performance marketing, funnels, ads, and automation."
        />
        <meta
          name="keywords"
          content="digital marketing, performance marketing, business growth, flauraa"
        />
      </Helmet>
      <ToastContainer
        position="top-right"
        autoClose={3000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
        limit={1}
      />
      <Suspense
        fallback={
          <div className="flex items-center justify-center min-h-96">
            <CircularProgress color="primary" size={24} />
            <Typography className="ml-2 text-gray-600">Loading...</Typography>
          </div>
        }
      >
        <Navbar />
      </Suspense>
      <main role="main" aria-label="Main content" className="flex-grow">
        {navigation.state === "loading" ? (
          <div className="flex items-center justify-center min-h-96">
            <CircularProgress color="primary" size={24} />
            <Typography className="ml-2 text-gray-600">Loading...</Typography>
          </div>
        ) : (
          <Outlet />
        )}
      </main>
      <Suspense
        fallback={
          <div className="flex items-center justify-center min-h-96">
            <CircularProgress color="primary" size={24} />
            <Typography className="ml-2 text-gray-600">Loading...</Typography>
          </div>
        }
      >
        <Footer />
      </Suspense>
    </div>
  );
};

export default AppLayout;
