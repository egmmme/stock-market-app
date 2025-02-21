import React, { useState } from "react";
import { Chart } from "react-chartjs-2";

interface StockCardProps {
  companyName: string;
  currentPrice: number;
  dataTestId: string;
}

const StockCard: React.FC<StockCardProps> = ({
  companyName,
  currentPrice,
  dataTestId,
}) => {
  const [quantity, setQuantity] = useState(0);

  const increment = () => {
    setQuantity(quantity + 1);
  };

  const decrement = () => {
    if (quantity > 0) {
      setQuantity(quantity - 1);
    }
  };

  const totalPrice = quantity * currentPrice;

  return (
    <div data-testid={dataTestId} className="stock-card">
      <h2 data-testid={companyName}>{companyName}</h2>
      <p>Current Price: ${currentPrice.toFixed(2)}</p>
      <Chart
        type="line"
        data={{
          labels: [], // Add your labels here
          datasets: [
            {
              label: companyName,
              data: [], // Add your data points here
              borderColor: "rgba(75,192,192,1)",
              borderWidth: 2,
            },
          ],
        }}
      />
      <div>
        <button data-testid="increment" onClick={increment}>
          +
        </button>
        <span data-testid="quantity">{quantity}</span>
        <button data-testid="decrement" onClick={decrement}>
          -
        </button>
      </div>
      <p data-testid="totalPrice">Total Price: ${totalPrice.toFixed(2)}</p>
      <button data-testid={`addCart-${companyName}`}>Buy Stock</button>
    </div>
  );
};

export default StockCard;
