import React from "react";
import { setMenuOpen, selectMenuOpen } from "../../features/ui/uiSlice";
import { useAppDispatch, useAppSelector } from "../../hooks";

const HamburgerMenu = ({
  headerPrimary = false,
}: {
  headerPrimary?: boolean;
}) => {
  const dispatch = useAppDispatch();
  const menuOpen = useAppSelector(selectMenuOpen);

  return (
    <button
      className={`relative z-50 w-10 h-10 focus:outline-none bg-transparent transition duration-200 ease-in-out ${
        menuOpen || headerPrimary ? "text-white" : "text-black"
      }`}
      onClick={() => dispatch(setMenuOpen(!menuOpen))}
    >
      <span className="sr-only bg-gray">Menu</span>
      <div className="block w-8 absolute left-1/2 top-1/2 transform -translate-x-1/2 -translate-y-1/2">
        <span
          aria-hidden="true"
          className={`block absolute h-1 w-8 transform transition duration-500 ease-in-out ${
            menuOpen ? "-rotate-45 bg-white" : `-translate-y-3 bg-primary`
          } ${headerPrimary ? "bg-white" : ""}`}
        ></span>
        <span
          aria-hidden="true"
          className={`block absolute h-1 w-8 ${
            menuOpen ? "opacity-0" : "bg-primary"
          } ${
            headerPrimary ? "bg-white" : ""
          } transform transition duration-500 ease-in-out `}
        ></span>
        <span
          aria-hidden="true"
          className={`block absolute h-1 w-8 transform  transition duration-500 ease-in-out ${
            menuOpen ? "rotate-45 bg-white" : `translate-y-3 bg-primary`
          } ${headerPrimary ? "bg-white" : ""}`}
        ></span>
      </div>
    </button>
  );
};

export default HamburgerMenu;
