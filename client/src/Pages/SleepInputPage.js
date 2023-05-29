

import React, { useState } from 'react';
import DatePicker from 'react-datepicker';
import 'react-datepicker/dist/react-datepicker.css';
import { useMutation } from '@apollo/client';
// import { ADD_DURATION, ADD_QUALITY } from '../utils/mutations';
import HomePage from './HomePage';
import { Link } from 'react-router-dom';
import { ADD_SLEEP_INSTANCE_MUTATION } from "../utils/mutations";


const SleepInputPage = () => {
  const [selectedDate, setSelectedDate] = useState('');
  const [qualityOfSleep, setQualityOfSleep] = useState(0);
  const [hoursOfSleep, setHoursOfSleep] = useState(0);
const [addSleepInstance, { error }] = useMutation(
    ADD_SLEEP_INSTANCE_MUTATION
  );

  const handleGoHome = () => {
    return <HomePage/>
  }


  const handleDateChange = (date) => {
    setSelectedDate(date);
  };

  const handleQualityChange = (e) => {
    setQualityOfSleep(e.target.value);
console.log(qualityOfSleep);
  };

  const handleHoursChange = (e) => {
    setHoursOfSleep(e.target.value);
  };

  const handleSubmit = async (e) => {
    console.log(`selectedDate: ${selectedDate}`);
    console.log(`QualityOfSleep: ${qualityOfSleep}`);
    console.log(`HoursOfSleep: ${hoursOfSleep}`);
    e.preventDefault();

    const { data: sleepy } = addSleepInstance({
      variables: {
        sleepHours: parseInt(hoursOfSleep),
        quality: parseInt(qualityOfSleep),
      },
    });

    console.log(hoursOfSleep);

    // const test =addQuality({
    //   variables:{sleepQuality:parseInt(qualityOfSleep)}
    // })
  };


  // const handleUpdate = (e) => {
  //   e.preventDefault();
  //   console.log('Updated data:', selectedDate, qualityOfSleep, hoursOfSleep);
  // };

  return (
    <div>
      <div className="about-page background-image">
        <div className="form-container">
          <h2 className="hero about">How did you sleep?</h2>
          <form onSubmit={handleSubmit}>
            <div className="form-row question-container">
              <div className="about-form container">
                <div className="row">
                  <label class="col date-label">Date:</label>
                  <div className="col" style={{ padding: 0 }}>
                    <DatePicker
                      className="col datepicker"
                      selected={selectedDate}
                      onChange={handleDateChange}
                    />
                  </div>
                </div>
              </div>

              <div className="form-row about-form container">
                <div className="row">
                  <label className="mr-sm-2 sr-only col">
                    Quality of Sleep (1-5):
                  </label>
                  <select
                    value={qualityOfSleep}
                    onChange={handleQualityChange}
                    className="custom-select mr-sm-2 col quality"
                  >
                    <option value={1}>1 (worst)</option>
                    <option value={2}>2</option>
                    <option value={3}>3 (neutral)</option>
                    <option value={4}>4</option>
                    <option value={5}>5 (best)</option>
                  </select>
                </div>
              </div>

              <div className="form-row about-form container">
                <div className="row">
                  <label className="col">Hours of Sleep:</label>
                  <input
                    type="number"
                    value={hoursOfSleep}
                    onChange={handleHoursChange}
                    className="form-control hours col"
                  />
                </div>
              </div>
            </div>
          </form>
          <div className="d-flex flex-column align-items-center justify-content-center">
            {/* <input className="btn btn-primary submit" type="submit" onClick={handleUpdate} value="Update"></input> */}
            
            <input className="btn btn-primary submit" type="submit" onClick={handleSubmit} value="Submit"></input>
            <div className="d-flex flex-column align-items-center justify-content-center">
            {/* <input className="btn btn-primary submit" type="submit" onClick={handleUpdate} value="Update"></input> */}
            <Link to="/"><input className="btn btn-primary submit" type="submit" onClick={handleGoHome} value="Go Home"></input></Link>

            </div>

          </div>
        </div>
      </div>
    </div>
  );
};

export default SleepInputPage;
