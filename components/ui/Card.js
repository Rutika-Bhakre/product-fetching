export default function Card({ children, title, className = '' }) {
  return (
    <div className={`bg-white rounded-lg shadow-md p-4 sm:p-6 ${className}`}>
      {title && (
        <h2 className="text-lg sm:text-xl font-bold mb-4 text-gray-900">
          {title}
        </h2>
      )}
      {children}
    </div>
  );
}
