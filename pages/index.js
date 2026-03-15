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
  const res = await fetch('http://localhost:3000/api/cart');
  const cartData = await res.json();

  return {
    props: { cartData }
  };
}
