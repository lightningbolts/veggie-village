import React from 'react';

const Footer: React.FC = () => {
    return (
        <footer className={"bg-gray-100 text-gray-600 py-5"}>
            <div className={"container mx-auto text-center"}>
                <p>&copy; {new Date().getFullYear()} Veggie Village. All rights reserved.</p>
                <nav>
                    <ul className={"flex justify-center gap-5"}>
                        <li><a href="/about-us">About Us</a></li>
                        <li><a href="/contact">Contact</a></li>
                        <li><a href="/privacy">Privacy Policy</a></li>
                    </ul>
                </nav>
            </div>
        </footer>
    );
};

export default Footer;