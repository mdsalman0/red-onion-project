import React, { useRef } from 'react';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
import { useNavigate } from 'react-router-dom';
import { useSendPasswordResetEmail, useSignInWithEmailAndPassword } from 'react-firebase-hooks/auth';
import auth from '../../firebase.init';

const Login = () => {
    const navigate = useNavigate()
    const emailRef = useRef('')
    const passwordRef = useRef('')
    const [sendPasswordResetEmail, sending, error1] = useSendPasswordResetEmail(auth);
    const [
        signInWithEmailAndPassword,
        user,
        loading,
        error,
      ] = useSignInWithEmailAndPassword(auth);

    const handleLogin = e =>{
        e.preventDefault()
        const email = emailRef.current.value;
        const password = passwordRef.current.value;
        signInWithEmailAndPassword(email,password)
    }

    const handleRegister =()=>{
        navigate('/singUp')
    }
    return (
        <div className='w-25 mx-auto'>
             <Form onSubmit={handleLogin}>
               <h2 className='text-center text-primary'>Please Login!!</h2>
                <Form.Group className="mb-3" controlId="formBasicEmail">
                    <Form.Label>Email address</Form.Label>
                    <Form.Control ref={emailRef} type="email" placeholder="Enter email" />
                </Form.Group>

                <Form.Group className="mb-3" controlId="formBasicPassword">
                    <Form.Label>Password</Form.Label>
                    <Form.Control ref={passwordRef} type="password" placeholder="Password" />
                </Form.Group>
                <Form.Group className="mb-3" controlId="formBasicCheckbox">
                    <Form.Check type="checkbox" label="Check me out" />
                </Form.Group>
                <button className='text-primary btn btn-link'>Forget Password</button>
                <Button className='w-100' variant="primary" type="submit">
                    Login
                </Button>
                    <p className='mt-3 text-danger'>
                    <p className='text-primary' onClick={handleRegister}>If not registered?
                    <span className='text-danger'style={{cursor:'pointer'}}>Please Register</span></p>
                    </p>
            </Form>
        </div>
    );
};

export default Login;