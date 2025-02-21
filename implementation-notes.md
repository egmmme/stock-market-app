# Stock market

Create components of a stock marketing website that enables users to see the stock chart of companies in real-time and buy and sell the stocks.

Technical specifications
Tech stack
Frontend: ReactJS

Ports
Frontend: 5000

Implementation details
There is a dashboard that shows the stock information of all the companies.

Each small component containing stock information of the company includes:

1. Company name
2. Current stock price
3. A real-time stock chart (render it using chart.js or a similar library)
4. A buy stock button that enables the user to buy the stock

Include a navbar at the top which has Home, My_Stocks, and My_Fund and it also includes a search box that lets the user search for a specific company.

The homepage should include the following functionalities:

1. The page should load the info by doing GET request to <https://s3-ap-southeast-1.amazonaws.com/he-public-data/db12a41f8.json>
2. Each Stock Card will have data-testid = “`<company-name>`”
3. Each Add Cart will have data-testid = `addCart-<company-name>`
4. The search input will have data-testid="search"
5. Navlinks will have data-testid="Home"/”My_Stocks”/”My_Fund” respectively.

The stock card must have the following functionalities:

1. Each component must have data-testid=`<company-name>`
2. The company name should have data-testid=`<company-name>`
3. The increment button should have data-testid=“increment” and will increase the stock quantity by 1.
4. The decrement button should have data-testid=”decrement” and will decrease stock quantity by 1.
5. Quantity should have data-testid=”quantity”.
6. The total Price should have data-testid="totalPrice" will show the total stock value.

My_Stocks page contains the information about all the stocks bought. This page again contains small react components. Each component includes:

1. Company name
2. Number of stocks bought
3. A sell button at the most right of each component

At the bottom of all the components, the page has to show the total net value of all the stocks at that time.

The page should include the following functionalities:

1. Each component must have data-testid=`<company-name>`
2. The company name should have `data-testid="<company-name>"`
3. Sell button should have data-testid="sell".
4. Total Price should have data-testid="totalPrice".

The sell button will redirect to a form that will include:

1. Company name
2. Quantity of stocks to be sold that have to be inputted by the user.
3. A sell button that will sell the stocks and add or subtract the value in the fund of the user.

The form should include the following functionalities:

1. The form will have data-testid="form"
2. Sell button will have data-testid="sell"

The fund's page at route /My_Fund includes:

1. The total fund available would be Rs 10,000 by default for each user.
2. It should also show the price for which stocks have been bought and the price that is remaining.

The page should have the following functionalities:

1. Total funds should have data-testid=”fund”
2. Total Stock Investment should have data-testid=”stock-fund”

Notes

1. Please note that the component has the data-testid attributes for test cases, certain classes, and ids for rendering and testing purposes. They should not be changed.
2. Do not remove any existing dependency or make changes in a file other than the above files.
3. To start the development server use the npm run dev command.
4. To test your progress, you can hit the npm test command.
5. The data format will be available in /src/data/data.json file
