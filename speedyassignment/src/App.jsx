import React, { useState,useEffect } from "react";
import "./App.css";
import Dashboard from "./Dashboard";
import Navbar from "./components/Navbar";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import BlogEditor from "./components/BlogEditor";

const App = () => {
  const [selectedTitle, setSelectedTitle] = useState(localStorage.getItem("selectedTitle") || "");

  useEffect(() => {
    const storedTitle = localStorage.getItem("selectedTitle");
    if (storedTitle) {
      setSelectedTitle(storedTitle);
    }
  }, []);

  useEffect(() => {
    localStorage.setItem("selectedTitle", selectedTitle);
  }, [selectedTitle]);

  return (
    <BrowserRouter>
      <Navbar />
      <Routes>
        <Route path="/" element={<Dashboard setSelectedTitle={setSelectedTitle}/>} />
        <Route path="/editor" element={<BlogEditor selectedTitle={selectedTitle}/>} />
      </Routes>
    </BrowserRouter>
  );
};

export default App;
