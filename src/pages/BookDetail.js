import React from "react";
import { Link } from "react-router-dom";
import { Grid, Container, Divider } from "semantic-ui-react";
import { useSelector } from "react-redux";
// import { getBookDetail } from "../actions/bookActions";
import BookItemDetail from "../components/BookItemDetail";

const BookDetail = ({ match }) => {
  const { books } = useSelector((state) => state.booksList);
  const bookDetail = books.find((book) => book.slug === match.params.slug);

  if (!bookDetail) {
    return <div>No data found</div>;
  }

  return (
    <section className="section-body">
      <Container>
        <Link to="/" className="ui icon orange left labeled button">
          <i aria-hidden="true" className="left arrow icon"></i>
          Return
        </Link>
        <Divider />
        <Grid doubling stackable columns={1}>
          <Grid.Column>
            <BookItemDetail book={bookDetail} />
          </Grid.Column>
        </Grid>
      </Container>
    </section>
  );
};

export default BookDetail;
