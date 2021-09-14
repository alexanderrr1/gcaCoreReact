import React from 'react';
import { Col, Card, Form, Row } from 'react-bootstrap';

export const DetailRepository = () => {
    return (
        <div>
            <Col>
                <Card>
                    <Card.Header style={{fontWeight: 'bold'}}>Datos de repositorio</Card.Header>
                    <Card.Body>
                            <Card.Text>
                                <Form>
                                    <Form.Group className="mb-3" controlId="formPlaintextEmail">
                                        <Row>
                                            <Col sm={3}>
                                                <Form.Label column style={{fontWeight:'bold'}}>
                                                    Homepage
                                                </Form.Label>
                                                <div>
                                                    <Col>
                                                        <Form.Control plaintext readOnly defaultValue="http://example.com/gitlabhq/gitlab-test"/>
                                                    </Col>
                                                </div>
                                            </Col>
                                            <Col sm={3}>
                                                <Form.Label column style={{fontWeight:'bold'}}>
                                                    Name
                                                </Form.Label>
                                                <div>
                                                    <Col>
                                                        <Form.Control plaintext readOnly defaultValue="Gitlab Test"/>
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
