import React from 'react';
import { Button, Form } from 'react-bootstrap';


const AddInventoryPage = () => {

    return (
        <div className='w-50 mx-auto'>
          <h2 className='text-primary text-center mt-5 mb-5'>Please Put Your Desire Amounts</h2>
            <Form>
                <Form.Group className="mb-3" controlId="formBasicEmail">
                    <Form.Label>Product name</Form.Label>
                    <Form.Control type="email" placeholder="Enter your product name" />

                </Form.Group>
                <Form.Group className="mb-3" controlId="formBasicEmail">
                    <Form.Label>Product Price</Form.Label>
                    <Form.Control type="email" placeholder="Enter your product Price" />

                </Form.Group>
                <Form.Group className="mb-3" controlId="formBasicEmail">
                    <Form.Label>Product Quantity</Form.Label>
                    <Form.Control type="email" placeholder="Enter your product Quantity" />

                </Form.Group>

                <Form.Group className="mb-3" controlId="formBasicPassword">
                    <Form.Label>Supplier Name</Form.Label>
                    <Form.Control type="password" placeholder="supplier name" />
                </Form.Group>

                <Button variant="primary" type="submit">
                    Submit
                </Button>
            </Form>

        </div>
    );
};

export default AddInventoryPage;