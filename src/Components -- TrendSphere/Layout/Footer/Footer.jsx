import React from "react";
import "./Footer.css";

export const Footer = () => {
  return (
    <main>
      <section className="styleFooter">
        <ul className="footerHolder">
          <li className="leftFooter">
            <h1>TREND</h1>
            <h1>SPHERE</h1>
          </li>
          <li className="middleFooter">
            <ul>
              <li id="listHolder">
                <h2>Customer Services</h2>
                <ul id="styleList">
                  <li>Help Center</li>
                  <li>Order Tracking</li>
                  <li>Returns & Refunds</li>
                </ul>
              </li>
              <li id="listHolder">
                <h2>Organization Info</h2>
                <ul id="styleList">
                  <li>About Us</li>
                  <li>Careers</li>
                  <li>Investor Relations</li>
                </ul>
              </li>
              <li id="listHolder">
                <h2>Quick Links</h2>
                <ul id="styleList">
                  <li>Privacy Policy</li>
                  <li>Terms & Conditions</li>
                  <li>Contact Us</li>
                </ul>
              </li>
            </ul>
          </li>
          <li className="rightFooter" id="listHolder">
            <h2>Social Media</h2>
            <ul>
              <li>Facebook</li>
              <li>Instagram</li>
              <li>Twitter</li>
            </ul>
          </li>
        </ul>
      </section>
    </main>
  );
};
