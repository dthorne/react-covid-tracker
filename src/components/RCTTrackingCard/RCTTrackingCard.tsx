import React from 'react';
import './RCTTrackingCard.css';

const RCTTrackingCard: React.FC = () => {

  return (
    <div className="RCTTrackingCard card" data-testid="RCTTrackingCard">
      <div className="card-body">
        <h5 className="card-title">Card title</h5>
        <h6 className="card-subtitle mb-2 text-muted">Card subtitle</h6>
        <code>TODO: Place graph here</code>
      </div>
    </div>
  );
}

export default RCTTrackingCard;
