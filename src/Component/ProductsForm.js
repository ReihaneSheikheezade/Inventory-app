import { useState } from "react"

const ProductsForm = ({categories ,setProducts}) => {
  const [productsFormData,setProductsFormData] = useState({
    title:"",
    quantity:"",
    categoryId:"",
  });
 

  const changeHandler = (e) =>{
    setProductsFormData({...productsFormData,[e.target.name] : e.target.value})
  }
  const addNewProductHandler = (e) =>{
    e.preventDefault();
    setProducts((prevState) => [...prevState ,{...productsFormData,createdAt: new Date().toISOString() , id: new Date().getTime()}]);
    setProductsFormData({ title:"", quantity:"", categoryId:"",})
  }
  return (
    <div className="mb-6">
      <h2 className="text-xl text-slate-300 font-bold mb-2">Add New Product</h2>
      <form className="bg-slate-700 flex flex-col gap-y-4 p-4 text-slate-400 rounded-xl text-sm">
        <div>
          <label htmlFor="product-title" className="block mb-1">Product title</label>
          <input onChange={changeHandler} type="text" value={productsFormData.title} id="product-title" name="title" placeholder="product-title..." className="rounded-xl p-2 bg-transparent border border-slate-500 text-slate-400 text-sm" />
        </div>
        <div>
          <label htmlFor="product-quantity" className="block mb-1">Quantity</label>
          <input onChange={changeHandler} type="text" value={productsFormData.quantity} id="product-quantity" name="quantity" placeholder="quantity..." className="rounded-xl p-2 bg-transparent border border-slate-500 text-slate-400 text-sm " />
        </div>
        <div>
          <label htmlFor="product-category" className="block mb-1">Category</label>
          <select onChange={changeHandler} value={productsFormData.categoryId}  id="product-category" name="categoryId" className="rounded-xl p-2 bg-transparent border border-slate-500 text-slate-400 w-full">
            <option className="bg-slate-500 text-slate-400" value="">select a category</option>
            {categories.map( category => {
              return <option key={category.id} className="bg-slate-500 text-slate-400" value={category.id}>{category.title}</option>
            })}
          </select>
        </div>
        <button onClick={addNewProductHandler} type="submit" className="py-2 rounded-xl bg-slate-500 text-slate-200 font-bold">Add New Product</button>
      </form>
    </div>
  );
};

export default ProductsForm;
