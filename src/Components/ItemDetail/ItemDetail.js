import React, { useEffect, useState } from 'react';
import { Button, Card, Form } from 'react-bootstrap';
import { Link, useNavigate, useParams } from 'react-router-dom';

const ItemDetail = () => {

    const { itemId } = useParams();

    const [currentItem, setcurrentItem] = useState({});

    useEffect(() => {
        fetch(`http://localhost:5000/user/${itemId}`)
            .then(res => res.json())
            .then(data => setcurrentItem(data))
    }, [itemId])

    const navigate = useNavigate();

    const navigateInventory = event => {
        navigate('/manageInventory');
    };


    return (
        <div className='w-50 mx-auto d-flex justify-content-evenly mt-5 mb-5'>
            <Card style={{ width: '22rem' }}>
                <Card.Img variant="top" src={currentItem.img} />
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
                    <Button variant="primary">Delivery</Button>
                </Card.Body>
            </Card>

            <div>
                <Form>

                    <Form.Group className="mb-3" controlId="formBasicPassword">
                        <Form.Label>Items Quantity</Form.Label>
                        <Form.Control type="items" placeholder="put your desire quantity" />
                    </Form.Group>
                    <Button variant="primary" type="submit">
                        ReStock Items
                    </Button>

                </Form>
                <Link to='/manageInventory' className='text-primary pe-auto text-decoration-none' onClick={navigateInventory}><h2>Manage Inventory</h2></Link>



            </div>

        </div>



    );
};

export default ItemDetail;