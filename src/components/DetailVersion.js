import React from 'react';
import { Col, Card, Form, Row } from 'react-bootstrap';

export const DetailProject = () => {
    return (
        <div>
            <Col>
                <Card>
                    <Card.Header style={{fontWeight: 'bold'}}>Versión</Card.Header>
                    <Card.Body>
                            <Card.Text>
                                <Form>
                                    <Form.Group className="mb-3" controlId="formPlaintextEmail">
                                        <Row>
                                            <Col sm={3}>
                                                <Form.Label column style={{fontWeight:'bold'}}>
                                                    Versión
                                                </Form.Label>
                                                <div>
                                                    <Col>
                                                        <Form.Control plaintext readOnly defaultValue="Versión" />
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