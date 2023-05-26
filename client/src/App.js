import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { ApolloClient, ApolloProvider, InMemoryCache, createHttpLink } from '@apollo/client';
import { setContext } from '@apollo/client/link/context';
import LoginPage from './Pages/LoginPage';
import SleepInputPage from './Pages/SleepInputPage';
import SignupPage from './Pages/Signup';
import HomePage from './Pages/HomePage';
import CustomChart from './Pages/Chart';
import { CategoryScale } from "chart.js";
import Chart from "chart.js/auto";
Chart.register(CategoryScale);

const httpLink = createHttpLink({
  uri: '/graphql',
});

const authLink = setContext((_, { headers }) => {
  const token = localStorage.getItem('id_token');
  return {
    headers: {
      ...headers,
      authorization: token ? `Bearer ${token}` : '',
    },
  };
});

const client = new ApolloClient({
  link: authLink.concat(httpLink),
  cache: new InMemoryCache(),
});

function App() {
  return (
    <ApolloProvider client={client}>
      <Router>
        <div className="flex-column justify-center align-center min-100-vh bg-primary">
          <Routes>
            <Route
              path="/"
              element={<HomePage />}
            />
          <Route
              path="/Chart"
              element={<CustomChart />}
            />
            <Route
              path="/Login"
              element={<LoginPage />}
            />
            <Route
              path="/Signup"
              element={<SignupPage />}
            />
            <Route
              path="/SleepInput"
              element={<SleepInputPage />}
            />

          </Routes>
        </div>
      </Router>
    </ApolloProvider>
  );
}

export default App;