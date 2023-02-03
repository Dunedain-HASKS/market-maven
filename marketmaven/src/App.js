import "./App.css";
import Login from "./Pages/Login";
import { HashRouter, Route, Routes } from "react-router-dom";
import DashBoard from "./Pages/dashboard/DashBoard";
import Navbar from "./Components/Navbar";
import { Error404 } from "./Pages/Error404";
import Profile from "./Pages/Profile";
import SignUp from "./Pages/SignUp";
import Companies from "./Pages/Companies";
import News from "./Pages/News";import Market from "./Pages/Market";

function App() {
  return (
    <>
      <HashRouter>
        <Navbar />
        <Routes>
          <Route path="/" element={<Login />} />
          <Route path="/dashboard" element={<DashBoard />} />
          <Route path="/profile" element={<Profile />} />
          <Route path="/companies" element={<Companies/>} />
          <Route path="/signup" element={<SignUp/>}/>
          <Route path="*" element={<Error404 />} />
        </Routes>
      </HashRouter>
    </>
  );
}

export default App;
