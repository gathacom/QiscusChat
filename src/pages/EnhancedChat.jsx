// pages/EnhancedChat.jsx
import React, { useState, useEffect, useRef } from 'react';
import Sidebar from '../components/SideBar';
import EnhancedMessageList from '../components/EnhancedMessageList';
import ParticipantPopup from '../components/ParticipantPopup';
import { FaBars, FaUsers, FaPaperclip, FaPaperPlane } from 'react-icons/fa';
import enhancedChatData from '../utils/chat_data_extended.json';

const EnhancedChat = () => {
  const [selectedRoom, setSelectedRoom] = useState(enhancedChatData.results[0]); 
  const [showSidebar, setShowSidebar] = useState(false);
  const [showParticipants, setShowParticipants] = useState(false);

  const messagesContainerRef = useRef(null);

  useEffect(() => {
    if (messagesContainerRef.current) {
      messagesContainerRef.current.scrollTop = messagesContainerRef.current.scrollHeight;
    }
  }, [selectedRoom]);

  return (
    <div className="min-h-screen bg-gray-100 flex overflow-hidden">
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
            rooms={enhancedChatData.results}
            selectedRoom={selectedRoom}
            onSelectRoom={(room) => {
              setSelectedRoom(room);
              setShowSidebar(false);
            }}
          />
        </div>
      </div>

      <div className="flex-1 flex flex-col overflow-hidden">
        <button
          className="p-4 sm:hidden"
          onClick={() => setShowSidebar(!showSidebar)}
        >
          <FaBars className="text-gray-600" />
        </button>

        {/* Header */}
        <div className="p-4 border-b bg-white flex items-center justify-between">
          <div className="flex items-center space-x-3">
            <img
              src={selectedRoom.room.image_url}
              alt={selectedRoom.room.name}
              className="w-10 h-10 rounded-full"
            />
            <div>
              <h1 className="text-xl font-bold">{selectedRoom.room.name}</h1>
            </div>
          </div>
          <button
            onClick={() => setShowParticipants(true)}
            className="p-2 hover:bg-gray-100 rounded"
          >
            <FaUsers className="text-gray-600" />
          </button>
        </div>

        <div
          ref={messagesContainerRef}
          className="overflow-y-auto h-[calc(100vh-200px)] sm:h-[calc(100vh-150px)]"
        >
          <EnhancedMessageList messages={selectedRoom.comments} />
        </div>

        <div className="p-4 border-t bg-white">
          <div className="flex items-center space-x-2">
            <button className="p-2 hover:bg-gray-100 rounded">
              <FaPaperclip className="text-gray-600" />
            </button>
            <input
              type="text"
              placeholder="Type a message..."
              className="flex-1 p-2 border rounded-lg"
            />
            <button className="p-2 bg-emerald-500 text-white rounded-lg">
              <FaPaperPlane />
            </button>
          </div>
        </div>

        {showParticipants && (
          <ParticipantPopup
            participants={selectedRoom.room.participant}
            onClose={() => setShowParticipants(false)}
          />
        )}
      </div>
    </div>
  );
};

export default EnhancedChat;