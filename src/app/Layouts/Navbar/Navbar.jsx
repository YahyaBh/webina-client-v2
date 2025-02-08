"use client";
import Image from 'next/image';
import React, { useContext, useEffect, useState } from 'react'
import Logo from '/public/assets/Home/Navbar/WEBINA-Logo.png';
import LogoL from '/public/assets/Home/Navbar/WEBINA2.png';

import './Navbar.scss'


import { MdLanguage, MdKeyboardArrowDown } from 'react-icons/md'
import { FaMoon, FaSun } from 'react-icons/fa'
import { FiArrowRight } from 'react-icons/fi'
import { BsListNested } from 'react-icons/bs';



import Morocco from '../../../../public/assets/Home/Navbar/Languages/Flag_of_Morocco.svg.png'
import English from '../../../../public/assets/Home/Navbar/Languages/Flag_of_the_United_Kingdom.svg.png'
import French from '../../../../public/assets/Home/Navbar/Languages/Flag_of_France.svg.png'
import { ThemeContext } from "../../Context/ThemeContext";

const Navbar = ({ isOpen, transparent, target }) => {


    const [scrolled, setScrolled] = useState(false);
    const [asideShow, setAsideShow] = useState(false)
    const [language, setLanguage] = useState(false);
    const [darkMode, setDarkMode] = useState(false);


    const { isDarkMode, toggleTheme } = useContext(ThemeContext);



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


            <nav id='navbar' className={`${transparent ? `transparent` : ''} ${scrolled ? 'scrolled' : ''} ${darkMode ? 'dark-mode' : ''}`}>
                <div className='navbar'>
                    <div className='container'>
                        <a href='/' className='logo'>
                            <Image src={!darkMode ? LogoL : Logo} alt="logo" />
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
                            <li><a href='/custom'>Pricing</a></li>
                            <li><a href='/about'>About Us</a></li>
                            <li><a href='/blogs'>Blogs</a></li>
                            <li><a href='/faqs'>FAQs</a></li>
                            <li><a href='/contact'>Contact Us</a></li>
                            <li><a href='/hireme'>Hire Me</a></li>
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

                                {!darkMode ? <FaMoon onClick={toggleTheme} /> : <FaSun onClick={toggleTheme} />}
                            </div>


                            {target == 'home' ? <div className='sign-buttons'>
                                <button>
                                    <a href='/register'>
                                        <h3>GET STARTED</h3>
                                        <FiArrowRight />
                                    </a>
                                </button>
                            </div> : ''}
                        </div>
                    </div>
                </div>
            </nav>

            <nav id='responsive-navbar-s'>

                <a href='/' className='logo'>
                    <Image src={!darkMode ? LogoL : Logo} alt="logo" />
                </a>

                <div className='mode-res'>
                    <div className="aside-swit">
                        <BsListNested onClick={handleAsideShow} />
                    </div>
                    {!darkMode ? <FaMoon onClick={toggleTheme} /> : <FaSun onClick={toggleTheme} />}

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
                                    <a href='/register'>
                                        <FiArrowRight />
                                        <h3>GET STARTED</h3>
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