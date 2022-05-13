import { useEffect } from 'react';
import { packageData } from "../../data/data";
import { useParams } from "react-router-dom";
import { Container, Row, Col, Card} from 'react-bootstrap';
import { MapView } from '../PackageMap/MapView';
import 'leaflet/dist/leaflet.css';
import { Image } from 'react-bootstrap';


export function PackagePage(props) {
    let params = useParams();
    let id = params.packageid;
    const packages = packageData.find((packages) => packages.id === id);

    useEffect(() => {
        document.title = `ActiveLife | ${packages.location}`;
    }, []);

    if (packages) {
        return (
            <>
                <div style={{ paddingLeft:'1rem', backgroundColor: '#F0ead6', paddingTop: '2rem' }}>
                    <h1 style={{ marginLeft: '1rem' }}><u>{packages.location}, {packages.sport}</u></h1>
                    <br />
                    <Container fluid>
                        <Row>
                            <Col className='lg={2} text-center'>
                                <div>
                                    <Image className="border-dark shadow-lg" src={packages.image} style={{ width: '100%' }} ></Image>
                                </div>
                            </Col>
                            <Col style={{}} className='d-flex align-items-center justify-content-center text-center'>
                                    <Card border="dark" style={{ width: '75%', backgroundColor: "#f0ead6" }} className="shadow-lg">
                                        <Card.Body>
                                            <h3><u>Description</u></h3>
                                            <p>{packages.description}</p>
                                            <p>{packages.descLong}</p>
                                        </Card.Body>
                                    </Card>
                            </Col>
                        </Row>
                        <br />
                        <Row>
                            <Col className='text-center'>
                                <>
                                    <h3><u>Location</u></h3>
                                    <p>The blue marker is the destination.</p>
                                    <MapView />
                                    <br />
                                </>
                            </Col>
                            <Col className='d-flex justify-content-center align-items-center text-center'>
                                    <Card border="dark" style={{ width: '75%', backgroundColor: "#f0ead6" }} className="shadow-lg">
                                        <Card.Body>
                                            <h3><u>Package Info</u></h3>
                                            <ul>
                                                <li>Location:&nbsp;{packages.location}</li>
                                                <li>Sport:&nbsp;{packages.sport}</li>
                                                <li>Type:&nbsp;{packages.type}</li>
                                                <li>Travel Type:&nbsp;{packages.travel}</li>
                                                <li>Price:&nbsp;{packages.price}</li>
                                            </ul>
                                        </Card.Body>
                                    </Card>
                            </Col>
                        </Row>
                    </Container>
                </div>
            </>
        );
    } else {
        return (
            <div>
                <h1>A package with the id of {id} could not be found!</h1>
            </div>
        );
    }
}