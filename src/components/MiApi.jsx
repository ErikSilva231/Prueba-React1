import React, { useState, useEffect } from 'react';
import Buscador from './Buscador';
import './MiApi.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import Card from 'react-bootstrap/Card';
import Row from 'react-bootstrap/Row'; 
import Col from 'react-bootstrap/Col'; 

function MiApi() {
    const [characterNombre, setCharacterNombre] = useState([]);
    const [busqueda, setBusqueda] = useState("");

    const filtrado = (c) => {
        return c.name.toLowerCase().includes(busqueda.toLowerCase());
    }

    const getRickAndMorty = async () => {
        try {
            const res = await fetch("https://rickandmortyapi.com/api/character/1,2,3,4,5,11,712,47");
            const data = await res.json();
            const jsonOrden = data.sort((a, b) => a.name.localeCompare(b.name));
            setCharacterNombre(jsonOrden);
        } catch (error) {
            alert("Error en cargar, intente en otro momento ");
           // alert("Error en cargar " + error.message);
        }
    }
    

    useEffect(() => {
        getRickAndMorty();
    }, []);

    return (
        <>
            <Buscador busqueda={busqueda} setBusqueda={setBusqueda} />

            <div className="container">
                <div className="card-container">
                    <Row>
                        {characterNombre.filter(filtrado).map((c, index) => (
                            <Col className='mb-4' key={index} xs={12} sm={6} md={3} >
                                <Card  className="h-100"style={{ marginBottom: '20px' }}>
                                    <Card.Img variant="top" src={c.image} alt={c.name} />
                                    <Card.Body className='pb-1'>
                                        <Card.Title>{c.name}</Card.Title>
                                        <Card.Text>
                                            {c.status} - {c.species}
                                            <br />
                                            Se encuentra en: <strong>{c.location.name}</strong>
                                        </Card.Text>
                                    </Card.Body>
                                </Card>
                            </Col>
                        ))}
                    </Row>
                </div>
            </div>
        </>
    )
}

export default MiApi;
