import React from 'react';

const Message = ({ message }) => {
  return (
    <div className="flex items-start space-x-3">
      <div className="flex-1">
        <div className="text-sm font-medium text-gray-700">{message.sender}</div>
        <div className="text-sm text-gray-900">{message.message}</div>
      </div>
    </div>
  );
};

export default Message;