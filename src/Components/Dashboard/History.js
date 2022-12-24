import "./History.css";
import HistoryItem from "./HistoryItem";

const TrHistory = (props) => {
  const movements = props.movements;
  return (
    <section className="history">
      <ul>
        {movements.map((amount) => (
          <HistoryItem key={Math.random() * 100} amount={amount} />
        ))}
      </ul>
    </section>
  );
};

export default TrHistory;
