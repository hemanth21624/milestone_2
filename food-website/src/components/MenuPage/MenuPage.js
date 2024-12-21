import React from 'react';
import './MenuPage.css';
import StarRating from './StarRating';

const MenuPage = ({ setCartItems }) => {
  const menuData = {
    Dishes: [
      { id: 1, name: 'Special Bread Pulav', price: 50, image: '/images/bread pulav.jpg', rating: 4.5 },
      { id: 2, name: 'Idli Vada', price: 40, image: '/images/Idli Vada.jpg', rating: 4.0 },
      { id: 3, name: 'Chapathi', price: 40, image: '/images/chapathi.jpg', rating: 4.2 },
      { id: 4, name: 'Special Puri Bhaji', price: 50, image: '/images/puri bhaji.jpg', rating: 4.8 },
      { id: 5, name: 'Masal Dosa', price: 70, image: '/images/masal dosa.jpg', rating: 5.0 },
      { id: 6, name: 'Set Dosa', price: 40, image: '/images/set dosa.jpeg', rating: 4.3 },
     
    ],
    Drinks: [
      { id: 9, name: 'Tea', price: 15, image: '/images/tea.jpeg' },
      { id: 10, name: 'Coffee', price: 15, image: '/images/coffee.jpeg' },
      { id: 11, name: 'Cappuccino', price: 50, image: '/images/cappuccino.jpeg' },
      { id: 12, name: 'Orange Juice', price: 40, image: '/images/orange juice.jpeg' },
      { id: 13, name: 'Watermelon Juice', price: 40, image: '/images/watermelon juice.jpeg' },
      { id: 14, name: 'Mango Juice', price: 40, image: '/images/mango juice.jpeg' },
      { id: 15, name: 'Chikku Milkshake', price: 60, image: '/images/chikku juice.jpeg' },
      { id: 16, name: 'Apple Juice', price: 50, image: '/images/apple juice.jpeg' },
      { id: 17, name: 'Blueberry Mojito', price: 60, image: '/images/blueberryn mojito.jpeg' },
      { id: 18, name: 'Blue Mojito', price: 60, image: '/images/blue mojito.jpeg' },
      { id: 19, name: 'Greenapple Mojito', price: 60, image: '/images/green apple mojito.jpeg' },
      { id: 20, name: 'Watermelon Mojito', price: 60, image: '/images/watermelon mojito.jpeg' },
    ],
    "chineese Menu": [
      { id: 21, name: 'Gobi Manchurian', price: 80, image: '/images/gobi.JPG' },
      { id: 22, name: 'Gobi Chilli', price: 110, image: '/gobi chilli.jpg' },
      { id: 23, name: 'Noodles', price: 80, image: '/noodles.jpeg' },
      { id: 24, name: 'Mushroom Noodles', price: 130, image: '/mushroom noodles.jpeg' },
      { id: 25, name: 'Paneer Noodles', price: 120, image: '/paneer noodles.jpeg' },
      { id: 26, name: 'Fried Rice', price: 80, image: '/fried rice.jpg' },
      { id: 27, name: 'Paneer Fried Rice', price: 120, image: '/paneer fried rice.jpeg' },
      { id: 28, name: 'Mushroom Fried Rice', price: 130, image: '/mushroom fried rice.jpg' },
      { id: 29, name: 'Mushroom Manchuri', price: 90, image: '/mash manchuri.jpg' },
      { id: 30, name: 'Paneer Chilli', price: 120, image: '/paneer chill.jpeg' },
      { id: 30, name: 'Mashroom Chilli', price: 130, image: '/mush chilli.jpg' },
    ],
    Desserts: [
      { id: 31, name: 'Chocolate Lava Cake', price: 110, image: '/images/chocolate lava cake.jpeg' },
      { id: 32, name: 'Fruit Tart', price: 100, image: '/images/fruit tart.jpg' },
      { id: 33, name: 'Cheese Cake', price: 80, image: '/images/cheese cake.jpeg' },
      { id: 34, name: 'Chocolate Icecream', price: 80, image: '/images/chocolate.jpeg' },
      { id: 35, name: 'Creme Brulee', price: 150, image: '/images/creme brulee.jpeg' },
      { id: 36, name: 'Donuts', price: 120, image: '/images/donuts.jpeg' },
      { id: 37, name: 'Gudbud', price: 140, image: '/images/gud bud.jpeg' },
      { id: 38, name: 'Mango Mousse', price: 150, image: '/images/mango mousse.jpeg' },
      { id: 39, name: 'Pavlova', price: 150, image: '/images/pavlova.jpeg' },
      { id: 40, name: 'Strawberry', price: 90, image: '/images/strwberry.jpeg' },
      { id: 41, name: 'Sundae', price: 180, image: '/images/sundae.webp' },
      { id: 42, name: 'Tiramisu', price: 150, image: '/images/tiramisu.jpeg' },
      { id: 43, name: 'Tiramisu icecream', price: 180, image: '/images/tiramisu ice.jpeg' },
      { id: 44, name: 'Venilla', price: 120, image: '/images/venilla.jpeg' },
      { id: 45, name: 'ChocoVenilla', price: 150, image: '/images/icecream.jpeg' },
      
    ],
    Chats: [
      { id: 38, name: 'Samosa', price: 30, image: '/images/SAMOSA.jpeg' },
      { id: 39, name: 'Bhel Puri', price: 40, image: '/images/bhel puri.jpeg' },
      { id: 40, name: 'Pani Puri', price: 40, image: '/images/pani puri.jpeg' },
      { id: 41, name: 'Dahi Puri', price: 50, image: '/images/dhai puri.jpeg' },
      { id: 42, name: 'Sev Puri', price: 50, image: '/images/sev puri.jpeg' },
      { id: 43, name: 'Masala Puri', price: 50, image: '/images/masal puri.jpeg' },
      { id: 44, name: 'Samosa Chaat', price: 50, image: '/images/samosa chat.jpeg' },
      
    ],
  };

  const addToCart = (item) => {
    setCartItems((prevItems) => {
      const existingItem = prevItems.find((cartItem) => cartItem.id === item.id);
      if (existingItem) {
        return prevItems.map((cartItem) =>
          cartItem.id === item.id
            ? { ...cartItem, quantity: cartItem.quantity + 1 }
            : cartItem
        );
      } else {
        return [...prevItems, { ...item, quantity: 1 }];
      }
    });

    alert(`${item.name} has been added to the cart!`);
  };

  return (
    <div className="menu-page">
      <h1>Our Menu</h1>
      {Object.keys(menuData).map((category, index) => (
        <div key={index} className="menu-category">
          <h2>{category}</h2>
          <ul>
            {menuData[category].map((item, idx) => (
              <li key={idx} className="menu-item">
                <img src={item.image} alt={item.name} className="menu-image" />
                <div className="item-details">
                  <span className="item-name">{item.name}</span>
                  <span className="item-price">₹{item.price.toFixed(2)}</span>
                  {/* Add the StarRating component */}
                  <StarRating rating={item.rating} />
                  <button
                    className="add-to-cart-btn"
                    onClick={() => addToCart(item)}
                  >
                    Add to Cart
                  </button>
                </div>
              </li>
            ))}
          </ul>
        </div>
      ))}
    </div>
  );
};

export default MenuPage;