import React from "react";
import Header from "./Header";
import "../base.css";
import Paragraph from "./Paragraph";

const HeroBlock: React.FC = () => {
    return <section className="bg-medium-pink text-white flex flex-col lg:flex-row bordexr-8 border-red-900 border-solid">
        <div className="lg:w-1/2">
            <Header size="large" fancy={true}>Sewing and Quilting Academy</Header>
            <Paragraph className="lg:pb-96 bg-slate-500">Something explaining something</Paragraph>
        </div>

        <div className="lg:h-full lg:w-1/2 bg-green-500">
            <img src="src/images/beach.jpg" className="object-cover h-[50vh] lg:h-full lg:w-full" alt="a beach" />
        </div>
    </section>
}

export default HeroBlock;