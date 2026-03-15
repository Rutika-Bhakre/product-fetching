import { useRouter } from 'next/router';
import { useEffect } from 'react';
import Layout from '../components/Layout';
import CartList from '../components/cart/CartList';
import OrderSummary from '../components/cart/OrderSummary';
import AddressDisplay from '../components/checkout/AddressDisplay';
import Button from '../components/ui/Button';
import { useCart } from '../context/CartContext';

export default function Payment() {
  const router = useRouter();
  const { cartData, shippingAddress } = useCart();

  useEffect(() => {
    if (!cartData || !shippingAddress) {
      router.push('/');
    }
  }, [cartData, shippingAddress, router]);

  if (!cartData || !shippingAddress) {
    return null;
  }

  const handlePayment = () => {
    router.push('/success');
  };

  return (
    <Layout title="Payment & Confirmation" showBackButton>
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-4 sm:gap-6">
        <div className="lg:col-span-2 space-y-4 sm:space-y-6">
          <AddressDisplay address={shippingAddress} />
          <CartList items={cartData.cartItems} />
        </div>

        <div className="lg:col-span-1">
          <div className="space-y-4">
            <OrderSummary cartData={cartData} />
            <Button 
              onClick={handlePayment} 
              variant="success" 
              fullWidth
              ariaLabel="Complete payment and place order"
            >
              Pay Securely
            </Button>
          </div>
        </div>
      </div>
    </Layout>
  );
}
