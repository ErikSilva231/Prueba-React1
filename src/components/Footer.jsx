import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

function Footer() {
    return (
        <footer className="bg-dark text-white">
            <Container>
                <Row className="py-4">
                    <Col md={6}>
                        <h3>Rick and Morty</h3>
                        <p>
                        Rick and Morty es una popular serie animada conocida por su combinación única de ciencia ficción y humor negro
                        </p>
                    </Col>
                    <Col md={6} className="text-center">
                        <h3>Síguenos en nuestras redes sociales</h3>
                        <div>
                            <a href="https://www.facebook.com" className="text-white me-5">
                                <i className="fab fa-facebook-f"></i>
                            </a>
                            <a href="https://twitter.com" className="text-white me-5">
                                <i className="fab fa-twitter"></i>
                            </a>
                            <a href="https://www.instagram.com" className="text-white me-5">
                                <i className="fab fa-instagram"></i>
                            </a>
                        </div>
                    </Col>
                </Row>
            </Container>
        </footer>
    );
}

export default Footer;
