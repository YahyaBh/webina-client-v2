'use client';

import React, {
    useEffect,
    useRef,
    useState,
} from 'react';

import { Tooltip } from 'react-tooltip';

import YouTubePlayer from 'youtube-player';
import { AnimatePresence, motion } from 'framer-motion';


import Image from 'next/image';
import AnchorLink from 'react-anchor-link-smooth-scroll';

import { SiRubyonrails, SiAdobepremierepro, SiAdobeaftereffects, SiVisualstudio, SiAndroidstudio, SiMysql, SiCplusplus, SiFlutter, SiBlender, SiNuxtdotjs } from 'react-icons/si';
import { DiRuby } from 'react-icons/di';
import { FaPhp, FaBootstrap, FaSwift, FaFigma, FaDocker, FaPython, FaSketch, FaReact, FaPlay, FaSpinner } from 'react-icons/fa'
import { BsArrowRight, BsWordpress } from 'react-icons/bs'
import { IoLogoJavascript, IoLogoCss3, IoMdStar, IoMdStarOutline, IoMdStarHalf } from 'react-icons/io'
import { BiX } from 'react-icons/bi';
import { FiArrowRight } from 'react-icons/fi';


import client, { imageUrlFor } from '../lib/sanityClient';

import Navbar from '../Layouts/Navbar/Navbar';
import Loading from '../Loading/Loading';
import Footer from '../Layouts/Footer/Footer';


import { useCountdown } from '../Layouts/Timer/Timer';

import './Home.scss';
import './movingPhone.scss'

import BackGroundContainer from '../../../public/assets/Home/Section1/ComputerSectionHome.svg';
import Computer1 from '../../../public/assets/Home/Section1/computer.svg';
import contentPHONE from '../../../public/assets/Home/Section 2/contentPHONE.svg';

import DarkFloatingWave from '../../../public/assets/Home/Section 2/OrnamentHorizDark.png'
import DarkFloatingOrna from '../../../public/assets/Home/Section 2/OrnamentUpDark.png'
import DarkFloatingHat from '../../../public/assets/Home/Section 2/FloatingRightHatDark.png'

import WebsiteDevImage from '../../../public/assets/Home/Section 2/website.webm'


import VideoIntro from '../../../public/assets/Home/Perf-Section/NEWVIDEOFORPROMO.mp4'


import SEOPic from '../../../public/assets/Home/SEO Section/seo.webp'


import StarLeft from '../../../public/assets/Home/Contact Section/star-l.svg';
import StarRight from '../../../public/assets/Home/Contact Section/star-r.svg';
import LineContact from '../../../public/assets/Home/Contact Section/line.svg';
import Link from 'next/link';
import axios from 'axios';
import CountUp from '../lib/CountUp';
import toast from 'react-hot-toast';
import Cookies from 'js-cookie';
import Feedback from '../Layouts/Feedback/Feedback';




const Home = () => {


    const [loading, setLoading] = useState(true);
    const [contactLoading, setContactLoading] = useState(false);
    const [scrolled, setScrolled] = useState(false);

    const [targetDate, setTargetDate] = useState('');
    const [testimonials, setTestimonials] = useState([]);
    const [projects, setProjects] = useState([]);
    const [videoId, setVideoId] = useState();
    const [currentProject, setCurrentProject] = useState(null);

    const [homeTitle, setHomeTitle] = useState('ENHANCE YOUR');
    const [highlitedTitles, setHighlitedTitles] = useState(['REACH', 'GROWTH', 'EMBLEM']);
    const [homeDescription, setHomeDescription] = useState('We are gonna create a well developed and designed website from your own choice and it will exactly as you desire and want The website you want will be created with high quality,our team which is formed with experienced programmers and designers will take of every corner.');

    const [services, setServices] = useState([]);


    const [blogs, setBlogs] = useState([]);
    const [isPlaying, setIsPlaying] = useState(false);

    const [formData, setFormData] = useState({
        fullName: '',
        email: '',
        message: ''
    });

    const [days, hours, minutes, seconds] = useCountdown(targetDate);

    const tiltRef = useRef(null);
    const imageRef = useRef(null);

    const playerRef = useRef(null);
    const playerInstance = useRef(null);




    const videoRef = useRef(null);
    const loopStartTime = 9.5;


    useEffect(() => {
        fetchData();
        window.addEventListener('scroll', handleScroll);

    }, []);


    const fetchData = async () => {
        setLoading(true);
        try {
            const data = await client.fetch(`*[_type == "homePage"][0] { 
            _id,
                videoId,
                homeTitle,
                homeWords,
                promoDate,
                "servicesHighlits": servicesHighlits,
                "featuredFeedbacks": featuredFeedbacks[] -> { _id, name, message, date, image, rating, slug },
                "services": services[] -> { _id, title, description, icon, mainService },
                "featuredPosts": featuredPosts[] -> { _id, title, slug, mainImage },
                "projects": projects[] -> { _id, title, mainImage, tag, description } 
            }`);

            // Update state with fetched data
            setHomeTitle(data.homeTitle || homeTitle);
            setHighlitedTitles(data.homeWords || highlitedTitles);
            setHomeDescription(data.homeDescription || homeDescription);
            setTargetDate(data.promoDate);
            setServices(data.services || services);
            setVideoId(data.videoId || videoId);
            setBlogs(data.featuredPosts || []);
            setProjects(data.projects || []);
            setTestimonials(data.featuredFeedbacks || []);
        } catch (err) {
            console.error("Error fetching data:", err);
        } finally {
            setLoading(false);
        }
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

    const handleMouseMove = (e) => {
        const el = tiltRef.current;
        const elSec = imageRef.current;
        const height = el.clientHeight;
        const width = el.clientWidth;
        const xVal = e.nativeEvent.layerX;
        const yVal = e.nativeEvent.layerY;
        const yRotation = 8 * ((xVal - width / 2) / width);
        const xRotation = -8 * ((yVal - height / 2) / height);
        const yRotationSec = 3 * ((xVal - width / 2) / width);
        const xRotationSec = -3 * ((yVal - height / 2) / height);
        const transformValue = `perspective(500px) scale(1) rotateX(${xRotation}deg) rotateY(${yRotation}deg)`;
        const transformValueSec = `perspective(500px) scale(1) rotateX(${-xRotationSec}deg) rotateY(${-yRotationSec}deg)`;
        el.style.transition = 'transform 0.5s ease-out';
        el.style.transform = transformValue;
        elSec.style.transition = 'transform 0.5s ease-out';
        elSec.style.transform = transformValueSec;
    };

    const handleMouseOut = () => {
        const el = tiltRef.current;
        const elSec = imageRef.current;
        el.style.transition = 'transform 0.5s ease-out';
        el.style.transform = 'perspective(500px) scale(1) rotateX(0deg) rotateY(0deg)';
        elSec.style.transition = 'transform 0.5s ease-out';
        elSec.style.transform = 'perspective(500px) scale(1) rotateX(0deg) rotateY(0deg)';
    };

    const handleMouseDown = () => {
        const el = tiltRef.current;
        el.style.transform = 'perspective(500px) scale(0.97) rotateX(0) rotateY(0)';
        const elSec = imageRef.current;
        elSec.style.transform = 'perspective(500px) scale(0.99) rotateX(0) rotateY(0)';
    };

    const handleMouseUp = () => {
        const el = tiltRef.current;
        el.style.transform = 'perspective(500px) scale(1.03) rotateX(0) rotateY(0)';
        const elSec = imageRef.current;
        elSec.style.transform = 'perspective(500px) scale(1.01) rotateX(0) rotateY(0)';
    };

    const handleScroll = () => {
        if (window.pageYOffset > 200) {
            setScrolled(true);
        } else {
            setScrolled(false);
        }
    };


    const handleTimeUpdate = () => {
        const video = videoRef.current;
        if (video) {
            const currentTime = video.currentTime;
            // Check if currentTime is greater than or equal to loopStartTime
            if (currentTime >= loopStartTime && !video.paused) {
                video.currentTime = loopStartTime; // Reset video to loop start time
                video.pause(); // Pause the video to stop further playback
            }
        }
    };

    const handleVideoEnded = () => {
        const video = videoRef.current;
        if (video) {
            video.currentTime = loopStartTime; // Reset video to loop start time
            video.play(); // Ensure the video plays again after resetting
        }
    };


    useEffect(() => {
        const video = videoRef.current;

        if (video) {
            // Add event listener for timeupdate
            video.addEventListener('timeupdate', handleTimeUpdate);
            // Add event listener for ended
            video.addEventListener('ended', handleVideoEnded);

            return () => {
                // Clean up event listeners
                video.removeEventListener('timeupdate', handleTimeUpdate);
                video.removeEventListener('ended', handleVideoEnded);
            };
        }
    }, [videoRef, loopStartTime]);



    useEffect(() => {
        if (playerRef.current && isPlaying && !playerInstance.current) {
            playerInstance.current = YouTubePlayer(playerRef.current, {
                videoId: videoId,
                playerVars: {
                    autoplay: 1,
                },
            });

            playerInstance.current.on('ready', () => {
                playerInstance.current.playVideo();
            });
        }

        return () => {
            if (playerInstance.current) {
                playerInstance.current.destroy();
            }
        };
    }, [isPlaying, videoId]);

    const setBodyOverflow = (value) => {
        if (typeof window !== 'undefined') {
            document.body.style.overflow = value;
        }
    };

    useEffect(() => {
        if (playerInstance.current) {
            if (isPlaying) {
                playerInstance.current.playVideo();
                setBodyOverflow('hidden');
            } else {
                playerInstance.current.pauseVideo();
                setBodyOverflow('auto');
            }
        }
    }, [isPlaying]);

    useEffect(() => {
        setBodyOverflow(currentProject !== null ? 'hidden' : 'auto');
    }, [currentProject]);

    const toggleVideo = () => {
        setIsPlaying((prev) => !prev);
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
                className="root_main"
                variants={homeContentVariant}
                initial="hidden"
                animate={loading ? 'hidden' : 'visible'}
            >
                <Navbar target={'home'} />

                <div id='Home'>
                    <header>

                        <div className="container-main">
                            <div className="header-container">
                                <div className="container">
                                    <div className="left">
                                        <div className="flip-container">
                                            <h1>{homeTitle}
                                                <div className="flip">
                                                    <div className='special-flipper'><div>{highlitedTitles[0]}</div></div>
                                                    <div><div>{highlitedTitles[1]}</div></div>
                                                    <div><div>{highlitedTitles[2]}</div></div>
                                                </div>
                                            </h1>
                                        </div>

                                        <p>{homeDescription}</p>

                                        <Link href={'reserve'}>GET STARTED <FiArrowRight /></Link>

                                        <div className='undertext'>
                                            <BsArrowRight />
                                            <h4>CHANGE YOUR <br /> IDEA TO A BUSINESS</h4>
                                        </div>
                                    </div>

                                    <div className="right">
                                        <div className='changing-image-container'
                                            data-aos="fade-left"
                                            onMouseMove={handleMouseMove}
                                            onMouseLeave={handleMouseOut}
                                            onMouseDown={handleMouseDown}
                                            onMouseUp={handleMouseUp}>
                                            <Image
                                                className={`over-top-image changing-image`}
                                                src={Computer1}
                                                ref={imageRef}
                                                alt="computer-science" />
                                            <Image ref={tiltRef} src={BackGroundContainer} alt="container" />
                                        </div>
                                    </div>
                                </div>


                            </div>
                        </div>
                    </header>

                    <div className={scrolled ? 'scroll-section active' : 'scroll-section'} >

                        <AnchorLink href='#section-home' className='zipper-pull'>
                            <div className="scroll-downs">
                                <div className="mousey">
                                    <div className="scroller"></div>
                                </div>
                            </div>
                            <h4>SCROLL</h4>
                        </AnchorLink>


                        <div className="section-home">
                            <div className="container" id='section-home'>
                                <div className="why_web">
                                    <Image className='wave' src={DarkFloatingWave} alt='floatingwave' />
                                    <Image className='orna' src={DarkFloatingOrna} alt='floatingorna' />
                                    <Image className='hat' src={DarkFloatingHat} alt='floatinghat' />


                                    <div className="left">
                                        <div className="camera">
                                            <div className="object">
                                                <div className="front-face">
                                                    <div className="content">
                                                        <Image src={contentPHONE} alt="Placeholder Image" />
                                                    </div>

                                                    <div className="notch">
                                                        <div className="camera"></div>
                                                        <div className="speaker"></div>
                                                        <div className="camera"></div>
                                                    </div>
                                                </div>
                                                <div className="back-face">
                                                    <div className="back-camera">
                                                        <div className="lens"></div>
                                                        <div className="lens"></div>
                                                        <div className="lens"></div>
                                                        <div className="flash"></div>
                                                        <div className="mic"></div>
                                                    </div>
                                                </div>
                                                <div className="top-face"></div>
                                                <div className="bottom-face"></div>
                                                <div className="left-face"></div>
                                                <div className="right-face"></div>
                                                <div className="tr-corner">
                                                    <div className="piece-1"></div>
                                                    <div className="piece-2"></div>
                                                    <div className="piece-3"></div>
                                                    <div className="piece-4"></div>
                                                </div>
                                                <div className="tl-corner">
                                                    <div className="piece-5"></div>
                                                    <div className="piece-6"></div>
                                                    <div className="piece-7"></div>
                                                    <div className="piece-8"></div>
                                                </div>
                                                <div className="bl-corner">
                                                    <div className="piece-9"></div>
                                                    <div className="piece-10"></div>
                                                    <div className="piece-11"></div>
                                                    <div className="piece-12"></div>
                                                </div>
                                                <div className="br-corner">
                                                    <div className="piece-13"></div>
                                                    <div className="piece-14"></div>
                                                    <div className="piece-15"></div>
                                                    <div className="piece-16"></div>
                                                </div>
                                                <div className="side-button side-button-left"></div>
                                                <div className="side-button side-button-right"></div>
                                                <div className="notch"></div>
                                            </div>
                                        </div>

                                    </div>

                                    <div className="right">
                                        <h3>WHY <span>WEBINA</span></h3>

                                        <p>WebIna is a comapny that helps you make your dreams easier and build you a full application for
                                            your business , you can easily choose any website from our lists and we will
                                            finish it as soon as possible to make your work go easier on you.</p>


                                        <Link href={'reserve'}>GET STARTED</Link>
                                    </div>
                                </div>

                                <div className="special_services">
                                    <div className="top_side">
                                        <div className="left">
                                            <h2>Our Special <br />
                                                Common Services</h2>
                                            <p>All the services that Webina presents you along with your website and all
                                                the things that you need to grow your business and website </p>
                                        </div>

                                        <div className="right">
                                            <div className="card">
                                                <div className="left">
                                                    <video loop={true} autoPlay={true} muted={true} src={WebsiteDevImage} alt='website_dev' />
                                                </div>

                                                <div className="right">
                                                    <h4>Website design & Development</h4>
                                                    <p>Our team with professional designers and web developers will present the best 100% costumed website for your business</p>
                                                    <Link Link href={'reserve'}>GET STARTED</Link>
                                                </div>
                                            </div>
                                        </div>
                                    </div>

                                    <div className="cards_container">
                                        {services.length > 0 ? services?.map((service, index) =>
                                            <div className="card" key={index}>
                                                <div className="top">
                                                    <img src={service.icon ? imageUrlFor(service?.icon) : ''} alt={service.name} />
                                                </div>

                                                <div className="bottom">
                                                    <div>
                                                        <h4>{service.title}</h4>
                                                        <p>{service.description}</p>
                                                    </div>
                                                    <Link href={'reserve'}>GET STARTED</Link>
                                                </div>
                                            </div>
                                        ) : ''}
                                    </div>
                                </div>

                                <div className="technologies_section">
                                    <div className="tape_head">
                                        <h2>TECHNOLOGIES</h2>
                                    </div>

                                    <div className="langs_container">
                                        <Tooltip id="nuxt-tooltip" />
                                        <SiNuxtdotjs data-tooltip-id="nuxt-tooltip" data-tooltip-content="Nuxt Js" />
                                        <Tooltip id="ruby-tooltip" />
                                        <DiRuby data-tooltip-id="ruby-tooltip" data-tooltip-content="Ruby" />
                                        <Tooltip id="ruby-on-rails-tooltip" />
                                        <SiRubyonrails data-tooltip-id="ruby-on-rails-tooltip" data-tooltip-content="Ruby On Rails" />
                                        <Tooltip id="php-tooltip" />
                                        <FaPhp data-tooltip-id="php-tooltip" data-tooltip-content="Php" />
                                        <Tooltip id="adobe-premier-pro-tooltip" />
                                        <SiAdobepremierepro data-tooltip-id="adobe-premier-pro-tooltip" data-tooltip-content="Adobe Premiere Pro" />
                                        <Tooltip id="javascript-tooltip" />
                                        <IoLogoJavascript data-tooltip-id="javascript-tooltip" data-tooltip-content="JavaScript" />
                                        <Tooltip id="bootstrap-tooltip" />
                                        <FaBootstrap data-tooltip-id="bootstrap-tooltip" data-tooltip-content="Bootstrap" />
                                        <Tooltip id="css-tooltip" />
                                        <IoLogoCss3 data-tooltip-id="css-tooltip" data-tooltip-content="Css" />
                                        <Tooltip id="c-plus-plus-tooltip" />
                                        <SiCplusplus data-tooltip-id="c-plus-plus-tooltip" data-tooltip-content="C++" />
                                        <Tooltip id="adobe-after-effects-tooltip" />
                                        <SiAdobeaftereffects data-tooltip-id="adobe-after-effects-tooltip" data-tooltip-content="Adobe After Effects" />
                                        <Tooltip id="vs-code-tooltip" />
                                        <SiVisualstudio data-tooltip-id="vs-code-tooltip" data-tooltip-content="Visual Studio Code" />
                                        <Tooltip id="wordpress-tooltip" />
                                        <BsWordpress data-tooltip-id="wordpress-tooltip" data-tooltip-content="WordPress" />

                                        <Tooltip id="figma-tooltip" />
                                        <FaFigma data-tooltip-id="figma-tooltip" data-tooltip-content="Figma" />
                                        <Tooltip id="flutter-tooltip" />
                                        <SiFlutter data-tooltip-id="flutter-tooltip" data-tooltip-content="Flutter" />
                                        <Tooltip id="docker-tooltip" />
                                        <FaDocker data-tooltip-id="docker-tooltip" data-tooltip-content="Docker" />
                                        <Tooltip id="android-studio-tooltip" />
                                        <SiAndroidstudio data-tooltip-id="android-studio-tooltip" data-tooltip-content="Android Studio" />
                                        <Tooltip id="blender-tooltip" />
                                        <SiBlender data-tooltip-id="blender-tooltip" data-tooltip-content="Blender" />
                                        <Tooltip id="mysql-tooltip" />
                                        <SiMysql data-tooltip-id="mysql-tooltip" data-tooltip-content="MySQL" />
                                        <Tooltip id="python-tooltip" />
                                        <FaPython data-tooltip-id="python-tooltip" data-tooltip-content="Python" />
                                        <Tooltip id="swift-tooltip" />
                                        <FaSwift data-tooltip-id="swift-tooltip" data-tooltip-content="Swift" />
                                        <Tooltip id="sketch-tooltip" />
                                        <FaSketch data-tooltip-id="sketch-tooltip" data-tooltip-content="Sketch" />
                                        <Tooltip id="react-tooltip" />
                                        <FaReact data-tooltip-id="react-tooltip" data-tooltip-content="ReactJs" />
                                    </div>
                                </div>


                                <div className="order_custom">
                                    <div className="left">
                                        <h2>
                                            Create your webiste as <br />
                                            you wish in any field and <br /> with any <span>design <BsArrowRight /></span>
                                        </h2>
                                    </div>

                                    <div className="right">
                                        <Link href={'/reserve?scr=resereve'}>Order Now</Link>
                                    </div>
                                </div>


                                <div className="blogs_section">
                                    <div className="left">
                                        <h2>Get inspired,<br />Gain new skills <br />And see what's <br /><span>Trending</span></h2>
                                        <Link href={'/blogs'}>Explore Blogs</Link>
                                    </div>

                                    <div className="right">


                                        {blogs?.map(((item, index) => (
                                            <Link href={`/blog/${item.slug.current}`} className="card" key={index}>
                                                <img src={imageUrlFor(item.mainImage)} alt={'blog' + item.mainImage.alt} />
                                                <h4>{(item.title).length >= 32 ? (item.title).split('').slice(0, 32).join('') + '...' : (item.title)}</h4>
                                            </Link>
                                        )))}
                                    </div>
                                </div>

                                <div className={isPlaying ? 'video_container active' : 'video_container'} onClick={toggleVideo}>
                                    <div className="video" ref={playerRef}>
                                    </div>
                                </div>


                                <div className="perf_section">
                                    <div id="stars"></div>
                                    <div id="stars2"></div>
                                    <div id="stars3"></div>
                                    <div className="center">
                                        <div className="play_button" onClick={toggleVideo}>
                                            <FaPlay />
                                        </div>
                                        <video ref={videoRef} autoPlay={true} muted type="video/mp4" src={VideoIntro} onEnded={handleVideoEnded} alt="performance video" />
                                    </div>

                                    <hr />
                                </div>


                                {days !== 0 && hours !== 0 && minutes !== 0 && seconds !== 0 ? <div className="timer_section">
                                    <div className="left">

                                        <h3>UP TO <span>
                                            <CountUp
                                                from={0}
                                                to={50}
                                                separator=","
                                                direction="up"
                                                duration={1}
                                                className="count-up-text"
                                            />%</span></h3>

                                        <div className="timer_container">
                                            <h4>
                                                {days}

                                            </h4>
                                            <span>:</span>
                                            <h4>
                                                {hours}

                                            </h4>
                                            <span>:</span>
                                            <h4>
                                                {minutes}
                                            </h4>
                                            <span>:</span>
                                            <h4>
                                                {seconds}
                                            </h4>
                                        </div>

                                        <Link href={'/reserve?scr=pricing'}>GET DISCOUNT</Link>

                                    </div>

                                    <div className="right">
                                        <h3>Limited Time Offer! <br />Act Fast for <br /><span>UP To 50% Discounts</span></h3>
                                    </div>
                                </div> : ''}

                                <div className="background_container_under_sections">

                                    <AnimatePresence>
                                        {currentProject !== null ?
                                            <motion.div
                                                key="project-popup"
                                                initial={{ opacity: 0 }}
                                                animate={{ opacity: 1 }}
                                                exit={{ opacity: 0 }}
                                                transition={{ duration: 0.3 }}
                                                className='project_container'
                                            >
                                                <div className='project'>
                                                    <div className='exit' onClick={() => setCurrentProject(null)}><BiX /></div>
                                                    <div className='top'>
                                                        <img src={imageUrlFor(currentProject?.mainImage)} alt="porject image" />
                                                    </div>

                                                    <div className='bottom'>
                                                        <h3>{currentProject?.title}</h3>
                                                        <p>{currentProject?.description}</p>
                                                    </div>
                                                </div>
                                            </motion.div>
                                            : ''}
                                    </AnimatePresence>

                                    <div className="recent_projects">
                                        <h2>RECENT <span>PROJECTS</span></h2>

                                        <div className="projects_container">

                                            {projects?.map((item, index) => (
                                                <div className="card" key={index + item.title}>
                                                    <img src={imageUrlFor(item.mainImage)} alt={item.title} />


                                                    <div className="bottom_container">
                                                        <h4>{item.title}</h4>

                                                        <div className="tags_container">
                                                            {item?.tag?.map((tag, index) => (
                                                                <div className="tag" key={index + tag}>
                                                                    {tag}
                                                                </div>

                                                            ))}
                                                        </div>

                                                        <p>{item?.description?.length >= 80 ? item?.description?.split('').slice(0, 80).join('') + '...' : item?.description}</p>

                                                        <button onClick={() => setCurrentProject(item)}>
                                                            GO TO DETAILS
                                                        </button>
                                                    </div>


                                                </div>
                                            ))
                                            }

                                        </div>

                                    </div>



                                    <div className="seo_container">
                                        <div className="left">
                                            <h2>
                                                Get The First Position In <br />
                                                The Google <span>SEO</span>
                                            </h2>

                                            <p>
                                                We Will Help Your Client To Reach Your Website , Easily In The First Link In Google
                                            </p>

                                            <Link href={'reserve'}>GET STARTED</Link>
                                        </div>

                                        <div className="right">
                                            <Image src={SEOPic} alt='seo_picture' />
                                        </div>
                                    </div>





                                    <div className="here_for_you">


                                        <h2>We’re here for you</h2>


                                        <div className="cards_container">
                                            <div className="card">
                                                <hr />

                                                <h3>24/7 Available</h3>

                                                <p>Watch tutorials and read detailed articles in the Webina Help Center.</p>

                                                <div className="link">
                                                    <Link href="/contact">Contact Us Now</Link>
                                                    <BsArrowRight />
                                                </div>
                                            </div>

                                            <div className="card">
                                                <hr />

                                                <h3>Get answers</h3>

                                                <p>Watch tutorials and read detailed articles in the Webina Help Center.</p>

                                                <div className="link">
                                                    <Link href="/about">Go to FAQs</Link>
                                                    <BsArrowRight />
                                                </div>
                                            </div>

                                            <div className="card">
                                                <hr />

                                                <h3>Get To Know Us</h3>

                                                <p>Watch tutorials and read detailed articles in the Webina Help Center.</p>

                                                <div className="link">
                                                    <Link href="/about">Learn more now</Link>
                                                    <BsArrowRight />
                                                </div>
                                            </div>
                                        </div>
                                    </div>

                                    <div className="feedback_container">
                                        {Feedback(testimonials)}

                                        <div className="swiper-pag"></div>

                                    </div>

                                    <Image className='contact_line' src={LineContact} alt='contact line' />

                                    <div className="contact_us">

                                        <Image className='star_left' src={StarLeft} alt='star left' />
                                        <Image className='star_right' src={StarRight} alt='star right' />

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


                                </div>

                                <script type="text/javascript" src="//widget.trustpilot.com/bootstrap/v5/tp.widget.bootstrap.min.js" async></script>



                                <Footer />

                            </div>
                        </div>
                    </div>
                </div >
            </motion.div>
        </>
    )
}

export default Home
