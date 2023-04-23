import React from "react";
import { LazyLoadImage } from "react-lazy-load-image-component";
import bookHero from "../assets/bookshero.jpg";
import AnimatedPage from "../layout/AnimatedPage";

import { Path } from "../components/Path";
import { Container } from "../layout/Container";

const AboutUs = () => {
  return (
    <>
      {" "}
      <AnimatedPage>
        <Path pathName={"Home"} navigation={"/aboutUs"} text={"About us"} />
        <Container>
          <div className="flex flex-col gap-10">
            <h1 className="md:hidden text-4xl font-extrabold text-center">
              Welcome to WIBOOKS
            </h1>
            <div className="flex flex-col md:flex-row gap-10">
              <LazyLoadImage
                loading="lazy"
                effect="blur"
                src={bookHero}
                alt="book image"
                className="w-[35rem]"
              />
              <div className="flex flex-col gap-10 max-w-xl">
                <h1 className="hidden md:block text-4xl font-extrabold text-center">
                  Welcome to WIBOOKS
                </h1>
                <p>
                  At our Caribbean bookstore, we are passionate about sharing
                  the stories and voices of the Caribbean with the world. Our
                  mission is to provide a platform for Caribbean literature and
                  culture to be celebrated and shared, and to support Caribbean
                  authors, publishers, and artists.
                </p>
                <p>
                  Our team is made up of individuals who are deeply committed to
                  the Caribbean and its rich cultural heritage. We understand
                  the importance of representation and diversity in literature,
                  and we strive to ensure that our collection represents the
                  wide variety of voices and experiences within the Caribbean
                  community.
                </p>
              </div>
            </div>
            <div className="flex flex-col gap-10">
              <p>
                We work directly with Caribbean publishers and authors to bring
                you a curated selection of books that showcase the unique beauty
                and complexity of the region. Our collection includes everything
                from classic works of Caribbean literature to contemporary
                fiction, poetry, and non-fiction.
              </p>
              <p>
                We believe that books have the power to inspire, educate, and
                connect people across cultures and borders. Through our
                bookstore, we hope to foster a deeper understanding and
                appreciation of the Caribbean and its people.
              </p>
              <p>
                Thank you for joining us on this journey, and for supporting
                Caribbean literature and culture.
              </p>
            </div>
          </div>
        </Container>
      </AnimatedPage>
    </>
  );
};
export default AboutUs;
