import React from 'react'
import { Col, Container, Row, Form, Button, Alert} from 'react-bootstrap'
import {Link} from 'react-router-dom';
import {useState} from 'react';
import './Signup.css';
import { useSignupMutation } from '../services/appApi';

function Signup() {

    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [name, setName] = useState('');
    const [signup, {error, isLoading, isError}] = useSignupMutation();


    function handleSignup(e){
        e.preventDefault();
        signup({name, email, password});
    }
  return (
        <Container>
            <Row>
                <Col md={6} className="signup__form--container"> {/*md={6} is a bootstrap class that makes the column 6/12 of the screen*/}
                
                    <Form style={{width:"100%"}} onSubmit={handleSignup}>
                        <h1>Create an account</h1>

                            {isError && <Alert variant="danger">{error.data}</Alert>}

                        <Form.Group className='mb-3'>
                            <Form.Label>Name</Form.Label>
                            <Form.Control type='name' placeholder='Enter name' value={name} required onChange={(e) => setName(e.target.value)} />
                        </Form.Group>

                        <Form.Group className='mb-3' >
                            <Form.Label>Email Address</Form.Label>
                            <Form.Control type='email' placeholder='Enter email' value={email} required onChange={(e) => setEmail(e.target.value)} />
                        </Form.Group>
                        <Form.Group className='mb-3' >
                            <Form.Label>Password</Form.Label>
                            <Form.Control type='password' placeholder='Enter Password' value={password} required onChange={(e) => setPassword(e.target.value)} />
                        </Form.Group>
                        <Form.Group className='mb-3' >
                            <Button type="Submit" disabled={isLoading} >Sign up</Button>
                        </Form.Group>
                        <p>Already got an account? <Link to="/login" >Login</Link> </p>
                    </Form>
    
                </Col>
                <Col md={6} className='signup__image--container'>

                </Col>
            </Row>
        </Container>
  )
}

export default Signup