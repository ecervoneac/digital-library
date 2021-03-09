import React from "react";
import {
  Image,
  Button,
  Divider,
  Header,
  Grid,
  Label,
  Message,
} from "semantic-ui-react";
import ProtpTypes from "prop-types";
import StarRating from "./StarRating";
import { useDispatch } from "react-redux";
import { rateBook, addReview } from "../actions/bookActions";
import Review from "./Review";
import { addToShelve } from "../actions/shelvesActions";

const BookItemDetail = ({ book }) => {
  const { name, author, gender, description, url, slug, rating, review } = book;
  const dispatch = useDispatch();

  const addToShelveHandler = () => {
    dispatch(addToShelve(slug, gender));
  };

  const getRatingVal = (value) => {
    dispatch(rateBook(slug, value));
  };

  const getReview = (review) => {
    dispatch(addReview(slug, review));
  };

  return (
    <>
      <Grid>
        <Grid.Column width={4}>
          <Image src={url} />
        </Grid.Column>
        <Grid.Column width={9}>
          <Header as="h2" color="brown">
            {name} by {author}
          </Header>
          <Label as="a" tag>
            {gender}
          </Label>
          <Divider />
          {description}
        </Grid.Column>
        <Grid.Column width={3}>
          <Button fluid color="orange" onClick={addToShelveHandler}>
            Add To Shelve
          </Button>
          <Divider />
          <StarRating getRatingVal={getRatingVal} bookRating={rating} />
        </Grid.Column>
      </Grid>
      <Divider />
      <div className="review-wrapper">
        {review && <Message header="Your Review" content={review} />}
        <Review getReview={getReview} />
      </div>
    </>
  );
};

BookItemDetail.propTypes = {
  name: ProtpTypes.string,
  author: ProtpTypes.string,
  gender: ProtpTypes.string,
  description: ProtpTypes.string,
  url: ProtpTypes.string,
};

export default BookItemDetail;
