import './App.css';
import React, { useState, useEffect } from 'react';
import supabase from './components/supabaseClient';
import Login from './components/Login';
import SignUp from './components/SignUp';
import Blog from './components/Blog';
import AutismChildForm from './components/AutismChildForm'
import Search from './components/Search';
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
 
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
        <Route path="/Blog" element={<Blog />} />
        <Route path="/AutismChildForm" element={<AutismChildForm />} />
        <Route path="/Search" element={<Search />} />
      </Routes>
    </Router>
  );
}

export default App;
