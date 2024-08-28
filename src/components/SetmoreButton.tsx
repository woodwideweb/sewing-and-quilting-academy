import type { FC } from "react";

const SetmoreButton: FC = () => {
  return (
    <div>
      {" "}
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
  );
};

export default SetmoreButton;
