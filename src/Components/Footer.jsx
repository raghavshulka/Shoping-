// Footer.js

import React from 'react';

const Footer = () => {
  return (
    <footer className="bg-gray-800 text-white py-8">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-5 gap-4">
          {/* Column 1 */}
          <div className="col-span-1 md:col-span-2">
            <h3 className="font-bold text-lg mb-4">Men</h3>
            <ul className="list-none">
              <li>Gift Cards</li>
              <li>Myntra Insider</li>
            </ul>
          </div>

          {/* Column 2 */}
          <div className="col-span-1 md:col-span-1">
            <h3 className="font-bold text-lg mb-4">Useful Links</h3>
            <ul className="list-none">
              <li>Blog</li>
              <li>Careers</li>
              <li>Site Map</li>
              <li>Corporate Information</li>
              <li>Whitehat</li>
              <li>Cleartrip</li>
            </ul>
          </div>

          {/* Column 3 */}
          <div className="col-span-1 md:col-span-1">
            <h3 className="font-bold text-lg mb-4">Customer Policies</h3>
            <ul className="list-none">
              <li>Contact Us</li>
              <li>FAQ</li>
              <li>Terms & Conditions</li>
              <li>Track Orders</li>
              <li>Shipping</li>
              <li>Cancellation</li>
              <li>Returns</li>
              <li>Privacy Policy</li>
              <li>Grievance Officer</li>
            </ul>
          </div>

          {/* Column 4 */}
          <div className="col-span-1 md:col-span-1">
            <h3 className="font-bold text-lg mb-4">Experience Myntra App on Mobile</h3>
          </div>

          {/* Column 5 */}
          <div className="col-span-1 md:col-span-2">
            <h3 className="font-bold text-lg mb-4">Keep In Touch</h3>
            <ul className="list-none">
              <li>100% ORIGINAL guarantee for all products at myntra.com</li>
              <li>Return within 14 days of receiving your order</li>
            </ul>
          </div>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
