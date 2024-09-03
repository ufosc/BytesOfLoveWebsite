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

// Preload the images to reduce the chance of oddities occuring on the carousel
for (const image of images) {
    const imageElement = new Image();
    imageElement.src = image;
  }

export const name = [
     "C++",
     "Java",
     "JavaScript",
     "Python",
     "",
     "",
]

export const text = [
    "C++, an edgy CS major focused on game development",
    "Java, a determined mother returning to college to conquer challenges of the past",
    "JavaScript, a peppy CS major interested in web development",
    "Python, a kind CS major who aces her classes effortlessly",
    "The team that put together this website during the summer of '24",
    "Looks Good To Merge, Let's Get The Money, Let's Guzzle That Milk",
]   

export const Carousel = ({ imageIndex, fade }) => {
    return (
        <div className="Carousel">
                <div className="heading-text" style={{
                    fontSize: "calc(4vw + 2vh)",
                    marginTop: "3vh", 
                    marginBottom: "2vh",
                    fontFamily: "cursive",
                    opacity: fade ? 0 : 1, 
                    transition: 'opacity 0.5s ease-in-out',
                    }}>{name[imageIndex]}</div>

                <img class="h-auto" src={images[imageIndex]} alt={`Displaying ${images[imageIndex]}`} style={{
                    opacity: fade ? 0 : 1,
                    transition: 'opacity 0.5s ease-in-out',}}/>
                <div className="description-text" style={{
                    fontSize: "calc(2vw + 1vh)", 
                    padding: "4vh",
                    opacity: fade ? 0 : 1, 
                    transition: 'opacity 0.5s ease-in-out',}}>{text[imageIndex]}</div>
        </div>
    );
};
    
export const Carousel_Rotate_Left = ({fadeFunction}) => {
    return (
        <div className="left-button">
            <button onClick={fadeFunction}>
                <img src="images/arrow_left_alt.png" alt="Rotate Left" />
            </button>
        </div>
    );
};

export const Carousel_Rotate_Right = ({fadeFunction}) => {
    return (
        <div className="right-button">
            <button onClick={fadeFunction}>
                <img src="images/arrow_right_alt.png" alt="Rotate Right" />
            </button>
        </div>
    );
};

export const Carousel_Navigation_Buttons = ({ fadeFunction, movementFunction, activeIndex }) => {
    return (
        <div className="nav-buttons-container">
            {images.map((_, index) => (
                <button className="nav-button" key={index} onClick={() => fadeFunction(movementFunction, index)} style={{
                    backgroundColor: activeIndex === index ? 'purple' : '#000000',
                }}></button>
            ))}
        </div>
    );
}



