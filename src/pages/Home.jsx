import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { collection, onSnapshot } from "firebase/firestore";

import { db } from "../firebase.config";
import { Header } from "../components/Header";
import { Partners } from "../components/Partners";
import { SelectionBooks } from "../components/SelectionBooks";
import { BestSelling } from "../components/BestSelling";
import { PopularBooks } from "../components/PopularBooks";
import { Quote } from "../components/Quote";
import { bookStoreActions } from "../redux/slices/bookStoreSlice";

const Home = () => {
  const dispatch = useDispatch();
  const [newbiesBooks, setNewbiesBooks] = useState([]);
  const [popularBooks, setPopularBooks] = useState([]);
  const [heroBook, setHeroBook] = useState([]);
  const [bestSeller, setBestSeller] = useState([]);
  const bookList = useSelector((state) => state.bookStore.bookList);

  const filterBooks = (tag, callback) => {
    const filtered = bookList.filter(
      (book) => book.tag && book.tag.includes(tag)
    );
    callback(filtered);
  };
  useEffect(() => {
    const fetchingBooks = [];
    onSnapshot(collection(db, "books"), (snapshot) => {
      snapshot.docs.map((doc) => {
        fetchingBooks.push({
          id: doc.id,
          title: doc.data().title,
          price: doc.data().price,
          image: doc.data().imgUrl,
          description: doc.data().description,
          description2: doc.data().description2,
          categories: doc.data().categories,
          author: doc.data().author,
          tag: doc.data().tag,
        });
      });
      dispatch(bookStoreActions.fetchAllBooks(fetchingBooks));
    });
  }, []);

  useEffect(() => {
    filterBooks("newbie", setNewbiesBooks);
    filterBooks("popular", setPopularBooks);
    filterBooks("hero", setHeroBook);
    filterBooks("bestSeller", setBestSeller);
  }, [bookList]);
  useEffect(() => {
    // 👇️ scroll to top on page load
    window.scrollTo({ top: 0, left: 0, behavior: "smooth" });
  }, []);
  return (
    <>
      <Header heroBook={heroBook} />
      <Partners />
      <SelectionBooks newbiesBooks={newbiesBooks} />
      <BestSelling bestSeller={bestSeller} />
      <PopularBooks popularBooks={popularBooks} />
      <Quote />
    </>
  );
};

export default Home;
