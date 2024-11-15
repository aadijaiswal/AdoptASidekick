import React, { useState } from 'react';

interface Report {
  type: string;
  description: string;
  location: string;
}

const LostAndFound: React.FC = () => {
  const [report, setReport] = useState<Report>({
    type: 'lost',
    description: '',
    location: ''
  });

  const handleReportSubmit = () => {
    // Logic to report a lost or found animal
    console.log(report);
  };

  return (
    <div>
      <h1>Lost and Found</h1>
      <select 
        onChange={(e) => setReport({ ...report, type: e.target.value })}>
        <option value="lost">Lost</option>
        <option value="found">Found</option>
      </select>
      <textarea 
        placeholder="Description of the animal" 
        onChange={(e) => setReport({ ...report, description: e.target.value })}
      />
      <input 
        type="text" 
        placeholder="Location" 
        onChange={(e) => setReport({ ...report, location: e.target.value })}
      />
      <button onClick={handleReportSubmit}>Submit Report</button>
    </div>
  );
};

export default LostAndFound;
