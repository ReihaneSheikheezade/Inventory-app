

const Filter = ({onSort,onSearch ,sort,searchValue, categories ,onSelectCatogory,selectedCatogory}) => {
  
  return (
    <div>
      <div className="flex justify-between items-center mb-6">
        <label htmlFor="search-input" className="text-slate-500 sm:text-lg">search</label>
        <input type="text" onChange={onSearch} value={searchValue} id="search-input" name="search-input" className="rounded-xl p-2 bg-transparent border border-slate-500 text-slate-400" />
      </div>
      <div className="flex justify-between items-center mb-6 ">
        <label htmlFor="sort-products" className="text-slate-500 sm:text-lg">sort</label>
        <select onChange={onSort} value={sort} id="sort-products" name="sort-products"  className="bg-transparent text-slate-400 rounded-xl" >
          <option className="bg-slate-500 text-slate-300" value="">select a ...</option>
          <option className="bg-slate-500 text-slate-300" value="latest">latest</option>
          <option className="bg-slate-500 text-slate-300" value="earliest">earliest</option>
        </select>
      </div>
      <div className="flex justify-between items-center mb-6 ">
        <label htmlFor="sort-categories" className="text-slate-500 sm:text-lg">category</label>
        <select onChange={onSelectCatogory} value={selectedCatogory} id="sort-categories" name="sort-categories"  className="bg-transparent text-slate-400 rounded-xl" >
          <option className="bg-slate-500 text-slate-300" value="">All</option>
          {categories.map( c =>{
            return <option key={c.id} className="bg-slate-500 text-slate-300" value={c.id}>{c.title}</option>
          })}
        </select>
      </div>
    </div>
    );
}
 
export default Filter;