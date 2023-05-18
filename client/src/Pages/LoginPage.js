import React, { useState } from 'react';


const LoginPage = () => {
  return (
    <div className="container">
      <h2>Login</h2>
      <form>
       
        <label>Username:</label>
        <input
          type="text"
          id="username"
          name="username"
          placeholder="Enter your username"
          value={username}
          onChange={handleUsernameChange}
          required
        />


        <label>Password:</label>
        <input
          type="password"
          id="password"
          name="password"
          placeholder="Enter your password"
          value={password}
          onChange={handlePasswordChange}
          required
        />


        <button type="submit" onClick={handleLogin}>Login</button>
      </form>
      <div>
        <button onClick={handleCreateAccount}>Create an Account</button>
      </div>
    </div>
  );
};


export default LoginPage;