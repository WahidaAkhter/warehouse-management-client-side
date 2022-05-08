import React from 'react';
import { Accordion } from 'react-bootstrap';

const Blogs = () => {
    return (
        <div className='mx-auto w-50'>
            <Accordion defaultActiveKey="0">
                <Accordion.Item eventKey="0">
                    <Accordion.Header>1. Difference between javascript and nodejs</Accordion.Header>
                    <Accordion.Body>
                        1.javascript is a programming language and nodejs is javascript runtime. <br />
                        2.javascript can only be run in the browser whereas we can javascript in any browser with the help of node js. <br />
                        3.javascript used on the client side whereas nodejs used on the server-side.
                    </Accordion.Body>
                </Accordion.Item>
                <Accordion.Item eventKey="1">
                    <Accordion.Header>2. When should you use nodejs and when should you use mongodb</Accordion.Header>
                    <Accordion.Body>
                        when we need to store our data we need to use mongodb and when we need to connect our client side to our server side then we need to use node js.
                    </Accordion.Body>
                </Accordion.Item>
                <Accordion.Item eventKey="2">
                    <Accordion.Header>3. Differences between sql and nosql databases.</Accordion.Header>
                    <Accordion.Body>
                        1.sql database are table based and no-sql database are document. <br />
                        2.sql database vertically scalable and no-sql horizontally scalable. <br />
                        3.sql database are multi-row-transaction whereas no-sql are not.
                    </Accordion.Body>
                </Accordion.Item>
                <Accordion.Item eventKey="3">
                    <Accordion.Header>4. What is the purpose of jwt and how does it work?</Accordion.Header>
                    <Accordion.Body>
                        purpose of jwt is to share security information between two parties- a client and a server. Each JWT contains encoded JSON objects, including a set of claims. JWTs are signed using a cryptographic algorithm
                        to ensure that the claims cannot be altered after the token is issued.
                    </Accordion.Body>
                </Accordion.Item>
            </Accordion>
        </div>
    );
};

export default Blogs;