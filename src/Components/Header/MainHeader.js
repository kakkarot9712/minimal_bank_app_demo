import { Link } from "react-router-dom";
import AuthForm from "../Auth/AuthForm";
import "./MainHeader.css";

const MainHeader = () => {
  return (
    <header>
      <p>Good afternoon, User</p>
      <Link to={"/"}>
        <img src="SVGs/bank-14-svgrepo-com.svg" alt="demo-bank-home" />
      </Link>
      <AuthForm />
    </header>
  );
};

export default MainHeader;