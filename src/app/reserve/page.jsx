"use client";
import { Suspense, useEffect, useState } from "react";
import "./page.scss";
import Navbar from "../Layouts/Navbar/Navbar";
import { MdArrowDownward, MdDone } from "react-icons/md";
import BlurText from "../lib/BlurText";
import { useSearchParams } from "next/navigation";
import { AnimatePresence, motion } from "framer-motion";
import { Link, Element, scroller } from "react-scroll";
import Footer from "../Layouts/Footer/Footer";
import Cookies from "js-cookie";
import axios from "axios";
import isEmail from "validator/lib/isEmail";
import isMobilePhone from "validator/lib/isMobilePhone";
import PhoneInput from "react-phone-input-2";
import "react-phone-input-2/lib/style.css";
import Calendar from "react-calendar";
import "react-calendar/dist/Calendar.css";
import Loading from "../Loading/Loading";
import { BiCopy, BiPhone } from "react-icons/bi";
import { BsCalendar2Date, BsCameraVideo, BsClock } from "react-icons/bs";
import Head from "next/head";
import client, { imageUrlFor } from "../lib/sanityClient";
import { FiSun, FiSunrise, FiSunset } from "react-icons/fi";

const ReserveContent = () => {
    const searchParams = useSearchParams();
    const verification = searchParams.get("verification");
    const scroll = searchParams.get("scr");

    const [isOpenDropService, setOpenDropServie] = useState(false);
    const [loading, setLoading] = useState(true);
    const [loadingSend, setLoadingSend] = useState(false);
    const [formSent, setFormSent] = useState(false);
    const [dates, setDates] = useState([]);
    const [services, setServices] = useState([]);
    const [packs, setPacks] = useState([]);
    const [user, setUser] = useState({
        first_name: "",
        last_name: "",
        service: "",
        email: "",
        phone: "",
        date: "",
        time: "",
        meeting: "",
    });

    useEffect(() => {
        getDates();

        if (scroll === "pricing") {
            scroller.scrollTo("pricing", {
                duration: 200,
                delay: 100,
                smooth: true,
            });
        } else if (scroll === "reserve") {
            scroller.scrollTo("reserve", {
                duration: 200,
                delay: 100,
                smooth: true,
            });
        }

        if (verification === "checked") {
            setFormSent(true);
            Cookies.set("form-sent", "We will contact you soon");
        }

        if (Cookies.get("form-sent")) {
            setFormSent(true);
        }
    }, [scroll, verification]);

    useEffect(() => {
        setOpenDropServie(false);
    }, [user]);

    async function getDates() {
        try {
            const dataDates = await client.fetch(`*[_type == "user"]{date}`);
            const dataServices = await client.fetch(`*[_type == "service"]{ _id, title , icon}`);
            const dataPacks = await client.fetch(`*[_type == "pack"]{ _id, name , price , description , specs}`);

            setDates(dataDates);
            setServices(dataServices);
            setPacks(dataPacks);
        } catch (error) {
            console.error("Error fetching data:", error);
        }

        setLoading(false);
    }

    async function handleClick() {
        setOpenDropServie(false);
        if (user.first_name.trim().split(/\s+/).length !== 1) {
            toast.error("Please enter a valid first name");
        } else if (user.last_name.trim().split(/\s+/).length !== 1) {
            toast.error("Please enter a valid last name");
        } else if (!isEmail(user.email)) {
            toast.error("Please enter a valid email");
        } else if (!isMobilePhone("+" + user.phone, "ar-MA")) {
            toast.error("Please enter a valid phone number");
        } else if (user.date === "") {
            toast.error("Please select meeting date");
        } else if (user.time === "") {
            toast.error("Please select meeting time");
        } else if (user.meeting === "") {
            toast.error("Please select meeting type");
        } else if (user.service === "") {
            toast.error("Please select a service");
        }

        setLoadingSend(true);
        await axios
            .post(`/api/sendEmail`, { user: user })
            .then((res) => {
                Cookies.set("form-sent", true, { expires: 1 });
                setFormSent(true);
                toast.success("Email verification has been sent");
            })
            .catch((err) => {
                toast.error(err.response.data.message);
            });

        setLoadingSend(false);
    }

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
                <title>Reserve Your Consultation | WEBINA DIGITAL</title>
                <meta
                    name="description"
                    content="Reserve your consultation with WEBINA DIGITAL and explore our custom software solutions, mobile & web app development, and digital transformation services."
                />
                <meta
                    name="keywords"
                    content="Reserve, Consultation, WEBINA DIGITAL, Custom Software, Web App, Mobile App, Digital Transformation"
                />
                <meta name="robots" content="index, follow" />
                <meta name="viewport" content="width=device-width, initial-scale=1" />
                <link rel="canonical" href="https://webinadigital.com/reserve" />

                <meta property="og:title" content="Reserve Your Consultation | WEBINA DIGITAL" />
                <meta
                    property="og:description"
                    content="Reserve your consultation with WEBINA DIGITAL and discover our tailored digital solutions for your enterprise."
                />
                <meta property="og:type" content="website" />
                <meta property="og:url" content="https://webinadigital.com/reserve" />

                <meta name="twitter:card" content="summary_large_image" />
                <meta name="twitter:title" content="Reserve Your Consultation | WEBINA DIGITAL" />
                <meta
                    name="twitter:description"
                    content="Reserve your consultation with WEBINA DIGITAL and explore custom software, web and mobile apps, and digital transformation services."
                />
                <script type="application/ld+json">
                    {JSON.stringify({
                        "@context": "https://schema.org",
                        "@type": "WebPage",
                        "name": "Reserve Your Consultation | WEBINA DIGITAL",
                        "url": "https://webinadigital.com/reserve",
                        "description": "Reserve your consultation with WEBINA DIGITAL to explore our tailored digital solutions and software services.",
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
                animate={loading ? 'hidden' : 'visible'}>

                <header>
                    <Navbar target={"reserve"} />

                    <div className="container">
                        <h2>
                            <BlurText
                                text="Request everything you want to create and leave webina digital it on the application"
                                delay={50}
                                animateBy="words"
                                direction="top"
                            />
                        </h2>

                        <div className="bottom">
                            <img className="left-img" src="/assets/Reserve/HeaderHand.svg" alt="left hand" />

                            <Link to="reserve" smooth={true} duration={200}>
                                <motion.button
                                    initial={{ opacity: 0, y: -20 }}
                                    animate={{ opacity: 1, y: 0 }}
                                    exit={{ opacity: 0, y: 20 }}
                                    transition={{ duration: 0.3 }}
                                    className="btn-cons"
                                >
                                    CONSULTE FOR FREE! <MdArrowDownward />
                                </motion.button>
                            </Link>
                            <img className="right-img" src="/assets/Reserve/HeaderHand.svg" alt="right hand" />
                        </div>
                    </div>
                </header>

                <div className="res-cont">
                    <section className="whoare">
                        <div className="container">
                            <motion.div
                                initial="hidden"
                                whileInView="visible"
                                viewport={{ once: true }}
                                transition={{ duration: 0.3 }}
                                variants={{
                                    visible: { opacity: 1, scale: 1 },
                                    hidden: { opacity: 0, scale: 0.5 },
                                }}
                                className="left"
                            >
                                <img src="/assets/Reserve/LogoContainer.svg" alt="Frame Web" />

                                <div className="card">
                                    <span>1</span>
                                    <p>
                                        Search Engine Optimization (SEO), experts optimize and improve
                                        its visibility in search engine results
                                    </p>
                                </div>

                                <div className="bottom">
                                    <h3>
                                        <span>WEBSITE</span> UI / UX{" "}
                                    </h3>
                                    <img src="/assets/Reserve/ArrowCont.svg" alt="arrow web" />
                                </div>
                            </motion.div>
                            <motion.div
                                initial="hidden"
                                whileInView="visible"
                                viewport={{ once: true }}
                                transition={{ duration: 0.3 }}
                                variants={{
                                    visible: { opacity: 1, scale: 1 },
                                    hidden: { opacity: 0, scale: 0.5 },
                                }}
                                className="right"
                            >
                                <img src="/assets/Reserve/PhoneCont.svg" alt="Phone Frame" />

                                <div className="card">
                                    <span>2</span>
                                    <p>
                                        Targeted Advertising, data-driven insights and advanced
                                        targeting techniques to reach your ideal audience.
                                    </p>
                                </div>

                                <div className="bottom">
                                    <h3>
                                        {" "}
                                        <span>APPS</span> UI / UX{" "}
                                    </h3>

                                    <img src="/assets/About/ArrowAb.webp" alt="Arrow Phone" />
                                </div>
                            </motion.div>
                        </div>
                        <img src="/assets/Reserve/LineWave.webp" alt="line-wave" />
                    </section>

                    <Element name="pricing" className="packs">
                        <h2>
                            Our Offers <span>Web</span> / <span>Mobile</span> Apps
                        </h2>

                        <section className="container">
                            {packs.map((pack) => (
                                <motion.div
                                    initial="hidden"
                                    whileInView="visible"
                                    viewport={{ once: true }}
                                    transition={{ duration: 0.2 }}
                                    variants={{
                                        visible: { opacity: 1, y: 0 },
                                        hidden: { opacity: 0, y: -20 },
                                    }}
                                    key={pack._id}
                                    className="pack"
                                >
                                    <div className="top">
                                        <h5>{pack.name}</h5>
                                        <h3>{pack.price} DH</h3>
                                        <h4>{pack.description}</h4>
                                    </div>

                                    <div className="bottom">
                                        <ul>
                                            {pack.specs.map((spec) => (
                                                <li>
                                                    <span>
                                                        <MdDone />
                                                    </span>{" "}
                                                    <h3>{spec}</h3>
                                                </li>
                                            ))}
                                        </ul>

                                        <Link to="reserve" smooth={true} duration={200}>
                                            GET STARTED
                                        </Link>
                                    </div>
                                </motion.div>
                            ))}
                        </section>
                    </Element>

                    <div className="taper_line">
                        <h3>WEBINA DIGITAL</h3>
                        <h3>WEBINA DIGITAL</h3>
                        <h3>WEBINA DIGITAL</h3>
                        <h3>WEBINA DIGITAL</h3>
                        <h3>WEBINA DIGITAL</h3>
                        <h3>WEBINA DIGITAL</h3>
                        <h3>WEBINA DIGITAL</h3>
                    </div>

                    <Element name="reserve" className="reserve">
                        <img className="star_left" src={'/assets/Home/Contact Section/star-l.svg'} alt="star left" />
                        <img className="star_right" src={'/assets/Home/Contact Section/star-r.svg'} alt="star right" />

                        {!formSent ? (
                            !loadingSend ? (
                                <div>
                                    <h2>
                                        <span>CONTACT</span> US
                                    </h2>
                                    <div className="form_container">
                                        <div className="top">
                                            <div className="input_cont">
                                                <label htmlFor="first_name">First Name</label>
                                                <input
                                                    type="text"
                                                    maxLength={30}
                                                    name="first_name"
                                                    onChange={(e) =>
                                                        setUser({ ...user, first_name: e.target.value })
                                                    }
                                                    required
                                                    placeholder="First Name"
                                                />
                                            </div>

                                            <div className="input_cont">
                                                <label htmlFor="last_name">Last Name</label>
                                                <input
                                                    type="text"
                                                    maxLength={30}
                                                    name="last_name"
                                                    onChange={(e) =>
                                                        setUser({ ...user, last_name: e.target.value })
                                                    }
                                                    required
                                                    placeholder="Last Name"
                                                />
                                            </div>

                                            <div className="input_cont service_cont">
                                                <label htmlFor="service_chose">Service :</label>
                                                <div className="select">
                                                    <button
                                                        id="dropdown-button"
                                                        className="select-button"
                                                        role="combobox"
                                                        aria-label="select button"
                                                        aria-haspopup="listbox"
                                                        aria-expanded="false"
                                                        aria-controls="select-dropdown"
                                                        onClick={() => setOpenDropServie(!isOpenDropService)}
                                                    >
                                                        <span className={`selected-value ` + user.service ? 'active' : ''}>
                                                            {user.service ? user.service.title : "Choose a service"}
                                                        </span>
                                                        <span className="arrow"></span>
                                                    </button>
                                                    {isOpenDropService && (
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
                                                                {services.map((service) => (
                                                                    <li
                                                                        role="option"
                                                                        onClick={() =>
                                                                            setUser({ ...user, service: service })
                                                                        }
                                                                    >
                                                                        <img
                                                                            src={imageUrlFor(service.icon)}
                                                                            alt={"icon_" + service.title}
                                                                        />{" "}
                                                                        {service.title}
                                                                    </li>
                                                                ))}
                                                            </ul>
                                                        </motion.div>
                                                    )}
                                                </div>
                                            </div>

                                            <div className="input_cont">
                                                <label htmlFor="phone_number">Phone Number</label>
                                                <PhoneInput
                                                    country={"ma"}
                                                    value={user.phone}
                                                    onChange={(e) => setUser({ ...user, phone: e })}
                                                />
                                            </div>

                                            <div className="input_cont db">
                                                <label htmlFor="email">Email Address</label>
                                                <input
                                                    type="email"
                                                    maxLength={40}
                                                    name="email"
                                                    onChange={(e) =>
                                                        setUser({ ...user, email: e.target.value })
                                                    }
                                                    required
                                                    placeholder="Email Address"
                                                />
                                            </div>
                                        </div>

                                        <div className="bottom">
                                            <img className="star_left" src={'/assets/Home/Contact Section/star-l.svg'} alt="star left" />
                                            <img className="star_right" src={'/assets/Home/Contact Section/star-r.svg'} alt="star right" />

                                            <DatePage user={user} setUser={setUser} dates={dates} />

                                            <AnimatePresence>
                                                {user.name !== "" &&
                                                    user.email !== "" &&
                                                    user.phone !== "" &&
                                                    user.date !== "" &&
                                                    user.time !== "" &&
                                                    user.meeting &&
                                                    user.service !== "" ? (
                                                    <motion.button
                                                        initial={{ opacity: 0, y: 20 }}
                                                        animate={{ opacity: 1, y: 0 }}
                                                        exit={{ opacity: 0, y: -20 }}
                                                        whileHover={{ scale: 1.1 }}
                                                        whileTap={{ scale: 0.9 }}
                                                        className="btn"
                                                        onClick={() => handleClick()}
                                                    >
                                                        RESERVE NOW
                                                    </motion.button>
                                                ) : (
                                                    ""
                                                )}
                                            </AnimatePresence>
                                        </div>
                                    </div>
                                </div>
                            ) : (
                                <div className="spinner"></div>
                            )
                        ) : (
                            <div className="form_sent_container">
                                {Cookies.get("form-sent") === "true" ? (
                                    <div>
                                        <h2>We have sent you a verification email</h2>
                                        <p>
                                            The email will expire in 24 hours. If so, please re-send a new
                                            form. Check your email spam.
                                        </p>
                                    </div>
                                ) : (
                                    <h2>{Cookies.get("form-sent")?.toString()}</h2>
                                )}
                            </div>
                        )}
                    </Element>
                </div>

                <div className="contact_info">
                    <h2>
                        YOU NEED A CUSTOM SOFTWARE FOR <span>YOUR ENTERPRISE ?</span>
                    </h2>

                    <div className="back_info_bg"></div>
                    <div className="back_info_bg"></div>

                    <div className="contact_info_cards">
                        <div className="card">
                            <img src={"/assets/Reserve/email.webp"} alt="email" />
                            <div className="body">
                                <h3>contact@webinadigital.com</h3>
                                <BiCopy
                                    onClick={() => {
                                        navigator.clipboard.writeText("contact@webinadigital.com");
                                        toast.success("Email copied to clipboard");
                                    }}
                                />
                            </div>
                        </div>

                        <div className="card">
                            <img src={"/assets/Reserve/what.webp"} alt="whatsapp" />
                            <div className="body">
                                <h3>+212 620792331</h3>
                                <BiCopy
                                    onClick={() => {
                                        navigator.clipboard.writeText("+212 620792331");
                                        toast.success("Whatsapp number copied to clipboard");
                                    }}
                                />
                            </div>
                        </div>

                        <div className="card">
                            <img src={"/assets/Reserve/phone.webp"} alt="phone" />
                            <div className="body">
                                <h3>+212 620792331</h3>
                                <BiCopy
                                    onClick={() => {
                                        navigator.clipboard.writeText("+212 620792331");
                                        toast.success("Phone number copied to clipboard");
                                    }}
                                />
                            </div>
                        </div>
                    </div>
                </div>

                <Footer />
            </motion.div>
        </>
    );
};

const Reserve = () => {
    return (
        <Suspense fallback={<Loading />}>
            <ReserveContent />
        </Suspense>
    );
};

export default Reserve;

const DatePage = ({ user, setUser, dates }) => {
    const today = new Date();
    const tomorrow = new Date(today);
    tomorrow.setDate(tomorrow.getDate() + 1);

    const maxDate = new Date(today.getFullYear(), today.getMonth() + 1, today.getDate());

    function removeTimeFromDates(dateArray) {
        return dateArray.map((item) => {
            const dateString = item.date;
            return dateString.split("T")[0];
        });
    }


    const tileDisabled = ({ date, view }) => {
        if (view !== "month") {
            return false;
        }


        const isWeekend = date.getDay() === 0 || date.getDay() === 6;


        const currentDateString = date.toISOString().split("T")[0];


        const isDisabledDate = removeTimeFromDates(dates).some(
            (disabledDate) => currentDateString === disabledDate
        );

        return isWeekend || isDisabledDate;
    };

    const [isOpenDrop, setIsOpenDrop] = useState(false);
    const [isOpenDrop2, setIsOpenDrop2] = useState(false);

    useEffect(() => {
        setIsOpenDrop(false);
        setIsOpenDrop2(false);
    }, [user]);

    return (
        <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.3 }}
            style={{ width: '100%' }}
        >
            <h2>Choose the most suitable date for you so we get in touch</h2>

            <div className="calendar-container">
                <div className="calendar">
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        exit={{ opacity: 0, y: -20 }}
                        transition={{ duration: 0.3 }}
                    >
                        <Calendar
                            onChange={(date) => setUser({ ...user, date: date })}
                            value={user.date}
                            prevLabel={"<"}
                            nextLabel={">"}
                            minDate={tomorrow}
                            maxDate={maxDate}
                            tileDisabled={tileDisabled}
                            className="minimal-calendar"
                        />
                    </motion.div>
                </div>

                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: -20 }}
                    transition={{ duration: 0.1 }}
                    className="info-container"
                >
                    <div className="info-slot">
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
                                <span className="selected-value">
                                    {user.meeting === "call"
                                        ? "Call"
                                        : user.meeting === "offline"
                                            ? "In Person"
                                            : user.meeting === "online"
                                                ? "Online Meeting"
                                                : "Choose a meeting type"}
                                </span>
                                <span className="arrow"></span>
                            </button>
                            {isOpenDrop && (
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
                                        <li
                                            role="option"
                                            onClick={() => setUser({ ...user, meeting: "call" })}
                                        >
                                            <BiPhone /> Call
                                        </li>
                                        <li
                                            role="option"
                                            onClick={() => setUser({ ...user, meeting: "offline" })}
                                        >
                                            <BsCalendar2Date /> In Person
                                        </li>
                                        <li
                                            role="option"
                                            onClick={() => setUser({ ...user, meeting: "online" })}
                                        >
                                            <BsCameraVideo /> Online Meeting
                                        </li>
                                    </ul>
                                </motion.div>
                            )}
                        </div>
                    </div>
                    <div className="info-slot">
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
                                <span className="selected-value">
                                    {user.time !== "" ? user.time : "Choose a time"}
                                </span>
                                <span className="arrow"></span>
                            </button>
                            {isOpenDrop2 && (
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
                                        <li
                                            role="option"
                                            onClick={() => setUser({ ...user, time: "morning" })}
                                        >
                                            <FiSunrise /> Morning
                                        </li>
                                        <li
                                            role="option"
                                            onClick={() => setUser({ ...user, time: "afternoon" })}
                                        >
                                            <FiSun /> Afternoon
                                        </li>
                                        <li
                                            role="option"
                                            onClick={() => setUser({ ...user, time: "evening" })}
                                        >
                                            <FiSunset /> Evening
                                        </li>
                                    </ul>
                                </motion.div>
                            )}
                        </div>
                    </div>

                    <div className="info-slot">
                        <motion.div
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            exit={{ opacity: 0, y: -20 }}
                            transition={{ duration: 0.3 }}
                            className="cont-info"
                        >
                            <BsClock /> 30 minutes
                        </motion.div>
                        {user.meeting === "call" ? (
                            <motion.div
                                initial={{ opacity: 0, y: 20 }}
                                animate={{ opacity: 1, y: 0 }}
                                exit={{ opacity: 0, y: -20 }}
                                transition={{ duration: 0.3 }}
                                className="cont-info"
                            >
                                <BiPhone /> Phone Call
                            </motion.div>
                        ) : user.meeting === "offline" ? (
                            <motion.div
                                initial={{ opacity: 0, y: 20 }}
                                animate={{ opacity: 1, y: 0 }}
                                exit={{ opacity: 0, y: -20 }}
                                transition={{ duration: 0.3 }}
                                className="cont-info"
                            >
                                <BsCalendar2Date /> In Person
                            </motion.div>
                        ) : user.meeting === "online" ? (
                            <motion.div
                                initial={{ opacity: 0, y: 20 }}
                                animate={{ opacity: 1, y: 0 }}
                                exit={{ opacity: 0, y: -20 }}
                                transition={{ duration: 0.3 }}
                                className="cont-info"
                            >
                                <BsCameraVideo /> Online Meeting
                            </motion.div>
                        ) : null}

                        {user.meeting === "call" ? (
                            <motion.div
                                initial={{ opacity: 0, y: 20 }}
                                animate={{ opacity: 1, y: 0 }}
                                exit={{ opacity: 0, y: -20 }}
                                transition={{ duration: 0.3 }}
                                className="cont-text"
                            >
                                <p>
                                    Schedule a phone consultation at your convenience to discuss your
                                    needs and explore tailored solutions together.
                                </p>
                            </motion.div>
                        ) : user.meeting === "offline" ? (
                            <motion.div
                                initial={{ opacity: 0, y: 20 }}
                                animate={{ opacity: 1, y: 0 }}
                                exit={{ opacity: 0, y: -20 }}
                                transition={{ duration: 0.3 }}
                                className="cont-text"
                            >
                                <p>
                                    Book an in-person consultation to discuss your needs and create a
                                    personalized plan face-to-face.
                                </p>
                            </motion.div>
                        ) : user.meeting === "online" ? (
                            <motion.div
                                initial={{ opacity: 0, y: 20 }}
                                animate={{ opacity: 1, y: 0 }}
                                exit={{ opacity: 0, y: -20 }}
                                transition={{ duration: 0.3 }}
                                className="cont-text"
                            >
                                <p>
                                    Arrange a video call consultation to connect virtually, discuss
                                    your requirements, and collaborate on a customized solution from
                                    the comfort of your space.
                                </p>
                            </motion.div>
                        ) : null}
                    </div>
                </motion.div>
            </div>
        </motion.div>
    );
};