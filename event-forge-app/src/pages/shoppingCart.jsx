import { useContext } from 'react';
import { CartContext } from '../context/shoppingCartContext.jsx';


export default function ShoppingCart() {
  const { cart, removeFromCart, clearCart } = useContext(CartContext);
  const { selectedEvent } = useContext(EventContext);

  const total = cart.reduce((sum, item) => sum + item.price, 0);

  return (
    <div className="shopping-cart">
      <h1>Your Tickets</h1>
      {cart.length === 0 ? (
        <p>No tickets in your cart.</p>
      ) : (
        <>
          <ul>
            {selectedEvent && <h2>Event: {selectedEvent.name}</h2>}
            {cart.map(item => (
              <li key={item.id} className="cart-item">
                <span>{item.eventName} - {item.date}</span>
                <span>${item.price}</span>
                <button onClick={() => removeFromCart(item.id)}>Remove</button>
              </li>
            ))}
          </ul>
          <h2>Total: ${total}</h2>
          <button onClick={clearCart}>Clear Cart</button>
          <button className="checkout-btn">Proceed to Checkout</button>
        </>
      )}
    </div>
  );
}

