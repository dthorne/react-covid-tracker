import {faTrash} from '@fortawesome/free-solid-svg-icons';
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome';
import React, {useState} from 'react';
import {Card, CardListContext} from '../CardListContext/CardListContext';
import {DateContext} from '../DatePicker/DatePickerContext';
import './RCTTrackingCard.css';

function buildCovid19ApiUrl(startDate: Date | null, endDate: Date | null, country: string) {
  return `https://api.covid19api.com/country/${country}/status/confirmed?from=${startDate}&to=${endDate}`
}

interface TrackingCardProps {
  id: number;
  card: Card;
}

const RCTTrackingCard: React.FC<TrackingCardProps> = ({id, card: {title, type, countries}}) => {
  const {removeCard} = React.useContext(CardListContext);
  const {startDate, endDate} = React.useContext(DateContext);
  const [loading, setLoading] = useState<boolean>(false);
  const handleRemoveCard = () => {
    removeCard(id); 
  }
  React.useEffect(() => {
    (async function() {
      setLoading(true);
      const datasets = await Promise.all([
        fetch(buildCovid19ApiUrl(startDate, endDate, countries[0])).then(r => r.json()),
        fetch(buildCovid19ApiUrl(startDate, endDate, countries[1])).then(r => r.json())
      ]);
      //TODO: Replace with piping data into chart.js
      datasets.forEach(console.log);
    })();
  }, [countries, startDate, endDate]);
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
