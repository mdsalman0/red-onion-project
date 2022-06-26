import React, { useRef, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
import { useCreateUserWithEmailAndPassword, useSendEmailVerification, useUpdateProfile } from 'react-firebase-hooks/auth';
import auth from '../../../src/firebase.init'
import { async } from '@firebase/util';
const SingUp = () => {
    const [email,setEmail] = useState('')
    const [password,setPassword] = useState('')
    const [confirmPassword, setConfirmPassword] = useState('');
    const navigate = useNavigate()

    const [sendEmailVerification, sending, error1] = useSendEmailVerification(auth);
    const [
        createUserWithEmailAndPassword,
        user,
        loading,
        error,
      ] = useCreateUserWithEmailAndPassword(auth,{sendEmailVerification:true});

      if(user){
        navigate('/')
      }
      
    const handleEmail = e =>{
        setEmail(e.target.value);
    }
    const handlePassword = e =>{
        setPassword(e.target.value);
    }
    const handleConfirmPassword = e =>{
        setConfirmPassword(e.target.value);
    }

    const createRegister = async event =>{
        event.preventDefault()
        createUserWithEmailAndPassword(email,password,confirmPassword)
        await sendEmailVerification();
          alert('Sent email');
    }

    const handleRegister =()=>{
        navigate('/login')
    }
    return (
        <div className='w-25 mx-auto'>
             <Form onSubmit={createRegister}>
             <h2 className='text-center text-primary'>Please Register!!</h2>
                <Form.Group className="mb-3" controlId="formBasicEmail">
                    <Form.Label>Your Name</Form.Label>
                    <Form.Control type="text" name='your name' placeholder="Your Name" required/>
                </Form.Group>
                <Form.Group className="mb-3" controlId="formBasicEmail">
                    <Form.Label>Email address</Form.Label>
                    <Form.Control onBlur={handleEmail} type="email" name='email' placeholder="Enter email" required/>
                </Form.Group>
                <Form.Group className="mb-3" controlId="formBasicPassword">
                    <Form.Label>Password</Form.Label>
                    <Form.Control onBlur={handlePassword} type="password" name='password'placeholder="Password" required/>
                </Form.Group>
                <Form.Group className="mb-3" controlId="formBasicPassword">
                    <Form.Label>Confirm Password</Form.Label>
                    <Form.Control onBlur={handleConfirmPassword} type="password" name='password'placeholder="Confirm Password" />
                </Form.Group>
                <Form.Group className="mb-3" controlId="formBasicCheckbox">
                    <Form.Check type="checkbox" label="Check me out" />
                </Form.Group>
                <Button className='w-100' variant="primary" type="submit">
                    Register
                </Button>
                <p className='mt-3 text-danger'>
                <p className='text-primary' onClick={handleRegister}>Already have an Account? <span style={{cursor: 'pointer'}} className='text-danger'>Please Login</span></p>
                </p>
        </Form>
        </div>
    );
};

export default SingUp;