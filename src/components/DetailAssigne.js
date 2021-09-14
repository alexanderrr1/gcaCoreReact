import React from 'react';
import { Col, Card, Form, Row } from 'react-bootstrap';

export const DetailProject = () => {
    return (
        <div>
            <Col>
                <Card>
                    <Card.Header style={{fontWeight: 'bold'}}>Datos de asignación</Card.Header>
                    <Card.Body>
                            <Card.Text>
                                <Form>
                                    <Form.Group className="mb-3" controlId="formPlaintextEmail">
                                    <Row>
                                            <Col sm={3}>
                                                <Form.Label column style={{fontWeight:'bold'}}>
                                                    Assignee Id
                                                </Form.Label>
                                                <div>
                                                    <Col>
                                                        <Form.Control plaintext readOnly defaultValue="Assignee Id" />
                                                    </Col>
                                                </div>
                                            </Col>
                                            <Col sm={3}>
                                                <Form.Label column style={{fontWeight:'bold'}}>
                                                    Título
                                                </Form.Label>
                                                <div>
                                                    <Col>
                                                        <Form.Control plaintext readOnly defaultValue="Título de atributo" />
                                                    </Col>
                                                </div>
                                            </Col>
                                            <Col sm={3}>
                                                <Form.Label column style={{fontWeight:'bold'}}>
                                                    Fecha de creación
                                                </Form.Label>
                                                <div>
                                                    <Col>
                                                        <Form.Control plaintext readOnly defaultValue="Example date of creation" />
                                                    </Col>
                                                </div>
                                            </Col>
                                            <Col sm={3}>
                                                <Form.Label column style={{fontWeight:'bold'}}>
                                                    Fecha de modificación
                                                </Form.Label>
                                                <div>
                                                    <Col>
                                                        <Form.Control plaintext readOnly defaultValue="Fecha de modificación" />
                                                    </Col>
                                                </div>
                                            </Col>
                                            <hr/>
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
