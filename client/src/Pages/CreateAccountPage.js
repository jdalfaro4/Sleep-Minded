import React, { useState } from 'react';


const CreateAccountPage = ({ handleGoBack }) => {

  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');


  const handleUsernameChange = (event) => {
    setUsername(event.target.value);
  };


  const handlePasswordChange = (event) => {
    setPassword(event.target.value);
  };

  const handleCreateAccount = (event) => {
    event.preventDefault();
  };


  return (
    <div className="container">
      <h2>Create Account</h2>
      <form>

        <label htmlFor="username">Username:</label>
        <input
          type="text"
          id="username"
          name="username"
          placeholder="Enter your username"
          value={username}
          onChange={handleUsernameChange}
          required
        />


        <label htmlFor="password">Password:</label>
        <input
          type="password"
          id="password"
          name="password"
          placeholder="Enter your password"
          value={password}
          onChange={handlePasswordChange}
          required
        />


        <button type="submit" onClick={handleCreateAccount}>Create Account</button>
      </form>
      <div className="center">
        <button onClick={handleGoBack}>Go Back</button>
      </div>
    </div>
  );
};


export default CreateAccountPage;