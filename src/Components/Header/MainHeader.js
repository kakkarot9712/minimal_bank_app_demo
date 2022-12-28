import { Link } from "react-router-dom";
import AuthForm from "../Auth/AuthForm";
import "./MainHeader.css";

const MainHeader = (props) => {
  return (
    <header>
      <p>Welcome, {props.name}!</p>
      <Link to={"/"}>
        <img
          src="SVGs/bank-14-svgrepo-com.svg"
          alt="demo-bank-home"
          className="logo"
        />
      </Link>
      <AuthForm
        login={props.login}
        loggedIn={props.name !== "User"}
        logout={props.logout}
      />
    </header>
  );
};

export default MainHeader;
