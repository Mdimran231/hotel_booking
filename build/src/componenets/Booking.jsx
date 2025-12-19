import React, { useState, useEffect } from 'react';
import { FaHotel, FaCalendarAlt, FaUser, FaWifi, FaSwimmingPool, FaParking, FaUtensils, FaSpa, FaCheck } from 'react-icons/fa';
import './Booking.css'; // This will contain the CSS we created earlier
import deluxeImg from './images/stand.jpg';
import suiteImg from './images/la.jpeg';
import standardImg from './images/cheap.jpeg';
import img from "./images/Himg.jpg";
const HotelBookingPage = () => {
  const [formData, setFormData] = useState({
    checkIn: '',
    checkOut: '',
    guests: 1,
    roomType: 'standard',
    name: '',
    email: '',
    phone: '',
    specialRequests: ''
  });

  const [availableRooms, setAvailableRooms] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [bookingSuccess, setBookingSuccess] = useState(false);

  const roomTypes = [
    { id: 'standard', name: 'Standard Room', price: 99, amenities: ['WiFi', 'TV'],image: standardImg },
    { id: 'deluxe', name: 'Deluxe Room', price: 149, amenities: ['WiFi', 'TV', 'Minibar'], image:deluxeImg },
    { id: 'suite', name: 'Suite', price: 249, amenities: ['WiFi', 'TV', 'Minibar', 'Jacuzzi'], image:  suiteImg }
  ];

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const checkAvailability = (e) => {
    e.preventDefault();
    setIsLoading(true);

    // Simulate API call
    setTimeout(() => {
      const rooms = roomTypes.map(room => ({
        ...room,
        available: Math.random() > 0.3 // Random availability
      }));
      setAvailableRooms(rooms);
      setIsLoading(false);
    }, 1500);
  };

  const handleBooking = (e) => {
    e.preventDefault();
    setIsLoading(true);

    // Simulate booking API call
    setTimeout(() => {
      setIsLoading(false);
      setBookingSuccess(true);
      setAvailableRooms([]);
    }, 2000);
  };

  const resetForm = () => {
    setFormData({
      checkIn: '',
      checkOut: '',
      guests: 1,
      roomType: 'standard',
      name: '',
      email: '',
      phone: '',
      specialRequests: ''
    });
    setBookingSuccess(false);
  };

  useEffect(() => {
    if (formData.checkIn) {
      const checkInDate = new Date(formData.checkIn);
      const nextDay = new Date(checkInDate);
      nextDay.setDate(checkInDate.getDate() + 1);
      const minCheckOut = nextDay.toISOString().split('T')[0];

      if (formData.checkOut < minCheckOut) {
        setFormData(prev => ({
          ...prev,
          checkOut: minCheckOut
        }));
      }
    }
  }, [formData.checkIn]);

  return (
    <div className="hotel-booking-container">
      <div className="booking-wrapper">
        <div className="header-container">
          <FaHotel className="header-icon" />
          <h1 className="header-title">Luxury Haven Hotel</h1>
          <p className="header-subtitle">Book your perfect stay with us</p>
        </div>

        {!bookingSuccess ? (
          <div className="booking-card">
            <div className="booking-content">
              <div className="booking-sidebar">
                <h2 className="sidebar-title">Find Your Perfect Room</h2>
                <form onSubmit={checkAvailability}>
                  <div className="form-group">
                    <label className="form-label">Check-in</label>
                    <div className="input-wrapper">
                      <FaCalendarAlt className="input-icon" />
                      <input
                        type="date"
                        name="checkIn"
                        value={formData.checkIn}
                        onChange={handleChange}
                        className="date-input"
                        min={new Date().toISOString().split('T')[0]}
                        required
                      />
                    </div>
                  </div>

                  <div className="form-group">
                    <label className="form-label">Check-out</label>
                    <div className="input-wrapper">
                      <FaCalendarAlt className="input-icon" />
                      <input
                        type="date"
                        name="checkOut"
                        value={formData.checkOut}
                        onChange={handleChange}
                        className="date-input"
                        min={formData.checkIn || new Date().toISOString().split('T')[0]}
                        required
                      />
                    </div>
                  </div>

                  <div className="form-group">
                    <label className="form-label">Guests</label>
                    <div className="input-wrapper">
                      <FaUser className="input-icon" />
                      <select
                        name="guests"
                        value={formData.guests}
                        onChange={handleChange}
                        className="select-input"
                      >
                        {[1, 2, 3, 4].map(num => (
                          <option key={num} value={num}>{num} {num > 1 ? 'guests' : 'guest'}</option>
                        ))}
                      </select>
                    </div>
                  </div>

                  <button
                    type="submit"
                    className="check-button"
                    disabled={isLoading}
                  >
                    {isLoading ? 'Checking...' : 'Check Availability'}
                  </button>
                </form>

                <div className="amenities-section">
                  <h3 className="amenities-title">Our Amenities</h3>
                  <ul className="amenities-list">
                    <li className="amenity-item"><FaWifi className="amenity-icon" /> Free WiFi</li>
                    <li className="amenity-item"><FaSwimmingPool className="amenity-icon" /> Swimming Pool</li>
                    <li className="amenity-item"><FaParking className="amenity-icon" /> Free Parking</li>
                    <li className="amenity-item"><FaUtensils className="amenity-icon" /> Restaurant</li>
                    <li className="amenity-item"><FaSpa className="amenity-icon" /> Spa Services</li>
                  </ul>
                </div>
              </div>

              <div className="booking-main">
                <h2 className="rooms-title">Available Rooms</h2>

                {isLoading && !availableRooms.length ? (
                  <div className="loading-container">
                    <div className="loading-spinner"></div>
                    <p className="loading-text">Checking availability...</p>
                  </div>
                ) : availableRooms.length > 0 ? (
                  <>
                    <div className="rooms-list">
                      {availableRooms.filter(room => room.available).map(room => (
                        <div key={room.id} className="room-card">
                          <div className="room-card-layout">
                            <div className="room-image-container">
                              <img src={room.image} alt={`${room.name} with amenities: ${room.amenities.join(', ')}`}
                                className="room-image"
                              />
                            </div>
                            <div className="room-details">
                              <h3 className="room-name">{room.name}</h3>
                              <p className="room-price">${room.price} per night</p>
                              <div className="amenities-section">
                                <h4 className="amenities-subtitle">Amenities:</h4>
                                <div className="amenities-tags">
                                  {room.amenities.map(amenity => (
                                    <span key={amenity} className="amenity-tag">{amenity}</span>
                                  ))}
                                </div>
                              </div>
                              <button
                                onClick={() => setFormData(prev => ({ ...prev, roomType: room.id }))}
                                className={`select-button ${formData.roomType === room.id ? 'select-button-selected' : 'select-button-standard'}`}
                              >
                                {formData.roomType === room.id ? <FaCheck /> : 'Select Room'}
                              </button>
                            </div>
                          </div>
                        </div>
                      ))}
                    </div>

                    {formData.roomType && (
                      <div className="booking-form-container">
                        <h3 className="booking-form-title">Complete Your Booking</h3>
                        <form onSubmit={handleBooking} className="booking-form">
                          <div className="form-group">
                            <label className="form-label">Full Name</label>
                            <input
                              type="text"
                              name="name"
                              value={formData.name}
                              onChange={handleChange}
                              className="form-input"
                              required

                            />
                          </div>
                          <div className="form-group">
                            <label className="form-label">Email</label>
                            <input
                              type="email"
                              name="email"
                              value={formData.email}
                              onChange={handleChange}
                              className="form-input"
                              required

                            />
                          </div>
                          <div className="form-group">
                            <label className="form-label">Phone</label>
                            <input
                              type="tel"
                              name="phone"
                              value={formData.phone}
                              onChange={handleChange}
                              className="form-input"
                              required
                              />
                          </div>
                          <div className="form-group">
                            <label className="form-label">Room Type</label>
                            <input
                              type="text"
                              value={roomTypes.find(r => r.id === formData.roomType).name}
                              className="form-input"
                              readOnly
                            />
                          </div>
                          <div className="form-group">
                            <label className="form-label">Special Requests</label>
                            <textarea
                              name="specialRequests"
                              value={formData.specialRequests}
                              onChange={handleChange}
                              className="form-textarea"
                              rows="3"
                            ></textarea>
                          </div>
                          <button
                            type="submit"
                            className="submit-button"
                            disabled={isLoading}
                          >
                            {isLoading ? 'Processing...' : 'Confirm Booking'}
                          </button>
                        </form>
                      </div>
                    )}
                  </>
                ) : (
                  availableRooms.length === 0 ? (
                    <div className="no-rooms-container">
                      <h3 className="no-rooms-title">Enter your dates to check availability</h3>
                    </div>
                  ) : (
                    <div className="no-rooms-container">
                      <h3 className="no-rooms-title">No rooms available for selected dates</h3>
                      <p className="no-rooms-text">Please try different dates</p>
                    </div>
                  )
                )}
              </div>
            </div>
          </div>
        ) : (
          <div className="success-container">
            <div className="success-card">
              <div className="success-icon">
                <svg fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path>
                </svg>
              </div>
              <h2 className="success-title">Booking Confirmed!</h2>
              <p className="success-text">Thank you for your reservation. A confirmation has been sent to your email.</p>

              <div className="booking-details">
                <h3 className="detail-title">Booking Details:</h3>
                <p className="detail-item"><span className="detail-label">Name:</span> {formData.name}</p>
                <p className="detail-item"><span className="detail-label">Dates:</span> {formData.checkIn} to {formData.checkOut}</p>
                <p className="detail-item"><span className="detail-label">Room:</span> {roomTypes.find(r => r.id === formData.roomType).name}</p>
              </div>

              <button
                onClick={resetForm}
                className="reset-button"
              >
                Make Another Booking
              </button>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default HotelBookingPage;
