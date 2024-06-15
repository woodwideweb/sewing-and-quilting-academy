import React from "react";
import Link from "./Link";
import { EnvelopeIcon, PhoneIcon } from "@heroicons/react/24/solid";

const Footer: React.FC = () => {
  // background color will change at some point
  return (
    <footer className="bg-dark-pink text-white">
      {/* <div className="flex p-8 sm:p-12 lg:text-[17px] lg:p-14 xl:p-16 xl:text-lg"> */}
      {/* <ul className="w-1/2 sm:w-auto"> */}
      {/* <li className="block pb-4"> */}
      {/* <Link href="/src/images/grass.jpg" name="About" /> */}
      {/* <Link href="/src/images/grass.jpg" name="Home" /> */}
      {/* </li> */}

      {/* <li className="block pb-4"> */}
      {/* <Link href="/src/images/grass.jpg" name="About" /> */}
      {/* </li> */}

      {/* <li className="block pb-4"> */}
      {/* <Link href="/src/images/grass.jpg" name="Classes" /> */}
      {/* </li> */}

      {/* <li className="block pb-4"> */}
      {/* <Link href="/src/images/grass.jpg" name="Contact" /> */}
      {/* </li> */}
      {/* </ul> */}

      {/* these will need to be icons at some point */}
      {/* <section className="w-1/2 flex flex-col sm:w-auto sm:flex-row">
          <a className="block" href="tel:3308583751">
            <PhoneIcon className="block w-8 h-8 mb-3 sm:w-10 sm:h-10" />
            <span className="visually-hidden">call</span>
          </a>

          <a className="block sm:ml-3" href="mailto:beckfoote@gmail.com">
            <EnvelopeIcon className="block w-8 h-8 sm:w-10 sm:h-10 " />
            <span className="hidden visually-hidden">email</span>
          </a>
        </section> */}
      {/* </div> */}

      <div className="text-center text-sm p-6 sm:p-8 xl:text-base">
        <span>© 2024 Sewing and Quilting Academy</span>
      </div>
    </footer>
  );
};

export default Footer;
