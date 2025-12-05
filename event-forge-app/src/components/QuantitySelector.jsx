import React, { useState } from 'react';
import '../styling/QuantitySelector.css'

export default function QuantitySelector() {
    const [quantity, setQuantity] = useState(1); // Initialize quantity to 1
    const [returnQuantity, setReturnQuantity] = useState(null);
    const handleIncrement = () => {
        setQuantity(prevQuantity => prevQuantity + 1);
    };

    const handleDecrement = () => {
        setQuantity(prevQuantity => Math.max(1, prevQuantity - 1)); // Prevent quantity from going below 1
    };

    const handleChange = (event) => {
        const value = parseInt(event.target.value, 10);
        if (!isNaN(value) && value >= 1) { // Ensure it's a valid number and at least 1
        setQuantity(value);
        } else if (event.target.value === '') { // Allow clearing the input temporarily
        setQuantity('');
        }
    };

    const getQuantity = () => {
        setReturnQuantity = {quantity};
        return returnQuantity;
    };

    return (
        <div style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
            <form className="quantity-selector" onSubmit={getQuantity}>
                <button onClick={handleDecrement}>-</button>
                <input
                    type="number"
                    value={quantity}
                    onChange={handleChange}
                    style={{ width: '50px', textAlign: 'center' }}
                    min="1" // HTML5 min attribute
                />
                <button onClick={handleIncrement}>+</button>
                <button type="submit" className="submit-button">Submit</button>
            </form>
        </div>
    );
    }

