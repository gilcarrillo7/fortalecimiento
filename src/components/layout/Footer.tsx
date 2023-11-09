import * as React from "react";
import LogoWhite from "../../images/logoWhite.svg";
import Social from "./Social";

const Footer = () => {
  return (
    <footer>
      <div className="bg-primary text-white font-light">
        <div className="container">
          <div className="flex flex-col sm:flex-row justify-between items-center pt-8 sm:pt-4">
            <img src={LogoWhite} alt="Logo" className="max-w-[180px] mb-8 sm:mb-0" />
            <Social />
          </div>
          <div className="py-4 flex flex-col sm:flex-row justify-between items-center text-sm sm:text-base">
            <p className="text-center sm:text-left my-4">
              © CEFOSC {new Date().getFullYear()} 2023. Todos los derechos
              reservados | Aviso de privacidad
            </p>
            <p className="text-center sm:text-right">
              Diseño y desarrollo web por{" "}
              <a
                href="https://trazovivo.com"
                target="_blank"
                className="underline"
                rel="noreferrer"
              >
                Trazo Vivo
              </a>
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
