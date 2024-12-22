import { Button } from '../ui/Button';

export function ErrorTestContent({ onTriggerError }) {
  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-100">
      <div className="bg-white p-8 rounded-lg shadow-md max-w-md w-full text-center">
        <h2 className="text-2xl font-bold mb-4">Error Boundary Test</h2>
        <p className="text-gray-600 mb-6">
          Click the button below to trigger an error and test the error boundary
        </p>
        <Button
          onClick={onTriggerError}
          className="bg-red-500 hover:bg-red-600 text-white"
        >
          Trigger Error
        </Button>
      </div>
    </div>
  );
}