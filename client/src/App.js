import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { ApolloClient, ApolloProvider, InMemoryCache } from '@apollo/client';
import AccountPage from './Pages/CreateAccountPage';
import Login from './Pages/LoginPage';
import SleepInput from './Pages/SleepInputPage';
import Dashboard from './Pages/DashboardPage';

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
