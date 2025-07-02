import React from 'react';

function Contact() {
  return (
    <div>
      <main className="contact-container">
        <div className="contact-form-container">
          <h2>Contact Us</h2>
          <form id="contactForm">
            <div className="form-group">
              <label htmlFor="name">Name</label>
              <input type="text" id="name" name="name" placeholder="Your Name" required />
              <span className="error-message" id="nameError"></span>
            </div>
            <div className="form-group">
              <label htmlFor="email">Email</label>
              <input type="email" id="email" name="email" placeholder="Your Email" required />
              <span className="error-message" id="emailError"></span>
            </div>
            <div className="form-group">
              <label htmlFor="phone">Phone</label>
              <input type="tel" id="phone" name="phone" placeholder="Your Phone Number" required />
              <span className="error-message" id="phoneError"></span>
            </div>
            <div className="form-group">
              <label htmlFor="message">Message</label>
              <textarea
                id="message"
                name="message"
                placeholder="Your Message"
                rows="5"
                required
              ></textarea>
              <span className="error-message" id="messageError"></span>
            </div>
            <button type="submit" className="submit-button">Send Message</button>
          </form>
        </div>

        <div className="map-container">
          <h2>Find Us</h2>
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3159.8960435556386!2d-122.47459242356897!3d37.68822757188661!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x808f7c728af258dd%3A0x14ff3d7b2199a99b!2sIn-N-Out%20Burger!5e0!3m2!1sen!2sus!4v1685744426599!5m2!1sen!2sus"
            width="100%"
            height="450"
            style={{ border: 0 }}
            allowFullScreen=""
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
            title="In-N-Out Location"
          ></iframe>
        </div>
      </main>

    </div>
  );
}

export default Contact;