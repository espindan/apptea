import React, { useState } from 'react';
import supabase from './supabaseClient';
import { Link } from "react-router-dom";

const Login = ({ onLogin }) => {
  const [email, setEmail] = useState('');
  const [loading, setLoading] = useState(false);
  const [password, setPassword] = useState('');
  const [error, setError] = useState(null);

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    setError(null);

    const { data, error } = await supabase.auth.signInWithPassword({
      email,
      password,
    });

    if (error) {
      setError(error.message);
    } else {
      console.log('Logged in:', data);
    }
    setLoading(false);
  };

  return (
    <div style={{ display: 'flex', minHeight: '100vh', flexDirection: 'column' }}>
    <main style={{ flex: '1 0 auto' }}>
      <div className="section"></div>
      <center>
        <img
          className="responsive-img"
          style={{ width: '250px' }}
          src="https://i.imgur.com/ax0NCsK.gif"
          alt="login illustration"
        />
        <div className="section"></div>
        <h5 className="indigo-text">Please, login into your account</h5>
        <div className="section"></div>

        <div className="container">
          <div
            className="z-depth-1 grey lighten-4 row"
            style={{
              display: 'inline-block',
              padding: '32px 48px 0px 48px',
              border: '1px solid #EEE',
            }}
          >
            <form className="col s12" onSubmit={handleSubmit}>
              <div className="row">
                <div className="input-field col s12">
                  <input
                    className="validate"
                    type="email"
                    name="email"
                    id="email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    required
                  />
                  <label htmlFor="email">Enter your email</label>
                </div>
              </div>

              <div className="row">
                <div className="input-field col s12">
                  <input
                    className="validate"
                    type="password"
                    name="password"
                    id="password"
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                    required
                  />
                  <label htmlFor="password">Enter your password</label>
                </div>
                <label style={{ float: 'right' }}>
                  <a className="pink-text" href="#!">
                    <b>Forgot Password?</b>
                  </a>
                </label>
              </div>

              <br />
              <center>
                <div className="row">
                  <button
                    type="submit"
                    name="btn_login"
                    className="col s12 btn btn-large waves-effect pink"
                  >
                    Login
                  </button>
                </div>
              </center>
            </form>
          </div>
        </div>
        
        <Link to="/SignUp">Create account</Link>
     
      </center>
      <div className="section"></div>
      <div className="section"></div>
    </main>
  </div>
);
};


export default Login;
