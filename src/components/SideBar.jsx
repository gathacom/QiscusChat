import React from 'react';

const Sidebar = ({ rooms, selectedRoom, onSelectRoom }) => {
  return (
    <div className="w-48 lg:w-64 min-h-screen bg-white border-r border-gray-200">
      <div className="p-4 border-b bg-emerald-500">
        <h1 className="text-xl font-bold">QiscusChat</h1>
      </div>
      <div className="p-2">
        {rooms.map((room) => (
          <div
            key={room.room.id}
            className={`p-2 hover:bg-gray-100 cursor-pointer rounded flex items-center space-x-3 ${
              selectedRoom?.room.id === room.room.id ? 'bg-gray-100' : ''
            }`}
            onClick={() => onSelectRoom(room)}
          >
            <img
              src={room.room.image_url}
              alt={room.room.name}
              className="w-8 h-8 rounded-full"
            />
            <div className="font-medium">{room.room.name}</div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Sidebar;