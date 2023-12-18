import * as React from "react";
import { useInView } from "react-intersection-observer";

import Page from "../layout/Page";
import Button from "../shared/Button";
import { navigate } from "gatsby";
import { useMemo } from "react";

const Circle = ({ img = 0, index }: { img?: number; index: number }) => {
  const { ref, inView } = useInView({ threshold: 0.3, triggerOnce: true });
  const style = img !== 0 ? { backgroundImage: `url(${img})` } : {};
  const delay = `delay-[${index * 100}ms]`;

  return (
    <div
      ref={ref}
      className={`group [perspective:1000px] w-[97px] xl:w-[135px] h-[97px] xl:h-[135px] transition-all duration-1000 ${delay} ${
        index > 11 ? "hidden xl:flex" : ""
      } ${inView ? "opacity-100" : "opacity-0"}`}
    >
      <div className="relative h-full w-full transition-all duration-500 [transform-style:preserve-3d] group-hover:[transform:rotateY(180deg)]">
        <div
          className={`absolute rounded-full w-full h-full ${
            img !== 0 ? "bg-[size:97px] sm:bg-[size:135px]" : "bg-secundary"
          }`}
          style={style}
        >
          {/* back content */}
        </div>
        <div
          className={`absolute rounded-full my-rotate-y-180 w-full h-full [backface-visibility:hidden] [transform:rotateY(180deg)] ${
            img !== 0 ? "" : "bg-primary"
          }`}
        ></div>
      </div>
    </div>
  );
};

const Section2 = ({
  content,
  image1,
  image2,
  image3,
  image4,
  btntext,
  btnurl,
}: {
  content: string;
  image1: number;
  image2: number;
  image3: number;
  image4: number;
  btntext: string;
  btnurl: string;
}) => {
  const images = useMemo(
    () => [0, 0, image1, 0, 0, 0, 0, 0, 0, image2, 0, image3, 0, 0, image4, 0],
    [image1, image2, image3, image4]
  );
  return (
    <Page>
      <div className="flex flex-col md:flex-row gap-8">
        <div className="md:w-1/2 md:order-3 flex justify-center items-center">
          <div className="flex flex-wrap w-[291px] xl:w-[540px]">
            {images.map((img, i) => (
              <Circle key={`${i}imgcirlce`} img={img} index={i} />
            ))}
          </div>
        </div>
        <div className="w-0 md:w-[10%] md:order-2"></div>
        <div className="md:w-2/5 md:order-1 flex flex-col justify-center">
          <div
            className="flex flex-col gap-4 mb-8"
            dangerouslySetInnerHTML={{ __html: content }}
          />
          <div className="mb-12 md:mb-0">
            <Button
              variant="white"
              onClick={() =>
                navigate(btnurl !== "" ? btnurl : "/nuestra_oferta")
              }
            >
              {btntext}
            </Button>
          </div>
        </div>
      </div>
    </Page>
  );
};

export default Section2;
