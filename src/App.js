import { useEffect, useState } from "react";
import CategoryForm from "./Component/CategoryForm";
import Filter from "./Component/Filter";
import Navbar from "./Component/Navbar";
import ProductList from "./Component/ProductList";
import ProductsForm from "./Component/ProductsForm";

function App() {
  const [categories, setCategories] = useState([]);
  const [products, setProducts] = useState([]);
  const [filteredProducts, setFilteredProducts] = useState([]);
  const [sort, setSort] = useState("latest");
  const [searchValue, setSearchValue] = useState("");
  const [selectedCatogory, setSelectedCatogory] = useState("");

  useEffect(() => {
    let result = [...products];
    result = filterSearchTitle(result);
    result = sortDate(result);
    result = filterSelectedCategory(result);
    setFilteredProducts(result);
  }, [products, searchValue, sort, selectedCatogory]);

  const searchHandler = (e) => {
    setSearchValue(e.target.value.trim().toLowerCase());
  };

  const sortHandler = (e) => {
    setSort(e.target.value);
  };

  const selectCategoryHandler = (e) => {
    setSelectedCatogory(e.target.value);
  };

  const filterSearchTitle = (array) => {
    return array.filter((p) => p.title.toLowerCase().includes(searchValue));
  };

  const sortDate = (array) => {
    const sorttedProducts = [...array];
    return sorttedProducts.sort((a, b) => {
      if (sort === "earliest") {
        return new Date(a.createdAt) > new Date(b.createdAt) ? 1 : -1;
      } else if (sort === "latest") {
        return new Date(a.createdAt) > new Date(b.createdAt) ? -1 : 1;
      }
    });
  };

  const filterSelectedCategory = (array) => {
    if (!selectedCatogory) return array;
    return array.filter((c) => c.categoryId === selectedCatogory);
  };

  useEffect(() => {
    const savedCategories =
      JSON.parse(localStorage.getItem("categories")) || [];
    const savedProducts = JSON.parse(localStorage.getItem("products")) || [];
    setCategories(savedCategories);
    setProducts(savedProducts);
  }, []);

  useEffect(() => {
    if (products.length) {
      localStorage.setItem("products", JSON.stringify(products));
    }
  }, [products]);

  useEffect(() => {
    if (categories.length) {
      localStorage.setItem("categories", JSON.stringify(categories));
    }
  }, [categories]);

  return (
    <div>
      <div className="min-h-screen bg-slate-800">
        <Navbar />
        {/* app content */}
        <div className="container max-w-screen-sm mx-auto p-4">
          <CategoryForm setCategories={setCategories} />
          <ProductsForm categories={categories} setProducts={setProducts} />
          <Filter
            onSort={sortHandler}
            onSearch={searchHandler}
            onSelectCatogory={selectCategoryHandler}
            sort={sort}
            searchValue={searchValue}
            categories={categories}
            selectedCatogory={selectedCatogory}
          />
          <ProductList
            products={filteredProducts}
            categories={categories}
            setProducts={setProducts}
          />
          <div className="mb-20"></div>
        </div>
      </div>
    </div>
  );
}

export default App;
