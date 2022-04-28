import React from "react";

import "./App.css";

import DatePicker from "./DatePicker";
import DropDownSelect from "./DropDownSelect";
import ReservationList from "./ReservationList";

const App = () => {
  // TODO: fetch reservations from the API

  return (
    <div className="app">
      <div className="app-filters">
        <div className="app-filter-item">
          {/* TODO: keep track of state */}
          <DatePicker
            value={new Date()}
            onChange={(newDate) => console.log(newDate)}
          />
        </div>
        <div className="app-filter-item">
          {/* TODO: populate options with rooms from the API */}
          {/* TODO: keep track of state */}
          <DropDownSelect
            value="room-a"
            onChange={(newRoom) => console.log(newRoom)}
            options={[
              { value: "room-a", name: "Room A" },
              { value: "room-b", name: "Room B" },
            ]}
          />
        </div>
      </div>
      <div className="app-reservations">
        {/* TODO: pass filtered reservations here */}
        <ReservationList
          reservations={[
            { start: new Date(), end: new Date(), room: "room-b" },
            { start: new Date(), end: new Date(), room: "room-a" },
            { start: new Date(), end: new Date(), room: "room-b" },
          ]}
        />
      </div>
    </div>
  );
};

export default App;
