import React from 'react';

function FileUpload({ onUpload }) {
  const handleFileChange = (e) => {
    const file = e.target.files[0];
    if (!file) return;
    if (file.type !== 'application/pdf' && file.type !== 'text/plain') {
      alert('Only PDF or TXT files allowed');
      return;
    }
    onUpload(file.name);
  };

  return (
    <div className="mb-3">
      <label className="block text-sm font-medium text-gray-700 mb-1">Upload File (PDF or TXT only):</label>
      <input type="file" accept=".pdf,.txt" onChange={handleFileChange} />
    </div>
  );
}

export default FileUpload;
