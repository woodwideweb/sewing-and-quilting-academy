import React from "react";
import Header from "./Header";
import sign from "../images/sign.jpg";
import logo from "../images/logo.jpg";
import machines from "../images/machines.jpg";
import quilt1 from "../images/quilt-1.jpg";
import "../base.css";
import Paragraph from "./Paragraph";

const HeroBlock: React.FC = () => {
  return (
    // <section className="bg-medium-pinkx bg-dark-pink text-white flex flex-col md:flex-row ">
    <section className="bg-medium-pink text-white flex flex-col md:flex-row ">
      <div className="md:w-1/3 p-8 md:p-12 lg:p-14 xl:p-16">
        <Header size="large" fancy={true} className="pb-4">
          Sewing and Quilting Academy
        </Header>
        {/* I don't know why this has to be inline. The address just ends up really far away if it's not */}
        <Paragraph className="lg:pb-96 inline text-opacity-95">
          Sewing and quilting lessons from beginner to advanced
          <br />
          Long-arm quilting services
          <br />
          {/* this thing stays on top of the header! Redardless of it's display!*/}
          <address className="mt-2 not-italic opacity-80 md:text-[17px] ">
            275 Main Street <br />
            Wadsworth, Ohio <br />
            330 780 1164
          </address>
        </Paragraph>
      </div>

      <div
        className="bg-cover h-[50vh] md:w-2/3 md:h-[60vh] lg:h-[75vh]"
        // so it works at build time
        // style={{ backgroundImage: `url(${sign.src})` }}
        // style={{ backgroundImage: `url(${quilt1.src})` }}
        // I know this isn't what they wanted, but I think that the sign looks bad
        // I'll talk to them about it - if they could get a really nice picture of a project or machine
        // that would be good too
        style={{ backgroundImage: `url(${machines.src})` }}
        // style={{ backgroundImage: `url(${logo.src})` }}
      >
        {/* <img src="src/images/beach.jpg" className="object-cover h-[50vh] lg:h-full lg:w-full" alt="a beach" /> */}
      </div>
    </section>
  );
};

export default HeroBlock;
