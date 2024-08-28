import React from "react";
import Link from "./Link";
// UNFINISHED -- eventually, we'll need to add styles for an overlay at small screens and build that functionality
// it'll be a bit tricky because we'll have to have a react root component (maybe a fragment?) that we give to Astro
// because I think scripting is painful in .astro files, and they don't have state

const Nav: React.FC = () => {
  return (
    <nav className="hidden sm:block sm:sticky sm:top-0 bg-random-pink sm:w-full sm:py-4 lg:text-lg sm:shadow-small">
      <ul className="sm:flex sm:justify-around">
        <li className="inline">
          <Link href="/" name="Home" />
        </li>

        <li className="inline">
          <Link href="/classes" name="Classes" />
        </li>

        <li className="inline">
          <Link href="/src/images/grass.jpg" name="Contact" />
        </li>
      </ul>
    </nav>
  );
};

export default Nav;
