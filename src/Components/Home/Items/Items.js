import React, { useEffect, useState } from 'react';
import Item from './Item/Item';
import "./Items.css";

const Items = () => {

    const [items, setItems] = useState([]);

    useEffect(() => {
        fetch('items.json')
            .then(res => res.json())
            .then(data => setItems(data))
    }, [])

    return (
        <div>
            <h2 className='text-center mt-5 mb-5' id='items'>Inventory Items</h2>
            <div className='items-container'>
                {
                    items.map(item => <Item
                        key={item.id}
                        item={item}

                    ></Item>)
                }
            </div>
        </div>
    );
};

export default Items;