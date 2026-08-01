import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

const Login = () => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();
    // Placeholder for authentication logic.
    navigate('/dashboard');
  };

  return (
    <form onSubmit={handleSubmit} className="max-w-md mx-auto p-4 space-y-4">
      <h1 className="text-2xl font-bold">Login</h1>
      <div>
        <label className="block">
          Username:
          <input type="text" className="mt-1 block w-full" value={username} onChange={(e) => setUsername(e.target.value)} required />
        </label>
      </div>
      <div>
        <label className="block">
          Password:
          <input type="password" className="mt-1 block w-full" value={password} onChange={(e) => setPassword(e.target.value)} required />
        </label>
      </div>
      <button type="submit" className="w-full bg-blue-500 text-white p-2">Login</button>
    </form>
  );
};

export default Login;
