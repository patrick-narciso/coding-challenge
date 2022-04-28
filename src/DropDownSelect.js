import React from "react";

/**
 * @param {string} value - selected value
 * @param {(string) => {}} onChange - func called whenever the value changes
 * @param {{ value: string, name: string }[]} options - list of options
 */
const DropDownSelect = ({ value, onChange, options }) => (
  <select value={value} onChange={(e) => onChange(e.target.value)}>
    {options.map(({ value, name }) => (
      <option key={value} value={value}>
        {name}
      </option>
    ))}
  </select>
);

export default DropDownSelect;
