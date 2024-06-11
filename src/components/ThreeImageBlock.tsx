import React from "react";
import ImageAndTextBlock from "./ImageAndTextBlock";
import "../base.css";

const ThreeImageBlock: React.FC = () => {
  return (
    <section className="relative">
      <ImageAndTextBlock
        className=""
        heading="Something"
        direction="right"
        background="dark"
        text="Donec eget ex magna. Interdum et malesuada fames ac ante ipsum primis in faucibus. Pellentesque venenatis dolor imperdiet dolor mattis sagittis. Praesent rutrum sem diam, vitae egestas enim auctor sit amet. Pellentesque leo mauris, consectetur id ipsum sit amet,fergiat. Pellentesque in mi eu massa lacinia malesuada et a elit. Donec urna ex, lacinia in purus ac, pretium pulvinar mauris. Curabitur sapien risus, commodo eget turpis at, elementum convallis elit. Pellentesque enim turpis, hendrerit. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis dapibus rutrum facilisis. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos."
      />

      <div className="hidden top-3 md:block h-28 bg-gradient-to-br from-dark-pink from-50% to-medium-pink to-50%"></div>
      {/* <div className="hidden overflow-hidden md:block h-[3.5rem]  bg-dark-pink -skew-y-[4deg] "></div> */}
      {/* <div className="hidden  md:block h-[3.5rem]  bg-medium-pink -skew-y-[4deg] "></div> */}

      <ImageAndTextBlock
        className=""
        heading="Something Else"
        direction="left"
        background="medium"
        text="Donec eget ex magna. Interdum et malesuada fames ac ante ipsum primis in faucibus. Pellentesque venenatis dolor imperdiet dolor mattis sagittis. Praesent rutrum sem diam, vitae egestas enim auctor sit amet. Pellentesque leo mauris, consectetur id ipsum sit amet,fergiat. Pellentesque in mi eu massa lacinia malesuada et a elit. Donec urna ex, lacinia in purus ac, pretium pulvinar mauris. Curabitur sapien risus, commodo eget turpis at, elementum convallis elit. Pellentesque enim turpis, hendrerit. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis dapibus rutrum facilisis. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos."
      />

      <div className="hidden md:block h-28 bg-gradient-to-bl from-medium-pink from-50% to-light-pink to-50%"></div>

      <ImageAndTextBlock
        className=""
        heading="A Third Something"
        direction="right"
        background="light"
        text="Donec eget ex magna. Interdum et malesuada fames ac ante ipsum primis in faucibus. Pellentesque venenatis dolor imperdiet dolor mattis sagittis. Praesent rutrum sem diam, vitae egestas enim auctor sit amet. Pellentesque leo mauris, consectetur id ipsum sit amet,fergiat. Pellentesque in mi eu massa lacinia malesuada et a elit. Donec urna ex, lacinia in purus ac, pretium pulvinar mauris. Curabitur sapien risus, commodo eget turpis at, elementum convallis elit. Pellentesque enim turpis, hendrerit. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis dapibus rutrum facilisis. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos."
      />
    </section>
  );
};

export default ThreeImageBlock;
