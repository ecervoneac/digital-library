import React from "react";
import { Card, Image } from "semantic-ui-react";
import { Link } from "react-router-dom";
import ProtpTypes from "prop-types";

const BookItem = ({ book }) => {
  const { name, url, slug } = book;

  return (
    <Link to={`/book/${slug}`}>
      <Card>
        <Image src={url} wrapped ui={false} />
        <Card.Content>
          <Card.Header textAlign="center">{name}</Card.Header>
        </Card.Content>
      </Card>
    </Link>
  );
};

BookItem.propTypes = {
  name: ProtpTypes.string,
  url: ProtpTypes.string,
};

export default BookItem;
