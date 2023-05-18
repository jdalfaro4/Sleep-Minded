import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { ApolloClient, ApolloProvider, InMemoryCache } from '@apollo/client';
import CreateAccountPage from './Pages/CreateAccountPage';
import LoginPage from './Pages/LoginPage';
import SleepInputPage from './Pages/SleepInputPage';
import DashboardPage from './Pages/DashboardPage';
import HomePage from './Pages/HomePage';
import CustomChart from './Pages/Chart';
import { CategoryScale } from "chart.js";
import Chart from "chart.js/auto";
Chart.register(CategoryScale);

const client = new ApolloClient({
  uri: '/graphql',
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
              path="/CreateAccount"
              element={<CreateAccountPage />}
            />
            <Route
              path="/SleepInput"
              element={<SleepInputPage />}
            />
            <Route
              path="/Dash"
              element={<DashboardPage />}
            />
          </Routes>
        </div>
      </Router>
    </ApolloProvider>
  );
}

export default App;
