import React, { useState } from "react";

function RatingFeedback({ selectt }) {
  const [selected, setSelected] = useState(1);

  const selection = (event) => {
    const value = Number(event.target.value);
    setSelected(value);
    selectt(value);
  };

  return (
    <ul className="rating">
      {[1, 2, 3, 4, 5, 6, 7, 8, 9, 10].map((value) => (
        <li key={value}>
          <input
            type="radio"
            id={`num${value}`}
            name="rating"
            value={value}
            onChange={selection}
            checked={selected === value}
          />
          <label htmlFor={`num${value}`}>{value}</label>
        </li>
      ))}
    </ul>
  );
}

export default RatingFeedback;
