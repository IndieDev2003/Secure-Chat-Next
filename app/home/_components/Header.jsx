import React from "react";

import Link from "next/link";
import Image from "next/image";
import Logo from "@/public/icons/logo.svg";

const Header = () => {
  return (
    <div className="h-[50px] w-full sm:px-6 px-3 bg-gray-400 flex items-center justify-between">
      <Link href={"/"}>
        <div className="h-[50px] object-cover object-center flex items-center gap-3">
          <Image src={Logo} alt="Secure Chat" height={50} width={50} />
          <h1 className="text-white font-semibold sm:block hidden">Secure Chat</h1>
        </div>
      </Link>

      <div className="flex gap-3">
        <Link href={"https://github.com/indiedev2003"} target="blank">
          <h3 className="no-underline pl-2 pr-2 hover:bg-gray-50 hover:text-black text-white hover:border-2 rounded-lg">
            Github
          </h3>
        </Link>
        <Link href={"https://instagram.com/_gagansuman_"} target="blank">
          <h3 className="no-underline pl-2 pr-2 hover:bg-gray-50 hover:text-black text-white hover:border-2 rounded-lg">
            Contact Us
          </h3>
        </Link>
        <Link href={"https://instagram.com/_gagansuman_"} target="blank">
          <h3 className="no-underline pl-2 pr-2 hover:bg-gray-50 hover:text-black text-white hover:border-2 rounded-lg">
            About
          </h3>
        </Link>
      </div>
    </div>
  );
};

export default Header;
