import * as React from "react";
import { navigate } from "gatsby";
import { useInView } from "react-intersection-observer";

import Button from "../../components/shared/Button";
import Page from "../../components/layout/Page";
import MarkedText from "../shared/MarkedText";

import ImageText1 from "../../images/homeText1.svg";
import ImageText2 from "../../images/homeText2.svg";
import Arrow from "../../images/homeArrow.svg";
import ImageApi from "../shared/ImageApi";

const Home = ({
  image,
  title,
  btntext,
  btnurl,
}: {
  image: number;
  title: string;
  btntext: string;
  btnurl: string;
}) => {
  const { ref, inView } = useInView({ threshold: 0.3, triggerOnce: true });
  return (
    <Page>
      <img
        src={ImageText1}
        className={`absolute left-1/2 top-1/2 -translate-y-1/2 -translate-x-1/2 -z-10 -mt-[120px] hidden sm:block transition-all duration-700 ${
          inView ? "opacity-100 -ml-[180px]" : "opacity-0 -ml-[100px]"
        }`}
        alt="home"
      />
      <img
        src={ImageText2}
        className={`absolute right-0 sm:-mt-20 sm:top-1/2 sm:-translate-y-1/2 transition-all duration-1000 ${
          inView ? "opacity-100" : "opacity-0"
        }`}
        alt="home"
      />
      <div className="relative flex flex-col sm:items-center text-center">
        <div className={`relative z-0 mb-12`}>
          <div
            className={`absolute -z-10 w-[352px] h-[352px] -left-[18px] -top-[18px] bg-secundary transition-all duration-1000 ${
              inView ? "opacity-100" : "opacity-0"
            }`}
          ></div>
          <ImageApi
            id={image}
            alt={"home"}
            className={`w-[315px] z-10 transition-all delay-500 duration-1000 ${
              inView ? "opacity-100" : "opacity-0"
            }`}
          />
          <img
            src={Arrow}
            className={`z-10 absolute transition-all delay-1000 duration-700 ${
              inView
                ? "opacity-100 right-0 sm:-right-24 -top-12"
                : "opacity-0 right-0 top-0"
            }`}
            alt="home"
          />
        </div>
        <p ref={ref} className="text-2xl sm:text-3xl">
          {title.split(".")[0]}.
          <br />
          <MarkedText className="text-primary font-bold">
            {title.split(".")[1]}.
          </MarkedText>
        </p>
        <Button
          variant="white"
          className="mt-8"
          onClick={() => navigate(btnurl !== "" ? btnurl : "/quienes_somos")}
        >
          {btntext}
        </Button>
      </div>
    </Page>
  );
};

export default Home;
