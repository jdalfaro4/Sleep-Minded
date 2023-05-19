import React, { useState } from 'react';
import DatePicker from 'react-datepicker';
import 'react-datepicker/dist/react-datepicker.css';

const SleepInputPage = () => {
  const [selectedDate, setSelectedDate] = useState('');
  const [qualityOfSleep, setQualityOfSleep] = useState('');
  const [hoursOfSleep, setHoursOfSleep] = useState('');

  const handleDateChange = (date) => {
    setSelectedDate(date);
  };

  const handleQualityChange = (e) => {
    setQualityOfSleep(Number(e.target.value));
  };

  const handleHoursChange = (e) => {
    setHoursOfSleep(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('Submitted data:', selectedDate, qualityOfSleep, hoursOfSleep);
  };

  const handleUpdate = (e) => {
    e.preventDefault();
    console.log('Updated data:', selectedDate, qualityOfSleep, hoursOfSleep);
  };

  return (
    // <div>
    //   <h2>Forum</h2>
    //   <form onSubmit={handleSubmit}>
    //     <div>
    //       <label>Date:</label>
    //       <DatePicker selected={selectedDate} onChange={handleDateChange} />
    //     </div>

    //     <div>
    //       <label>Quality of Sleep (1-5):</label>
    //       <select value={qualityOfSleep} onChange={handleQualityChange}>
    //         <option value={1}>1</option>
    //         <option value={2}>2</option>
    //         <option value={3}>3</option>
    //         <option value={4}>4</option>
    //         <option value={5}>5</option>
    //       </select>
    //     </div>

    //     <div>
    //       <label>Hours of Sleep:</label>
    //       <input type="number" value={hoursOfSleep} onChange={handleHoursChange} />
    //     </div>
    //     <button type="submit" onClick={handleUpdate}>
    //       Update
    //     </button>
    //     <button type="submit">Submit</button>
    //   </form>
    // </div>
    <div>
      <div className="about-page background-image">
        <div>
          <h2 className="hero about">How did you sleep?</h2>
          <form onSubmit={handleSubmit}>
            <div className="form-row question-container">
              <div className="about-form container">
                <div className="row">
                  <label className="col">Date:</label>
                  <DatePicker className="col" selected={selectedDate} onChange={handleDateChange} />
                </div>
              </div>

              <div className="form-row about-form container">
                <div className="row">
                  <label className="mr-sm-2 sr-only col">Quality of Sleep (1-5):</label>
                  <select value={qualityOfSleep} onChange={handleQualityChange} className="custom-select mr-sm-2 col">
                    <option value={1}>1</option>
                    <option value={2}>2</option>
                    <option value={3}>3</option>
                    <option value={4}>4</option>
                    <option value={5}>5</option>
                  </select>
                </div>
              </div>

              <div className="form-row about-form container">
                <div className="row">
                  <label className="col">Hours of Sleep:</label>
                  <input type="number" value={hoursOfSleep} onChange={handleHoursChange} className="form-control hours col" />
                </div>
              </div>

            </div>
          </form>
          <div className="d-flex flex-column align-items-center justify-content-center">
            <input className="btn btn-primary submit" type="submit" onClick={handleUpdate} value="Update"></input>
            <input className="btn btn-primary submit" type="submit" value="Submit"></input>
          </div>
        </div>

      </div >
    </div >
  );
};

export default SleepInputPage;

