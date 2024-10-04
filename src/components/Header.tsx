import React from "react";
import cx from "../classnames";
import "../base.css";

type Props = {
  fancy?: boolean;
  size: "large" | "medium" | "small";
  textColor?: "white" | "black" | "gray";
  className?: string;
  children: React.ReactNode;
};

const Header: React.FC<Props> = ({
  fancy = false,
  size,
  textColor = "white",
  className = "",
  children,
}) => {
  let color = "";
  switch (textColor) {
    case "black":
      color = "text-black";
      break;
    case "white":
      color = "text-white";
      break;
    case "gray":
      color = "text-gray-900";
      break;
  }
  let styles = `${color} ${fancy ? "font-test " : " "}`;

  switch (size) {
    case "large":
      // combine styles if I don't come up with another size that's different
      styles += " text-3xl sm:text-4xl lg:text-5xl ";
      break;
    case "medium":
      styles += " text-3xl sm:text-4xl ";
      break;
    case "small":
      styles += " text-xl sm:text-2xl ";
      break;
  }

  // change this to return different heading tags based on the size argument
  return <h1 className={cx(styles, className)}>{children}</h1>;
};

export default Header;
