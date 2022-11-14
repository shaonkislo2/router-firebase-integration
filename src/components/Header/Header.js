import React from "react";
import { Link } from "react-router-dom";
import "./Header.css";
import useFirebase from "./../../hooks/useFirebase";

const Header = () => {
  const { user, handleSignOut } = useFirebase();
  return (
    <div className="header">
      <nav>
        <Link to="/home">Home</Link>
        <Link to="/products">Products</Link>
        <Link to="/orders">Orders</Link>
        <Link to="/register">Register</Link>
        <span>{user?.displayName && user.displayName}</span>
        {/*span এই কোডটা ভালো করে বুজি নাই */} 
        {
            user?.uid 
            ?
            <button onClick={handleSignOut}>Sign Out</button>
            :
            <Link to="/login">Login</Link>
        }
      </nav>
    </div>
  );
};

export default Header;
