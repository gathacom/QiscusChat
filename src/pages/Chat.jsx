import React, { useEffect, useState } from 'react';
import Sidebar from '../components/Sidebar';
import ChatRoom from '../components/ChatRoom';
import { FaBars } from 'react-icons/fa';

const Chat = () => {
  const [chatData, setChatData] = useState([]);
  const [selectedRoom, setSelectedRoom] = useState(null);
  const [showSidebar, setShowSidebar] = useState(false);

  useEffect(() => {
    fetch('https://gist.githubusercontent.com/asharijuang/23745f3132fa30e666db68d2bf574e4a/raw/5d556dbb9c2aea9fdf3e1ec96e45f62a88cea7b6/chat_response.json')
      .then((response) => response.json())
      .then((data) => {
        setChatData(data.results);
        setSelectedRoom(data.results[0]);
      });
  }, []);

  if (chatData.length === 0) return <div>Loading...</div>;

  return (
    <div className="min-h-screen bg-gray-100 flex">
      <div
        className={`fixed inset-0 z-20 transition-opacity ${
          showSidebar ? 'block' : 'hidden'
        } sm:bg-transparent sm:relative sm:block sm:z-0`}
        onClick={() => setShowSidebar(false)}
      >
        <div
          className="w-48 lg:w-64 bg-black h-full transform transition-transform sm:translate-x-0"
          onClick={(e) => e.stopPropagation()}
        >
          <Sidebar
            rooms={chatData}
            selectedRoom={selectedRoom}
            onSelectRoom={(room) => {
              setSelectedRoom(room);
              setShowSidebar(false);
            }}
          />
        </div>
      </div>

      <div className="flex-1 flex flex-col">
        <button
          className="p-4 sm:hidden"
          onClick={() => setShowSidebar(!showSidebar)}
        >
          <FaBars className="text-gray-600" />
        </button>

        {/* Chat Room Content */}
        {selectedRoom && <ChatRoom room={selectedRoom} />}
      </div>
    </div>
  );
};

export default Chat;