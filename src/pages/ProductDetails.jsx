import React, { useEffect } from "react";
import { useSelector } from "react-redux";

import { Container } from "../layout/Container";
import { CradDetail } from "../components/CradDetail";
import { Path } from "../components/Path";
import AnimatedPage from "../layout/AnimatedPage";

export default function ProductDetails() {
  const currentBook = useSelector((state) => state.bookStore.currentBook);
  useEffect(() => {
    // 👇️ scroll to top on page load
    window.scrollTo({ top: 0, left: 0, behavior: "smooth" });
  }, []);
  return (
    <>
      <AnimatedPage>
        <Path pathName={"Home"} navigation={"/home"} text={currentBook.title} />
        <Container>
          <CradDetail />
        </Container>
      </AnimatedPage>
    </>
  );
}
