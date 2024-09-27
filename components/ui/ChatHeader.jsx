import React from "react";
import Image from "next/image";
import place from "@/public/placeholder.png";

const ChatHeader = () => {
  return (
    <div className="h-16 w-full bg-slate-600 flex justify-between items-center">
      <div className="ml-3 flex gap-1 items-center">
        <div className="overflow-hidden object-cover object-center rounded-full bg-red-50">
          <Image
            src={place}
            alt="profile"
            width={30}
            // className="h-full w-max"
          />
        </div>
        <h2 className=" h-full text-lg font-semibold text-white">Anurag</h2>
      </div>
      <div className="flex gap-2 mr-4">
        <div className="h-10 w-10 bg-white rounded-xl"></div>
        <div className="h-10 w-10 bg-white rounded-xl"></div>
      </div>
    </div>
  );
};

export default ChatHeader;
