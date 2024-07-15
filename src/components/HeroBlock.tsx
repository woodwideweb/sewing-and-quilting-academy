import React from "react";
import Header from "./Header";
import beach from "../images/beach.jpg";
import "../base.css";
import Paragraph from "./Paragraph";

const HeroBlock: React.FC = () => {
  return (
    <section className="bg-medium-pink text-white flex flex-col md:flex-row ">
      <div className="md:w-1/3 p-8 md:p-12 lg:p-14 xl:p-16">
        <Header size="large" fancy={true} className="pb-4">
          Sewing and Quilting Academy
        </Header>
        <Paragraph className="lg:pb-96 ">
          Something explaining something
        </Paragraph>
      </div>

      <div
        className="bg-cover h-[50vh] md:w-2/3 md:h-[60vh] lg:h-[75vh]"
        // so it works at build time
        style={{ backgroundImage: `url(${beach.src})` }}
      >
        {/* <img src="src/images/beach.jpg" className="object-cover h-[50vh] lg:h-full lg:w-full" alt="a beach" /> */}
      </div>
    </section>
  );
};

export default HeroBlock;
