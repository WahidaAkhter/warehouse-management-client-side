import React from 'react';
import Graph from '../../Graph/Graph';
import Banner from '../Banner/Banner';
import Items from '../Items/Items';

const Home = () => {
    return (
        <div>
            <Banner />
            <Items />
            <Graph/>
        </div>
    );
};

export default Home;