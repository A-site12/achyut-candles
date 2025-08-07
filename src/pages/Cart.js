import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { BsCart3 } from 'react-icons/bs';

const Cart = () => {
  const navigate = useNavigate();
  const [cart, setCart] = useState([]);

  useEffect(() => {
    const storedCart = JSON.parse(localStorage.getItem('cart')) || [];
    setCart(storedCart);
  }, []);

  const updateCart = (updatedCart) => {
    setCart(updatedCart);
    localStorage.setItem('cart', JSON.stringify(updatedCart));
  };

  const increment = (id) => {
    const updated = cart.map(item =>
      item.id === id ? { ...item, quantity: item.quantity + 1 } : item
    );
    updateCart(updated);
  };

  const decrement = (id) => {
    const updated = cart.map(item =>
      item.id === id ? { ...item, quantity: item.quantity > 1 ? item.quantity - 1 : 1 } : item
    );
    updateCart(updated);
  };

  const removeItem = (id) => {
    const updated = cart.filter(item => item.id !== id);
    updateCart(updated);
  };

  const totalAmount = cart.reduce((sum, item) => sum + item.price * item.quantity, 0);
  


const handleBuyNow = (item) => {
  localStorage.setItem('buynow', JSON.stringify(item));
  navigate('/checkout');
};
  

  return (
    <div style={{ padding: '2rem', maxWidth: '800px', margin: '0 auto' }}>
      <h2 style={{ fontSize: '2rem', marginBottom: '1rem', display: 'flex', alignItems: 'center' }}>
        <BsCart3 style={{ marginRight: '8px' }} /> Your Cart
      </h2>

      {cart.length === 0 ? (
        <p>Your cart is empty.</p>
      ) : (
        <>
          <ul style={{ listStyle: 'none', padding: 0 }}>
            {cart.map((item) => (
              <li
                key={item.id}
                style={{
                  marginBottom: '2rem',
                  borderBottom: '1px solid #ccc',
                  paddingBottom: '1rem',
                  display: 'flex',
                  alignItems: 'center',
                  gap: '1.5rem'
                }}
              >
                <img
                  src={item.image}
                  alt={item.name}
                  style={{
                    width: '120px',
                    height: '120px',
                    objectFit: 'cover',
                    borderRadius: '8px'
                  }}
                />
                <div style={{ flex: 1 }}>
                  <h3 style={{ margin: 0 }}>{item.name}</h3>
                  <p style={{ margin: '5px 0' }}>₹{item.price}</p>

                  <div style={{ display: 'flex', alignItems: 'center', marginBottom: '10px' }}>
                    <button onClick={() => decrement(item.id)}>-</button>
                    <span style={{ margin: '0 10px' }}>{item.quantity}</span>
                    <button onClick={() => increment(item.id)}>+</button>
                  </div>

                  <div style={{ display: 'flex', gap: '10px', flexWrap: 'wrap' }}>
                    <button
                      onClick={() => removeItem(item.id)}
                      style={{
                        color: 'red',
                        background: 'none',
                        border: '1px solid red',
                        padding: '5px 10px',
                        cursor: 'pointer',
                        borderRadius: '4px'
                      }}
                    >
                      Remove Item
                    </button>

                    <button
                      onClick={() => handleBuyNow(item)}
                      style={{
                        backgroundColor: '#28a745',
                        color: '#fff',
                        border: 'none',
                        padding: '6px 14px',
                        borderRadius: '5px',
                        cursor: 'pointer'
                      }}
                    >
                      Buy Now
                    </button>
                  </div>
                </div>
              </li>
            ))}
          </ul>

        
        </>
      )}
    </div>
  );
};

export default Cart;
