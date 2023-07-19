import React from 'react';
import './App.css';
import VendingMachine from './vending';
import { BrowserRouter } from 'react-router-dom';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
      <VendingMachine /> 
      </BrowserRouter>
    </div>
  );
}

export default App;
