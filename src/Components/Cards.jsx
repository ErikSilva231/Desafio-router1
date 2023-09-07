import {Link, Route, Routes} from 'react-router-dom';
import Card from 'react-bootstrap/Card';
import Col from 'react-bootstrap/Col';
import Contacto from '../views/Contacto';

function Cards({ titulo, descripcion, src }) {
    return (
     <>
    <Col md={3} className='mt-2'>
     <Card className='px-5'>
      <Card.Img variant="top" src={src} />
      <Card.Body>
        <Card.Title>{titulo}</Card.Title>
        <Card.Text>
        {descripcion}
        </Card.Text>
        <Link to="/contacto">
        <button className='bg-success text-white w-100 border-success
        '>Comprar</button>
      </Link>
      </Card.Body>
    </Card>
    </Col>
    <Routes>
        <Route path="/contacto" element={<Contacto />} />
      </Routes>
     </>
   );
 };
 
 export default Cards;