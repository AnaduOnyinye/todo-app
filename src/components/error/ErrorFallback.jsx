import { Button } from '../ui/Button';

export function ErrorFallback({ error, resetErrorBoundary }) {
  const errorMessage = error?.message || 
    'Oops! Something went wrong. We are sorry but an error occurred. Please try refreshing the page.';

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-100">
      <div className="bg-white p-8 rounded-lg shadow-md max-w-md w-full text-center">
        <h1 className="text-4xl font-bold text-red-600 mb-4">Oops!</h1>
        <p className="text-gray-600 mb-6">{errorMessage}</p>
        <div className="space-x-4">
          <Button 
            onClick={() => window.location.href = '/'}
            className="bg-blue-500 hover:bg-blue-600"
          >
            Return to Home
          </Button>
          {resetErrorBoundary && (
            <Button 
              onClick={resetErrorBoundary}
              className="bg-green-500 hover:bg-green-600"
            >
              Try Again
            </Button>
          )}
        </div>
      </div>
    </div>
  );
}