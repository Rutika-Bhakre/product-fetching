export default function CartItem({ item }) {
  return (
    <div className="flex items-center gap-4 py-4 border-b">
      <img 
        src={item.image} 
        alt={item.product_name}
        className="w-20 h-20 object-cover rounded"
      />
      <div className="flex-1">
        <h3 className="font-medium text-gray-900">{item.product_name}</h3>
        <p className="text-sm text-gray-600">Quantity: {item.quantity}</p>
      </div>
      <div className="text-right">
        <p className="font-semibold text-gray-900">₹{item.product_price * item.quantity}</p>
        <p className="text-sm text-gray-500">₹{item.product_price} each</p>
      </div>
    </div>
  );
}
