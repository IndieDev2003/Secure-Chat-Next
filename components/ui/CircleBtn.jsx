import React from "react";
import Link from "next/link";
import Image from "next/image";
import imgPlace from "@/public/placeholder.png";

const CircleBtn = ({ PlaceHolder, Redirect }) => {
  return (
    <div
      title="Hello"
      className="w-[40px] h-[40px] bg-white mt-3 rounded-2xl overflow-hidden hover:bg-gray-300 object-cover object-center"
    >
      <Link href="https://google.com" target="blank">
        <Image src={imgPlace} alt="placeholder" className="" />
      </Link>
      <h1>Title</h1>
    </div>
  );
};

export default CircleBtn;
