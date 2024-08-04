import Card from "./components/shared/card";
import { useState } from "react";
import Button from "./components/shared/BUtton";
import RatingFeedback from "./components/Rating_feedback";

function FeedbackForm() {
  const [text, setText] = useState("");
  const [buttonEnabled, setButtonEnabled] = useState(true);
  const [message, setMessage] = useState("");
  const [rating, setRating] = useState(1);

  const handleText = (event) => {
    const value = event.target.value;
    if (value === "") {
      setButtonEnabled(true);
      setMessage(null);
    } else if (value !== "" && value.length <= 10) {
      setButtonEnabled(true);
      setMessage("Please enter a minimum of 10 letters");
    } else {
      setButtonEnabled(false);
      setMessage(null);
    }
    setText(value);
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    console.log("sehtuhu");
  };

  return (
    <div className="form">
      <Card>
        <form onSubmit={handleSubmit}>
          <h2>Please submit your feedback</h2>
          <RatingFeedback selectt={(rating) => setRating(rating)} />
          <div className="input-group">
            <input
              onChange={handleText}
              type="text"
              placeholder="Write a review"
              value={text}
            />
            <Button
              version="secondary"
              isdisabled={buttonEnabled}
              onClick={handleSubmit}
            >
              Save
            </Button>
          </div>
          {message && <div>{message}</div>}
        </form>
      </Card>
    </div>
  );
}

export default FeedbackForm;
