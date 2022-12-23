import TransactionForm from "./TransactionForm";
import "./Dashboard.css";
import TrHistory from "./History";
import LoanForm from "./Loan";
import CloseAccountForm from "./CloseAccountForm";

const Dashboard = (props) => {
  return (
    <section className="dashboard">
      <div className="transaction_history">
        <TrHistory reverse={props.reverse} movements={props.movements} />
      </div>
      <div className="transfer_form form">
        <TransactionForm transfer={props.transfer} />
      </div>
      <div className="loan_form form">
        <LoanForm loan={props.loan} />
      </div>
      <div className="close-account_form form">
        <CloseAccountForm close={props.close} />
      </div>
    </section>
  );
};

export default Dashboard;
