import React from 'react';

const MenuPage: React.FC = () => {
    const menuItems = [
        {
            category: 'Appetizers',
            items: [
                { name: 'Mozzarella and Tomatoes', price: '$6.99/plate', description: 'Mozzarella, flavoring oils, spices, and tomatoes are all used to create this delicious dish' },
                { name: 'Chips and guacamole', price: '$8.99/plate', description: 'The chips and guacamole are homemade with reduced fat and oil.' },
                { name: 'Veggie sticks', price: '$5.99/plate', description: 'Skewered onto toothpicks, we have cubed lettuce, tomatoes, mozzarella' },
                { name: 'Fruit sticks', price: '$5.99/plate', description: 'Skewered onto toothpicks, we have grapes, watermelon, apples, and pineapples' },
            ],
        },
        {
            category: 'Salads',
            items: [
                { name: 'Caesar salad', price: '$5.99/bowl', description: 'With various vegetable leaves' },
                { name: 'Italian Salad', price: '$5.99/bowl', description: 'Made with various cut vegetables, and italian dressing' },
                { name: 'Make your own salad', price: '$6.99/bowl', description: 'As the name says, design your own salad' },
                { name: 'Fruit salad', price: '$3.99/bowl', description: 'Made with your choice of flavoring, apples, oranges, grapes, and pineapples' },
                { name: 'Potato salad', price: '$5.99/bowl', description: 'Made with potatoes, eggs (can be removed), pickled radish, mayo, and mustard' },
            ],
        },
        {
            category: 'Stir-fried vegetables',
            items: [
                { name: 'Spinach', price: '$3.99/plate', description: 'Spinach is stir-fried in a pot with garlic for spice' },
                { name: 'Stir-Fried Eggplant', price: '$6.99/plate', description: 'Stir Fried eggplant with delicious flavoring' },
                { name: 'Potato chunks', price: '$5.99/plate', description: 'Potato chunks are stir-fried to a crispy perfection and garnished with mouthwatering spices' },
            ],
        },
        {
            category: 'Soups',
            items: [
                { name: 'Veggie Village Soup Special', price: '$7.99/bowl', description: 'Made with pasta, spinach, garlic, tomatoes, egg (can be removed), small dough chunks' },
                { name: 'Soup of the Day', price: '$5.99/bowl', description: 'A soup is pre-chosen based on what vegetables are readily available at the time. Please ask a server what the soup of the day is today.' },
                { name: 'Orzo soup', price: '$5.99/bowl', description: 'Made with orzo, beans, tomatoes to create a delicious soup' },
                { name: 'Tomato soup', price: '$5.99/bowl', description: 'A soup made from tomatoes' },
                { name: 'Congee', price: '$6.99/bowl', description: 'Savory rice porridge' },
                { name: 'Spicy parsnip soup', price: '$4.99/bowl', description: 'Made from parsnips, onions, garlic, buttermilk and various spices, we offer a delicious soup to your table' },
                { name: 'Mushroom soup', price: '$5.99/bowl', description: 'Made from delicious mushrooms' },
                { name: 'Beetroot Soup', price: '$5.99/bowl', description: 'Made with beetroots' },
                { name: 'Potato Soup', price: '$5.99/bowl', description: 'A nice soup made from potatoes' },
            ],
        },
        {
            category: 'Noodles and pasta',
            items: [
                { name: 'Veggie Village Veggie-licious noodles', price: '$4.99/plate', description: 'Veggie Village’s special noodles. Noodles are made from vegetables, including lettuce, carrots, tomatoes, and more! Topped with pesto and cheese (toppings are removable)' },
                { name: 'Pasta Salad', price: '$5.99/plate', description: 'Made with pasta, lettuce cubes, tomatoes, and a delicious sauce, we bring you a classic comfort food' },
                { name: 'Spaghetti', price: '$4.99/plate', description: 'Made with garlic, basil, rosemary, and tomatoes to create our favorite marinara sauce. Topped with cheese (can be removed), and mixed into a plate of spaghetti.' },
            ],
        },
        {
            category: 'Miscellaneous',
            items: [
                { name: 'Veggie Village’s Special', price: '$15.99/meal', description: 'This is a full meal with appetizers, main course, and sides. Dessert is not included. The special changes in rotation to the vegetables that are readily available in our partnered farms to provide the freshest vegetables, and a new taste. Please ask the server what the special is today!' },
                { name: 'Roasted potatoes', price: '$6.99/plate', description: 'Three potatoes will be provided' },
            ],
        },
        {
            category: 'Sides',
            items: [
                { name: 'Rice', price: '$2.99/bowl' },
                { name: 'Garlic bread', price: '$4.99/plate', description: 'Made from all vegetarian ingredients' },
                { name: 'Fries', price: '$5.99/bowl', description: 'Standard potato fries made healthy' },
                { name: 'Sliced fruit', price: '$2.99/bowl', description: 'Sliced fruit of your choice' },
            ],
        },
        {
            category: 'Drinks',
            items: [
                { name: 'Fruit/vegetable smoothie', price: '$3.99/cup', description: 'Made from your choice of fruits or vegetables' },
                { name: 'Fruit/vegetable juice', price: '$3.99/cup', description: 'Juice made from the fruit or vegetable of your choice' },
            ],
        },
        {
            category: 'Desserts',
            items: [
                { name: 'Fruit jelly', price: '$5.99/cup' },
            ],
        },
    ];

    return (
        <div>
            <br />
            <h1>Menu</h1>
            {menuItems.map((category, index) => (
                <div key={index}>
                    <h2>{category.category}</h2>
                    <ul>
                        {category.items.map((item, itemIndex) => (
                            <li key={itemIndex}>
                                <strong>{item.name}</strong> - {item.price}
                                {item.description && <p>{item.description}</p>}
                            </li>
                        ))}
                    </ul>
                    {index < menuItems.length - 1 && <hr />}
                </div>
            ))}
        </div>
    );
};

export default MenuPage;