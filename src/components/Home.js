import React from "react";
import Header from "./Header";
import MainArea from "./MainArea";
import Sidebar from "./Sidebar";

const Home = () => {
  return (
    <>
      <Header />
      <main className="flex">
        <Sidebar />
        <MainArea />
      </main>
    </>
  );
};

export default Home;
