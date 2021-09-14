import React from 'react';
import { Col, Card, Form, Row } from 'react-bootstrap';
import { useEffect, useState } from 'react';

export const DetailUser = (mergeUnit) => {
    
    const [user, setUser] = useState({})
    
    useEffect(() => {
        console.log('MergeUnit', mergeUnit.mergeUnit.user);
        setUser(mergeUnit.mergeUnit.user);
    }, [])

    return (
        <div>
            <Col>
                <Card>
                    <Card.Header style={{fontWeight: 'bold'}}>Datos de usuario</Card.Header>
                    <Card.Body>
                            <Card.Text>
                                <Form>
                                    <Form.Group className="mb-3" controlId="formPlaintextEmail">
                                        <Row>
                                            <Col sm={3}>
                                                <Form.Label column style={{fontWeight:'bold'}}>
                                                    ID
                                                </Form.Label>
                                                <div>
                                                    <Col>
                                                        <Form.Control plaintext readOnly defaultValue=''/>
                                                    </Col>
                                                </div>
                                            </Col>
                                            <Col sm={3}>
                                                <Form.Label column style={{fontWeight:'bold'}}>
                                                    name
                                                </Form.Label>
                                                <div>
                                                    <Col>
                                                        <Form.Control plaintext readOnly defaultValue="Administrator"/>
                                                    </Col>
                                                </div>
                                            </Col>
                                            <Col sm={3}>
                                                <Form.Label column style={{fontWeight:'bold'}}>
                                                    username
                                                </Form.Label>
                                                <div>
                                                    <Col>
                                                        <Form.Control plaintext readOnly defaultValue="root"/>
                                                    </Col>
                                                </div>
                                            </Col>
                                            <Col sm={3}>
                                                <Form.Label column style={{fontWeight:'bold'}}>
                                                    email
                                                </Form.Label>
                                                <div>
                                                    <Col>
                                                        <Form.Control plaintext readOnly defaultValue="admin@example.com"/>
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
