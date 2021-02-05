import React from 'react';
import {Card} from '../CardListContext/CardListContext';
import './RCTTrackingCard.css';

interface TrackingCardProps {
  id: number;
  card: Card;
}

const RCTTrackingCard: React.FC<TrackingCardProps> = ({id, card: {title, type, countries}}) => {
  return (
    <div className="RCTTrackingCard card" data-testid={id}>
      <div className="card-body">
        <h5 className="card-title">{title}</h5>
        <h6 className="card-subtitle mb-2 text-muted">{ countries.join('-') }</h6>
        <code>TODO: Place graph here</code>
      </div>
    </div>
  );
}

export default RCTTrackingCard;
