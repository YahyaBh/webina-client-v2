"use client";
import Image from 'next/image';
import React, { useEffect, useState } from 'react'
import Logo from '/public/WEBINA-Logo.webp';

import './Navbar.scss'


import { FiArrowRight } from 'react-icons/fi'
import { BsListNested, BsX } from 'react-icons/bs';
import Link from 'next/link';



const Navbar = ({ transparent }) => {


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
        if (typeof window === 'undefined') return;
        
        if (asideShow) {
            setAsideShow(false);
            document.body.style.overflow = 'hidden';
        } else {
            setAsideShow(true);
            document.body.style.overflow = 'visible';
        }
    };


    const changeLang = (e) => {
        i18next.changeLanguage(e)
        setLanguage('')
    }


    return (
        <>


            <nav id='navbar' className={`${transparent ? `transparent` : ''} ${scrolled ? 'scrolled' : ''} dark-mode`}>
                <div className='navbar'>
                    <div className='container'>
                        <Link href='/' className='logo'>
                            <Image src={Logo} alt="logo" />
                        </Link>

                        <ul>
                            <li><Link href='/reserve?scr=pricing'>Pricing</Link></li>
                            <li><Link href='/about'>About Us</Link></li>
                            <li><Link href='/blogs'>Blogs</Link></li>
                            <li><Link href='/contact'>Contact</Link></li>
                        </ul>

                        <div className='right-container'>
                            {/* <div className='lang-mode'>
                                <div className="dropdown-container">
                                    <MdLanguage className='svg-dropdown' onClick={() => setLanguageMenuOpen(!languageMenuOpen)} />

                                    {language && (
                                        <div className="options">
                                            <div className="option" onClick={() => changeLang('en')}>
                                                <Image src='English' alt="English" />
                                                <h3>English</h3>
                                            </div>
                                            <div className="option" onClick={() => changeLang('fr')}>
                                                <Image src='French' alt="French" />
                                                <h3>Francais</h3>
                                            </div>
                                            <div className="option" onClick={() => changeLang('ar')}>
                                                <Image src='Morocco' alt="Arabic" />
                                                <h3>العربية</h3>
                                            </div>
                                        </div>
                                    )}
                                </div>

                                {!darkMode ? <FaMoon onClick={toggleTheme} /> : <FaSun onClick={toggleTheme} />}
                            </div> */}


                            <div className='sign-buttons'>
                                <Link href='/reserve'>
                                    GET STARTED <FiArrowRight />
                                </Link>
                            </div>
                        </div>
                    </div>
                </div>
            </nav>

            <nav id='responsive-navbar-s'>
                <Link href='/' className='logo'>
                    <Image src={Logo} alt="logo" />
                </Link>

                <div className='mode-res'>
                    <div className="aside-swit">
                        {!asideShow ? <BsListNested onClick={handleAsideShow} /> : <BsX onClick={handleAsideShow} />}
                    </div>

                </div>

                <div className={asideShow ? 'aside-container div-active' : 'aside-container'}>
                    <aside className={asideShow ? 'aside-active' : ''}>

                        <ul className='list'>
                            <li><Link href='/reserve?scr=pricing'>Pricing</Link></li>
                            <li><Link href='/about'>About Us</Link></li>
                            <li><Link href='/blogs'>Blogs</Link></li>
                            <li><Link href='/contact'>Contact</Link></li>

                            <div className='sign-buttons'>
                                <button>
                                    <Link href='/register'>
                                        <FiArrowRight />
                                        <h3>GET STARTED</h3>
                                    </Link>
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