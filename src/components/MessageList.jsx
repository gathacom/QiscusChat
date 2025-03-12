import React from 'react';
import Message from './Message';

const MessageList = ({ messages }) => {
  return (
    <div className="p-4 space-y-4">
      {messages.map((message) => (
        <Message key={message.id} message={message} />
      ))}
    </div>
  );
};

export default MessageList;