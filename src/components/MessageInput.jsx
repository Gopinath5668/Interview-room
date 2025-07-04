import React, { useState } from 'react';

function MessageInput({ onSend }) {
  const [text, setText] = useState('');

  const handleSend = () => {
    onSend(text);
    setText('');
  };

  return (
    <div className="flex gap-2">
      <input
        type="text"
        value={text}
        onChange={(e) => setText(e.target.value)}
        placeholder="Type your message..."
        className="flex-grow border rounded px-3 py-2"
      />
      <button
        onClick={handleSend}
        className="bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700"
      >
        Send
      </button>
    </div>
  );
}

export default MessageInput;
