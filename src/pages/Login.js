import React from 'react'
import { Col, Container, Row, Form, Button} from 'react-bootstrap'
import { Link } from 'react-router-dom';
import {useState} from 'react';



function Login() {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    
    
    
    return(
        <Container>
            <Row>
                <Col md={6} className="login__form--container"> {/*md={6} is a bootstrap class that makes the column 6/12 of the screen*/}
                    <Form style={{width:"100%"}}>
                        <h1>Login to your account</h1>
                        <Form.Group className='mb-3'>
                            <Form.Label>Email Address</Form.Label>
                            <Form.Control type='email' placeholder='Enter email' value={email} required onChange={(e) => setEmail(e.target.value)} />
                        </Form.Group>
                        <Form.Group>
                            <Form.Label>Password</Form.Label>
                            <Form.Control type='password' placeholder='Enter Password' value={password} required onChange={(e) => setPassword(e.target.value)} />
                        </Form.Group>
                        <Form.Group>
                            <Button type="Submit">Login</Button>
                        </Form.Group>
                        <p>Don't have an account? <Link to="/signup" >Create Account</Link> </p>
                    </Form>
    
                </Col>
                <Col md={6} className='login__image--container'>

                </Col>
            </Row>
        </Container>
    )
}

export default Login