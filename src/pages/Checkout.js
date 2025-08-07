// ...imports stay unchanged
import React, { useState, useEffect } from 'react';
import axios from '../utils/axiosInstance';
import { useLocation } from 'react-router-dom';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const Checkout = ({ cart: globalCart, setCart }) => {
  const location = useLocation();
  const buyNowProduct = location.state?.product;

  const [cart, setLocalCart] = useState([]);
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    address: '',
    city: '',
    state: '',
    pincode: '',
    payment: '',
  });

  const [submitted, setSubmitted] = useState(false);
  const [errors, setErrors] = useState({});
  const [successMsg, setSuccessMsg] = useState('');
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    const buyNowData = localStorage.getItem('buynow');
    const cartData = localStorage.getItem('cart');

    if (buyNowData) {
      const item = JSON.parse(buyNowData);
      setLocalCart([{ ...item }]); // Only Buy Now product
    } else if (cartData) {
      setLocalCart(JSON.parse(cartData)); // Full cart if no Buy Now
    } else {
      setLocalCart([]);
    }
  }, []);

  const total = cart.reduce((acc, item) => acc + item.price * item.quantity, 0);

  const handleChange = (e) => {
    setFormData((prev) => ({
      ...prev,
      [e.target.name]: e.target.value,
    }));
  };

  const validate = () => {
    const newErrors = {};
    if (!formData.name.trim()) newErrors.name = 'Name is required';
    if (!formData.email.trim()) newErrors.email = 'Email is required';
    else if (!/\S+@\S+\.\S+/.test(formData.email)) newErrors.email = 'Email is invalid';
    if (!formData.phone.trim()) newErrors.phone = 'Phone is required';
    if (!formData.address.trim()) newErrors.address = 'Address is required';
    if (!formData.city.trim()) newErrors.city = 'City is required';
    if (!formData.state.trim()) newErrors.state = 'State is required';
    if (!formData.pincode.trim()) newErrors.pincode = 'Pincode is required';
    if (!formData.payment.trim()) newErrors.payment = 'Please select a payment method';
    return newErrors;
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const validationErrors = validate();
    if (Object.keys(validationErrors).length > 0) {
      setErrors(validationErrors);
      return;
    }

    try {
      const token = localStorage.getItem('token');
      if (!token) {
        toast.error('Please log in to place an order.');
        return;
      }

      setLoading(true);
      const fullAddress = `${formData.address}, ${formData.city}, ${formData.state} - ${formData.pincode}`;

      await axios.post(
        'orders',
        {
          cartItems: cart,
          address: fullAddress,
          phone: formData.phone,
          totalAmount: total,
          payment_status: formData.payment,
        },
        {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        }
      );

      setSubmitted(true);
      setSuccessMsg('Your order has been placed successfully!');

      // ✅ Clear local storage after success
      if (localStorage.getItem('buynow')) {
        localStorage.removeItem('buynow');
      } else {
        setCart([]); // clear global cart
        localStorage.removeItem('cart');
      }

      setLocalCart([]);

    } catch (error) {
      console.error('Order error:', error.response?.data || error.message);
      alert(error.response?.data?.error || 'Failed to place order. Please try again.');
    } finally {
      setLoading(false);
    }
  };

  return (
    <div style={containerStyle}>
      <h2 style={headingStyle}>Checkout</h2>

      {/* ✅ FIXED: Submitted first, then check cart length */}
      {submitted ? (
        <div style={successMsgStyle}>{successMsg}</div>
      ) : cart.length === 0 ? (
        <p style={{ fontSize: '1rem', textAlign: 'center' }}>Your cart is empty.</p>
      ) : (
        <>
          <div style={{ marginBottom: '1.5rem' }}>
            {cart.map((item) => (
              <div key={item.id} style={cartItemStyle}>
                <img
                  src={item.image}
                  alt={item.name}
                  style={{ width: 60, height: 60, objectFit: 'cover', borderRadius: 6, marginRight: 12 }}
                />
                <div style={{ flexGrow: 1 }}>
                  <strong>{item.name}</strong>
                  <p style={{ margin: '4px 0' }}>Qty: {item.quantity}</p>
                </div>
                <div style={{ fontWeight: '600' }}>₹{(item.price * item.quantity).toFixed(2)}</div>
              </div>
            ))}
            <h3 style={totalStyle}>Total: ₹{total.toFixed(2)}</h3>
          </div>

          <form onSubmit={handleSubmit}>
            <div style={formGridStyle}>
              {[{ label: 'Name', name: 'name' },
                { label: 'Email ID', name: 'email', type: 'email' },
                { label: 'Phone Number', name: 'phone', type: 'tel' },
                { label: 'City', name: 'city' },
                { label: 'State', name: 'state' },
                { label: 'Pincode', name: 'pincode' },
              ].map(({ label, name, type = 'text' }) => (
                <div key={name}>
                  <label style={labelStyle}>{label}:</label>
                  <input
                    type={type}
                    name={name}
                    value={formData[name]}
                    onChange={handleChange}
                    style={inputStyle}
                  />
                  {errors[name] && <p style={errorStyle}>{errors[name]}</p>}
                </div>
              ))}

              <div>
                <label style={labelStyle}>Payment Method:</label>
                <select
                  name="payment"
                  value={formData.payment}
                  onChange={handleChange}
                  style={inputStyle}
                >
                  <option value="">--Select--</option>
                  <option value="cod">Cash on Delivery</option>
                  <option value="upi">UPI</option>
                  <option value="card">Credit/Debit Card</option>
                </select>
                {errors.payment && <p style={errorStyle}>{errors.payment}</p>}
              </div>

              <div style={{ gridColumn: '1 / -1' }}>
                <label style={labelStyle}>Address:</label>
                <textarea
                  name="address"
                  value={formData.address}
                  onChange={handleChange}
                  rows={3}
                  style={{ ...inputStyle, resize: 'vertical' }}
                />
                {errors.address && <p style={errorStyle}>{errors.address}</p>}
              </div>
            </div>

            <button
              type="submit"
              style={{
                ...buttonStyle,
                backgroundColor: loading ? '#aaa' : buttonStyle.backgroundColor,
                cursor: loading ? 'not-allowed' : 'pointer',
              }}
              disabled={loading}
            >
              {loading ? 'Placing Order...' : 'Place Order'}
            </button>
          </form>
        </>
      )}
    </div>
  );
};

// --- Styles ---
const containerStyle = {
  maxWidth: '600px',
  margin: '3rem auto',
  padding: '1.5rem 2rem',
  fontFamily: "'Segoe UI', Tahoma, Geneva, Verdana, sans-serif",
  backgroundColor: '#fffaef',
  borderRadius: '12px',
  boxShadow: '0 4px 10px rgb(220, 84, 47)',
  color: '#3e2f1c',
};

const headingStyle = {
  textAlign: 'center',
  marginBottom: '1.5rem',
  fontSize: '2rem',
  color: '#5c4033',
};

const cartItemStyle = {
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'space-between',
  marginBottom: '1rem',
  borderBottom: '1px solid #d6a136',
  paddingBottom: '0.5rem',
};

const totalStyle = {
  textAlign: 'right',
  fontSize: '1.3rem',
  color: '#7a4a05',
  fontWeight: '700',
  marginTop: '1rem',
};

const formGridStyle = {
  display: 'grid',
  gridTemplateColumns: '1fr 1fr',
  gap: '1rem 1.5rem',
  marginBottom: '1.5rem',
};

const labelStyle = {
  display: 'block',
  marginBottom: '0.3rem',
  fontWeight: '600',
  fontSize: '0.9rem',
};

const inputStyle = {
  width: '100%',
  padding: '8px',
  borderRadius: '6px',
  border: '1px solid #ccc',
  fontSize: '0.9rem',
  fontFamily: 'inherit',
  boxSizing: 'border-box',
};

const buttonStyle = {
  backgroundColor: '#5c4033',
  color: 'white',
  padding: '10px',
  border: 'none',
  borderRadius: '8px',
  fontWeight: '600',
  fontSize: '1rem',
  width: '100%',
  transition: 'background-color 0.3s ease',
};

const errorStyle = {
  color: '#b00020',
  fontSize: '0.75rem',
  marginTop: '0.25rem',
};

const successMsgStyle = {
  backgroundColor: '#d4edda',
  color: '#155724',
  border: '1px solid #c3e6cb',
  padding: '1rem',
  borderRadius: '8px',
  textAlign: 'center',
  fontWeight: '600',
  fontSize: '1rem',
};

export default Checkout;
