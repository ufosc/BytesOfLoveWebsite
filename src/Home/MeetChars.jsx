import React from 'react'
import { Carousel, CarouselCard } from '../Carousel/Carousel'

import Image from '../Image/Image'
import CPP from '../assets/C++_Base.png'
import Java from '../assets/Java_Wink.png'
import Javascript from '../assets/JavaScript_Base.png'
import Python from '../assets/Python_HandsPocket_2.png'

const Character = ({ name, image, children }) => {
  const style = {
    fontSize: '4vh',
    marginTop: '3vh',
    marginBottom: '2vh',
    fontFamily: 'cursive'
  }
  return (
    <CarouselCard>
      <h1 style={style}>{name}</h1>
      <Image
        lazy src={image} width={550} height={550}
        style={{ width: '100%', display: 'flex', justifyContent: 'center' }}
      />
      <div style={{ fontSize: '3vh', marginTop: '3vh', height: 50 }}>
        {children}
      </div>
    </CarouselCard>
  )
}

const MeetChars = () => {
  return (
    <>
      <hr style={{ marginTop: 20 }} />
      <h2 className='download-title'>
        Meet Our Characters!
      </h2>
      <div className='home__meet-chars'>
        <Carousel style={{ maxWidth: 800, width: '100%' }}>
          <Character name='C++' image={CPP}>
            <p>C++, an edgy CS major focused on game development</p>
          </Character>
          <Character name='Java' image={Java}>
            <p>
              Java, a determined mother returning to college to conquer
              challenges of the past
            </p>
          </Character>
          <Character name='Javascript' image={Javascript}>
            <p>
              JavaScript, a peppy CS major interested in web development
            </p>
          </Character>
          <Character name='Python' image={Python}>
            <p>Python, a kind CS major who aces her classes effortlessly</p>
          </Character>
        </Carousel>
      </div>
    </>
  )
}

export default MeetChars
