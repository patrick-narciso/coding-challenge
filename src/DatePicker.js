import React from "react";
import ReactDatePicker from "react-datepicker";

import "react-datepicker/dist/react-datepicker.css";

/**
 * @param {string} value - selected date
 * @param {(string) => {}} onChange - func called whenever the date changes
 */
const DatePicker = ({ value, onChange }) => (
  <ReactDatePicker selected={value} onChange={onChange} />
);

export default DatePicker;
