import React from "react";
import { Routes, Route } from "react-router-dom";
import Home from './components/Home'
import Trending from './components/Trending'
import Popular from './components/Popular'
import Movie from './components/Movie'
function App() {
  return (
    <div className="w-full bg-zinc-900">
      <Routes>
        <Route path="/" element={<Home />}/>
        <Route path="/trending" element={<Trending />}/>
        <Route path="/popular" element={<Popular />}/>
        <Route path="/movie" element={<Movie />}/>
      </Routes>
    </div>
  );
}

export default App;
