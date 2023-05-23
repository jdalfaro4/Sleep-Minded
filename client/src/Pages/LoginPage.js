import React, { useState } from 'react';
import SignupPage from './Signup';
import SleepInputPage from './SleepInputPage';

const LoginPage = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [showCreateAccountPage, setShowCreateAccountPage] = useState(false);
  const [redirectToSleepInputPage, setRedirectoSleepInputPage] = useState(false);

  const handleEmailChange = (event) => {
    setEmail(event.target.value);
  };

  const handlePasswordChange = (event) => {
    setPassword(event.target.value);
  };

  const handleLogin = (event) => {
    event.preventDefault();
    setRedirectoSleepInputPage(true);
  };

  const handleSignupPage = (event) => {
    event.preventDefault();
    setShowCreateAccountPage(true);
  };

  if (showCreateAccountPage) {
    return <SignupPage />;
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
            <label htmlFor="exampleFormControlTextarea1">Email</label>
            <input type="text"
              id="email"
              name="email"
              placeholder="Enter your Email"
              value={email}
              onChange={handleEmailChange}
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
        <div className="register">
          <h5 className="question">Not a Member? <button className="btn btn-link text-warning create-account-btn" onClick={handleSignupPage}>Create Account</button></h5>
        </div>
      </div>


    </div>

  );
};

export default LoginPage;


