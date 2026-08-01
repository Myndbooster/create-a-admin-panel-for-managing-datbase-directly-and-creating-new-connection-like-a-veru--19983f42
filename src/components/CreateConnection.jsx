import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

const CreateConnection = () => {
  const [connectionName, setConnectionName] = useState('');
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();
    // Placeholder for create connection logic.
    navigate('/connections');
  };

  return (
    <form onSubmit={handleSubmit} className="max-w-md mx-auto p-4 space-y-4">
      <h1 className="text-2xl font-bold">Create Connection</h1>
      <div>
        <label className="block">
          Connection Name:
          <input type="text" className="mt-1 block w-full" value={connectionName} onChange={(e) => setConnectionName(e.target.value)} required />
        </label>
      </div>
      <button type="submit" className="w-full bg-blue-500 text-white p-2">Create</button>
    </form>
  );
};

export default CreateConnection;
