import { useState, useRef, useEffect } from 'react';
import { useNavigate } from "react-router-dom";
import "./Home.css";
import Navbar from "../Navbar/Navbar";

const Home = () => {
    const [isMuted, setIsMuted] = useState(false); // Initialize as muted
    const audioRef = useRef(null); // Ref for the audio element     
    const [videoPlaying, setVideoPlaying] = useState(false);

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
                <img src="main_menu.gif" alt="bolCover" class="w-full h-full border-4 border-custom-purple" style={{borderRadius: "1vh"}}/>
            </div>

            <div className="divider"></div>

            <div className="picture-carousel">
                <img src="2_girls_classroom.png" alt="3 Girls in Classroom" class="w-full h-full border-4 border-custom-purple" style={{borderRadius: "1vh"}}/>
            </div>

            <div className="divider"></div>

            <div className="download-title">
                How to Play
            </div>

            <div className="download-links-box">
                <div className="flex w-3/12 items-center justify-center">
                    <div className="os-type text-2xl m-4 w-1/2 text-center">Mac</div>
                    <button onClick={ () => window.open('https://drive.google.com/uc?export=download&id=1lHRB4EOvokiN0LybZw75ij7rI1a_WWZ9', '_blank')} className="download-button-color hover:bg-blue-700f text-white font-bold py-2 px-4 rounded m-4">
                         <a>Download</a>
                    </button>
                </div>

                <div className="flex w-3/12 items-center justify-center">
                    <div className="os-type text-2xl m-4 w-1/2 text-center">Linux</div>
                    <button onClick={ () => window.open('https://drive.google.com/uc?export=download&id=1lHRB4EOvokiN0LybZw75ij7rI1a_WWZ9', '_blank')} className="download-button-color bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded m-4">
                         <a>Download</a>
                    </button>
                </div>

                <div className="flex w-3/12 items-center justify-center">
                    <div className="os-type text-2xl m-4 w-1/2 text-center">Windows</div>
                    <button onClick={ () => window.open('https://drive.google.com/uc?export=download&id=1lHRB4EOvokiN0LybZw75ij7rI1a_WWZ9', '_blank')} className="download-button-color bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded m-4">
                         <a>Download</a>
                    </button>
                </div>
            </div>

            <button onClick={toggleMute} className="fixed bottom-4 right-4 bg-red-600 hover:bg-red-800 text-white font-bold py-2 px-4 rounded flex items-center justify-center rounded">
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
        </div>
    );
};

export default Home;
