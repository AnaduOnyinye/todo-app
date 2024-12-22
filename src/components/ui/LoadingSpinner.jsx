export function LoadingSpinner({ className = '' }) {
  return (
    <div className={`animate-spin rounded-full h-8 w-8 border-b-2 border-gray-900 ${className}`} />
  );
}