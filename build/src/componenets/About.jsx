import React from "react";
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/navigation';
import { Navigation } from 'swiper/modules';
import img9 from "./images/a1.jpeg";
import human1 from "./images/r1.jpeg";
import human2 from "./images/r2.jpeg";
import human3 from "./images/r3.jpeg";
import video from "./images/hotelv.mp4";





import './About.css';

  const reviews = [
  {

    name: 'Alice',
  rating: 5,
  comment: 'Amazing room!',
  date: '2024-07-01',
  image: human1,
  },
  {
    name: 'Bob',
  rating: 4,
  comment: 'Pretty good experience.',
  date: '2024-06-15',
  image: human2,
  },
  {
    name: 'Carol',
  rating: 3,
  comment: 'Average, could be better.',
  date: '2024-05-10',
  image: human3
  },
  ];



  function VideoPlayer() {
  return (

  <>
  <div className="about">

    <div className="vid">
      <h1>About Us</h1>
      <p className="p1">Welcome to our hotel</p>
      <video width="90%" autoPlay><source src={video} type="video/mp4" /></video>
      <h1>History</h1>
      <p>At hotel ,we help travelers find their prefect stay - any time .Founded in 1998, Serenity Heights began as a family-run retreat for travelers seeking peace and personalized service. Over two decades, we’ve grown into one of [City Name]’s most cherished hospitality destinations — while preserving the warmth and care of our roots.</p>

    </div>
    <div className="goal"><h1>Mission & Vision</h1></div>

    <div className="mission">

      <p> OUR Mission To provide every guest with a stay that feels like home, paired with the indulgence of world-class amenities.
        Our Vision: To be the most trusted name in boutique hospitality, blending tradition with innovation.</p>
      <img src={img9} alt="" />
    </div>
    <div className="App">


    </div>

    {
      (
        <div className="review">
          <h2 style={{ textAlign: 'center' }}>User Reviews</h2>
          <Swiper
            modules={[Navigation]}
            spaceBetween={20}
            slidesPerView={1}
            navigation
            loop
          >
            {reviews.map((review, index) => (
              <SwiperSlide key={index}>
                <div className="box">
                  <img src={review.image} alt={review.name} width="40%" height="70" style={{ borderRadius: '6vh' }} />
                  <h3>{review.name}</h3>
                  <p>⭐ {review.rating}/5</p>
                  <p>{review.comment}</p>
                  <small>{new Date(review.date).toLocaleDateString()}</small>
                </div>
              </SwiperSlide>
            ))}
          </Swiper>
        </div>
      )
    };

</div>




</>

  );
};

export default VideoPlayer;
