export default function OrderSummary({ cartData }) {
  // Calculate subtotal from cart items
  const subtotal = cartData.cartItems.reduce(
    (sum, item) => sum + item.product_price * item.quantity,
    0
  );
  const total = subtotal + cartData.shipping_fee - cartData.discount_applied;

  return (
    <div className="bg-white rounded-lg shadow p-6 space-y-3">
      <h2 className="text-xl font-bold mb-4">Order Summary</h2>
      <div className="flex justify-between text-gray-700">
        <span>Subtotal</span>
        <span>₹{subtotal}</span>
      </div>
      <div className="flex justify-between text-gray-700">
        <span>Shipping Fee</span>
        <span>₹{cartData.shipping_fee}</span>
      </div>
      {cartData.discount_applied > 0 && (
        <div className="flex justify-between text-green-600">
          <span>Discount</span>
          <span>-₹{cartData.discount_applied}</span>
        </div>
      )}
      <div className="border-t pt-3 flex justify-between text-lg font-bold">
        <span>Total</span>
        <span>₹{total}</span>
      </div>
    </div>
  );
}
