import { Link } from "react-router-dom";

const ErrorPage = () => {
  return (
    <div className="flex min-h-screen flex-col items-center justify-center bg-primary-light">
      <div className="text-1xl font-bold text-red-900 md:text-3xl">
        404 Page Not Found
        <Link
          to="/"
          className="absolute left-0 top-0 p-8 text-base text-secondary-dark transition-all duration-200 ease-in-out md:text-xl"
        >
          « <span className="hover:underline">Back to Home</span>
        </Link>
      </div>
    </div>
  );
};

export default ErrorPage;
