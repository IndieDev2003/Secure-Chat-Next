import React from "react";
import Link from "next/link";

const Hero = () => {
  return (
    <div className="flex flex-col h-96 w-full pl-3 pr-3">
      <div className="h-full w-full bg-gray-400  flex flex-col justify-center items-center">
        <h1 className="text-3xl text-center">
          Secure Your Communication With Us
        </h1>
        <h2 className="mt-3">Built Fully With Privacy In Mind</h2>
        <Link href={"https://google.com"}>
          <h2 className="text-xl mt-5 rounded-full border-2 pl-10 pr-10 py-1">
            Home
          </h2>
        </Link>
      </div>
    </div>
  );
};

export default Hero;
