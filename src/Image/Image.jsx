import React from 'react'
import './Image.css'

// Creates a dynamically loaded image.
const Image = ({ src, type, alt, lazy, width, height, className, style }) => {
  const lazyLoading = (lazy === true)
  const imgalt = alt || 'Bytes of Love image'
  return (
    <div className={className} style={style}>
      <div style={{ width, height }}>
        <picture className='dynamic-image'>
          <source
            loading={(lazyLoading) ? 'lazy' : ''}
            alt={imgalt} type={type} src={src} width={width}
            height={height}
          />
          <img
            loading={(lazyLoading) ? 'lazy' : ''}
            alt={imgalt} type={type} src={src} width={width}
            height={height}
          />
        </picture>
      </div>
    </div>
  )
}

export default Image
