import "./HistoryItem.css";

const HistoryItem = (props) => {
  return (
    <>
      <li className="history_item">
        <div>
          <span className={props.amount < 0 ? "withdrawal" : "deposit"}>
            {props.amount < 0 ? "Deposit" : "Withdrawal"}
          </span>
          <p>{new Date()}</p>
        </div>
        <p className="history_amount">{props.amount}</p>
      </li>
      <hr />
    </>
  );
};

export default HistoryItem;
