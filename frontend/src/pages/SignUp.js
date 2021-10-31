import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { Form, Button, Row, Col } from "react-bootstrap";

import Loader from "../components/Loader";

import FormContainer from "../components/FormContainer";
import Message from "../components/Message";

const SignUp = ({ location, history }) => {
  const [email, setEmail] = useState("");
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [message, setMessage] = useState(null);

  const redirect = location.search ? location.search.split("=")[1] : "/";

  // useEffect(() => {
  //   if (userInfo) {
  //     history.push(redirect);
  //   }
  // }, [history, userInfo, redirect]);

  const submitHandler = (e) => {
    e.preventDefault();
    // if (password !== confirmPassword) {
    //   setMessage("Passwords do not match");
    // } else {
    //   // dispatch(register(name, email, password));
    // }
    console.log("form submitted");
  };

  return (
    <FormContainer>
      <h1 className='fade-in slide-in'>Sign Up</h1>
      {/* {message && <Message variant='danger'>{error}</Message>}

      {loading && <Loader />} */}
      <Form onSubmit={submitHandler}>
        <Form.Group controlId='firstName'>
          <Form.Label>First name</Form.Label>
          <Form.Control
            type='name'
            placeholder='Enter first name'
            value={firstName}
            onChange={(e) => setFirstName(e.target.value)}
          ></Form.Control>
        </Form.Group>
        <Form.Group controlId='lastName'>
          <Form.Label>Last name</Form.Label>
          <Form.Control
            type='name'
            placeholder='Enter last name'
            value={lastName}
            onChange={(e) => setLastName(e.target.value)}
          ></Form.Control>
        </Form.Group>
        <Form.Group controlId='email'>
          <Form.Label>Email Address</Form.Label>
          <Form.Control
            type='email'
            placeholder='Enter email'
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          ></Form.Control>
        </Form.Group>

        <Button type='submit' variant='primary' className='my-2'>
          Register
        </Button>
      </Form>

      <Row className='py-3'>
        <Col>
          Have an account?{" "}
          <Link to={redirect ? `/login?redirect=${redirect}` : "/login"}>
            Login
          </Link>
        </Col>
      </Row>
    </FormContainer>
  );
};

export default SignUp;
