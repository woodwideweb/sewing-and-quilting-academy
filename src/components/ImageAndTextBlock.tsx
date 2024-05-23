import React from "react";
import cx from "../classnames";
import Header from "./Header";
import Paragraph from "./Paragraph";
import "../base.css";

type Props = {
    heading: string;
    text: string;
    direction: 'left' | 'right';
    background: 'light' | 'medium' | 'dark';
    // we will also need the image eventually
}

const ImageAndTextBlock: React.FC<Props> = ({ heading, text, direction, background }) => {
    // let backgroundColor = ""
    // switch (background) {
    //     case 'light'
    // }

    return <section className={cx("md:flex lg:h-[485px]x xl:h-[585px]x", `bg-${background}-pink`, direction === "right" ? "flex-row" : "flex-row-reverse")}>
        <div className="md:w-2/3 md:py-8 xl:flexx xl:items-centexr xl:justify-centerx">
            <div>
                <Header size="medium" fancy>{heading}</Header>
                <Paragraph>{text}</Paragraph>
            </div>
        </div>

        {/* I know it's an absolute height. But it's only for small screens so is it okay? */}
        <div className="md:w-1/3">
            <img className="h-[300px] w-full md:w-full md:h-full object-cover" src="src/images/grass.jpg" alt="artistic picture of grass" />
        </div>
    </section>;
}

export default ImageAndTextBlock;