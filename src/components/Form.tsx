import type { FC } from "react";
import Header from "./Header";

const Form: FC = () => {
  return (
    <form className="text-gray-900 shadow-xl bg-gray-50 w-full p-8 max-w-[550px] sm:rounded-lg md:max-w-[700px] md:p-12 lg:p-16 xl:max-w-[800px]">
      <Header size="small" className="text-gray-900 pb-4">
        Contact Me
      </Header>

      <div className="md:flex md:text-lg lg:text-xl">
        <div className="md:w-1/2 md:pr-6">
          <label className="block">Name</label>
          <input
            type="text"
            className="bg-gray-50 w-full px-2 py-1 border-2 border-gray-400 border-solid md:py-2 md:px-3 focus:outline-none focus:border-dark-pink"
          />
        </div>

        <div className="pb-3 md:w-1/2 md:pl-6">
          <label className="block">Email</label>
          <input
            type="text"
            className="bg-gray-50 w-full px-2 py-1 border-2 border-gray-400 border-solid md:py-2 md:px-3 focus:outline-none focus:border-dark-pink"
          />
        </div>
      </div>

      <div className="pb-4 md:text-lg lg:text-lg">
        <label className="block">Message</label>
        <textarea
          rows={5}
          cols={30}
          className="bg-gray-50 resize-y w-full px-2 py-1 border-2 border-gray-400 border-solid md:py-2 md:px-3 focus:outline-none focus:border-dark-pink"
        />
      </div>

      <div className="flex justify-end">
        <button className="bg-black font-medium text-gray-50 rounded-lg px-8 py-1.5 transition-colors ease-in duration-150 border border-black border-solid hover:bg-gray-50 hover:text-gray-900 mdx:px-10 md:py-2 lg:px-10 xl:py-2.5">
          View
        </button>
      </div>
    </form>
  );
};

export default Form;
