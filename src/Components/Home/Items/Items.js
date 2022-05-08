import React, { useEffect, useState } from 'react';
import Item from './Item/Item';
import "./Items.css";
import { Link, useNavigate } from 'react-router-dom';

const Items = () => {

    const [items, setItems] = useState([]);

    useEffect(() => {
        fetch('http://localhost:5000/user')
            .then(res => res.json())
            .then(data => {
                const itemSlice = data.slice(0, 6);
                setItems(itemSlice);
            })
    }, [])

    const navigate = useNavigate();

    const navigateInventory = event => {
        navigate('/manageInventory');
    };

    return (
        <div className='mb-5'>
            <h2 className='text-center mt-5 mb-5' id='items'>Inventory Items</h2>

            <div className='items-container'>
                {
                    items.map(item => <Item
                        key={item.id}
                        item={item}
                    ></Item>)
                }
            </div>
            <Link to='/manageInventory' 
                className='text-primary pe-auto text-decoration-none d-flex mx-auto w-50 ' 
                onClick={navigateInventory}
            >
                <h2>Manage Inventory</h2>
            </Link>
        </div>
    );
};

export default Items;