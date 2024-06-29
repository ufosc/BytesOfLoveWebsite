import React, { useState } from 'react'
import './Carousel.css'

const CarouselCard = ({ children, style, className }) => (
  <div className='carousel-card border-4 border-custom-purple'>
    <div className={className} style={style}>
      {children}
    </div>
  </div>
)

const Carousel = ({ children, style, className }) => {
  const [select, setSelect] = useState(0)
  const advance = (i) => {
    setSelect((select + i) % children.length)
  }

  const SlideIndices = () => {
    const rows = []
    for (let i = 0; i < children.length; i++) {
      if (i !== select) {
        rows.push((
          <div
            key={i} className='carousel__slide-index'
            onClick={() => setSelect(i)}
          />
        ))
        continue
      }
      rows.push((
        <div
          key={i} className='carousel__slide-index--selected'
          onClick={() => setSelect(i)}
        />
      ))
    }

    return (
      <div
        className='carousel__slide-indices'
        style={{ gridTemplateColumns: `repeat(${children.length}, 1fr` }}
      >
        {rows}
      </div>
    )
  }

  const PrevButton = () => {
    if (select === 0) {
      return (<div style={{ marginLeft: 20 }} />)
    }
    return (
      <button
        className='carousel-button'
        onClick={() => advance(-1)}
      >
        &#8249;
      </button>
    )
  }

  const NextButton = () => {
    if (select === children.length - 1) {
      return (<div style={{ marginRight: 20 }} />)
    }
    return (
      <button
        className='carousel-button'
        onClick={() => advance(1)}
      >
        &#8250;
      </button>
    )
  }

  return (
    <div className={className} style={style}>
      <div className='carousel'>
        <div className='carousel__body'>
          <PrevButton />
          {children.map((child, i) => {
            if (i === select) {
              return (<div key={i} style={{ width: '100%' }}>{child}</div>)
            }
            return (
              <div key={i} style={{ display: 'none' }}>
                {child}
              </div>
            )
          })}
          <NextButton />
        </div>
        <SlideIndices />
      </div>
    </div>
  )
}

export { Carousel, CarouselCard }
