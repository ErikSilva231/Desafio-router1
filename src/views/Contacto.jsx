import { Container } from "react-bootstrap";
import React from "react";
import 'bootstrap/dist/css/bootstrap.min.css';
import Form from 'react-bootstrap/Form';




const Contacto = () => {
                  

  return (
<>
    <Container className="text-center">
    <h1 className="pt-5">
    🎂 ¿Estas preparado para crear <span className="fw-bold">Tu torta perfecta?</span> 🎂
    </h1>
    <h4>Llena el formulario y pronto uno de nosotros te podrá ayudar</h4>
    
  
    

  <Form className="mt-5">
  
  
        <div className="form-group">
          <input className="form-control mb-3" placeholder="Nombre" name="Nombre" />
        </div>
        
        <div className="form-group">
          <input className="form-control mb-3" placeholder="Email" name="Email" />
        </div>
           
        <div className="form-group">
         <textarea class="form-control" id="exampleFormControlTextarea1" placeholder="Cuéntanos tu torta perfecta "rows="3"></textarea>
        </div>
      
        
      <button className="btn btn-dark mt-3 w-100 bg-success" type="submit">
            Enviar
      </button>
  </Form>
  </Container>
  </>
  
);
}

export default Contacto;