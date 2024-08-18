import React from "react";
import Header from "./Header";
import Paragraph from "./Paragraph";
import ClassCard from "./ClassCard";

const ClassSample: React.FC = () => {
  return (
    <section className="bg-purple text-center p-8 sm:p-12">
      <Header size="medium" fancy className="pb-4 xl:pb-6">
        {/* Our Services */}
        What We Do
      </Header>

      <Paragraph className="md:pb-3 xl:pb-6">
        We offer classes on sewing and quilting, as well as long-arm quilting
        services. We also sell gift certificates!
      </Paragraph>

      <div className="flex w-full justify-center">
        <div className="flex flex-col items-center gap-6 pt-4 max-w-[887px] sm:grid sm:grid-cols-2 sm:[grid-auto-rows: 534px]">
          <ClassCard
            heading="Quilting Lessons"
            description="Quilting lessons from beginner to advanced levels."
          />

          <ClassCard
            heading="Basic Sewing Skills"
            description="The perfect class for beginning sewers."
          />

          {/* is there a way to center the last item? */}
          <ClassCard
            heading="Long-arm Quilting Services"
            description="Have a quilt that needs to be quilted with a long-arm? We can take care of that."
          />
        </div>
      </div>

      {/* <Paragraph className="mt-16 text-xl md:text-xl xl:text-2xl">
        We also offer{" "}
        <span className="font-test text-3xl">gift certificates!</span>
      </Paragraph> */}
    </section>
  );
};

export default ClassSample;
