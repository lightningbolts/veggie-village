import React from 'react';

const MenuPage: React.FC = () => {
    const menuItems = [
        { name: 'Veggie Burger', price: '$8.99' },
        { name: 'Grilled Veggie Sandwich', price: '$7.99' },
        { name: 'Veggie Salad', price: '$6.99' },
        { name: 'Veggie Pizza', price: '$9.99' },
        { name: 'Veggie Pasta', price: '$10.99' },
        { name: 'Mozzarella Sticks', price: '$5.99' },
        { name: 'French Fries', price: '$3.99' },
        { name: 'Onion Rings', price: '$4.99' },
    ];

    return (
        <div>
            <h1>Menu</h1>
            <ul>
                {menuItems.map((item, index) => (
                    <li key={index}>
                        {item.name} - {item.price}
                    </li>
                ))}
            </ul>
        </div>
    );
};

export default MenuPage;