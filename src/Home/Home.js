import { useState, useRef, useEffect } from 'react';
import "./Home.css";
import Navbar from "../Navbar/Navbar";
import Footer from "../Footer/Footer";
import {Carousel, Carousel_Rotate_Left, Carousel_Rotate_Right, Carousel_Navigation_Buttons, images} from '../Carousel/Carousel';


const Home = () => {
    const [isMuted, setIsMuted] = useState(false); // Initialize as muted
    const audioRef = useRef(null); // Ref for the audio element     
    const [videoPlaying, setVideoPlaying] = useState(false);
    const [currentImageIndex, setCurrentImageIndex] = useState(0);
    const [fade, setFade] = useState(false);
    const fadeTimeout = 0.75 * 1000;

    const handleRotateLeft = () => {
        setCurrentImageIndex(prevIndex => (prevIndex - 1 + images.length) % images.length);
    };
    
    const handleRotateRight = () => {
        setCurrentImageIndex(prevIndex => (prevIndex + 1) % images.length);
    };
    
    const handleButtonNav = (selectedIndex) => {
        setCurrentImageIndex(selectedIndex);
    }

    const handleFadeArrows = (movementFunction) => {
        setFade(true);
        setTimeout(() => {
            movementFunction();
            setFade(false);
        }, fadeTimeout)
    }

    const handleFadeNav = (movementFunction, selectedIndex) => {
        if(!(selectedIndex === currentImageIndex)){
            setFade(true);
            setTimeout(() => {
                movementFunction(selectedIndex);
                setFade(false);
            }, fadeTimeout)
        }
    }

    
    return (

        <div className="home-page-container">
            <Navbar />

            <div class="picture-carousel">
                <img src="main_menu.gif" alt="bolCover" class="" id="heroImage"/>
            </div>

            <div id="descriptionSection">
                <hr id="descDivi"></hr>
                <div id="aboutHeading">About Bytes of Love</div>
                <div id="description-text">"Bytes of Love" is an engaging open-source dating simulator by the UF Open Source Club. Development began in Fall 2023 and continues actively. This visual novel offers immersive romantic storylines and character interactions, and it's compatible with Mac, Linux, and Windows. The game reflects the collaborative spirit and creativity of the club's contributors.</div>
            </div>

            <div id="download">
                <hr id="descDivi"></hr>
                <h2 id="aboutHeading" className="download-title">Download <span id="bytesName">Bytes of Love</span> Now!</h2>
                <div id="downloadCol">

                    <div id="macDownload" class="column">
                        <img class="logo" src="images/apple-logo.svg"></img>
                        <h2 id="downloadLabel">Mac</h2>
                        <button id="downloadButton" onClick={ () => window.open('https://drive.google.com/uc?export=download&id=1lHRB4EOvokiN0LybZw75ij7rI1a_WWZ9', '_blank')}>
                            <a>Download</a>
                        </button>
                    </div>

                    <div id="linuxDownload" class="column">
                        <img class="logo" src="images/Linux_logo_PNG4.png"></img>
                        <h2 id="downloadLabel">Linux</h2>
                        <button id="downloadButton" onClick={ () => window.open('https://drive.google.com/uc?export=download&id=1lHRB4EOvokiN0LybZw75ij7rI1a_WWZ9', '_blank')}>
                            <a>Download</a>
                        </button>
                    </div>

                    <div id="windowsDownload" class="column">
                        <img class="logo" src="images/windows-logo.png"></img>
                        <h2 id="downloadLabel">Windows</h2>
                        <button id="downloadButton" onClick={ () => window.open('https://drive.google.com/uc?export=download&id=1lHRB4EOvokiN0LybZw75ij7rI1a_WWZ9', '_blank')}>
                            <a>Download</a>
                        </button>
                    </div>

                </div>
            </div>


            <div id="meetChars">
                <h2 id="meetHeading">Meet Our Characters!</h2>
                <div className="Carousel-Wrapper border-4 border-custom-purple w-3/5 ">
                    <Carousel imageIndex={currentImageIndex} fade={fade}/>
                    <div className="button-container">
                        <Carousel_Rotate_Left fadeFunction={() => handleFadeArrows(handleRotateLeft)} />
                        <Carousel_Rotate_Right fadeFunction={() => handleFadeArrows(handleRotateRight)} />
                    </div>
                    <Carousel_Navigation_Buttons fadeFunction={handleFadeNav} movementFunction={handleButtonNav} activeIndex={currentImageIndex} />
                </div>
            </div>
        

                      

            



            <Footer />

        </div>
    );
};

export default Home;
