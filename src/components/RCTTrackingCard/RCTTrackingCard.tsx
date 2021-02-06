import {faTrash} from '@fortawesome/free-solid-svg-icons';
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome';
import React from 'react';
import {Card, CardListContext} from '../CardListContext/CardListContext';
import './RCTTrackingCard.css';

interface TrackingCardProps {
  id: number;
  card: Card;
}

const RCTTrackingCard: React.FC<TrackingCardProps> = ({id, card: {title, type, countries}}) => {
  const {removeCard} = React.useContext(CardListContext);
  const handleRemoveCard = () => {
    removeCard(id); 
  }
  return (
    <div className="RCTTrackingCard card" data-testid={id}>
      <div>
        <h5 className="card-title">
          <div>{title}</div>
          <FontAwesomeIcon icon={faTrash} onClick={handleRemoveCard} />
        </h5>
        <h6 className="card-subtitle mb-2 text-muted">{ countries.join(' & ') }</h6>
        <code>TODO: Place graph here</code>
      </div>
    </div>
  );
}

export default RCTTrackingCard;
