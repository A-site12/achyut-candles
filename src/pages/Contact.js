import React from 'react';
import { RiCustomerService2Fill } from 'react-icons/ri';
import { FaRegAddressCard, FaLocationDot } from 'react-icons/fa6';
import { FcSupport } from 'react-icons/fc';

const Contact = () => {
  return (
    <div style={{ padding: '2rem', maxWidth: '1000px', margin: '0 auto' }}>
      <h2 style={{ textAlign: 'center', fontSize: '2rem', color: '#9c6b2f', textShadow: '1px 1px 2px #e3c09b' }}>
        Contact Us
      </h2>

      <section style={{ marginTop: '2rem' }}>
        <h3 style={{ display: 'flex', alignItems: 'center', fontSize: '1.5rem', color: '#333' }}>
          <RiCustomerService2Fill style={{ marginRight: '0.5rem', color: '#9c6b2f' }} />
          Customer Support
        </h3>
        <p>Have a question? Please contact us using the customer support channels below.</p>
      </section>

      <section style={{ marginTop: '2rem' }}>
        <h4 style={{ display: 'flex', alignItems: 'center', fontSize: '1.2rem', color: '#444' }}>
          <FaRegAddressCard style={{ marginRight: '0.5rem', color: '#9c6b2f' }} />
          Address:
        </h4>
        <p>
          32, Adinath Heights, Shri Krishna Avenue phase 1, <br />
         Sector-A, Limbodi, Khandwa Road,  <br />
          Indore, Madhya Pradesh, 452020
        </p>
      </section>

      <section style={{ marginTop: '2rem' }}>
        <h4 style={{ display: 'flex', alignItems: 'center', fontSize: '1.2rem', color: '#444' }}>
          <FcSupport style={{ marginRight: '0.5rem' }} />
          Support:
        </h4>
        <p>Email: <a href="mailto:customercare@taraglobal.in">achyutcandles@gmail.com</a></p>
        <p>Sales and Support: <a href="tel:+918104148660">+91 8878561696</a></p>
      </section>

      <section style={{ marginTop: '3rem' }}>
        <h3>Leave Us a Message</h3>
        <form style={{ display: 'flex', flexDirection: 'column', gap: '1rem', marginTop: '1rem' }}>
          <input type="text" placeholder="Your name" style={{ padding: '0.5rem', fontSize: '1rem' }} />
          <input type="email" placeholder="Your Email" style={{ padding: '0.5rem', fontSize: '1rem' }} />
          <textarea placeholder="Enter please your message" rows={4} style={{ padding: '0.5rem', fontSize: '1rem' }}></textarea>
          <label>
            <input type="checkbox" style={{ marginRight: '0.5rem' }} />
            I agree to the Privacy Policy of the website.
          </label>
          <button type="submit" style={{ background: '#9c6b2f', color: '#fff', padding: '0.7rem', fontSize: '1rem', border: 'none' }}>
            Send
          </button>
        </form>
      </section>

      <section style={{ marginTop: '3rem' }}>
        <h3 style={{ display: 'flex', alignItems: 'center', fontSize: '1.5rem', color: '#333' }}>
          <FaLocationDot style={{ marginRight: '0.5rem', color: '#9c6b2f' }} />
          Our Location
        </h3>
        <div style={{ marginTop: '1rem' }}>
          <iframe
            title="Company Location"
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3769.539146735828!2d72.85928337507663!3d19.127054550163955!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3be7b7637e8d637f%3A0x5fce00bfe8c8a409!2sAmbedkar%20Chowk%2C%20Goregaon%20East%2C%20Mumbai%2C%20Maharashtra%20400063!5e0!3m2!1sen!2sin!4v1721544963849!5m2!1sen!2sin"
            width="100%"
            height="300"
            style={{ border: 0 }}
            allowFullScreen=""
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
          ></iframe>
        </div>
      </section>
    </div>
  );
};

export default Contact;
