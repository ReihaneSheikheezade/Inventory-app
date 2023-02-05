const ProductList = ({products , categories}) => {
  const findCategry = (categoryId)=>{
    return categories.find(p => p.id === parseInt(categoryId)).title;
  }
  return (
    <section>
      <h2 className= {`text-xl text-slate-300 font-bold mb-2 ${products.length ? "" : "hidden" }`}>Product list</h2>
      {products.map((product) => {
        return (
          <div className="flex items-center justify-between text-sm mb-2">
            <span className="text-sm text-slate-400">{product.title}</span>
            <div className="flex items-center gap-x-3">
              <span className="text-slate-400">{new Date(product.createdAt).toLocaleDateString("fa-IR")}</span>
              <span className=" border border-slate-400 text-slate-400 rounded-xl py-0.5 px-2">
                {findCategry(product.categoryId)}
              </span>
              <span className="flex justify-center items-center rounded-full bg-slate-500 w-6 h-6 border-2 border-slate-400 text-slate-300  ">
               {product.quantity}
              </span>
              <button className="text-red-400 border border-red-400 py-0.5 px-2 rounded-xl">
                delete
              </button>
            </div>
          </div>
        );
      })}
    </section>
  );
};


export default ProductList;
