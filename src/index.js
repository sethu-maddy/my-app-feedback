import React from "react";
import ReactDOM from "react-dom";
import "./index.css";

import Header from "./components/header";
import Form from "./Feedback_form"; // Ensure this matches the actual export
import FeedbackNewList from "./Feedbacknewlist";

function App() {
  return (
    <div>
      <Header bgcolor="blue" text="red" />
      <Form />
      <FeedbackNewList />
    </div>
  );
}

ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById("root")
);
