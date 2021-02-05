import React from 'react';
import './RCTHeader.css';
import { DateRangeInput, DateSingleInput, Datepicker, FocusedInput } from '@datepicker-react/styled'
import { DateContext } from '../DatePicker/DatePickerContext';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faPlus, faVirus } from '@fortawesome/free-solid-svg-icons'
import {CardListContext, ChartType} from '../CardListContext/CardListContext';

const initialState = { focusedInput: null };

interface State { focusedInput: FocusedInput; }

const RCTHeader: React.FC = () => {
  const [focusedInput, setFocusedInput] = React.useState<FocusedInput>(null);
  const {startDate, endDate, setDateRange} = React.useContext(DateContext);
  const {addCard} = React.useContext(CardListContext);
  function handleAddCard() {
    console.log('Adding card');
    addCard({
      title: `${Math.random()}`,
      type: ChartType.Line,
      countries: ['US', 'CN']
    });
  }
  return (
    <header className="RCTHeader"  data-testid="RCTHeader">
      <div className="header-body">
        <div><FontAwesomeIcon size="3x" icon={faVirus}/></div> 
        <div>
          <DateRangeInput
            onDatesChange={({startDate, endDate, focusedInput}) => {
              console.log(startDate, endDate, focusedInput);
              setDateRange(startDate, endDate);
              setFocusedInput(focusedInput);
            }}
            onFocusChange={focusedInput => setFocusedInput(focusedInput)}
            startDate={startDate} // Date or null
            endDate={endDate} // Date or null
            focusedInput={focusedInput} // START_DATE, END_DATE or null
          />
        </div> 
        <div><button className="btn btn-outline-rct" onClick={handleAddCard}><FontAwesomeIcon icon={faPlus}/></button></div> 
      </div>
    </header>
  );
}

export default RCTHeader;
