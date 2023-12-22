import React from 'react'
import Link from 'next/link'
import './Navbar.css';
import Logo from '../../../public/images/logo1.png'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {faCartShopping, faUser, faMagnifyingGlass} from '@fortawesome/free-solid-svg-icons'
import {faHeart} from '@fortawesome/free-regular-svg-icons'
const Navbar = () => {
  return (
    <header className='header'>
      <div className='header-top'>
        <div className='header-top-content'>
          <p>Free Shipping after <span>300ASR</span></p>
        </div>
        <div className='lang'><span>En</span>|<span>Ar</span></div>
      </div>
      <div className='header-med'>
      <p className='logo'>Maro Cares</p>
      <from>
      <FontAwesomeIcon icon={faMagnifyingGlass}  className='search-icon'/>
        <input type='text' name='search' placeholder='Search'/>
      </from>
      <div className='login-div'>
          <button>Sign in</button>
          <span>|</span>
          <button>Create account</button>
        </div>
        <div className='nav-icons'>
        <FontAwesomeIcon icon={faHeart} className='nav-icon' />
        <FontAwesomeIcon icon={faCartShopping} className='nav-icon'/>
        <FontAwesomeIcon icon={faUser} className='nav-icon'/>
        </div>
      </div>
      <nav className='navbar'>

        <ul className='menu-list'>

            <li>Gift Guide</li>
            <li>Brands</li>
            <li>
            <a href='#'>Skin Care</a>
            {/* <div class="mega-menu">
                    <ul class="links">
                        <li>
                            <a href="#"><i class="far fa-comments fa-fw"></i>Testimonials</a>
                        </li>
                        <li>
                            <a href="#"><i class="far fa-user fa-fw"></i>Team Members</a>
                        </li>
                        <li>
                            <a href="#"><i class="far fa-building fa-fw"></i>Services</a>
                        </li>
                        <li>
                            <a href="#"><i class="far fa-check-circle fa-fw"></i>Our Skills</a>
                        </li>
                        <li>
                            <a href="#"><i class="far fa-clipboard fa-fw"></i>How It Work</a>
                        </li>
                    </ul>
                    <ul class="links">
                        <li>
                            <a href="#"><i class="far fa-calendar fa-fw"></i>Events</a>
                        </li>
                        <li>
                            <a href="#"><i class="far fa-server fa-fw"></i>Pricing Plans</a>
                        </li>
                        <li>
                            <a href="#"><i class="far fa-play-circle fa-fw"></i>Top Videos</a>
                        </li>
                        <li>
                            <a href="#"><i class="far fa-chart-bar fa-fw"></i>Stats</a>
                        </li>
                        <li>
                            <a href="#"><i class="far fa-percent fa-fw"></i>Request A Discount</a>
                        </li>
                    </ul>
                </div> */}
                </li>
            <li>Shop</li>
            <li>Blog</li>
            <li>About</li>
            <li>Contact</li>
        </ul>
    </nav>
    </header>
  )
}

export default Navbar
