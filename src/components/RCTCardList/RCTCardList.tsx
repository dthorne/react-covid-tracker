import React from 'react';
import {CardListContext} from '../CardListContext/CardListContext';
import RCTTrackingCard from '../RCTTrackingCard/RCTTrackingCard';
import './RCTCardList.css';

const RCTCardList: React.FC = () => {
  const {cards} = React.useContext(CardListContext);
  return (
    <div className="card-grid">
      {cards.map((card, index) => (
        <RCTTrackingCard key={index} id={index} card={card} />
      ))}
    </div>
  );
}

export default RCTCardList;
