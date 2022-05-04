import React, { useEffect, useState } from 'react';
import Item from '../Home/Items/Item/Item';

const ManageInventory = () => {

    const [manageItem, setManageItem] = useState([]);

    useEffect(() => {
        fetch('http://localhost:5000/users')
            .then(res => res.json())
            .then(data => setManageItem(data))
    }, [])

    return (
        <div>
            <h2 className='text-center mt-5 mb-5' id='items'>Manage Inventory Items:{manageItem.length}</h2>
            <div className='items-container'>
                {
                    manageItem.map(item => <Item

                        key={item.id}
                        item={item}


                    ></Item>)
                }

            </div>
        </div>
    );
};

export default ManageInventory;