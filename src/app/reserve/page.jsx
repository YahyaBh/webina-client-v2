"use client"
import './page.scss'
import Navbar from '../Layouts/Navbar/Navbar'
import { MdArrowDownward, MdDone } from 'react-icons/md'
import BlurText from '../lib/BlurText'
import { AnimatePresence, motion } from 'framer-motion'
import { Link, Element } from 'react-scroll';
import Footer from '../Layouts/Footer/Footer'
import StarLeft from '../../../public/assets/Home/Contact Section/star-l.svg';
import StarRight from '../../../public/assets/Home/Contact Section/star-r.svg';
import Image from 'next/image'

import PhoneInput from 'react-phone-input-2'
import 'react-phone-input-2/lib/style.css'

import Calendar from 'react-calendar';
import 'react-calendar/dist/Calendar.css';


import { useEffect, useState } from 'react'
import { BiCopy, BiCopyAlt, BiPhone } from 'react-icons/bi'
import { FiSun, FiSunrise, FiSunset } from 'react-icons/fi'
import { BsCalendar2Date, BsCameraVideo, BsClock } from 'react-icons/bs'
import { toast } from 'react-hot-toast';





const Reserve = () => {

    const [phoneNumber, setPhoneNumber] = useState();


    const [user, setUser] = useState({
        first_name: "",
        last_name: "",
        service: "",
        email: "",
        phone: "",
        date: "",
        time: "",
        meeting: ""
    })

    useEffect(() => {
        console.log(user);

    }, [user])

    return (
        <>
            <div class="glowing-circles"></div>

            <header>
                <Navbar target={"reserve"} />

                <div className='container'>

                    {/* <div className='glow-box'></div> */}
                    <h2>
                        <BlurText
                            text="Request everything you want to create and leave webina digital it on the application"
                            delay={50}
                            animateBy="words"
                            direction="top"
                        />
                    </h2>

                    <div className='bottom'>
                        <img className='left-img' src='/Images/Reserve/HeaderHand.svg' />


                        <Link to="reserve" smooth={true} duration={200}>
                            <motion.button
                                initial={{ opacity: 0, y: -20 }}
                                animate={{ opacity: 1, y: 0 }}
                                exit={{ opacity: 0, y: 20 }}
                                transition={{ duration: 0.3 }} className='btn-cons'>
                                CONSULTE FOR FREE! <MdArrowDownward />
                            </motion.button>
                        </Link>
                        <img className='right-img' src='/Images/Reserve/HeaderHand.svg' />
                    </div>

                </div>

            </header >

            <div className='res-cont'>
                <section className='whoare'>
                    <div className='container'>
                        <div className='left'>
                            {/* <div className='glow-box'></div> */}
                            <img src='/Images/Reserve/LogoContainer.svg' />

                            <div className='card'>
                                <span>1</span>
                                <p>Search Engine Optimization (SEO), experts optimize  and improve its visibility in search engine results</p>
                            </div>

                            <div className='bottom'>
                                <h3><span>WEBSITE</span> UI / UX </h3>
                                <img src='/Images/Reserve/ArrowCont.svg' />
                            </div>
                        </div>
                        <div className='right'>
                            <img src='/Images/Reserve/PhoneCont.svg' />

                            <div className='card'>
                                <span>2</span>
                                <p>Targeted Advertising,  data-driven insights and advanced targeting techniques to reach your ideal audience.</p>
                            </div>


                            <div className='bottom'>
                                <h3> <span>APPS</span> UI / UX </h3>

                                <img src='/Images/About/ArrowAb.svg' />
                            </div>
                        </div>
                    </div>
                    <img src='/Images/Reserve/LineWave.svg' alt='line-wave' />
                </section>
                <section className='packs'>

                    <h2>Our Offers <span>Web</span> / <span>Mobile</span> Apps</h2>

                    <section className='container'>
                        <div className="pack">
                            <div className="top">
                                <h5>Minimeme Prices</h5>
                                <h3>3000 DH</h3>
                                <h4>Our Small Company Plan offers everything you need to take your business online and start connecting with your customers.</h4>
                            </div>

                            <div className="bottom">
                                <ul>
                                    <li><span><MdDone /></span> <h3>No Discount</h3></li>
                                    <li><span><MdDone /></span> <h3>Assist with the optimzation of the website</h3></li>
                                    <li><span><MdDone /></span> <h3>No Discount</h3></li>
                                    <li><span><MdDone /></span> <h3>No Discount</h3></li>
                                    <li><span><MdDone /></span> <h3>No Discount</h3></li>
                                </ul>

                                <Link href='/reserve'>GET STARTED</Link>
                            </div>
                        </div>
                        {/* <div className='glow-box'></div> */}

                        <div className="pack">
                            <div className="top">
                                <h5>Minimeme Prices</h5>
                                <h3>3000 DH</h3>
                                <h4>Our Small Company Plan offers everything you need to take your business online and start connecting with your customers.</h4>
                            </div>

                            <div className="bottom">
                                <ul>
                                    <li><span><MdDone /></span> <h3>No Discount</h3></li>
                                    <li><span><MdDone /></span> <h3>No Discount</h3></li>
                                    <li><span><MdDone /></span> <h3>No Discount</h3></li>
                                    <li><span><MdDone /></span> <h3>No Discount</h3></li>
                                    <li><span><MdDone /></span> <h3>No Discount</h3></li>
                                </ul>

                                <Link href='/reserve'>GET STARTED</Link>
                            </div>
                        </div>
                        <div className="pack">
                            <div className="top">
                                <h5>Minimeme Prices</h5>
                                <h3>3000 DH</h3>
                                <h4>Our Small Company Plan offers everything you need to take your business online and start connecting with your customers.</h4>
                            </div>

                            <div className="bottom">
                                <ul>
                                    <li><span><MdDone /></span> <h3>No Discount</h3></li>
                                    <li><span><MdDone /></span> <h3>No Discount</h3></li>
                                    <li><span><MdDone /></span> <h3>No Discount</h3></li>
                                    <li><span><MdDone /></span> <h3>No Discount</h3></li>
                                    <li><span><MdDone /></span> <h3>No Discount</h3></li>
                                </ul>

                                <Link href='/reserve'>GET STARTED</Link>
                            </div>
                        </div>
                    </section>
                </section>


                <div className='taper_line'>
                    <h3>WEBINA DIGITAL</h3>
                    <h3>WEBINA DIGITAL</h3>
                    <h3>WEBINA DIGITAL</h3>
                    <h3>WEBINA DIGITAL</h3>
                    <h3>WEBINA DIGITAL</h3>
                    <h3>WEBINA DIGITAL</h3>
                    <h3>WEBINA DIGITAL</h3>
                </div>



                <Element name='reserve' className='reserve'>

                    <Image className='star_left' src={StarLeft} alt='star left' />
                    <Image className='star_right' src={StarRight} alt='star right' />

                    <h2><span>CONTACT</span> US</h2>


                    <div className="form_container">
                        <div className="top">
                            <div className="input_cont">
                                <label htmlFor="first_name" >First Name</label>
                                <input type="text" maxLength={30} name='first_name' onChange={(e) => setUser({ ...user, first_name: e.target.value })} required placeholder='First Name' />
                            </div>

                            <div className="input_cont">
                                <label htmlFor="last_name">Last Name</label>
                                <input type="text" maxLength={30} name='last_name' onChange={(e) => setUser({ ...user, last_name: e.target.value })} required placeholder='Last Name' />
                            </div>

                            <div className="input_cont">
                                <label htmlFor="service" >Service Category</label>

                                <select name="service" id="service" onChange={(e) => setUser({ ...user, service: e.target.value })}>
                                    <option value="service">Service</option>
                                    <option value="service">Service</option>
                                    <option value="service">Service</option>
                                </select>
                            </div>


                            <div className='input_cont'>
                                <label htmlFor="phone_number">Phone Number</label>
                                <PhoneInput
                                    country={'ma'}
                                    value={user.phone}
                                    onChange={(e) => setUser({ ...user, phone: e })}
                                />
                            </div>


                            <div className="input_cont db">
                                <label htmlFor="email">Email Address</label>
                                <input type="email" maxLength={40} name='email' onChange={(e) => setUser({ ...user, email: e.target.value })} required placeholder='Email Address' />
                            </div>
                        </div>

                        <div className="bottom">

                            <Image className='star_left' src={StarLeft} alt='star left' />
                            <Image className='star_right' src={StarRight} alt='star right' />

                            <DatePage user={user} setUser={setUser} />

                            <AnimatePresence>
                                {user.name !== '' && user.email !== '' && user.phone !== '' && user.date !== '' && user.time !== '' && user.meeting && user.service !== '' ?
                                    <motion.button
                                        initial={{ opacity: 0, y: 20 }}
                                        animate={{ opacity: 1, y: 0 }}
                                        exit={{ opacity: 0, y: -20 }}
                                        whileHover={{ scale: 1.1 }}
                                        whileTap={{ scale: 0.9 }}
                                        className='btn'

                                    >
                                        RESERVE NOW
                                    </motion.button>
                                    : ''}
                            </AnimatePresence>

                        </div>

                    </div>

                </Element>




            </div >

            {/* <div className='glow-box'></div> */}

            <div className='contact_info'>


                <h2>YOU NEED A CUSTOM SOFTWARE FOR <span>YOUR ENTERPRISE ?</span></h2>

                <div className='back_info_bg'></div>
                <div className='back_info_bg'></div>

                <div className='contact_info_cards'>
                    <div className='card'>
                        <img src={'/Images/Reserve/email.png'} alt='email' />
                        <div className='body'>
                            <h3>contact@webinadigital.com</h3>
                            <BiCopy onClick={() => { navigator.clipboard.writeText('contact@webinadigital.com'); toast.success('Email copied to clipboard') }} />
                        </div>
                    </div>

                    <div className='card'>
                        <img src={'/Images/Reserve/what.png'} alt='whatsapp' />
                        <div className='body'>
                            <h3>+212 620792331</h3>
                            <BiCopy onClick={() => { navigator.clipboard.writeText('+212 620792331'); toast.success('Whatsapp number copied to clipboard') }} />
                        </div>
                    </div>

                    <div className='card'>
                        <img src={'/Images/Reserve/phone.png'} alt='phone' />
                        <div className='body'>
                            <h3>+212 620792331</h3>
                            <BiCopy onClick={() => { navigator.clipboard.writeText('+212 620792331'); toast.success('Phone number copied to clipboard') }} />
                        </div>
                    </div>
                </div>

            </div>

            <Footer />
        </>
    )
}

export default Reserve



const DatePage = ({ user, setUser }) => {

    const today = new Date()
    const tomorrow = new Date(today)
    tomorrow.setDate(tomorrow.getDate() + 1)

    const maxDate = new Date(today.getFullYear(), today.getMonth() + 1, today.getDate());


    const disableWeekends = ({ date }) => {
        const day = date.getDay();
        return day === 0 || day === 6;
    };


    const [isOpenDrop, setIsOpenDrop] = useState(false);
    const [isOpenDrop2, setIsOpenDrop2] = useState(false);


    useEffect(() => {
        setIsOpenDrop(false);
        setIsOpenDrop2(false);

        console.log(user);

    }, [user])

    return (
        <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.3 }}
        >
            <h2>Choose the most suitable date for you so we get in touch</h2>

            <div className="calendar-container">

                <div className="calendar">
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        exit={{ opacity: 0, y: -20 }}
                        transition={{ duration: 0.3 }}>
                        <Calendar
                            onChange={(date) => setUser({ ...user, date: date })}
                            value={user.date}
                            prevLabel={'<'}
                            nextLabel={'>'}
                            minDate={tomorrow}
                            maxDate={maxDate}
                            tileDisabled={disableWeekends}
                            className="minimal-calendar"
                        />
                    </motion.div>
                </div>

                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: -20 }}
                    transition={{ duration: 0.1 }}
                    className="info-container">


                    <div className='info-slot'>
                        <label htmlFor="meeting_type">Meeting :</label>
                        <div className="select">
                            <button
                                id="dropdown-button"
                                className="select-button"
                                role="combobox"
                                aria-label="select button"
                                aria-haspopup="listbox"
                                aria-expanded="false"
                                aria-controls="select-dropdown"
                                onClick={() => setIsOpenDrop(!isOpenDrop)}
                            >
                                <span className="selected-value">{user.meeting === 'call' ? 'Call' : user.meeting === 'offline' ? 'In Person' : user.meeting === 'online' ? 'Online Meeting' : 'Choose a meeting type'}</span>
                                <span className="arrow"></span>
                            </button>
                            {isOpenDrop &&
                                <motion.div
                                    initial={{ opacity: 0, y: 20 }}
                                    animate={{ opacity: 1, y: 0 }}
                                    exit={{ opacity: 0, y: -20 }}
                                    transition={{ duration: 0.1 }}
                                >
                                    <ul
                                        className="select-dropdown  "
                                        role="listbox"
                                        id="select-dropdown"
                                        aria-labelledby="dropdown-button"
                                    >
                                        <li role="option" onClick={() => setUser({ ...user, meeting: 'call' })}><BiPhone /> Call</li>
                                        <li role="option" onClick={() => setUser({ ...user, meeting: 'offline' })}><BsCalendar2Date /> In Person</li>
                                        <li role="option" onClick={() => setUser({ ...user, meeting: 'online' })}><BsCameraVideo /> Online Meeting</li>

                                    </ul>
                                </motion.div>
                            }
                        </div>
                    </div>
                    <div className='info-slot'>

                        <label htmlFor="time">Time :</label>
                        <div className="select">
                            <button
                                id="dropdown-button"
                                className="select-button"
                                role="combobox"
                                aria-label="select button"
                                aria-haspopup="listbox"
                                aria-expanded="false"
                                aria-controls="select-dropdown"
                                onClick={() => setIsOpenDrop2(!isOpenDrop2)}
                            >
                                <span className="selected-value">{user.time !== '' ? user.time : 'Choose a time'}</span>
                                <span className="arrow"></span>
                            </button>
                            {isOpenDrop2 &&
                                <motion.div
                                    initial={{ opacity: 0, y: 20 }}
                                    animate={{ opacity: 1, y: 0 }}
                                    exit={{ opacity: 0, y: -20 }}
                                    transition={{ duration: 0.1 }}
                                >
                                    <ul
                                        className="select-dropdown"
                                        role="listbox"
                                        id="select-dropdown"
                                        aria-labelledby="dropdown-button"
                                    >
                                        <li role="option" onClick={() => setUser({ ...user, time: 'morning' })}><FiSunrise /> Morning</li>
                                        <li role="option" onClick={() => setUser({ ...user, time: 'afternoon' })}><FiSun /> Afternoon</li>
                                        <li role="option" onClick={() => setUser({ ...user, time: 'evening' })}><FiSunset /> Evening</li>
                                    </ul>
                                </motion.div>
                            }
                        </div>
                    </div>



                    <div className='info-slot'>
                        <motion.div
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            exit={{ opacity: 0, y: -20 }}
                            transition={{ duration: 0.3 }} className='cont-info'><BsClock /> 30 minutes</motion.div>
                        {user.meeting === 'call' ?
                            <motion.div
                                initial={{ opacity: 0, y: 20 }}
                                animate={{ opacity: 1, y: 0 }}
                                exit={{ opacity: 0, y: -20 }}
                                transition={{ duration: 0.3 }} className='cont-info'><BiPhone /> Phone Call</motion.div>
                            : user.meeting === 'offline' ? <motion.div
                                initial={{ opacity: 0, y: 20 }}
                                animate={{ opacity: 1, y: 0 }}
                                exit={{ opacity: 0, y: -20 }}
                                transition={{ duration: 0.3 }} className='cont-info'><BsCalendar2Date /> In Person</motion.div> :
                                user.meeting === 'online' ? <motion.div
                                    initial={{ opacity: 0, y: 20 }}
                                    animate={{ opacity: 1, y: 0 }}
                                    exit={{ opacity: 0, y: -20 }}
                                    transition={{ duration: 0.3 }} className='cont-info'><BsCameraVideo /> Online Meeting</motion.div> : null}


                        {user.meeting === 'call' ?
                            <motion.div
                                initial={{ opacity: 0, y: 20 }}
                                animate={{ opacity: 1, y: 0 }}
                                exit={{ opacity: 0, y: -20 }}
                                transition={{ duration: 0.3 }} className='cont-text'><p>Schedule a phone consultation at your convenience to discuss your needs and explore tailored solutions together.</p></motion.div>
                            : user.meeting === 'offline' ? <motion.div
                                initial={{ opacity: 0, y: 20 }}
                                animate={{ opacity: 1, y: 0 }}
                                exit={{ opacity: 0, y: -20 }}
                                transition={{ duration: 0.3 }} className='cont-text'><p>Book an in-person consultation to discuss your needs and create a personalized plan face-to-face.</p></motion.div> :
                                user.meeting === 'online' ? <motion.div
                                    initial={{ opacity: 0, y: 20 }}
                                    animate={{ opacity: 1, y: 0 }}
                                    exit={{ opacity: 0, y: -20 }}
                                    transition={{ duration: 0.3 }} className='cont-text'><p>Arrange a video call consultation to connect virtually, discuss your requirements, and collaborate on a customized solution from the comfort of your space.</p></motion.div>
                                    : null}
                    </div>
                </motion.div>

            </div>


        </motion.div >
    )
}