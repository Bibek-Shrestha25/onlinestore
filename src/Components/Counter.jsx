import React from "react";

let count = 0;
const handleIncrease = () => {
  count++;
};
const Counter = () => {
  return (
    <>
      <div className="h-96 w-full flex justify-center items-center">
        counter:{count}
        <button className="edit" onClick={handleIncrease}>
          Increase Count
        </button>
        <button className="btn btn-primary">Reset Count</button>
        <button className="btn btn-danger">Decrease Count</button>
      </div>
    </>
  );
};

export default Counter;
