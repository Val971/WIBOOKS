import React from "react";
import { Container } from "../layout/Container";
import { SectionHeader } from "./SectionHeader";
import { BookCard } from "./BookCard";

export const PopularBooks = ({ popularBooks }) => {
  return (
    <Container>
      <div className="flex flex-col gap-6 justify-center items-center">
        <SectionHeader title="Popular Books" subTitle="Some quality items" />
        <div className="grid grid-cols-2 md:grid-cols-4 gap-10">
          {popularBooks &&
            popularBooks.map((book) => {
              return <BookCard key={book.id} book={book} />;
            })}
        </div>
      </div>
    </Container>
  );
};
