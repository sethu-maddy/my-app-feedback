import React, { useState } from "react";
import data from "./Data/feedback";
import FeedbackL_ from "./components/FeedbackL_Item";
import Feedbackstats from "./components/Feedbackstats";
function Feedbacknewlist() {
  const [feedback, setfeedback] = useState(data);

  const deletefeedback = (idd) => {
    setfeedback(feedback.filter((item) => item.id != idd));
  };

  if (!feedback || feedback.length === 0) {
    return <p>Empty</p>;
  }

  return (
    <div className="feedback-List">
      <Feedbackstats feedback={feedback} />
      {feedback.map((feedback) => (
        <FeedbackL_ item={feedback} handleclick={deletefeedback} />
      ))}
    </div>
  );
}

export default Feedbacknewlist;
