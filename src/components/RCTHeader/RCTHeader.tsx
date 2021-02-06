import React from 'react';
import './RCTHeader.css';
import { DateRangeInput, FocusedInput } from '@datepicker-react/styled'
import { DateContext } from '../DatePicker/DatePickerContext';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faPlus, faVirus, faTimes } from '@fortawesome/free-solid-svg-icons'
import {CardListContext, ChartType} from '../CardListContext/CardListContext';
import Modal from 'react-modal';

interface CardForm {
  title: string;
  countryA: string;
  countryB: string;
  type: ChartType;
}

const customStyles = {
  content : {
    backgroundColor: '#ffebc6',
    zIndex: 200,
    top: '25%',
    left: '50%',
    right: 'auto',
    bottom: 'auto',
    marginRight: '-50%',
    transform: 'translate(-50%, -50%)'
  }
};

//Modal.setAppElement('#AppContainer');

const RCTHeader: React.FC = () => {
  const [focusedInput, setFocusedInput] = React.useState<FocusedInput>(null);
  const [isModalOpen, setIsModalOpen] = React.useState<boolean>(false);
  const [title, setTitle] = React.useState<string>("Covid Stats");
  const [countryA, setCountryA] = React.useState<string>("US");
  const [countryB, setCountryB] = React.useState<string>("CA");
  const [chartType, setChartType] = React.useState<ChartType>(ChartType.Line);
  const {startDate, endDate, setDateRange} = React.useContext(DateContext);
  const {addCard} = React.useContext(CardListContext);
  const {countryCodes} = {countryCodes: ['US', 'CN', 'CA', 'UK']}
  function handleChartType(chartType: any) {
    setChartType(chartType as ChartType);
  }
  function handleOpenModal() {
    setIsModalOpen(true);
  }
  function handleAddCard() {
    addCard({
      title,
      type: chartType,
      countries: [countryA, countryB]
    });
    setIsModalOpen(false);
  }
  function closeModal() {
    setIsModalOpen(false);
  }
  return (
    <span>
      <Modal
        isOpen={isModalOpen}
        onRequestClose={closeModal}
        style={customStyles}
        ariaHideApp={false}
      >
        <h2>
          <span>Add Tracking Card</span>
          <FontAwesomeIcon onClick={closeModal} icon={faTimes}/>
        </h2>
          <div>
            <label>Title:&nbsp;</label>
            <input
              type="text"
              value={title}
              onChange={e => setTitle(e.target.value)}
            />
          </div>
          <div>
            <label>Country:&nbsp;</label>
            <select
              
              value={countryA}
              onChange={e=>setCountryA(e.target.value)}
              onBlur={e=>setCountryA(e.target.value)}
            >
              {countryCodes.map((code) => (
                <option key={code} value={code}>{code}</option>
              ))}
            </select>
          </div>
          <div>
            <label>Country:&nbsp;</label>
            <select
              value={countryB}
              onChange={e=>setCountryB(e.target.value)}
              onBlur={e=>setCountryB(e.target.value)}
            >
              {countryCodes.map((code) => (
                <option key={code} value={code}>{code}</option>
              ))}
            </select>
          </div>
          <div>
            <label>ChartType:&nbsp;</label>
            <select
              value={chartType}
              onChange={e=>handleChartType(e.target.value)}
              onBlur={e=>handleChartType(e.target.value)}
            >
              <option value={ChartType.Line}>Line</option>
              <option value={ChartType.Bar}>Bar</option>
            </select>
          </div>
          <div>
          <button className="btn btn-primary" onClick={handleAddCard}>Add Card</button> 
          </div>
      </Modal>
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
          <div><button className="btn btn-outline-rct" onClick={handleOpenModal}><FontAwesomeIcon icon={faPlus}/></button></div> 
        </div>
      </header>
    </span>
  );
}

export default RCTHeader;
