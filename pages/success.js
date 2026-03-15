import { useRouter } from 'next/router';
import Layout from '../components/Layout';
import Card from '../components/ui/Card';
import Button from '../components/ui/Button';

export default function Success() {
  const router = useRouter();

  return (
    <Layout title="Order Confirmation">
      <div className="max-w-2xl mx-auto">
        <Card className="text-center py-8 sm:py-12">
          <div 
            className="text-5xl sm:text-6xl mb-4" 
            role="img" 
            aria-label="Party popper emoji"
          >
            🎉
          </div>
          <h2 className="text-2xl sm:text-3xl font-bold text-gray-900 mb-2">
            Order Successful!
          </h2>
          <p className="text-gray-600 text-base sm:text-lg mb-8">
            Thank you for your purchase.
          </p>
          <Button 
            onClick={() => router.push('/')} 
            variant="primary"
            ariaLabel="Return to shopping cart"
          >
            Continue Shopping
          </Button>
        </Card>
      </div>
    </Layout>
  );
}
