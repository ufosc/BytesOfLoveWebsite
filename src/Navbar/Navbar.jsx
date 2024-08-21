import './Navbar.css'
import Image from '../Image/Image'

const NavbarItem = ({ name, href }) => (
  <div
    className='header-option-container'
    onClick={() => { window.location.replace(href) }}
  >
    <p className='header-option-text'>{name}</p>
  </div>
)

const Navbar = () => (
  <div className='header-container flex flex-row w-full border-b-2 items-center border-custom-purple bg-[#fccbff]'>
    <div className='logo-container flex flex-row items-center' onClick={() => window.location.replace('/')}>
      <Image
        src='https://docs.ufosc.org/img/logo.png'
        className='logo' alt='UF OSC Logo'
        width={60} height={60} lazy
      />
    </div>
    <div class='flex flex-row justify-evenly items-center sm:gap-16 px-10 gap-6 ml-auto'>
      <NavbarItem name='Home' href='/' />
      <NavbarItem name='Download' href='/download' />
      <NavbarItem name='About' href='/about' />
      <NavbarItem name='Open Source Club' href='https://ufosc.org' />
    </div>
  </div>
)

export default Navbar
