import { createBrowserRouter, RouterProvider } from "react-router-dom";
import HomePage from "./app/HomePage";
import BlogPage from "./app/BlogPage";
import ErrorPage from "./app/ErrorPage";

const router = createBrowserRouter([
  {
    path: "/",
    element: <HomePage />,
    errorElement: <ErrorPage />,
    children: [
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
