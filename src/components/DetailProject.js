import React from 'react';
import { Col, Card, Form, Row } from 'react-bootstrap';

export const DetailProject = () => {
    return (
        <div>
            <Col>
                <Card>
                    <Card.Header style={{fontWeight: 'bold'}}>Datos de proyecto</Card.Header>
                    <Card.Body>
                            <Card.Text>
                                <Form>
                                    <Form.Group className="mb-3" controlId="formPlaintextEmail">
                                        <Row>  
                                            <Col sm={3}>
                                                <Form.Label column style={{fontWeight:'bold'}}>
                                                Nombre del proyecto
                                                </Form.Label>
                                                <div>
                                                    <Col>
                                                        <Form.Control plaintext readOnly defaultValue="Nombre del proyecto" />
                                                    </Col>
                                                </div>
                                            </Col>
                                            <Col sm={3}>
                                                <Form.Label column style={{fontWeight:'bold'}}>
                                                    URL WEB
                                                </Form.Label>
                                                <div>
                                                    <Col>
                                                        <Form.Control plaintext readOnly defaultValue="https://example_url.com" />
                                                    </Col>
                                                </div>
                                            </Col>
                                            <Col sm={3}>
                                                <Form.Label column style={{fontWeight:'bold'}}>
                                                    Id de proyecto
                                                </Form.Label>
                                                <div>
                                                    <Col>
                                                        <Form.Control plaintext readOnly defaultValue="6138fba9ab8dbd20e67a9f06" />
                                                    </Col>
                                                </div>
                                            </Col>
                                        </Row>    
                                    </Form.Group>
                                </Form>
                            </Card.Text>
                    </Card.Body>
                </Card>
            </Col>
        </div>
    )
}
