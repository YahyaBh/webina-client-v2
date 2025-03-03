'use client';

import React, {
    useContext,
    useEffect,
    useRef,
    useState,
} from 'react';

import Swal from 'sweetalert2';
import { Tooltip } from 'react-tooltip';

import YouTubePlayer from 'youtube-player';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Pagination } from 'swiper/modules';

import 'swiper/css';
import 'swiper/css/navigation';


import 'aos/dist/aos.css';


import Image from 'next/image';
import AnchorLink from 'react-anchor-link-smooth-scroll';

import { SiRubyonrails, SiAdobepremierepro, SiAdobeaftereffects, SiVisualstudio, SiAndroidstudio, SiMysql, SiCplusplus, SiFlutter, SiBlender, SiNuxtdotjs } from 'react-icons/si';
import { DiRuby } from 'react-icons/di';
import { FaPhp, FaBootstrap, FaSwift, FaFigma, FaDocker, FaPython, FaSketch, FaReact, FaPlay } from 'react-icons/fa'
import { BsArrowRight, BsWordpress, BsUnity } from 'react-icons/bs'
import { IoIosArrowForward, IoIosArrowBack, IoLogoJavascript, IoLogoCss3, IoMdStar, IoMdStarOutline, IoMdStarHalf } from 'react-icons/io'


// Unique imports
import client, { imageUrlFor } from '../lib/sanityClient'; // Ensure sanityClient is correctly imported and configured


import Navbar from '../Layouts/Navbar/Navbar';
import Loading from '../Loading/Loading';
import Footer from '../Layouts/Footer/Footer';


import { useCountdown } from '../Layouts/Timer/Timer';

import './Home.scss';
import './movingPhone.scss'

import BackGroundContainer from '../../../public/assets/Home/Section1/ComputerSectionHome.svg';
import Computer1 from '../../../public/assets/Home/Section1/computer.png';
import contentPHONE from '../../../public/assets/Home/Section 2/contentPHONE.svg';

import FloatingWave from '../../../public/assets/Home/Section 2/ornamenthoriz.webp'
import FloatingOrna from '../../../public/assets/Home/Section 2/ornamentup.webp'
import FloatingHat from '../../../public/assets/Home/Section 2/FloatingRightHat.png'

import DarkFloatingWave from '../../../public/assets/Home/Section 2/OrnamentHorizDark.png'
import DarkFloatingOrna from '../../../public/assets/Home/Section 2/OrnamentUpDark.png'
import DarkFloatingHat from '../../../public/assets/Home/Section 2/FloatingRightHatDark.png'

import WebsiteDevImage from '../../../public/assets/Home/Section 2/website.webm'


import VideoIntro from '../../../public/assets/Home/Perf-Section/NEWVIDEOFORPROMO.mp4'
import ArrowLeftBottom from '../../../public/assets/Home/Perf-Section/Arrow-Left-Bottom.png'
import ArrowRightBottom from '../../../public/assets/Home/Perf-Section/Arrow-Right-Bottom.png'
import ArrowLeftTop from '../../../public/assets/Home/Perf-Section/Arrow-Left-Top.png'
import ArrowRightTop from '../../../public/assets/Home/Perf-Section/Arrow-Right-Top.png'

import SEOPic from '../../../public/assets/Home/SEO Section/seo.webp'


import StarLeft from '../../../public/assets/Home/Contact Section/star-l.svg';
import StarRight from '../../../public/assets/Home/Contact Section/star-r.svg';
import LineContact from '../../../public/assets/Home/Contact Section/line.svg';
import { FiArrowRight } from 'react-icons/fi';

import { ThemeContext } from '../Context/ThemeContext'


const Home = () => {

    const { isDarkMode } = useContext(ThemeContext);


    const [loading, setLoading] = useState(false);
    const [scrolled, setScrolled] = useState(false);
    const [targetDate, setTargetDate] = useState('');
    const [testimonials, setTestimonials] = useState([]);
    const [projects, setProjects] = useState([]);
    const [videoId, setVideoId] = useState('dQw4w9WgXcQ');

    const [homeTitle, setHomeTitle] = useState('ENHANCE YOUR');
    const [highlitedTitles, setHighlitedTitles] = useState(['REACH', 'GROWTH', 'EMBLEM']);
    const [servicesHighlits, setServicesHighlits] = useState([]);
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
    const loopStartTime = 9.5; // Adjust this value as needed


    useEffect(() => {
        import('aos').then((aos) => {
            aos.init();
        });

        window.addEventListener('scroll', handleScroll);

        fetchData();
    }, []);

    const fetchData = async () => {
        const data = await client.fetch('*[_type == "homePage"][0] { _id, promoDate, "featuredFeedbacks": featuredFeedbacks[]->{_id, name, message , date , image , rating , slug} , "featuredPosts": featuredPosts[]->{_id, title, mainImage} ,"projects": projects[]->{_id, title, mainImage , tag , description } , videoId ,homeTitle, homeWords , servicesHighlits},*[_type == "services"][0] { _id, "services": services[]->{_id, title, description, image , mainService} }');

        setHomeTitle(data.homePage.mainTitle ? data.homePage.homeTitle : homeTitle);
        setHighlitedTitles(data.homePage.highlightedTitles ? data.homePage.highlitedTitles : highlitedTitles);
        setHomeDescription(data.homePage.homeDescription ? data.homePage.homeDescription : homeDescription);
        setTargetDate(data.homePage.promoDate);
        setVideoId(data.homePage.videoId ? data.homePage.videoId : videoId);
        setBlogs(data.homePage.featuredPosts);
        setProjects(data.homePage.projects);
        setTestimonials(data.homePage.featuredFeedbacks ? data.homePage.featuredFeedbacks : testimonials);
        setServicesHighlits(data.homePage.servicesHighlits ? data.homePage.servicesHighlits : servicesHighlits);


        setLoading(false)

    };


    //Contact handlers
    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData(prevState => ({
            ...prevState,
            [name]: value
        }));
    };

    const handleSubmit = async (e) => {
        e.preventDefault();

        try {
            const response = await fetch('/api/sendMessage', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify(formData),
            });

            if (!response.ok) {
                throw new Error('Failed to send message');
            }

            Swal.fire({
                title: "The Internet?",
                text: "That thing is still around?",
                icon: "question"
            });

            alert('Message sent successfully!');
            setFormData({ name: '', email: '', message: '' });
        } catch (error) {
            console.error('Error sending message:', error);
            alert('Failed to send message. Please try again later.');
        }
    };


    //Start Related to the image hover effects 


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

    //End Of the image hover effects



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

    useEffect(() => {
        if (playerInstance.current) {
            if (isPlaying) {
                playerInstance.current.playVideo();
            } else {
                playerInstance.current.pauseVideo();
            }
        }
    }, [isPlaying]);

    const toggleVideo = () => {
        setIsPlaying((prev) => !prev);
    };

    return (
        loading ? <Loading /> :
            <div className='root_main'>
                {loading ? <Loading /> : ''}

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

                                        <button>GET STARTED <FiArrowRight /></button>

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
                                    <Image className='wave' src={isDarkMode ? DarkFloatingWave : FloatingWave} alt='floatingwave' />
                                    <Image className='orna' src={isDarkMode ? DarkFloatingOrna : FloatingOrna} alt='floatingorna' />
                                    <Image className='hat' src={isDarkMode ? DarkFloatingHat : FloatingHat} alt='floatinghat' />


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


                                        <button>GET STARTED</button>
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
                                                    <button>GET STARTED</button>
                                                </div>
                                            </div>
                                        </div>
                                    </div>

                                    <div className="cards_container">
                                        {services.length > 0 ? services?.map((service, index) =>
                                            <div className="card" key={index}>
                                                <img src={imageUrlFor(service.image)} alt={service.name} />
                                                <h4>{service.name}</h4>
                                                <p>{service.description}</p>
                                                <button>GET STARTED</button>
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

                                    </div>

                                    <div className="langs_container">
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
                                        <Tooltip id="unity-tooltip" />
                                        <BsUnity data-tooltip-id="unity-tooltip" data-tooltip-content="Unity" />
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
                                        <button>Order Now</button>
                                    </div>
                                </div>


                                <div className="blogs_section">
                                    <div className="left">
                                        <h2>Get inspired,<br />Gain new skills <br />And see what's <br /><span>Trending</span></h2>
                                        <button>Explore Blogs</button>
                                    </div>

                                    <div className="right">


                                        {blogs?.map(((item, index) => (
                                            <div className="card" key={index}>
                                                <img src={imageUrlFor(item.mainImage)} alt={'blog' + item.mainImage.alt} />
                                                <h4>{(item.title).length >= 32 ? (item.title).split('').slice(0, 32).join('') + '...' : (item.title)}</h4>
                                            </div>
                                        )))}
                                    </div>
                                </div>

                                <div className={isPlaying ? 'video_container active' : 'video_container'} onClick={toggleVideo}>
                                    <div className="video" ref={playerRef}>
                                    </div>
                                </div>


                                <div className="perf_section">
                                    <div className="top">
                                        <div className="left">
                                            <div className="topper_text">
                                                <div className="left">
                                                    <h4>{servicesHighlits[0]}</h4>
                                                    <hr />
                                                </div>

                                                <div className="right">
                                                    <h3>01</h3>
                                                </div>
                                            </div>
                                            <Image src={ArrowLeftTop} alt="arrow left top" />
                                        </div>

                                        <div className="right">

                                            <Image src={ArrowRightTop} alt="arrow right top" />

                                            <div className="topper_text">
                                                <div className="right">
                                                    <h3>01</h3>
                                                </div>

                                                <div className="left">
                                                    <h4>{servicesHighlits[1]}</h4>
                                                    <hr />
                                                </div>


                                            </div>
                                        </div>
                                    </div>


                                    <div className="center">
                                        <div className="play_button" onClick={toggleVideo}>
                                            <FaPlay />
                                        </div>
                                        <video ref={videoRef} autoPlay={true} muted type="video/mp4" src={VideoIntro} onEnded={handleVideoEnded} alt="performance video" />
                                    </div>
                                    <div className="bottom">
                                        <div className="left">
                                            <div className="bottom_text">
                                                <div className="left">
                                                    <h4>{servicesHighlits[2]}</h4>
                                                    <hr />
                                                </div>

                                                <div className="right">
                                                    <h3>01</h3>
                                                </div>
                                            </div>
                                            <Image src={ArrowLeftBottom} alt="arrow left bottom" />
                                        </div>

                                        <div className="right">
                                            <Image src={ArrowRightBottom} alt="arrow right bottom" />

                                            <div className="bottom_text">
                                                <div className="right">
                                                    <h3>01</h3>
                                                </div>

                                                <div className="left">
                                                    <h4>{servicesHighlits[3]}</h4>
                                                    <hr />
                                                </div>


                                            </div>
                                        </div>
                                    </div>
                                </div>


                                <div className="timer_section">
                                    <div className="left">

                                        <h3>UP TO <span>30%</span></h3>

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

                                        <button>GET DISCOUNT</button>

                                    </div>

                                    <div className="right">
                                        <h3>Limited Time Offer! <br />Act Fast for <br /><span>Up To 60% Discounts</span></h3>
                                    </div>
                                </div>


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
                                                </div>

                                                <button>
                                                    GO TO DETAILS
                                                </button>
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

                                        <button>GET STARTED</button>
                                    </div>

                                    <div className="right">
                                        <Image src={SEOPic} alt='seo_picture' />
                                    </div>
                                </div>

                                <div className="background_container_under_sections">



                                    <div className="here_for_you">


                                        <h2>We’re here for you</h2>


                                        <div className="cards_container">
                                            <div className="card">
                                                <hr />

                                                <h3>Get answers</h3>

                                                <p>Watch tutorials and read detailed articles in the Webina Help Center.</p>

                                                <div className="link">
                                                    <a href="/">Go to Help Center</a>
                                                    <BsArrowRight />
                                                </div>
                                            </div>

                                            <div className="card">
                                                <hr />

                                                <h3>Get answers</h3>

                                                <p>Watch tutorials and read detailed articles in the Webina Help Center.</p>

                                                <div className="link">
                                                    <a href="/">Go to Help Center</a>
                                                    <BsArrowRight />
                                                </div>
                                            </div>

                                            <div className="card">
                                                <hr />

                                                <h3>Get answers</h3>

                                                <p>Watch tutorials and read detailed articles in the Webina Help Center.</p>

                                                <div className="link">
                                                    <a href="/">Go to Help Center</a>
                                                    <BsArrowRight />
                                                </div>
                                            </div>
                                        </div>
                                    </div>

                                    <div className="feedback_container">
                                        {feedback(testimonials)}

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
                                                    <input type="text" maxLength={30} name='full_name' value={formData.name} onChange={handleChange} required placeholder='Full Name' />
                                                </div>

                                                <div className="input_cont">
                                                    <label htmlFor="full_name">Email Address</label>
                                                    <input type="email" maxLength={35} name='email_address' value={formData.name} onChange={handleChange} required placeholder='Email Address' />
                                                </div>
                                            </div>

                                            <div className="bottom">
                                                <label htmlFor="message">Message</label>
                                                <textarea name="message" id="message" value={formData.name} onChange={handleChange} required placeholder='Enter your message' ></textarea>

                                                <button onClick={handleSubmit}>
                                                    SEND MESSAGE
                                                </button>
                                            </div>

                                        </div>

                                    </div>
                                </div>

                                <script type="text/javascript" src="//widget.trustpilot.com/bootstrap/v5/tp.widget.bootstrap.min.js" async></script>

                                <div className="trustpilot-widget" data-locale="en-US" data-template-id="56278e9abfbbba0bdcd568bc" data-businessunit-id="655de45628b0a3566959a161" data-style-height="52px" data-style-width="100%">
                                    <a href="https://www.trustpilot.com/review/webinadigital.com" target="_blank" rel="noopener">Trustpilot</a>
                                </div>

                                <Footer />

                            </div>
                        </div>
                    </div>
                </div >
            </div>
    )
}

export default Home





const feedback = (testimonials) => {

    const RatingStars = ({ rating, maxRating }) => {
        const filledStarsCount = Math.floor(rating); // Number of full stars (integer part)
        const hasHalfStar = rating % 1 !== 0; // Check if there's a half star

        const filledStars = Array.from({ length: filledStarsCount }, (_, index) => (
            <IoMdStar key={index} />
        ));

        let halfStar = null;
        if (hasHalfStar) {
            halfStar = <IoMdStarHalf />; // Render half star if there's a fractional part
        }

        const emptyStarsCount = maxRating - filledStarsCount - (hasHalfStar ? 1 : 0);
        const emptyStars = Array.from({ length: emptyStarsCount }, (_, index) => (
            <IoMdStarOutline key={index} />
        ));

        return (
            <div>
                {filledStars}
                {halfStar}
                {emptyStars}
            </div>
        );
    };

    return (
        <>
            <div className='header-feed'>
                <div>
                    <h2>Our Customer <span>Feedback</span></h2>
                    <p>Don’t take our word for it. Trust our customers</p>
                </div>

                <div className='swiper-buttons'>
                    <div className='swiper-button-pre'><IoIosArrowBack /> PREVIOUS</div>
                    <div className='swiper-button-nex'>NEXT <IoIosArrowForward /></div>
                </div>
            </div>


            <Swiper
                slidesPerView={3}
                spaceBetween={30}
                loop={true}
                grabCursor={true}
                breakpoints={{
                    320: {
                        slidesPerView: 1,
                        spaceBetween: 10,
                    },
                    480: {
                        slidesPerView: 3,
                        spaceBetween: 20,
                    },
                }}
                pagination={{
                    el: '.swiper-pag',
                    clickable: true,
                }}
                navigation={{
                    prevEl: '.swiper-button-pre',
                    nextEl: '.swiper-button-nex',
                }}
                modules={[Pagination, Navigation]}
                className="mySwiper"
            >
                {testimonials?.map((testimonial, index) =>
                    <SwiperSlide key={index}>
                        <div className="container">
                            <div className='header'>
                                <img src={imageUrlFor(testimonial.image) ? imageUrlFor(testimonial.image) : TestFeed} alt={testimonial.image.alt} />


                                <div className='stars-feed'>
                                    <RatingStars rating={testimonial.rating} maxRating={5} />
                                </div>
                            </div>

                            <div className='body'>
                                <h3>{testimonial.name}</h3>
                                <p>{testimonial.message}</p>
                            </div>
                        </div>
                    </SwiperSlide>
                )}
            </Swiper>



        </>
    )
}
