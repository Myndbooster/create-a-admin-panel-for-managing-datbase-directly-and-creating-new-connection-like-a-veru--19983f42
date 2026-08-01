import React from 'react';
import { useParams, Link } from 'react-router-dom';

const DataManagement = () => {
  const { connectionId } = useParams();

  return (
    <div className="p-4">
      <h1 className="text-xl">Data Management for Connection: {connectionId}</h1>
      <Link to="/data-management/${connectionId}/add" className="text-blue-500">Add Record</Link>
      {/* Display records and manage them here */}
    </div>
  );
};

export default DataManagement;
