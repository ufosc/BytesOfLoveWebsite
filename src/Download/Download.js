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
         <div id="download">
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
        </div>
    )
} 

export default Download
