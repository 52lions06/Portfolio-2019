import React from "react";

const ProgressBar = ({ percentage }) => {
  return (
    <div className="progress-bar">
      <Filler percentage={percentage} />
    </div>
  );
};

export default ProgressBar;

const Filler = ({ percentage }) => {
  return (
    <div
      className="filler barbershop-pole"
      style={{ width: `${percentage}%` }}
    />
  );
};
