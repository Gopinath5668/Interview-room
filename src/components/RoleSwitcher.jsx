import React from 'react';

function RoleSwitcher({ role, setRole }) {
  return (
    <div className="flex justify-between items-center mb-2">
      <h2 className="text-lg font-bold">Current Role: {role}</h2>
      <div className="flex gap-2">
        <button
          onClick={() => setRole('Interviewer')}
          className={`px-4 py-1 rounded ${role === 'Interviewer' ? 'bg-blue-600 text-white' : 'bg-gray-200'}`}
        >
          Interviewer
        </button>
        <button
          onClick={() => setRole('Candidate')}
          className={`px-4 py-1 rounded ${role === 'Candidate' ? 'bg-blue-600 text-white' : 'bg-gray-200'}`}
        >
          Candidate
        </button>
      </div>
    </div>
  );
}

export default RoleSwitcher;
