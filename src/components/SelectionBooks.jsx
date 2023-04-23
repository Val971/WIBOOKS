import React from "react";
import { Container } from "../layout/Container";
import { BookCard } from "./BookCard";
import { SectionHeader } from "./SectionHeader";

export const SelectionBooks = ({ newbiesBooks }) => {
  return (
    <Container>
      <div className="flex flex-col gap-6 justify-center items-center">
        <SectionHeader title="Some quality items" subTitle="Featured Books" />
        <div className="grid grid-cols-2 md:grid-cols-4 gap-10">
          {newbiesBooks &&
            newbiesBooks.map((book) => {
              return <BookCard key={book.id} book={book} />;
            })}
        </div>
      </div>
    </Container>
  );
};
