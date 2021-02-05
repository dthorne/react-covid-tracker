import React from 'react';
import 'bootstrap/dist/css/bootstrap.css';
import './App.css';
import RCTHeader from './components/RCTHeader/RCTHeader';
import RCTTrackingCard from './components/RCTTrackingCard/RCTTrackingCard';
import {DateContext, useDateContextValue} from './components/DatePicker/DatePickerContext';

function App() {
  const defaultDateContextValue = useDateContextValue();
  const graphData = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
  return (
    <DateContext.Provider value={defaultDateContextValue}>
      <div className="App">
        <RCTHeader />
        <div className="card-grid">
          {graphData.map((data) => (
            <RCTTrackingCard key={data} />
          ))}
        </div>
      </div>
    </DateContext.Provider>
  );
}

export default App;
