import React from "react";

/**
 * @param {string} value - selected value
 * @param {(string) => {}} onChange - func called whenever the value changes
 * @param {{ value: string, name: string }[]} options - list of options
 */
const DropDownSelect = ({ value, onChange, options }) => (
  <select value={value} onChange={(e) => onChange(e.target.value)}>
    {options.map((option) => (
      <option key={option.id} value={option.room.name}>
        {option.room.name}
      </option>
    ))}
  </select>
);

export default DropDownSelect;
