import "./App.css";
import { Routes, Route } from "react-router-dom";
import Home from "./components/Home";
import Sidebar from "./components/Sidebar";
import MainArea from "./components/MainArea";

function App() {
  return (
    <div className="flex">
      <Sidebar />
      <Routes>
        <Route path="/" element={<MainArea />}></Route>
      </Routes>
    </div>
  );
}

export default App;
