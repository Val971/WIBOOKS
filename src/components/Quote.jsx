import React from "react";
import { Container } from "../layout/Container";

export const Quote = () => {
  return (
    <Container bgColor={"bg-[#EDEBE4]"}>
      <div className="flex flex-col justify-center items-center">
        <h2 className="text-5xl text-center capitalize mb-9">
          Quote of the day
        </h2>
        <p className="text-2xl max-w-xl text-center">
          “The more that you read, the more things you will know. The more that
          you learn, the more places you’ll go.”
        </p>
        <span className="text-xl text-black capitalize mt-6">Dr. Seuss</span>
      </div>
    </Container>
  );
};
