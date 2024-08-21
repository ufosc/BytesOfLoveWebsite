import { useState, useRef } from 'react'

import './Home.css'
import Layout from '../Layout/Layout'
import Download from './Download'
import MeetChars from './MeetChars'

import Image from '../Image/Image'
import MainMenuSplashscreen from '../assets/main_menu.gif'

const Home = () => {
  const [isMuted, setIsMuted] = useState(false)
  const audioRef = useRef(null)
  const toggleMute = () => {
    setIsMuted(!isMuted)
    if (audioRef.current) {
      audioRef.current.volume = isMuted ? 0.5 : 0
      if (isMuted) {
        audioRef.current.play().catch(err => {
          console.error('Error playing audio:', err)
        })
      } else {
        audioRef.current.pause()
      }
    }
  }

  const MuteButton = () => (
    <button onClick={toggleMute} className='fixed bottom-4 right-4 bg-red-600 hover:bg-red-800 text-white font-bold py-2 px-4 rounded flex items-center justify-center rounded' id='musicButton'>
      {isMuted
        ? (
          <svg xmlns='http://www.w3.org/2000/svg' fill='none' viewBox='0 0 24 24' strokeWidth='1.5' stroke='currentColor' className='w-6 h-6 stroke-black'>
            <path strokeLinecap='round' strokeLinejoin='round' d='m9 9 10.5-3m0 6.553v3.75a2.25 2.25 0 01-1.632 2.163l-1.32.377a1.803 1.803 0 01-.99-3.467l2.31-.66a2.25 2.25 0 001.632-2.163Zm0 0V2.25L9 5.25v10.303m0 0v3.75a2.25 2.25 0 01-1.632 2.163l-1.32.377a1.803 1.803 0 01-.99-3.467l2.31-.66A2.25 2.25 0 009 15.553Z' />
            <path strokeLinecap='round' d='M3 3l18 18' />
          </svg>
          )
        : (
          <svg xmlns='http://www.w3.org/2000/svg' fill='none' viewBox='0 0 24 24' strokeWidth='1.5' stroke='currentColor' className='w-6 h-6 stroke-black'>
            <path strokeLinecap='round' strokeLinejoin='round' d='m9 9 10.5-3m0 6.553v3.75a2.25 2.25 0 01-1.632 2.163l-1.32.377a1.803 1.803 0 01-.99-3.467l2.31-.66a2.25 2.25 0 001.632-2.163Zm0 0V2.25L9 5.25v10.303m0 0v3.75a2.25 2.25 0 01-1.632 2.163l-1.32.377a1.803 1.803 0 01-.99-3.467l2.31-.66A2.25 2.25 0 009 15.553Z' />
          </svg>
          )}
    </button>
  )

  return (
    <Layout className='home-page-container'>
      <div class='picture-carousel'>
        <Image
          lazy src={MainMenuSplashscreen}
          alt='Bytes of Love Splashscreen'
          width='100vw' height='90vh'
        />
      </div>
      <div id='descriptionSection'>
        <hr id='descDivi' />
        <div id='aboutHeading'>About Bytes of Love</div>
        <div id='description-text'>
          Bytes of Love is an engaging open-source dating simulator
          by the UF Open Source Club. Development began in Fall 2023
          and continues actively. This visual novel offers immersive
          romantic storylines and character interactions, and it is
          compatible with Mac, Linux, and Windows. The game reflects
          the collaborative spirit and creativity of its contributors.
        </div>
      </div>
      <Download />
      <MeetChars />
      <MuteButton />
      <audio ref={audioRef} src='main_menu.mp3' loop />
    </Layout>
  )
}

export default Home
