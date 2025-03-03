'use client';

import React, {
    useContext,
    useEffect,
    useRef,
    useState,
} from 'react';

import './About.scss'
import Navbar from '../Layouts/Navbar/Navbar'
import { BiArrowFromLeft } from 'react-icons/bi'
import Footer from '../Layouts/Footer/Footer'
import { IoIosArrowBack, IoIosArrowForward, IoMdStar, IoMdStarHalf, IoMdStarOutline } from 'react-icons/io'

import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Pagination } from 'swiper/modules';

import 'swiper/css';
import 'swiper/css/navigation';


const About = () => {

    const [testimonials, setTestimonials] = useState([]);

    useEffect(() => {
        fetchData();
    }, []);

    const fetchData = async () => {
        const homeData = await client.fetch('*[_type == "homePage"][0] { _id, promoDate, "featuredFeedbacks": featuredFeedbacks[]->{_id, name, message , date , image , rating , slug} , "featuredPosts": featuredPosts[]->{_id, title, mainImage} ,"projects": projects[]->{_id, title, mainImage , tag , description } , videoId ,homeTitle, homeWords , servicesHighlits}');

        setTestimonials(homeData.featuredFeedbacks ? homeData.featuredFeedbacks : testimonials);


        setLoading(false)

    };

    return (
        <>


            <header>
                <Navbar target={"about"} />


                <div className='container'>
                    <div className='glow-box'></div>
                    <h2>
                        <div className='left-li'>
                            <div ></div>
                            <div ></div>
                            <div></div>
                        </div>ABOUT US
                        <div className='right-li'>
                            <div ></div>
                            <div ></div>
                            <div></div>
                        </div></h2>
                    <p>WEBINA DIGITAL is a dynamic company that was officially established in the year 2021 and is duly registered in the United Kingdom.</p>

                </div>

            </header>

            <section className='whoare'>
                <div className='container'>
                    <div className='left'>
                        <h2>Who Are We ?</h2>

                        <p>WEBINA DIGITAL is a dynamic company that was officially established in the year 2021 and is duly registered in the United Kingdom. The core mission of WEBINA DIGITAL is to empower its clients, enabling them to propel their businesses and careers to new heights. This is achieved through a commitment to helping individuals and organizations find the equilibrium necessary to harmonize their objectives with the demands of
                            the modern age and the aspirations of newer generations.</p>

                        <img src='/Images/About/ArrowAb.svg' alt='arrow about' />
                    </div>

                    <div className='right' >
                        <img src='/Images/About/LogoContainer.svg' alt='container' />
                        <img src='/Images/About/Logo.svg' alt='logo' />
                    </div>
                </div>
            </section>

            <section className='missions'>
                <div className='container'>
                    <div className='left' >

                        <div className='imgContainer'>
                            <img src='/Images/About/ThrowingBoard.svg' alt='Board throw' />
                        </div>

                        <img className='arrow' src='/Images/About/ArrowThrow.svg' alt='arrow throwing' />
                    </div>



                    <div className='right'>
                        <div className='glow-box'></div>
                        <h2>Mission and Vision</h2>

                        <p>Our primary and unwavering mission is to guide you through the transformative journey of digitizing your organization. In today's fast-paced and tech-driven world, embracing digitalization is not merely a choice but a necessity for staying competitive and relevant. At the core of our mission lies the firm belief that
                            digitalization holds the key to unlocking your organization's full potential.</p>

                        <img src='/Images/About/Waves.svg' alt='waves about' />

                    </div>
                </div>
            </section>

            <section className='history'>
                <div className='container'>


                    <div className='left'>
                        <div className='glow-box'></div>
                        <h2>Mission and Vision</h2>

                        <p>Our primary and unwavering mission is to guide you through the transformative journey of digitizing your organization. In today's fast-paced and tech-driven world, embracing digitalization is not merely a choice but a necessity for staying competitive and relevant. At the core of our mission lies the firm belief that
                            digitalization holds the key to unlocking your organization's full potential.</p>

                        <button>Learn More <BiArrowFromLeft /></button>

                    </div>

                    <div className='right' >

                        <div className='imgContainer'>
                            <img src='/Images/About/Books.svg' alt='Webina Book' />
                        </div>

                    </div>
                </div>
            </section>

            <section className='products'>
                <div className='container'>
                    <div className='left' >

                        <div className='imgContainer'>
                            <img src='/Images/About/PhoneAbout.svg' alt='About Phone' />
                        </div>

                        <h2>Hello World</h2>

                        <img className='arrow' src='/Images/About/ArrowPlanet.svg' alt='Planet Arrow' />
                    </div>



                    <div className='right'>
                        <div className='glow-box'></div>
                        <h2>Mission and Vision</h2>

                        <p>Our primary and unwavering mission is to guide you through the transformative journey of digitizing your organization. In today's fast-paced and tech-driven world, embracing digitalization is not merely a choice but a necessity for staying competitive and relevant. At the core of our mission lies the firm belief that
                            digitalization holds the key to unlocking your organization's full potential.</p>


                        <div className='planet-container'>
                            <img src='/Images/About/PlanetAbout.svg' alt='planet' />
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

                    <div><iframe width="100%" height="600" frameborder="0" scrolling="no" marginheight="0" marginwidth="0" src="https://maps.google.com/maps?width=100%25&amp;height=600&amp;hl=en&amp;q=71-75%20Shelton%20St,%20London%20WC2H%209JQ%D8%8C%20%D8%A7%D9%84%D9%85%D9%85%D9%84%D9%83%D8%A9%20%D8%A7%D9%84%D9%85%D8%AA%D8%AD%D8%AF%D8%A9+(Webina%20Digital)&amp;t=&amp;z=12&amp;ie=UTF8&amp;iwloc=B&amp;output=embed"><a href="https://www.gps.ie/">gps map</a></iframe></div>
                </div>
            </section>

            <div className="feedback_container">
                {feedback(testimonials)}

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
                            <input type="text" maxLength={30} name='full_name' required placeholder='Full Name' />
                        </div>

                        <div className="input_cont">
                            <label htmlFor="full_name">Email Address</label>
                            <input type="email" maxLength={35} name='email_address' required placeholder='Email Address' />
                        </div>
                    </div>

                    <div className="bottom">
                        <label htmlFor="message">Message</label>
                        <textarea name="message" id="message" required placeholder='Enter your message' ></textarea>

                        <button >
                            SEND MESSAGE
                        </button>
                    </div>

                </div>

            </div>

            <Footer />
        </>
    )
}

export default About



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