import "./App.css";
import { Routes, Route } from "react-router-dom";
import Sidebar from "./components/Sidebar";
import MainArea from "./components/MainArea";
import Admin from "./components/Admin";
import Pim from "./components/Pim";
import Header from "./components/Header";
import Login from "./components/Login";
import Home from "./components/Home";

function App() {
  return (
    <div className="">
      <Routes>
        <Route path="/" element={<Home />}>
          <Route path="admin" element={<Admin />} />
          <Route path="pim" element={<Pim />} />
        </Route>
        <Route path="login" element={<Login />} />
      </Routes>
    </div>
  );
}

export default App;
