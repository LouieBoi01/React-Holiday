import React from 'react';
import { packageData } from '../../data/FeaturedData';
import { Container, Card, Row, Col, Button } from 'react-bootstrap';
import { Link } from 'react-router-dom';

export function FeaturedStays() {
    return (
        <Card border='dark' style={{ backgroundColor: '#f0ead6' }} className='shadow-lg'>
            <Card.Body>
                <Card.Title>Featured Stays</Card.Title>
                <Container fluid="md">
                    <Row>
                        {packageData.map((data) => {
                            return (
                                <Col className='d-flex justify-content-center justify-content-md-start'>
                                    <Card style={{ width: '20rem', height: '28rem', color: 'white', marginBottom: "20px" }} key={data.id} className='mb-4, bg-dark'>
                                        <Card.Img variant='top' src={data.image} style={{ width: '100%', height: '200px' }} />
                                        <Card.Body>
                                            <Card.Title>
                                                {data.location}
                                            </Card.Title>
                                            <Card.Text>
                                                {data.description}
                                            </Card.Text>
                                            <Link key={data.id} to={`/packages/${data.id}`}><Button variant="light">More Info</Button></Link>
                                        </Card.Body>
                                    </Card>
                                </Col>
                            )
                        })}
                    </Row>
                </Container>
            </Card.Body>
        </Card>

    );
};

