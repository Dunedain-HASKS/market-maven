import './App.css';
import Login from './Pages/Login';
import { HashRouter, Route, Routes } from "react-router-dom";
import Dashboard from './Pages/Dashboard';
import Navbar from './Components/Navbar';

function App() {
  return (
    <>
    <HashRouter>
      <Navbar />
      <Routes>
        <Route path="/" element={<Login />} />
        <Route path="/dashboard" element={<Dashboard/>} />
        <Route path="*" element={<Error404 />} />
      </Routes>
    </HashRouter>
  </>
  );
}

export default App;
