import { Routes, Route } from 'react-router-dom';
import Home from './pages/Home';
import AdminLogin from './pages/AdminLogin';
import AddProject from './pages/AddProject';
import ViewMessages from './pages/ViewMessages';
import ProtectedRoute from './components/ProtectedRoute';

export default function App() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/admin" element={<AdminLogin />} />
      <Route path="/add-project" element={<ProtectedRoute><AddProject /></ProtectedRoute>} />
      <Route path="/messages" element={<ProtectedRoute><ViewMessages /></ProtectedRoute>} />
    </Routes>
  );
}
