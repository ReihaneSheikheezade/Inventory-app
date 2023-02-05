import { useState } from "react";
import CategoryForm from "./Component/CategoryForm";
import Navbar from "./Component/Navbar";
import ProductsForm from "./Component/ProductsForm";

function App() {
  const [categories, setCategories] = useState([]);
  const [products, setProducts] = useState([]);

  return (
    <div className="min-h-screen bg-slate-800">
      {/* Navbar */}
      <Navbar />
      {/* app content */}
      <div className="container max-w-screen-sm m-auto">
        <CategoryForm setCategories={setCategories} />
        <ProductsForm categories={categories} setProducts={setProducts} />
      </div>
    </div>
  );
}

export default App;
