import { React, useState } from "react";
import PrintoutPage from "../PrintoutPage";
import "./index.css";

const Dashboard = () => {
  const [isState, setState] = useState(false);
  const [user, setUsers] = useState({
    name: "",
    email: "",
    number: "",
    trip: "",
    stay: "",
    count: "",
    amount: "",
    city: "",
    startDate: "",
  });

  let name, value;
  const getUserData = (event) => {
    name = event.target.name;
    value = event.target.value;

    setUsers({ ...user, [name]: value });
  };

  const postdetails = () => {
    setState(true);
  };

  const onrenderPage = () => {
    return (
      <div className="body">
        <form method="POST" className="form">
          <div className="inputs">
            <label className="labels">NAME</label>
            <input
              className="input"
              type="text"
              name="name"
              value={user.name}
              onChange={getUserData}
              autoComplete="off"
              required
            />
          </div>
          <div className="inputs">
            <label className="labels">EMAIL</label>
            <input
              className="input"
              type="text"
              name="email"
              value={user.email}
              onChange={getUserData}
              autoComplete="off"
              required
            />
          </div>
          <div className="inputs">
            <label className="labels">NUMBER</label>
            <input
              className="input"
              type="text"
              name="number"
              value={user.number}
              onChange={getUserData}
              autoComplete="off"
              required
            />
          </div>
          <div className="inputs">
            <label className="labels">TRIP</label>
            <input
              className="input"
              type="text"
              name="trip"
              value={user.trip}
              onChange={getUserData}
              autoComplete="off"
              required
            />
          </div>
          <div className="inputs">
            <label className="labels">STAY</label>
            <input
              className="input"
              type="text"
              name="stay"
              value={user.stay}
              onChange={getUserData}
              autoComplete="off"
              required
            />
          </div>
          <div className="inputs">
            <label className="labels">COUNT</label>
            <input
              className="input"
              type="number"
              name="count"
              value={user.count}
              onChange={getUserData}
              autoComplete="off"
              required
            />
          </div>
          <div className="inputs">
            <label className="labels">AMOUNT</label>
            <input
              className="input"
              type="number"
              name="amount"
              value={user.amount}
              onChange={getUserData}
              autoComplete="off"
              required
            />
          </div>
          <div className="inputs">
            <label className="labels">CITY</label>
            <input
              className="input"
              type="text"
              name="city"
              value={user.city}
              onChange={getUserData}
              autoComplete="off"
              required
            />
          </div>
          <div className="inputs">
            <label className="labels">START DATE</label>
            <input
              className="input"
              type="date"
              name="startdate"
              value={user.startDate}
              onChange={getUserData}
              autoComplete="off"
              required
            />
          </div>
        </form>
        <button type="button" onClick={postdetails}>
          submit
        </button>
      </div>
    );
  };

  return (
    <>{isState ? <PrintoutPage customerDetails={user} /> : onrenderPage()}</>
  );
};

export default Dashboard;
