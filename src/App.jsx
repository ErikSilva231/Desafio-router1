import { BrowserRouter, Link, Routes, Route } from "react-router-dom";
import "./App.css";
import 'bootstrap/dist/css/bootstrap.min.css';
import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import Home from './views/Home';
import Contacto from './views/Contacto';
import Notfound from './views/NotFound';

function App() {
  return (
    <>
      <BrowserRouter>
        <Navbar expand="lg" className="bg-danger">
          <Container>
            <Navbar.Brand>
              <Link className="text-decoration-none"to="/home">🍰</Link>
              </Navbar.Brand>
            <Navbar.Toggle aria-controls="basic-navbar-nav" />
            <Navbar.Collapse id="basic-navbar-nav">
              <Nav className="me-auto">
                <Nav.Link>
                  <Link  className="text-decoration-none text-white" to="/home">🏠 Inicio</Link>
                </Nav.Link>
                <Nav.Link>
                  <Link  className="text-decoration-none text-white" to="/contacto">💬 Contacto</Link>
                </Nav.Link>
              </Nav>
            </Navbar.Collapse>
          </Container>
        </Navbar>

        <Routes>
        <Route path="/" element={<Home></Home>} />
        <Route path="/home" element={<Home></Home>} />
        <Route path="/contacto" element={<Contacto></Contacto>} />
        <Route path="*" element={<Notfound></Notfound>} />
        </Routes>

      </BrowserRouter>
      </>
   
  );
}

export default App;
