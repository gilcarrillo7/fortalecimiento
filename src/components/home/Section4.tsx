import * as React from "react";
import { useInView } from "react-intersection-observer";
import Page from "../layout/Page";
import ImageApi from "../shared/ImageApi";

const Column = ({
  title,
  img,
  children,
}: {
  title: string;
  img: number;
  children: React.ReactNode;
}) => {
  const { ref, inView } = useInView({ threshold: 0.3, triggerOnce: true });
  return (
    <div
      ref={ref}
      className={`flex flex-col jusitfy-center items-center transition-all duration-1000 ${
        inView ? "" : ""
      }`}
    >
      <ImageApi
        id={img}
        alt={title}
        className={`max-w-[172px] md:max-w-[200px] transition-all duration-1000 delay-300 ${
          inView ? "opacity-100" : "translate-y-24 opacity-0"
        }`}
      />
      <p className="mt-12 text-primary text-xl text-center my-12">{title}</p>
      <div className="">{children}</div>
    </div>
  );
};

const Section4 = ({
  title,
  image1,
  title1,
  text1,
  image2,
  title2,
  text2,
  image3,
  title3,
  text3,
}: {
  title: string;
  title1: string;
  image1: number;
  text1: string;
  title2: string;
  image2: number;
  text2: string;
  title3: string;
  image3: number;
  text3: string;
}) => {
  return (
    <Page className="py-8 sm:py-16">
      <p
        className="text-2xl sm:text-3xl font-light text-center mb-12 sm:mb-32 lg:w-3/4 lg:mx-auto"
        dangerouslySetInnerHTML={{ __html: title }}
      />
      <div className="flex flex-col sm:flex-row gap-8">
        <Column title={title1} img={image1}>
          {text1}
        </Column>
        <Column title={title2} img={image2}>
          {text2}
        </Column>
        <Column title={title3} img={image3}>
          {text3}
        </Column>
      </div>
    </Page>
  );
};

export default Section4;
