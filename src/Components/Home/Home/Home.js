import React from 'react';
import Graph from '../../Graph/Graph';
import Review from '../../Review/Review';
import Banner from '../Banner/Banner';
import Items from '../Items/Items';

const Home = () => {
    return (
        <div>
            <Banner />
            <Items />
            <Graph/>
            <Review/>
        </div>
    );
};

export default Home;