import Nav from "react-bootstrap/Nav";

import "./styles.css";

const App: React.FC = () => {
  return (
    <Nav variant="tabs">
      <Nav.Item>
        <Nav.Link href="#/day">Day</Nav.Link>
      </Nav.Item>
      <Nav.Item>
        <Nav.Link href="#/week">Week</Nav.Link>
      </Nav.Item>
      <Nav.Item>
        <Nav.Link href="#/month">Month</Nav.Link>
      </Nav.Item>
    </Nav>
  );
};

export default App;
