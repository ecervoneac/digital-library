import React, { useState, useEffect } from "react";
import { useSelector } from "react-redux";
import { Container, Header, Grid, Button, Divider } from "semantic-ui-react";
import BookItem from "../components/BookItem";

const Shelves = () => {
  const [gender, setGender] = useState(null);
  const { shelves } = useSelector((state) => state.shelvesList);

  const tabGenderHandler = (gender) => {
    setGender(shelves.filter((x) => x.gender === gender));
  };

  useEffect(() => {
    setGender(shelves);
  }, [setGender]);

  return (
    <section className="section-body">
      <Container>
        {gender && gender.length <= 0 && (
          <Header as="h2">Nothing to display</Header>
        )}

        <Button.Group>
          {shelves
            .map((x) => x.gender)
            .filter((allItems, i, a) => i == a.indexOf(allItems))
            .map((x, i) => (
              <Button
                color="orange"
                onClick={() => tabGenderHandler(x)}
                key={i}
              >
                {x}
              </Button>
            ))}
        </Button.Group>
        <Divider />
        <Grid doubling stackable columns={3}>
          {gender &&
            gender.map((book) => {
              return (
                <Grid.Column key={book.id}>
                  <BookItem book={book} showRemoveBtn={true} />
                </Grid.Column>
              );
            })}
        </Grid>
      </Container>
    </section>
  );
};

export default Shelves;
