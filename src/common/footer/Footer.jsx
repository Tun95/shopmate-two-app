import React from "react";
import "./footer.css";
import { Link } from "react-router-dom";

function Footer() {
  return (
    <>
      <footer>
        <div className="container grid2 footer-wrap">
          <div className="box">
            <h1>Shopmate</h1>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Auctor
              libero id et, in gravida. Sit diam duis mauris nulla cursus. Erat
              et lectus vel ut sollicitudin elit at amet.
            </p>
            <div className="icon d_flex">
              <div className="img a_flex">
                <i className="fa-brands fa-google-play"></i>
                <span>Google Play</span>
              </div>
              <div className="img a_flex app-store">
                <i className="fa-brands fa-app-store-ios"></i>
                <span>App Store</span>
              </div>
            </div>
          </div>

          <div className="box">
            <h2>About Us</h2>
            <ul>
              <li>
                <Link to=""> Careers</Link>
              </li>
              <li>
                <Link to="/store-locations">Our Stores</Link>
              </li>
              <li>
                <Link to="">Our Cares</Link>
              </li>
              <li>
                <Link to="/terms-and-conditons">Terms & Conditions</Link>
              </li>
              <li>
                <Link to="/privacy-policy">Privacy Policy</Link>
              </li>
            </ul>
          </div>
          <div className="box">
            <h2>Customer Care</h2>
            <ul>
              <li>
                <Link to="/contact">Help Center </Link>
              </li>
              <li>
                <Link to="">How to Buy </Link>
              </li>
              <li>
                <Link to="/track-order">Track Your Order </Link>
              </li>
              <li>
                <Link to="">Corporate & Bulk Purchasing </Link>
              </li>
              <li>
                <Link to="">Returns & Refunds </Link>
              </li>
            </ul>
          </div>
          <div className="box">
            <h2>Contact Us</h2>
            <ul>
              <li>
                70 Washington Square South, New York, NY 10012, United States
              </li>
              <li>
                Email: <a href="mailto:admin@example.com">admin@example.com</a>
              </li>
              <li>
                Phone: <a href="tel:+8889 363 8868">+8889 363 8868</a>
              </li>
            </ul>
          </div>
        </div>
      </footer>
    </>
  );
}

export default Footer;
