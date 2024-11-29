import { type FC, useState } from "react";
import ClassList from "./ClassList";
import Nav from "./Nav";
import type { SewingClass } from "../lib/types";
import grass from "../images/cabin_grass.jpg";
import cx from "../lib/classnames";

const ClassWrapper: FC = () => {
  const [modalIsOpen, setModalIsOpen] = useState(false);
  const [currentClass, setCurrentClass] = useState<SewingClass>({
    name: "Unavailable",
    longDescription:
      "This content doesn't exist. If the problem persists, please contact us.",
    smallDescription: "",
  });

  return (
    <div className="relative">
      <section
        className={cx(
          "absolute inset-0 min-h-screen bg-black/40 z-10 flex justify-center items-center",
          modalIsOpen ? "block" : "hidden"
        )}
      >
        <div className="bg-white text-gray-950 w-full sm:w-3/4 sm:h-2/3 lg:h-3/4 md:w-[567px] fixed top-0 bottom-0 left-0 right-0 m-auto rounded-xl h-1/2">
          <button
            className="absolute text-white text-3xl right-10 top-6"
            onClick={() => setModalIsOpen(false)}
          >
            x
          </button>
          <img
            src={grass.src}
            alt=""
            className="rounded-t-xl h-1/2 w-full object-cover md:h-1/3"
          />

          <div className="p-10 md:p-20">
            <h2 className="font-medium text-lg text-gray-900">
              {currentClass.name}
            </h2>
            <p className="pb-4">{currentClass.longDescription}</p>

            <button className="bg-black font-medium text-white rounded-lg px-8 py-1.5 transition-colors ease-in duration-150 border border-black border-solid hover:bg-white hover:text-gray-900 mdx:px-10 md:py-2 lg:px-10 xl:py-2.5">
              Book
            </button>
          </div>
        </div>
      </section>

      <Nav />
      <main className="bg-medium-pink min-h-screen">
        <ClassList modalIsOpen={modalIsOpen} setModalIsOpen={setModalIsOpen} />
      </main>
    </div>
  );
};

export default ClassWrapper;
