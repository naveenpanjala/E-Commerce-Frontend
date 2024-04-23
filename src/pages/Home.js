import { Navbar } from "../features/navbar/Navbar";
import ProductList from "../features/product-list/components/ProductList";

export const Home = () => {
  return (
    <div>
      <Navbar>
        <ProductList></ProductList>
      </Navbar>
    </div>
  );
};
