import React, { useState } from "react";
import "./App.css";
import CurrentBalance from "./Components/Dashboard/CurrentBalance";
import Dashboard from "./Components/Dashboard/Dashboard";
import Summary from "./Components/Dashboard/Summary";
import MainHeader from "./Components/Header/MainHeader";
import HomeInfo from "./Components/HomeInfo/HomeInfo";

const account1 = {
  owner: "Vikalp Gandha",
  pin: 123,
  movements: [
    ["2022-08-10", -1000],
    ["2022-06-09", 5000],
    ["2022-06-01", 100],
    ["2022-05-25", -2999],
    ["2022-05-15", 10000],
    ["2022-04-30", 5555],
    ["2022-04-11", -599],
    ["2022-03-21", 7895],
    ["2022-03-05", -2000],
  ],
  interestRate: 1.2,
};

const account2 = {
  owner: "Bhavik Gandha",
  pin: 456,
  movements: [
    ["2022-07-09", 2000],
    ["2022-05-08", -5000],
    ["2022-04-30", -599],
    ["2022-04-24", 39990],
    ["2022-04-14", -1600],
    ["2022-03-29", 5555],
    ["2022-03-10", 5000],
    ["2022-02-20", 7895],
    ["2022-02-04", -2899],
  ],
  interestRate: 1.5,
};

const UsersList = [account1, account2];

function App() {
  const [current, setCurrent] = useState(0);
  const [userIndex, setUserIndex] = useState(-1);

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
    const total = movements.map((el) => el[1]).reduce((a, b) => a + b);
    setCurrent(total);
  };

  const login = (uname, pin) => {
    const ind = findAcc(uname);
    if (ind >= 0 && Users[ind].pin === Number(pin)) {
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
      UsersList.splice(userIndex, 1);
      logout();
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
      UsersList[ind].movements.unshift([
        new Date()
          .toLocaleString("sv-SE", {
            year: "numeric",
            month: "2-digit",
            day: "2-digit",
          })
          .replaceAll("/", "-"),
        +amount,
      ]);
      console.log();
      UsersList[userIndex].movements.unshift([
        new Date()
          .toLocaleString("sv-SE", {
            year: "numeric",
            month: "2-digit",
            day: "2-digit",
          })
          .replace("/", "-"),
        -1 * amount,
      ]);
      setCurrent(current - +amount);
      return;
    }
    alert("provided user does not exists");
  };

  const loan = (amount) => {
    setTimeout(() => {
      UsersList[userIndex].movements.unshift([
        new Date()
          .toLocaleString("sv-SE", {
            year: "numeric",
            month: "2-digit",
            day: "2-digit",
          })
          .replace("/", "-"),
        +amount,
      ]);
      setCurrent(current + Number(+amount));
    }, 400);
  };

  return (
    <React.Fragment>
      <MainHeader
        login={login}
        logout={logout}
        name={userIndex >= 0 ? Users[userIndex].owner : "User"}
      />
      {userIndex < 0 && <HomeInfo />}
      <main className={userIndex >= 0 ? "loggedin" : "loggedout"}>
        {userIndex >= 0 && (
          <>
            <CurrentBalance amount={current} />
            <Dashboard
              setCurrentHandler={setCurrent}
              movements={Users[userIndex].movements}
              close={userClose}
              loan={loan}
              transfer={transferToUser}
            />
            <Summary
              movements={Users[userIndex].movements}
              interestRate={Users[userIndex].interestRate}
              clear={logout}
            />
          </>
        )}
      </main>
    </React.Fragment>
  );
}

export default App;
