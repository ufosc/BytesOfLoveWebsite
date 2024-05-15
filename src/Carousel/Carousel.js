import React from "react";
import './Carousel.css';

export const images = [
    "images/C++_Base.png", 
    "images/Java_Wink.png",
    "images/JavaScript_Base.png",
    "images/Python_HandsPocket_2.png",
    "images/Summer.png", 
    "images/LGTM.png",
];

export const text = [
    "C++, an edgy CS major focused on game development",
    "Java, a determined mother returning to college to conquer challenges of the past",
    "JavaScript, a peppy CS major interested in web development",
    "Python, a kind CS major who aces her classes effortlessly",
    "The team that put together this website during the summer of '24",
    "Looks Good To Merge, Let's Get The Money, Let's Guzzle That Milk",
]   

export const Carousel = ({ imageIndex }) => {
    return (
        <div className="Carousel">
                <img class="h-auto" src={images[imageIndex]} alt={`Displaying ${images[imageIndex]}`} />
                <div className="description-text" style={{fontSize: "4vh", marginTop: "3vh"}}>{text[imageIndex]}</div>
        </div>
    );
};
    
export const Carousel_Rotate_Left = ({ onRotate }) => {
    return (
        <div className="left-button">
            <button onClick={onRotate} style={{ background: 'none', border: 'none' }}>
                <img src="images/arrow_left.png" alt="Rotate Left" />
            </button>
        </div>
    );
};

export const Carousel_Rotate_Right = ({ onRotate }) => {
    return (
        <div className="right-button">
            <button onClick={onRotate} style={{ background: 'none', border: 'none' }}>
                <img src="images/arrow_right.png" alt="Rotate Right" />
            </button>
        </div>
    );
};  



