import React from 'react';
import { Button, Card } from 'react-bootstrap';
import { useNavigate } from 'react-router-dom';
import "./Item.css"

const Item = ({ item, callFromInventory, deleteOption }) => {

    const { _id, name, description, quantity, price, supplier, imageUrl } = item;

    const handleItemDelete = (id) => {
        const proceed = window.confirm('are you sure you want to delete?')
        if (proceed) {
            console.log('user deleting', id);
            const url = `https://vast-oasis-74168.herokuapp.com/user/${id}`;
            fetch(url, {
                method: 'DELETE'
            })
                .then(res => res.json())
                .then(data => {
                    if (data.deletedCount > 0) {
                        console.log('deleted');
                        deleteOption(id);
                    }
                })
        }

    }

    const navigate = useNavigate();

    const navigateToItemDetail = id => {
        console.log(id);
        navigate(`/item/${id}`);
    }

    return (
        <div className='item'>
            <Card >
                {/* style={{ width: '18rem' }} */}
                <Card.Img
                    style={{ width: '27rem' }}
                    variant="top" src={imageUrl} />
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
                    <Button onClick={() => navigateToItemDetail(_id)} variant="primary">Update</Button>

                    {callFromInventory ? (
                        <Button
                            onClick={() => { handleItemDelete(item._id) }}
                            variant="primary">Delete</Button>
                    ) : null}

                </Card.Body>
            </Card>
        </div>


    );
};

export default Item;