import { ErrorFallback } from './ErrorFallback';

export default function ErrorPage({ error, resetErrorBoundary }) {
  return <ErrorFallback error={error} resetErrorBoundary={resetErrorBoundary} />;
}