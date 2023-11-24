import * as React from "react";
import { useInView } from "react-intersection-observer";
import Page from "../layout/Page";
import MarkedText from "../shared/MarkedText";
import Button from "../shared/Button";
import Triangle from "../../images/oferta/triangle.svg";

const Fortalecimiento = () => {
  const { ref, inView } = useInView({ threshold: 0.3, triggerOnce: true });

  return (
    <Page className="">
      <div className="flex flex-col sm:flex-row items-center">
        <div className="sm:order-3 w-full sm:w-1/2">
          <img
            ref={ref}
            className={`mt-16 sm:mt-0 transition-all duration-1000 delay-100 ${
              inView ? "opacity-100" : "opacity-0 translate-x-32"
            }`}
            src={Triangle}
            alt=""
          />
        </div>
        <div className="sm:w-[10%] sm:order-2"></div>
        <div className="sm:order-1 w-full sm:w-2/5">
          <MarkedText className="font-bold text-primary mb-4">
            En el CFOSC apostamos por el fortalecimiento institucional para
            apoyar a las organizaciones a lograr su misión.
          </MarkedText>
          <p className="mb-4">
            Nuestro modelo de intervención está diseñado para acompañar a las
            organizaciones en la generación de capacidades institucionales y
            profesionales a través de recursos como asesorías, capacitaciones y
            vinculaciones, en las dimensiones metodológica, financiera y
            orgánica, de forma que esto contribuya a la sostenibilidad
            institucional.
          </p>
          <p className="mb-12">Conoce más sobre nuestra metodología.</p>
          <div className="text-center sm:text-left">
            <Button variant="white" className="">
              Descárgalo aquí
            </Button>
          </div>
        </div>
      </div>
    </Page>
  );
};

export default Fortalecimiento;
