import React from 'react';
import twitter from '../assets/Logos/x-logo-black.png';
import linkedIn from '../assets/Logos/linked-black-logo.jpg';
import insta from '../assets/Logos/insta-black-logo.jpeg';

function Footer() {
    return (
        <div>
            <footer className='d-flex flex-wrap justify-content-between align-items-center py-3 my-4 border-top'>
                <div className='col-md-4 d-flex align-items-center'>
                    <span className='mb-3 mb-md-0 text-body-secondary'>Kens Creations inc.</span>
                </div>
                <ul className='nav col-md-4 justify-content-end list-unstyled d-flex'>
                    <li className='ms-3'>
                        <a className='text-body-secondary' href='https://www.x.com'>
                            <img src={twitter} alt="Twitter logo" width="20" height="20" />
                        </a>
                    </li>
                    <li className='ms-3'>
                        <a className='text-body-secondary' href='https://www.linkedin.com'>
                            <img src={linkedIn} alt='linked in logo' width='25' height='25'/>
                        </a>
                    </li>
                    <li className='ms-3'>
                        <a className='text-body-secondary' href='https://www.instagram.com'>
                            <img src={insta} alt='instagram logo' width='25' height='25' />
                        </a>
                    </li>
                </ul>
            </footer>
        </div>
    )
}

export default Footer;