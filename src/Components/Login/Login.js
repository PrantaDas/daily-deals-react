import { signInWithEmailAndPassword,sendPasswordResetEmail } from 'firebase/auth';
import React, { useState } from 'react';
import { Button, Form, Toast } from 'react-bootstrap';
import { useNavigate } from 'react-router-dom';
import { toast, ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import auth from '../../firebase.init';
import './Login.css'

const Login = () => {
    const [emails, setEmails] = useState({value:'',error:''});

    const navigate = useNavigate();
    // const [
    //     signInWithEmailAndPassword,
    //     user,
    //     loading,
    //     error,
    // ] = useSignInWithEmailAndPassword(auth);
   

    const handleEmail=(event)=>{
        const email=event.target.value;
        console.log(email);
        setEmails({value:email,error:''});
    }

    const handleLogin = (event) => {
        event.preventDefault();
        const email = event.target.email.value;
        const password = event.target.password.value;
        console.log(email, password);
        
        signInWithEmailAndPassword(auth, email, password)
            .then((userCredential) => {
                const user = userCredential.user;
                console.log(user);
                event.target.reset();
            })
            .catch((error) => {
                const errorCode = error.code;
                const errorMessage = error.message;
                console.log('error', error)
                if (errorMessage.includes('auth/wrong-password')) {
                    toast.error('Invalid Password', {
                        theme: 'colored'
                    })
                }
                if (errorMessage.includes('uth/user-not-found')) {
                    toast.error('User Not Found', {
                        theme: 'colored'
                    })
                }
            });

    }

    const navigateToRegister = () => {
        navigate('/signup');
    }

    const handleResetPassword = () => {
        
        
        if (emails.value === "") {
            setEmails({value:'',error:'Please Provide Your Email first'});
        }
        else {
            sendPasswordResetEmail(auth, emails.value)
                .then(() => {
                    toast.success("Reset Request Sent !", {
                        theme: 'colored'
                    })
                })
                .catch(error => {
                    console.log(error, 'error');
                    const errorMessage = error.message;
                    if (errorMessage.includes('auth/user-not-found')) {
                        toast.error('User Not Found', {
                            theme: 'colored'
                        })
                    }

                })
        }


    }


    return (
        <div>
            <div className='w-50 mx-auto shadow-lg mt-5 rounded-lg'>
                <p className='register-title fw-bolder fs-2 py-2 text-primary'>Please Login</p>
                <Form onSubmit={handleLogin} className='p-5'>
                    <Form.Group className="mb-3" controlId="formBasicEmail">
                        <Form.Label>Email address</Form.Label>
                        <Form.Control onChange={handleEmail} name='email' type="email" placeholder="Enter email" autoComplete='off' required />
                    </Form.Group>
                   {
                       emails.error && (<p className='text-danger'>{emails.error}</p>)
                   }

                    <Form.Group className="mb-3" controlId="formBasicPassword">
                        <Form.Label>Password</Form.Label>
                        <Form.Control name='password' type="password" placeholder="Password" required />
                    </Form.Group>
                    <Button variant="primary" type="submit">
                        Login
                    </Button>
                </Form>
                <p><small>Forget Password? <span onClick={handleResetPassword} className='text-primary fw-bolder' role='button'>Reset Password</span></small></p>
                <div className='d-flex justify-content-between align-items-center px-3'>
                    <div className='line '>

                    </div>
                    <p className='mt-2 px-3'><small>or</small></p>
                    <div className='line'>

                    </div>
                </div>
                <p className='pb-5'><small className=''>New to Daily Deals ? <span onClick={navigateToRegister} role="button" className='text-primary fw-bolder'>Register Here</span></small></p>
            </div>
            <ToastContainer />
        </div>

    );
};

export default Login;