import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { ApolloClient, ApolloProvider, InMemoryCache } from '@apollo/client';
import AccountPage from './pages/CreateAccountPage';
import Login from './pages/LoginPage';
import SleepInput from './pages/SleepInputPage';
import Dashboard from './pages/DashboardPage';

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
              element={<AccountPage />}
            />
            <Route 
              path="/matchup" 
              element={<Login />}
            />
            <Route 
              path="/matchup/:id" 
              element={<SleepInput />}
            />
            <Route 
              path="*"
              element={<Dashboard />}
            />
          </Routes>
        </div>
      </Router>
    </ApolloProvider>
  );
}

export default App;
