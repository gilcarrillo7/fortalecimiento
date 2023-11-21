import * as React from "react";
import { useInView } from "react-intersection-observer";

const Article = ({
  image,
  title,
  description,
  link,
}: {
  image: string;
  title: string;
  description: string;
  link: string;
}) => {
  const { ref, inView } = useInView({ threshold: 0.3, triggerOnce: true });
  return (
    <div
      ref={ref}
      className={`flex flex-col transition-all duration-1000 ${
        inView ? "opacity-100" : "opacity-0 translate-y-32"
      }`}
    >
      <img className="" alt="" src={image} />
      <h3 className="underline text-primary text-xl my-4 font-medium">
        {title}
      </h3>
      <p className="text-sm mb-3">{description}</p>
      <a
        href={link}
        className="font-bold text-sm font-bold text-primary text-xs"
      >
        Seguir leyendo →
      </a>
    </div>
  );
};

export default Article;
