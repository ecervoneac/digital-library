import React, { useState, useEffect } from "react";
import { Icon } from "semantic-ui-react";
import PropTypes from "prop-types";

const StarRating = ({ getRatingVal, bookRating }) => {
  const [rating, setRating] = useState(null);
  const [hover, setHover] = useState(null);

  const getRating = (value) => {
    setRating(value);
    getRatingVal(value);
  };

  useEffect(() => {
    setRating(bookRating);
  }, [setRating]);

  return (
    <div className="star-rating">
      {[...Array(5)].map((item, index) => {
        const ratingValue = index + 1;
        return (
          <label htmlFor={ratingValue} key={index}>
            <input
              type="radio"
              id={ratingValue}
              value={ratingValue}
              onClick={() => getRating(ratingValue)}
              onMouseEnter={() => setHover(ratingValue)}
              onMouseLeave={() => setHover(null)}
            />
            <Icon
              name="star"
              className={ratingValue <= (hover || rating) ? "fill" : ""}
            />
          </label>
        );
      })}
    </div>
  );
};

StarRating.propTypes = {
  getRatingVal: PropTypes.func,
};

export default StarRating;
