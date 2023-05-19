import React, { useState } from 'react';
import CreateAccountPage from './CreateAccountPage';
import SleepInputPage from './SleepInputPage';

const LoginPage = () => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [showCreateAccountPage, setShowCreateAccountPage] = useState(false);
  const [redirectToSleepInputPage, setRedirectoSleepInputPage] = useState(false);

  const handleUsernameChange = (event) => {
    setUsername(event.target.value);
  };

  const handlePasswordChange = (event) => {
    setPassword(event.target.value);
  };

  const handleLogin = (event) => {
    event.preventDefault();
    setRedirectoSleepInputPage(true);
  };

  const handleCreateAccount = (event) => {
    event.preventDefault();
    setShowCreateAccountPage(true);
  };

  if (showCreateAccountPage) {
    return <CreateAccountPage />;
  }

  if (redirectToSleepInputPage) {
    return <SleepInputPage />;
  }

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
