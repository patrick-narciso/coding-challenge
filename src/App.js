import moment from "moment";
import React, { useState, useEffect, useMemo } from "react";

import "./App.css";

import DatePicker from "./DatePicker";
import DropDownSelect from "./DropDownSelect";
import ReservationList from "./ReservationList";
import { getReservations } from "./services/reservations";

const App = () => {
  const [reservations, setReservations] = useState([]);
  const [date, setDate] = useState("");
  const [room, setRoom] = useState("room-a");

  const fetchReservations = async () => {
    const response = await getReservations();
    setReservations(response);
  };

  const filteredReservations = useMemo(() => {
    const dateSelected = moment(date).format("MMM Do YY");
    const result = reservations.filter(
      ({ end, start, room: { name } }) =>
        (moment(start).format("MMM Do YY") === dateSelected &&
          name.toLowerCase() === room.toLowerCase()) ||
        (moment(end).format("MMM Do YY") === dateSelected &&
          name.toLowerCase() === room.toLowerCase())
    );
    return result;
  }, [date, reservations, room]);

  useEffect(() => {
    fetchReservations();
  }, []);

  return (
    <div className="app">
      <div className="app-filters">
        <div className="app-filter-item">
          <DatePicker value={date} onChange={(newDate) => setDate(newDate)} />
        </div>
        <div className="app-filter-item">
          <DropDownSelect
            value={room}
            onChange={(newRoom) => setRoom(newRoom)}
            options={reservations}
          />
        </div>
      </div>
      <div className="app-reservations">
        <ReservationList reservations={filteredReservations} />
      </div>
    </div>
  );
};

export default App;
