import { createBrowserRouter, RouterProvider } from "react-router-dom";
import HomePage from "./app/HomePage";
import BlogPage from "./app/BlogPage";
import ErrorPage from "./app/ErrorPage";

const router = createBrowserRouter([
  {
    path: "/",
    errorElement: <ErrorPage />,
    children: [
      {
        index: true,
        element: <HomePage />,
      },
      {
        path: "blog",
        element: <BlogPage />,
      },
    ],
  },
]);

export const App = () => {
  return <RouterProvider router={router} />;
};
