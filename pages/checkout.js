import { useRouter } from 'next/router';
import Layout from '../components/Layout';
import AddressForm from '../components/checkout/AddressForm';
import Card from '../components/ui/Card';
import { useCart } from '../context/CartContext';

export default function Checkout() {
  const router = useRouter();
  const { setShippingAddress } = useCart();

  const handleSubmit = (formData) => {
    setShippingAddress(formData);
    router.push('/payment');
  };

  return (
    <Layout title="Shipping Address" showBackButton>
      <div className="max-w-2xl mx-auto">
        <Card title="Enter Shipping Details">
          <AddressForm onSubmit={handleSubmit} />
        </Card>
      </div>
    </Layout>
  );
}
