import React, { useContext } from 'react'
import Sidebar from '../components/Sidebar'
import ChatContainer from '../components/ChatContainer'
import RightSidebar from '../components/RightSidebar'
import { ChatContext } from '../../context/ChatContext'
import bgImage from "../assets/bgImage.svg";

const HomePage = () => {
  const { selectedUser } = useContext(ChatContext)

  return (
    <div style={{backgroundImage: `url(${bgImage})`,backgroundSize: 'cover',backgroundPosition: 'center',}}
    className="w-full h-screen sm:px-[15%] sm:py-[5%]">
      <div className='border w-full h-full'>
        <div className={`backdrop-blur-xl border-2 border-gray-600 rounded-2xl overflow-hidden h-full grid grid-cols-1 relative 
          ${selectedUser ? 'md:grid-cols-[1fr_1.5fr_1fr] xl:grid-cols-[1fr_2fr_1fr]' : 'md:grid-cols-2'} `}>
          <Sidebar />
          <ChatContainer />
          <RightSidebar />
        </div>
      </div>
    </div>
  )
}

export default HomePage
