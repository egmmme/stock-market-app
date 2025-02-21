import React from 'react';

const Fund: React.FC = () => {
    const totalFund = 10000; // Default fund available
    const totalStockInvestment = 0; // This should be calculated based on user's stocks

    return (
        <div>
            <h2>My Fund</h2>
            <p data-testid="fund">Total Funds: Rs {totalFund}</p>
            <p data-testid="stock-fund">Total Stock Investment: Rs {totalStockInvestment}</p>
            <p data-testid="remaining-fund">Remaining Funds: Rs {totalFund - totalStockInvestment}</p>
        </div>
    );
};

export default Fund;