import React, { useState } from 'react';
import ChatWindow from '../components/ChatWindow';
import MessageInput from '../components/MessageInput';
import RoleSwitcher from '../components/RoleSwitcher';
import FileUpload from '../components/FileUpload';

function InterviewRoom() {
  const [role, setRole] = useState('Candidate');
  const [messages, setMessages] = useState([]);

  const sendMessage = (text) => {
    if (!text.trim()) return;
    const newMessage = {
      sender: role,
      text,
      time: new Date().toLocaleTimeString(),
    };
    setMessages((prev) => [...prev, newMessage]);
  };

  const uploadFile = (fileName) => {
    const fileMessage = {
      sender: role,
      text: `Uploaded: ${fileName}`,
      time: new Date().toLocaleTimeString(),
    };
    setMessages((prev) => [...prev, fileMessage]);
  };

  return (
    <div className="w-full max-w-2xl bg-white rounded shadow p-4 space-y-4">
      <RoleSwitcher role={role} setRole={setRole} />
      <ChatWindow messages={messages} />
      {role === 'Interviewer' && <FileUpload onUpload={uploadFile} />}
      <MessageInput onSend={sendMessage} />
    </div>
  );
}

export default InterviewRoom;
