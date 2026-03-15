# Next.js Checkout Flow - Refactored

A clean, modular, and accessible Next.js checkout application with Server Side Rendering.

## Tech Stack

- **Framework:** Next.js (Pages Router)
- **Language:** JavaScript
- **Styling:** Tailwind CSS
- **State Management:** React Context API
- **SSR:** getServerSideProps

## Features

- ✅ Server-side rendered cart page
- ✅ Multi-step checkout flow (Cart → Shipping → Payment → Success)
- ✅ Form validation with accessibility
- ✅ Mock API for cart data
- ✅ Fully responsive design (mobile + desktop)
- ✅ Clean, modular component structure
- ✅ Reusable UI components
- ✅ WCAG accessibility standards
- ✅ Utility functions for calculations

## Improved Project Structure

```
├── pages/
│   ├── _app.js              # App wrapper with Context Provider
│   ├── index.js             # Cart / Order Summary (SSR)
│   ├── checkout.js          # Shipping Address Form
│   ├── payment.js           # Payment / Confirmation
│   ├── success.js           # Order Success Page
│   └── api/
│       └── cart.js          # Mock API endpoint
├── components/
│   ├── Layout.js            # Page layout with back button
│   ├── ui/                  # Reusable UI components
│   │   ├── Button.js        # Accessible button component
│   │   ├── Card.js          # Card wrapper component
│   │   └── Input.js         # Form input with validation
│   ├── cart/                # Cart-related components
│   │   ├── CartItem.js      # Individual cart item
│   │   ├── CartList.js      # List of cart items
│   │   └── OrderSummary.js  # Pricing breakdown
│   └── checkout/            # Checkout-related components
│       ├── AddressForm.js   # Shipping form with validation
│       └── AddressDisplay.js # Display shipping address
├── context/
│   └── CartContext.js       # Global state management
├── utils/
│   └── helpers.js           # Utility functions
└── styles/
    └── globals.css          # Tailwind CSS imports
```

## Key Improvements

### 1. Component Reusability
- **UI Components:** Button, Card, Input components used across pages
- **Modular Structure:** Separated cart and checkout components
- **DRY Principle:** No code duplication

### 2. Better Folder Structure
- `components/ui/` - Reusable UI elements
- `components/cart/` - Cart-specific components
- `components/checkout/` - Checkout-specific components
- `utils/` - Helper functions and utilities

### 3. Accessibility (WCAG)
- Semantic HTML elements (`<article>`, `<address>`, `role` attributes)
- ARIA labels and descriptions
- Keyboard navigation support
- Focus management on form errors
- Screen reader friendly error messages
- Proper heading hierarchy

### 4. Mobile Responsiveness
- Mobile-first approach with Tailwind
- Responsive grid layouts (`grid-cols-1 lg:grid-cols-3`)
- Touch-friendly button sizes (min 44x44px)
- Flexible typography (`text-sm sm:text-base`)
- Optimized spacing for small screens
- Sticky header for better navigation

### 5. Code Readability
- Clear component naming
- Extracted utility functions
- Consistent code formatting
- Meaningful variable names
- Separated concerns (UI, logic, data)
- Comments where needed

## Setup Instructions

### 1. Install Dependencies

```bash
npm install
```

### 2. Run Development Server

```bash
npm run dev
```

The application will be available at [http://localhost:3000](http://localhost:3000)

### 3. Build for Production

```bash
npm run build
npm start
```

## Usage Flow

1. **Cart Page (/)** - View cart items and order summary
2. **Checkout (/checkout)** - Enter shipping address with validation
3. **Payment (/payment)** - Review order and confirm
4. **Success (/success)** - Order confirmation

## Form Validation

The shipping address form includes:
- All fields required
- Email format validation (RFC 5322)
- Phone number must be exactly 10 digits
- Real-time error clearing
- Focus management on errors
- Accessible error messages

## Utility Functions

Located in `utils/helpers.js`:
- `calculateSubtotal()` - Calculate cart subtotal
- `calculateTotal()` - Calculate final total
- `formatCurrency()` - Format numbers as currency
- `isValidEmail()` - Email validation
- `isValidPhone()` - Phone validation

## Responsive Breakpoints

- **Mobile:** < 640px
- **Tablet:** 640px - 1024px
- **Desktop:** > 1024px

## Accessibility Features

- Keyboard navigation
- Screen reader support
- ARIA labels and roles
- Focus indicators
- Error announcements
- Semantic HTML
- Color contrast compliance

## Browser Support

- Chrome (latest)
- Firefox (latest)
- Safari (latest)
- Edge (latest)
