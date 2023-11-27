import * as React from "react";
import { Carousel } from "react-responsive-carousel";
import Page from "../layout/Page";

import Header from "../../images/alliances.svg";
import Textura from "../../images/alliancesText.svg";

import Img1 from "../../images/alliances/locales/01.png";
import Img2 from "../../images/alliances/locales/02.png";
import Img3 from "../../images/alliances/locales/03.png";
import Img4 from "../../images/alliances/locales/04.png";
import Img5 from "../../images/alliances/locales/05.png";
import Img6 from "../../images/alliances/locales/06.png";
import Img7 from "../../images/alliances/locales/07.png";
import Img8 from "../../images/alliances/locales/08.png";
import Img9 from "../../images/alliances/locales/09.png";
import Img10 from "../../images/alliances/locales/10.png";
import Img11 from "../../images/alliances/locales/11.png";
import Img12 from "../../images/alliances/locales/12.png";
import Img13 from "../../images/alliances/locales/13.png";
import Img14 from "../../images/alliances/locales/14.png";
import Img15 from "../../images/alliances/locales/15.png";
import Img16 from "../../images/alliances/locales/16.png";
import Img17 from "../../images/alliances/locales/17.png";
import Img18 from "../../images/alliances/locales/18.png";
import Img19 from "../../images/alliances/locales/19.png";
import Img20 from "../../images/alliances/locales/20.png";
import Img21 from "../../images/alliances/locales/21.png";
import Img22 from "../../images/alliances/locales/22.png";
import Img23 from "../../images/alliances/locales/23.png";
import Img24 from "../../images/alliances/locales/24.png";
import Img25 from "../../images/alliances/locales/25.png";

import ImgNac0 from "../../images/alliances/nacionales/00.png";
import ImgNac1 from "../../images/alliances/nacionales/01.png";
import ImgNac2 from "../../images/alliances/nacionales/02.png";
import ImgNac3 from "../../images/alliances/nacionales/03.png";
import ImgNac4 from "../../images/alliances/nacionales/04.png";
import ImgNac5 from "../../images/alliances/nacionales/05.png";
import ImgNac6 from "../../images/alliances/nacionales/06.png";
import ImgNac7 from "../../images/alliances/nacionales/07.png";
import ImgNac8 from "../../images/alliances/nacionales/08.png";
import ImgNac9 from "../../images/alliances/nacionales/09.png";
import ImgNac10 from "../../images/alliances/nacionales/10.png";
import ImgNac11 from "../../images/alliances/nacionales/11.png";
import ImgNac12 from "../../images/alliances/nacionales/12.png";
import ImgNac13 from "../../images/alliances/nacionales/13.jpg";
import ImgNac14 from "../../images/alliances/nacionales/14.png";
import ImgNac15 from "../../images/alliances/nacionales/15.png";
import ImgNac16 from "../../images/alliances/nacionales/16.png";
import ImgNac17 from "../../images/alliances/nacionales/17.png";
import ImgNac18 from "../../images/alliances/nacionales/18.png";
import ImgNac19 from "../../images/alliances/nacionales/19.png";
import ImgNac20 from "../../images/alliances/nacionales/20.png";
import ImgNac21 from "../../images/alliances/nacionales/21.png";
import ImgNac22 from "../../images/alliances/nacionales/22.png";
import ImgNac23 from "../../images/alliances/nacionales/23.png";
import ImgNac24 from "../../images/alliances/nacionales/24.png";

import ImgInt1 from "../../images/alliances/internacionales/01.png";
import ImgInt2 from "../../images/alliances/internacionales/02.png";
import ImgInt3 from "../../images/alliances/internacionales/03.png";
import ImgInt4 from "../../images/alliances/internacionales/04.png";
import ImgInt5 from "../../images/alliances/internacionales/05.png";
import ImgInt6 from "../../images/alliances/internacionales/06.png";
import ImgInt7 from "../../images/alliances/internacionales/07.png";
import ImgInt8 from "../../images/alliances/internacionales/08.png";

import ImgCer1 from "../../images/alliances/certificaciones/01.png";
import ImgCer2 from "../../images/alliances/certificaciones/02.png";
import ImgCer3 from "../../images/alliances/certificaciones/03.png";
import ImgCer4 from "../../images/alliances/certificaciones/04.png";

import ImgCop1 from "../../images/alliances/cooperantes/01.png";
import ImgCop2 from "../../images/alliances/cooperantes/02.png";
import ImgCop3 from "../../images/alliances/cooperantes/03.png";
import ImgCop4 from "../../images/alliances/cooperantes/04.png";
import ImgCop5 from "../../images/alliances/cooperantes/05.png";
import ImgCop6 from "../../images/alliances/cooperantes/06.png";
import ImgCop7 from "../../images/alliances/cooperantes/07.png";
import ImgCop8 from "../../images/alliances/cooperantes/08.png";
import ImgCop9 from "../../images/alliances/cooperantes/09.png";
import ImgCop10 from "../../images/alliances/cooperantes/10.png";
import ImgCop11 from "../../images/alliances/cooperantes/11.png";
import ImgCop12 from "../../images/alliances/cooperantes/12.png";
import ImgCop13 from "../../images/alliances/cooperantes/13.png";
import ImgCop14 from "../../images/alliances/cooperantes/14.png";

import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader

const Alliances = () => {
  return (
    <Page>
      <div
        id="alianzas"
        className="w-full h-[174px] absolute left-0 top-0 xl:bg-[size:100%]"
        style={{ backgroundImage: `url(${Header})` }}
      ></div>
      <img
        className={`absolute -top-36 md:top-0 -right-64 md:right-0`}
        alt="Header Text Alliances"
        src={Textura}
      />
      <h1
        className={`text-primary text-3xl sm:text-5xl font-semibold mb-12 mt-52 md:mt-[275px]`}
      >
        Nuestras alianzas
      </h1>
      <Carousel
        showThumbs={false}
        showArrows={false}
        showStatus={false}
        preventMovementUntilSwipeScrollTolerance={true}
        swipeScrollTolerance={50}
        className="mb-20 relative"
        infiniteLoop={true}
        autoPlay={true}
      >
        <div className="pb-12">
          <div className="grid grid-cols-2 md:grid-cols-5 gap-8 items-center pb-20">
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
          <div className="text-primary font-semibold pt-8 pb-12 absolute bottom-8 -translate-x-1/2 left-1/2">
            Alianzas locales
          </div>
        </div>
        <div className="pb-12">
          <div className="grid grid-cols-5 gap-8 items-center">
            <img src={ImgNac0} alt="" className="px-8 sm:px-4 lg:px-8" />
            <img src={ImgNac1} alt="" className="px-8 sm:px-4 lg:px-8" />
            <img src={ImgNac2} alt="" className="px-8 sm:px-4 lg:px-8" />
            <img src={ImgNac3} alt="" className="px-8 sm:px-4 lg:px-8" />
            <img src={ImgNac4} alt="" className="px-8 sm:px-4 lg:px-8" />
            <img src={ImgNac5} alt="" className="px-8 sm:px-4 lg:px-8" />
            <img src={ImgNac6} alt="" className="px-8 sm:px-4 lg:px-8" />
            <img src={ImgNac7} alt="" className="px-8 sm:px-4 lg:px-8" />
            <img src={ImgNac8} alt="" className="px-8 sm:px-4 lg:px-8" />
            <img src={ImgNac9} alt="" className="px-8 sm:px-4 lg:px-8" />
            <img src={ImgNac10} alt="" className="px-8 sm:px-4 lg:px-8" />
            <img src={ImgNac11} alt="" className="px-8 sm:px-4 lg:px-8" />
            <img src={ImgNac12} alt="" className="px-8 sm:px-4 lg:px-8" />
            <img src={ImgNac13} alt="" className="px-8 sm:px-4 lg:px-8" />
            <img src={ImgNac14} alt="" className="px-8 sm:px-4 lg:px-8" />
            <img src={ImgNac15} alt="" className="px-8 sm:px-4 lg:px-8" />
            <img src={ImgNac16} alt="" className="px-8 sm:px-4 lg:px-8" />
            <img src={ImgNac17} alt="" className="px-8 sm:px-4 lg:px-8" />
            <img src={ImgNac18} alt="" className="px-8 sm:px-4 lg:px-8" />
            <img src={ImgNac19} alt="" className="px-8 sm:px-4 lg:px-8" />
            <img src={ImgNac20} alt="" className="px-8 sm:px-4 lg:px-8" />
            <img src={ImgNac21} alt="" className="px-8 sm:px-4 lg:px-8" />
            <img src={ImgNac22} alt="" className="px-8 sm:px-4 lg:px-8" />
            <img src={ImgNac23} alt="" className="px-8 sm:px-4 lg:px-8" />
            <img src={ImgNac24} alt="" className="px-8 sm:px-4 lg:px-8" />
          </div>
          <div className="text-primary font-semibold pt-8 pb-12 absolute bottom-8 -translate-x-1/2 left-1/2">
            Alianzas nacionales
          </div>
        </div>
        <div className="pb-12">
          <div className="grid grid-cols-5 gap-8 items-center">
            <img src={ImgInt1} alt="" className="px-8 sm:px-4 lg:px-8" />
            <img src={ImgInt2} alt="" className="px-8 sm:px-4 lg:px-8" />
            <img src={ImgInt3} alt="" className="px-8 sm:px-4 lg:px-8" />
            <img src={ImgInt4} alt="" className="px-8 sm:px-4 lg:px-8" />
            <img src={ImgInt5} alt="" className="px-8 sm:px-4 lg:px-8" />
            <img src={ImgInt6} alt="" className="px-8 sm:px-4 lg:px-8" />
            <img src={ImgInt7} alt="" className="px-8 sm:px-4 lg:px-8" />
            <img src={ImgInt8} alt="" className="px-8 sm:px-4 lg:px-8" />
          </div>
          <div className="text-primary font-semibold pt-8 pb-12 absolute bottom-8 -translate-x-1/2 left-1/2">
            Alianzas internacionales
          </div>
        </div>
        <div className="pb-12">
          <div className="grid grid-cols-5 gap-8 items-center">
            <img src={ImgCer1} alt="" className="px-8 sm:px-4 lg:px-8" />
            <img src={ImgCer2} alt="" className="px-8 sm:px-4 lg:px-8" />
            <img src={ImgCer3} alt="" className="px-8 sm:px-4 lg:px-8" />
            <img src={ImgCer4} alt="" className="px-8 sm:px-4 lg:px-8" />
          </div>
          <div className="text-primary font-semibold pt-8 pb-12 absolute bottom-8 -translate-x-1/2 left-1/2">
            Acreditaciones y certificaciones
          </div>
        </div>
        <div className="pb-12">
          <div className="grid grid-cols-5 gap-8 items-center">
            <img src={ImgCop1} alt="" className="px-8 sm:px-4 lg:px-8" />
            <img src={ImgCop2} alt="" className="px-8 sm:px-4 lg:px-8" />
            <img src={ImgCop3} alt="" className="px-8 sm:px-4 lg:px-8" />
            <img src={ImgCop4} alt="" className="px-8 sm:px-4 lg:px-8" />
            <img src={ImgCop5} alt="" className="px-8 sm:px-4 lg:px-8" />
            <img src={ImgCop6} alt="" className="px-8 sm:px-4 lg:px-8" />
            <img src={ImgCop7} alt="" className="px-8 sm:px-4 lg:px-8" />
            <img src={ImgCop8} alt="" className="px-8 sm:px-4 lg:px-8" />
            <img src={ImgCop9} alt="" className="px-8 sm:px-4 lg:px-8" />
            <img src={ImgCop10} alt="" className="px-8 sm:px-4 lg:px-8" />
            <img src={ImgCop11} alt="" className="px-8 sm:px-4 lg:px-8" />
            <img src={ImgCop12} alt="" className="px-8 sm:px-4 lg:px-8" />
            <img src={ImgCop13} alt="" className="px-8 sm:px-4 lg:px-8" />
            <img src={ImgCop14} alt="" className="px-8 sm:px-4 lg:px-8" />
          </div>
          <div className="text-primary font-semibold pt-8 pb-12 absolute bottom-8 -translate-x-1/2 left-1/2">
            Cooperantes
          </div>
        </div>
      </Carousel>
    </Page>
  );
};

export default Alliances;
