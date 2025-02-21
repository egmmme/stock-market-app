import React from 'react';
import { Link } from 'react-router-dom';

const Navbar: React.FC = () => {
    return (
        <nav>
            <ul>
                <li>
                    <Link to="/" data-testid="Home">Home</Link>
                </li>
                <li>
                    <Link to="/My_Stocks" data-testid="My_Stocks">My Stocks</Link>
                </li>
                <li>
                    <Link to="/My_Fund" data-testid="My_Fund">My Fund</Link>
                </li>
            </ul>
            <input type="text" placeholder="Search for a company..." data-testid="search" />
        </nav>
    );
};

export default Navbar;