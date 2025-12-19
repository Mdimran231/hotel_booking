import React, { useRef,useEffect } from "react";
import "./Home.css"; // Assuming you have a CSS file 
import gsap from "gsap";
import { Link } from "react-router-dom";
import { useGSAP } from "@gsap/react";
import { ScrollTrigger } from "gsap/ScrollTrigger";
gsap.registerPlugin(ScrollTrigger);
import img0 from "./images/logo2.png";
import img from "./images/Himg.jpg";
import img1 from "./images/s1.jpg";
import img2 from "./images/s3.jpg";
import img3 from "./images/s4.jpeg";
import img4 from "./images/s5.jpeg";
import img5 from "./images/service.jpeg";
import img6 from "./images/la.jpeg";
import img7 from "./images/pool.jpeg";
import img8 from "./images/wifi.jpeg";






const Home = () => {
  const boxRef = useRef(null);
  useGSAP(()=>{
    gsap.to(boxRef.current,{x:-70, delay:0.2,duration:2})
   
  },{})
  const boxRef2 = useRef(null);
  useGSAP(()=>{
    gsap.to(boxRef2.current,{x:70, delay:0.2,duration:2})
   
  },{})
  const cardRef = useRef(null);
  useEffect(() => {
    const el = cardRef.current;
    gsap.fromTo(
      el,
      { rotation: 0},
      {
      
        rotate:216,
        autoAlpha:"2",
        y:-50,
        scale:-1.2,
        duration: 1,
        scrollTrigger: {
    trigger: "el", // Here to trigger and initiate upon div 1
    
     scrub: 1,
    
   
      }
    }
    )
  },[]);
  const cardRef2 = useRef(null);
  useEffect(() => {
    const el = cardRef2.current;
    gsap.fromTo(
      el,
      { rotation: 0},
      {
        rotate:216,
        autoAlpha:"2",
        y:-50,
        scale:-1.2,
        duration: 2,
        scrollTrigger: {
    trigger: "el", // Here to trigger and initiate upon div 1
     
     scrub: 1,
    
   
      }
    }
    )
  },[]);
  const cardRef3 = useRef(null);
  useEffect(() => {
    const ele = cardRef3.current;
    gsap.fromTo(
      ele,
      { rotation: 0},
      {
        rotate:197,
        autoAlpha:"2",
        y:-50,
        scale:-1.1,
        duration: 2,
        scrollTrigger: {
    trigger: "ele", // Here to trigger and initiate upon div 1
     
     scrub: 1,
    
   
      }
    }
    )
  },[]);
  const cardRef4 = useRef(null);
  useEffect(() => {
    const ele = cardRef4.current;
    gsap.fromTo(
      ele,
      { rotation: 0},
      {
        rotate:195,
        autoAlpha:"2",
        y:-40,
        scale:-1.1,
        duration: 2,
        scrollTrigger: {
    trigger: "ele", // Here to trigger and initiate upon div 1
     start:'top 90%',
    end:'bottom 10%',
     scrub: 1,
    
   
      }
    }
    )
  },[]);
  
  return (
    <>
      <div  className="container"  >
        <img src={img0} alt="" />
        
        <h1 ref={boxRef} className="heading">Welcome to the OMNI Hotels</h1>
        <p  ref={boxRef2}className="paragraph">Book Hotels Anywhera,Anytime- At the Best Price</p>
      </div>
      

      <div className="slide-content">
        <h2>Luxury Hotel</h2>
        <p>Experience the best stay at our luxury hotel.</p>
      </div>
      <div class="sliders">
        <div class="slide-track">
          <div class="slide">
            <img src={img1} alt="" />
          </div>
          <div class="slide">
            <img src={img2} alt="" />
          </div>
          <div class="slide">
            <img src={img3} alt="" />
          </div>
          <div class="slide">
            <img src={img4} alt="" />
          </div>
          <div class="slide">
            <img src={img1} alt="" />
          </div>

        </div>
      </div>
      <div className="feature"> 
        <h2>Why we chose us</h2>
        <p>We offer the best services and amenities for your comfort.</p>
      </div>
      <div  className="cards">
        <div ref={cardRef}  className="card">

          <div class="open">
            <img src={img5} alt="" /> 

          </div>
          <div class="don">
            <h3>24/7 Room Service</h3>
            <p>Enjoy round-the-clock room service for your </p>
          </div>

        </div>
        <div ref={cardRef2} className="card">

          <div className="open">
            <img src={img6} alt="" />
          </div>
          <div className="don">
            <h3>Luxury Accommodation</h3>
            <p>Experience the ultimate in comfort and style.</p>
          </div>

        </div>
        <div  ref ={cardRef3}className="card">

          <div className="open">
            <img src={img7} alt="" />

          </div>
          <div className="don">
            <h3>Swimming Pool</h3>
            <p>Enjoy our luxurious swimming pool for relaxation.</p>
          </div>
        </div>
        <div  ref ={cardRef4}className="card">

          <div className="open">
            <img src={img8} alt="" />

          </div>
          <div className="don">
            <h3>wifi</h3>
            <p>Stay connected with our high-speed wifi throughout the hotel.</p>
          </div>
        </div>



      </div>
      
      <div className="button">
       <a href="/booking"><button>Book now</button></a>
      </div>
      

    </>

  );
}

export default Home;

