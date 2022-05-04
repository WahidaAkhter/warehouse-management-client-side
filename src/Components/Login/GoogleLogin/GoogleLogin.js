import React from 'react';

const GoogleLogin = () => {
    return (
        <div>
            <div className='d-flex align-items-center'>
                <div style={{ height: '1px' }} className='bg-primary w-50'></div>
                <p className='mt-2 px-2'>or</p>
                <div style={{ height: '1px' }} className='bg-primary w-50'></div>
            </div>
            <div>
                <button className='btn btn-secondary text-white w-100 mx-auto'>Google Sign In</button>
            </div>
        </div>
    );
};

export default GoogleLogin;