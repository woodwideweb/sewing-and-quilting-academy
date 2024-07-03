import React from "react";

type Props = {
  // destination: string;
  // outsideURL?: boolean;
  href: string;
  name: string;
};

const Link: React.FC<Props> = ({ href, name }) => {
  // let hrefValue = "";
  // if (outsideURL) {
  //   // if it's a fully formed link to another resource
  //   hrefValue = destination;
  // } else {
  //   // expecting a fully formed path relative to src (not sure if it'll work in production)
  //   hrefValue = `/src/${destination}`;
  // }

  return (
    <a
      // this looks really bad but I guess it works
      className="text-white underline hover:underline-dotted"
      href={href}
    >
      {name}
    </a>
  );
};

export default Link;
