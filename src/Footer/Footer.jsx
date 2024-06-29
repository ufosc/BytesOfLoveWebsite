import './Footer.css'
import React from 'react'

import Image from '../Image/Image'
import BoLLogo from '../assets/BoL Logo Edited.png'
import GhLogo from '../assets/github_logo.png'

const Footer = () => (
  <div id='footerBar'>
    <div>
      <Image src={BoLLogo} lazy width={40} height={40} />
    </div>
    <div id='socials'>
      <a href='https://github.com/ufosc/BytesOfLoveWebsite'>
        <Image src={GhLogo} lazy width={40} height={40} />
      </a>
    </div>
  </div>
)

export default Footer
