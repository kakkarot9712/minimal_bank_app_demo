import React, { useState } from "react";
import "./App.css";
import CurrentBalance from "./Components/Dashboard/CurrentBalance";
import Dashboard from "./Components/Dashboard/Dashboard";
import Summary from "./Components/Dashboard/Summary";
import MainHeader from "./Components/Header/MainHeader";

const Users = {
  vg: { owner: "Vikalp", pin: 123, movements: [], interestRate: 1.2 },
  bg: { owner: "User 2", pin: 456, movements: [], interestRate: 1.5 },
  viku: { owner: "User 3", pin: 789, movements: [], interestRate: 0.7 },
};

function App() {
  const [current, setCurrent] = useState(0);
  const [user, setUser] = useState(null);
  const login = (uname, pin) => {
    if (Users[uname].pin === Number(pin)) {
      /* update Logic */
      setUser(Users[uname]);
      console.log(user);
      return;
    }
    alert("wrong username or pin provided");
  };
  const userClose = (uname, pin) => {
    if (Users[uname].pin === pin) {
      /* update Logic */
      delete Users[uname];
      setUser(null);
      setCurrent(0);
      return;
    }
    alert("wrong username or pin provided");
  };

  const transferToUser = (name, amount) => {
    if (Users[name]) {
      Users[name].movements.push(amount);
      user.movements.push(-1 * amount);
      setCurrent(current - amount);
      return;
    }
    alert("provided user does not exists");
  };

  const loan = (amount) => {
    setTimeout(() => {
      user.movements.push(amount);
      setCurrent(current + amount);
    }, 400);
  };

  return (
    <React.Fragment>
      <MainHeader login={login} name={user ? user.owner : "User"} />
      {user && (
        <main>
          <CurrentBalance amount={current} />
          <Dashboard
            setCurrentHandler={setCurrent}
            movements={user.movements}
            close={userClose}
            loan={loan}
            transfer={transferToUser}
          />
          <Summary movements={user.movements} />
        </main>
      )}
    </React.Fragment>
  );
}

export default App;
