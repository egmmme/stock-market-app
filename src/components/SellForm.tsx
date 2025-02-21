import React, { useState } from "react";

interface SellFormProps {
  companyName: string;
  onSell: (companyName: string, quantity: number) => void;
}

const SellForm: React.FC<SellFormProps> = ({ companyName, onSell }) => {
  const [quantity, setQuantity] = useState(0);

  const handleSell = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (quantity > 0) {
      onSell(companyName, quantity);
      setQuantity(0);
    }
  };

  return (
    <form data-testid="form" onSubmit={(e) => handleSell(e)}>
      <h2>Sell {companyName}</h2>
      <div>
        <label htmlFor="quantity">Quantity:</label>
        <input
          type="number"
          id="quantity"
          value={quantity}
          onChange={(e) => setQuantity(Number(e.target.value))}
          min="1"
          required
        />
      </div>
      <button type="submit" data-testid="sell">
        Sell
      </button>
    </form>
  );
};

export default SellForm;
