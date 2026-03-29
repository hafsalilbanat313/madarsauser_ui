import { Link } from "react-router-dom";

const ErrorPage = () => {
  return (
    <div className="min-h-screen flex items-center justify-center bg-white px-4 py-10">
      <div className="bg-white/30 backdrop-blur-md border border-white/20 shadow-2xl rounded-3xl p-8 sm:p-12 max-w-md w-full text-center">
        <img
          src="https://media.istockphoto.com/id/1481759725/photo/404-error-isolated-on-white-background-page-not-found.webp?a=1&b=1&s=612x612&w=0&k=20&c=queRR4cQt4gV6g-F-CzI0huHd6I0BBPmXH71Gye5wK0="
          alt="404 Not Found"
          className="w-56 mx-auto mb-6"
        />
        <h2 className="text-2xl font-semibold text-blue-900 mb-2">Page Not Found</h2>
        <p className="text-blue-700 text-base sm:text-lg mb-6">
          Oops! The page you're looking for doesn't exist or has been moved.
        </p>
        <Link
          to="/"
          className="inline-block px-6 py-2 bg-blue-700 hover:bg-blue-800 text-white rounded-full shadow-md text-sm transition"
        >
          Back to Home
        </Link>
      </div>
    </div>
  );
};

export default ErrorPage;
