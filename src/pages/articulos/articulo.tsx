import React from "react";
import { useInView } from "react-intersection-observer";
import Layout from "../../components/layout/Layout";
import { HeadFC, Link, PageProps } from "gatsby";
import Image1 from "../../images/articles/image1.svg";

const Articulo: React.FC<PageProps> = () => {
  const { ref: refCircle, inView: inViewCircle } = useInView({
    threshold: 0.3,
    triggerOnce: true,
  });
  return (
    <Layout headerComplementary>
      <div
        ref={refCircle}
        className={`hidden sm:block w-40 h-40 bg-primary rounded-full absolute top-[95px] right-0  transition-all duration-1000 ${
          inViewCircle ? "opacity-100" : "opacity-0 right-24"
        }`}
      ></div>
      <div className="container">
        <div className="sm:w-2/3 sm:mx-auto">
          <h1 className="text-3xl sm:text-4xl mt-32 sm:mt-64 text-primary font-bold mb-0">
            Lorem ipsum dolor sit amet, consectetuer adipiscing elit.
          </h1>
          <p className="font-light text-primary mt-2 text-xl sm:text-2xl">
            Oct 30, 2023
          </p>
          <img className="mt-8 w-full" src={Image1} alt="" />
          <div className="my-12 flex flex-col gap-4 font-light text-lg sm:text-xl">
            <p>
              Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Lorem
              ipsum dolor sit amet, consectetuer adipiscing elit. Lorem ipsum
              dolor sit amet, consectetuer adipiscing elit. Lorem ipsum dolor
              sit amet, consectetuer adipiscing elit. Lorem ipsum dolor sit
              amet, consectetuer adipiscing elit. Lorem ipsum dolor sit amet,
              consectetuer adipiscing elit.
            </p>
            <p>
              Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Lorem
              ipsum dolor sit amet, consectetuer adipiscing elit. Lorem ipsum
              dolor sit amet, consectetuer adipiscing elit. Lorem ipsum dolor
              sit amet, consectetuer adipiscing elit. Lorem ipsum dolor sit
              amet, consectetuer adipiscing elit. Lorem ipsum dolor sit amet,
              consectetuer adipiscing elit.
            </p>
          </div>
          <div className="font-semibold text-primary text-xl">
            Comparte esto:
          </div>
          <div className="text-primary flex justify-between text-xl sm:text-2xl my-12">
            <Link to={"/"} className="hover:underline">
              Siguiente
            </Link>
            <Link to={"/articulos"} className="hover:underline">
              Ver todos
            </Link>
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default Articulo;

export const Head: HeadFC = () => <title>Artículos</title>;
