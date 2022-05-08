import React from 'react';

const Footer = () => {

    const today = new Date();
    const year = today.getFullYear();


    return (
        <footer className='bg-dark mt-5 text-center'>
            <p className='text-white' ><small>copyright @{year} wahida akhter</small></p>
            <p className='text-white'>more contact info: <br />
                <a href="www.facebook.com">facebook</a> <br />
                <a href="www.instagram.com">Instagram</a> <br />
                <a href="www.twitter.com">twitter</a>
            </p>

        </footer>
    );
};

export default Footer;