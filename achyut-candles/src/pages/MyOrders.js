import React, { useEffect, useState } from 'react';
import axios from '../utils/axiosInstance';

const MyOrders = () => {
  const [orders, setOrders] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState('');

  useEffect(() => {
    const fetchOrders = async () => {
      const token = localStorage.getItem('token');
      if (!token) {
        setError('Please log in to view your orders.');
        setLoading(false);
        return;
      }

      try {
        const res = await axios.get('http://localhost:3001/api/orders/my-orders', {
          headers: {
            Authorization: `Bearer ${token}`,
          },
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
      <h2 style={styles.heading}>My Orders</h2>

      {loading ? (
        <p>Loading...</p>
      ) : error ? (
        <p style={styles.error}>{error}</p>
      ) : orders.length === 0 ? (
        <p>You haven’t placed any orders yet.</p>
      ) : (
        orders.map(order => (
          <div key={order.id} style={styles.orderBlock}>
            {order.items.map((item, index) => (
              <div
                key={`${order.id}-${item.product_id || item.id || index}`}
                style={styles.orderItem}
              >
                <img
                  src={item.product_image}
                  alt={item.product_name}
                  style={styles.image}
                />
                <div style={styles.info}>
                  <h3 style={styles.name}>{item.product_name}</h3>
                  <p style={styles.detail}>
                    Qty: {item.quantity} | ₹{item.price} each
                  </p>
                  <p style={styles.detail}>
                    Total: ₹{item.price * item.quantity}
                  </p>
                  <p style={styles.detail}>
                    Status: <span style={styles.status}>{order.payment_status}</span>
                  </p>
                  <p style={styles.meta}>Order ID: {order.id}</p>
                  <p style={styles.meta}>Date: {new Date(order.created_at).toLocaleString()}</p>
                </div>
              </div>
            ))}
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
    color: '#2f2f2f',
  },
  heading: {
    fontSize: '2rem',
    textAlign: 'center',
    marginBottom: '2rem',
    color: '#3b3732',
  },
  error: {
    color: 'red',
    textAlign: 'center',
  },
  orderBlock: {
    marginBottom: '2rem',
    borderBottom: '1px solid #ccc',
    paddingBottom: '1rem',
  },
  orderItem: {
    display: 'flex',
    alignItems: 'center',
    gap: '1rem',
    marginBottom: '1.2rem',
    background: '#fffef9',
    padding: '1rem',
    borderRadius: '12px',
    boxShadow: '0 2px 5px rgba(0,0,0,0.04)',
  },
  image: {
    width: '80px',
    height: '80px',
    objectFit: 'cover',
    borderRadius: '8px',
    border: '1px solid #eee',
  },
  info: {
    flex: 1,
  },
  name: {
    fontSize: '1.1rem',
    marginBottom: '0.3rem',
  },
  detail: {
    margin: '0.2rem 0',
    fontSize: '0.95rem',
    color: '#444',
  },
  meta: {
    fontSize: '0.85rem',
    color: '#777',
  },
  status: {
    fontWeight: '600',
    color: '#2c7a00',
  },
};

export default MyOrders;
