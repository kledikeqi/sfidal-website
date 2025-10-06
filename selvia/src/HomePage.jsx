import React from 'react';
import './HomePage.css';
import ImageGallery from './ImageGallery.jsx';
import Testimonials from './Testimonials.jsx';
import ContactForm from './ContactForm.jsx';

function HomePage() {
  return (
    <main>
      <section className="intro-section">
        <div className="intro-content">
          <h1>Welcome to Your Home Away from Home.</h1>
          <p>Discover the epitome of comfort and convenience at Golden Center Apartment. Perfectly situated in the heart of Tirana, our space offers a serene escape with all the modern amenities you need.</p>
          <a  href="https://www.airbnb.com/hosting/listings/editor/926867756501940484/view-your-space" className="cta-button" target="_blank" rel="noopener noreferrer">Book Your Stay</a>
        </div>
      </section>
      <section className="apartment-gallery-section">
        <h2>Explore Golden Center Apartment</h2>
        <ImageGallery />
      </section>

      <section className="about-apartment-section">
        <div className="about-content">
          <h2>Experience Tirana from the Golden Center</h2>
          <p>Golden Center Apartment is designed to be your private sanctuary in the city. Step inside to find a sun-drenched, meticulously decorated space that feels both luxurious and welcoming. We’ve thought of every detail to ensure your stay is seamless, from a fully equipped kitchen for your culinary adventures to high-speed Wi-Fi for all your needs.</p>
          <p>The apartment's prime location puts you just steps away from Tirana's most vibrant attractions, including bustling markets, historic landmarks, and the city's best cafes. After a day of exploring, retreat to your peaceful apartment to recharge and relax. It's more than just a place to stay—it's your gateway to a golden experience in the heart of Albania.</p>
        </div>
      </section>

      <section className="amenities-section">
        <h2>Apartment Amenities</h2>
        <div className="amenities-grid">
          <div className="amenity-item">
            <span className="icon">🛋️</span>
            <h3>Modern Living</h3>
            <p>A beautifully decorated living space designed for comfort and relaxation.</p>
          </div>
          <div className="amenity-item">
            <span className="icon">🍳</span>
            <h3>Full Kitchen</h3>
            <p>Enjoy a fully equipped kitchen with all the appliances for a home-cooked meal.</p>
          </div>
          <div className="amenity-item">
            <span className="icon">📶</span>
            <h3>High-Speed Wi-Fi</h3>
            <p>Stay connected with reliable high-speed internet throughout your stay.</p>
          </div>
          <div className="amenity-item">
            <span className="icon">❄️</span>
            <h3>Climate Control</h3>
            <p>Stay cool and comfortable with modern air conditioning in every room.</p>
          </div>
        </div>
      </section>

      <section className="testimonials-section">
        <h2>What Our Guests Say</h2>
        <Testimonials />

      <section className="location-section">
        <div className="location-content">
           <h2>Our Prime Location in Tirana</h2>
           <p>Located in the heart of the city, Golden Center Apartment is perfectly situated for you to explore Tirana. Find us at the address below, and use the interactive map to see nearby attractions.</p>
           <p className="address">Rruga e Dibrës, Tiranë, Albania</p>
          <div className="map-container">
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d226.73286677756317!2d19.823484529869532!3d41.33497464618871!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x135031136a27e0b1%3A0x2295e3f7d9564f7!2zOFJNRitYRkMsIFRpcmFuw6ssIFNocWlww6tyaWE!5e1!3m2!1ssq!2s!4v1758640048971!5m2!1ssq!2s"
              width="600"
              height="450"
              style={{border:0}}
              allowFullScreen=""
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade">
            </iframe>
        </div>
        <p className="map-link">
            <a href="https://www.google.com/maps/place/8RMF%2BXFC,+Tiranë,+Shqipëria/@41.3349746,19.8234845,52m/data=!3m1!1e3!4m6!3m5!1s0x135031136a27e0b1:0x2295e3f7d9564f7!8m2!3d41.3350026!4d19.8235819!16s%2Fg%2F11nyl02ngj?entry=ttu&g_ep=EgoyMDI1MDkxNy4wIKXMDSoASAFQAw%3D%3D" target="_blank" rel="noopener noreferrer">
              Open Map in a new tab
            </a>
        </p>
    </div>
    </section>

      <section className="contact-section">
        <ContactForm />
      </section>


        </section>


    </main>
  );
}

export default HomePage;