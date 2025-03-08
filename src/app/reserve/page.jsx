"use client"
import './page.scss'
import Navbar from '../Layouts/Navbar/Navbar'
import { MdArrowDownward, MdDone } from 'react-icons/md'
import BlurText from '../lib/BlurText'
import { motion } from 'framer-motion'
import { Link, Element } from 'react-scroll';
import Footer from '../Layouts/Footer/Footer'
import StarLeft from '../../../public/assets/Home/Contact Section/star-l.svg';
import StarRight from '../../../public/assets/Home/Contact Section/star-r.svg';
import Image from 'next/image'

import PhoneInput from 'react-phone-input-2'
import 'react-phone-input-2/lib/style.css'

import Calendar from 'react-calendar';
import 'react-calendar/dist/Calendar.css';


import { useState } from 'react'




const Reserve = () => {

    const [phoneNumber, setPhoneNumber] = useState();

    const [date , setDate] = useState(new Date());
    const [timeZ , setTimeZ] = useState(new Date().toLocaleTimeString());
    const [time , setTime] = useState(new Date().toLocaleTimeString());
    const [type , setType] = useState("");

    return (
        <>

            <header>
                <Navbar target={"reserve"} />


                <div className='container'>

                    <div className='glow-box'></div>
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
                            <div className='glow-box'></div>
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
                                <input type="text" maxLength={30} name='first_name' required placeholder='First Name' />
                            </div>

                            <div className="input_cont">
                                <label htmlFor="last_name">Last Name</label>
                                <input type="text" maxLength={30} name='last_name' required placeholder='Last Name' />
                            </div>

                            <div className="input_cont">
                                <label htmlFor="service" >Service Category</label>

                                <select name="service" id="service" className=''>
                                    <option value="service">Service</option>
                                    <option value="service">Service</option>
                                    <option value="service">Service</option>
                                </select>
                            </div>


                            <div className='input_cont'>
                                <label htmlFor="phone_number">Phone Number</label>
                                <PhoneInput
                                    country={'ma'}
                                    value={phoneNumber}
                                    onChange={(e) => setPhoneNumber()}
                                />
                            </div>


                            <div className="input_cont db">
                                <label htmlFor="email">Email Address</label>
                                <input type="email" maxLength={40} name='email' placeholder='Email Address' />
                            </div>
                        </div>

                        <div className="bottom">


                            <DatePage/>

                        </div>

                    </div>

                </Element>

            </div >

            <Footer />
        </>
    )
}

export default Reserve



const DatePage = ({ setDate, date, setCurrentPage, user, setUser }) => {

    const today = new Date()
    const tomorrow = new Date(today)
    tomorrow.setDate(tomorrow.getDate() + 1)

    const maxDate = new Date(today.getFullYear(), today.getMonth() + 1, today.getDate());


    const disableWeekends = ({ date }) => {
        const day = date.getDay();
        return day === 0 || day === 6;
    };



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
                    <Calendar
                        onChange={setDate}
                        value={date}
                        prevLabel={'<'}
                        nextLabel={'>'}
                        minDate={tomorrow}
                        maxDate={maxDate}
                        tileDisabled={disableWeekends}
                        className="minimal-calendar"
                    />
                </div>

                <div className="time-container">


                    <label htmlFor="meeting_type">Meeting :</label>
                    <select name='meeting_type'>
                        <option value="phone">Call</option>
                    </select>

                    <label htmlFor="time">Time :</label>
                    <select name="time" id="time">
                        <option value="morning">Morning</option>
                        <option value="afternoon">Afternoon</option>
                        <option value="evening">Evening</option>
                    </select>
                </div>

                {
                    date && user.time && (
                        <motion.button
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            exit={{ opacity: 0, y: -20 }}
                            transition={{ duration: 0.3 }}
                            onClick={() => setCurrentPage('payment')} className="next-but">
                            Next <MdArrowRight />
                        </motion.button>
                    )
                }
            </div>


        </motion.div >
    )
}