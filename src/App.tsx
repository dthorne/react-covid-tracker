import React from 'react';
import logo from './logo.svg';
import 'bootstrap/dist/css/bootstrap.css';
import RCTHeader from './components/RCTHeader/RCTHeader';
import './App.css';
import { DateContext, useDateContextValue } from './components/DatePicker/DatePickerContext';

function App() {
  const defaults = useDateContextValue();
  return (
    <DateContext.Provider value={defaults}>
      <div className="App">
        <RCTHeader />
      </div>
    </DateContext.Provider>
  );
}

export default App;
