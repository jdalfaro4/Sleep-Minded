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
    // <div className="container">
    //   <h2>Login</h2>
    //   <form>
    //     <label>Username:</label>
    //     <input
    //       type="text"
    //       id="username"
    //       name="username"
    //       placeholder="Enter your username"
    //       value={username}
    //       onChange={handleUsernameChange}
    //       required
    //     />
    //     <label>Password:</label>
    //     <input
    //       type="password"
    //       id="password"
    //       name="password"
    //       placeholder="Enter your password"
    //       value={password}
    //       onChange={handlePasswordChange}
    //       required
    //     />
    //     <button type="submit" onClick={handleLogin}>Login</button>
    //   </form>
    //   <div>
    //     <button onClick={handleCreateAccount}>Create an Account</button>
    //   </div>
    // </div>
    <div className="background-image">
      <div className="contact-container d-flex flex-column align-items-center justify-content-center">
        <form className="form-row enter">
          <div className="form-group contact-form">
            <label htmlFor="exampleFormControlTextarea1">Username</label>
            <input type="text"
              id="username"
              name="username"
              placeholder="Enter your username"
              value={username}
              onChange={handleUsernameChange}
              required className="form-control" />
          </div>

          <div className="form-group">
            <label htmlFor="exampleFormControlTextarea1">Password</label>
            <input type="password"
              id="password"
              name="password"
              placeholder="Enter your password"
              value={password}
              onChange={handlePasswordChange}
              required className="form-control" />
          </div>
        </form>
        <input className="btn btn-primary signin" type="submit" onClick={handleLogin} value="Sign In"></input>
        <div class="register">
          <h5 class="question">Not a Member? <a onClick={handleCreateAccount}>Create Account</a></h5>
        </div>
      </div>


    </div>

  );
};

export default LoginPage;


