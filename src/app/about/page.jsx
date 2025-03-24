'use client';

import React, { useEffect, useState } from 'react';
import Head from 'next/head';
import './About.scss';
import Navbar from '../Layouts/Navbar/Navbar';
import { BiArrowFromLeft } from 'react-icons/bi';
import Footer from '../Layouts/Footer/Footer';

import BlurText from "../lib/BlurText";
import client from '../lib/sanityClient';
import Link from 'next/link';
import { AnimatePresence, motion } from 'framer-motion';
import Loading from '../Loading/Loading';
import axios from 'axios';
import toast from 'react-hot-toast';
import Cookies from 'js-cookie';
import Feedback from '../Layouts/Feedback/Feedback';
import Image from 'next/image';

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
        const homeData = await client.fetch(
            '*[_type == "homePage"][0] { _id, promoDate, "featuredFeedbacks": featuredFeedbacks[]->{_id, name, message, date, image, rating, slug}, "featuredPosts": featuredPosts[]->{_id, title, mainImage}, "projects": projects[]->{_id, title, mainImage, tag, description}, videoId, homeTitle, homeWords, servicesHighlits }'
        );
        setTestimonials(homeData.featuredFeedbacks ? homeData.featuredFeedbacks : []);
        setLoading(false);
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
                .then((res) => {
                    toast.success('Message sent successfully!');
                    setFormData({ fullName: '', email: '', message: '' });
                    Cookies.set('contactFormSubmitted', 'true', { expires: 1 });
                });
        } catch (error) {
            toast.error('Failed to send message');
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
            <Head>
                <title>About Us | WEBINA DIGITAL</title>
                <meta
                    name="description"
                    content="Learn more about WEBINA DIGITAL – our mission, vision, history, and what sets us apart in delivering innovative digital solutions that empower businesses and individuals."
                />
                <meta
                    name="keywords"
                    content="About, WEBINA DIGITAL, Digital Solutions, Mission, Vision, History, Innovation, Technology"
                />
                <meta name="robots" content="index, follow" />
                <meta name="viewport" content="width=device-width, initial-scale=1" />
                <link rel="canonical" href="https://webinadigital.com/about" />

                <meta property="og:title" content="About Us | WEBINA DIGITAL" />
                <meta
                    property="og:description"
                    content="Learn more about WEBINA DIGITAL – our mission, vision, history, and innovative digital solutions that empower businesses and individuals."
                />
                <meta property="og:type" content="website" />
                <meta property="og:url" content="https://webinadigital.com/about" />

                <meta name="twitter:card" content="summary_large_image" />
                <meta name="twitter:title" content="About Us | WEBINA DIGITAL" />
                <meta
                    name="twitter:description"
                    content="Learn more about WEBINA DIGITAL – our mission, vision, history, and innovative digital solutions that empower businesses and individuals."
                />

                <script type="application/ld+json">
                    {JSON.stringify({
                        "@context": "https://schema.org",
                        "@type": "AboutPage",
                        "name": "About Us | WEBINA DIGITAL",
                        "url": "https://webinadigital.com/about",
                        "description": "Learn more about WEBINA DIGITAL – our mission, vision, history, and innovative digital solutions that empower businesses and individuals."
                    })}
                </script>
            </Head>

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
                animate={loading ? 'hidden' : 'visible'}
            >
                <header>
                    <Navbar target={"about"} />
                    <div className='container'>
                        <h2>
                            <div className='left-li'>
                                <div></div>
                                <div></div>
                                <div></div>
                            </div>
                            <BlurText text="ABOUT US" delay={150} animateBy="words" direction="top" />
                            <div className='right-li'>
                                <div></div>
                                <div></div>
                                <div></div>
                            </div>
                        </h2>
                        <h3 className='main-text'>
                            WEBINA DIGITAL will help you with new digital solutions to make it easier for you and your customers
                        </h3>
                    </div>
                </header>

                <section className='whoare'>
                    <div className='container'>
                        <div className='left'>
                            <h2>Who Are We ?</h2>
                            <p>
                                WEBINA DIGITAL is a forward-thinking company dedicated to empowering clients to elevate their businesses and careers. At its core, WEBINA DIGITAL focuses on helping individuals and organizations achieve balance by aligning their goals with the evolving demands of the modern era and the aspirations of future generations. Through innovative solutions and a client-centric approach, WEBINA DIGITAL strives to bridge the gap between traditional objectives and contemporary needs, fostering growth and success in an ever-changing landscape.
                            </p>
                            <Image src='/assets/About/ArrowAb.webp' alt='Arrow pointing about' />
                        </div>
                        <div className='right'>
                            <Image src='/assets/About/LogoContainer.webp' alt='Logo container' />
                            <Image src='/WEBINA.webp' alt='WEBINA DIGITAL logo' />
                        </div>
                    </div>
                </section>

                <section className='missions'>
                    <div className='container'>
                        <div className='left'>
                            <div className='imgContainer'>
                                <Image src='/assets/About/ThrowingBoard.webp' alt='Throwing board' />
                            </div>
                            <Image className='arrow' src='/assets/About/ArrowThrow.webp' alt='Arrow indicating motion' />
                        </div>
                        <div className='right'>
                            <div className='glow-box'></div>
                            <h2>Mission and Vision</h2>
                            <p>
                                Our mission is to guide organizations through the transformative journey of digitization, empowering them to unlock their full potential in a fast-paced, technology-driven world where digital transformation is essential for staying competitive and relevant. Our vision is to create a future where every organization seamlessly integrates digital solutions, fostering innovation, efficiency, and growth.
                            </p>
                            <Image src='/assets/About/Waves.webp' alt='Decorative waves' />
                        </div>
                    </div>
                </section>

                <section className='history'>
                    <div className='container'>
                        <div className='left'>
                            <div className='glow-box'></div>
                            <h2>Our History</h2>
                            <p>
                                WEBINA DIGITAL was born out of a passion for helping businesses thrive in the digital age. Recognizing the challenges organizations face in adapting to rapid technological changes, we set out to create solutions that bridge the gap between traditional practices and modern innovation.
                            </p>
                            <button>
                                Learn More <BiArrowFromLeft />
                            </button>
                        </div>
                        <div className='right'>
                            <div className='imgContainer'>
                                <Image src='/assets/About/Books.webp' alt='Books representing history' />
                            </div>
                        </div>
                    </div>
                </section>

                <section className='products'>
                    <div className='container'>
                        <div className='left'>
                            <div className='imgContainer'>
                                <Image src='/assets/About/PhoneAbout.webp' alt='About Phone' />
                            </div>
                            <h2>Hello World</h2>
                            <Image className='arrow' src='/assets/About/ArrowPlanet.webp' alt='Planet Arrow' />
                        </div>
                        <div className='right'>
                            <div className='glow-box'></div>
                            <h2>What Sets Us Apart</h2>
                            <p>
                                Our tailored approach to digital transformation means we don’t believe in one-size-fits-all solutions. We work closely with our clients to design strategies that align with their unique goals and challenges, backed by a team of seasoned professionals with years of experience in technology and business strategy.
                            </p>
                            <div className='planet-container'>
                                <Image src='/assets/About/PlanetAbout.webp' alt='Decorative planet' />
                            </div>
                        </div>
                    </div>
                </section>

                <section className='faq'>
                    <div className="accordion">
                        {/* Accordion items */}
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
                                    <p>
                                        Our primary mission is to guide you through the transformative journey of digitizing your organization, unlocking your full potential in today’s technology-driven landscape.
                                    </p>
                                </div>
                            </div>
                        </div>
                        {/* Additional accordion items can be added here */}
                    </div>
                </section>

                <section className='location'>
                    <div className="container">
                        <h2>Location</h2>
                        <div>
                            <iframe
                                width="100%"
                                height="600"
                                frameBorder="0"
                                scrolling="no"
                                marginHeight="0"
                                marginWidth="0"
                                src="https://maps.google.com/maps?width=100%25&amp;height=600&amp;hl=en&amp;q=71-75%20Shelton%20St,%20London%20WC2H%209JQ+(Webina%20Digital)&amp;t=&amp;z=12&amp;ie=UTF8&amp;iwloc=B&amp;output=embed"
                            >
                                <Link href="https://www.gps.ie/">gps map</Link>
                            </iframe>
                        </div>
                    </div>
                </section>

                <div className="feedback_container">
                    {Feedback(testimonials)}
                    <div className="swiper-pag"></div>
                </div>

                <Image className='contact_line' src={'/assets/Home/Contact Section/line.svg'} alt='Decorative contact line' />

                <div className="contact_us">
                    <Image className='star_left' src={'/assets/Home/Contact Section/star-l.svg'} alt='Star left' />
                    <Image className='star_right' src={'/assets/Home/Contact Section/star-r.svg'} alt='Star right' />
                    <h2>
                        <span>CONTACT</span> US
                    </h2>
                    <div className="form_container">
                        <div className="top">
                            <div className="input_cont">
                                <label htmlFor="full_name">Full Name</label>
                                <input
                                    type="text"
                                    maxLength={30}
                                    name='full_name'
                                    value={formData.fullName}
                                    onChange={(e) => setFormData({ ...formData, fullName: e.target.value })}
                                    required
                                    placeholder='Full Name'
                                />
                            </div>
                            <div className="input_cont">
                                <label htmlFor="email_address">Email Address</label>
                                <input
                                    type="email"
                                    maxLength={35}
                                    name='email_address'
                                    value={formData.email}
                                    onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                                    required
                                    placeholder='Email Address'
                                />
                            </div>
                        </div>
                        <div className="bottom">
                            <label htmlFor="message">Message</label>
                            <textarea
                                name="message"
                                id="message"
                                value={formData.message}
                                onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                                required
                                placeholder='Enter your message'
                            ></textarea>
                            {!contactLoading ? (
                                <button onClick={handleSubmit}>SEND MESSAGE</button>
                            ) : (
                                <button>Loading...</button>
                            )}
                        </div>
                    </div>
                </div>

                <Footer />
            </motion.div>
        </>
    );
};

export default About;
