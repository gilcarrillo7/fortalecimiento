import * as React from "react";
import { useInView } from "react-intersection-observer";
import { Carousel } from "react-responsive-carousel";

import Textura from "../../images/testText.svg";

import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader

const Testimonies = () => {
  const { ref, inView } = useInView({ threshold: 0.3, triggerOnce: true });

  const tests = [
    {
      description:
        "La fusión del expertise de World Vision en materia de derechos de la niñez, junto con el expertise de CFOSC en temas de fortalecimiento es un match perfecto, un equilibrio para brindar más herramientas a los espacios que tienen una gran responsabilidad en cuanto al cuidado de la niñez.",
      author: "Yetzul Aguilar",
      role: "Oficial de Protección de la Niñez, World Vision México",
    },
    {
      description:
        "La fusión del expertise de World Vision en materia de derechos de la niñez, junto con el expertise de CFOSC en temas de fortalecimiento es un match perfecto, un equilibrio para brindar más herramientas a los espacios que tienen una gran responsabilidad en cuanto al cuidado de la niñez.",
      author: "Yetzul Aguilard",
      role: "Oficial de Protección de la Niñez, World Vision México",
    },
    {
      description:
        "La fusión del expertise de World Vision en materia de derechos de la niñez, junto con el expertise de CFOSC en temas de fortalecimiento es un match perfecto, un equilibrio para brindar más herramientas a los espacios que tienen una gran responsabilidad en cuanto al cuidado de la niñez.",
      author: "Yetzul Aguilafr",
      role: "Oficial de Protección de la Niñez, World Vision México",
    },
  ];
  return (
    <div id="testimonios" ref={ref} className="bg-complementary">
      <div className="flex flex-col items-center container py-8 sm:py-16">
        <div className="w-full lg:w-[992px]">
          <div className="flex items-center justify-start sm:justify-center mb-8 sm:mb-16">
            <img
              className={`md:mr-6 scale-50 md:scale-100 origin-left transition-all duration-1000 delay-700 ${
                inView ? "opacity-100" : "opacity-0"
              }`}
              alt=""
              src={Textura}
            />
            <div className="relative -ml-16 sm:ml-0">
              <h1
                className={`text-primary text-3xl sm:text-4xl sm:text-5xl font-semibold transition-all duration-1000 ${
                  inView ? "opacity-100" : "translate-y-24 opacity-0"
                }`}
              >
                Testimonios
              </h1>
              <div
                className={`absolute -right-32 top-1/2 -translate-y-1/2 bg-secundary w-[81px] h-[81px] rounded-full hidden sm:block transition-all duration-1000 delay-100 ${
                  inView ? "opacity-100" : "translate-x-24 opacity-0"
                }`}
              ></div>
              <div
                className={`absolute -bottom-12 right-0 bg-secundary w-[35px] h-[35px] rounded-full transition-all duration-1000 delay-300 ${
                  inView ? "opacity-100" : "translate-x-24 opacity-0"
                }`}
              ></div>
            </div>
          </div>
          <Carousel
            showThumbs={false}
            showArrows={false}
            showStatus={false}
            preventMovementUntilSwipeScrollTolerance={true}
            swipeScrollTolerance={50}
            className=""
            autoPlay={true}
            infiniteLoop={true}
          >
            {tests.map((test) => (
              <div key={test.author} className="text-left">
                <p className="text-xl sm:text-3xl font-light">
                  {test.description}
                </p>
                <p className="mt-8 text-xl sm:text-3xl text-primary">
                  {test.author}
                </p>
                <p className="font-bold pb-20 text-primary sm:text-lg">
                  {test.role}
                </p>
              </div>
            ))}
          </Carousel>
        </div>
      </div>
    </div>
  );
};

export default Testimonies;
