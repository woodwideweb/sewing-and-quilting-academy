import React from "react";
import cx from "../classnames";
import "../base.css";

type Props = {
    fancy?: boolean;
    size: 'large' | 'medium';
    textColor?: 'white' | 'black';
    className?: string;
    children: React.ReactNode
};

const Header: React.FC<Props> = ({ fancy = false, size, textColor = "white", className = "", children }) => {
    let styles = `text-${textColor}`

    if (fancy) {
        styles += " font-test "
    } else {
        styles += " "
    }

    switch (size) {
        case "large":
            // combine styles if I don't come up with another size that's different
            styles += "text-3xl sm:text-4xl lg:text-5xl";
        case "medium":
            styles += "text-3xl sm:text-4xl"
    }

    // change this to return different heading tags based on the size argument
    return <h1 className={cx(className, "px-8 pt-8 sm:px-12 sm:pt-12 lg:px-14 lg:pt-14", styles)}>{children}</h1>
}

export default Header