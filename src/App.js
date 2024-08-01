import logo from './logo.svg';
import './App.css';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Home from './components/Home';
import Dashboard from './components/Dashboard';
import Register from './components/Register';
import Login from './components/Login';
import Layout from './components/Layout';
import Chart from './components/Chart';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/bar" element={<Chart/>}/>
        <Route path="/users" element={<Layout />}>
          <Route index  element={<Home />} />
          <Route path="home" element={<Home />} />
          <Route path="dashboard" element={<Dashboard />} />
          <Route path="register" element={<Register />} />
          <Route path="login" element={<Login />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
