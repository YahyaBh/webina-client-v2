"use client";
import Image from 'next/image';
import React, {  useEffect, useState } from 'react'
import Logo from '/public/WEBINA-OG.png';

import './Navbar.scss'


import { FiArrowRight } from 'react-icons/fi'
import { BsListNested } from 'react-icons/bs';



// import { ThemeContext } from "../../Context/ThemeContext";

const Navbar = ({ transparent, target }) => {


    const [scrolled, setScrolled] = useState(false);
    const [asideShow, setAsideShow] = useState(false)
    const [language, setLanguage] = useState(false);
    const [darkMode, setDarkMode] = useState(false);


    // const { isDarkMode, toggleTheme } = useContext(ThemeContext);



    useEffect(() => {
        window.addEventListener('scroll', handleScroll);

        return () => {
            window.removeEventListener('scroll', handleScroll);
        };
    }, [])


    // useEffect(() => {
    //     isDarkMode ? setDarkMode(true) : setDarkMode(false)
    // }, [isDarkMode])




    const handleScroll = () => {
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


            <nav id='navbar' className={`${transparent ? `transparent` : ''} ${scrolled ? 'scrolled' : ''} dark-mode`}>
                <div className='navbar'>
                    <div className='container'>
                        <a href='/' className='logo'>
                            <Image src={Logo}  alt="logo" />
                        </a>

                        <ul>
                            <li><a href='/custom'>Pricing</a></li>
                            <li><a href='/about'>About Us</a></li>
                            <li><a href='/blogs'>Blogs</a></li>
                            <li><a href='/contact'>Contact</a></li>
                        </ul>

                        <div className='right-container'>
                            {/* <div className='lang-mode'>
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
                            </div> */}


                            {target == 'home' ? <div className='sign-buttons'>
                                <button>
                                    <a href='/reserve'>
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
                    <Image src={Logo} alt="logo" />
                </a>

                <div className='mode-res'>
                    <div className="aside-swit">
                        <BsListNested onClick={handleAsideShow} />
                    </div>

                </div>

                <div className={asideShow ? 'aside-container div-active' : 'aside-container'}>
                    <aside className={asideShow ? 'aside-active' : ''}>

                        <ul className='list'>
                            <li><a href='/custom'>Custom</a></li>
                            <li><a href='/about'>About</a></li>

                            <div className='sign-buttons'>
                                <button>
                                    <a href='/register'>
                                        <FiArrowRight />
                                        <h3>GET STARTED</h3>
                                    </a>
                                </button>
                            </div>

                        </ul>
                    </aside>
                </div>

            </nav>



        </>
    )
}

export default Navbar