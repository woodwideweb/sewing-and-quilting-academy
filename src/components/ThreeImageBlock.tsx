import React from "react";
import ImageAndTextBlock from "./ImageAndTextBlock";
import "../base.css";

const ThreeImageBlock: React.FC = () => {
  return (
    <>
      <ImageAndTextBlock
        className="-mbx-10 z-[2] md:clip-test"
        heading="Something"
        direction="right"
        background="dark"
        text="Donec eget ex magna. Interdum et malesuada fames ac ante ipsum primis in faucibus. Pellentesque venenatis dolor imperdiet dolor mattis sagittis. Praesent rutrum sem diam, vitae egestas enim auctor sit amet. Pellentesque leo mauris, consectetur id ipsum sit amet,fergiat. Pellentesque in mi eu massa lacinia malesuada et a elit. Donec urna ex, lacinia in purus ac, pretium pulvinar mauris. Curabitur sapien risus, commodo eget turpis at, elementum convallis elit. Pellentesque enim turpis, hendrerit. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis dapibus rutrum facilisis. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos."
      />

      {/* <div className="hidden z-[1] relative md:block h-28 bg-gradient-to-br from-dark-pink from-50% to-transparent to-50%"></div> */}
      {/* <div className="hidden relative z-[3] -mt-28 md:block h-28 bg-gradient-to-br from-transparent from-50% to-medium-pink to-50%"></div> 9px */}

      <ImageAndTextBlock
        className="z-[11x] md:-mxt-20 md:clip-test2"
        heading="Something Else"
        direction="left"
        background="medium"
        text="Donec eget ex magna. Interdum et malesuada fames ac ante ipsum primis in faucibus. Pellentesque venenatis dolor imperdiet dolor mattis sagittis. Praesent rutrum sem diam, vitae egestas enim auctor sit amet. Pellentesque leo mauris, consectetur id ipsum sit amet,fergiat. Pellentesque in mi eu massa lacinia malesuada et a elit. Donec urna ex, lacinia in purus ac, pretium pulvinar mauris. Curabitur sapien risus, commodo eget turpis at, elementum convallis elit. Pellentesque enim turpis, hendrerit. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis dapibus rutrum facilisis. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos."
      />

      {/* <div className="hidden relative z-10 md:block h-28 bg-gradient-to-bl from-medium-pink from-50% to-light-pink to-50%"></div> */}

      <ImageAndTextBlock
        className="md:clip-test3"
        heading="A Third Something"
        direction="right"
        background="light"
        text="Donec eget ex magna. Interdum et malesuada fames ac ante ipsum primis in faucibus. Pellentesque venenatis dolor imperdiet dolor mattis sagittis. Praesent rutrum sem diam, vitae egestas enim auctor sit amet. Pellentesque leo mauris, consectetur id ipsum sit amet,fergiat. Pellentesque in mi eu massa lacinia malesuada et a elit. Donec urna ex, lacinia in purus ac, pretium pulvinar mauris. Curabitur sapien risus, commodo eget turpis at, elementum convallis elit. Pellentesque enim turpis, hendrerit. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis dapibus rutrum facilisis. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos."
      />
    </>
  );
};

export default ThreeImageBlock;
