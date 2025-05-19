import { useState } from "react";

const SingleItem = ({ name, completed, removeItem }) => {
  const [isChecked, setIsChecked] = useState(completed);
  return (
    <div className="single-item">
      <input
        type="checkbox"
        value={isChecked}
        onChange={() => setIsChecked(!isChecked)}
      />
      <p
        style={{
          textTransform: "capitalize",
          textDecoration: isChecked && "line-through",
        }}
      >
        {name}
      </p>
      <button type="button" className="btn remove-btn">
        delete
      </button>
    </div>
  );
};
export default SingleItem;
