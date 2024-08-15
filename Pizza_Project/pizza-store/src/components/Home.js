// src/components/Home.js
import React, { useState } from 'react';

const Home = () => {
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        message: '',
    });
    const [formErrors, setFormErrors] = useState({});
    const [submitted, setSubmitted] = useState(false);

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData({
            ...formData,
            [name]: value,
        });
    };

    const handleSubmit = (e) => {
        e.preventDefault();

        // Simple form validation
        const errors = {};
        if (!formData.name) errors.name = 'Name is required';
        if (!formData.email) errors.email = 'Email is required';
        if (!formData.message) errors.message = 'Message is required';
        if (Object.keys(errors).length > 0) {
            setFormErrors(errors);
            return;
        }

        setSubmitted(true);
        // You would typically handle form submission here (e.g., send data to server)
        console.log('Form data:', formData);
    };

    const styles = {
        homeContainer: {
            fontFamily: 'Arial, sans-serif',
            color: '#333',
            textAlign: 'center',
        },
        heroSection: {
            backgroundImage: 'url(https://plus.unsplash.com/premium_photo-1673823195780-8444a76cfde6?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NTN8fHBpenphfGVufDB8MHwwfHx8MA%3D%3D',
            // backgroundRepeat: 'no-repeat',
            color: '#fff',
            padding: '100px 0',
            marginBottom: '40px',
            marginTop: '40px',
            borderBottom: '2px solid #ddd',
        },
        heroContent: {
            maxWidth: '600px',
            margin: '0 auto',
            padding: '0 15px',
        },
        heroTitle: {
            fontSize: '4rem',
            fontWeight: 'bold',
            // color: '#ff6347',
            marginBottom: '20px',
            textShadow: '2px 2px 4px rgba(0, 0, 0, 0.5)',
        },
        heroSubtitle: {
            fontSize: '1.75rem',
            color: '#ddd',
            marginBottom: '30px',
        },
        heroButton: {
            fontSize: '1.25rem',
            padding: '10px 20px',
            backgroundColor: '#ff6347',
            color: '#fff',
            border: 'none',
            borderRadius: '5px',
            cursor: 'pointer',
            textDecoration: 'none',
        },
        infoSection: {
            padding: '60px 0',
            backgroundColor: '#f4f4f4',
        },
        sectionTitle: {
            fontSize: '2.5rem',
            fontWeight: 'bold',
            marginBottom: '40px',
            color: '#ff6347',
        },
        infoCards: {
            display: 'flex',
            justifyContent: 'center',
            flexWrap: 'wrap',
            gap: '20px',
            padding: '0 10px',
        },
        infoCard: {
            backgroundColor: '#fff',
            border: '1px solid #ddd',
            borderRadius: '8px',
            padding: '20px',
            width: '300px',
            boxShadow: '0 4px 8px rgba(0, 0, 0, 0.1)',
            transition: 'transform 0.3s ease, box-shadow 0.3s ease',
        },
        infoCardHover: {
            transform: 'scale(1.05)',
            boxShadow: '0 6px 12px rgba(0, 0, 0, 0.2)',
        },
        cardTitle: {
            fontSize: '1.5rem',
            fontWeight: 'bold',
            color: '#ff6347',
            marginBottom: '10px',
        },
        cardText: {
            fontSize: '1rem',
            color: '#666',
        },
        productSection: {
            padding: '60px 0',
        },
        productTitle: {
            fontSize: '2.5rem',
            fontWeight: 'bold',
            marginBottom: '30px',
            color: '#ff6347',
        },
        productCards: {
            display: 'flex',
            justifyContent: 'center',
            flexWrap: 'wrap',
            gap: '20px',
            padding: '0 10px',
        },
        productCard: {
            backgroundColor: '#fff',
            border: '1px solid #ddd',
            borderRadius: '8px',
            padding: '20px',
            width: '300px',
            boxShadow: '0 4px 8px rgba(0, 0, 0, 0.1)',
            transition: 'transform 0.3s ease, box-shadow 0.3s ease',
        },
        productCardHover: {
            transform: 'scale(1.05)',
            boxShadow: '0 6px 12px rgba(0, 0, 0, 0.2)',
        },
        productImage: {
            width: '100%',
            height: '200px',
            objectFit: 'cover',
            borderRadius: '8px',
            marginBottom: '10px',
        },
        productTitleCard: {
            fontSize: '1.5rem',
            fontWeight: 'bold',
            color: '#ff6347',
        },
        productDescription: {
            fontSize: '1rem',
            color: '#666',
        },
        aboutSection: {
            padding: '60px 0',
            backgroundColor: '#f4f4f4',
            textAlign: 'left',
            maxWidth: '900px',
            margin: '0 auto',
            padding: '0 15px',
        },
        aboutTitle: {
            fontSize: '2.5rem',
            fontWeight: 'bold',
            color: '#ff6347',
            marginBottom: '20px',
        },
        aboutText: {
            fontSize: '1rem',
            color: '#555',
            lineHeight: '1.6',
        },
        contactSection: {
            padding: '60px 0',
            backgroundColor: '#fff',
            borderTop: '2px solid #ddd',
        },
        contactTitle: {
            fontSize: '2.5rem',
            fontWeight: 'bold',
            textAlign: 'center',
            color: '#ff6347',
            marginBottom: '30px',
        },
        contactForm: {
            maxWidth: '700px',
            margin: '0 auto',
            padding: '0 15px',
        },
        formGroup: {
            marginBottom: '20px',
        },
        formLabel: {
            display: 'block',
            marginBottom: '5px',
            fontWeight: 'bold',
            color: '#333',
        },
        formControl: {
            width: '100%',
            padding: '15px',
            borderRadius: '8px',
            border: '1px solid #ddd',
            fontSize: '1rem',
            boxSizing: 'border-box',
        },
        formControlError: {
            border: '1px solid #e74c3c',
        },
        formError: {
            color: '#e74c3c',
            fontSize: '0.875rem',
            marginTop: '5px',
        },
        formButton: {
            padding: '15px 30px',
            backgroundColor: '#ff6347',
            color: '#fff',
            border: 'none',
            borderRadius: '8px',
            cursor: 'pointer',
            fontSize: '1rem',
            transition: 'background-color 0.3s ease',
        },
        formButtonHover: {
            backgroundColor: '#e55347',
        },
        successMessage: {
            color: '#2ecc71',
            fontSize: '1rem',
            textAlign: 'center',
            marginTop: '20px',
        },
    };

    return (
        <div style={styles.homeContainer}>
            <div style={styles.heroSection}>
                <div style={styles.heroContent}>
                    <h1 style={styles.heroTitle}>Welcome to Pizza Store</h1>
                    <p style={styles.heroSubtitle}>Your one-stop shop for delicious pizzas overview!</p>
                    <a href="/menu" style={styles.heroButton}>Explore Menu</a>
                </div>
            </div>

            <div style={styles.infoSection}>
                <h2 style={styles.sectionTitle}>Why Choose Us?</h2>
                <div style={styles.infoCards}>
                    <div
                        style={{ ...styles.infoCard, ...styles.infoCardHover }}
                        className="info-card"
                    >
                        <h3 style={styles.cardTitle}>Fresh Ingredients</h3>
                        <p style={styles.cardText}>We use only the freshest ingredients to ensure every pizza is perfect.</p>
                    </div>
                    <div
                        style={{ ...styles.infoCard, ...styles.infoCardHover }}
                        className="info-card"
                    >
                        <h3 style={styles.cardTitle}>Authentic Recipes</h3>
                        <p style={styles.cardText}>Our recipes are crafted to bring you the true taste of pizza.</p>
                    </div>
                    <div
                        style={{ ...styles.infoCard, ...styles.infoCardHover }}
                        className="info-card"
                    >
                        <h3 style={styles.cardTitle}>Quick Delivery</h3>
                        <p style={styles.cardText}>Fast and reliable delivery service right to your door.</p>
                    </div>
                </div>
            </div>

            <div style={styles.productSection}>
                <h2 style={styles.productTitle}>Our Popular Pizzas</h2>
                <div style={styles.productCards}>
                    <div
                        style={{ ...styles.productCard, ...styles.productCardHover }}
                        className="product-card"
                    >
                        <img
                            src="https://plus.unsplash.com/premium_photo-1667682942148-a0c98d1d70db?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MXx8TWFyZ2hlcml0YXxlbnwwfDB8MHx8fDA%3D"
                            alt="Pizza Margherita"
                            style={styles.productImage}
                        />
                        <h3 style={styles.productTitleCard}>Margherita</h3>
                        <p style={styles.productDescription}>A classic pizza with fresh tomatoes, mozzarella, and basil.</p>
                    </div>
                    <div
                        style={{ ...styles.productCard, ...styles.productCardHover }}
                        className="product-card"
                    >
                        <img
                            src="https://images.unsplash.com/photo-1542282811-943ef1a977c3?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8UGVwcGVyb25pfGVufDB8MHwwfHx8MA%3D%3D"
                            alt="Pepperoni Pizza"
                            style={styles.productImage}
                        />
                        <h3 style={styles.productTitleCard}>Pepperoni</h3>
                        <p style={styles.productDescription}>A spicy favorite with plenty of pepperoni slices and cheese.</p>
                    </div>
                    <div
                        style={{ ...styles.productCard, ...styles.productCardHover }}
                        className="product-card"
                    >
                        <img
                            src="https://images.unsplash.com/photo-1617470703128-26a0fc9af10f?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTh8fFZlZ2V0YXJpYW4lMjBwaXp6YXxlbnwwfDB8MHx8fDA%3D"
                            alt="Vegetarian Pizza"
                            style={styles.productImage}
                        />
                        <h3 style={styles.productTitleCard}>Vegetarian</h3>
                        <p style={styles.productDescription}>Loaded with fresh vegetables and a flavorful cheese blend.</p>
                    </div>
                </div>
            </div>

            <div style={styles.aboutSection}>
                <h2 style={styles.aboutTitle}>About Us</h2>
                <p style={styles.aboutText}>
                    At Pizza Store, we believe in serving high-quality pizzas made with love and care. Our journey began with a passion for delivering the best pizza experience to our customers. Our team is dedicated to using fresh ingredients and authentic recipes to ensure every bite is delightful. Whether you're ordering for a family gathering or just craving a slice, we're here to provide you with exceptional taste and service.
                </p>
            </div>

            <div style={styles.contactSection}>
                <h2 style={styles.contactTitle}>Contact Us</h2>
                <div style={styles.contactForm}>
                <form onSubmit={handleSubmit}>
                        <div style={styles.formGroup}>
                            <label style={styles.formLabel}>Name</label>
                            <input
                                type="text"
                                name="name"
                                value={formData.name}
                                onChange={handleChange}
                                style={{ ...styles.formControl, ...(formErrors.name ? styles.formControlError : {}) }}
                                placeholder="Your Name"
                            />
                            {formErrors.name && <div style={styles.formError}>{formErrors.name}</div>}
                        </div>
                        <div style={styles.formGroup}>
                            <label style={styles.formLabel}>Email</label>
                            <input
                                type="email"
                                name="email"
                                value={formData.email}
                                onChange={handleChange}
                                style={{ ...styles.formControl, ...(formErrors.email ? styles.formControlError : {}) }}
                                placeholder="Your Email"
                            />
                            {formErrors.email && <div style={styles.formError}>{formErrors.email}</div>}
                        </div>
                        <div style={styles.formGroup}>
                            <label style={styles.formLabel}>Message</label>
                            <textarea
                                name="message"
                                rows="4"
                                value={formData.message}
                                onChange={handleChange}
                                style={{ ...styles.formControl, ...(formErrors.message ? styles.formControlError : {}) }}
                                placeholder="Your Message"
                            />
                            {formErrors.message && <div style={styles.formError}>{formErrors.message}</div>}
                        </div>
                        <button
                            type="submit"
                            style={styles.formButton}
                            onMouseOver={(e) => e.currentTarget.style.backgroundColor = styles.formButtonHover.backgroundColor}
                            onMouseOut={(e) => e.currentTarget.style.backgroundColor = styles.formButton.backgroundColor}
                        >
                            Send Message
                        </button>
                        {submitted && <div style={styles.successMessage}>Thank you! Your message has been sent.</div>}
                    </form>
                </div>
            </div>
        </div>
    );
};

export default Home;
