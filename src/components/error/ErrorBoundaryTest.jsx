import { useState } from 'react';
import { ErrorTestContent } from './ErrorTestContent';

export default function ErrorBoundaryTest() {
  const [shouldThrow, setShouldThrow] = useState(false);

  if (shouldThrow) {
    throw new Error('Oops! Something went wrong. We are sorry but an error occurred. Please try refreshing the page.');
  }

  return <ErrorTestContent onTriggerError={() => setShouldThrow(true)} />;
}