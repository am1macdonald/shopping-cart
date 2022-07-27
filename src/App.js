import React from "react";
import { Container } from "react-bootstrap";
import RouteSwitch from "./RouteSwitch";
function App() {
  return (
    <Container className="app" data-testId="app">
      <RouteSwitch />
    </Container>
  );
}

export default App;
