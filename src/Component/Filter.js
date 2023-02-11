

const Filter = ({onSort,onSearch,sort,searchValue }) => {
  
  return (
    <div>
      <div className="flex justify-between items-center mb-6">
        <label htmlFor="search-input" className="text-slate-500 sm:text-lg">search</label>
        <input type="text" onChange={onSearch} value={searchValue} id="search-input" name="search-input" className="rounded-xl p-2 bg-transparent border border-slate-500 text-slate-400" />
      </div>
      <div className="flex justify-between items-center mb-6 ">
        <label htmlFor="sort-products" className="text-slate-500 sm:text-lg">sort</label>
        <select onChange={onSort} value={sort} id="sort-products" name="sort-products"  className="bg-transparent text-slate-400 rounded-xl" >
          <option className="bg-slate-500 text-slate-300" value="">select a category</option>
          <option className="bg-slate-500 text-slate-300" value="latest">latest</option>
          <option className="bg-slate-500 text-slate-300" value="earliest">earliest</option>
        </select>
      </div>
    </div>
    );
}
 
export default Filter;