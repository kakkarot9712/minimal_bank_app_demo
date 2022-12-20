import TransactionForm from "./TransactionForm";
import "./Dashboard.css";
import TrHistory from "./History";
import LoanForm from "./Loan";
import CloseAccountForm from "./CloseAccountForm";

const Dashboard = () => {
  return (
    <section className="dashboard">
      <div className="transaction_history">
        <TrHistory />
      </div>
      <div className="transfer_form form">
        <TransactionForm />
      </div>
      <div className="loan_form form">
        <LoanForm />
      </div>
      <div className="close-account_form form">
        <CloseAccountForm />
      </div>
    </section>
  );
};

export default Dashboard;
