import React from 'react';
import hotel from '../image/hotel.jpg';
import '../css/header.css'
const Header = () => {
    return (
        <header className="header">
            <img src={hotel} alt="Company Logo" className="logo" />
            
            <nav class="navbar navbar-expand-lg navbar-light  navbar">
                <div class="collapse navbar-collapse" id="navbarNavDropdown">
                    <ul class="navbar-nav">
                        <li class="nav-item active">
                            <a class="nav-link navbaritem" href="#">Home </a>
                        </li>
                        <li class="nav-item">
                            <a class="nav-link navbaritem" href="/about">About</a>
                        </li>
                        <li class="nav-item">
                            <a class="nav-link navbaritem" href="/gallery">Gallery</a>
                        </li>
                        <li class="nav-item">
                            <a class="nav-link navbaritem" href="/Transportation">Transportation</a>
                        </li>
                        <li class="nav-item">
                            <a class="nav-link navbaritem" href='/login'>Room Reservation</a>
                        </li>
                        <li class="nav-item">
                            <a class="nav-link navbaritem navbaritem" href="/inventory">Directory</a>
                        </li>
                        <li class="nav-item">
                            <a class="nav-link navbaritem navbaritem" href="/employee-home">EmployeeManagement</a>
                        </li>
                        
                        <li class="nav-item dropdown">
                            <a class="nav-link dropdown-toggle navbaritem" href="#" id="navbarDropdownMenuLink" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                                Contact Us
                            </a>
                            <div class="dropdown-menu" aria-labelledby="navbarDropdownMenuLink">
                                <a class="dropdown-item navbaritem" href="/complaint">Complaint</a>
                                <a class="dropdown-item navbaritem" href="/feedback">Feedback</a>

                            </div>
                        </li>
                    </ul>
                </div>
                </nav>
        </header>
    );
};

export default Header;
