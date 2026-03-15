import { formatCurrency } from '../../utils/helpers';

export default function CartItem({ item }) {
  const itemTotal = item.product_price * item.quantity;

  return (
    <article 
      className="flex flex-col sm:flex-row items-start sm:items-center gap-3 sm:gap-4 py-4 border-b last:border-b-0"
      aria-label={`${item.product_name}, quantity ${item.quantity}`}
    >
      <img 
        src={item.image} 
        alt={item.product_name}
        className="w-20 h-20 sm:w-24 sm:h-24 object-cover rounded flex-shrink-0 bg-gray-100"
        loading="lazy"
        onError={(e) => {
          e.target.onerror = null;
          e.target.src = 'data:image/svg+xml,%3Csvg xmlns="http://www.w3.org/2000/svg" width="150" height="150" viewBox="0 0 150 150"%3E%3Crect fill="%23e5e7eb" width="150" height="150"/%3E%3Ctext x="50%25" y="50%25" dominant-baseline="middle" text-anchor="middle" font-family="sans-serif" font-size="14" fill="%239ca3af"%3ENo Image%3C/text%3E%3C/svg%3E';
        }}
      />
      <div className="flex-1 min-w-0">
        <h3 className="font-medium text-gray-900 text-sm sm:text-base break-words">
          {item.product_name}
        </h3>
        <p className="text-sm text-gray-600 mt-1">
          Quantity: <span className="font-medium">{item.quantity}</span>
        </p>
        <p className="text-xs text-gray-500 mt-1">
          {formatCurrency(item.product_price)} each
        </p>
      </div>
      <div className="text-right self-end sm:self-auto">
        <p className="font-semibold text-gray-900 text-base sm:text-lg">
          {formatCurrency(itemTotal)}
        </p>
      </div>
    </article>
  );
}
