import React, { useEffect, useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import Item from '../Home/Items/Item/Item';

const ManageInventory = () => {

    const [manageItem, setManageItem] = useState([]);

    useEffect(() => {
        fetch('http://localhost:5000/user')
            .then(res => res.json())
            .then(data => setManageItem(data))
    }, [])


    const navigate = useNavigate();

    const navigateInventory = event => {
        navigate('/AddInventoryPage');
    };

    const deleteManageItems = (id) => {
        setManageItem((prev) => prev.filter((item) => item._id !== id));
    }

    return (
        <div>
            <h2 className='text-center mt-5 mb-5 text-primary' id='items'>Manage Inventory Items</h2>
            <div className='items-container'>
                {
                    manageItem.map(item => <Item

                        key={item.id}
                        item={item}
                        callFromInventory
                        deleteOption={deleteManageItems}

                    ></Item>)
                }

            </div>
            <button className='d-flex mx-auto w-50 bg-dark'>
                <Link to='/AddInventoryPage' className='text-primary pe-auto text-decoration-none d-flex mx-auto w-50 ' onClick={navigateInventory}>
                    <h2>Add New Item</h2>
                </Link>
            </button>
        </div>
    );
};

export default ManageInventory;