# Stock Market Application

This project is a stock market application built with React. It allows users to view real-time stock information, buy and sell stocks, and manage their investment portfolio.

## Project Structure

The project is organized as follows:

```plaintext
stock-market-app
├── public
│   ├── index.html          # Main HTML file
│   └── favicon.ico         # Favicon for the website
├── src
│   ├── components          # Contains all React components
│   │   ├── Dashboard.tsx   # Displays stock information for all companies
│   │   ├── Navbar.tsx      # Navigation bar with links and search box
│   │   ├── StockCard.tsx   # Displays individual stock information
│   │   ├── MyStocks.tsx    # Shows stocks bought by the user
│   │   ├── Fund.tsx        # Displays user's total fund and investments
│   │   └── SellForm.tsx    # Form for selling stocks
│   ├── data
│   │   └── data.json       # Stock data in JSON format
│   ├── App.tsx             # Main application component
│   ├── index.tsx           # Entry point of the React application
│   └── styles
│       └── App.css         # CSS styles for the application
├── package.json             # npm configuration file
├── tsconfig.json            # TypeScript configuration file
└── README.md                # Project documentation
```

## Getting Started

To get started with the project, follow these steps:

**Clone the repository**:

```bash
git clone <repository-url>
cd stock-market-app
```

**Install dependencies**:

```bash
npm install
```

**Run the application**:

```bash
npm run dev
```

**Open your browser** and navigate to `http://localhost:5000` to view the application.

## Features

- View real-time stock information for various companies.
- Buy and sell stocks with a user-friendly interface.
- Manage your investment portfolio and view total funds available.
- Search for specific companies using the search box in the navigation bar.

## Testing

To run tests for the application, use the following command:

```bash
npm test
```

## Notes

- Ensure that you have Node.js and npm installed on your machine.
- The application fetches stock data from an external API. Make sure you have an active internet connection while running the app.

## License

This project is licensed under the MIT License.
