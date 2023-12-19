import * as React from "react";
import { Carousel } from "react-responsive-carousel";
import Page from "../layout/Page";

import Textura from "../../images/alliancesText.svg";

import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import { useAppDispatch, useAppSelector } from "../../hooks";
import { fetchPage, selectPage } from "../../features/api/apiSlice";
import { AcfAlianzas } from "../../types";
import { useEffect, useState } from "react";
import { PagesEnum } from "../../types/Enums";
import ImageApi from "../shared/ImageApi";
import { BASE_URL } from "../../constants";

const Slide = ({ page }: { page: AcfAlianzas }) => {
  return (
    <>
      <div className="grid grid-cols-2 md:grid-cols-5 gap-8 items-center pb-20">
        {page.image_1 && (
          <ImageApi
            id={page.image_1}
            alt={""}
            className={"px-8 sm:px-4 lg:px-8"}
          />
        )}
        {page.image_2 && (
          <ImageApi
            id={page.image_2}
            alt={""}
            className={"px-8 sm:px-4 lg:px-8"}
          />
        )}
        {page.image_3 && (
          <ImageApi
            id={page.image_3}
            alt={""}
            className={"px-8 sm:px-4 lg:px-8"}
          />
        )}
        {page.image_4 && (
          <ImageApi
            id={page.image_4}
            alt={""}
            className={"px-8 sm:px-4 lg:px-8"}
          />
        )}
        {page.image_5 && (
          <ImageApi
            id={page.image_5}
            alt={""}
            className={"px-8 sm:px-4 lg:px-8"}
          />
        )}
        {page.image_6 && (
          <ImageApi
            id={page.image_6}
            alt={""}
            className={"px-8 sm:px-4 lg:px-8"}
          />
        )}
        {page.image_7 && (
          <ImageApi
            id={page.image_7}
            alt={""}
            className={"px-8 sm:px-4 lg:px-8"}
          />
        )}
        {page.image_8 && (
          <ImageApi
            id={page.image_8}
            alt={""}
            className={"px-8 sm:px-4 lg:px-8"}
          />
        )}
        {page.image_9 && (
          <ImageApi
            id={page.image_9}
            alt={""}
            className={"px-8 sm:px-4 lg:px-8"}
          />
        )}
        {page.image_10 && (
          <ImageApi
            id={page.image_10}
            alt={""}
            className={"px-8 sm:px-4 lg:px-8"}
          />
        )}
        {page.image_11 && (
          <ImageApi
            id={page.image_11}
            alt={""}
            className={"px-8 sm:px-4 lg:px-8"}
          />
        )}
        {page.image_12 && (
          <ImageApi
            id={page.image_12}
            alt={""}
            className={"px-8 sm:px-4 lg:px-8"}
          />
        )}
        {page.image_13 && (
          <ImageApi
            id={page.image_13}
            alt={""}
            className={"px-8 sm:px-4 lg:px-8"}
          />
        )}
        {page.image_14 && (
          <ImageApi
            id={page.image_14}
            alt={""}
            className={"px-8 sm:px-4 lg:px-8"}
          />
        )}
        {page.image_15 && (
          <ImageApi
            id={page.image_15}
            alt={""}
            className={"px-8 sm:px-4 lg:px-8"}
          />
        )}
        {page.image_16 && (
          <ImageApi
            id={page.image_16}
            alt={""}
            className={"px-8 sm:px-4 lg:px-8"}
          />
        )}
        {page.image_17 && (
          <ImageApi
            id={page.image_17}
            alt={""}
            className={"px-8 sm:px-4 lg:px-8"}
          />
        )}
        {page.image_18 && (
          <ImageApi
            id={page.image_18}
            alt={""}
            className={"px-8 sm:px-4 lg:px-8"}
          />
        )}
        {page.image_19 && (
          <ImageApi
            id={page.image_19}
            alt={""}
            className={"px-8 sm:px-4 lg:px-8"}
          />
        )}
        {page.image_20 && (
          <ImageApi
            id={page.image_20}
            alt={""}
            className={"px-8 sm:px-4 lg:px-8"}
          />
        )}
        {page.image_21 && (
          <ImageApi
            id={page.image_21}
            alt={""}
            className={"px-8 sm:px-4 lg:px-8"}
          />
        )}
        {page.image_22 && (
          <ImageApi
            id={page.image_22}
            alt={""}
            className={"px-8 sm:px-4 lg:px-8"}
          />
        )}
        {page.image_23 && (
          <ImageApi
            id={page.image_23}
            alt={""}
            className={"px-8 sm:px-4 lg:px-8"}
          />
        )}
        {page.image_24 && (
          <ImageApi
            id={page.image_24}
            alt={""}
            className={"px-8 sm:px-4 lg:px-8"}
          />
        )}
        {page.image_25 && (
          <ImageApi
            id={page.image_25}
            alt={""}
            className={"px-8 sm:px-4 lg:px-8"}
          />
        )}
      </div>
      <div className="text-primary font-semibold pt-8 pb-12 absolute bottom-8 -translate-x-1/2 left-1/2">
        {page.title}
      </div>
    </>
  );
};

const Alliances = ({ title, image }: { title: string; image: number }) => {
  const dispatch = useAppDispatch();
  const alLocales = useAppSelector((state) =>
    selectPage(state, PagesEnum.AL_LOCALES)
  ) as AcfAlianzas;
  const alNacionales = useAppSelector((state) =>
    selectPage(state, PagesEnum.AL_NACIONALES)
  ) as AcfAlianzas;
  const alInternacionales = useAppSelector((state) =>
    selectPage(state, PagesEnum.AL_INTERNACIONALES)
  ) as AcfAlianzas;

  const [style, setStyle] = useState({});

  useEffect(() => {
    dispatch(
      fetchPage({ page: PagesEnum.AL_LOCALES, slug: PagesEnum.AL_LOCALES })
    );
    dispatch(
      fetchPage({
        page: PagesEnum.AL_NACIONALES,
        slug: PagesEnum.AL_NACIONALES,
      })
    );
    dispatch(
      fetchPage({
        page: PagesEnum.AL_INTERNACIONALES,
        slug: PagesEnum.AL_INTERNACIONALES,
      })
    );
  }, []);

  useEffect(() => {
    const fetchData = async () => {
      const response = await fetch(`${BASE_URL}/media/${image}`);
      const data = await response.json();
      return data;
    };

    if (image && image !== 0) {
      fetchData()
        .then((res) =>
          setStyle({ backgroundImage: `url(${res.guid.rendered})` })
        )
        .catch(console.error);
    }
  }, [image]);

  return (
    <Page>
      <div
        id="alianzas"
        className="w-full h-[174px] absolute left-0 top-0 xl:bg-[size:100%] bg-[70%_15%]"
        style={style}
      ></div>
      <img
        className={`absolute -top-36 md:top-0 -right-64 md:right-0`}
        alt="Header Text Alliances"
        src={Textura}
      />
      <h1
        className={`text-primary text-3xl sm:text-5xl font-semibold mb-12 mt-52 md:mt-[275px]`}
      >
        {title}
      </h1>
      <Carousel
        showThumbs={false}
        showArrows={false}
        showStatus={false}
        preventMovementUntilSwipeScrollTolerance={true}
        swipeScrollTolerance={50}
        className="mb-20 relative"
        infiniteLoop={true}
        autoPlay={false}
      >
        <div className="pb-12">{alLocales && <Slide page={alLocales} />}</div>
        <div className="pb-12">
          {alNacionales && <Slide page={alNacionales} />}
        </div>
        <div className="pb-12">
          {alInternacionales && <Slide page={alInternacionales} />}
        </div>
      </Carousel>
    </Page>
  );
};

export default Alliances;
