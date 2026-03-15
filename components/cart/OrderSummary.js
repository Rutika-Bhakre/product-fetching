import Card from '../ui/Card';
import { calculateSubtotal, calculateTotal, formatCurrency } from '../../utils/helpers';

export default function OrderSummary({ cartData }) {
  const subtotal = calculateSubtotal(cartData.cartItems);
  const total = calculateTotal(subtotal, cartData.shipping_fee, cartData.discount_applied);

  return (
    <Card title="Order Summary">
      <div className="space-y-3" role="list" aria-label="Order pricing breakdown">
        <SummaryRow label="Subtotal" value={subtotal} />
        <SummaryRow label="Shipping Fee" value={cartData.shipping_fee} />
        {cartData.discount_applied > 0 && (
          <SummaryRow 
            label="Discount" 
            value={-cartData.discount_applied} 
            highlight="text-green-600"
          />
        )}
        <div className="border-t pt-3">
          <SummaryRow 
            label="Total" 
            value={total} 
            bold 
          />
        </div>
      </div>
    </Card>
  );
}

function SummaryRow({ label, value, bold = false, highlight = '' }) {
  const textClass = bold ? 'text-lg font-bold' : 'text-gray-700';
  const colorClass = highlight || textClass;

  return (
    <div className={`flex justify-between ${textClass}`} role="listitem">
      <span className={colorClass}>{label}</span>
      <span className={colorClass}>{formatCurrency(Math.abs(value))}</span>
    </div>
  );
}
