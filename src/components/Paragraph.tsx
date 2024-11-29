import React from "react";
import cx from "../lib/classnames";
import "../base.css";

type Props = {
  children: React.ReactNode;
  textColor?: "white" | "black";
  className?: string;
};

const Paragraph: React.FC<Props> = ({
  children,
  textColor = "white",
  className = "",
}) => {
  return (
    <p className={cx(`text-${textColor} md:text-[17px] xl:text-lg`, className)}>
      {children}
    </p>
  );
};

export default Paragraph;
