import React from 'react'
import './Header.css'

import iconUser from './icons/user.png'
import iconHeart from './icons/heart.png'
import iconCart from './icons/cart.png'
import { Link } from 'react-router-dom'

let Header = () => {
    return (
        <header className="header">
            <a href='https://www.instagram.com/meirzhhan' className='left-wrapper'>eShop by meirzhhan</a>

            <nav className='navigation'>
                <ul className='nav-list'>
                    <li className='nav-link-wrapper'>
                        <Link to="/" className='nav-link links'>Home</Link>
                    </li>
                    <li className='nav-link-wrapper'>
                        <Link to="/men" className='nav-link links'>Men</Link>
                    </li>
                    <li className='nav-link-wrapper'>
                        <Link to="/women" className='nav-link links'>Women</Link>
                    </li>

                    <li className='nav-link-wrapper'>
                        <Link to="/contact" className='nav-link links'>Contacts</Link>
                    </li>
                </ul>
            </nav>

            <nav className='navigation-icons'>
                <div className='navigation-icons-list'>
                    <li className='nav-link-wrapper'>
                        <Link to = "/profile/auth" className='nav-link'>
                            <img className='header-icon icons' src={iconUser} />
                        </Link>
                    </li>

                    <li className='nav-link-wrapper'>
                        <Link to="/contact" className='nav-link icons'>
                            <img className='header-icon' src={iconHeart} />
                        </Link>
                    </li>

                    <li className='nav-link-wrapper'>
                        <a href='#' className='nav-link icons'>
                            <img className='header-icon' src={iconCart} />
                        </a>
                    </li>
                </div>
            </nav>

        </header>
    );
}

export default Header;