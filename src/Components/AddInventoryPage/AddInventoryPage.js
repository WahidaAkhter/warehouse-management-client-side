import React from 'react';
import { Button, Form } from 'react-bootstrap';


const AddInventoryPage = () => {

    const handleOnSubmit = (event) => {
        event.preventDefault();
        const name = event.target.name.value;
        const description = event.target.description.value;
        const imageUrl = event.target.imageUrl.value;
        const price = event.target.price.value;
        const quantity = event.target.quantity.value;
        const supplier = event.target.supplier.value;

        const item = { name, description, imageUrl, price, quantity, supplier };


        fetch('https://vast-oasis-74168.herokuapp.com/user', {
            method: 'POST',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(item)
        })
            .then(res => res.json())
            .then(data => {
                console.log('success', data)
                alert("user added successfully!!!");
                event.target.reset();
            })
    }

    return (
        <div className='w-50 mx-auto'>
            <h2 className='text-primary text-center mt-5 mb-5'>Please Put Your Desire Amounts</h2>
            <Form onSubmit={handleOnSubmit}>
                <Form.Group className="mb-3" controlId="formBasicEmail">
                    <Form.Label>Product name</Form.Label>
                    <Form.Control type="text" name="name" placeholder="Enter your product name" />

                </Form.Group>
                <Form.Group className="mb-3" controlId="formBasicEmail">
                    <Form.Label>Product description</Form.Label>
                    <Form.Control type="text" name="description" placeholder="Enter your product description" />

                </Form.Group>
                <Form.Group className="mb-3" controlId="formBasicEmail">
                    <Form.Label>Product imageUrl</Form.Label>
                    <Form.Control type="text" name="imageUrl" placeholder="Enter your product imageUrl" />

                </Form.Group>
                <Form.Group className="mb-3" controlId="formBasicEmail">
                    <Form.Label>Product Price</Form.Label>
                    <Form.Control type="text" name="price" placeholder="Enter your product Price" />

                </Form.Group>
                <Form.Group className="mb-3" controlId="formBasicEmail">
                    <Form.Label>Product Quantity</Form.Label>
                    <Form.Control type="text" name="quantity" placeholder="Enter your product Quantity" />

                </Form.Group>

                <Form.Group className="mb-3" controlId="formBasicPassword">
                    <Form.Label>Supplier Name</Form.Label>
                    <Form.Control type="text" name="supplier" placeholder="Supplier name" />
                </Form.Group>

                <Button variant="primary" type="submit">
                    Submit
                </Button>
            </Form>

        </div>
    );
};

export default AddInventoryPage;