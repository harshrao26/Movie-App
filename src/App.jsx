import React from "react";
import { Routes, Route } from "react-router-dom";
import Home from './components/Home'
import Trending from './components/Trending'
function App() {
  return (
    <div className="w-full bg-zinc-900">
      <Routes>
        <Route path="/" element={<Home />}/>
        <Route path="/trending" element={<Trending />}/>
      </Routes>
    </div>
  );
}

export default App;
