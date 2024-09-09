import logo from './logo.svg';
import './App.css';
import React, { useState, useEffect } from 'react';
import Blog from './components/Blog';
import Header from './components/Header';
import Sidebar from './components/Sidebar';
import supabase from './components/supabaseClient';
import Login from './components/Login';
 
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
    <div className="App">
        {isLoggedIn ? (
        <>
          <Header />
          <div className="row">
            <div className="col s3">
              <Sidebar />
            </div>
            <div className="col s9">
              <Blog />
            </div>
          </div>
        </>
      ) : (
        <Login onLogin={handleLogin} />
      )}
    </div>
  );
}

export default App;
