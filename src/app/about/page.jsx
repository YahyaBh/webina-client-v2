import React from 'react'
import './About.scss'
import Navbar from '../Layouts/Navbar/Navbar'

const About = () => {


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
                    </div>

                    <div className='right' >
                        <img src='/Images/About/LogoContainer.svg' alt='container'/>
                    </div>
                </div>
            </section>
        </>
    )
}

export default About