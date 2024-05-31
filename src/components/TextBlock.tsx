import React from "react";
import Paragraph from "./Paragraph";
import Header from "./Header";
import "../base.css";

// remove props if this is a one-off component that I don't reuse, though I suspect it won't be
type Props = {
  heading: string;
  text: string;
};

const TextBlock: React.FC<Props> = ({ heading, text }) => {
  return (
    <section className="bg-light-pink flex flex-col md:flex-row xl:py-8">
      <div className="flex items-center justify-center lg:w-1/4">
        <img
          className="rounded-full aspect-square object-cover w-1/3 mt-8 sm:w-[184px] md:w-2/3 lg:w-[265px]"
          src="src/images/Flower.jpg"
          alt="flowers"
        />
      </div>

      <div className="lg:w-3/4">
        <Header size="medium" fancy className="text-center sm:text-left">
          {heading}
        </Header>
        <Paragraph>{text}</Paragraph>
      </div>
    </section>
  );
};

export default TextBlock;
