import { Button, Form } from 'react-bootstrap';
import { useNavigate } from 'react-router-dom';
import auth from '../../firebase.init';
import './SignUp.css'
import { useAuthState, useCreateUserWithEmailAndPassword, useSignInWithGoogle } from 'react-firebase-hooks/auth';


const SignUp = () => {
    const [user] = useAuthState(auth);
    const navigate = useNavigate();
    const [
        createUserWithEmailAndPassword,

        loading,
        error,
    ] = useCreateUserWithEmailAndPassword(auth, { sendEmailVerification: true });
    const [signInWithGoogle, user1, loading1, error1] = useSignInWithGoogle(auth);

    const handleRegister = (event) => {
        event.preventDefault();
        const email = event.target.email.value;
        const password = event.target.password.value;
        console.log(email, password);

        createUserWithEmailAndPassword(email, password);
        navigate('/');
        event.target.reset();
    }
    if (user) {
        console.log(user);
    }
    const navigateLogin = () => {
        navigate('/login');
    }
    const handleSiginInWithGoogle = () => {
        signInWithGoogle();
    }
    if (user1) {
        console.log(user1)
        navigate('/');
    }
    return (
        <div>
            <div className='w-50 mx-auto shadow-lg mt-5 rounded-lg'>
                <p className='register-title fw-bolder fs-2 py-2 text-primary'>Register Here</p>
                <Form onSubmit={handleRegister} className='p-5'>
                    <Form.Group className="mb-3" controlId="formBasicEmail">
                        <Form.Label>Email address</Form.Label>
                        <Form.Control name='email' type="email" placeholder="Enter email" autoComplete='off' required />
                    </Form.Group>

                    <Form.Group className="mb-3" controlId="formBasicPassword">
                        <Form.Label>Password</Form.Label>
                        <Form.Control name='password' type="password" placeholder="Password" required />
                    </Form.Group>
                    <Button variant="primary" type="submit">
                        Register
                    </Button>
                </Form>
                <p className='pb-3'><small className=''>Already have an account? <span onClick={navigateLogin} role="button" className='text-primary fw-bolder'>Login Here</span></small></p>
                <div className='pb-3'>
                    <Button onClick={handleSiginInWithGoogle} variant='info'>Sign With Google</Button>
                </div>
            </div>
        </div>
    );
};

export default SignUp;