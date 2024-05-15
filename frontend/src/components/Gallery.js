import React from 'react';
import './css/Gallery.css';
import img1 from '../assets/1.jpg';
import img2 from '../assets/2.jpg';
import img3 from '../assets/3.jpg';
import img4 from '../assets/4.jpg';
import img5 from '../assets/5.jpg';
import img6 from '../assets/6.jpg';
import img7 from '../assets/7.jpg';
import img8 from '../assets/8.jpg';
import img9 from '../assets/9.jpg';
import img10 from '../assets/10.jpg';
import img11 from '../assets/11.jpg';
import img12 from '../assets/12.jpg';



const Gallery = () => {
    /*
    const images = [
        { url: '../assets/1.jpg', description: 'Description of image 1' },
        { url: '../assets/2.jpg', description: 'Description of image 2' },
        { url: '../assets/3.jpg', description: 'Description of image 3' },
        { url: '../assets/4.jpg', description: 'Description of image 4' },
        { url: '../assets/5.jpg', description: 'Description of image 5' },
        { url: '../assets/6.jpg', description: 'Description of image 6' },
        { url: '../assets/7.jpg', description: 'Description of image 7' },
        { url: '../assets/8.jpg', description: 'Description of image 8' },
        { url: '../assets/9.jpg', description: 'Description of image 9' },
        { url: '../assets/10.jpg', description: 'Description of image 10' },
        { url: '../assets/11.jpg', description: 'Description of image 11' },
        { url: '../assets/12.jpg', description: 'Description of image 12' }
    ];

    return (
        <div className="gallery">
            {images.map((image, index) => (
                <div key={index} className="image-container">
                    <img src={image.url} alt={image.description} className="image"></img>
                    <p className="description">{image.description}</p>
                </div>
            ))}
        </div>
    );*/
    return(
        <>
        <img src={img1} alt="image1"></img>
        <img src={img2} alt="image2"></img>
        <img src={img3} alt="image3"></img>
        <img src={img4} alt="image4"></img>
        <img src={img5} alt="image5"></img>
        <img src={img6} alt="image6"></img>
        <img src={img7} alt="image7"></img>
        <img src={img8} alt="image8"></img>
        <img src={img9} alt="image9"></img>
        <img src={img10} alt="image10"></img>
        <img src={img11} alt="image11"></img>
        <img src={img12} alt="image12"></img>

        <button className='btn'>BACK TO HOME</button>
        </>

    );
        

};


export default Gallery;
