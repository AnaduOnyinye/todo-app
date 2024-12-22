import { useRouteError } from 'react-router-dom';
import { Button } from './ui/Button';

export default function ErrorPage({ error, resetErrorBoundary }) {
  const routeError = useRouteError();
  const errorMessage = error?.message || routeError?.message || 'Oops! Something went wrong. We are sorry but an error occurred. Please try refreshing the page.';

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-100">
      <div className="bg-white p-8 rounded-lg shadow-md max-w-md w-full text-center">
        <h1 className="text-4xl font-bold text-red-600 mb-4">Oops!</h1>
        <p className="text-gray-600 mb-6">{errorMessage}</p>
        <div className="space-x-4">
          <Button onClick={() => window.location.href = '/'}>
            Return to Home
          </Button>
          {resetErrorBoundary && (
            <Button onClick={resetErrorBoundary}>
              Try Again
            </Button>
          )}
        </div>
      </div>
    </div>
  );
}