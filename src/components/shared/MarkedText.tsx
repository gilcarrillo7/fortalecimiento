import * as React from "react";

const MarkedText = ({
  className,
  children,
}: {
  className?: string;
  children: React.ReactNode;
}) => {
  return (
    <span className={`${className} relative inline-block`}>
      <span className="z-10 relative">{children}</span>
      <span
        className={`inline-block absolute h-full z-0 left-0 top-0 bg-secundary transition-all duration-700 delay-300 ease-in-out markedtext`}
      ></span>
    </span>
  );
};

export default MarkedText;
