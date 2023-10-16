import * as React from "react";
import Page from "../layout/Page";
import Textura from "../../images/section5Textura.svg";
import Textura2 from "../../images/section5Textura2.svg";

const Circle = ({ className }: { className: string }) => {
  return (
    <div
      className={`${className} bg-secundary w-[103px] h-[103px] sm:w-[135px] sm:h-[135px] rounded-full`}
    ></div>
  );
};

const Section5 = () => {
  return (
    <Page>
      <div className="pb-24 md:pb-0">
        <img
          className="relative md:absolute md:-top-24 left-1/2 -translate-x-1/2 my-8 md:my-0"
          src={Textura}
          alt=""
        />
        <div className="">
          <p className="text-xl sm:text-3xl text-primary text-light md:w-2/3 lg:w-1/2">
            Entendemos al fortalecimiento como un proceso{" "}
            <span className="bg-secundary">
              por el cual se generan y/o robustecen capacidades institucionales
              de gestión, análisis, sistematización y evaluación de los
              procedimientos, políticas, planes y programas de las OSC, al mismo
              tiempo que se acompaña y capacita a las personas que integran las
              organizaciones para que desarrollen y fortalezcan sus habilidades
              profesionales.
            </span>
          </p>
        </div>
        <Circle className="hidden md:block absolute right-1/4 top-24" />
        <img
          className="relative mt-12 md:mt-0 md:absolute left-1/2 md:left-3/4 -translate-x-1/2 md:top-1/2 scale-75 md:scale-100"
          src={Textura2}
          alt=""
        />
        <Circle className="absolute left-1/2 md:left-3/4 -translate-x-1/2 -bottom-16 md:-bottom-12" />
      </div>
    </Page>
  );
};

export default Section5;
