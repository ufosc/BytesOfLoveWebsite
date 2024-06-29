import React from 'react'
import Image from '../Image/Image'

import AppleLogo from '../assets/apple-logo.svg'
import LinuxLogo from '../assets/linux-logo.png'
import WindowsLogo from '../assets/windows-logo.png'

const MAC_SRC = 'https://drive.google.com/uc?export=download&id=1lHRB4EOvokiN0LybZw75ij7rI1a_WWZ9'
const LINUX_SRC = 'https://drive.google.com/uc?export=download&id=1lHRB4EOvokiN0LybZw75ij7rI1a_WWZ9'
const WINDOWS_SRC = 'https://drive.google.com/uc?export=download&id=1lHRB4EOvokiN0LybZw75ij7rI1a_WWZ9'

const Card = ({ src, platform, img }) => {
  return (
    <div class='home__download__cards__column'>
      <Image
        style={{ margin: 15 }} src={img}
        alt='MacOS Download Image' width={60} height={60}
        lazy
      />
      <h2 className='home__download__cards__column__label'>
        {platform}
      </h2>
      <button
        className='home__download__cards__column__button'
        onClick={() => window.open(src, '_blank')}
      >
        Download
      </button>
    </div>
  )
}

const Download = () => (
  <div className='home__download'>
    <hr />
    <h2 className='download-title' style={{ marginBottom: 50 }}>
      Download <span id='bytesName'>Bytes of Love</span> Now!
    </h2>
    <div className='home__download__cards'>
      <Card platform='MacOS' src={MAC_SRC} img={AppleLogo} />
      <Card platform='Linux' src={LINUX_SRC} img={LinuxLogo} />
      <Card platform='Windows' src={WINDOWS_SRC} img={WindowsLogo} />
    </div>
  </div>
)

export default Download
