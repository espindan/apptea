import React, { useState } from 'react';
import supabase from './supabaseClient';
import { Link } from "react-router-dom";

const SignUp = ({ onSignUp }) => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const [error, setError] = useState(null);

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (password !== confirmPassword) {
      setError('Passwords do not match');
      return;
    }

    const { error } = await supabase.auth.signUp({
      email,
      password,
    });

    if (error) {
      setError('Failed to sign up. Please try again.');
    } else {
      onSignUp();
    }
  };

  return (
    <div style={{ display: "flex", minHeight: "100vh", flexDirection: "column" }}>
    <main style={{ flex: "1 0 auto" }}>
      <div className="section"></div>
      <center>
        <img
          className="responsive-img"
          style={{ width: "250px" }}
          src="https://i.imgur.com/ax0NCsK.gif"
          alt="signup illustration"
        />
        <div className="section"></div>
        <h5 className="indigo-text">Create your account</h5>
        <div className="section"></div>

        <div className="container">
          <div
            className="z-depth-1 grey lighten-4 row"
            style={{
              display: "inline-block",
              padding: "32px 48px 0px 48px",
              border: "1px solid #EEE",
            }}
          >
            <form className="col s12" onSubmit={handleSubmit}>
              {/* Email input */}
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

              {/* Password input */}
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
              </div>

              {/* Confirm Password input */}
              <div className="row">
                <div className="input-field col s12">
                  <input
                    className="validate"
                    type="password"
                    name="confirmPassword"
                    id="confirmPassword"
                    value={confirmPassword}
                    onChange={(e) => setConfirmPassword(e.target.value)}
                    required
                  />
                  <label htmlFor="confirmPassword">Confirm your password</label>
                </div>
              </div>

              {/* Signup button */}
              <br />
              <center>
                <div className="row">
                  <button
                    type="submit"
                    name="btn_signup"
                    className="col s12 btn btn-large waves-effect pink"
                  >
                    Sign Up
                  </button>
                </div>
              </center>
            </form>
          </div>
        </div>

        <p>
          Already have an account? <Link to="/">Login here</Link>
        </p>
      </center>
    </main>
  </div>
  );
};

export default SignUp;
