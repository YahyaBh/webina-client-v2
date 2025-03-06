import './Footer.scss'
import Logo from '../../../../public/assets/Home/Navbar/WEBINA-Logo.png'
import { FaFacebook, FaInstagram, FaTiktok, FaTwitter } from 'react-icons/fa'
import Image from 'next/image'

const Footer = () => {

    return (
        <footer className='footer'>

            <div className='container_footer'>
                <ul>
                    <h3>Get To Know Us</h3>

                    <li>Cosnultation</li>
                    <li>News & Blogs</li>
                    <li>About Webina</li>
                    <li>Contact</li>
                </ul>

                <ul>
                    <h3>Worth Visitng</h3>

                    <li>What is webina ?</li>
                    <li>Latest AI News</li>
                    <li>Our services</li>
                    <li>Maintanence</li>
                </ul>

                <ul>
                    <h3>PRODUCTS</h3>

                    <li>Costumed websites</li>
                    <li>Website Templates</li>
                    <li>E-commerce websites</li>
                    <li>Portfolios</li>
                    <li>Blogs</li>
                </ul>

                <ul>
                    <Image src={Logo} alt="logo" />

                    <p>WEBINA DIGITAL , Get your business digitalized </p>
                    <a href='/privacy-policy'>Privacy & Policy</a>
                    <a href='/contact'>Contact Us</a>
                </ul>
            </div>

            <div className='under-footer'>
                <div className='data'>
                    <h2>WEBINA DIGITAL LTD © 2023 All Rights Reserved</h2>
                </div>

                <div>
                    <a href='https://instagram.com/webina.digital' aria-label="Follow us on Instagram" target='_blank' rel="noreferrer"><FaInstagram /></a>
                    <a href='https://facebook.com/webinadigital' aria-label="Follow us on Facebook" target='_blank' rel="noreferrer"><FaFacebook /></a>
                    <a href='https://twitter.com/webina-digital' aria-label="Follow us on Twitter/X" target='_blank' rel="noreferrer"><FaTwitter /></a>
                    <a href='https://tiktok.com/@webina.digital' aria-label="Follow us on TikokT" target='_blank' rel="noreferrer"><FaTiktok /></a>
                </div>
            </div>

        </footer>
    )
}

export default Footer