import React, { useState, useEffect } from 'react';

const decorProducts = [
  {
    id: 1,
    name: 'pillar Candle',
    price: 449,
    image: '/images/pillar.jpg',
    fragrance: 'Whispers of Rose',
    description: 'A beautiful candle bouquet filled with red roses. Made in India.',
  },
  {
    id: 2,
    name: 'Buddha Candle',
    price: 399,
    image: '/images/buddha.jpg',
    fragrance: 'Vanilla Cream',
    description: 'Pack of 5',
  },
  {
    id: 3,
    name: 'Colour Candle',
    price: 349,
    image: '/images/colour.jpg',
    fragrance: 'Ocean Mist',
    description: 'Fresh ocean scent for calm and clarity.',
  },
  {
    id: 4,
    name: 'Glass Jar Candle',
    price: 479,
    image: '/images/glass-jar.jpg',
    fragrance: 'Mixed Flowers',
    description: 'Romantic floral mix in a reusable glass jar.',
  },
  {
    id: 5,
    name: 'Citrus Burst Candle',
    price: 459,
    image: '/images/citrus.jpg',
    fragrance: 'Citrus Zest',
    description: 'Refreshing citrus aroma to energize your space.',
  },
  {
    id: 6,
    name: 'Lavender Peace Candle',
    price: 489,
    image: '/images/lavender.jpg',
    fragrance: 'Lavender Fields',
    description: 'Calming lavender scent for relaxation and sleep.',
  },
];

const Decor = () => {
  const [selectedProduct, setSelectedProduct] = useState(null);
  const [quantity, setQuantity] = useState(1);
  const [toastMessage, setToastMessage] = useState('');

  const handleProductClick = (product) => {
    setSelectedProduct(product);
    setQuantity(1);

    const navbar = document.getElementById('main-navbar');
    if (navbar) navbar.style.display = 'none';
  };

  const closeModal = () => {
    setSelectedProduct(null);

    const navbar = document.getElementById('main-navbar');
    if (navbar) navbar.style.display = 'block';
  };

  const handleAddToCart = (product) => {
    const cart = JSON.parse(localStorage.getItem('cart')) || [];
    const existing = cart.find(item => item.id === product.id);
    let updatedCart;

    if (existing) {
      updatedCart = cart.map(item =>
        item.id === product.id ? { ...item, quantity: item.quantity + 1 } : item
      );
    } else {
      updatedCart = [...cart, { ...product, quantity: 1 }];
    }

    localStorage.setItem('cart', JSON.stringify(updatedCart));
    window.dispatchEvent(new Event('cartUpdated'));

    setToastMessage(`${product.name} added to cart!`);
    setTimeout(() => setToastMessage(''), 3000);
  };

  useEffect(() => {
    const existingStyle = document.getElementById('animated-style');
    if (!existingStyle) {
      const style = document.createElement('style');
      style.id = 'animated-style';
      style.innerHTML = `
        .image-animated {
          transition: transform 0.4s ease, box-shadow 0.4s ease;
        }
        .image-animated:hover {
          transform: scale(1.08) translateY(-6px);
          box-shadow: 0 12px 20px rgba(0, 0, 0, 0.15);
        }
      `;
      document.head.appendChild(style);
    }
  }, []);

  return (
    <div style={styles.container}>
      <h2 style={styles.heading}>Our Decor Candles</h2>
      <div style={styles.grid}>
        {decorProducts.map((product) => (
          <div key={product.id} style={styles.card} onClick={() => handleProductClick(product)}>
            <img src={product.image} alt={product.name} style={styles.image} className="image-animated" />
            <h4>{product.name}</h4>
            <p>Rs. {product.price}</p>
            <button
              onClick={(e) => {
                e.stopPropagation();
                handleAddToCart(product);
              }}
              style={styles.addButton}
            >
              Add to Cart
            </button>
          </div>
        ))}
      </div>

      {selectedProduct && (
        <div style={styles.modalOverlay} onClick={closeModal}>
          <div style={styles.modalContent} onClick={(e) => e.stopPropagation()}>
            <img src={selectedProduct.image} alt={selectedProduct.name} style={styles.modalImage} />
            <div style={styles.modalDetails}>
              <h2>{selectedProduct.name}</h2>
              <p style={styles.fragrance}><strong>Fragrance:</strong> {selectedProduct.fragrance}</p>
              <p><strong>Price:</strong> ₹{selectedProduct.price}</p>
              <p style={styles.desc}>{selectedProduct.description}</p>
              <div style={styles.quantityBox}>
                <button onClick={() => setQuantity(Math.max(1, quantity - 1))}>-</button>
                <span style={styles.qty}>{quantity}</span>
                <button onClick={() => setQuantity(quantity + 1)}>+</button>
              </div>
              <div style={styles.actions}>
                <button style={styles.cartBtn} onClick={() => handleAddToCart(selectedProduct)}>Add to Cart</button>
                <button style={styles.buyBtn}>Buy Now</button>
              </div>
              <button onClick={closeModal} style={styles.closeBtn}>×</button>
            </div>
          </div>
        </div>
      )}

      {toastMessage && (
        <div style={styles.toast}>
          {toastMessage}
        </div>
      )}
    </div>
  );
};

const styles = {
  container: {
    padding: '2rem',
    fontFamily: 'sans-serif',
  },
  heading: {
    textAlign: 'center',
    marginBottom: '2rem',
  },
  grid: {
    display: 'grid',
    gridTemplateColumns: 'repeat(4, 1fr)',
    gap: '20px',
  },
  card: {
    border: '1px solid #eee',
    padding: '1rem',
    textAlign: 'center',
    cursor: 'pointer',
    borderRadius: '10px',
  },
  image: {
    width: '100%',
    height: '200px',
    objectFit: 'cover',
    borderRadius: '10px',
  },
  addButton: {
    marginTop: '10px',
    padding: '8px 16px',
    backgroundColor: '#222',
    color: '#fff',
    border: 'none',
    borderRadius: '4px',
    cursor: 'pointer',
  },
  modalOverlay: {
    position: 'fixed',
    top: 0, left: 0, right: 0, bottom: 0,
    backgroundColor: 'rgba(0,0,0,0.6)',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    zIndex: 999,
  },
  modalContent: {
    display: 'flex',
    backgroundColor: '#fff',
    borderRadius: '10px',
    overflow: 'hidden',
    width: '80%',
    maxWidth: '900px',
    position: 'relative',
  },
  modalImage: {
    width: '50%',
    objectFit: 'cover',
  },
  modalDetails: {
    padding: '1.5rem',
    width: '50%',
  },
  fragrance: {
    margin: '0.5rem 0',
    fontStyle: 'italic',
    color: '#444',
  },
  desc: {
    margin: '1rem 0',
    color: '#555',
  },
  quantityBox: {
    display: 'flex',
    alignItems: 'center',
    gap: '1rem',
    marginBottom: '1rem',
  },
  qty: {
    fontSize: '1.2rem',
  },
  actions: {
    display: 'flex',
    gap: '1rem',
    marginBottom: '1rem',
  },
  cartBtn: {
    padding: '0.7rem 1.5rem',
    backgroundColor: '#eee',
    border: '1px solid #aaa',
    cursor: 'pointer',
  },
  buyBtn: {
    padding: '0.7rem 1.5rem',
    backgroundColor: '#000',
    color: '#fff',
    border: 'none',
    cursor: 'pointer',
  },
  closeBtn: {
    position: 'absolute',
    top: '10px',
    right: '15px',
    background: 'none',
    fontSize: '2rem',
    border: 'none',
    cursor: 'pointer',
  },
  toast: {
    position: 'fixed',
    bottom: '30px',
    left: '50%',
    transform: 'translateX(-50%)',
    backgroundColor: '#333',
    color: '#fff',
    padding: '12px 20px',
    borderRadius: '5px',
    boxShadow: '0 4px 12px rgba(0,0,0,0.2)',
    zIndex: 1000,
    fontSize: '14px',
    animation: 'fadeInOut 3s ease forwards',
  }
};

export default Decor;
