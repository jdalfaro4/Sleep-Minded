import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { ApolloClient, ApolloProvider, InMemoryCache } from '@apollo/client';
import CreateAccountPage from './Pages/CreateAccountPage';
import LoginPage from './Pages/LoginPage';
import SleepInputPage from './Pages/SleepInputPage';
import DashboardPage from './Pages/DashboardPage';

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
              path="/matchup" 
              element={<LoginPage />}
            />
            <Route 
              path="/" 
              element={<CreateAccountPage />}
            />
            <Route 
              path="/matchup/:id" 
              element={<SleepInputPage />}
            />
            <Route 
              path="*"
              element={<DashboardPage />}
            />
          </Routes>
        </div>
      </Router>
    </ApolloProvider>
  );
}

export default App;
