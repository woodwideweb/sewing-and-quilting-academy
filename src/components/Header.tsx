import React from "react";
import cx from "../classnames";
import "../base.css";

type Props = {
  fancy?: boolean;
  size: "large" | "medium" | "small";
  textColor?: "white" | "black";
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
  let styles = `text-${textColor} ${fancy ? "font-test " : " "}`;

  switch (size) {
    case "large":
      // combine styles if I don't come up with another size that's different
      styles += "text-3xl sm:text-4xl lg:text-5xl ";
    case "medium":
      styles += "text-3xl sm:text-4xl ";
    case "small":
      styles += "text-xl sm:text-2xl ";
  }

  // change this to return different heading tags based on the size argument
  return <h1 className={cx(styles, className)}>{children}</h1>;
};

export default Header;
