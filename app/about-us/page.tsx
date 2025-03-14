import React from 'react';

const AboutUs: React.FC = () => {
    return (
        // <div style={{ padding: '20px', fontFamily: 'Arial, sans-serif', color: '#333' }}>
        <div className="internal-background base-text">
            <h1 className="base-header">
                <br />
                Welcome to Veggie Village! We are dedicated to providing the freshest and most delicious<br />
                vegetables to our community. Our mission is to promote healthy eating habits and support<br />
                local farmers.
            </h1>
            <br />
            <h2 className="base-header">Our Story</h2>
            <p>
                Veggie Village was founded in 2025 by a high school group who shared a passion for healthy<br />
                living and sustainable agriculture.
            </p>
            <br />
            <h2 className="base-header">Our Values</h2>
            <ul>
                <li>Freshness: We ensure that all our products are fresh and of the highest quality.</li>
                <li>Sustainability: We support sustainable farming practices and local farmers.</li>
                <li>Community: We believe in giving back to our community and promoting healthy lifestyles.</li>
            </ul>
            <br />
            <h2 className="base-header">Contact Us</h2>
            <p>
                If you have any questions or would like to learn more about our products, please feel free<br />
                to contact us at <a href="mailto:info@veggievillage.com">info@veggievillage.com</a>.
            </p>
        </div>
    );
};

export default AboutUs;