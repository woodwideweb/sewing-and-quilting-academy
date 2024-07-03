import React from "react";
import Header from "./Header";
import Paragraph from "./Paragraph";
import ClassCard from "./ClassCard";

const Classes: React.FC = () => {
  return (
    <section className="bg-gold text-center p-8 sm:p-12">
      <Header size="medium" fancy className="pb-4 xl:pb-6">
        Our Services
      </Header>

      <Paragraph className="md:pb-3 cl:pb-6">
        We offer classes on sewing and quilting, as well as long-arm quilting
        services
      </Paragraph>

      <div className="flex w-full justify-center">
        <div className="flex flex-col items-center gap-6 pt-4 max-w-[887px] sm:grid sm:grid-cols-2 sm:[grid-auto-rows: 534px]">
          <ClassCard
            heading="Quilting Lessons"
            description="Quilting lessons from beginner to advanced levels."
          />

          <ClassCard
            heading="Basic Sewing Skills"
            description="The perfect class for beginning sewers"
          />

          {/* is there a way to center the last item? */}
          <ClassCard
            heading="Intro to Dressmaking"
            description="Learn how to make your own dress! Yes, I know I'm making things up"
          />
        </div>
      </div>
    </section>
  );
};

export default Classes;
