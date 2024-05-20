import { createBrowserRouter, RouterProvider } from "react-router-dom";
import HomePage from "./pages/Home";
import RootLayout from "./pages/Root";
import { lazy, Suspense } from "react";
// Lazy loading
// import PostPage, { loader as postLoader } from "./pages/Post";
const PostPage = lazy(() => import("./pages/Post"));
// Lazy Loading
// import BlogPage, { loader as postsLoader } from "./pages/Blog";
const BlogPage = lazy(() => import("./pages/Blog"));

const router = createBrowserRouter([
  {
    path: "/",
    element: <RootLayout />,
    children: [
      {
        index: true,
        element: <HomePage />,
      },
      {
        path: "posts",
        children: [
          {
            index: true,
            element: (
              <Suspense fallback={<p>Loading...</p>}>
                <BlogPage />
              </Suspense>
            ),

            loader: () =>
              import("./pages/Blog").then((module) => module.loader()),
          },
          {
            path: ":id",
            element: (
              <Suspense fallback={<p>Loading...</p>}>
                <PostPage />
              </Suspense>
            ),
            loader: ({ params }) =>
              import("./pages/Post").then((module) =>
                module.loader({ params })
              ),
          },
        ],
      },
    ],
  },
]);

function App() {
  return <RouterProvider router={router} />;
}

export default App;
