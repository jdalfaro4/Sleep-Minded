import React, { useState } from 'react';
// import CreateAccountPage from './CreateAccountPage';
import LoginPage from './LoginPage';
import SleepInputPage from './SleepInputPage';
import DashboardPage from './DashboardPage';

const HomePage = () => {
  const [activeComponent, setActiveComponent] = useState('LoginPage');

  const handleNavigationClick = (componentName) => {
    setActiveComponent(componentName);
  };

  let componentToRender;
  switch (activeComponent) {
    // case 'CreateAccountPage':
    //   componentToRender = <CreateAccountPage />;
    //   break;
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
      <div className="navbar">
        {/* <button onClick={() => handleNavigationClick('LoginPage')}>Login</button> */}
        <button onClick={() => handleNavigationClick('SleepInputPage')}>SleepInput</button>
        <button onClick={() => handleNavigationClick('DashboardPage')}>Dashboard</button>
        <button onClick={() => handleNavigationClick('LoginPage')}>Logout</button>
      </div>
      {componentToRender}
    </div>
  );
};

export default HomePage;
