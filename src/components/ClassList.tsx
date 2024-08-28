import type { FC } from "react";
import ClassCard from "./ClassCard";
import Header from "./Header";
import Paragraph from "./Paragraph";
import beach from "../images/beach.jpg";
import grass from "../images/cabin_grass.jpg";
import flower from "../images/purple_flower.jpg";
import hawksbill from "../images/hawksbill_mountain.jpg";
import night_sky from "../images/night_sky.jpg";
import white_cherry from "../images/white_cherry.jpg";

const ClassList: FC = () => {
  return (
    <section className="p-8 md:flex md:flex-col md:items-center sm:p-12 md:p-14 lg:p-16">
      <Header size="large" fancy className="pb-2 text-center lg:pb-4">
        Classes
      </Header>
      <Paragraph className="pb-6 text-center max-w-[669px] md:text-leftx lg:pb-8">
        All of our class offerings are listed here. Please note that we provide
        sewing machines and notions, but{" "}
        <strong>not fabric or patterns.</strong> You must bring these items
        yourself.
      </Paragraph>

      <div className="flex flex-col gap-4 sm:grid sm:grid-cols-2 sm:[grid-auto-rows: 534px] md:gap-8 lg:grid-cols-3 lg:gap-12">
        <ClassCard
          heading="Basic Quilting"
          description="Something Have a quilt that needs to be quilted with a long-arm? We can take care of that."
          image={grass.src}
          buttonType="view"
        />
        <ClassCard
          heading="Basic Quilting"
          description="Something Have a quilt that needs to be quilted with a long-arm? We can take care of that."
          image={flower.src}
        />
        <ClassCard
          heading="Basic Quilting"
          description="Something Have a quilt that needs to be quilted with a long-arm? We can take care of that."
          image={hawksbill.src}
        />
        <ClassCard
          heading="Basic Quilting"
          description="Something Have a quilt that needs to be quilted with a long-arm? We can take care of that."
          image={night_sky.src}
        />
        <ClassCard
          heading="Basic Quilting"
          description="Something Have a quilt that needs to be quilted with a long-arm? We can take care of that."
          image={white_cherry.src}
        />
        <ClassCard
          heading="Basic Quilting"
          description="Something Have a quilt that needs to be quilted with a long-arm? We can take care of that."
          image={beach.src}
        />
        <ClassCard
          heading="Basic Quilting"
          description="Something Have a quilt that needs to be quilted with a long-arm? We can take care of that."
          image={flower.src}
        />
      </div>
    </section>
  );
};

export default ClassList;
