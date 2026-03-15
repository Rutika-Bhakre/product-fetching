// Calculate cart subtotal
export const calculateSubtotal = (cartItems) => {
  return cartItems.reduce(
    (sum, item) => sum + item.product_price * item.quantity,
    0
  );
};

// Calculate total with shipping and discount
export const calculateTotal = (subtotal, shippingFee, discount) => {
  return subtotal + shippingFee - discount;
};

// Format currency
export const formatCurrency = (amount) => {
  return `₹${amount.toLocaleString('en-IN')}`;
};

// Validate email format
export const isValidEmail = (email) => {
  return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
};

// Validate phone number (10 digits)
export const isValidPhone = (phone) => {
  return /^\d{10}$/.test(phone);
};
