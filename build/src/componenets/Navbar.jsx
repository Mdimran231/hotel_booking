import React, {useState}from "react";
import { Link } from "react-router-dom";
import img0 from "./images/logo2.png";

const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  return (
    <>
    <nav>
      <img src={img0} alt="" />
      <div className="menu" onClick={() =>{
        setMenuOpen(!menuOpen)
      }} >
        <div className="menu-icon"> </div>
        <div className="menu-icon"> </div>
        <div className="menu-icon"> </div>
        
        </div>
     <ul className={menuOpen ? "open" : ""}>
      <Link to="/"><li>Home</li></Link>
      <Link to="/about"><li>About</li></Link>
      <Link to="/service"><li>Service</li></Link>
      <Link to="/booking"><li>Booking</li></Link>
      
      <div className="log">
      <Link to="/login"><h2>Login</h2></Link>
    </div>
    </ul>
      
    </nav>
    
    </>
    
  );
};

export default Navbar;
