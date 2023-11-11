import * as React from "react";
import { navigate } from "gatsby";
import { setMenuOpen } from "../../features/ui/uiSlice";
import { useAppDispatch } from "../../hooks";
import Social from "./Social";
import MenuText from "../../images/menuText.svg";

const Option = ({ text, url }: { text: string; url: string }) => {
  const dispatch = useAppDispatch();

  const handleNav = (url: string) => {
    dispatch(setMenuOpen(false));
    navigate(url);
  };

  return (
    <a
      role="button"
      tabIndex={0}
      className="flex cursor-pointer"
      onClick={() => handleNav(url)}
    >
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
      <div className="container px-4 sm:px-10 sm:pb-8 sm:pt-16 flex flex-col w-screen sm:py-8">
        <div className="flex flex-col sm:flex-row text-2xl sm:text-4xl font-thin w-full gap-6 sm:gap-20 mb-16 sm:mb-24">
          <div className="flex flex-col gap-6 sm:gap-12 sm:w-1/2">
            <Option text="Quienes somos" url="/quienes_somos" />
            <Option text="Qué hacemos" url="" />
            <Option text="Modelo de intervención" url="" />
            <Option text="Alianzas" url="/#alianzas" />
          </div>
          <div className="flex flex-col gap-6 sm:gap-12 sm:w-1/2">
            <Option text="Nuestra oferta" url="" />
            <Option text="Aula Virtual" url="" />
            <Option text="Testimonios" url="/#testimonios" />
            <Option text="Contacto" url="/#contacto" />
          </div>
        </div>
        <Social />
        <img src={MenuText} className="absolute right-0 top-1/2 -translate-y-1/2" alt="" />
      </div>
    </div>
  );
};

export default Menu;
