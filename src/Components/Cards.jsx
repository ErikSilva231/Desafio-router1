import Card from 'react-bootstrap/Card';
import Col from 'react-bootstrap/Col';

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
      </Card.Body>
    </Card>
    </Col>
     </>
   );
 };
 
 export default Cards;