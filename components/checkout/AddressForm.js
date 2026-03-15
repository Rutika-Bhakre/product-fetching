import { useState } from 'react';
import Input from '../ui/Input';
import Button from '../ui/Button';
import { isValidEmail, isValidPhone } from '../../utils/helpers';

const INITIAL_FORM_STATE = {
  fullName: '',
  email: '',
  phone: '',
  pinCode: '',
  city: '',
  state: ''
};

export default function AddressForm({ onSubmit }) {
  const [formData, setFormData] = useState(INITIAL_FORM_STATE);
  const [errors, setErrors] = useState({});

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
    
    // Clear error when user types
    if (errors[name]) {
      setErrors(prev => ({ ...prev, [name]: '' }));
    }
  };

  const validateForm = () => {
    const newErrors = {};
    
    if (!formData.fullName.trim()) {
      newErrors.fullName = 'Full name is required';
    }
    
    if (!formData.email.trim()) {
      newErrors.email = 'Email is required';
    } else if (!isValidEmail(formData.email)) {
      newErrors.email = 'Please enter a valid email address';
    }
    
    if (!formData.phone.trim()) {
      newErrors.phone = 'Phone number is required';
    } else if (!isValidPhone(formData.phone)) {
      newErrors.phone = 'Phone number must be exactly 10 digits';
    }
    
    if (!formData.pinCode.trim()) {
      newErrors.pinCode = 'PIN code is required';
    }
    
    if (!formData.city.trim()) {
      newErrors.city = 'City is required';
    }
    
    if (!formData.state.trim()) {
      newErrors.state = 'State is required';
    }

    return newErrors;
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const newErrors = validateForm();
    
    if (Object.keys(newErrors).length === 0) {
      onSubmit(formData);
    } else {
      setErrors(newErrors);
      // Focus first error field
      const firstErrorField = Object.keys(newErrors)[0];
      document.getElementById(`input-${firstErrorField}`)?.focus();
    }
  };

  return (
    <form onSubmit={handleSubmit} className="space-y-4" noValidate>
      <Input
        label="Full Name"
        name="fullName"
        value={formData.fullName}
        onChange={handleChange}
        error={errors.fullName}
        required
        placeholder="Enter your full name"
      />

      <Input
        label="Email"
        name="email"
        type="email"
        value={formData.email}
        onChange={handleChange}
        error={errors.email}
        required
        placeholder="your.email@example.com"
      />

      <Input
        label="Phone Number"
        name="phone"
        type="tel"
        value={formData.phone}
        onChange={handleChange}
        error={errors.phone}
        required
        placeholder="10-digit mobile number"
      />

      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
        <Input
          label="PIN Code"
          name="pinCode"
          value={formData.pinCode}
          onChange={handleChange}
          error={errors.pinCode}
          required
          placeholder="Enter PIN code"
        />

        <Input
          label="City"
          name="city"
          value={formData.city}
          onChange={handleChange}
          error={errors.city}
          required
          placeholder="Enter city"
        />
      </div>

      <Input
        label="State"
        name="state"
        value={formData.state}
        onChange={handleChange}
        error={errors.state}
        required
        placeholder="Enter state"
      />

      <Button 
        type="submit" 
        variant="primary" 
        fullWidth
        ariaLabel="Continue to payment page"
      >
        Continue to Payment
      </Button>
    </form>
  );
}
