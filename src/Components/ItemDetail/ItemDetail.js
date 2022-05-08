import React, { useEffect, useState } from 'react';
import { Button, Card, Form } from 'react-bootstrap';
import { Link, useNavigate, useParams } from 'react-router-dom';

const ItemDetail = () => {

    const { itemId } = useParams();

    const [currentItem, setcurrentItem] = useState({});

    useEffect(() => {
        fetch('https://vast-oasis-74168.herokuapp.com/user')
            .then(res => res.json())
            .then(data => {
                data.forEach(element => {
                    if (element._id === itemId) {
                        setcurrentItem(element);
                    }
                });
            })
    }, [itemId])

    const navigate = useNavigate();

    const navigateInventory = event => {
        navigate('/manageInventory');
    };

    const sentUpdatedItemToBackend = (updatedItem) => {
        fetch(`https://vast-oasis-74168.herokuapp.com/user/${itemId}`, {
            method: 'PUT',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(updatedItem)
        })
            .then(res => res.json())
            .then(data => {
                console.log('success', data)
            })
    }

    const handleDelivery = () => {
        const updatedQuantity = parseInt(currentItem.quantity) - 1;

        const updatedItem = { ...currentItem, quantity: updatedQuantity.toString() };
        setcurrentItem(updatedItem);
        sentUpdatedItemToBackend(updatedItem);
    }

    const handleOnSubmit = (event) => {
        event.preventDefault();
        const desireItems = event.target.desireItems.value;

        const updatedQuantity = parseInt(currentItem.quantity) + parseInt(desireItems);

        const updatedItem = { ...currentItem, quantity: updatedQuantity.toString() };
        setcurrentItem(updatedItem);
        sentUpdatedItemToBackend(updatedItem);
        event.target.reset();
    }

    return (
        <div className='w-50 mx-auto d-flex justify-content-evenly mt-5 mb-5'>
            <Card style={{ width: '22rem' }}>
                <Card.Img variant="top" src={currentItem.imageUrl} />
                <Card.Body>
                    <Card.Title>name:{currentItem.name}</Card.Title>
                    <Card.Text>
                        {currentItem.description}
                    </Card.Text>
                    <Card.Text> Supplier Name: {currentItem.supplier}
                    </Card.Text>
                    <Card.Text> Quantity:
                        {currentItem.quantity}

                    </Card.Text>
                    <Card.Text>
                        Price:{currentItem.price}

                    </Card.Text>
                    <Button variant="primary" onClick={handleDelivery}>Delivery</Button>
                </Card.Body>
            </Card>

            <div>
                <Form onSubmit={handleOnSubmit}>
                    <Form.Group className="mb-3" controlId="formBasicPassword">
                        <Form.Label>Items Quantity</Form.Label>
                        <Form.Control type="items" name="desireItems" placeholder="put your desire quantity" />
                    </Form.Group>
                    <Button variant="primary" type="submit">
                        ReStock Items
                    </Button>
                </Form>

                <Link to='/manageInventory' className='text-primary pe-auto text-decoration-none' onClick={navigateInventory}>
                    <h2>Manage Inventory</h2>
                </Link>
            </div>

        </div>



    );
};

export default ItemDetail;