import { useState, useRef } from 'react'

import './About.css'
import Layout from '../Layout/Layout'
import { CreditRow, CreditCell } from './Credit'
import Contributors from './Contributors'

/* eslint-disable */
const GenContributors = () => (
  <>
    {
      Contributors.map((row, i) => (
        <CreditRow title={row.title} key={i}>
          {
	    row.contributors.map((contrib, j) => (
	      <CreditCell
		href={contrib.href}
		img={contrib.img}
		name={contrib.name}
		role={contrib.role}
		key={j}
	      />
	    ))
	  }
        </CreditRow>
      ))
    }
  </>
)
/* eslint-enable */

const About = () => {
  const [isMuted, setIsMuted] = useState(false)
  const audioRef = useRef(null)
  const toggleMute = () => {
    setIsMuted(!isMuted)
    if (audioRef.current) {
      audioRef.current.volume = isMuted ? 0.5 : 0
      if (isMuted) {
        audioRef.current.play().catch((err) => {
          console.error('Error playing audio:', err)
        })
      } else {
        audioRef.current.pause()
      }
    }
  }

  return (
    <Layout className='about-page-container'>
      <GenContributors />
      <div className='thankyou-box'>
        <div className='credit-name'>
          Thank you to everyone who contributed to Bytes of Love, including
          those whose names may not have been mentioned. This is an open source
          visual novel so anyone is welcome to help! LGTM.
        </div>
      </div>
      <button
        onClick={toggleMute}
        className='fixed bottom-4 right-4 bg-red-600 hover:bg-red-800 text-white font-bold py-2 px-4 rounded flex items-center justify-center rounded'
      >
        {isMuted
          ? (
            <svg
              xmlns='http://www.w3.org/2000/svg'
              fill='none'
              viewBox='0 0 24 24'
              strokeWidth='1.5'
              stroke='currentColor'
              className='w-6 h-6 stroke-black'
            >
              <path
                strokeLinecap='round'
                strokeLinejoin='round'
                d='m9 9 10.5-3m0 6.553v3.75a2.25 2.25 0 01-1.632 2.163l-1.32.377a1.803 1.803 0 01-.99-3.467l2.31-.66a2.25 2.25 0 001.632-2.163Zm0 0V2.25L9 5.25v10.303m0 0v3.75a2.25 2.25 0 01-1.632 2.163l-1.32.377a1.803 1.803 0 01-.99-3.467l2.31-.66A2.25 2.25 0 009 15.553Z'
              />
              <path strokeLinecap='round' d='M3 3l18 18' />
            </svg>
            )
          : (
            <svg
              xmlns='http://www.w3.org/2000/svg'
              fill='none'
              viewBox='0 0 24 24'
              strokeWidth='1.5'
              stroke='currentColor'
              className='w-6 h-6 stroke-black'
            >
              <path
                strokeLinecap='round'
                strokeLinejoin='round'
                d='m9 9 10.5-3m0 6.553v3.75a2.25 2.25 0 01-1.632 2.163l-1.32.377a1.803 1.803 0 01-.99-3.467l2.31-.66a2.25 2.25 0 001.632-2.163Zm0 0V2.25L9 5.25v10.303m0 0v3.75a2.25 2.25 0 01-1.632 2.163l-1.32.377a1.803 1.803 0 01-.99-3.467l2.31-.66A2.25 2.25 0 009 15.553Z'
              />
            </svg>
            )}
      </button>

      <audio ref={audioRef} src='main_menu.mp3' loop />
    </Layout>
  )
}

export default About
