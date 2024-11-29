import React from "react";
import Header from "./Header";
import Paragraph from "./Paragraph";
import beach from "../images/beach.jpg";
import cx from "../lib/classnames";
import SetmoreButton from "./SetmoreButton";

type Props = {
  heading: string;
  description: string;
  className?: string;
  image: string;
  buttonType?: "view" | "book";
  onClick?: () => void;
};

const ClassCard: React.FC<Props> = ({
  heading,
  description,
  className = "",
  image,
  buttonType = "view",
  onClick = () => {},
}) => {
  return (
    <div
      className={cx(
        "bg-white text-gray-800 max-w-[434px] rounded-xl sm:min-h-full text-left shadow-lg",
        className
      )}
    >
      <img
        src={image}
        alt=""
        className="rounded-t-xl h-36 w-full object-cover md:h-52"
      />

      <div className="h-1/2 p-8 sm:p-12 lg:p-14">
        <Header size="small" textColor="black" className="pb-3">
          {heading}
        </Header>

        <Paragraph textColor="black" className="pb-4">
          {description}
        </Paragraph>

        {/* booking button */}
        <div>
          {buttonType === "view" ? (
            <button
              className="bg-black font-medium text-white rounded-lg px-8 py-1.5 transition-colors ease-in duration-150 border border-black border-solid hover:bg-white hover:text-gray-900 mdx:px-10 md:py-2 lg:px-10 xl:py-2.5"
              onClick={onClick}
            >
              View
            </button>
          ) : (
            <SetmoreButton />
          )}
        </div>
      </div>
    </div>
  );
};

export default ClassCard;
