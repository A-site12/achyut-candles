import React, { useState, useEffect } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { LiaShoppingCartSolid } from "react-icons/lia";
import { GrSearch } from "react-icons/gr";
import { LuLogIn, LuLogOut } from "react-icons/lu";
import './Navbar.css';

const messages = [
  '🎉 Summer Sale is Live! Up to 40% Off All Candles! 🎉',
  'Free Shipping on Orders Above ₹499 | Use Code: CANDLELOVE',
];

const Navbar = ({ cart = [], onLoginClick }) => {
  const [showNavbar, setShowNavbar] = useState(true);
  const [lastScrollY, setLastScrollY] = useState(0);
  const [isOpen, setIsOpen] = useState(false);
  const [msgIndex, setMsgIndex] = useState(0);
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [isAdmin, setIsAdmin] = useState(false);
  const [cartCount, setCartCount] = useState(0);

  const navigate = useNavigate();

  useEffect(() => {
    const token = localStorage.getItem('token');
    if (token) {
      try {
        const payload = JSON.parse(atob(token.split('.')[1]));
        setIsLoggedIn(true);
        if (payload.role === 'admin' || payload.isAdmin) {
          setIsAdmin(true);
        }
      } catch (err) {
        console.error('Invalid token:', err);
        setIsLoggedIn(false);
        setIsAdmin(false);
      }
    }
  }, []);

  useEffect(() => {
    const handleScroll = () => {
      setShowNavbar(window.scrollY < lastScrollY);
      setLastScrollY(window.scrollY);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, [lastScrollY]);

  useEffect(() => {
    const interval = setInterval(() => {
      setMsgIndex(prev => (prev + 1) % messages.length);
    }, 6000);
    return () => clearInterval(interval);
  }, []);

  useEffect(() => {
    loadCart();
  }, [cart]);

  useEffect(() => {
    const updateFromEvent = () => loadCart();
    window.addEventListener('cartUpdated', updateFromEvent);
    return () => window.removeEventListener('cartUpdated', updateFromEvent);
  }, []);

  const loadCart = () => {
    const storedCart = JSON.parse(localStorage.getItem('cart')) || [];
    const totalItems = storedCart.reduce((sum, item) => sum + (item.quantity || 1), 0);
    setCartCount(totalItems);
  };

  const handleLogout = () => {
    localStorage.removeItem('token');
    setIsLoggedIn(false);
    setIsAdmin(false);
    navigate('/login');
  };

  const handleLinkClick = () => setIsOpen(false);

  return (
    <>
      <div className="announcement-bar">
        <span key={msgIndex} className="animated-message">
          {messages[msgIndex]}
        </span>
      </div>

      <div className="border-bottom"></div>

      <nav className="main-navbar"  style={{
          transform: showNavbar ? 'translateY(0)' : 'translateY(-100%)',
          transition: 'transform 0.5s ease-in-out',
        }}
      >
        <div
          className={`burger ${isOpen ? 'toggle' : ''}`}
          onClick={() => setIsOpen(!isOpen)}
          role="button"
          tabIndex={0}
          onKeyDown={(e) => e.key === 'Enter' && setIsOpen(!isOpen)}
        >
          <div className="line1"></div>
          <div className="line2"></div>
          <div className="line3"></div>
        </div>

        {/* ✅ Logo */}
        <div className="logo" onClick={() => navigate('/')}>
          <img src="/images/logo.jpg" className="logo-image" alt="Logo" />
        </div>

        <div className={`nav-links ${isOpen ? 'active' : ''}`}>
          <Link to="/" onClick={handleLinkClick}>Home</Link>

          <div className="dropdown">
            <Link to="/shop" onClick={handleLinkClick}>Shop</Link>
            <div className="dropdown-menu">
              <Link to="/decor" onClick={handleLinkClick}>Decor</Link>
              {/*<Link to="/gift" onClick={handleLinkClick}>Gift</Link>*/}
            </div>
          </div>

          <Link to="/newarrivals" onClick={handleLinkClick}>New Arrivals</Link>
          <Link to="/about" onClick={handleLinkClick}>About</Link>
          <Link to="/contact" onClick={handleLinkClick}>Contact</Link>

          {isLoggedIn && !isAdmin && (
            <Link to="/my-orders" onClick={handleLinkClick}>My Orders</Link>
          )}

          {isAdmin && (
            <>
              <Link to="/admin/orders" onClick={handleLinkClick}>All Orders</Link>
              <Link to="/admin" onClick={handleLinkClick}>Admin Dashboard</Link>
            </>
          )}

          <Link to="/cart" onClick={handleLinkClick} className="mobile-cart-link">
            <LiaShoppingCartSolid style={{ fontSize: '1.3rem', verticalAlign: 'middle' }} /> Cart
            {cartCount > 0 && <span className="cart-badge">({cartCount})</span>}
          </Link>
        </div>

        <div className="nav-icons">
          {/* <GrSearch /> */}

          <div
            role="button"
            aria-label="cart"
            className="cart-icon desktop-only"
            onClick={() => navigate('/cart')}
            tabIndex={0}
            onKeyDown={(e) => e.key === 'Enter' && navigate('/cart')}
            style={{ position: 'relative', display: 'flex', alignItems: 'center' }}
          >
            <LiaShoppingCartSolid style={{ fontSize: '1.6rem' }} />
            {cartCount > 0 && (
              <span className="cart-badge">({cartCount})</span>
            )}
          </div>
 
          {isLoggedIn ? (
            <span
              className="nav-link-like"
              onClick={handleLogout}
              title="Logout"
              style={{ fontSize: '1.5rem', cursor: 'pointer', marginLeft: '10px' }}
            >
              <LuLogOut />
            </span>
          ) : (
            <span
              className="nav-link-like"
              onClick={onLoginClick}
              title="Login"
              style={{ fontSize: '1.5rem', cursor: 'pointer', marginLeft: '10px' }}
            >
              <LuLogIn />
            </span>
          )}
        </div>
      </nav>
    </>
  );
};

export default Navbar;
