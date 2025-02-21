import React from 'react';

const MyStocks: React.FC = () => {
    // Sample data for demonstration purposes
    const stocks = [
        { companyName: 'Company A', quantity: 10, totalPrice: 1000 },
        { companyName: 'Company B', quantity: 5, totalPrice: 500 },
    ];

    const handleSell = (companyName: string) => {
        // Logic to handle selling stocks
        console.log(`Selling stocks of ${companyName}`);
    };

    const totalNetValue = stocks.reduce((acc, stock) => acc + stock.totalPrice, 0);

    return (
        <div>
            <h1>My Stocks</h1>
            {stocks.map(stock => (
                <div key={stock.companyName} data-testid={stock.companyName}>
                    <span data-testid={stock.companyName}>{stock.companyName}</span>
                    <span data-testid="quantity">{stock.quantity}</span>
                    <span data-testid="totalPrice">{stock.totalPrice}</span>
                    <button data-testid="sell" onClick={() => handleSell(stock.companyName)}>Sell</button>
                </div>
            ))}
            <h2>Total Net Value: {totalNetValue}</h2>
        </div>
    );
};

export default MyStocks;