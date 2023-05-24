import React, { useState } from 'react';
import SignupPage from './Signup';
// import SleepInputPage from './SleepInputPage';
import { Link } from 'react-router-dom';
import { useMutation } from '@apollo/client';
import { LOGIN_USER } from '../utils/mutations';
import Auth from '../utils/auth';

const Login = (props) => {
  const [formState, setFormState] = useState({ email: '', password: '' });
  const [login, { error, data }] = useMutation(LOGIN_USER);
  const [showSignup, setShowSignup] = useState(false);

  // update state based on form input changes
  const handleChange = (event) => {
    const { name, value } = event.target;

    setFormState({
      ...formState,
      [name]: value,
    });
  };

  // submit form
  const handleFormSubmit = async (event) => {
    event.preventDefault();
    console.log(formState);
    try {
      const { data } = await login({
        variables: { email: formState.email, password: formState.password },
      });

      Auth.login(data.login.token);
    } catch (e) {
      if (e.networkError) {
        console.log(e.networkError)
      }
      console.error(e);
    }

    // clear form values
    setFormState({
      email: '',
      password: '',
    });
  };

  const handleSignUpClick = () => {
    setShowSignup(true);
  };

  if (showSignup) {
    return <SignupPage />;
  }

  return (
    <main className="flex-row justify-center mb-4">
      <div className="col-lg-10 col-md-8 col-sm-6 login-center">
        <div className="card bg-light">
          <h4 className="card-header bg-light text-dark p-2">Login</h4>
          <div className="card-body">
            {data ? (
              <p>
                Success! You may now head{' '}
                <Link to="/">back to the homepage.</Link>
              </p>
            ) : (
              <form onSubmit={handleFormSubmit}>
                <input
                  className="form-input"
                  placeholder="Email"
                  name="email"
                  type="email"
                  value={formState.email}
                  onChange={handleChange}
                />
                <input
                  className="form-input"
                  placeholder="******"
                  name="password"
                  type="password"
                  value={formState.password}
                  onChange={handleChange}
                />
                <button
                  className="btn btn-primary"
                  style={{ cursor: 'pointer' }}
                  type="submit"
                >
                  Submit
                </button>
              </form>
            )}

            {error && (
              <div className="my-3 p-3 bg-danger text-white">
                {error.message}
              </div>
            )}

            <h5 className="d-flex justify-content-center align-items-center">
              <div className="question d-flex align-items-center">Not a member?</div>
              <button
                className="create-btn btn btn-link"
                style={{ cursor: 'pointer' }}
                onClick={handleSignUpClick}
              >Create an account.
              </button>
            </h5>

          </div>
        </div>
      </div>
    </main >
  );
};

export default Login;