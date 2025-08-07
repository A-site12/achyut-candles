import React, { useState } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation } from 'swiper/modules';
import { Link } from 'react-router-dom';
import 'swiper/css';
import 'swiper/css/navigation';
import './Home.css';
import { whatsappNumber } from '../utils/constants'; 




const featuredCandles = [
  {
    name: 'Lavender Bliss',
    price: '$15',
    image: '/images/lavender.jpg',
    description: 'A calming scent with floral notes.',
    rating: 5,
  },
  {
    name: 'Vanilla Dream',
    price: '$18',
    image: '/images/vanilla.jpg',
    description: 'Warm vanilla for cozy evenings.',
    rating: 5,
  },
  {
    name: 'Rose',
    price: '$20',
    image: '/images/rose.jpg',
    description: 'Classic and elegant rose aroma.',
    rating: 4.5,
  },
  {
    name: 'Gourmand',
    price: '$13',
    image: '/images/Gourmand.jpg',
    description: 'Want it a bit sweeter or more elegant?',
    rating: 5,
  },
];

const moods = [
  { title: 'Romantic', img: '/images/romantic.jpg' },
  { title: 'Relaxing', img: '/images/relaxing.jpg' },
  { title: 'Energizing', img: '/images/energizing.jpg' },
  { title: 'Fresh', img: '/images/fresh.jpg' },
  { title: 'Warm', img: '/images/warm.jpg' },
  { title: 'Cozy', img: '/images/cozy.jpg' },
  { title: 'Earthy', img: '/images/earthy.jpg' },
];

<a
  href={`https://wa.me/${whatsappNumber}`}
  target="_blank"
  rel="noopener noreferrer"
>
  Chat with us on WhatsApp
</a>


const faqs = [
  {
    question: 'What are your candles made of?',
    answer: 'Our candles are made with 100% soy wax and natural essential oils.',
  },
  {
    question: 'How long do the candles burn?',
    answer: 'Each candle lasts approximately 20-24 hours depending on usage.',
  },
  {
   question: 'What types of candles do you sell?',
   answer:'We offer a wide range of handcrafted candles including jar candles, scented candles, decorative candles, tea lights, festive combos, and gift sets – all made with love and care.'
  },
  {
     question:'Are your candles handmade?',
     answer: 'Yes, all Achyut Candles are 100% handmade using premium wax and high-quality fragrance oils for a clean and long-lasting burn.',
  },
  {
    question:'What wax do you use in your candles?',
    answer:'We use eco-friendly waxes such as soy wax and beeswax, which are non-toxic, biodegradable, and safe for indoor use.',
  },
  {
    question:'Do your candles have strong fragrances?',
    answer:'Our scented candles are designed to give a balanced aroma – not too strong, but enough to gently fill your space with fragrance.',
  },
  {
    question:'Do you deliver all over India?',
    answer:'Yes! We deliver across India through trusted courier partners. Shipping is calculated at checkout.',
  },
  {
    question:' How long will my order take to arrive?',
    answer:'Orders are typically processed within 2-3 business days and delivered within 5-7 days, depending on your location.',
  }

];

const Home = () => {
  const [activeFaq, setActiveFaq] = useState(null);

  const toggleFaq = (index) => {
    setActiveFaq(activeFaq === index ? null : index);
  };

  return (
    <div style={{ fontFamily: "'Lato', sans-serif", color: '#414141', backgroundColor: '#f9f6f1' }}>

{/* Video Section */}
<section style={{ margin: 0, padding: 0 }}>
  <div
    style={{
      width: '100%',
      height: '100vh',
      overflow: 'hidden',
      position: 'relative',
    }}
  >
    <video
      src="/videos/promo.mp4"
      autoPlay
      loop
      muted
      playsInline
      style={{ width: '100%', height: '100%', objectFit: 'cover' }}
    />
    <div
      style={{
        position: 'absolute',
        top: 0,
        left: 0,
        width: '100%',
        height: '100%',
        background: 'rgba(0, 0, 0, 0.3)',
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'center',
        color: '#fff',
        textAlign: 'center',
        padding: '0 1rem',
      }}
    >
      <h1 
        style={{
          fontSize: '3rem',
          fontWeight: 600,
          textShadow: '2px 2px 8px rgba(0,0,0,0.7)',
          maxWidth: '800px',
          marginBottom: '1rem',
        }}
      >
        Light up your Movements with Elegance 
      </h1>
      <div
        style={{
          fontSize: '1.1rem',
          maxWidth: '800px',
          lineHeight: '1.8',
          textShadow: '1px 1px 6px rgba(0,0,0,0.5)',
          whiteSpace: 'pre-line',
        }}
      >
        <p style={{ margin: 0 }}>Hand-poured,beautifully crafted candles designed to fill your space with warmth, fragrance,</p>
        <p style={{ margin: 0 }}> and meaning delivered anywhere in India.Buy scented candles online in India.</p>
      </div>
    </div>
  </div>
</section>





{/* Fragrance by Mood (Responsive) */}
<section style={{ padding: '2rem 1rem', maxWidth: '1200px', margin: '0 auto' }}>
  <h2 style={{
    fontSize: '2rem',
    fontWeight: '600',
    textAlign: 'center',
    marginBottom: '2rem',
    textTransform: 'uppercase',
    borderBottom: '2px solid #65000b',
    display: 'inline-block'
  }}>
    Fragrance by Mood
  </h2>

  {/* Desktop Grid View */}
  <div className="mood-grid">
    {[
      {
        title: 'Calm & Relax',
        img: '/images/moods/relaxing.jpg',
        quote: 'Unwinds with soothings scents like lavender and sandalwood,your perfect escape to peace',
        path: '/relaxing'
      },
      {
        title: 'Energize',
        img: '/images/moods/energizing.jpg',
        quote: 'Boots your day with fresh,zesty secents like citrus,peppermint and lemongrass,your spark of natural energy',
        path: '/energizing'
      },
      {
        title: 'Romantic',
        img: '/images/moods/romantic.jpg',
        quote: 'Set the mood with enchanting scents like rose,jasmin and musk,made forn moments that matter.',
        path: '/romantic'
      },
      {
        title: 'Meditation',
        img: '/images/moods/earthy.jpg',
        quote: 'Ground your senses with calming aromas like frankincense and sandalwood,crafted for deep focus and inner peace.',
        path: '/meditation'
      },
    ].map((mood, idx) => (
      <div
        key={idx}
        className="mood-card"
        style={{
          position: 'relative',
          height: '300px',
          borderRadius: '14px',
          overflow: 'hidden',
          backgroundImage: `url(${mood.img})`,
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          boxShadow: '0 6px 16px rgba(0,0,0,0.15)',
          transition: 'transform 0.4s ease, box-shadow 0.4s ease',
          cursor: 'pointer'
        }}
        onMouseEnter={(e) => {
          e.currentTarget.style.transform = 'scale(1.05) translateY(-5px)';
          e.currentTarget.style.boxShadow = '0 12px 24px rgba(0,0,0,0.25)';
        }}
        onMouseLeave={(e) => {
          e.currentTarget.style.transform = 'scale(1)';
          e.currentTarget.style.boxShadow = '0 6px 16px rgba(0,0,0,0.15)';
        }}
      >
        <div style={{
          position: 'absolute',
          inset: 0,
          backgroundColor: 'rgba(0, 0, 0, 0.4)',
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          justifyContent: 'center',
          color: 'white',
          textAlign: 'center',
          padding: '1rem',
        }}>
          <h3 style={{ fontSize: '1.7rem', marginBottom: '0.3rem' }}>{mood.title}</h3>
          <p style={{ fontSize: '1rem', marginBottom: '0.8rem', maxWidth: '80%' }}>{mood.quote}</p>
          <Link to={mood.path}>
            <button style={{
              padding: '0.6rem 1.4rem',
              backgroundColor: '#eec248',
              border: 'none',
              color: '#000',
              fontWeight: '600',
              borderRadius: '25px',
              cursor: 'pointer',
              fontSize: '1rem'
            }}>
              Shop Now
            </button>
          </Link>
        </div>
      </div>
    ))}
  </div>

  {/* Mobile Swiper View */}
  <div className="mood-swiper">
    <Swiper
      spaceBetween={16}
      slidesPerView={1.1}
      centeredSlides={true}
      grabCursor={true}
    >
      {[
        {
          title: 'Calm & Relax',
          img: '/images/moods/relaxing.jpg',
          quote: 'Unwinds with soothings scents like lavender and sandalwood,your perfect escape to peace',
          path: '/relaxing'
        },
        {
          title: 'Energize',
          img: '/images/moods/energizing.jpg',
          quote: 'Boots your day with fresh,zesty secents like citrus,peppermint and lemongrass,your spark of natural energy',
          path: '/energizing'
        },
        {
          title: 'Romantic',
          img: '/images/moods/romantic.jpg',
          quote: 'Set the mood with enchanting scents like rose,jasmin and musk,made forn moments that matter.',
          path: '/romantic'
        },
        {
          title: 'Meditation',
          img: '/images/moods/earthy.jpg',
          quote: 'Ground your senses with calming aromas like frankincense and sandalwood,crafted for deep focus and inner peace.',
          path: '/meditation'
        },
      ].map((mood, idx) => (
        <SwiperSlide key={idx}>
          <div
            style={{
              position: 'relative',
              height: '300px',
              borderRadius: '14px',
              overflow: 'hidden',
              backgroundImage: `url(${mood.img})`,
              backgroundSize: 'cover',
              backgroundPosition: 'center',
              boxShadow: '0 6px 16px rgba(0,0,0,0.15)',
              marginBottom: '1rem'
            }}
          >
            <div style={{
              position: 'absolute',
              inset: 0,
              backgroundColor: 'rgba(0, 0, 0, 0.4)',
              display: 'flex',
              flexDirection: 'column',
              alignItems: 'center',
              justifyContent: 'center',
              color: 'white',
              textAlign: 'center',
              padding: '1rem',
            }}>
              <h3 style={{ fontSize: '1.6rem' }}>{mood.title}</h3>
              <p style={{ fontSize: '0.9rem', maxWidth: '80%' }}>{mood.quote}</p>
              <Link to={mood.path}>
                <button style={{
                  padding: '0.5rem 1.2rem',
                  backgroundColor: '#eec248',
                  border: 'none',
                  color: '#000',
                  fontWeight: '600',
                  borderRadius: '25px',
                  fontSize: '0.95rem',
                  marginTop: '0.8rem'
                }}>
                  Shop Now
                </button>
              </Link>
            </div>
          </div>
        </SwiperSlide>
      ))}
    </Swiper>
  </div>
</section>







      {/* Welcome */}
      <section style={{
        padding: '6rem 2rem',
        textAlign: 'center',
        backgroundColor: '#000',
        color: '#f9c73d',
        backgroundImage: `url('/images/bg.jpg')`,
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        backgroundRepeat: 'no-repeat',
      }}>
        <h2 style={{ fontSize: '2.8rem', fontWeight: '600' }}>
          Welcome to ACHYUT CANDLES
        </h2>
        <p style={{ fontWeight: 400, fontSize: '1.1rem', maxWidth: '700px', margin: '0 auto' }}>
          Achyut Candles is your trusted destination to buy scented candles online in India. We specialize in hand-poured,
           eco-friendly candles that are not only beautiful but also kind to the environment.
        </p>
      </section>
<section style={{ padding: '2rem 0', backgroundColor: '#fff' }}>
  <style>
    {`
      @media (max-width: 768px) {
        .section-description {
          display: none;
        }
      }
    `}
  </style>

  {[
    {
      title: 'Soothing & Wellness-Oriented',
      description:
        'Buy scented candles online in India that soothe your soul. Our aromatherapy candles are crafted for pure relaxation using eco-friendly ingredients that care for you and the Earth.',
      image: '/images/fragrance.jpg',
      link: '/shop',
    },
    {
      title: 'New Arrivals',
      description:
        'Discover our latest candle collection. Hand-poured with love and crafted for calm. Fragrance, warmth, and elegance—delivered to your doorstep.',
      image: '/images/arrivals.jpg',
      link: '/shop',
    },
    {
      title: 'Collection',
      description:
        'Explore our signature candle collections. Each piece is hand-crafted to soothe, inspire, and elevate your space. Timeless designs, unforgettable fragrances, lasting impressions.',
      image: '/images/collection.jpg',
      link: '/shop',
    },
  ].map((section, idx) => (
    <div
      key={idx}
      onMouseEnter={(e) => {
        const container = e.currentTarget;
        const image = container.querySelector('img');
        container.style.transform = 'translateY(-5px)';
        container.style.boxShadow = '0 10px 24px rgba(0,0,0,0.2)';
        image.style.transform = 'scale(1.05)';
      }}
      onMouseLeave={(e) => {
        const container = e.currentTarget;
        const image = container.querySelector('img');
        container.style.transform = 'translateY(0)';
        container.style.boxShadow = '0 4px 15px rgba(0,0,0,0.1)';
        image.style.transform = 'scale(1)';
      }}
      style={{
        position: 'relative',
        marginBottom: '3rem',
        overflow: 'hidden',
        borderRadius: '12px',
        boxShadow: '0 4px 15px rgba(0,0,0,0.1)',
        transition: 'transform 0.4s ease, box-shadow 0.4s ease',
        cursor: 'pointer',
      }}
    >
      <img
        src={section.image}
        alt={section.title}
        style={{
          width: '100%',
          height: '350px',
          objectFit: 'cover',
          filter: 'brightness(75%)',
          transition: 'transform 0.4s ease',
        }}
      />
      <div
        style={{
          position: 'absolute',
          top: '50%',
          left: '50%',
          transform: 'translate(-50%, -50%)',
          color: '#fff',
          textAlign: 'center',
          padding: '1rem 2rem',
          maxWidth: '90%',
        }}
      >
        <h2
          style={{
            fontSize: '2.4rem',
            marginBottom: '1rem',
            textShadow: '1px 1px 4px rgba(0,0,0,0.5)',
          }}
        >
          {section.title}
        </h2>
        <p
          className="section-description"
          style={{ fontSize: '1.1rem', marginBottom: '1.5rem' }}
        >
          {section.description}
        </p>
        <Link to={section.link}>
          <button
            style={{
              backgroundColor: '#9c6b2f',
              color: '#fff',
              padding: '0.75rem 2rem',
              border: 'none',
              borderRadius: '30px',
              cursor: 'pointer',
              fontWeight: 'bold',
              boxShadow: '0 2px 8px rgba(0,0,0,0.2)',
            }}
          >
            Shop Now
          </button>
        </Link>
      </div>
    </div>
  ))}
</section>



{/* Featured Candles */}
<section style={{ padding: '3rem 1rem', margin: '5px' }}>
  <h2 style={{
    fontSize: '2.4rem',
    marginBottom: '2rem',
    textAlign: 'center',
    color: '#9c6b2f',
    textShadow: '1px 1px 3px #e3c09b',
  }}>
    Featured Candles
  </h2>
  <Swiper
    modules={[Navigation]}
    navigation
    spaceBetween={20}
    slidesPerView={1.5}
    breakpoints={{
      320: { slidesPerView: 1.5, spaceBetween: 10 },
      480: { slidesPerView: 2, spaceBetween: 15 },
      768: { slidesPerView: 3, spaceBetween: 20 },
      1024: { slidesPerView: 4, spaceBetween: 25 },
    }}
  >
    {featuredCandles.map((candle, index) => (
      <SwiperSlide key={index}>
        <div className="featured-candle-card">
          <img src={candle.image} alt={candle.name} className="candle-image" />
          <strong>{candle.name}</strong>
          <p>{candle.description}</p>
          <small>{candle.price}</small>
          <div className="card-footer">
            <div className="rating">
              {Array.from({ length: Math.floor(candle.rating) }, (_, i) => <span key={i}>★</span>)}
              {candle.rating % 1 !== 0 && <span>½</span>}
            </div>
          </div>
        </div>
      </SwiperSlide>
    ))}
  </Swiper>
  <div style={{ display: 'flex', justifyContent: 'center', marginTop: '2rem' }}>
    <Link to="/shop">
      <button className="view-all-button">View All Products</button>
    </Link>
  </div>
</section>



      {/* Testimonials */}
      <section style={{ padding: '4rem 2rem', backgroundColor: '#f1e9e1', textAlign: 'center' }}>
        <h2 style={{ fontSize: '2rem', marginBottom: '2rem' }}>What Our Customers Say</h2>
        <div style={{ display: 'flex', justifyContent: 'center', gap: '1rem', flexWrap: 'wrap' }}>
          {[{ quote: '“Best candles ever! The fragrance fills the room in minutes.”', name: '– Ayesha R.' },
          { quote: '“Perfect for gifting. Beautiful packaging and aroma.”', name: '– Rahul M.' },
          { quote: '“Long-lasting and so calming. Will buy again!”', name: '– Sneha K.' }].map((t, i) => (
            <div key={i} style={{ background: '#fff', padding: '1rem', borderRadius: '8px', width: '250px' }}>
              <p>{t.quote}</p>
              <p style={{ marginTop: '0.5rem', fontWeight: 'bold' }}>{t.name}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Brand Story */}
      <section style={{ padding: '4rem 2rem', backgroundColor: '#f8f4f1', textAlign: 'center' }}>
        <h2 style={{ fontSize: '2.5rem', marginBottom: '1rem' }}>🌿Our Story</h2>
        <p style={{ maxWidth: '850px', margin: '0 auto', fontSize: '1.1rem', lineHeight: '1.8', color: '#333' }}>
Achyut Candles was born from a simple idea: to bring peace, beauty, and purpose into everyday life  one flame at a time.

What started as a personal passion for handcrafted candles soon grew into a journey of creating wellness inspired, eco-friendly products that touch the soul. We believe in the quiet power of a burning candle how it can calm your mind, transform your space, and light up your emotions.

Each Achyut candle is lovingly made by hand, using natural soy wax, lead-free wicks, and gentle fragrances that match every mood from calm and cozy to festive and spiritual.

Proudly made in India, our candles are not just décor. They’re rituals of relaxation. Moments of meaning. Gifts of light.

Whether you’re looking to unwind after a long day, elevate your meditation, or share a thoughtful gift  Achyut Candles is here to help you glow from within.

Achyut means “eternal”  and we’re here to make sure the light never fades.
        </p>
      </section>

{/* WhatsApp Button */}
<a
  href={`https://wa.me/918103033730`}
  target="_blank"
  rel="noopener noreferrer"
  aria-label="Chat with us on WhatsApp"
  style={{
    position: 'fixed',
    bottom: '20px',
    right: '20px',
    backgroundColor: '#25D366',
    color: 'white',
    borderRadius: '50%',
    width: '55px',
    height: '55px',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    boxShadow: '0 2px 10px rgba(0, 0, 0, 0.3)',
    zIndex: 999,
    cursor: 'pointer',
    textDecoration: 'none',
  }}
>
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="30"
    height="30"
    viewBox="0 0 32 32"
    fill="white"
    aria-hidden="true"
  >
    <path d="M16.001 2.667c-7.347 0-13.334 5.987-13.334 13.334 0 2.355.619 4.654 1.792 6.683L2.667 29.333l6.792-1.76a13.26 13.26 0 006.542 1.76c7.347 0 13.334-5.987 13.334-13.334S23.348 2.667 16.001 2.667zm0 24a11.96 11.96 0 01-6.187-1.725l-.44-.265-4.021 1.042 1.073-3.959-.285-.453a11.96 11.96 0 01-1.807-6.28c0-6.613 5.387-12 12-12s12 5.387 12 12-5.387 12-12 12zm6.307-8.826c-.34-.171-2.013-.993-2.325-1.107-.312-.114-.539-.171-.766.171s-.879 1.107-1.078 1.333c-.199.227-.396.256-.735.085-.34-.171-1.435-.528-2.732-1.684-1.01-.902-1.69-2.013-1.89-2.353-.199-.34-.021-.524.15-.695.154-.153.34-.397.512-.596.171-.2.227-.34.34-.569.113-.227.057-.427-.028-.597-.086-.171-.766-1.85-1.05-2.531-.277-.666-.557-.574-.766-.585-.199-.009-.427-.011-.655-.011s-.597.085-.91.427c-.312.34-1.193 1.165-1.193 2.841s1.223 3.296 1.392 3.523c.171.227 2.406 3.675 5.833 5.147.816.351 1.453.561 1.95.718.819.261 1.563.224 2.151.136.656-.097 2.013-.822 2.296-1.616.284-.793.284-1.474.199-1.616-.085-.142-.312-.227-.653-.397z"/>
  </svg>
</a>



      {/* Candle Care Tips */}
      <section style={{ padding: '4rem 2rem', backgroundColor: '#fffaf4', textAlign: 'center' }}>
        <h2 style={{ fontSize: '2.5rem', marginBottom: '1rem' }}>Candle Care Tips</h2>
        <ul style={{ maxWidth: '850px', margin: '2rem auto 0', textAlign: 'left', fontSize: '1.05rem', color: '#444', lineHeight: '1.7' }}>
          <li><strong>Trim the Wick:</strong> Always trim the wick to ¼ inch before lighting.</li>
          <li><strong>Let the Wax Pool:</strong> Allow the top layer to melt completely before extinguishing.</li>
          <li><strong>Burn Time:</strong> Limit each burn session to 3–4 hours.</li>
          <li><strong>Burn on a Heat-Safe Surface:</strong> Keep away from flammable items.</li>
          <li><strong>Extinguish with Care:</strong> Use a candle snuffer to prevent smoke.</li>
        </ul>
      </section>

      {/* FAQ Section */}
      <section style={{ padding: '3rem 2rem', backgroundColor: '#fff' }}>
        <h2 style={{ fontSize: '2rem', textAlign: 'center', marginBottom: '2rem' }}>Frequently Asked Questions</h2>
        <div style={{ maxWidth: '800px', margin: '0 auto' }}>
          {faqs.map((faq, index) => (
            <div key={index} style={{ borderBottom: '1px solid #ccc', padding: '1rem 0' }}>
              <div
                onClick={() => toggleFaq(index)}
                style={{
                  display: 'flex',
                  justifyContent: 'space-between',
                  cursor: 'pointer',
                  alignItems: 'center',
                }}
              >
                <h4 style={{ margin: 0 }}>{faq.question}</h4>
                <span style={{ fontSize: '1.5rem', fontWeight: 'bold' }}>
                  {activeFaq === index ? '−' : '+'}
                </span>
              </div>
              {activeFaq === index && (
                <p style={{ marginTop: '0.5rem', color: '#555', lineHeight: 1.6 }}>
                  {faq.answer}
                </p>
              )}
            </div>
          ))}
        </div>
      </section>
<footer style={{ backgroundColor: '#222', color: '#fff', padding: '3rem 2rem', marginTop: '2rem' }}>
  <div style={{ display: 'flex', flexWrap: 'wrap', justifyContent: 'space-between', maxWidth: '1200px', margin: '0 auto' }}>

    


    {/* Customer Service */}
    <div>
      <h4>Customer Service</h4>
      <Link to="/track-order" style={{ color: '#ccc', display: 'block', margin: '0.2rem 0' }}>Track Order</Link>
      <Link to="/return-refund" style={{ color: '#ccc', display: 'block', margin: '0.2rem 0' }}>Return & Refund Policy</Link>
      <Link to="/shipping" style={{ color: '#ccc', display: 'block', margin: '0.2rem 0' }}>Shipping</Link>
    </div>

    {/* Policies */}
    <div>
      <h4>Policies</h4>
      
      <Link to="/terms" style={{ color: '#ccc', display: 'block', margin: '0.2rem 0' }}>Terms & conditions</Link>
      <Link to="/policy" style={{ color: '#ccc', display: 'block', margin: '0.2rem 0' }}>Policy</Link>
      <Link to="/cookies" style={{ color: '#ccc', display: 'block', margin: '0.2rem 0' }}>Cookies</Link>
    </div>

    {/* Newsletter */}
    <div>
      <h4>Subscribe to our newsletter</h4>
      <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
        <input type="email" placeholder="Enter email here" style={{ padding: '0.7rem 1rem', flex: 1, borderRadius: '20px', border: 'none' }} />
        <button onClick={() => alert('Subscribed!')} style={{ padding: '0.6rem', borderRadius: '50%', backgroundColor: '#000', color: '#fff', border: 'none', cursor: 'pointer' }}>
          ➤
        </button>
      </div>
      <p style={{ fontSize: '0.9rem' }}>For exclusive discounts, new products & surprises.</p>
    </div>
  </div>

  {/* Social Links */}
  <div style={{ textAlign: 'center', marginTop: '2rem' }}>
    <h4>FOLLOW US</h4>
    <div style={{ display: 'flex', justifyContent: 'center', gap: '1.5rem' }}>
      <a href="https://www.facebook.com/share/1EkwdzGDGQ/" style={{ color: '#f0c13f' }}>Facebook</a>
      <a href="https://x.com/AchyutCandles" style={{ color: '#f0c13f' }}>Twitter</a>
      <a href="https://www.instagram.com/achyutcandles" style={{ color: '#f0c13f' }}>Instagram</a>
    </div>
  </div>

  {/* Copyright */}
  <p style={{ textAlign: 'center', marginTop: '2rem', fontSize: '0.9rem' }}>
    &copy; {new Date().getFullYear()} Achyut Candles. All rights reserved.
  </p>

<div style={{ width: '20%', height: '200px', marginTop: '1rem' }}>
  <iframe
    title="Our Location"
    src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3153.0359979446965!2d-122.42067968468155!3d37.77492977975995!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x8085818c3df1bd57%3A0x4c1a0a90b0f2b0a1!2sSan+Francisco%2C+CA!5e0!3m2!1sen!2sus!4v1634410194573!5m2!1sen!2sus"
    width="100%"
    height="100%"
    style={{ border: 0 }}
    allowFullScreen=""
    loading="lazy"
    referrerPolicy="no-referrer-when-downgrade"
  ></iframe>
</div>


</footer>

    </div>
  );
};



export default Home;
