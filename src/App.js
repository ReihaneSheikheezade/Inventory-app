import CategoryForm from "./Component/CategoryForm";
import Navbar from "./Component/Navbar";
import ProductsForm from "./Component/ProductsForm";



function App() {
  return (
    <div className="min-h-screen bg-slate-800">
    {/* Navbar */}
    <Navbar />
    {/* app content */}
    <div className="container max-w-screen-sm m-auto">
      <CategoryForm />
      <ProductsForm />
    </div>
    </div>
  );
}

export default App;
