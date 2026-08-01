import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Login from './components/Login';
import Dashboard from './components/Dashboard';
import DatabaseConnections from './components/DatabaseConnections';
import CreateConnection from './components/CreateConnection';
import DataManagement from './components/DataManagement';
import AddRecord from './components/AddRecord';
import EditRecord from './components/EditRecord';

const App = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Login />} />
        <Route path="/dashboard" element={<Dashboard />} />
        <Route path="/connections" element={<DatabaseConnections />} />
        <Route path="/connections/create" element={<CreateConnection />} />
        <Route path="/data-management/:connectionId" element={<DataManagement />} />
        <Route path="/data-management/:connectionId/add" element={<AddRecord />} />
        <Route path="/data-management/:connectionId/edit/:recordId" element={<EditRecord />} />
      </Routes>
    </Router>
  );
};

export default App;
