import { createBrowserRouter, RouterProvider } from "react-router-dom";
import { lazy, Suspense } from "react";
import AppLayout from "./pages/AppLayout";
import { ErrorPage } from "./pages/ErrorPage";

const Hero = lazy(() => import("./Components/Hero/Hero"));
const Showcase = lazy(() => import("./Components/ServiceSection/ShowCase.jsx"));
const ContactUs = lazy(() => import("./Components/ContactUs/ContactUs"));
const DetailsAboutUs = lazy(() =>
  import("./Components/AboutUs/DetailsAboutUs")
);
const DetailsBlogs = lazy(() => import("./Components/Blogs/DetailsBlogs.jsx"));
const ParticularBlogs = lazy(() =>
  import("./Components/Blogs/ParticularBlogs.jsx")
);
const ParticularService = lazy(() =>
  import("./Components/ServiceSection/ParticularService.jsx")
);

function App() {
  const router = createBrowserRouter([
    {
      path: "/",
      element: <AppLayout />,
      errorElement: <ErrorPage />,
      children: [
        {
          index: true,
          element: (
            <Suspense
              fallback={
                <div className="flex items-center justify-center min-h-96">
                  Loading...
                </div>
              }
            >
              <Hero />
            </Suspense>
          ),
        },
        {
          path: "/showcase",
          element: (
            <Suspense
              fallback={
                <div className="flex items-center justify-center min-h-96">
                  Loading...
                </div>
              }
            >
              <Showcase />
            </Suspense>
          ),
        },
        {
          path: "/blogs",
          element: (
            <Suspense
              fallback={
                <div className="flex items-center justify-center min-h-96">
                  Loading...
                </div>
              }
            >
              <DetailsBlogs />
            </Suspense>
          ),
        },
        {
          path: "/blogs/:slug",
          element: (
            <Suspense
              fallback={
                <div className="flex items-center justify-center min-h-96">
                  Loading...
                </div>
              }
            >
              <ParticularBlogs />
            </Suspense>
          ),
        },
        {
          path: "/services/:id",
          element: (
            <Suspense
              fallback={
                <div className="flex items-center justify-center min-h-96">
                  Loading...
                </div>
              }
            >
              <ParticularService />
            </Suspense>
          ),
        },
        {
          path: "/contact-us",
          element: (
            <Suspense
              fallback={
                <div className="flex items-center justify-center min-h-96">
                  Loading...
                </div>
              }
            >
              <ContactUs />
            </Suspense>
          ),
        },
        {
          path: "/about-us",
          element: (
            <Suspense
              fallback={
                <div className="flex items-center justify-center min-h-96">
                  Loading...
                </div>
              }
            >
              <DetailsAboutUs />
            </Suspense>
          ),
        },
      ],
    },
  ]);
  return <RouterProvider router={router} />;
}
export default App;
