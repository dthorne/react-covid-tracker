import React from 'react';
import './RCTHeader.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faPlus } from '@fortawesome/free-solid-svg-icons'

const RCTHeader: React.FC = () => {
  const [startDate, setStartDate] = React.useState(new Date());  
  return (
    <header className="RCTHeader"  data-testid="RCTHeader">
      <div className="header-body">
        <div>React Covid Tracker</div> 
        <div>DATE PICKER PLACEHOLDER</div> 
        <div><button className="btn btn-outline-rct"><FontAwesomeIcon icon={faPlus}/></button></div> 
      </div>
    </header>
  );
}

export default RCTHeader;
