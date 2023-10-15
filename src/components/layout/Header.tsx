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

const Header = () => {
  const dispatch = useAppDispatch();

  const menuOpen = useAppSelector(selectMenuOpen);

  return (
    <header>
      <div className="flex justify-between items-center px-4 sm:px-8 py-4">
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
              src={menuOpen ? LogoWhite : Logo}
              alt="Fortalecimiento Logo"
              className="origin-left scale-75 sm:scale-100"
            />
          </a>
          <img
            src={menuOpen ? LogoSideWhite : LogoSide}
            alt="Fortalecimiento Logo 20 años"
            className="origin-left scale-75 sm:scale-100"
          />
        </div>
        <HamburgerMenu />
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
