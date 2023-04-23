import React from "react";
import { LazyLoadImage } from "react-lazy-load-image-component";
import { Container } from "../layout/Container";
import partner1 from "../assets/partner1.png";
import partner2 from "../assets/partner2.png";
import partner3 from "../assets/partner3.png";
import partner4 from "../assets/partner4.png";
import partner5 from "../assets/partner5.png";

export const Partners = () => {
  return (
    <Container bgColor={"bg-[#EDEBE4]"}>
      <div className="grid grid-cols-2 md:grid-cols-5">
        <LazyLoadImage
          loading="lazy"
          effect="blur"
          src={partner1}
          alt="book partner"
        />
        <LazyLoadImage
          loading="lazy"
          effect="blur"
          src={partner2}
          alt="book partner"
        />
        <LazyLoadImage
          loading="lazy"
          effect="blur"
          src={partner3}
          alt="book partner"
        />
        <LazyLoadImage
          loading="lazy"
          effect="blur"
          src={partner4}
          alt="book partner"
        />
        <LazyLoadImage
          loading="lazy"
          effect="blur"
          src={partner5}
          alt="book partner"
        />
      </div>
    </Container>
  );
};
