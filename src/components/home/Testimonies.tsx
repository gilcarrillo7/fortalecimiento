import * as React from "react";
import { useInView } from "react-intersection-observer";
import { Carousel } from "react-responsive-carousel";

import Textura from "../../images/testText.svg";

import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import { useAppDispatch, useAppSelector } from "../../hooks";
import { PostEnum } from "../../types/Enums";
import { fetchPosts, selectPosts } from "../../features/api/apiSlice";
import { AcfTestimonie } from "../../types";
import { useEffect } from "react";
import { TESTIMONIES } from "../../constants";
import Loader from "../shared/Loader";

const Testimonies = ({ title }: { title: string }) => {
  const testimonies = useAppSelector((state) =>
    selectPosts(state, PostEnum.TESTIMONIES)
  ) as AcfTestimonie[];
  const dispatch = useAppDispatch();
  const { ref, inView } = useInView({ threshold: 0.3, triggerOnce: true });

  useEffect(() => {
    dispatch(fetchPosts({ post: PostEnum.TESTIMONIES, id: TESTIMONIES }));
  }, []);

  return (
    <div id="testimonios" ref={ref} className="bg-complementary">
      <div className="flex flex-col items-center container py-8 sm:py-16">
        <div className="w-full lg:w-[992px]">
          <div className="flex items-center justify-start sm:justify-center mb-8 sm:mb-16">
            <img
              className={`md:mr-6 scale-50 md:scale-100 origin-left transition-all duration-1000 delay-700 ${
                inView ? "opacity-100" : "opacity-0"
              }`}
              alt=""
              src={Textura}
            />
            <div className="relative -ml-16 sm:ml-0">
              <h1
                className={`text-primary text-3xl sm:text-4xl sm:text-5xl font-semibold transition-all duration-1000 ${
                  inView ? "opacity-100" : "translate-y-24 opacity-0"
                }`}
              >
                {title}
              </h1>
              <div
                className={`absolute -right-32 top-1/2 -translate-y-1/2 bg-secundary w-[81px] h-[81px] rounded-full hidden sm:block transition-all duration-1000 delay-100 ${
                  inView ? "opacity-100" : "translate-x-24 opacity-0"
                }`}
              ></div>
              <div
                className={`absolute -bottom-12 right-0 bg-secundary w-[35px] h-[35px] rounded-full transition-all duration-1000 delay-300 ${
                  inView ? "opacity-100" : "translate-x-24 opacity-0"
                }`}
              ></div>
            </div>
          </div>
          {testimonies ? (
            <Carousel
              showThumbs={false}
              showArrows={false}
              showStatus={false}
              preventMovementUntilSwipeScrollTolerance={true}
              swipeScrollTolerance={50}
              className=""
              autoPlay={true}
              infiniteLoop={true}
            >
              {testimonies.map((test) => (
                <div key={test.person} className="text-left">
                  <p className="text-xl sm:text-3xl font-light">
                    {test.testimonio}
                  </p>
                  <p className="mt-8 text-xl sm:text-3xl text-primary">
                    {test.person}
                  </p>
                  <p className="font-bold pb-20 text-primary sm:text-lg">
                    {test.role}
                  </p>
                </div>
              ))}
            </Carousel>
          ) : (
            <Loader />
          )}
        </div>
      </div>
    </div>
  );
};

export default Testimonies;
