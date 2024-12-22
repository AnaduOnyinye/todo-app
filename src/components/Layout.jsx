import { Outlet } from 'react-router-dom';
import { Link } from 'react-router-dom';
import { CheckCircle } from 'lucide-react';

export default function Layout() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-50 to-gray-100">
      <header className="bg-white border-b border-gray-200 sticky top-0 z-50">
        <nav className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between h-16">
            <Link to="/" className="flex items-center space-x-3">
              <CheckCircle className="h-8 w-8 text-blue-600" />
              <span className="text-xl font-bold bg-gradient-to-r from-blue-600 to-blue-800 bg-clip-text text-transparent">
                TodoApp
              </span>
            </Link>
            <div className="flex items-center space-x-6">
              <Link
                to="/todos"
                className="text-gray-600 hover:text-blue-600 transition-colors font-medium"
              >
                My Todos
              </Link>
              <Link
                to="/error-test"
                className="text-gray-600 hover:text-blue-600 transition-colors font-medium"
              >
                Error Test
              </Link>
              <Link
                to="/404-test"
                className="text-gray-600 hover:text-blue-600 transition-colors font-medium"
              >
                404 Test
              </Link>
            </div>
          </div>
        </nav>
      </header>

      <main className="max-w-7xl mx-auto py-8 px-4 sm:px-6 lg:px-8">
        <Outlet />
      </main>
    </div>
  );
}