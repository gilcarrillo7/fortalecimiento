import React from "react";
import { navigate } from "gatsby";
import { Helmet } from "react-helmet";
import { setMenuOpen, selectMenuOpen } from "../../features/ui/uiSlice";
import { useAppDispatch, useAppSelector } from "../../hooks";
import Menu from "./Menu";
import HamburgerMenu from "./HamburgerMenu";

import Logo from "../../images/logo.svg";
import LogoSide from "../../images/logoSide.svg";
import LogoWhite from "../../images/logoWhite.svg";
import LogoSideWhite from "../../images/logoSideWhite.svg";

const Header = ({ headerPrimary = false }: { headerPrimary?: boolean }) => {
  const dispatch = useAppDispatch();

  const menuOpen = useAppSelector(selectMenuOpen);

  return (
    <header className={`${headerPrimary ? "bg-primary" : "bg-transparent"}`}>
      <div className="container flex justify-between items-center py-4">
        <div className="flex justify-between items-center gap-2 sm:gap-8 z-50">
          <a
            href="#"
            onClick={() => {
              dispatch(setMenuOpen(false));
              navigate("/");
            }}
            className="p-0"
          >
            <img
              src={menuOpen || headerPrimary ? LogoWhite : Logo}
              alt="Fortalecimiento Logo"
              className="w-36"
            />
          </a>
          <img
            src={menuOpen || headerPrimary ? LogoSideWhite : LogoSide}
            alt="Fortalecimiento Logo 20 años"
            className="w-36"
          />
        </div>
        <HamburgerMenu headerPrimary={headerPrimary} />
      </div>
      {menuOpen && (
        <>
          <Menu />
          <Helmet
            bodyAttributes={{
              class: `${menuOpen ? "overflow-hidden" : ""}`,
            }}
          />
        </>
      )}
    </header>
  );
};

export default Header;
