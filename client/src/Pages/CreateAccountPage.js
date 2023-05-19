import React, { useState } from 'react';
import LoginPage from './LoginPage';

const CreateAccountPage = ({ handleGoBack }) => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [redirectToLoginPage, setRedirectToLoginPage] = useState(false);

  const handleUsernameChange = (event) => {
    setUsername(event.target.value);
  };

  const handlePasswordChange = (event) => {
    setPassword(event.target.value);
  };

  const handleCreateAccount = (event) => {
    event.preventDefault();
    setRedirectToLoginPage(true);
  };

  if (redirectToLoginPage) {
    return <LoginPage />;
  }

  return (
    // <div className="container">
    //   <h2>Create Account</h2>
    //   <form>
    //     <label htmlFor="username">Username:</label>
    //     <input
    //       type="text"
    //       id="username"
    //       name="username"
    //       placeholder="Enter your username"
    //       value={username}
    //       onChange={handleUsernameChange}
    //       required
    //     />
    //     <label htmlFor="password">Password:</label>
    //     <input
    //       type="password"
    //       id="password"
    //       name="password"
    //       placeholder="Enter your password"
    //       value={password}
    //       onChange={handlePasswordChange}
    //       required
    //     />
    //     <button type="submit" onClick={handleCreateAccount}>Create Account</button>
    //   </form>
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
        <input className="btn btn-primary signup" type="submit" onClick={handleCreateAccount} value="Create Account"></input>
        {/* <input className="btn btn-primary signup" type="submit" value="Go Back"></input> */}
      </div>

    </div>
  );
};

export default CreateAccountPage;

