import { useState } from "react";
import Header from "./components/Header";
import Product from "./components/Product";

const App: React.FC = () => {
  const [quantity, setQuantity] = useState(0);
  const [cartQuantity, setCartQuantity] =
    useState(0);

  const handleIncrease = () =>
    setQuantity((prev) => prev + 1);
  const handleDecrease = () =>
    setQuantity((prev) =>
      prev > 0 ? prev - 1 : 0
    );
  const handleAddToCart = () => {
    if (quantity > 0) {
      setCartQuantity(cartQuantity + quantity);
      setQuantity(0);
    }
  };

  const onRemove = () => {
    setCartQuantity(0);
  };

  return (
    <div>
      <Header
        cartQuantity={cartQuantity}
        onRemove={onRemove}
      />
      <Product
        quantity={quantity}
        handleIncrease={handleIncrease}
        handleDecrease={handleDecrease}
        handleAddToCart={handleAddToCart}
      />
    </div>
  );
};
export default App;
