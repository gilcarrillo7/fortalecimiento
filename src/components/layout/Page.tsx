import * as React from "react";

const Page = ({
  className,
  children,
}: {
  className?: string;
  children: React.ReactNode;
}) => {
  return (
    <div
      className={`min-h-screen flex items-center justify-center relative ${className}`}
    >
      <div className="container">{children}</div>
    </div>
  );
};

export default Page;
