import React, { useState } from 'react';
import { FaUsers } from 'react-icons/fa';
import { IoSend } from "react-icons/io5";
import ParticipantPopup from './ParticipantPopup';
import MessageList from './MessageList';

const ChatRoom = ({ room }) => {
  const [showParticipants, setShowParticipants] = useState(false);

  if (!room) return <div>Select a room to start chatting</div>;

  return (
    <div className="flex-1 flex flex-col">
      {/* Header */}
      <div className="p-4 border-b bg-white flex items-center justify-between">
        <div className="flex items-center space-x-3">
          <img
            src={room.room.image_url}
            alt={room.room.name}
            className="w-10 h-10 rounded-full"
          />
          <div>
            <h1 className="text-xl font-bold">{room.room.name}</h1>
          </div>
        </div>
        <button
          onClick={() => setShowParticipants(true)}
          className="p-2 hover:bg-gray-100 rounded"
        >
          <FaUsers className="text-gray-600" />
        </button>
      </div>

      {/* Messages */}
      <div className="flex-1 overflow-y-auto p-4">
        <MessageList messages={room.comments} />
      </div>

      {/* Chat Input */}
      <div className="p-4 border-t bg-white">
        <div className="flex items-center space-x-2">
          <input
            type="text"
            placeholder="Type a message..."
            className="flex-1 p-2 border rounded-lg"
          />
          <button className="p-2 bg-emerald-500 text-white rounded-lg">
            <IoSend />
          </button>
        </div>
      </div>

      {/* Participant Popup */}
      {showParticipants && (
        <ParticipantPopup
          participants={room.room.participant}
          onClose={() => setShowParticipants(false)}
        />
      )}
    </div>
  );
};

export default ChatRoom;