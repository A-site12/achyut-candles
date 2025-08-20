import React, { useState } from 'react';
import './Shop.css'; // Using the same CSS as Shop for consistency
import { useNavigate } from 'react-router-dom';

const newArrivals = [
  {
    id: 101,
    name: 'Citrus Sunrise Candle',
    price: 429,
    image: '/images/citrus.jpg',
    fragrance: 'Citrus Sunrise',
    description: 'A refreshing citrus blend to awaken your senses. Made in India.',
  },
  {
    id: 102,
    name: 'Ocean Breeze Candle',
    price: 459,
    image: '/images/ocean.jpg',
    fragrance: 'Ocean Breeze',
    description: 'Cool, fresh ocean breeze fragrance for a calming atmosphere.',
  },
  {
    id: 103,
    name: 'Caramel Delight Candle',
    price: 499,
    image: '/images/caramel.jpg',
    fragrance: 'Caramel Delight',
    description: 'Sweet caramel aroma for cozy evenings.',
  },
];

const NewArrivals = () => {
  const [selectedProduct, setSelectedProduct] = useState(null);
  const [quantity, setQuantity] = useState(1);
  const [popupMessage, setPopupMessage] = useState('');
  const navigate = useNavigate();

  const handleBuyNow = (product) => {
    setSelectedProduct(product);
    setQuantity(1);
  };

  const closeModal = () => {
    setSelectedProduct(null);
  };

  const handleAddToCart = () => {
    const cart = JSON.parse(localStorage.getItem('cart')) || [];
    const existingIndex = cart.findIndex(item => item.id === selectedProduct.id);

    if (existingIndex !== -1) {
      cart[existingIndex].quantity += quantity;
    } else {
      cart.push({ ...selectedProduct, quantity });
    }

    localStorage.setItem('cart', JSON.stringify(cart));
    showPopup('Added to cart ✅');
    closeModal();
  };

  const showPopup = (message) => {
    setPopupMessage(message);
    setTimeout(() => setPopupMessage(''), 1500);
  };

  return (
    <div className="shop-container">
      <h2 className="shop-heading">🆕 New Arrivals</h2>

      <div className="shop-grid">
        {newArrivals.map((product) => (
          <div key={product.id} className="shop-card" onClick={() => handleBuyNow(product)}>
            <img src={product.image} alt={product.name} className="shop-image" />
            <h3>{product.name}</h3>
            <p>₹{product.price}</p>
            <button className="shop-add-button">View</button>
          </div>
        ))}
      </div>

      {selectedProduct && (
        <div className="modal-overlay" onClick={closeModal}>
          <div className="modal-content" onClick={(e) => e.stopPropagation()}>
            <img src={selectedProduct.image} alt={selectedProduct.name} className="modal-image" />
            <div className="modal-details">
              <h3>{selectedProduct.name}</h3>
              <p><strong>Fragrance:</strong> {selectedProduct.fragrance}</p>
              <p>{selectedProduct.description}</p>
              <p><strong>Price:</strong> ₹{selectedProduct.price}</p>

              <div className="quantity-selector">
                <button onClick={() => setQuantity(q => Math.max(1, q - 1))}>-</button>
                <span>{quantity}</span>
                <button onClick={() => setQuantity(q => q + 1)}>+</button>
              </div>

              <div className="modal-buttons">
                <button className="modal-cart-button" onClick={handleAddToCart}>Add to Cart</button>
                <button
                  className="modal-buy-button"
                  onClick={() => {
                    localStorage.setItem('buynow', JSON.stringify({ ...selectedProduct, quantity }));
                    navigate('/checkout');
                  }}
                >
                  Buy Now
                </button>
              </div>

              <button className="modal-close-button" onClick={closeModal}>Close</button>
            </div>
          </div>
        </div>
      )}

      {popupMessage && (
        <div className="popup-message">
          {popupMessage}
        </div>
      )}
    </div>
  );
};

export default NewArrivals;
