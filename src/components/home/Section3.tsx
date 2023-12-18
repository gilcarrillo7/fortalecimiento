import * as React from "react";
import { useInView } from "react-intersection-observer";
import Imagen from "../../images/section3.jpg";
import Textura from "../../images/section3Textura.svg";
import ImagenIcon from "../../images/section3Img.svg";
import ImageApi from "../shared/ImageApi";

const Section3 = ({ content, image }: { content: string; image: number }) => {
  const { ref, inView } = useInView({ threshold: 0.3, triggerOnce: true });
  return (
    <div className="" ref={ref}>
      <div className="flex flex-col md:flex-row">
        <div className="flex">
          <div className="bg-complementary flex items-center justify-center w-1/2 md:w-[320px] md:h-[320px]">
            <img
              src={ImagenIcon}
              className={`transition-all duration-1000 delay-500 ${
                inView ? "opacity-100" : "opacity-0"
              }`}
              alt=""
            />
          </div>
          <img
            src={Textura}
            className={`w-1/2 md:w-auto md:h-full transition-all duration-1000 ${
              inView ? "opacity-100" : "opacity-0"
            }`}
            alt=""
          />
        </div>
        <div className="flex items-center jusitfy-center lg:pl-16 xl:pl-32">
          <div
            className={`p-4 transition-all duration-1000 delay-700 ${
              inView ? "opacity-100" : "translate-x-24 opacity-0"
            }`}
            dangerouslySetInnerHTML={{ __html: content }}
          />
        </div>
      </div>
      <ImageApi
        id={image}
        alt={""}
        className={`w-full transition-all duration-1000 delay-700 ${
          inView ? "opacity-100" : "translate-y-24 opacity-0"
        }`}
      />
    </div>
  );
};

export default Section3;
