import React from 'react';
import './service.css';
import imgs1 from './images/s4.jpeg';
import imgs2 from './images/la.jpeg';
import imgs3 from './images/bt.jpeg';
import imgs4 from './images/history.jpeg';
import imgs5 from './images/resort.jpeg';
import imgs6 from './images/cheap.jpeg';

const HotelBookingServicePage = () => {
  return (
    <div className="hotel-page-container">
      <header className="header">
        <h1>Book Hotels Easily – Anywhere, Anytime</h1>
        <p>Find the Best Hotel Deals with TravelMate</p>
        <img src={imgs1} alt="" />
      </header>

      <section className="why-book">
        <h2>Why Book With Us?</h2>
        <ul>
          <li>Thousands of Trusted Hotels</li>
          <li>Best Price Guarantee</li>
          <li>Real Guest Reviews</li>
          <li>24/7 Customer Support</li>
          <li>Instant Booking Confirmation</li>
        </ul>
      </section>

      <section className="destinations">
        <h2>Popular Destinations</h2>
        <p>New York City, London, Dubai, Paris, Bangkok, Cape Town, Bali, and many more!</p>
      </section>

      <section className="hotel-types">
        <h2>Types of Hotels We Offer</h2>
        <ul>
         <div className="first">
          <img src={imgs2} alt="" />
          <h3> Luxury 5-star Hotels</h3>
         </div>
        <div className="second">
          <img src={imgs3} alt="" />
          <h3> Boutique Hotels</h3>
         </div>
         <div className="third">
          <img src={imgs4} alt="" />
          <h3> Historical Hotels</h3>
         </div>
         <div className="fourth">
          <img src={imgs5} alt="" />
          <h3> Resort Hotels</h3>
         </div>
         <div className="five">
          <img src={imgs6} alt="" />
          <h3> Budget Hotels</h3>
         </div>
         
        </ul>
      </section>

      <section className="call-now">
        <h2>Prefer to Book by Phone?</h2>
        <p>Sometimes it's easier to talk it through. Call us now:</p>
        <p className="phone-number">📞 <strong>1-800-123-BOOK</strong></p>
      </section>

      <section className="group-booking">
        <h2>Business & Group Bookings</h2>
        <p>We offer custom solutions for:</p>
        <ul>
          <li>Corporate travel</li>
          <li>Group stays</li>
          <li>Conferences and events</li>
          <li>Long-term bookings</li>
        </ul>
        <p>📧 Contact us for group rates and exclusive deals.</p>
      </section>

      <section className="cta">
        <h2>Start Your Search Now</h2>
        <p>Enter your destination, choose your dates, compare options, and book your perfect stay.</p>
        <button className="search-button">Search Hotels</button>
      </section>
    </div>
  );
};

export default HotelBookingServicePage;

