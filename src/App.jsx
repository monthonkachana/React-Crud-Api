import { useState } from "react";
import { Routes, Route, Link } from "react-router-dom";
//components
import Chartbar from "./conponents/Chartbar";
import Navbar from "./conponents/Navbar";
import UserCreate from "./conponents/UserCreate";
import Users from "./conponents/Users";
import UsersUpdate from "./conponents/UsersUpdate";

function App() {
  return (
    <>
      <Navbar />
      <Routes>
        <Route path="/" element={<Users />} />
        <Route path="create" element={<UserCreate />} />
        <Route path="chart" element={<Chartbar />} />
        <Route path="/update/:id" element={<UsersUpdate />} />
      </Routes>
    </>
  );
}

export default App;
