import { useEffect } from 'react';
import { useRouter } from 'next/router';
import Layout from '../components/Layout';
import CartList from '../components/cart/CartList';
import OrderSummary from '../components/cart/OrderSummary';
import Button from '../components/ui/Button';
import { useCart } from '../context/CartContext';

export default function Home({ cartData }) {
  const router = useRouter();
  const { setCartData } = useCart();

  useEffect(() => {
    setCartData(cartData);
  }, [cartData, setCartData]);

  const handleCheckout = () => {
    router.push('/checkout');
  };

  return (
    <Layout title="Shopping Cart">
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-4 sm:gap-6">
        <div className="lg:col-span-2">
          <CartList items={cartData.cartItems} />
        </div>

        <div className="lg:col-span-1">
          <div className="space-y-4">
            <OrderSummary cartData={cartData} />
            <Button 
              onClick={handleCheckout} 
              variant="primary" 
              fullWidth
              ariaLabel="Proceed to checkout page"
            >
              Proceed to Checkout
            </Button>
          </div>
        </div>
      </div>
    </Layout>
  );
}

export async function getServerSideProps() {
  const cartData = {
    cartItems: [
      {
        product_id: 101,
        product_name: "Bamboo Toothbrush (Pack of 4)",
        product_price: 299,
        quantity: 2,
        image: "https://images.unsplash.com/photo-1607613009820-a29f7bb81c04?w=150&h=150&fit=crop"
      },
      {
        product_id: 102,
        product_name: "Reusable Cotton Produce Bags",
        product_price: 450,
        quantity: 1,
        image: "https://images.unsplash.com/photo-1591047139829-d91aecb6caea?w=150&h=150&fit=crop"
      }
    ],
    shipping_fee: 50,
    discount_applied: 0
  };

  return {
    props: { cartData }
  };
}
