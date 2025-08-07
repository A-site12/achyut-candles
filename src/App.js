import React, { useState, useEffect } from 'react';
import { Routes, Route, useNavigate } from 'react-router-dom';

import Navbar from './components/Navbar';
import Home from './pages/Home';
import Shop from './pages/Shop';
import Cart from './pages/Cart';
import Contact from './pages/Contact';
import About from './pages/About';
import Checkout from './pages/Checkout';
import LoginModal from './components/LoginModal';
import ProtectedRoute from './components/ProtectedRoute';
import AdminDashboard from './pages/AdminDashboard';
import MyOrders from './pages/MyOrders';
import Decor from './pages/decor';
import Gift from './pages/gift';
import Terms from './pages/Terms';
import Policy from './pages/Policy';
import TrackOrder from './pages/TrackOrder';
import Shipping from './pages/Shipping';
import ReturnRefund from './pages/ReturnRefund';
import Relaxing from './pages/relaxing';
import Romantic from './pages/Romantic';
import Energizing from './pages/Energizing';
import Meditation from './pages/Meditation';

import { ToastContainer, toast } from 'react-toastify'; //for mordern login error failed alert
import 'react-toastify/dist/ReactToastify.css';

function App() {
  const navigate = useNavigate();

  // Load and persist cart from localStorage
  const [cart, setCart] = useState(() => {
    const savedCart = localStorage.getItem('cart');
    return savedCart ? JSON.parse(savedCart) : [];
  });

  useEffect(() => {
    localStorage.setItem('cart', JSON.stringify(cart));
  }, [cart]);

  // Load and persist user from localStorage
  const [user, setUser] = useState(() => {
    const savedUser = localStorage.getItem('user');
    return savedUser ? JSON.parse(savedUser) : null;
  });

  useEffect(() => {
    if (user) localStorage.setItem('user', JSON.stringify(user));
    else localStorage.removeItem('user');
  }, [user]);

  const [isLoginOpen, setIsLoginOpen] = useState(false);

  // Add to cart
  const addToCart = (product) => {
    setCart((prevCart) => {
      const existingIndex = prevCart.findIndex((item) => item.id === product.id);
      if (existingIndex !== -1) {
        const updatedCart = [...prevCart];
        updatedCart[existingIndex].quantity += 1;
        return updatedCart;
      } else {
        return [...prevCart, { ...product, quantity: 1 }];
      }
    });
  };

  // Login
  const handleLogin = async (email, password) => {
    try {
      const res = await fetch('/api/auth/login', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ email, password }),
      });

      const data = await res.json();

      if (!res.ok) {
        toast.error(data.error || 'Login failed');
        return;
      }

      setUser(data.user);
      localStorage.setItem('token', data.token);
      setIsLoginOpen(false);

      if (data.user.isAdmin) {
        navigate('/admin/dashboard');
      } else {
        navigate('/');
      }
    } catch (error) {
      toast.error('Login error: ' + error.message);
    }
  };

  // Signup
  const handleSignup = async (username, email, password) => {
    try {
      const res = await fetch('/api/auth/signup', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ username, email, password }),
      });

      const data = await res.json();

      if (!res.ok) {
        toast.error(data.error || 'Signup failed');
        return;
      }

      toast.success('Signup successful! Please login now.');
      setIsLoginOpen(false);
    } catch (error) {
      toast.error('Signup error: ' + error.message);
    }
  };

  return (
    <>
      <Navbar
        cart={cart}
        onLoginClick={() => setIsLoginOpen(true)}
        user={user}
        setUser={setUser}
      />

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/shop" element={<Shop cart={cart} addToCart={addToCart} />} />
        <Route path="/cart" element={<Cart cart={cart} setCart={setCart} />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/about" element={<About />} />
        <Route path="/checkout" element={<Checkout cart={cart} setCart={setCart} />} />
        <Route path="/my-orders" element={<MyOrders />} />
        <Route path="/decor" element={<Decor cart={cart} addToCart={addToCart} />} />
        <Route path="/gift" element={<Gift cart={cart} addToCart={addToCart} />} />
        <Route path="/terms" element={<Terms />} />
        <Route path="/policy" element={<Policy />} />
        <Route path="/track-order" element={<TrackOrder />} />
        <Route path="/shipping-policy" element={<Shipping />} />
        <Route path="/return-refund" element={<ReturnRefund />} />
        <Route path="/relaxing" element={<Relaxing />} />
        <Route path="/romantic" element={<Romantic />} />
        <Route path="/energizing" element={<Energizing />} />
        <Route path="/meditation" element={<Meditation />} />

        <Route
          path="/admin/dashboard"
          element={
            <ProtectedRoute allowedRoles={['admin']} user={user}>
              <AdminDashboard />
            </ProtectedRoute>
          }
        />
      </Routes>

      <LoginModal
        isOpen={isLoginOpen}
        onClose={() => setIsLoginOpen(false)}
        onLogin={handleLogin}
        onSignup={handleSignup}
      />

      <ToastContainer position="top-center" autoClose={3000} />
    </>
  );
}

export default App;
