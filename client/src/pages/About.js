import React from 'react';
import puppies from '../assets/paintings/puppies.jpg';

function About() {
    return (
        <div style={{ marginTop: '100px' }}>
            <div className='container col-10'>
                <div className='row'>
                    <div className='col-md-6'>
                        <img src={puppies} className='img-fluid shadow-lg' alt='puppies cuddling'/>
                    </div>
                    <div className='col-md-6'>
                        <div className='card'>
                            <h3 className='card-header fw-bold text-center text-decoration-underline'>About the creator</h3>
                            <p className='text-center'>
                            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default About;