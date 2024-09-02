import { useState, useRef, useEffect } from 'react';
import "./Home.css";
import Navbar from "../Navbar/Navbar";
import Footer from "../Footer/Footer";
import {Carousel, Carousel_Rotate_Left, Carousel_Rotate_Right, images} from '../Carousel/Carousel';


const Home = () => {
    const [isMuted, setIsMuted] = useState(false); // Initialize as muted
    const audioRef = useRef(null); // Ref for the audio element     
    const [videoPlaying, setVideoPlaying] = useState(false);
    const [currentImageIndex, setCurrentImageIndex] = useState(0);

    const handleRotateLeft = () => {
        setCurrentImageIndex(prevIndex => (prevIndex - 1 + images.length) % images.length);
    };
    
    const handleRotateRight = () => {
        setCurrentImageIndex(prevIndex => (prevIndex + 1) % images.length);
    };
    
    const handleButtonNav = (selectedIndex) => {
        console.log(selectedIndex);
        setCurrentImageIndex(selectedIndex);
    }

    const toggleMute = () => {
        setIsMuted(!isMuted);
        if (audioRef.current) {
            audioRef.current.volume = isMuted ? 0.5 : 0; // Set volume to 1 if currently muted, 0 if currently unmuted
            if (isMuted) {
                audioRef.current.play().catch(err => {
                    console.error("Error playing audio:", err);
                });
            } else {
                audioRef.current.pause();   
            }
        }
    };

    useEffect(() => {
        setCurrentImageIndex(0);
        toggleMute();
        const handleLocationChange = () => {
            setIsMuted(true); 
            if (audioRef.current) {
                audioRef.current.pause();
            }
        };
    }, []);
    
    useEffect(() => {
        const videoElement = document.querySelector('video');
        if (videoElement) {
            videoElement.onplay = () => {
                setVideoPlaying(true);
            };
            videoElement.onerror = () => {
                setVideoPlaying(false);
            };
        }
        if (audioRef.current) {
            audioRef.current.play().catch(err => {
                console.error("Error playing audio:", err);
            });
        }
    }, []);

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
                <h2 id="meetHeading">Meet Our Charactetrs!</h2>
                <div className="Carousel border-4 border-custom-purple w-3/5 ">
                    <Carousel imageIndex={currentImageIndex} />
                    <div className="button-container">
                        <Carousel_Rotate_Left onRotate={handleRotateLeft} />
                        <Carousel_Rotate_Right onRotate={handleRotateRight} />
                    </div>
                </div>
            </div>
        

            <button onClick={toggleMute} className="fixed bottom-4 right-4 bg-red-600 hover:bg-red-800 text-white font-bold py-2 px-4 rounded flex items-center justify-center rounded " id="musicButton">
            {isMuted ? (
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="w-6 h-6 stroke-black">
                        <path strokeLinecap="round" strokeLinejoin="round" d="m9 9 10.5-3m0 6.553v3.75a2.25 2.25 0 01-1.632 2.163l-1.32.377a1.803 1.803 0 01-.99-3.467l2.31-.66a2.25 2.25 0 001.632-2.163Zm0 0V2.25L9 5.25v10.303m0 0v3.75a2.25 2.25 0 01-1.632 2.163l-1.32.377a1.803 1.803 0 01-.99-3.467l2.31-.66A2.25 2.25 0 009 15.553Z" />
                        <path strokeLinecap="round" d="M3 3l18 18" />
                    </svg>
                ) : (

                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="w-6 h-6 stroke-black">
                        <path strokeLinecap="round" strokeLinejoin="round" d="m9 9 10.5-3m0 6.553v3.75a2.25 2.25 0 01-1.632 2.163l-1.32.377a1.803 1.803 0 01-.99-3.467l2.31-.66a2.25 2.25 0 001.632-2.163Zm0 0V2.25L9 5.25v10.303m0 0v3.75a2.25 2.25 0 01-1.632 2.163l-1.32.377a1.803 1.803 0 01-.99-3.467l2.31-.66A2.25 2.25 0 009 15.553Z" />
                    </svg>
                )}
            </button>            

            <audio ref={audioRef} src="main_menu.mp3" loop />



            <Footer />

        </div>
    );
};

export default Home;
