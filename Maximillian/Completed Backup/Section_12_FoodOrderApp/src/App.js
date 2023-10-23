import { Fragment, useState } from "react";

import { Header } from "./components/Layout/Header";
import { Meals } from "./components/Meals/Meals";
import { Cart } from "./components/Cart/Cart";
import { CartProvider } from "./store/CartProvider";

function App() {
  const [isCartOpen, setIsCartOpen] = useState(false);
  return (
    <CartProvider>
      {isCartOpen && <Cart onClose={() => setIsCartOpen(false)} />}
      <Header onCartOpen={() => setIsCartOpen(true)} />
      <main>
        <Meals />
      </main>
    </CartProvider>
  );
}

export default App;
