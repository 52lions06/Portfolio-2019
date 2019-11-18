import React from "react";

const Stars = ({ percentage }) => {
  const amountOFStars = percentage => {
    switch (percentage) {
      case 90:
      case 80:
        return (
          <div className="rating">
            <span className="fa fa-star"></span>
            <span className="fa fa-star"></span>
            <span className="fa fa-star"></span>
            <span className="fa fa-star"></span>
            <span>☆</span>
          </div>
        );
      case 70:
        return (
          <div className="rating">
            <span className="fa fa-star"></span>
            <span className="fa fa-star"></span>
            <span className="fa fa-star"></span>
            <span>☆</span>
            <span>☆</span>
          </div>
        );
      case 60:
        return (
          <div className="rating">
            <span className="fa fa-star"></span>
            <span className="fa fa-star"></span>
            <span>☆</span>
            <span>☆</span>
            <span>☆</span>
          </div>
        );
      default:
        return (
          <div className="rating">
            <span className="fa fa-star"></span>
            <span className="fa fa-star"></span>
            <span className="fa fa-star"></span>
            <span className="fa fa-star"></span>
            <span>☆</span>
          </div>
        );
    }
  };
  return <div className="rating-stars">{amountOFStars(percentage)}</div>;
};

export default Stars;
