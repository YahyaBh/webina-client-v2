import './Footer.scss'
import Logo from '../../../../public/WEBINA-Logo.webp'
import { FaFacebook, FaInstagram, FaTiktok, FaTwitter } from 'react-icons/fa'
import Image from 'next/image'
import Link from 'next/link'

const Footer = () => {

    return (
        <footer className='footer'>

            <div className='container_footer'>
                <ul>
                    <li className='main_title'>Get To Know Us</li>

                    <li>Cosnultation</li>
                    <li>News & Blogs</li>
                    <li>About Webina</li>
                    <li>Contact</li>
                </ul>

                <ul>
                    <li className='main_title'>Worth Visitng</li>

                    <li>What is webina ?</li>
                    <li>Latest AI News</li>
                    <li>Our services</li>
                    <li>Maintanence</li>
                </ul>

                <ul>
                    <li className='main_title'>PRODUCTS</li>

                    <li>Costumed websites</li>
                    <li>Website Templates</li>
                    <li>E-commerce websites</li>
                    <li>Portfolios</li>
                    <li>Blogs</li>
                </ul>

                <ul>
                    <Image src={Logo} alt="logo" />

                    <p>WEBINA DIGITAL , Get your business digitalized </p>
                    <Link href='/privacy-policy'>Privacy & Policy</Link>
                    <Link href='/contact'>Contact Us</Link>
                </ul>
            </div>

            <div className='under-footer'>
                <div className='holder'>
                    <div className='data'>
                        <h2>WEBINA DIGITAL LTD © 2023 All Rights Reserved</h2>
                    </div>

                    <div>
                        <Link href='https://instagram.com/webina.digital' aria-label="Follow us on Instagram" target='_blank' rel="noreferrer"><FaInstagram /></Link>
                        <Link href='https://facebook.com/webinadigital' aria-label="Follow us on Facebook" target='_blank' rel="noreferrer"><FaFacebook /></Link>
                        <Link href='https://twitter.com/webina-digital' aria-label="Follow us on Twitter/X" target='_blank' rel="noreferrer"><FaTwitter /></Link>
                        <Link href='https://tiktok.com/@webina.digital' aria-label="Follow us on TikokT" target='_blank' rel="noreferrer"><FaTiktok /></Link>
                    </div>
                </div>
            </div>

        </footer>
    )
}

export default Footer