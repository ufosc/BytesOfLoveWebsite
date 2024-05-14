import React from "react";
import './Carousel.css';



export const images = [
    "images/LGTM.png",
    "images/Summer.png", 
    "images/C++_Base.png", 
    "images/Java_Wink.png",
    "images/JavaScript_Base.png",
    "images/Python_HandsPocket_2.png"

];

export const Carousel = ({ imageIndex }) => {
    return (
        <div className="Carousel">
                <img class="h-auto" src={images[imageIndex]} alt={`Displaying ${images[imageIndex]}`} />


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



