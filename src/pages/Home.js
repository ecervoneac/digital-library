import React, { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import BookItem from "../components/BookItem";
import { Grid, Container } from "semantic-ui-react";
import { requestData } from "../actions/bookActions";

const Home = () => {
  const { books } = useSelector((state) => state.booksList);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(requestData());
  }, []);
  return (
    <section className="section-body">
      <Container>
        <Grid doubling stackable columns={3}>
          {books.map((book) => {
            return (
              <Grid.Column key={book.id}>
                <BookItem book={book} />
              </Grid.Column>
            );
          })}
        </Grid>
      </Container>
    </section>
  );
};

export default Home;
