import React from "react";

import feedbackk from "../Data/feedback";

function Feedbackstats({ feedback }) {
  let avg = feedback.reduce((acc, cur) => {
    return acc + cur.rating;
  }, 0);

  return (
    <div className="feedback-stats">
      <h4> feedbacks : {feedback.length} </h4>
      <h4>
        {" "}
        Average feedback :{" "}
        {isNaN(Math.floor(avg / feedback.length))
          ? "zero"
          : Math.floor(avg / feedback.length).toFixed(1)}
      </h4>
    </div>
  );
}

export default Feedbackstats;
