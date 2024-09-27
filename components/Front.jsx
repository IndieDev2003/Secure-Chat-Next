import React from "react";
import { Theme } from "@radix-ui/themes";

import CircleBtn from "@/components/ui/CircleBtn";
import Profile from "@/components/ui/Profile";
import ChatHeader from "./ui/ChatHeader";

const Front = () => {
  return (
    <Theme
      accentColor="mint"
      grayColor="gray"
      panelBackground="solid"
      scaling="100%"
      radius="full"
    >
      <div className="flex">
        <div className="h-[100vh] w-20 bg-gray-600 flex flex-col justify-start items-center p-1">
          <CircleBtn />
          <CircleBtn />
          <CircleBtn />
          <CircleBtn />
          <CircleBtn />
          <CircleBtn />
        </div>
        <div className="h-[100vh] w-1/3 bg-gray-700">
          <div className="h-28 w-full bg-gray-900 p-5">
            <h2 className="text-2xl text-white font-thin">Secure Chat</h2>
          </div>
          <Profile />
        </div>
        <div className="h-[100vh] w-full bg-gray-800">
          <ChatHeader/>
        </div>
      </div>
    </Theme>
  );
};

export default Front;
