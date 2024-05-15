import React from 'react';
import Riverview from '../image/riverview.jpg';
import '../css/header.css';
import '../css/Home.css';
import Header from './Header';
import Footer from './Footer';

export default function Home() {
    return (
        <>
            <Header></Header>
            <div style={{
                backgroundImage: `url(${Riverview})`,
                backgroundRepeat: "no-repeat",
                backgroundSize: "cover",
                height: "100vh",
                marginTop: "0px",
                fontSize: "50px"
            }}>
                <div>
                    <div class="text">
                        <fieldset className='fieldset'>
                            <h1><span className='span'>UNIQUE EXPERIENCE</span></h1>
                            <hr/>
                            <h2>Enjoy With Us</h2>
                        </fieldset>
                    </div>
                </div>
            </div>
            <Footer></Footer>
        </>
    )
}