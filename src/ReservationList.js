import React from "react";

// TODO: style to match the mock-up
const ReservationList = ({ reservations }) => (
  <div
    style={{ whiteSpace: "pre" }}
    dangerouslySetInnerHTML={{
      __html: JSON.stringify(reservations, null, 2).replaceAll("\n", "<br />"),
    }}
  />
);

export default ReservationList;
