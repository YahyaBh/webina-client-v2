"use client";
import Image from 'next/image';
import React, { useContext, useEffect, useState } from 'react'
import Logo from '/public/assets/Home/Navbar/WEBINA-Logo.png';
import LogoL from '/public/assets/Home/Navbar/WEBINA2.png';

import './Navbar.scss'


import { MdLanguage, MdKeyboardArrowDown } from 'react-icons/md'
import { FaMoon, FaSun } from 'react-icons/fa'
import { BiLogOut, BiUser } from 'react-icons/bi'
import { FiUserPlus } from 'react-icons/fi'
import { BsListNested } from 'react-icons/bs';
import { CiUser, CiHeart, CiShoppingCart } from "react-icons/ci";
import { MdHistory } from 'react-icons/md';
import { AiOutlineShoppingCart } from 'react-icons/ai';



import Morocco from '../../../../public/assets/Home/Navbar/Languages/Flag_of_Morocco.svg.png'
import English from '../../../../public/assets/Home/Navbar/Languages/Flag_of_the_United_Kingdom.svg.png'
import French from '../../../../public/assets/Home/Navbar/Languages/Flag_of_France.svg.png'
import { ThemeContext } from "../../Context/ThemeContext";
import AuthContext from '../../Context/AuthContext';
import i18next from 'i18next';

const Navbar = ({ isOpen, transparent }) => {


    const [scrolled, setScrolled] = useState(false);
    const [asideShow, setAsideShow] = useState(false)
    const [language, setLanguage] = useState(false);
    const [darkMode, setDarkMode] = useState(false);


    const { isDarkMode, toggleTheme } = useContext(ThemeContext);

    const { isAuthenticated, user, logout, cartCounter } = AuthContext();


    useEffect(() => {
        // Add event listener when the component mounts
        window.addEventListener('scroll', handleScroll);

        // Cleanup the event listener when the component unmounts
        return () => {
            window.removeEventListener('scroll', handleScroll);
        };
    }, [])


    useEffect(() => {
        isDarkMode ? setDarkMode(true) : setDarkMode(false)
    }, [isDarkMode])
    



    const handleScroll = () => {
        // Update the state based on scroll position
        if (window.scrollY > 0) {
            setScrolled(true);
        } else {
            setScrolled(false);
        }
    };


    const handleAsideShow = () => {
        if (asideShow) {
            setAsideShow(false)
        } else {
            setAsideShow(true)
        }
    }


    const changeLang = (e) => {
        i18next.changeLanguage(e)
        setLanguage('')
    }


    return (
        <>


            <nav id='navbar' className={`${scrolled ? 'scrolled' : ''} ${darkMode ? 'dark-mode' : ''}`}>
                <div className='navbar'>
                    <div className='container'>
                        <a href='/' className='logo'>
                            <Image src={!darkMode ? LogoL : Logo } alt="logo" />
                        </a>

                        <ul>
                            <li>
                                <div className='dropdown'>
                                    <label htmlFor="touch"><span>Services <MdKeyboardArrowDown /></span></label>
                                    <input type="checkbox" id="touch" />

                                    <ul className="slide">
                                        <li><a href="#">Lorem Ipsum</a></li>
                                        <li><a href="#">Lorem Ipsum</a></li>
                                        <li><a href="#">Lorem Ipsum</a></li>
                                        <li><a href="#">Lorem Ipsum</a></li>
                                    </ul>
                                </div>
                            </li>
                            <li><a href='/custom'>Custom</a></li>
                            <li><a href='/about'>About</a></li>
                            <li><a href='/faqs'>FAQs</a></li>
                            <li><a href='/contact'>Contact</a></li>
                        </ul>

                        <div className='right-container'>
                            <div className='lang-mode'>
                                <div className="dropdown-container">
                                    <MdLanguage className='svg-dropdown' onClick={() => setLanguageMenuOpen(!languageMenuOpen)} />

                                    {language && (
                                        <div className="options">
                                            <div className="option" onClick={() => changeLang('en')}>
                                                <img src='English' alt="English" />
                                                <h3>English</h3>
                                            </div>
                                            <div className="option" onClick={() => changeLang('fr')}>
                                                <img src='French' alt="French" />
                                                <h3>Francais</h3>
                                            </div>
                                            <div className="option" onClick={() => changeLang('ar')}>
                                                <img src='Morocco' alt="Arabic" />
                                                <h3>العربية</h3>
                                            </div>
                                        </div>
                                    )}
                                </div>

                                {!darkMode ?  <FaMoon onClick={toggleTheme} /> : <FaSun onClick={toggleTheme} /> }

                                {isAuthenticated && (
                                    <a href="/cart">
                                        <AiOutlineShoppingCart />
                                        {cartCounter > 0 ? <span>{cartCounter}</span> : null}
                                    </a>
                                )}
                            </div>

                            {isAuthenticated ? (
                                <li className='drop-down-user'>
                                    <img src={user?.avatar} alt={`${user?.name} profile`} />
                                    {user?.name} <MdKeyboardArrowDown />
                                    <ul className="dropdown-menu">
                                        <li><a href="/profile"><CiUser /> Profile</a></li>
                                        <li><a href="/recent"><MdHistory /> My Recent</a></li>
                                        <li><a href="/favourite"><CiHeart /> My Favorite</a></li>
                                        <li><a href="/purchases"><CiShoppingCart /> My Orders</a></li>
                                        <hr />
                                        <li onClick={() => logout()}><BiLogOut /> Logout</li>
                                    </ul>
                                </li>
                            ) : (
                                <div className='sign-buttons'>
                                    <button>
                                        <a href='/login'>
                                            <BiUser />
                                            <h3>SIGNIN</h3>
                                        </a>
                                    </button>
                                    <button>
                                        <a href='/register'>
                                            <FiUserPlus />
                                            <h3>SIGNUP</h3>
                                        </a>
                                    </button>
                                </div>
                            )}
                        </div>
                    </div>
                </div>
            </nav>

            <nav id='responsive-navbar-s'>

                <a href='/' className='logo'>
                    <Image src={!darkMode ?  LogoL : Logo} alt="logo" />
                </a>

                <div className='mode-res'>
                    <div className="aside-swit">
                        <BsListNested onClick={handleAsideShow} />
                    </div>
                    {isAuthenticated ? <a href="/cart"><AiOutlineShoppingCart />{cartCounter > 0 ? <span>{cartCounter}</span> : null}</a> : ''}
                    {!darkMode ?   <FaMoon onClick={toggleTheme} /> : <FaSun onClick={toggleTheme} />}
                    {isAuthenticated ?
                        <li className='drop-down-user' >
                            <Image src={user.avatar} alt={user.name + ' profile'} />
                            <ul className="dropdown-menu">
                                <li ><a href="/profile">Profile</a></li>
                                <li><a href="/recent">My Recent</a></li>
                                <li><a href="/favourite">My Favorite</a></li>
                                <li><a href="/purchases">My Orders</a></li>
                                <hr />
                                <li onClick={e => logout()}>LOGOUT</li>
                            </ul>
                        </li>
                        :
                        ''}
                </div>

                <div className={asideShow ? 'aside-container div-active' : 'aside-container'}>
                    <aside className={asideShow ? 'aside-active' : ''}>

                        <ul className='list'>
                            <li className='dropdown-trigger'>
                                Services <MdKeyboardArrowDown />
                                <ul className="dropdown-menu">
                                    <li >Website</li>
                                    <li >UI/UX Design</li>
                                    <li >Mobile Application</li>
                                    <li  >Desktop Application</li>
                                    <li >Games</li>
                                    <li >Social Media Designing</li>
                                    <li >NFTs Designing</li>
                                </ul>
                            </li>
                            <li><a href='/custom'>Custom</a></li>
                            <li><a href='/about'>About</a></li>
                            <li><a href='/faqs'>FAQs</a></li>
                            <li><a href='/contact'>Contact</a></li>

                            <div className='sign-buttons'>
                                <button>
                                    <a href='/login'>
                                        <BiUser />
                                        <h3>SIGNIN</h3>
                                    </a>
                                </button>

                                <button>
                                    <a href='/register'>
                                        <FiUserPlus />
                                        <h3>SIGNUP</h3>
                                    </a>
                                </button>
                            </div>

                        </ul>



                        <div className="dropdown-container">
                            <MdLanguage className='svg-dropdown' onClick={e => setLanguage(true)} />

                            <div className="options">
                                <div className="option" onClick={e => changeLang('en')}>
                                    <Image src={English} alt="English" />
                                    <h3>English</h3>
                                </div>
                                <div className="option" onClick={e => changeLang('fr')}>
                                    <Image src={French} alt="French" />
                                    <h3>Francais</h3>
                                </div>
                                <div className="option" onClick={e => changeLang('ar')}>
                                    <Image src={Morocco} alt="Arabic" />
                                    <h3>العربية</h3>
                                </div>
                            </div>
                        </div>
                    </aside>
                </div>

            </nav>

        </>
    )
}

export default Navbar