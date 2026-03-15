import Card from '../ui/Card';

export default function AddressDisplay({ address }) {
  const addressFields = [
    { label: 'Name', value: address.fullName },
    { label: 'Email', value: address.email },
    { label: 'Phone', value: address.phone },
    { 
      label: 'Address', 
      value: `${address.city}, ${address.state} - ${address.pinCode}` 
    }
  ];

  return (
    <Card title="Shipping Address">
      <address className="not-italic space-y-2 text-sm sm:text-base">
        {addressFields.map(({ label, value }) => (
          <div key={label} className="flex flex-col sm:flex-row sm:gap-2">
            <span className="font-medium text-gray-900 min-w-[80px]">{label}:</span>
            <span className="text-gray-700">{value}</span>
          </div>
        ))}
      </address>
    </Card>
  );
}
