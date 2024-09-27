import React from "react";
import { Theme } from "@radix-ui/themes";

import CircleBtn from "@/components/ui/CircleBtn";
import Profile from "@/components/ui/Profile";
import ChatHeader from "./ui/ChatHeader";
import ConvoHeader from "./ui/ConvoHeader";


// import Logo from '@/public/icons/logo.svg'
import {setting,logo,search,write,support} from '@/public/icons'

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
          <CircleBtn PlaceHolder={logo}/>
          <CircleBtn PlaceHolder={setting}/>
          <CircleBtn PlaceHolder={search}/>
          <CircleBtn PlaceHolder={write}/>
          <CircleBtn PlaceHolder={support}/>
      
        </div>
        <div className="h-[100vh] w-1/3 bg-gray-700  border-r-2 border-red-500">
          <div className="h-28 w-full bg-gray-900 p-2">
            
            <ConvoHeader/>
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
