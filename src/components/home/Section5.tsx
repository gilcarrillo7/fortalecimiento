import * as React from "react";
import { useInView } from "react-intersection-observer";
import Page from "../layout/Page";
import Textura from "../../images/section5Textura.svg";
import Textura2 from "../../images/section5Textura2.svg";
import Button from "../shared/Button";

const Circle = ({ className }: { className: string }) => {
  return (
    <div
      className={`${className} bg-secundary w-[103px] h-[103px] sm:w-[135px] sm:h-[135px] rounded-full`}
    ></div>
  );
};

const Section5 = ({
  content,
  centro_button,
  centro_url,
  aula_button,
  aula_url,
}: {
  content: string;
  centro_button: string;
  centro_url: string;
  aula_button: string;
  aula_url: string;
}) => {
  const { ref, inView } = useInView({ threshold: 0.3, triggerOnce: true });

  return (
    <Page>
      <div ref={ref} className="pb-24 md:pb-24 md:pt-[350px]">
        <img
          className="relative md:absolute md:top-8 left-1/2 -translate-x-1/2 my-8 md:my-0 -z-10"
          src={Textura}
          alt=""
        />
        <div className=" md:w-2/3 lg:w-1/2">
          <p
            className="text-xl sm:text-3xl text-primary text-light"
            dangerouslySetInnerHTML={{ __html: content }}
          />
          <div className="flex flex-col sm:flex-row gap-4 sm:gap-8 mt-6 p-0">
            <Button
              variant="white"
              className="mx-0 !px-2"
              onClick={() => (location.href = centro_url)}
            >
              {centro_button}
            </Button>
            <Button
              variant="primary"
              className="mx-0"
              onClick={() => (location.href = aula_url)}
            >
              {aula_button}
            </Button>
          </div>
        </div>
        <Circle
          className={`hidden md:block absolute left-1/2 md:left-3/4 -translate-x-1/2 top-64 transition-all duration-1000 ${
            inView ? "opacity-100" : "translate-y-24 opacity-0"
          }`}
        />
        <img
          className={`relative mt-12 md:mt-0 md:absolute left-1/2 md:left-3/4 -translate-x-1/2 md:top-1/2 md:mt-24 scale-75 md:scale-100 transition-all duration-1000 delay-300 ${
            inView ? "opacity-100" : "translate-y-24 opacity-0"
          }`}
          src={Textura2}
          alt=""
        />
        <Circle
          className={`absolute left-1/2 md:left-3/4 -translate-x-1/2 -bottom-16 md:-bottom-12 transition-all duration-1000 delay-500 ${
            inView ? "opacity-100" : "translate-y-24 opacity-0"
          }`}
        />
      </div>
    </Page>
  );
};

export default Section5;
