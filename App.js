import React from 'react';
import { CartProvider } from './components/CartContext';
import ChocolatePerformanceBar from './components/ChocolatePerformanceBar';

function App() {
  return (
    <CartProvider>
      <ChocolatePerformanceBar />
    </CartProvider>
  );
}

export default App;
