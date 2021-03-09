import React, { useState } from "react";
import { Form, Button } from "semantic-ui-react";

const Review = ({ getReview }) => {
  const [review, setReview] = useState("");

  const submitHandler = () => {
    getReview(review);
    setReview("");
  };

  return (
    <>
      <Form onSubmit={submitHandler}>
        <Form.TextArea
          label="Review"
          placeholder="Your Review"
          value={review}
          name="textarea"
          onChange={(e) => setReview(e.target.value)}
        />
        <Button color="orange" type="submit">
          Add Review
        </Button>
      </Form>
    </>
  );
};

export default Review;
