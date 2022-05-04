import React from 'react';
import { Button, Card } from 'react-bootstrap';
import { useNavigate } from 'react-router-dom';
import "./Item.css"

const Item = ({ item, callFromInventory }) => {

    const { id, name, description, quantity, price, supplier, img
    } = item;

    const navigate = useNavigate();

    const navigateToItemDetail = id => {
        console.log(id);
        navigate(`/item/${id}`);
    }

    return (
        <div className='item'>
            <Card >
                {/* style={{ width: '18rem' }} */}
                <Card.Img variant="top" src={img} />
                <Card.Body>
                    <Card.Title>{name}</Card.Title>
                    <Card.Text>
                        {description}
                    </Card.Text>
                    <Card.Text> Supplier Name: {supplier}
                    </Card.Text>
                    <Card.Text> Quantity:
                        {quantity}

                    </Card.Text>
                    <Card.Text>
                        Price:{price}

                    </Card.Text>
                    <Button onClick={() => navigateToItemDetail(id)} variant="primary">Update</Button>

                    {callFromInventory  ? (
                        <Button variant="primary">Delete</Button>
                    ) : null}
                    
                </Card.Body>
            </Card>
        </div>


    );
};

export default Item;