import React from 'react';

const ContactPage: React.FC = () => {
    return (
        <div style={{ padding: '20px', fontFamily: 'Arial, sans-serif' }}>
            <h1>Contact Us</h1>
            <form style={{ display: 'flex', flexDirection: 'column', maxWidth: '600px', margin: '0 auto' }}>
                <label htmlFor="name" style={{ marginBottom: '10px' }}>
                    Name:
                    <input type="text" id="name" name="name" style={{ width: '100%', padding: '8px', marginTop: '5px' }} />
                </label>
                <label htmlFor="email" style={{ marginBottom: '10px' }}>
                    Email:
                    <input type="email" id="email" name="email" style={{ width: '100%', padding: '8px', marginTop: '5px' }} />
                </label>
                <label htmlFor="message" style={{ marginBottom: '10px' }}>
                    Message:
                    <textarea id="message" name="message" rows={5} style={{ width: '100%', padding: '8px', marginTop: '5px' }} />
                </label>
                <button type="submit" style={{ padding: '10px 20px', backgroundColor: '#4CAF50', color: 'white', border: 'none', cursor: 'pointer' }}>
                    Submit
                </button>
            </form>
        </div>
    );
};

export default ContactPage;