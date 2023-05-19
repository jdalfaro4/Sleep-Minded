import React, { useState } from 'react';
// import CreateAccountPage from './CreateAccountPage';
import LoginPage from './LoginPage';
import SleepInputPage from './SleepInputPage';
import Chart from './Chart';
import "bootstrap/dist/css/bootstrap.min.css";
import "../App.css";

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
    case 'Chart':
      componentToRender = <Chart />;
      break;
    default:
      componentToRender = <LoginPage />;
  }

  return (
    <div className="homepage background-image">
      <div>

        <nav className="navbar navbar-expand-lg sticky-top back">
          <a className="navbar-brand km">SleepMinded</a>
          <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon" />
          </button>
          <div className="collapse navbar-collapse justify-content-end" id="navbarNav">
            <ul className="navbar-nav">
              <li className="nav-item">
                <a className="nav-link" style={{ color: "white" }} id="contact" onClick={() => handleNavigationClick('SleepInputPage')}>Sleep Input</a>
              </li>
              <li className="nav-item">
                <a className="nav-link" style={{ color: "white" }} id="portfolio" onClick={() => handleNavigationClick('Chart')}>Chart</a>
              </li>
              <li className="nav-item">
                <a className="nav-link" style={{ color: "white" }} id="resume" onClick={() => handleNavigationClick('LoginPage')}>Logout</a>
              </li>
            </ul>
          </div>
        </nav>

      </div>
      {componentToRender}
    </div>
  );
};

export default HomePage;


