import React from "react";

function Dropdown({ title, options, onChange }) {
  return (
    <div className="text-white flex items-center gap-2">
      {/* Display dropdown title */}
      <h1 className="text-xs md:text-md">{title}</h1>
      {/* Dropdown select element */}
      <select
        className=" rounded-md outline-none border outline-non border-gray-300 shadow-sm px-4 py-2 text-xs md:text-sm text-white bg-zinc-900 capitalize"
        name="dropdown"
        onChange={onChange} // Update state when an option is selected
      >
        {/* Map through options and create dropdown options */}
        {options.map((value, key) => (
          <option key={key} value={value} >
            {value.toUpperCase()}
          </option>
        ))}
      </select>
    </div>
  );
}

export default Dropdown;
