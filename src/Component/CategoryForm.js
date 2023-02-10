import { useState } from "react";

const CategoryForm = ({ setCategories }) => {
  const [isShow, setIsShow] = useState(false);
  const [categoryFormData, setCategoryFormData] = useState({
    title: "",
    description: "",
  });

  const cancelFormHandler = (e) => {
    e.preventDefault();
    setIsShow(false);
  };
  const changeHandler = (e) => {
    setCategoryFormData({
      ...categoryFormData,
      [e.target.name]: e.target.value,
    });
  };
  const addNewCategoryHandler = (e) => {
    e.preventDefault();
    setCategories((prevState) => [
      ...prevState,
      {
        ...categoryFormData,
        createdAt: new Date().toISOString(),
        id: new Date().getTime(),
      },
    ]);
    setCategoryFormData({ title: "", description: "" });
  };

  return (
    <section>
      <div className={`flex flex-col mb-6 ${isShow ? "" : "hidden"}`}>
        <h2 className="sm:text-xl text-slate-300 font-bold mb-2">
          Add New Category
        </h2>
        <form className="bg-slate-700 flex flex-col gap-y-4 p-4 text-slate-400 rounded-xl text-sm">
          <div>
            <label
              htmlFor="category-title"
              className="block text-slate-400 mb-1"
            >
              title
            </label>
            <input
              type="text"
              value={categoryFormData.title}
              id="category-title"
              name="title"
              onChange={changeHandler}
              className="rounded-xl p-2 bg-transparent border border-slate-500 text-slate-400 w-full md:w-auto "
            />
          </div>
          <div>
            <label
              htmlFor="category-description"
              className="block text-slate-400 mb-1"
            >
              description
            </label>
            <textarea
              type="text"
              value={categoryFormData.description}
              id="category-description"
              name="description"
              onChange={changeHandler}
              className="rounded-xl p-2 bg-transparent border border-slate-500 text-slate-400 w-full"
            ></textarea>
          </div>
          <div className="flex items-center justify-center gap-x-4 ">
            <button
              onClick={cancelFormHandler}
              className="border border-slate-400 text-slate-300 rounded-xl py-2 flex-1"
            >
              Cancel
            </button>
            <button
              onClick={addNewCategoryHandler}
              className="bg-slate-500 border border-slate-500 text-slate-200 rounded-xl py-2 flex-1"
            >
              Add new Category
            </button>
          </div>
        </form>
      </div>
      <button
        onClick={() => setIsShow((prevState) => !prevState)}
        className={`text-slate-600 font-medium  mb-4 ${isShow && "hidden"}`}
      >
        Add New Category?
      </button>
    </section>
  );
};

export default CategoryForm;
