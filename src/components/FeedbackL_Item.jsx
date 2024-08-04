import { FaTimes } from "react-icons/fa";
import card from "./shared/card";
function FeedbackL_(item, handleclick) {
  return (
    <div className="card">
      <div className="num-display">{item.rating}</div>
      <button onClick={() => handleclick(item.id)} className="close">
        <FaTimes color="purple" />
      </button>
      <div className="text-display">{item.text}</div>  
    </div>
  );
}

export default FeedbackL_;
