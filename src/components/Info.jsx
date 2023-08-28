import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

function Info() {
    return (
        <Container fluid className="bg-secondary-subtle py-3">
        <Container>
            <Row className="mt-3">
            <h2 className='text-center mb-5'>Rick and Morty</h2>
                <Col md={6}>
                <p>
                Rick and Morty es una comedia animada de ciencia ficción creada por Justin Roiland y Dan Harmon.
                        El programa sigue las desventuras de un científico excéntrico y alcohólico llamado Rick Sánchez y
                        Morty Smith, su nieto de buen corazón pero fácilmente influenciable.
                    </p>
                </Col>
                <Col md={6}>
                    
                    
                    <p>
                    La serie es conocida por su humor negro, comentarios satíricos sobre tipos de ciencia ficción y exploración
                        de temas complejos dentro de su marco cómico.
                    </p>
                    <small>Advertencia: altamente ofensivo para cierto tipo de gente</small>
                </Col>
            </Row>
        </Container>
        </Container>
    );
}

export default Info;
