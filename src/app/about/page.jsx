'use client';

import React, {
    useEffect,
    useState,
} from 'react';

import './About.scss'
import Navbar from '../Layouts/Navbar/Navbar'
import { BiArrowFromLeft } from 'react-icons/bi'
import Footer from '../Layouts/Footer/Footer'


import BlurText from "../lib/BlurText";
import client, { imageUrlFor } from '../lib/sanityClient';
import Link from 'next/link';
import { AnimatePresence, motion } from 'framer-motion';
import Loading from '../Loading/Loading';
import axios from 'axios';
import toast from 'react-hot-toast';
import Cookies from 'js-cookie';
import Feedback from '../Layouts/Feedback/Feedback';


const About = () => {

    const [testimonials, setTestimonials] = useState([]);
    const [loading, setLoading] = useState(true);

        const [contactLoading, setContactLoading] = useState(false);
    

    const [formData, setFormData] = useState({
            fullName: '',
            email: '',
            message: ''
        });

    useEffect(() => {
        fetchData();
    }, []);

    const fetchData = async () => {
        const homeData = await client.fetch('*[_type == "homePage"][0] { _id, promoDate, "featuredFeedbacks": featuredFeedbacks[]->{_id, name, message , date , image , rating , slug} , "featuredPosts": featuredPosts[]->{_id, title, mainImage} ,"projects": projects[]->{_id, title, mainImage , tag , description } , videoId ,homeTitle, homeWords , servicesHighlits}');

        setTestimonials(homeData.featuredFeedbacks ? homeData.featuredFeedbacks : testimonials);


        setLoading(false)

    };


    const handleSubmit = async (e) => {
        e.preventDefault();

        if (!formData.fullName || !formData.email || !formData.message) {
            toast.error('Please fill all the fields');
            return;
        }

        if (Cookies.get('contactFormSubmitted')) {
            toast.error('Please wait 24 hours before submitting again');
            return;
        }

        setContactLoading(true);

        try {
            await axios.post('/api/sendMessage', formData)
                .then((res => {
                    toast.success('Message sent successfully!');
                    setFormData({ fullName: '', email: '', message: '' });
                    Cookies.set('contactFormSubmitted', 'true', { expires: 1 })
                }))

        } catch (error) {
            toast.error('Failed to send message', error);
        }

        setContactLoading(false);
    };

    const slideUpVariant = {
        hidden: { y: '100%', opacity: 1 },
        visible: { y: 0, opacity: 1, transition: { duration: 0.5, ease: 'easeInOut' } },
        exit: { y: '-100%', opacity: 0, transition: { duration: 0.5, ease: 'easeInOut' } }
    };

    const homeContentVariant = {
        hidden: { opacity: 0 },
        visible: { opacity: 1, transition: { duration: 0.5, delay: 0.3 } }
    };

    return (
        <>
            <AnimatePresence>
                {loading && (
                    <motion.div
                        className="loading-screen"
                        variants={slideUpVariant}
                        initial="hidden"
                        animate="visible"
                        exit="exit"
                    >
                        <Loading />
                    </motion.div>
                )}
            </AnimatePresence>

            <motion.div
                variants={homeContentVariant}
                initial="hidden"
                animate={loading ? 'hidden' : 'visible'}>

                <header>
                    <Navbar target={"about"} />


                    <div className='container'>
                        <h2>
                            <div className='left-li'>
                                <div ></div>
                                <div ></div>
                                <div></div>
                            </div>
                            <BlurText
                                text="ABOUT US"
                                delay={150}
                                animateBy="words"
                                direction="top"
                            />
                            <div className='right-li'>
                                <div ></div>
                                <div ></div>
                                <div></div>
                            </div></h2>
                        <h3 className='main-text'>WEBINA DIGITAL will help you with new digital solutions to make it easier for you and your customers</h3>



                    </div>

                </header>

                <section className='whoare'>
                    <div className='container'>
                        <div className='left'>
                            <h2>Who Are We ?</h2>

                            <p>WEBINA DIGITAL is a forward-thinking company dedicated to empowering clients to elevate their businesses and careers. At its core, WEBINA DIGITAL focuses on helping individuals and organizations achieve balance by aligning their goals with the evolving demands of the modern era and the aspirations of future generations. Through innovative solutions and a client-centric approach, WEBINA DIGITAL strives to bridge the gap between traditional objectives and
                                contemporary needs, fostering growth and success in an ever-changing landscape.</p>

                            <img src='/assets/About/ArrowAb.svg' alt='arrow about' />
                        </div>

                        <div className='right' >
                            <img src='/assets/About/LogoContainer.svg' alt='container' />
                            <img src='/WEBINA.png' alt='logo' />
                        </div>
                    </div>
                </section>

                <section className='missions'>
                    <div className='container'>
                        <div className='left' >

                            <div className='imgContainer'>
                                <img src='/assets/About/ThrowingBoard.svg' alt='Board throw' />
                            </div>

                            <img className='arrow' src='/assets/About/ArrowThrow.svg' alt='arrow throwing' />
                        </div>



                        <div className='right'>
                            <div className='glow-box'></div>
                            <h2>Mission and Vision</h2>

                            <p>Our mission is to guide organizations through the transformative journey of digitization, empowering them to unlock their full potential in a fast-paced, technology-driven world where digital transformation is essential for staying competitive and relevant. Our vision is to create a future where every organization seamlessly integrates digital solutions, fostering innovation, efficiency, and growth, as we strive to be the trusted partner that bridges traditional practices with cutting-edge technology,
                                enabling businesses to not only adapt to change but also lead it in shaping a more connected and dynamic world.</p>

                            <img src='/assets/About/Waves.svg' alt='waves about' />

                        </div>
                    </div>
                </section>

                <section className='history'>
                    <div className='container'>


                        <div className='left'>
                            <div className='glow-box'></div>
                            <h2>Our History</h2>

                            <p>WEBINA DIGITAL was born out of a passion for helping businesses thrive in the digital age. Recognizing the challenges organizations face in adapting to rapid technological changes, we set out to create solutions that bridge the gap between traditional practices and modern innovation.</p>

                            <button>Learn More <BiArrowFromLeft /></button>

                        </div>

                        <div className='right' >

                            <div className='imgContainer'>
                                <img src='/assets/About/Books.svg' alt='Webina Book' />
                            </div>

                        </div>
                    </div>
                </section>

                <section className='products'>
                    <div className='container'>
                        <div className='left' >

                            <div className='imgContainer'>
                                <img src='/assets/About/PhoneAbout.svg' alt='About Phone' />
                            </div>

                            <h2>Hello World</h2>

                            <img className='arrow' src='/assets/About/ArrowPlanet.svg' alt='Planet Arrow' />
                        </div>



                        <div className='right'>
                            <div className='glow-box'></div>
                            <h2>What Sets Us Apart</h2>

                            <p>Our tailored approach to digital transformation. We don’t believe in one-size-fits-all solutions; instead, we work closely with our clients to design strategies that align with their unique goals and challenges. Our team comprises seasoned professionals with years of experience in digital transformation, technology, and business strategy. We bring a wealth of knowledge and a proven track record of success to every project.</p>


                            <div className='planet-container'>
                                <img src='/assets/About/PlanetAbout.svg' alt='planet' />
                            </div>
                        </div>
                    </div>
                </section>

                <section className='faq'>
                    <div className="accordion">
                        <div className="accordion-item">
                            <div className="left">
                                <h2>01</h2>
                            </div>

                            <div className='right'>
                                <div className='top'>
                                    <h2>What is the primary mission of your organization?</h2>
                                    <button>X</button>
                                </div>
                                <div className='bottom'>
                                    <p>Our primary and unwavering mission is to guide you through the transformative journey of digitizing your organization. In today's fast-paced and tech-driven world, embracing digitalization is not merely a choice but a necessity for staying competitive and relevant. At the core of our mission lies the firm belief that
                                        digitalization holds the key to unlocking your organization's full potential.</p>
                                </div>
                            </div>
                        </div>
                        <div className="accordion-item">
                            <div className="left">
                                <h2>01</h2>
                            </div>

                            <div className='right'>
                                <div className='top'>
                                    <h2>What is the primary mission of your organization?</h2>
                                    <button>X</button>
                                </div>
                                <div className='bottom'>
                                    <p>Our primary and unwavering mission is to guide you through the transformative journey of digitizing your organization. In today's fast-paced and tech-driven world, embracing digitalization is not merely a choice but a necessity for staying competitive and relevant. At the core of our mission lies the firm belief that
                                        digitalization holds the key to unlocking your organization's full potential.</p>
                                </div>
                            </div>
                        </div>
                        <div className="accordion-item">
                            <div className="left">
                                <h2>01</h2>
                            </div>

                            <div className='right'>
                                <div className='top'>
                                    <h2>What is the primary mission of your organization?</h2>
                                    <button>X</button>
                                </div>
                                <div className='bottom'>
                                    <p>Our primary and unwavering mission is to guide you through the transformative journey of digitizing your organization. In today's fast-paced and tech-driven world, embracing digitalization is not merely a choice but a necessity for staying competitive and relevant. At the core of our mission lies the firm belief that
                                        digitalization holds the key to unlocking your organization's full potential.</p>
                                </div>
                            </div>
                        </div>
                        <div className="accordion-item">
                            <div className="left">
                                <h2>01</h2>
                            </div>

                            <div className='right'>
                                <div className='top'>
                                    <h2>What is the primary mission of your organization?</h2>
                                    <button>X</button>
                                </div>
                                <div className='bottom'>
                                    <p>Our primary and unwavering mission is to guide you through the transformative journey of digitizing your organization. In today's fast-paced and tech-driven world, embracing digitalization is not merely a choice but a necessity for staying competitive and relevant. At the core of our mission lies the firm belief that
                                        digitalization holds the key to unlocking your organization's full potential.</p>
                                </div>
                            </div>
                        </div>

                    </div>
                </section >

                <section className='location'>
                    <div className="container">
                        <h2>Location</h2>

                        <div><iframe width="100%" height="600" frameborder="0" scrolling="no" marginheight="0" marginwidth="0" src="https://maps.google.com/maps?width=100%25&amp;height=600&amp;hl=en&amp;q=71-75%20Shelton%20St,%20London%20WC2H%209JQ%D8%8C%20%D8%A7%D9%84%D9%85%D9%85%D9%84%D9%83%D8%A9%20%D8%A7%D9%84%D9%85%D8%AA%D8%AD%D8%AF%D8%A9+(Webina%20Digital)&amp;t=&amp;z=12&amp;ie=UTF8&amp;iwloc=B&amp;output=embed"><Link href="https://www.gps.ie/">gps map</Link></iframe></div>
                    </div>
                </section>

                <div className="feedback_container">
                    {Feedback(testimonials)}

                    <div className="swiper-pag"></div>

                </div>

                <img className='contact_line' src={'/assets/Home/Contact Section/line.svg'} alt='contact line' />

                <div className="contact_us">

                    <img className='star_left' src={'/assets/Home/Contact Section/star-l.svg'} alt='star left' />
                    <img className='star_right' src={'/assets/Home/Contact Section/star-r.svg'} alt='star right' />

                    <h2><span>CONTACT</span> US</h2>


                    <div className="form_container">
                        <div className="top">
                            <div className="input_cont">
                                <label htmlFor="full_name" >Full Name</label>
                                <input type="text" maxLength={30} name='full_name' value={formData.fullName} onChange={(e) => setFormData({ ...formData, fullName: e.target.value })} required placeholder='Full Name' />
                            </div>

                            <div className="input_cont">
                                <label htmlFor="full_name">Email Address</label>
                                <input type="email" maxLength={35} name='email_address' value={formData.email} onChange={(e) => setFormData({ ...formData, email: e.target.value })} required placeholder='Email Address' />
                            </div>
                        </div>

                        <div className="bottom">
                            <label htmlFor="message">Message</label>
                            <textarea name="message" id="message" value={formData.message} onChange={(e) => setFormData({ ...formData, message: e.target.value })} required placeholder='Enter your message' ></textarea>

                            {!contactLoading ?
                                <button onClick={handleSubmit}>
                                    SEND MESSAGE
                                </button> :
                                <button>
                                    <FaSpinner />
                                </button>}
                        </div>
                    </div>
                </div>

                <Footer />
            </motion.div>
        </>
    )
}

export default About


