import React from "react";
import { Container, Row, Button } from "react-bootstrap";
import miImagen from '../assets/bg.png';
import torta1 from '../assets/torta1.png';
import Cards from "../Components/Cards"; // Importa el componente Cards
import "./Home.css";

function Home() {
  return (
    <>
      <img src={miImagen} alt="chica con pastel de cumpleaños en la mano" className="img-fluid" />
      <Container className="ms-10 position-absolute top-15">
        <h1 className="pt-5">
          Bienvenido a <span className="fw-bold">Happy Cake</span>
        </h1>
        <h4> Crea la torta de tus sueños </h4>
      </Container>
      <Container fluid className="bg-info-subtle mt-5">
        <Container>
        <p className="py-5 px-5 mx-5 h5 max-height-50 text-center">
       <h3> ¡Descubre la Magia de Happy Cake: Tu Destino para la Torta Perfecta!
       </h3>
En Happy Cake, no solo creamos tortas; creamos experiencias memorables que deleitan tus sentidos y alimentan tu alma. ¿Por qué conformarte con una torta común y corriente cuando puedes tener una obra maestra comestible diseñada especialmente para ti?
        </p>
        </Container>
      </Container>
      <Container>
      
        <h2 className="text-center mt-5"> Tambien tenemos las <span className="fw-bold">Clasicas</span></h2>
        <Row>
        <Cards titulo="tortita1" descripcion="Tortita1" src={torta1} />
        <Cards titulo="tortita2" descripcion="tortita2" src={torta1} />
        <Cards titulo="tortita3" descripcion="tortita3" src={torta1} />
        <Cards titulo="tortita4" descripcion="tortita4" src={torta1} />
        <Cards titulo="tortita5" descripcion="tortita5" src={torta1} />
        <Cards titulo="tortita6" descripcion="tortita6" src={torta1} />
        <Cards titulo="tortita7" descripcion="tortita7" src={torta1} />
        <Cards titulo="tortita8" descripcion="tortita8" src={torta1} />

        </Row>
      </Container>
    </>
  );
}

export default Home;
