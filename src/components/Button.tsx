import React from "react";
import cx from "../lib/classnames";

type Props = {
  children: React.ReactNode;
  // we will need this eventually
  // onClick?: () => void;
  className?: string;
};

const Button: React.FC<Props> = ({ children, className = "" }) => {
  return (
    <button
      className={cx(
        "border-2 border-white border-solid text-white px-4 py-2 rounded-full transition duration-300 md:text-[17px] lg:py-3 lg:px-6 xl:text-lg hover:bg-white hover:text-black",
        className
      )}
    >
      {children}
    </button>
  );
};

export default Button;
