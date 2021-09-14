import React from 'react';
import { Col, Card, Form, Row } from 'react-bootstrap';

export const DetailProject = () => {
    return (
        <div>
            <Col>
                <Card>
                    <Card.Header style={{fontWeight: 'bold'}}>Estado del merge</Card.Header>
                    <Card.Body>
                            <Card.Text>
                                <Form>
                                    <Form.Group className="mb-3" controlId="formPlaintextEmail">
                                        <Row>  
                                        <Col sm={3}>
                                                 <Form.Label column style={{fontWeight:'bold'}}>
                                                    Estado del merge
                                                </Form.Label>
                                                <div>
                                                    <Col>
                                                        <Form.Control plaintext readOnly defaultValue="Ejemplo del estado del merge" />
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

