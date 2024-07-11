import React from "react";
import cx from "../classnames";
import Header from "./Header";
import Paragraph from "./Paragraph";
import "../base.css";
import grass from "../images/grass.jpg";
import Button from "./Button";

type Props = {
  heading: string;
  text: string;
  direction: "left" | "right";
  background: "light" | "medium" | "dark";
  className: string;
  // we will also need the image eventually
};

const ImageAndTextBlock: React.FC<Props> = ({
  heading,
  text,
  direction,
  background,
  className,
}) => {
  return (
    <section
      className={cx(
        "md:flex",
        `bg-${background}-pink`,
        direction === "right" ? "flex-row" : "flex-row-reverse",
        className
      )}
    >
      <div className="p-8 md:p-12 md:w-2/3 lg:px-14 xl:px-16 xl:py-16">
        <div>
          <Header className="pb-4 text-center sm:text-left" size="medium" fancy>
            {heading}
          </Header>

          <Paragraph className="pb-4 md:pb-8 lg:pb-10 xl:pb-12">
            {text}
          </Paragraph>

          <div className="flex justify-center md:justify-start">
            <Button>Learn more</Button>
          </div>
        </div>
      </div>

      <div className="md:w-1/3 md:flex md:items-center md:justify-center">
        {/* I know it's an absolute height. But it's only for small screens so is it okay? */}
        <img
          className="h-[300px] w-full object-cover md:w-5/6 md:rounded-full md:h-auto md:aspect-square md:myx-8 lg:w-[304px] xl:myx-12"
          src={grass.src}
          alt="grass"
        />
      </div>
    </section>
  );
};

export default ImageAndTextBlock;
