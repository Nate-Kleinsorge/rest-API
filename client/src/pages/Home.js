import React from 'react';
import ImageWithTextBox from '../components/imageWText';
import PaintingCard from '../components/paintingCard';

function Home() {
    return (
        <div>
            <div className='container'>
                <ImageWithTextBox />
            </div>
            <div className='container'>
                <PaintingCard />
            </div>
        </div>
    );
};

export default Home;