import React from 'react';
import eye from '../assets/eye.jpg';

const ImageWithTextBox = () => {
    return (
        <div className='position-relative'>
            <img src={eye} style={{width: "80%", marginLeft: "10%", marginTop: "100px"}} className='img-fluid shadow-lg' alt='colorful painting of an eye' />
            <div className='position-absolute bottom-0 end-0 translate-middle-x p-3'>
                <div className='card shadow' style={{width: "18rem"}}>
                    <div className='card-body'>
                        <h5 className='card-title'>Insight:</h5>
                        <p className='card-text'>Text explaining you and what your goals are...</p>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default ImageWithTextBox;