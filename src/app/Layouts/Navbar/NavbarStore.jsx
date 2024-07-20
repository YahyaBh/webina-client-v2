import React, { useContext, useEffect, useState } from 'react'
import Logo from '../../../Assets/Home/Navbar/WEBINA2.png';
import LogoLight from '../../../Assets/Home/Navbar/WEBINA-Logo.png';
import './NavbarStore.scss'
import { FaMoon, FaSun } from 'react-icons/fa'
import { BiUser } from 'react-icons/bi'
import { FiUserPlus } from 'react-icons/fi'
import { BsList } from 'react-icons/bs';
import { AiOutlineClose, AiOutlineSearch, AiOutlineShoppingCart } from 'react-icons/ai'
import { ThemeContext } from "../../../Context/ThemeContext";
import AuthContext from '../../../Context/AuthContext';
import { MdKeyboardArrowDown, MdLanguage } from 'react-icons/md';
import { useStoreContext } from '../../../Context/StoreConetxt';
import i18next from 'i18next';
import Morocco from '../../../Assets/Home/Navbar/Languages/Flag_of_Morocco.svg.png'
import English from '../../../Assets/Home/Navbar/Languages/Flag_of_the_United_Kingdom.svg.png'
import French from '../../../Assets/Home/Navbar/Languages/Flag_of_France.svg.png'


const NavbarStore = ({ isOpen, transparent, isNotAside }) => {


    const [scrolled, setScrolled] = useState(false);
    const [language, setLanguage] = useState(false);
    const [search, setSearch] = useState(false);
    const [searchInput, setSearchInput] = useState('');

    const { isDarkMode, toggleTheme } = useContext(ThemeContext);
    const { toggleAside, isAsideOpen, toggleAsideRes, isAsideResOpen } = useStoreContext();

    const { isAuthenticated, user, logout, cartCounter } = AuthContext();

    useEffect(() => {
        // Add event listener when the component mounts
        window.addEventListener('scroll', handleScroll);

        // Cleanup the event listener when the component unmounts
        return () => {
            window.removeEventListener('scroll', handleScroll);
        };
    }, [])



    const handleScroll = () => {
        // Update the state based on scroll position
        if (window.scrollY > 0) {
            setScrolled(true);
        } else {
            setScrolled(false);
        }
    };

    const changeLang = (e) => {
        i18next.changeLanguage(e)
        setLanguage('')
    }


    return (
        <>
            <nav id='store-navbar' className={scrolled ? 'scrolled-store' : '' || transparent ? 'transparent-store' : ''}>


                <div className='navbar'>
                    <div className='container'>

                        <div className='left-container'>
                            {!isNotAside ? isAsideOpen ? <AiOutlineClose className='openAside' onClick={toggleAside} /> : <BsList className='openAside' onClick={toggleAside} /> : ''}
                            <a href='/store/home' className='logo'>
                                <img src={isDarkMode ? LogoLight : Logo} alt="logo" />
                            </a>

                        </div>



                        <div className='right-container'>


                            <div className='lang-mode'>
                                <div className={`search-section ${search ? 'active-search' : ''}`}>
                                    <input type="text" name='search' id='search' value={searchInput} onChange={(e) => setSearchInput(e.target.value)} placeholder={i18next.t("SEARCH")} />
                                    <AiOutlineSearch onClick={() => setSearch(!search)} />
                                </div>
                                {isDarkMode ? <FaSun onClick={toggleTheme} /> : <FaMoon onClick={toggleTheme} />}
                                <a href="/cart"><AiOutlineShoppingCart />{cartCounter > 0 ? <span>{cartCounter}</span> : null}</a>
                            </div>

                            {isAuthenticated ?
                                <li className='drop-down-user' >
                                    <img src={user.avatar} alt={user.name + 'profile'} />{user.name} <MdKeyboardArrowDown />
                                    <ul className="dropdown-menu">
                                        <li ><a href="/profile">{i18next.t("PROFILE")}</a></li>
                                        <li><a href="/recent">{i18next.t("MY_RECENT")}</a></li>
                                        <li><a href="/favourite">{i18next.t("MY_FAVORITE")}</a></li>
                                        <li><a href="/purchases">{i18next.t("MY_ORDERS")}</a></li>
                                        <hr />
                                        <li onClick={e => logout()}>{i18next.t("LOGOUT")}</li>
                                    </ul>
                                </li>
                                :
                                <div className='sign-buttons'>
                                    <button>
                                        <a href='/login'>
                                            <BiUser />
                                            <h3>Sign In</h3>
                                        </a>
                                    </button>

                                    <button>
                                        <a href='/register'>
                                            <FiUserPlus />
                                            <h3>Sign Up</h3>
                                        </a>
                                    </button>
                                </div>
                            }
                        </div>
                    </div>
                </div>

            </nav>

            <nav id='responsive-navbar-store'>

                <div className='main-show'>
                {!isNotAside ? isAsideResOpen ? <AiOutlineClose className='openAside' onClick={toggleAsideRes} /> : <BsList className='openAside' onClick={toggleAsideRes} /> : ''}

                    <a href='/' className='logo'>
                        <img src={isDarkMode ? LogoLight : Logo} alt="logo" />
                    </a>

                    <div className='mode-res'>
                        <div className="aside-swit">
                        </div>
                        {isAuthenticated ? <a href="/cart"><AiOutlineShoppingCart />{cartCounter > 0 ? <span>{cartCounter}</span> : null}</a> : ''}
                        {isDarkMode ? <FaSun onClick={toggleTheme} /> : <FaMoon onClick={toggleTheme} />}
                        {isAuthenticated ?
                            <li className='drop-down-user' >
                                <img src={user.avatar} alt={user.name + ' profile'} />
                                <ul className="dropdown-menu">
                                    <li ><a href="/profile">{i18next.t("PROFILE")}</a></li>
                                    <li><a href="/recent">{i18next.t("MY_RECENT")}</a></li>
                                    <li><a href="/favourite">{i18next.t("MY_FAVORITE")}</a></li>
                                    <li><a href="/purchases">{i18next.t("MY_ORDERS")}</a></li>
                                    <hr />
                                    <li onClick={e => logout()}>{i18next.t("LOGOUT")}</li>
                                </ul>
                            </li>
                            :
                            ''}
                    </div>
                </div>

            </nav>

        </>
    )
}

export default NavbarStore