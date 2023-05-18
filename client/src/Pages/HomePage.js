import React, { useState } from 'react';
import CreateAccountPage from './CreateAccountPage';
import LoginPage from './LoginPage';
import SleepInputPage from './SleepInputPage';
import DashboardPage from './DashboardPage';

const HomePage = () => {

  const [activeComponent, setActiveComponent] = useState('');

  const handleNavigationClick = (componentName) => {
      setActiveComponent(componentName);
  };
  let componentToRender;
  switch (activeComponent) {
      case 'CreateAccountPage':
          componentToRender = <CreateAccountPage />;
          break;
      case 'LoginPage':
          componentToRender = <LoginPage />;
          break;
      case 'SleepInputPage':
          componentToRender = <SleepInputPage />;
          break;
      case 'DashboardPage':
          componentToRender = <DashboardPage />;
          break;
          default:
            componentToRender = <LoginPage />;
  }

  return (
    <div className="homepage">
      <button>Login</button>
      <button>SleepInput</button>
      <button>Dashboard</button>
      <button>Logout</button>
      {componentToRender}
    </div>
  );
};

export default HomePage;