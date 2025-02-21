import React, { useEffect, useState } from "react";
import StockCard from "./StockCard";

const Dashboard: React.FC = () => {
  const [stocks, setStocks] = useState<any[]>([]);
  const [loading, setLoading] = useState<boolean>(true);

  useEffect(() => {
    const fetchStocks = async () => {
      try {
        const response = await fetch(
          "https://s3-ap-southeast-1.amazonaws.com/he-public-data/db12a41f8.json"
        );
        const data = await response.json();
        setStocks(data);
      } catch (error) {
        console.error("Error fetching stock data:", error);
      } finally {
        setLoading(false);
      }
    };

    fetchStocks();
  }, []);

  if (loading) {
    return <div>Loading...</div>;
  }

  return (
    <div className="dashboard">
      {Array.isArray(stocks) && stocks?.map((stock) => (
        <StockCard
          key={stock.companyName}
          companyName={stock.companyName}
          currentPrice={stock.currentPrice}
          dataTestId={stock.dataTestId}
        />
      ))}
    </div>
  );
};

export default Dashboard;
