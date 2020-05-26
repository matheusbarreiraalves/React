import React from "react";
// Importantando o Home
import Home from "./components/home/home";
// Importantando o Contact
import Contact from "./components/contact/contact";
// Importando o materialize
import { Container } from "react-materialize";
// Importanto rotas
import { Switch, Route } from "react-router-dom";

const Main = () => (
  <main>
    <Container>
      <Switch>
        <Route exact path="/" component={Home} />
        <Route path="/contact" component={Contact} />
      </Switch>
    </Container>
  </main>
);

export default Main;
