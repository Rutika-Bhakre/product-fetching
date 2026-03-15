import Card from '../ui/Card';
import CartItem from './CartItem';

export default function CartList({ items }) {
  return (
    <Card title="Cart Items">
      <div role="list" aria-label="Shopping cart items">
        {items.map((item) => (
          <CartItem key={item.product_id} item={item} />
        ))}
      </div>
    </Card>
  );
}
