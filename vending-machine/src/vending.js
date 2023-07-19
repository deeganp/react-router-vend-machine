import React from 'react';
import { BrowserRouter, Route, Link, Routes } from 'react-router-dom';
import Chips from './Chips';
import Candy from './Candy';
import Soda from './Soda';

const Snack = ({ match }) => <h1>{match.params.snackId}</h1>;

const Snacks = () => (
    <div>
        <h2>Snacks</h2>
        <ul>
            <li>
                <Link to="/snacks/chips">Chips</Link>
            </li>
            <li>
                <Link to="/snacks/candy">Candy</Link>
            </li>
            <li>
                <Link to="/snacks/soda">Soda</Link>
            </li>
        </ul>
    </div>
);

const VendingMachine = () => (
    <div>
        <nav>
            <ul>
                <li>
                    <Link to="/">Home</Link>
                </li>
                <li>
                    <Link to="/snacks">Snacks</Link>
                </li>
            </ul>
        </nav>

        <Routes>
            <Route path="/" element={<h1>Vending Machine</h1>} />
            <Route path="/snacks" element={<Snacks />} />
            <Route path="/snacks/chips" element={<Chips />} />
            <Route path="/snacks/candy" element={<Candy />} />
            <Route path="/snacks/soda" element={<Soda />} />
            <Route path="/snacks/:snackId" element={<Snack />} />
        </Routes>
    </div>
);

export default VendingMachine;
