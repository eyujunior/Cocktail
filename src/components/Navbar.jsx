/* eslint-disable jsx-a11y/alt-text */
import { Link } from 'react-router-dom'
import Logo from '../assets/img/logo-cocktail.png'
const Navbar = () => {
  return (
    <div className='flex space-x-16 items-center justify-between bg-transparent absolute t-0 z-[6] text-white w-full px-8 text-xl py-2 mb-8'>
      <Link to='/' className='logo hidden md:block'>
        <img src={Logo} className='w-32 h-32' />
      </Link>
      <nav className=''>
        <ul className='flex items-center space-x-4 md:space-x-16'>
          <li>
            <Link to='/'>Home</Link>
          </li>
          <li>
            <Link to='/favourite'>Favourite</Link>
          </li>
        </ul>
      </nav>
    </div>
  )
}

export default Navbar
