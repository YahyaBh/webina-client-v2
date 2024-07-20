import './Footer.scss'
import Logo from '../../../../public/assets/Home/Navbar/WEBINA-Logo.png'
import { FaFacebook, FaInstagram, FaTiktok, FaTwitter } from 'react-icons/fa'
import Image from 'next/image'

const Footer = () => {

    return (
        <footer className='footer'>

            <div className='container_footer'>
                <ul>
                    <h3>PRODUCTS</h3>

                    <li>Costumed websites</li>
                    <li>Website Templates</li>
                    <li>E-commerce websites</li>
                    <li>Portfolios</li>
                    <li>Blogs</li>
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
                    <h3>PRODUCTS</h3>

                    <li>Costumed websites</li>
                    <li>Website Templates</li>
                    <li>E-commerce websites</li>
                    <li>Portfolios</li>
                    <li>Blogs</li>
                </ul>

                <ul>
                    <Image src={Logo} alt="logo" />

                    <p>FOOTER_DESCRIPTION</p>
                    <a href='/privacy-policy'>PRIVACY_POLICY</a>
                    <a href='/contact'>CONTACT_US</a>
                </ul>
            </div>

            <div className='under-footer'>
                <div className='data'>
                    <h2>WEBINA DIGITAL LTD © 2023 All Rights Reserved</h2>
                    <p>Company Registration N. 14915092</p>
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