import './App.css';
import React, { useState, useEffect } from 'react';
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
       <Login onLogin={handleLogin} />
    </div>
  );
}

export default App;
