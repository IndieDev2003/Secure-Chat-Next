import React from 'react'
import Image from 'next/image'
import profilePlaceHolder from '@/public/icons/profile.svg'

const ConvoHeader = () => {
  return (
      <div className='flex flex-col text-white'>
          <h2 className='font-bold text-xl'>Secure Chat</h2>
          <div className='w-full flex justify-between items-center'>
              <div className='w-8/12 h-10 bg-gray-300 rounded-xl mt-1 mb-1'></div>
              <div className='h-10 w-10 bg-slate-100 rounded-full hover:bg-slate-400 object-cover object-center overflow-hidden'>
                  <Image src={profilePlaceHolder} alt=""/>
              </div>
          </div>
          <h3 className='font-bold'>Chats</h3>
          
    </div>
  )
}

export default ConvoHeader