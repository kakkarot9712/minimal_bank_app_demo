import React, { useState } from "react";
import "./App.css";
import CurrentBalance from "./Components/Dashboard/CurrentBalance";
import Dashboard from "./Components/Dashboard/Dashboard";
import Summary from "./Components/Dashboard/Summary";
import MainHeader from "./Components/Header/MainHeader";

const account1 = {
  owner: "Vikalp Gandha",
  pin: 123,
  movements: [1000, -50, 500, -5000, 10000, -6500, 10999, -150, -2000],
  interestRate: 1.2,
};

const account2 = {
  owner: "Bhavik Gandha",
  pin: 456,
  movements: [100, -500, 5000, 5655, 987, -650, 10999, 50778, -2000],
  interestRate: 1.5,
};

const UsersList = [account1, account2];

function App() {
  const [current, setCurrent] = useState(0);
  const [userIndex, setUserIndex] = useState(-1);
  const [reverse, setReverse] = useState(false);

  const Users = UsersList.map((account) => {
    const owner = account.owner;
    const sagments = owner.split(" ");
    const username = sagments.map((name) => name[0].toLowerCase()).join("");
    return { ...account, username: username };
  });

  const findAcc = (uname) => {
    const index = Users.findIndex((account) => uname === account.username);
    if (index >= 0) {
      return index;
    }
    return -1;
  };

  const getCurrent = (movements) => {
    const total = movements.reduce((a, b) => a + b);
    setCurrent(total);
  };

  const clearAcc = () => {
    setCurrent(0);
    setUserIndex(-1);
  };

  const login = (uname, pin) => {
    const ind = findAcc(uname);
    if (ind >= 0 && Users[ind].pin === Number(pin)) {
      /* update Logic */
      setCurrent(0);
      setUserIndex(ind);
      getCurrent(Users[ind].movements);
      return;
    }
    alert("wrong username or pin provided");
  };
  const userClose = (uname, pin) => {
    if (
      Users[userIndex].username === uname &&
      Users[userIndex].pin === Number(pin)
    ) {
      /* update Logic */
      Users.splice(userIndex, 1);
      setUserIndex(-1);
      setCurrent(0);
      return;
    }
    alert("wrong username or pin provided");
  };

  const logout = () => {
    setUserIndex(-1);
    setCurrent(0);
  };

  const transferToUser = (name, amount) => {
    if (current < amount) {
      return alert(`unsufficient funds, cant transfer to ${name}`);
    }
    const ind = findAcc(name);
    if (ind >= 0) {
      Users[ind].movements.unshift(+amount);
      Users[userIndex].movements.unshift(-1 * amount);
      setCurrent(current - +amount);
      return;
    }
    alert("provided user does not exists");
  };

  const loan = (amount) => {
    setTimeout(() => {
      Users[userIndex].movements.unshift(+amount);
      setCurrent(current + Number(+amount));
    }, 400);
  };

  const toggleReverse = () => {
    console.log("here");
    reverse ? setReverse(false) : setReverse(true);
  };

  return (
    <React.Fragment>
      <MainHeader
        login={login}
        logout={logout}
        name={userIndex >= 0 ? Users[userIndex].owner : "User"}
      />
      {userIndex >= 0 && (
        <main>
          <CurrentBalance amount={current} />
          <Dashboard
            setCurrentHandler={setCurrent}
            movements={Users[userIndex].movements}
            close={userClose}
            loan={loan}
            reverse={reverse}
            transfer={transferToUser}
          />
          <Summary
            movements={Users[userIndex].movements}
            interestRate={Users[userIndex].interestRate}
            clear={clearAcc}
            toggleReverse={toggleReverse}
          />
        </main>
      )}
    </React.Fragment>
  );
}

export default App;
