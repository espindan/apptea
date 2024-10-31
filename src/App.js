import './App.css';
import React, { useState, useEffect } from 'react';
import supabase from './components/supabaseClient';
import Login from './components/Login';
import SignUp from './components/SignUp';
import Blog from './components/Blog';
import Main from './components/Main';
import AutismChildForm from './components/AutismChildForm'
import Search from './components/Search';
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Post from './components/Post';

function App() {
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  useEffect(() => {
    const session = supabase.auth.getSession();
    if (session) {
      setIsLoggedIn(true);
    }
  }, []);

  const handleLogin = () => {
    setIsLoggedIn(true);
  };

  return (
    <Router basename="/apptea">
      <Routes>
        <Route path="" element={<Login />} />
        <Route path="/SignUp" element={<SignUp />} />
        <Route path="/Main" element={<Main />} />
        <Route path="/Blog" element={<Blog />} />
        <Route path="/Post" element={<Post />} />
      </Routes>
    </Router>
  );
}

export default App;
