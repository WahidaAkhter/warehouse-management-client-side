import React from 'react';

const Footer = () => {

    const today = new Date();
    const year = today.getFullYear();


    return (
        <footer className='bg-dark mt-5 text-center'>
            <p className='text-white' ><small>copyright @{year} wahida akhter</small></p>

        </footer>
    );
};

export default Footer;