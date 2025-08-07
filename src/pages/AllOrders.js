import React, { useEffect, useState } from 'react';
import axios from 'axios';

const AllOrders = () => {
  const [orders, setOrders] = useState([]);
  const [error, setError] = useState('');
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchOrders = async () => {
      const token = localStorage.getItem('token');
      if (!token) {
        setError('Unauthorized: Please log in as admin.');
        setLoading(false);
        return;
      }

      try {
        const res = await axios.get('http://localhost:3001/api/orders/admin/all-orders', {
          headers: { Authorization: `Bearer ${token}` }
        });
        setOrders(res.data);
      } catch (err) {
        setError(err.response?.data?.error || 'Failed to fetch orders');
      } finally {
        setLoading(false);
      }
    };

    fetchOrders();
  }, []);

  return (
    <div style={styles.container}>
      <h2 style={styles.heading}>🛒 All Customer Orders</h2>

      {loading ? (
        <p>Loading orders...</p>
      ) : error ? (
        <p style={styles.error}>{error}</p>
      ) : orders.length === 0 ? (
        <p>No orders found.</p>
      ) : (
        orders.map(order => (
          <div key={order.id} style={styles.orderBlock}>
            <h3 style={styles.orderId}>Order ID: {order.id}</h3>
            <p style={styles.meta}>Customer: {order.customer_name} ({order.email})</p>
            <p style={styles.meta}>Date: {new Date(order.created_at).toLocaleString()}</p>
            <p style={styles.meta}>Status: <strong>{order.payment_status}</strong></p>
            <div style={styles.itemsContainer}>
              {order.items.map((item, index) => (
                <div key={index} style={styles.item}>
                  <img src={item.product_image} alt={item.product_name} style={styles.image} />
                  <div>
                    <p>{item.product_name}</p>
                    <p>Qty: {item.quantity}</p>
                    <p>Price: ₹{item.price}</p>
                    <p>Total: ₹{item.quantity * item.price}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        ))
      )}
    </div>
  );
};

const styles = {
  container: {
    maxWidth: '1000px',
    margin: '2rem auto',
    padding: '1rem',
    fontFamily: 'Inter, sans-serif',
  },
  heading: {
    fontSize: '2rem',
    textAlign: 'center',
    marginBottom: '1.5rem',
    color: '#333',
  },
  error: {
    color: 'red',
    textAlign: 'center',
  },
  orderBlock: {
    border: '1px solid #ddd',
    borderRadius: '10px',
    padding: '1rem',
    marginBottom: '1.5rem',
    backgroundColor: '#fafafa',
  },
  orderId: {
    fontSize: '1.1rem',
    fontWeight: '600',
  },
  meta: {
    margin: '0.3rem 0',
    fontSize: '0.95rem',
    color: '#555',
  },
  itemsContainer: {
    display: 'flex',
    gap: '1rem',
    flexWrap: 'wrap',
    marginTop: '1rem',
  },
  item: {
    display: 'flex',
    gap: '0.8rem',
    padding: '0.5rem',
    border: '1px solid #ddd',
    borderRadius: '8px',
    backgroundColor: '#fff',
    width: '250px',
  },
  image: {
    width: '60px',
    height: '60px',
    objectFit: 'cover',
    borderRadius: '5px',
    border: '1px solid #ccc',
  }
};

export default AllOrders;
