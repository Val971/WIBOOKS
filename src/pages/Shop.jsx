import React, { useState } from "react";
import { useSelector } from "react-redux";
import { Container } from "../layout/Container";
import { BookCard } from "../components/BookCard";
import { Path } from "../components/Path";
import AnimatedPage from "../layout/AnimatedPage";

const Shop = () => {
  const bookList = useSelector((state) => state.bookStore.bookList);
  const [filterList, setFilterList] = useState(bookList);

  const handleSetFilter = (e) => {
    const filtered =
      e.target.value === "All"
        ? bookList
        : bookList.filter(
            (book) =>
              book.categories && book.categories.includes(e.target.value)
          );
    setFilterList(filtered);
  };
  return (
    <>
      <AnimatedPage>
        <Path pathName={"Home"} navigation={"/home"} text={"Shop"} />
        <Container>
          <div className="flex flex-col gap-6 ">
            <div className="flex flex-col md:flex-row gap-5">
              <div className="flex items-center gap-5">
                <label
                  htmlFor="country"
                  className="block text-sm font-medium leading-6 text-gray-900"
                >
                  Category
                </label>
                <div className="mt-2">
                  <select
                    id="category"
                    name="category"
                    onClick={(e) => handleSetFilter(e)}
                    autoComplete="category"
                    className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:max-w-xs sm:text-sm sm:leading-6"
                  >
                    <option value="All">All</option>
                    <option value="Fiction">Fiction</option>
                    <option value="Fantasy">Fantasy</option>
                    <option value="Romance">Romance</option>
                    <option value="Historical">Historical</option>
                  </select>
                </div>
              </div>
            </div>

            <div className="grid grid-cols-2 md:grid-cols-4 gap-10">
              {filterList &&
                filterList.map((book) => {
                  return <BookCard key={book.id} book={book} />;
                })}
            </div>
          </div>
        </Container>
      </AnimatedPage>
    </>
  );
};
export default Shop;
