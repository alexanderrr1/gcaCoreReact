import React from 'react';
import { Col, Card, Form, Row } from 'react-bootstrap';

export const DetailAttributes = (mergeUnit) => {
    return (
        <div>
            <Col>
                <Card>
                    <Card.Header style={{fontWeight: 'bold'}}>Detalles de los atributos</Card.Header>
                    <Card.Body>
                            <Card.Text>
                                <Form>
                                    <Form.Group as={Row} className="mb-3" controlId="formPlaintextEmail">
                                        <Row>
                                            <Col sm={3}>
                                                <Form.Label column style={{fontWeight:'bold'}}>
                                                Id
                                                </Form.Label>
                                                <div>
                                                    <Col>
                                                        <Form.Control plaintext readOnly defaultValue="1239123" />
                                                    </Col>
                                                </div>
                                            </Col>
                                            <Col sm={3}>
                                                <Form.Label column style={{fontWeight:'bold'}}>
                                                    Target Branch
                                                </Form.Label>
                                                <div>
                                                    <Col>
                                                        <Form.Control plaintext readOnly defaultValue="Example target branch" />
                                                    </Col>
                                                </div>
                                            </Col>
                                            <Col sm={3}>
                                                <Form.Label column style={{fontWeight:'bold'}}>
                                                    Source Branch
                                                </Form.Label>
                                                <div>
                                                    <Col>
                                                        <Form.Control plaintext readOnly defaultValue="Example source branch" />
                                                    </Col>
                                                </div>
                                            </Col>
                                            <Col sm={3}>
                                                <Form.Label column style={{fontWeight:'bold'}}>
                                                    Id del merge request 
                                                </Form.Label>
                                                <div>
                                                    <Col>
                                                        <Form.Control plaintext readOnly defaultValue="Dato más importante" />
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