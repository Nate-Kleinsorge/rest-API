import React from 'react';

function Header() {
    return (
        <nav class="navbar navbar-expand-lg navbar-light bg-white fixed-top border-bottom">
            <a class="navbar-brand fw-bold fs-2" href="/">Kens Creations</a>
            <div class="collapse navbar-collapse text-center" id="navbarNav">
                <ul class="navbar-nav">
                    <li class="nav-item">
                        <a class="nav-link" href="/">Home</a>
                    </li>
                    <li class="nav-item">
                        <a class="nav-link" href="/about">About</a>
                    </li>
                    <li class="nav-item">
                        <a class="nav-link" href="/contact">Contact</a>
                    </li>
                </ul>
            </div>
        </nav>
    )
} 

export default Header;