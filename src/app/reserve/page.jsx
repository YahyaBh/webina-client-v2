import './page.scss'
import Navbar from '../Layouts/Navbar/Navbar'
import { MdDone, MdDoneOutline } from 'react-icons/md'
import Link from 'next/link'

const Reserve = () => {
    return (
        <>

            <header>
                <Navbar target={"reserve"} />


                <div className='container'>

                    <div className='glow-box'></div>
                    <h2>Request everything you want to create and leave <span>️webina digital</span>  it on the application</h2>

                    <div className='bottom'>
                        <img className='left-img' src='/Images/Reserve/HeaderHand.svg' />

                        <button>CONSULTE FOR FREE!</button>

                        <img className='right-img' src='/Images/Reserve/HeaderHand.svg' />
                    </div>

                </div>

            </header>


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

        </>
    )
}

export default Reserve