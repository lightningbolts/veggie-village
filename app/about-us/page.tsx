import React from 'react';

const AboutUs: React.FC = () => {
    return (
        <div style={{ padding: '20px', fontFamily: 'Arial, sans-serif', color: '#333' }}>
            <h1>About Us</h1>
            <p>
                Welcome to Veggie Village! We are dedicated to providing the freshest and most delicious
                vegetables to our community. Our mission is to promote healthy eating habits and support
                local farmers.
            </p>
            <h2>Our Story</h2>
            <p>
                Veggie Village was founded in 2025 by a high school group who shared a passion for healthy
                living and sustainable agriculture.
            </p>
            <h2>Our Values</h2>
            <ul>
                <li>Freshness: We ensure that all our products are fresh and of the highest quality.</li>
                <li>Sustainability: We support sustainable farming practices and local farmers.</li>
                <li>Community: We believe in giving back to our community and promoting healthy lifestyles.</li>
            </ul>
            <h2>Contact Us</h2>
            <p>
                If you have any questions or would like to learn more about our products, please feel free
                to contact us at <a href="mailto:info@veggievillage.com">info@veggievillage.com</a>.
            </p>
        </div>
    );
};

export default AboutUs;