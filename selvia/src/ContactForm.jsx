import React, { useState } from 'react';
import './ContactForm.css';
const SuccessModal = ({ isOpen, onClose }) => {
  if (!isOpen) return null;

  return (
    <div className="modal-overlay" onClick={onClose}>
      <div className="modal-content" onClick={e => e.stopPropagation()}>
        <span className="close-button" onClick={onClose}>&times;</span>
        <div className="modal-icon">✅</div>
        <h2>Message Sent Successfully!</h2>
        <p>Thank you for reaching out. The owner will respond to your inquiry as soon as possible.</p>
        <button className="submit-button modal-close-btn" onClick={onClose}>
          Got It
        </button>
      </div>
    </div>
  );
};

function ContactForm() {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [formData, setFormData] = useState({ name: '', email: '', message: '' });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('Form Data:', formData);
    setIsModalOpen(true);
    setFormData({ name: '', email: '', message: '' });
  };

  return (
    <>
      <div className="contact-form-container">
        <h2>Have a Question? Get in Touch</h2>
        <form className="contact-form" onSubmit={handleSubmit}>
          
          <label htmlFor="name">Your Name</label>
          <input 
            type="text" 
            id="name" 
            name="name" 
            value={formData.name}
            onChange={handleChange}
            required 
          />

          <label htmlFor="email">Your Email</label>
          <input 
            type="email" 
            id="email" 
            name="email" 
            value={formData.email}
            onChange={handleChange}
            required 
          />

          <label htmlFor="message">Your Message</label>
          <textarea 
            id="message" 
            name="message" 
            rows="4" 
            value={formData.message}
            onChange={handleChange}
            required
          ></textarea>

          <button type="submit" className="submit-button">Send Message</button>
        </form>
      </div>
      
      <SuccessModal 
        isOpen={isModalOpen} 
        onClose={() => setIsModalOpen(false)} 
      />
    </>
  );
}

export default ContactForm;