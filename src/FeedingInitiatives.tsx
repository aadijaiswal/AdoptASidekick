import React, { useState } from 'react';

interface Contribution {
  amount: string;
  resources: string;
}

const FeedingInitiatives: React.FC = () => {
  const [contribution, setContribution] = useState<Contribution>({
    amount: '',
    resources: ''
  });

  const handleContribution = () => {
    // Send data to the backend for donation or resource contribution
    console.log(contribution);
  };

  return (
    <div>
      <h1>Community Feeding Initiatives</h1>
      <div>
        <h2>Contribute to Feed Strays</h2>
        <input 
          type="number" 
          placeholder="Amount" 
          onChange={(e) => setContribution({ ...contribution, amount: e.target.value })} 
        />
        <input 
          type="text" 
          placeholder="Resources" 
          onChange={(e) => setContribution({ ...contribution, resources: e.target.value })} 
        />
        <button onClick={handleContribution}>Contribute</button>
      </div>
    </div>
  );
};

export default FeedingInitiatives;
