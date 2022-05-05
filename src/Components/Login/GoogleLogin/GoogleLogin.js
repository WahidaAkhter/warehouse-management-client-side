import React from 'react';
import { Spinner } from 'react-bootstrap';
import { useSignInWithGoogle } from 'react-firebase-hooks/auth';
import { useNavigate } from 'react-router-dom';
import auth from '../../../firebase.init';


const GoogleLogin = () => {

    const [signInWithGoogle, user, loading, error] = useSignInWithGoogle(auth);

    const navigate = useNavigate();

    let errorElement;

    if (error) {
        errorElement =
            <div>
                <p className='text-danger'>Error: {error.message}</p>
            </div>

    }
    if (user) {
        navigate('/manageInventory');
    }

    if (loading) {
        return <Spinner animation="border" />;
      }

    return (
        <div>
            <div className='d-flex align-items-center'>
                <div style={{ height: '1px' }} className='bg-primary w-50'></div>
                <p className='mt-2 px-2'>or</p>
                <div style={{ height: '1px' }} className='bg-primary w-50'></div>
            </div>
            {errorElement}
            <div>
                <button
                    onClick={() => signInWithGoogle()}
                    className='btn btn-secondary text-white w-100 mx-auto'>
                    <img className='px-2' style={{ width: '45px' }} src="https://cdn-icons-png.flaticon.com/512/1000/1000777.png?w=740" alt="" />
                    Google Sign In</button>
            </div>
        </div>
    );
};

export default GoogleLogin;