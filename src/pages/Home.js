import React from "react";
import { useSelector } from "react-redux";
import BookItem from "../components/BookItem";
import { Grid, Container } from "semantic-ui-react";

const Home = () => {
  const { books } = useSelector((state) => state.booksList);

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
