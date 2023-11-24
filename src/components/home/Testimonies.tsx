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
        "El CFOSC orientó nuestra planeación estratégica para clarificar la misión y determinar claramente los objetivos y los planes de trabajo. CFOSC es un gran aliado para todas las organizaciones civiles que requieren fortalecerse.",
      author: "Luis Alberto Fitzmaurice",
      role: "Presidente del Patronato, Cáritas Chihuahua",
    },
    {
      description:
        "El acompañamiento del CFOSC nos brindó las herramientas y metodologías para elaborar proyectos con altos estándares de calidad y confianza de nuestros donantes. Tienen una red muy amplia de especialistas, lo que nos posibilita tener un acercamiento a reconocidos consultores y talleristas.",
      author: "Javier Arreola",
      role: "Director operativo, Centro de Liderazgo y Desarrollo Humano",
    },
    {
      description:
        "El acompañamiento del CFOSC significó una renovación para la institución. Nos fortalecimos como equipo y como individuos, tenemos claridad en nuestro quehacer para responder a las necesidades hoy en día. Juntos hemos alcanzado otros niveles de fortalecimiento.",
      author: "Pbro. Enrique Batista Arias",
      role: "Director ejecutivo Pro Tarahumara, A.C.I.B.P",
    },
    {
      description:
        "El acompañamiento personalizado del CFOSC nos fortaleció en los aspectos legales y fiscales que debemos cumplir como donataria autorizada, además de profesionalizar nuestra gobernanza. El CFOSC orienta, apoya, encamina y lleva de la mano a las organizaciones para cumplir su misión.",
      author: "Salvador Rasura",
      role: "Presidente del consejo directivo Quinta Amigo, A.C.",
    },
    {
      description:
        "La Red de Discapacidad ha sido acompañada por el CFOSC en la Iniciativa por la Inclusión que nos ha permitido contar con asesores expertos y de talla internacional para ser punta de lanza y revolucionar el tema de la discapacidad.",
      author: "Daniela Huereca",
      role: "Consejera acompañante de FECHAC para la Red de Discapacidad",
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
