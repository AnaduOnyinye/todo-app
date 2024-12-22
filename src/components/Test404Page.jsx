import { Link } from 'react-router-dom';
import { Button } from './ui/Button';

export default function Test404Page() {
  return (
    <div className="text-center">
      <h2 className="text-2xl font-bold mb-4">404 Page Test</h2>
      <p className="mb-4">Click the button below to test the 404 page</p>
      <Link to="/non-existent-page">
        <Button>Test 404 Page</Button>
      </Link>
    </div>
  );
}