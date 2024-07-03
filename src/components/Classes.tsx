import React from "react";
import Header from "./Header";
import Paragraph from "./Paragraph";
import ClassCard from "./ClassCard";

const Classes: React.FC = () => {
  return (
    <section className="bg-gold p-8 sm:p-12">
      <Header
        size="medium"
        fancy
        className="!p-0 sm:!p-0 md:!p-0 lg:!p-0 xl:!p-0"
      >
        Our Services
      </Header>

      {/* I should not need the important selector... */}
      <Paragraph className="p-0 !pt-4 sm:!p-0 md:!p-0 lg:p-0 xl:p-0 ">
        We offer classes on sewing and quilting, as well as long-arm quilting
        services
      </Paragraph>

      <div className="flex flex-col items-center gap-6 pt-4 sm:grid sm:grid-cols-2 sm:[grid-auto-rows: 534px]">
        <ClassCard
          heading="Quilting Lessons"
          description="Quilting lessons from beginner to advanced levels."
        />

        <ClassCard
          heading="Basic Sewing Skills"
          description="The perfect class for beginning sewers"
        />

        <ClassCard
          heading="Intro to Dressmaking"
          description="Learn how to make your own dress! Yes, I know I'm making things up"
          className="self-center"
        />
      </div>
    </section>
  );
};

export default Classes;
