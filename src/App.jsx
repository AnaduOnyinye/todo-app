import { Routes, Route } from 'react-router-dom';
import Layout from './components/Layout';
import HomePage from './pages/HomePage';
import TodoList from './components/todo/TodoList';
import TodoDetail from './components/todo/TodoDetail';
import ErrorPage from './components/error/ErrorPage';
import NotFound from './components/error/NotFound';
import ErrorBoundaryTest from './components/error/ErrorBoundaryTest';
import Test404Page from './components/error/Test404Page';
import { ErrorBoundary } from './components/error/ErrorBoundary';

export default function App() {
  return (
    <Routes>
      <Route path="/" element={<HomePage />} />
      <Route path="/todos" element={<Layout />}>
        <Route
          index
          element={
            <ErrorBoundary onReset={() => window.location.reload()}>
              <TodoList />
            </ErrorBoundary>
          }
        />
        <Route
          path=":id"
          element={
            <ErrorBoundary onReset={() => window.location.reload()}>
              <TodoDetail />
            </ErrorBoundary>
          }
        />
      </Route>
      <Route
        path="/error-test"
        element={
          <ErrorBoundary onReset={() => window.location.reload()}>
            <ErrorBoundaryTest />
          </ErrorBoundary>
        }
      />
      <Route path="/404-test" element={<Test404Page />} />
      <Route path="*" element={<NotFound />} />
    </Routes>
  );
}