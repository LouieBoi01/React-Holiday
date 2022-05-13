import React, { useState } from 'react';
import { packageData } from '../../data/data';
import { Container, Card, Row, Col, Button } from 'react-bootstrap';
import { Link } from 'react-router-dom';

export function SearchPackages() {
    const [query, setQuery] = useState("")
    const [searchParam] = useState(["location", "type", "ability", "travel", "sport"])
    const [filterParam, setFilterParam] = useState(["All"])

    function search(packageData) {
        return packageData.filter((data) => {
            if (data.sport == filterParam) {
                return searchParam.some((newData) => {
                    return (
                        data[newData]
                            .toString()
                            .toLowerCase()
                            .indexOf(query.toLowerCase()) > -1
                    );
                });
            } else if (data.location == filterParam) {
                return searchParam.some((newData) => {
                    return (
                        data[newData]
                            .toString()
                            .toLowerCase()
                            .indexOf(query.toLowerCase()) > -1
                    );
                });
            } else if ((filterParam) == 'All') {
                return searchParam.some((newData) => {
                    return (
                        data[newData]
                            .toString()
                            .toLowerCase()
                            .indexOf(query.toLowerCase()) > -1
                    );
                });
            }

        });
    }


    return (
        <>
            <div className="search-wrapper" style={{ paddingRight: "1rem", paddingBottom: '1rem' }} >
                <label htmlFor="search-form">
                    <input
                        type="search"
                        name="search-form"
                        id="search-form"
                        className="search-input"
                        placeholder="Search for..."
                        onChange={event => setQuery(event.target.value)}
                    />
                </label>
                <select
                    onChange={(e) => {
                        setFilterParam(e.target.value);
                    }}
                    className="custom-select"
                >
                    <option value="All">Filter By Sport</option>
                    <option value="Cycling">Cycling</option>
                    <option value="Sailing">Sailing</option>
                    <option value="Golf">Golf</option>
                    <option value="Snowshoeing">Snowshoeing</option>
                    <option value="Skiing">Skiing</option>
                </select>
                <select
                    onChange={(e) => {
                        setFilterParam(e.target.value);
                    }}

                >
                    <option value="All">Filter By Location</option>
                    <option value="France">France</option>
                    <option value="Germany">Germany</option>
                    <option value="Austria">Austria</option>
                    <option value="Alaska">Alaska</option>
                    <option value="Isle of Wight">Isle of Wight</option>
                </select>
                <span className='focus'></span>
            </div>


            <Card border='dark' style={{ backgroundColor: '#f0ead6' }} className='shadow-lg'>
                <Card.Body>
                    <Card.Title><u>Search Results</u></Card.Title>
                    <Container fluid="md">
                        <Row>
                            {search(packageData).map((data) => (
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
                            ))}
                        </Row>
                    </Container>
                </Card.Body>
            </Card>
        </>
    );
};

/*export function SearchPackages() {
    const [query, setQuery] = useState("")
    const [searchParam]=useState(["location","type","ability", "travel", "sport"])
    
    function search(packageData) {
        return packageData.filter((data) => {
            return searchParam.some((newData) => {
                return (
                    data[newData]
                    .toString()
                    .toLowerCase()
                    .indexOf(query.toLowerCase()) > -1
                )
            })
        })
    }

    console.log(searchParam);
    return (
        <>  
            <div className="search-wrapper">
                <label htmlFor="search-form">
                    <input
                        type="search"
                        name="search-form"
                        id="search-form"
                        className="search-input"
                        placeholder="Search for..."
                        onChange={event => setQuery(event.target.value)}
                    />
                    <span className="sr-only">Search countries here</span>
                </label>
            </div>

            <Card border='dark' style={{ backgroundColor: '#f0ead6' }} className='shadow-lg'>
                <Card.Body>
                    <Card.Title><u>Search Results</u></Card.Title>
                    <Container fluid="md">
                        <Row>
                            {packageData.filter(data => {
                                if (query === '') {
                                    return data;
                                } else if (data.location.toLowerCase().includes(query.toLowerCase())) {
                                    return data;
                                }
                            }).map((data) => {
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
        </>
    );
};*/

