import React from 'react'
import Image from '../Image/Image'

const CreditRow = ({ title, children }) => (
  <>
    <div className='credit-row-title'>{title}</div>
    <div className='credit-row'>
      {children}
    </div>
  </>
)

const CreditCell = ({ href, img, name, role }) => {
  return (
    <a
      className='credit-cell' href={href}
      target='_blank' rel='noreferrer'
    >
      <Image src={img} alt='Contributor Profile' width={300} height={300} />
      <div className='credit-name'>{name}</div>
      <div className='credit-title'>{role}</div>
    </a>
  )
}

export { CreditRow, CreditCell }
