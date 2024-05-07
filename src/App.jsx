import React from "react";
import { Routes, Route } from "react-router-dom";
import Home from './components/Home'
import Trending from './components/Trending'
import Popular from './components/Popular'
import Movie from './components/Movie'
import SignIn from '../src/pages/SignIn'
import SignUp from '../src/pages/SignUp'
function App() {
  return (
    <div className="w-full bg-zinc-900">
      <Routes>
        <Route path="/" element={<Home />}/>
        <Route path="/trending" element={<Trending />}/>
        <Route path="/popular" element={<Popular />}/>
        <Route path="/movie" element={<Movie />}/>
        <Route path="/signin" element={<SignIn />}/>
        <Route path="/signup" element={<SignUp />}/>
      </Routes>
    </div>
  );
}

export default App;
