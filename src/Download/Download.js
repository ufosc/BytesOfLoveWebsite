import { useState, useRef, useEffect } from 'react';
import Navbar from "../Navbar/Navbar" 
import "./Download.css";
import "../Home/Home.css";


const Download = () => {
    const [isMuted, setIsMuted] = useState(false); // Initialize as muted
    const audioRef = useRef(null); // Ref for the audio element     
    const [videoPlaying, setVideoPlaying] = useState(false);
    const [currentImageIndex, setCurrentImageIndex] = useState(0);

    

  
    


    return (
        <div className="download-page-container">
            <Navbar />

            <div className="download-title">Game Engine</div>
            <div id="description-text">
                BytesOfLove is built using Ren'Py, a popular visual novel engine. Ren'Py allows for rich storytelling experiences through its easy-to-use scripting language and powerful features.
            </div>

            <div className="download-title">
                How to Play
            </div>

            <div className="download-links-box">
                <div className="flex w-3/12 items-center justify-center">
                    <div className="os-type text-2xl m-4 w-1/2 text-center">Mac</div>
                    <button onClick={ () => window.open('https://drive.google.com/uc?export=download&id=1lHRB4EOvokiN0LybZw75ij7rI1a_WWZ9', '_blank')} className="download-button-color hover:bg-dark-purple text-white font-bold py-2 px-4 rounded m-4">
                         <a>Download</a>
                    </button>
                </div>

                <div className="flex w-3/12 items-center justify-center">
                    <div className="os-type text-2xl m-4 w-1/2 text-center">Linux</div>
                    <button onClick={ () => window.open('https://drive.google.com/uc?export=download&id=1lHRB4EOvokiN0LybZw75ij7rI1a_WWZ9', '_blank')} className="download-button-color bg-blue-500 hover:bg-dark-purple text-white font-bold py-2 px-4 rounded m-4">
                         <a>Download</a>
                    </button>
                </div>

                <div className="flex w-3/12 items-center justify-center">
                    <div className="os-type text-2xl m-4 w-1/2 text-center">Windows</div>
                    <button onClick={ () => window.open('https://drive.google.com/uc?export=download&id=1lHRB4EOvokiN0LybZw75ij7rI1a_WWZ9', '_blank')} className="download-button-color bg-blue-500 hover:bg-dark-purple text-white font-bold py-2 px-4 rounded m-4">
                         <a>Download</a>
                    </button>
                </div>
            </div>

                

            
        </div>
    )
} 

export default Download