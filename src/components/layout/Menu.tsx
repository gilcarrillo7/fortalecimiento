import * as React from "react";
import { navigate } from "gatsby";
import { setMenuOpen } from "../../features/ui/uiSlice";
import { useAppDispatch } from "../../hooks";
import Social from "./Social";

const Option = ({ text, url }: { text: string; url: string }) => {
  const dispatch = useAppDispatch();

  const handleNav = (url: string) => {
    dispatch(setMenuOpen(false));
    navigate(url);
  };

  return (
    <a className="flex" onClick={() => handleNav(url)}>
      <div className="relative">
        {text}
        <div className="w-full h-[0.5px] opacity-60 bg-white absolute -bottom-1 " />
      </div>
    </a>
  );
};

const Menu = () => {
  return (
    <div className="w-screen h-screen bg-primary text-white fixed left-0 top-0 z-20 flex items-center text-white font-light">
      <div className="px-4 sm:px-8 flex flex-col w-screen">
        <div className="flex flex-col sm:flex-row text-2xl sm:text-4xl font-thin w-full gap-6 sm:gap-20 mb-16 sm:mb-24">
          <div className="flex flex-col gap-6 sm:gap-12 sm:w-1/2">
            <Option text="Quienes somos" url="" />
            <Option text="Qué hacemos" url="" />
            <Option text="Modelo de intervención" url="" />
            <Option text="Alianzas" url="" />
          </div>
          <div className="flex flex-col gap-6 sm:gap-12 sm:w-1/2">
            <Option text="Nuestra oferta" url="" />
            <Option text="Aula Virtual" url="" />
            <Option text="Testimonios" url="" />
            <Option text="Contacto" url="" />
          </div>
        </div>
        <Social />
      </div>
    </div>
  );
};

export default Menu;
