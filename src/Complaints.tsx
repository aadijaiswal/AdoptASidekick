import React, { useState } from 'react';

interface Complaint {
  description: string;
  image: File | null;
  location: string;
}

const Complaints: React.FC = () => {
  const [complaint, setComplaint] = useState<Complaint>({
    description: '',
    image: null,
    location: ''
  });

  const handleComplaintSubmit = () => {
    // Logic to submit the complaint to authorities
    console.log(complaint);
  };

  return (
    <div>
      <h1>Report Animal Abuse or Neglect</h1>
      <textarea 
        placeholder="Describe the incident" 
        onChange={(e) => setComplaint({ ...complaint, description: e.target.value })} 
      />
      <input 
        type="file" 
        onChange={(e) => setComplaint({ ...complaint, image: e.target.files ? e.target.files[0] : null })} 
      />
      <input 
        type="text" 
        placeholder="Location" 
        onChange={(e) => setComplaint({ ...complaint, location: e.target.value })} 
      />
      <button onClick={handleComplaintSubmit}>Submit Complaint</button>
    </div>
  );
};

export default Complaints;
