import React from 'react'
import logo from './images/logo.svg'
import { FaBars } from 'react-icons/fa'
import { useGlobalContext } from './context'

const Navbar = () => {
  const {openSidebar, openSubmenu, closeSubmenu} = useGlobalContext();

  const displaySubmenu = (e) => {
    e.preventDefault();

    const page = e.target.textContent;
    const tempBtn = e.target.getBoundingClientRect();
    const center = (tempBtn.left + tempBtn.right)/2;
    const bottom = tempBtn.bottom - 3;

    openSubmenu(page, {center, bottom});
  }
  return(
    <nav className='nav'>
      <div className='nav-center'>
        <div className='nav-header'>
          <img className='nav-logo' src={logo} alt="stripe-logo" />
          <button className='btn toggle-btn' onClick={openSidebar}>
            <FaBars />
          </button>

        </div>
        
        <ul className='nav-links'>
          <li> 
            <button className='link-btn' onMouseOver={displaySubmenu} >products</button>
          </li>
          <li>
            <button className='link-btn' onMouseOver={displaySubmenu} >developers</button>
          </li> 
          <li> 
            <button className='link-btn' onMouseOver={displaySubmenu} >company</button>
          </li>
        </ul>
        <button className='btn signin-btn' onClick={() => {
          window.open('https://www.youtube.com/watch?v=dQw4w9WgXcQ');
        }}>
          Sign In
        </button>
      </div>

    </nav>
  )

}

export default Navbar
