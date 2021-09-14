import React from 'react';
import { Col, Card, Form, Row } from 'react-bootstrap';

export const DetailProject = () => {
    return (
        <div>
            <Col>
                <Card>
                    <Card.Header style={{fontWeight: 'bold'}}>Último commit</Card.Header>
                    <Card.Body>
                            <Card.Text>
                                <Form>
                                    <Form.Group className="mb-3" controlId="formPlaintextEmail">
                                        <Row>
                                            <Col sm={3}>
                                                 <Form.Label column style={{fontWeight:'bold'}}>
                                                    URL último commit
                                                </Form.Label>
                                                <div>
                                                    <Col>
                                                        <Form.Control plaintext readOnly defaultValue="Url ultimo commit" />
                                                    </Col>
                                                </div>
                                            </Col>
                                            <Col sm={3}>
                                                 <Form.Label column style={{fontWeight:'bold'}}>
                                                    Autor del commit
                                                </Form.Label>
                                                <div>
                                                        <Col>
                                                            <Form.Control plaintext readOnly defaultValue= "Autor del commit" />                                                
                                                        </Col>  
                                                </div>
                                            </Col>
                                        </Row>    
                                        
                                        <Col sm={3}>
                                                 <Form.Label column style={{fontWeight:'bold'}}>
                                                    Email del autor
                                                </Form.Label>
                                                <div>
                                                    <Col>
                                                        <Form.Control plaintext readOnly defaultValue="emailDelAutor@example.com" />
                                                    </Col>
                                                </div>
                                            </Col>
                                            <Col sm={3}>
                                                 <Form.Label column style={{fontWeight:'bold'}}>
                                                    Último commit
                                                </Form.Label>
                                                <div>
                                                        <Col>
                                                            <Form.Control plaintext readOnly defaultValue="Url" />                                                
                                                        </Col>  
                                                </div>
                                            </Col>
                                    </Form.Group>
                                </Form>
                            </Card.Text>
                    </Card.Body>
                </Card>
            </Col>
        </div>
    )
}
