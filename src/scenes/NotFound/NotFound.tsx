import { Link } from 'react-router-dom';

export const NotFound = () => {
  return (
    <div className="flex items-center justify-center min-h-screen">
      <div className="text-center">
        <h1 className="text-4xl font-semibold">404 - Page Not Found</h1>
        <p className="mt-2 text-lg">
          The page you are looking for does not exist.
        </p>
        <Link
          to="/"
          className="mt-4 inline-block px-4 py-2 bg-primary hover:bg-gray80 text-white rounded"
        >
          Go to Home
        </Link>
      </div>
    </div>
  );
};
