// components/EnhancedMessageList.jsx
import React from 'react';
import EnhancedMessage from './EnhancedMessage';

const EnhancedMessageList = ({ messages }) => {
  return (
    <div className="p-4 space-y-4">
      {messages.map((message) => (
        <EnhancedMessage key={message.id} message={message} />
      ))}
    </div>
  );
};

export default EnhancedMessageList;