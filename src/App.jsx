import React from "react";
import { Routes, Route } from "react-router-dom";
import Home from './components/Home'
function App() {
  return (
    <div className="w-full h-screen bg-zinc-800">
      <Routes>
        <Route path="/" element={<Home />}/>
      </Routes>
    </div>
  );
}

export default App;
