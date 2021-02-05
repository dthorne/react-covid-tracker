import React from 'react';
import 'bootstrap/dist/css/bootstrap.css';
import './App.css';
import RCTHeader from './components/RCTHeader/RCTHeader';
import RCTCardList from './components/RCTCardList/RCTCardList';
import {DateContext, useDateContextValue} from './components/DatePicker/DatePickerContext';
import {CardListContext, useCardListContext} from './components/CardListContext/CardListContext';

function App() {
  const defaultDateContextValue = useDateContextValue();
  const cardsContextValue = useCardListContext();
  return (
    <CardListContext.Provider value={cardsContextValue}>
        <div className="App">
          <RCTHeader />
          <RCTCardList />
        </div>
    </CardListContext.Provider>
  );
}

export default App;
