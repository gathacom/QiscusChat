// components/EnhancedMessage.jsx
import React from 'react';

const EnhancedMessage = ({ message }) => {
  switch (message.type) {
    case 'text':
      return (
        <div className="flex items-start space-x-3">
          <div className="flex-1">
            <div className="text-sm font-medium text-gray-700">{message.sender}</div>
            <div className="text-sm text-gray-900">{message.message}</div>
          </div>
        </div>
      );
    case 'image':
      return (
        <div className="flex items-start space-x-3">
          <div className="flex-1">
            <div className="text-sm font-medium text-gray-700">{message.sender}</div>
            <img src={message.url} alt={message.caption} className="max-w-full rounded-lg" />
            {message.caption && (
              <div className="text-sm text-gray-600 mt-2">{message.caption}</div>
            )}
          </div>
        </div>
      );
    case 'video':
      return (
        <div className="flex items-start space-x-3">
          <div className="flex-1">
            <div className="text-sm font-medium text-gray-700">{message.sender}</div>
            <video controls className="max-w-full rounded-lg">
              <source src={message.url} type="video/mp4" />
              Your browser does not support the video tag.
            </video>
          </div>
        </div>
      );
    case 'pdf':
      return (
        <div className="flex items-start space-x-3">
          <div className="flex-1">
            <div className="text-sm font-medium text-gray-700">{message.sender}</div>
            <a
              href={message.url}
              target="_blank"
              rel="noopener noreferrer"
              className="text-sm text-blue-500 hover:underline"
            >
              Download {message.filename}
            </a>
          </div>
        </div>
      );
    default:
      return null;
  }
};

export default EnhancedMessage;