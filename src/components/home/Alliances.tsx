import * as React from "react";
import { Carousel } from "react-responsive-carousel";
import Page from "../layout/Page";

import Header from "../../images/alliances.svg";
import Textura from "../../images/alliancesText.svg";

import Img1 from "../../images/alliances/1.svg";
import Img2 from "../../images/alliances/2.svg";
import Img3 from "../../images/alliances/3.svg";
import Img4 from "../../images/alliances/4.svg";
import Img5 from "../../images/alliances/5.svg";
import Img6 from "../../images/alliances/6.svg";
import Img7 from "../../images/alliances/7.svg";
import Img8 from "../../images/alliances/8.svg";
import Img9 from "../../images/alliances/9.svg";
import Img10 from "../../images/alliances/10.svg";
import Img11 from "../../images/alliances/11.svg";
import Img12 from "../../images/alliances/12.svg";
import Img13 from "../../images/alliances/13.svg";
import Img14 from "../../images/alliances/14.svg";
import Img15 from "../../images/alliances/15.svg";
import Img16 from "../../images/alliances/16.svg";
import Img17 from "../../images/alliances/17.svg";
import Img18 from "../../images/alliances/18.svg";
import Img19 from "../../images/alliances/19.svg";
import Img20 from "../../images/alliances/20.svg";
import Img21 from "../../images/alliances/21.svg";
import Img22 from "../../images/alliances/22.svg";
import Img23 from "../../images/alliances/23.svg";
import Img24 from "../../images/alliances/24.svg";
import Img25 from "../../images/alliances/25.svg";

import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader

const Alliances = () => {
  return (
    <Page>
      <div
        className="w-full h-[174px] absolute left-0 top-0 xl:bg-[size:100%]"
        style={{ backgroundImage: `url(${Header})` }}
      ></div>
      <img
        className={`absolute -top-36 md:top-0 -right-64 md:right-0`}
        alt="Header Text Alliances"
        src={Textura}
      />
      <h1
        id="alianzas"
        className={`text-primary text-3xl sm:text-5xl font-semibold text-center mb-12 mt-52 md:mt-[275px]`}
      >
        Nuestras alianzas
      </h1>
      <Carousel
        showThumbs={false}
        showArrows={false}
        showStatus={false}
        preventMovementUntilSwipeScrollTolerance={true}
        swipeScrollTolerance={50}
        className="mb-20"
      >
        <div className="">
          <div className="grid grid-cols-2 md:grid-cols-5 gap-8 items-center">
            <img src={Img1} alt="" className="px-8 sm:px-4 lg:px-8" />
            <img src={Img2} alt="" className="px-8 sm:px-4 lg:px-8" />
            <img src={Img3} alt="" className="px-8 sm:px-4 lg:px-8" />
            <img src={Img4} alt="" className="px-8 sm:px-4 lg:px-8" />
            <img src={Img5} alt="" className="px-8 sm:px-4 lg:px-8" />
            <img src={Img6} alt="" className="px-8 sm:px-4 lg:px-8" />
            <img src={Img7} alt="" className="px-8 sm:px-4 lg:px-8" />
            <img src={Img8} alt="" className="px-8 sm:px-4 lg:px-8" />
            <img src={Img9} alt="" className="px-8 sm:px-4 lg:px-8" />
            <img src={Img10} alt="" className="px-8 sm:px-4 lg:px-8" />
            <img src={Img11} alt="" className="px-8 sm:px-4 lg:px-8" />
            <img src={Img12} alt="" className="px-8 sm:px-4 lg:px-8" />
            <img src={Img13} alt="" className="px-8 sm:px-4 lg:px-8" />
            <img src={Img14} alt="" className="px-8 sm:px-4 lg:px-8" />
            <img src={Img15} alt="" className="px-8 sm:px-4 lg:px-8" />
            <img src={Img16} alt="" className="px-8 sm:px-4 lg:px-8" />
            <img src={Img17} alt="" className="px-8 sm:px-4 lg:px-8" />
            <img src={Img18} alt="" className="px-8 sm:px-4 lg:px-8" />
            <img src={Img19} alt="" className="px-8 sm:px-4 lg:px-8" />
            <img src={Img20} alt="" className="px-8 sm:px-4 lg:px-8" />
            <img src={Img21} alt="" className="px-8 sm:px-4 lg:px-8" />
            <img src={Img22} alt="" className="px-8 sm:px-4 lg:px-8" />
            <img src={Img23} alt="" className="px-8 sm:px-4 lg:px-8" />
            <img src={Img24} alt="" className="px-8 sm:px-4 lg:px-8" />
            <img src={Img25} alt="" className="px-8 sm:px-4 lg:px-8" />
          </div>
          <div className="text-primary font-semibold pt-8 pb-12">
            Alianzas locales
          </div>
        </div>
        <div className="">
          <div className="grid grid-cols-5 gap-8 items-center">
            <img src={Img1} alt="" className="px-8 sm:px-4 lg:px-8" />
            <img src={Img2} alt="" className="px-8 sm:px-4 lg:px-8" />
            <img src={Img3} alt="" className="px-8 sm:px-4 lg:px-8" />
            <img src={Img4} alt="" className="px-8 sm:px-4 lg:px-8" />
            <img src={Img5} alt="" className="px-8 sm:px-4 lg:px-8" />
            <img src={Img6} alt="" className="px-8 sm:px-4 lg:px-8" />
            <img src={Img7} alt="" className="px-8 sm:px-4 lg:px-8" />
            <img src={Img8} alt="" className="px-8 sm:px-4 lg:px-8" />
            <img src={Img9} alt="" className="px-8 sm:px-4 lg:px-8" />
            <img src={Img10} alt="" className="px-8 sm:px-4 lg:px-8" />
            <img src={Img11} alt="" className="px-8 sm:px-4 lg:px-8" />
            <img src={Img12} alt="" className="px-8 sm:px-4 lg:px-8" />
            <img src={Img13} alt="" className="px-8 sm:px-4 lg:px-8" />
            <img src={Img14} alt="" className="px-8 sm:px-4 lg:px-8" />
            <img src={Img15} alt="" className="px-8 sm:px-4 lg:px-8" />
            <img src={Img16} alt="" className="px-8 sm:px-4 lg:px-8" />
            <img src={Img17} alt="" className="px-8 sm:px-4 lg:px-8" />
            <img src={Img18} alt="" className="px-8 sm:px-4 lg:px-8" />
            <img src={Img19} alt="" className="px-8 sm:px-4 lg:px-8" />
            <img src={Img20} alt="" className="px-8 sm:px-4 lg:px-8" />
            <img src={Img21} alt="" className="px-8 sm:px-4 lg:px-8" />
            <img src={Img22} alt="" className="px-8 sm:px-4 lg:px-8" />
            <img src={Img23} alt="" className="px-8 sm:px-4 lg:px-8" />
            <img src={Img24} alt="" className="px-8 sm:px-4 lg:px-8" />
            <img src={Img25} alt="" className="px-8 sm:px-4 lg:px-8" />
          </div>
          <div className="text-primary font-semibold pt-8 pb-12">
            Alianzas internacionales
          </div>
        </div>
      </Carousel>
    </Page>
  );
};

export default Alliances;
