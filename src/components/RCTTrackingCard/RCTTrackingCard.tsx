import {faTrash} from '@fortawesome/free-solid-svg-icons';
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome';
import React, {useState} from 'react';
import moment from 'moment';
import {ChartData, ChartDataSets} from 'chart.js';
import {Bar, Line} from 'react-chartjs-2';
import {Card, CardListContext, ChartType} from '../CardListContext/CardListContext';
import {DateContext} from '../DatePicker/DatePickerContext';
import './RCTTrackingCard.css';

function buildCovid19ApiUrl(startDate: Date | null, endDate: Date | null, country: string) {
  return `https://api.covid19api.com/country/${country}/status/confirmed?from=${getDateString(startDate)}T00:00:00Z&to=${getDateString(endDate)}T00:00:00Z`
}

function getDateString(date: Date | null): string {
  if (!date) return ``;
  return moment(date).format('YYYY-MM-DD');
}

const colors = ['#003844', '#006C67', '#42E2B8', '#FFB100', '#FFEBC6'];
function buildDataset(data: DataPoint[], index: number): ChartDataSets {
  const color = colors[index % colors.length];
  return {
    label: data[0]?.Country,
    fill: false,
    borderColor: color, 
    backgroundColor: color,
    borderWidth: 1,
    data: data.map(d => d.Cases)
  }
}

function buildLabels(data: DataPoint[]): string[] {
  return data.map(d => d.Date.split('T')[0]);
}

interface TrackingCardProps {
  id: number;
  card: Card;
}

interface DataPoint {
  Country: string;
  Cases: number;
  Date: string;
}

const RCTTrackingCard: React.FC<TrackingCardProps> = ({id, card: {title, type, countries}}) => {
  const {removeCard} = React.useContext(CardListContext);
  const {startDate, endDate} = React.useContext(DateContext);
  const [loading, setLoading] = useState<boolean>(false);
  const [chartData, setChartData] = useState<ChartData>();
  const handleRemoveCard = () => {
    removeCard(id); 
  }
  React.useEffect(() => {
    (async function() {
      setLoading(true);
      const sets = await Promise.all([
        fetch(buildCovid19ApiUrl(startDate, endDate, countries[0].Slug), {mode: 'cors'}).then(r => r.json()),
        fetch(buildCovid19ApiUrl(startDate, endDate, countries[1].Slug), {mode: 'cors'}).then(r => r.json())
      ]);
      setChartData({
        labels: buildLabels(sets[0]),
        datasets: sets.filter(s => s.length).map((s, index) => buildDataset(s, index))
      });
    })();
  }, [countries, startDate, endDate]);
  return (
    <div className="RCTTrackingCard card" data-testid={id}>
      <div>
        <h5 className="card-title">
          <div>{title}</div>
          <FontAwesomeIcon icon={faTrash} onClick={handleRemoveCard} />
        </h5>
        {chartData && type == ChartType.Line && <Line data={chartData as any} />}
        {chartData && type == ChartType.Bar && <Bar data={chartData as any} />}
      </div>
    </div>
  );
}

export default RCTTrackingCard;
