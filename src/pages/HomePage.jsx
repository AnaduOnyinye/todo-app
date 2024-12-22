import { Link } from 'react-router-dom';
import { Button } from '../components/ui/Button';
import { Home } from 'lucide-react';

export default function HomePage() {
  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-blue-500 to-purple-600">
      <div className="text-center text-white p-8 max-w-2xl">
        <div className="flex justify-center mb-8">
          <Home className="w-16 h-16" />
        </div>
        <h1 className="text-5xl font-bold mb-6">Welcome to Todo App</h1>
        <p className="text-xl mb-8 text-white/90">
          Organize your tasks efficiently and boost your productivity
        </p>
        <Link to="/todos">
          <Button className="bg-white text-blue-600 hover:bg-blue-50 text-lg px-8 py-3 flex items-center gap-2">
            <span>Click on Todos</span>
            <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
            </svg>
          </Button>
        </Link>
      </div>
    </div>
  );
}