import React from "react";
import { Link } from "react-router-dom";
const Footer = () => {
  return (
    <footer className="footer">
      <h4 className="text-center">All rights reserved &copy; Piyush Mehta</h4>
      <p className="text-center mt-3">
        <Link to="/about">About</Link>|<Link to="/contact">Contact</Link>|
        <Link to="/policy">Privacy</Link>
      </p>
    </footer>
  );
};

export default Footer;
