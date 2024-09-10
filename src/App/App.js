import React, { useState, useRef, useEffect } from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Home from '../Home/Home';
import About from '../About/About';
import Download from '../Download/Download';

function App() {
    const [isMuted, setIsMuted] = useState(false); 
    const audioRef = useRef(null); 

    
    const toggleMute = () => {
        const newMutedState = !isMuted;
        setIsMuted(newMutedState);
        localStorage.setItem('isMuted', JSON.stringify(newMutedState)); 

        if (audioRef.current) {
            if (newMutedState) {
                audioRef.current.pause(); 
            } else {
                audioRef.current.play().catch(err => console.error("Error playing audio:", err));
            }
        }
    };

    
    useEffect(() => {
        const savedMuteState = JSON.parse(localStorage.getItem('isMuted'));

        if (savedMuteState !== null) {
            setIsMuted(savedMuteState);

            
            if (audioRef.current && !savedMuteState) {
                audioRef.current.play().catch(err => console.error("Error playing audio:", err));
            }
        } else {
            
            if (audioRef.current) {
                audioRef.current.play().catch(err => console.error("Error playing audio:", err));
            }
        }
    }, []);

    return (
        <BrowserRouter>
            
            <button onClick={toggleMute} className="fixed bottom-4 right-4 bg-red-600 hover:bg-red-800 text-white font-bold py-2 px-4 rounded z-50 flex items-center">
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

            
            <Routes>
                <Route path="/" exact element={<Home />} />
                <Route path="/about" exact element={<About />} />
                <Route path="/download" exact element={<Download />} />
            </Routes>
        </BrowserRouter>
    );
}

export default App;
