import React, { useState } from 'react';
import DatePicker from 'react-datepicker';
import 'react-datepicker/dist/react-datepicker.css';

const SleepInputPage = () => {

  return (
    <div>
      <h2>Forum</h2>
      <form onSubmit={handleSubmit}>
        <div>
          <label>Date:</label>
          <DatePicker selected={selectedDate} onChange={handleDateChange} />
        </div>
        
        <div>
          <label>Quality of Sleep (1-5):</label>
          <select value={qualityOfSleep} onChange={handleQualityChange}>
            <option value={1}>1</option>
            <option value={2}>2</option>
            <option value={3}>3</option>
            <option value={4}>4</option>
            <option value={5}>5</option>
          </select>
        </div>

        <div>
          <label>Hours of Sleep:</label>
          <input type="number" value={hoursOfSleep} onChange={handleHoursChange} />
        </div>

        <button type="submit">Submit</button>
      </form>
    </div>
  );
};

export default SleepInputPage;