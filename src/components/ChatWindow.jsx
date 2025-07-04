import React from 'react';

function ChatWindow({ messages }) {
  return (
    <div className="h-64 overflow-y-auto border rounded p-3 bg-gray-50">
      {messages.map((msg, idx) => (
        <div key={idx} className="mb-2">
          <span className="font-semibold text-blue-600">{msg.sender}:</span>
          <span className="ml-2">{msg.text}</span>
          <span className="text-xs text-gray-400 ml-2">({msg.time})</span>
        </div>
      ))}
    </div>
  );
}

export default ChatWindow;
