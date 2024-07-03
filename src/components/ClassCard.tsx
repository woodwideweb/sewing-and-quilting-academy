import React from "react";
import Header from "./Header";
import Paragraph from "./Paragraph";
import cx from "../classnames";

type Props = {
  heading: string;
  description: string;
  className?: string;
};

const ClassCard: React.FC<Props> = ({
  heading,
  description,
  className = "",
}) => {
  return (
    <div
      className={cx(
        "bg-white max-w-[434px] rounded-xl min-h-full text-left",
        className
      )}
    >
      {/* <div className="h-1/2 bg-grass object-cover rounded-t-xl"></div> */}
      <img
        src="/src/images/beach.jpg"
        alt=""
        className="rounded-t-xl h-36 w-full object-cover md:h-52"
      />

      <div className="h-1/2 p-8 sm:p-12 lg:p-14">
        <Header size="small" textColor="black" className="pb-3">
          {heading}
        </Header>

        <Paragraph textColor="black">{description}</Paragraph>

        {/* booking button */}
        <div>
          <script
            id="setmore_script"
            type="text/javascript"
            src="https://storage.googleapis.com/fullintegration-live/webComponentAppListing/Container/setmoreIframeLive.js"
          ></script>
          <a
            style={{ float: "none" }}
            id="Setmore_button_iframe"
            href="https://booking.setmore.com/scheduleappointment/55d9d244-8f33-405a-919c-3615e2c95b3a"
          >
            <img
              src="https://assets.setmore.com/setmore/images/2.0/Settings/book-now-black.svg"
              alt="Book an appointment with Susan Miller using Setmore"
            />
          </a>
        </div>
      </div>
    </div>
  );
};

export default ClassCard;
