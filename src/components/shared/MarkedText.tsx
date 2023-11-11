import * as React from "react";
import { useInView } from "react-intersection-observer";

const MarkedText = ({
  className,
  children,
}: {
  className?: string;
  children: React.ReactNode;
}) => {
  const { ref, inView } = useInView({ threshold: 0.3, triggerOnce: true });
  return (
    <span className={`${className} relative inline-block`} ref={ref}>
      <span className="z-10 relative">{children}</span>
      <span
        className={`inline-block absolute h-full z-0 left-0 top-0 bg-secundary transition-all duration-700 delay-300 ease-in-out ${
          inView ? "w-full" : "w-0"
        }`}
      ></span>
    </span>
  );
};

export default MarkedText;
