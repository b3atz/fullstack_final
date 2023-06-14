import { Container, Nav, Navbar } from 'react-bootstrap'
import { Routes, Route } from "react-router";
import { Home } from './pages/Home';
import Workouts from './pages/Workouts';
import 'bootstrap/dist/css/bootstrap.min.css';

function App() {

  return (
    <>
      <Navbar bg="dark" variant="dark" expand="lg">
        <Container>
            <Navbar.Brand href="#home">Navbar</Navbar.Brand>
            <Nav>
              <Nav.Link href="/">Home</Nav.Link>
              <Nav.Link href="/workouts">Workouts</Nav.Link>
              <Nav.Link href="/exercises">Exercise List</Nav.Link>
            </Nav>
          </Container>
      </Navbar>
      <Routes>
        <Route path="/" element={<Home />}></Route>
        <Route path="/workouts" element={<Workouts />}></Route>
      </Routes>
    </>
  )
}

export default App
