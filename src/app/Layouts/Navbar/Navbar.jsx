"use client";
import Image from 'next/image';
import React, { useEffect, useState } from 'react'
import Logo from '/public/WEBINA-OG.png';

import './Navbar.scss'


import { FiArrowRight } from 'react-icons/fi'
import { BsListNested, BsX } from 'react-icons/bs';



const Navbar = ({ transparent}) => {


    const [scrolled, setScrolled] = useState(false);
    const [asideShow, setAsideShow] = useState(false)


    useEffect(() => {
        window.addEventListener('scroll', handleScroll);

        return () => {
            window.removeEventListener('scroll', handleScroll);
        };
    }, [])



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
            window.document.body.style.overflow = 'hidden !important';
        } else {
            setAsideShow(true);
            window.document.body.style.overflow = 'visible !important';
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
                            <Image src={Logo} alt="logo" />
                        </a>

                        <ul>
                            <li><a href='/reserve?scr=pricing'>Pricing</a></li>
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


                            <div className='sign-buttons'>
                                <button>
                                    <a href='/reserve'>
                                        <h3>GET STARTED</h3>
                                        <FiArrowRight />
                                    </a>
                                </button>
                            </div>
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
                        {!asideShow ? <BsListNested onClick={handleAsideShow} /> : <BsX onClick={handleAsideShow} />}
                    </div>

                </div>

                <div className={asideShow ? 'aside-container div-active' : 'aside-container'}>
                    <aside className={asideShow ? 'aside-active' : ''}>

                        <ul className='list'>
                            <li><a href='/reserve?scr=pricing'>Pricing</a></li>
                            <li><a href='/about'>About Us</a></li>
                            <li><a href='/blogs'>Blogs</a></li>
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
                    </aside>
                </div>

            </nav>



        </>
    )
}

export default Navbar