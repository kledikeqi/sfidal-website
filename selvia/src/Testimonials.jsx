import React, { useState } from 'react';
import './Testimonials.css';

const reviews = [
  {
    text: "Golden Center Apartment was the perfect base for our Tirana adventure. The location is unbeatable, and the apartment is even more beautiful in person!",
    author: "— Sarah and Mark P."
  },
  {
    text: "Immaculately clean and so comfortable! The owners were incredibly helpful and the apartment had everything we needed. We will definitely be back.",
    author: "— Liam K."
  },
  {
    text: "A true gem in the city center. The views are stunning, and the peaceful atmosphere was exactly what we needed after a long day of sightseeing.",
    author: "— Sofia A."
  },
];

function Testimonials() {
  const [currentReview, setCurrentReview] = useState(0);

  const nextReview = () => {
    setCurrentReview((prev) => (prev + 1) % reviews.length);
  };

  const prevReview = () => {
    setCurrentReview((prev) => (prev - 1 + reviews.length) % reviews.length);
  };

  return (
    <div className="testimonials-container">
      <div className="testimonial-content">
        <p className="testimonial-text">"{reviews[currentReview].text}"</p>
        <p className="testimonial-author">{reviews[currentReview].author}</p>
      </div>
      <div className="testimonial-controls">
        <button onClick={prevReview}>&lt;</button>
        <button onClick={nextReview}>&gt;</button>
      </div>
    </div>
  );
}

export default Testimonials;