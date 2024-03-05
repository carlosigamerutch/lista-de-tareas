import React from 'react';
import Navbar from 'react-bootstrap/Navbar';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import NavDropdown from 'react-bootstrap/NavDropdown';
import Lista from './components/lista.jsx';
import Switch from 'components/fondo.jsx';
// Bootstrap CSS
import "bootstrap/dist/css/bootstrap.min.css";
// Bootstrap Bundle JS
//import FluidExample from 'components/image.jsx';
import UncontrolledExample from 'components/carousel.jsx';
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
const router = createBrowserRouter([
  {
    path: "/",
    element: <UncontrolledExample></UncontrolledExample>
  },
  {
    path: "/Lista",
    element: <Lista></Lista>
  },
]);
function App() {
  return (
    <div className="App" style={{ textAlign: 'center' }}>
      <Navbar expand="lg" className="bg-body-tertiary">
        <Container>
          <Navbar.Brand href="#home">mi sitio web </Navbar.Brand>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="me-auto">
              <Nav.Link href="http://localhost:3000">Home</Nav.Link>
              <Nav.Link href="http://localhost:3000/lista">Lista</Nav.Link>
              <Nav.Link href="https://www.utch.edu.mx/">mi escuela donde estudio</Nav.Link>
              <NavDropdown title="accesos directos" id="basic-nav-dropdown">
                <NavDropdown.Item href="https://open.spotify.com/__noul__?pfhp=2c2ccb58-8a92-4713-a1c0-8b43b3090b49">spotify</NavDropdown.Item>
                <NavDropdown.Item href="https://www.utch.edu.mx/index.php/becas/">
                  becas </NavDropdown.Item>
                
                <NavDropdown.Item href="https://github.com/">cuenta de github </NavDropdown.Item>
                <NavDropdown.Divider />
                
              </NavDropdown>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
      
      <RouterProvider router={router} />
      <Switch></Switch>
      
    </div>
  );
}




fetch('https://jsonplaceholder.typicode.com/todos/1')
      .then(response => response.json())
      .then(json => console.log(json))


      try {
        const data = require('completed.json');
        console.log('Contenido del archivo:', data);
      } catch (error) {
        console.error('Error al leer el archivo de forma síncrona: ' + error);
      }     



export default App;
