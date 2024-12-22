import { ChevronLeft, ChevronRight } from 'lucide-react';
import { Button } from '../ui/Button';

export function TodoPagination({ page, totalTodos, onPageChange }) {
  const totalPages = Math.ceil(totalTodos / 5);

  return (
    <div className="flex items-center justify-between">
      <p className="text-sm text-gray-700">
        Page <span className="font-medium">{page}</span> of{' '}
        <span className="font-medium">{totalPages}</span>
      </p>
      
      <div className="flex gap-2">
        <Button
          onClick={() => onPageChange(page - 1)}
          disabled={page === 1}
          className="inline-flex items-center gap-1 px-3 py-1 text-sm disabled:opacity-50"
        >
          <ChevronLeft className="h-4 w-4" />
          Previous
        </Button>
        <Button
          onClick={() => onPageChange(page + 1)}
          disabled={page >= totalPages}
          className="inline-flex items-center gap-1 px-3 py-1 text-sm disabled:opacity-50"
        >
          Next
          <ChevronRight className="h-4 w-4" />
        </Button>
      </div>
    </div>
  );
}