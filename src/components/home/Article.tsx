import * as React from "react";
import { useInView } from "react-intersection-observer";
import ImageApi from "../shared/ImageApi";

const Article = ({
  image,
  title,
  description,
  linkText,
  link,
}: {
  image: number;
  title: string;
  description: string;
  linkText: string;
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
      <ImageApi id={image} alt={title} className={"sm:h-[280px] lg:h-[250px]"} />
      <h3 className="underline text-primary text-xl my-4 font-medium">
        {title}
      </h3>
      <p className="text-sm mb-3">{description}</p>
      <a
        href={link}
        className="font-bold text-sm font-bold text-primary text-xs hover:underline"
      >
        {linkText} →
      </a>
    </div>
  );
};

export default Article;
