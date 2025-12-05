import React from 'react'
import { Link } from 'react-router';

const NotFound = () => {
  return (
    <div className="min-h-screen flex flex-col justify-center items-center bg-base-200 text-center px-4">
      <h1 className="text-7xl font-extrabold text-gray-700">404</h1>
      <h2 className="text-3xl font-bold mt-4">Page Not Found</h2>
      <p className="text-gray-600 mt-2 max-w-md">
        Oops! The page you're looking for doesn't exist or might have been moved.
      </p>

      <Link to="/" className="btn btn-primary mt-6">
       Return Home
      </Link>
    </div>
  );
};

export default NotFound;
