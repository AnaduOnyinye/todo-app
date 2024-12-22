import { useEffect } from 'react';
import { createPortal } from 'react-dom';
import { CheckCircle, XCircle, X } from 'lucide-react';

export function Toast({ message, type = 'success', onClose, duration = 3000 }) {
  useEffect(() => {
    const timer = setTimeout(() => {
      onClose();
    }, duration);

    return () => clearTimeout(timer);
  }, [duration, onClose]);

  const icon = type === 'success' ? (
    <CheckCircle className="w-5 h-5 text-green-500" />
  ) : (
    <XCircle className="w-5 h-5 text-red-500" />
  );

  return createPortal(
    <div className="fixed top-4 right-4 z-50 animate-slide-in">
      <div className="bg-white rounded-lg shadow-lg p-4 flex items-center gap-3 min-w-[300px]">
        {icon}
        <p className="flex-1 text-gray-700">{message}</p>
        <button
          onClick={onClose}
          className="text-gray-400 hover:text-gray-600"
          aria-label="Close notification"
        >
          <X className="w-5 h-5" />
        </button>
      </div>
    </div>,
    document.body
  );
}