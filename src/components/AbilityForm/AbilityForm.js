import React from 'react';
import { Container, Card, Form, Button } from 'react-bootstrap';

export class AbilityForm extends React.Component {
    constructor(props) {
        super(props);
        this.state = { ability: "", sport: "" };
    };

    mySubmitHandler = (event) => {
        event.preventDefault();
        alert("You have selected " + this.state.sport + " at level " + this.state.ability);
    };

    handleAbility = (event) => {
        this.setState({ ability: event.target.value });
    };

    handleSport = (event) => {
        this.setState({ sport: event.target.value });
    };

    render() {
        return (
            <Container>
                <Card border='dark' style={{backgroundColor:'#f0ead6'}} className='shadow-lg'>
                    <Card.Body className='align-items-center'>
                        <Card.Title>Ability Form</Card.Title>
                        <Card.Subtitle className='mb-2 text-muted'>Please select each sport, select your ability in that sport and then submit for each.</Card.Subtitle>
                        <Form onSubmit={this.mySubmitHandler}>
                            <Form.Select style={{ width: '75%', margin: 'auto', backgroundColor: 'lightgrey' }} size='md' aria-label='Select Sport' onChange={this.handleSport}>
                                <option>Please Select the Sport</option>
                                <option value="Cycling">Cycling</option>
                                <option value="Sailing">Sailing</option>
                                <option value="Skiing">Skiing</option>
                                <option value="Snowshoeing">Snowshoeing</option>
                                <option value="Golf">Golf</option>
                            </Form.Select>
                            <br />
                            <Form.Group className="text-center" controlId="AbilityForm">
                                {['radio'].map((type) => (
                                    <div key={`inline-${type}`} className="mb-3">
                                        <Form.Check
                                            value="Beginner"
                                            inline
                                            label="Beginner"
                                            name="group1"
                                            type={type}
                                            id={`inline-${type}-1`}
                                            onChange={this.handleAbility}
                                        />
                                        <Form.Check
                                            Value="Intermediate"
                                            inline
                                            label="Intermediate"
                                            name="group1"
                                            type={type}
                                            id={`inline-${type}-2`}
                                            onChange={this.handleAbility}
                                        />
                                        <Form.Check
                                            value="Expert"
                                            inline
                                            label="Expert"
                                            name="group1"
                                            type={type}
                                            id={`inline-${type}-3`}
                                            onChange={this.handleAbility}
                                        />
                                    </div>
                                ))}
                            </Form.Group>
                            <div className='text-center'>
                                <Button variant="dark" type="submit">
                                    Submit
                                </Button>
                            </div>
                        </Form>
                    </Card.Body>

                </Card>
            </Container>
        );
    };
}

