import "./HistoryItem.css";

const HistoryItem = () => {
  return (
    <>
      <li className="history_item">
        <div>
          <span className="withdrawal">Deposit</span>
          <p>Today</p>
        </div>
        <p className="history_amount">$1000</p>
      </li>
      <hr />
    </>
  );
};

export default HistoryItem;
