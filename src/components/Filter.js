import React from 'react'
import { Row, Form, Button, Col } from "react-bootstrap";

export const Filter = () => {
    return (
        <>  
            <Form>
                <Row className="mb-3">
                    
                    <Form.Group as={Col} className="mb-3" controlId="formBasicEmail">
                        <Form.Label>Email address</Form.Label>
                        <Form.Control type="email" placeholder="Enter email" />
                        <Form.Text className="text-muted">
                        We'll never share your email with anyone else.
                        </Form.Text>
                    </Form.Group>

                    <Form.Group as={Col} className="mb-3" controlId="formBasicPassword">
                        <Form.Label>Password</Form.Label>
                        <Form.Control type="password" placeholder="Password" />
                    </Form.Group>

                    <Button as={Col} className="mb-3" variant="primary" type="submit">
                        Buscar
                    </Button>
                    
                </Row>
            </Form>
        </>
    )
}
