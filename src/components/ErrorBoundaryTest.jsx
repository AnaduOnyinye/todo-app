import { Button } from './ui/Button';

export default function ErrorBoundaryTest() {
  const throwError = () => {
    throw new Error('Oops! Something went wrong. We are sorry but an error occurred. Please try refreshing the page.');
  };

  return (
    <div className="text-center">
      <h2 className="text-2xl font-bold mb-4">Error Boundary Test</h2>
      <p className="text-gray-600 mb-4">Click the button below to test the error boundary</p>
      <Button
        onClick={throwError}
        className="bg-red-500 hover:bg-red-600"
      >
        Trigger Error
      </Button>
    </div>
  );
}