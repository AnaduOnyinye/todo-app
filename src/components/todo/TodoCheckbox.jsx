export function TodoCheckbox({ checked, onChange, className = '' }) {
  return (
    <input
      type="checkbox"
      checked={checked}
      onChange={onChange}
      className={`h-5 w-5 rounded border-gray-300 text-blue-600 focus:ring-blue-500 ${className}`}
    />
  );
}