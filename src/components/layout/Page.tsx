import * as React from "react";

const Page = ({ children }: { children: React.ReactNode }) => {
  return (
    <div className="min-h-screen flex items-center justify-center relative">
      <div className="container">{children}</div>
    </div>
  );
};

export default Page;
