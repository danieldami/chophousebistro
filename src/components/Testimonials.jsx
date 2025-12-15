import React from 'react';
import './Testimonials.css';

const Testimonials = () => {
    const reviews = [
        { id: 1, name: 'John Doe', text: 'Absolutely the best burger I have ever had! The flavor explosion is real.', role: 'Foodie' },
        { id: 2, name: 'Jane Smith', text: 'Great atmosphere and even better food. The vegan options are surprisingly good too!', role: 'Local Guide' },
        { id: 3, name: 'Mike Ross', text: 'Fast service and friendly staff. Highly recommended for a quick bite.', role: 'Regular Customer' },
    ];

    return (
        <section className="section-padding testimonials-section" id="testimonials">
            <div className="container">
                <h2 className="section-title center">OUR FELLAS SAY...</h2>
                <div className="testimonials-grid">
                    {reviews.map(review => (
                        <div key={review.id} className="testimonial-card">
                            <p className="testimonial-text">"{review.text}"</p>
                            <div className="testimonial-author">
                                <div className="author-avatar">{review.name.charAt(0)}</div>
                                <div className="author-info">
                                    <h4 className="author-name">{review.name}</h4>
                                    <span className="author-role">{review.role}</span>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Testimonials;
