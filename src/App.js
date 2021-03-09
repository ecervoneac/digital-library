import React, { useState } from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Home from "./pages/Home";
import Shelves from "./pages/Shelves";
import Header from "./components/Header";
import BookDetail from "./pages/BookDetail";
import { Container } from "semantic-ui-react";

const App = () => {
  const [theme, setTheme] = useState("light");

  const toogleThemeHandler = () => {
    if (theme === "light") {
      setTheme("dark");
    } else {
      setTheme("light");
    }
  };

  return (
    <div className={`body-wrapper ${theme}`}>
      <Router>
        <div className="header-wrapper">
          <Container>
            <Header />
            <button className="ui orange button" onClick={toogleThemeHandler}>
              Theme dark
            </button>
          </Container>
        </div>

        <Switch>
          <Route exact path="/" component={Home} />
          <Route exact path="/book/:slug" component={BookDetail} />
          <Route path="/shelves/" component={Shelves} />
        </Switch>
      </Router>
    </div>
  );
};

export default App;
