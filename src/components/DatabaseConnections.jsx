import React from 'react';
import { Link } from 'react-router-dom';

const DatabaseConnections = () => {
  return (
    <div className="p-4">
      <h1 className="text-xl">Database Connections</h1>
      <Link to="/connections/create" className="text-blue-500">Create Connection</Link>
      {/* List existing connections here */}
    </div>
  );
};

export default DatabaseConnections;
