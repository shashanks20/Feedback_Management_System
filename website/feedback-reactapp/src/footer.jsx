import React from 'react';

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-content">
        <div className="footer-section about">
          <h2>About Us</h2>
          <p>FeedbackChain is committed to revolutionizing student feedback management through blockchain technology, ensuring transparency and authenticity in the educational sector.</p>
        </div>
        <div className="footer-section contact">
          <h2>Contact Us</h2>
          <p>Email: info@feedbackchain.com</p>
          <p>Phone: 123-456-7890</p>
        </div>
        <div className="footer-section links">
          <h2>Quick Links</h2>
          <ul>
            <li><a href="/privacy-policy">Privacy Policy</a></li>
            <li><a href="/terms-of-service">Terms of Service</a></li>
            <li><a href="/faq">FAQs</a></li>
          </ul>
        </div>
        <div className="footer-section social">
          <h2>Follow Us</h2>
          <ul>
            <li><a href="https://www.facebook.com/feedbackchain">Facebook</a></li>
            <li><a href="https://twitter.com/feedbackchain">Twitter</a></li>
            <li><a href="https://www.linkedin.com/company/feedbackchain">LinkedIn</a></li>
            <li><a href="https://www.instagram.com/feedbackchain">Instagram</a></li>
          </ul>
        </div>
      </div>
      <div className="footer-bottom">
        <p>&copy; 2024 FeedbackChain. All rights reserved.</p>
      </div>
    </footer>
  );
}

export default Footer;
