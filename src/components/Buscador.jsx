import React from 'react';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row'; 
import Col from 'react-bootstrap/Col'; 

function Buscador({ busqueda, setBusqueda }) {
    return (
        <>
        <Container>
            <Row>
            <Col xs={12} sm={6} md={4} className='my-3' >
            <h2>Busqueda por personaje</h2>
            <input
                type="text"
                placeholder="Busque su personaje"
                className="form-control"
                value={busqueda}
                onChange={(e) => {
                    setBusqueda(e.target.value);
                }}
            />
                </Col>
                </Row>            
        </Container>
          
        </>
    );
}

export default Buscador;
