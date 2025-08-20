import React, { useState } from 'react';
import './Shop.css';
import { useNavigate } from 'react-router-dom';

const products = [
  {
    id: 1,
    name: 'Heart Bouquet Candle',
    price: 449,
    image: '/images/rose.jpg',
    fragrance: 'Whispers of Rose',
    description: 'A beautiful candle bouquet filled with red roses. Made in India.',
  },
  {
    id: 2,
    name: 'Vanilla Bliss Candle',
    price: 399,
    image: '/images/vanilla.jpg',
    fragrance: 'Vanilla Bliss',
    description: 'Warm and comforting vanilla fragrance to soothe your senses.',
  },
  {
    id: 4,
    name: 'Lavender Calm Candle',
    price: 479,
    image: '/images/lavender.jpg',
    fragrance: 'Lavender Calm',
    description: 'Soothing lavender fragrance to help you relax and unwind.',
  },
];

const Shop = () => {
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
    setTimeout(() => setPopupMessage(''), 1500); // auto-close after 1.5s
  };

  return (
    <div className="shop-container">
      <h2 className="shop-heading">Our Candle Collection</h2>

      <div className="shop-grid">
        {products.map((product) => (
          <div key={product.id} className="shop-card" onClick={() => handleBuyNow(product)}>
            <img src={product.image} alt={product.name} className="shop-image" />
            <h3>{product.name}</h3>
            <p>₹{product.price}</p>
            <button className="shop-add-button">Buy Now</button>
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

export default Shop;
