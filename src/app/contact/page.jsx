"use client"

import Head from "next/head"
import { useState } from "react"
import styles from "./Contact.module.scss"
import Navbar from "../Layouts/Navbar/Navbar"
import Footer from "../Layouts/Footer/Footer"

export default function Contact() {
    const [formData, setFormData] = useState({
        firstName: "",
        lastName: "",
        service: "",
        phone: "",
        email: "",
        message: "",
    })

    const [isSubmitting, setIsSubmitting] = useState(false)
    const [submitStatus, setSubmitStatus] = useState("")

    const handleInputChange = (e) => {
        const { name, value } = e.target
        setFormData((prev) => ({
            ...prev,
            [name]: value,
        }))
    }

    const handleSubmit = async (e) => {
        e.preventDefault()
        setIsSubmitting(true)

        // Simulate form submission
        setTimeout(() => {
            setIsSubmitting(false)
            setSubmitStatus("success")
            setFormData({
                firstName: "",
                lastName: "",
                service: "",
                phone: "",
                email: "",
                message: "",
            })
        }, 2000)
    }

    return (
        <>
            <Head>
                <title>Contact Us - Webina Digital | Get Your Custom Software Solution</title>
                <meta
                    name="description"
                    content="Contact Webina Digital for custom software development, web design, and mobile app solutions. Get in touch with our expert team today."
                />
                <meta
                    name="keywords"
                    content="contact webina digital, custom software, web development, mobile apps, UI/UX design"
                />
                <meta name="viewport" content="width=device-width, initial-scale=1" />
                <meta property="og:title" content="Contact Us - Webina Digital" />
                <meta
                    property="og:description"
                    content="Get in touch with Webina Digital for your custom software needs. Professional web and mobile development services."
                />
                <meta property="og:type" content="website" />
                <meta property="og:url" content="https://webinadigital.com/contact" />
                <link rel="canonical" href="https://webinadigital.com/contact" />
                <script type="application/ld+json">
                    {JSON.stringify({
                        "@context": "https://schema.org",
                        "@type": "ContactPage",
                        name: "Contact Webina Digital",
                        description: "Contact page for Webina Digital - Custom software development company",
                        url: "https://webinadigital.com/contact",
                        mainEntity: {
                            "@type": "Organization",
                            name: "Webina Digital",
                            contactPoint: {
                                "@type": "ContactPoint",
                                telephone: "+212 620792331",
                                email: "contact@webinadigital.com",
                                contactType: "customer service",
                            },
                        },
                    })}
                </script>
            </Head>

            <div className={styles.container}>
                {/* <header className={styles.header}>
                    <nav className={styles.nav}>
                        <div className={styles.logo}>
                            <img src="WEBINA.webp" />
                        </div>
                        <ul className={styles.navLinks}>
                            <li>
                                <a href="/pricing">Pricing</a>
                            </li>
                            <li>
                                <a href="/about">About Us</a>
                            </li>
                            <li>
                                <a href="/blog">Blog</a>
                            </li>
                            <li>
                                <a href="/contact" className={styles.active}>
                                    Contact
                                </a>
                            </li>
                        </ul>
                        <button className={styles.ctaButton}>GET STARTED</button>
                    </nav>
                </header> */}

                <Navbar />

                <main className={styles.main}>
                    <section className={styles.heroSection}>
                        <div className={styles.heroContent}>
                            <h1>Get In Touch With Us</h1>
                            <p>
                                Ready to transform your ideas into reality? Let's discuss your project and create something amazing
                                together.
                            </p>
                        </div>
                    </section>

                    <section className={styles.contactSection}>
                        <div className={styles.contactGrid}>
                            <div className={styles.contactInfo}>
                                <h2>Let's Start a Conversation</h2>
                                <p>
                                    We're here to help you bring your vision to life. Whether you need a custom web application, mobile
                                    app, or complete digital transformation, our team is ready to deliver exceptional results.
                                </p>

                                <div className={styles.contactMethods}>
                                    <div className={styles.contactMethod}>
                                        <div className={styles.icon}>📧</div>
                                        <div>
                                            <h3>Email Us</h3>
                                            <a href="mailto:contact@webinadigital.com">contact@webinadigital.com</a>
                                        </div>
                                    </div>

                                    <div className={styles.contactMethod}>
                                        <div className={styles.icon}>📱</div>
                                        <div>
                                            <h3>Call Us</h3>
                                            <a href="tel:+212620792331">+212 620792331</a>
                                        </div>
                                    </div>

                                    <div className={styles.contactMethod}>
                                        <div className={styles.icon}>💬</div>
                                        <div>
                                            <h3>WhatsApp</h3>
                                            <a href="https://wa.me/212620792331">+212 620792331</a>
                                        </div>
                                    </div>
                                </div>

                                <div className={styles.businessHours}>
                                    <h3>Business Hours</h3>
                                    <p>Monday - Friday: 9:00 AM - 6:00 PM (GMT)</p>
                                    <p>Saturday: 10:00 AM - 4:00 PM (GMT)</p>
                                    <p>Sunday: Closed</p>
                                </div>
                            </div>

                            <div className={styles.contactForm}>
                                <form onSubmit={handleSubmit}>
                                    <h2>Send Us a Message</h2>

                                    <div className={styles.formRow}>
                                        <div className={styles.formGroup}>
                                            <label htmlFor="firstName">First Name *</label>
                                            <input
                                                type="text"
                                                id="firstName"
                                                name="firstName"
                                                value={formData.firstName}
                                                onChange={handleInputChange}
                                                required
                                                placeholder="Your first name"
                                            />
                                        </div>

                                        <div className={styles.formGroup}>
                                            <label htmlFor="lastName">Last Name *</label>
                                            <input
                                                type="text"
                                                id="lastName"
                                                name="lastName"
                                                value={formData.lastName}
                                                onChange={handleInputChange}
                                                required
                                                placeholder="Your last name"
                                            />
                                        </div>
                                    </div>

                                    <div className={styles.formGroup}>
                                        <label htmlFor="service">Service *</label>
                                        <select id="service" name="service" value={formData.service} onChange={handleInputChange} required>
                                            <option value="">Choose a Service</option>
                                            <option value="web-development">Web Development</option>
                                            <option value="mobile-app">Mobile App Development</option>
                                            <option value="ui-ux-design">UI/UX Design</option>
                                            <option value="custom-software">Custom Software</option>
                                            <option value="consultation">Consultation</option>
                                        </select>
                                    </div>

                                    <div className={styles.formRow}>
                                        <div className={styles.formGroup}>
                                            <label htmlFor="phone">Phone Number</label>
                                            <input
                                                type="tel"
                                                id="phone"
                                                name="phone"
                                                value={formData.phone}
                                                onChange={handleInputChange}
                                                placeholder="+212 620792331"
                                            />
                                        </div>

                                        <div className={styles.formGroup}>
                                            <label htmlFor="email">Email Address *</label>
                                            <input
                                                type="email"
                                                id="email"
                                                name="email"
                                                value={formData.email}
                                                onChange={handleInputChange}
                                                required
                                                placeholder="your@email.com"
                                            />
                                        </div>
                                    </div>

                                    <div className={styles.formGroup}>
                                        <label htmlFor="message">Project Details</label>
                                        <textarea
                                            id="message"
                                            name="message"
                                            value={formData.message}
                                            onChange={handleInputChange}
                                            rows="5"
                                            placeholder="Tell us about your project, requirements, timeline, and any specific features you need..."
                                        ></textarea>
                                    </div>

                                    <button type="submit" className={styles.submitButton} disabled={isSubmitting}>
                                        {isSubmitting ? "Sending..." : "Send Message"}
                                    </button>

                                    {submitStatus === "success" && (
                                        <div className={styles.successMessage}>
                                            Thank you! Your message has been sent successfully. We'll get back to you within 24 hours.
                                        </div>
                                    )}
                                </form>
                            </div>
                        </div>
                    </section>

                    <section className={styles.faqSection}>
                        <h2>Frequently Asked Questions</h2>
                        <div className={styles.faqGrid}>
                            <div className={styles.faqItem}>
                                <h3>How long does a typical project take?</h3>
                                <p>
                                    Project timelines vary based on complexity. Simple websites take 2-4 weeks, while custom applications
                                    can take 2-6 months. We'll provide a detailed timeline during our initial consultation.
                                </p>
                            </div>

                            <div className={styles.faqItem}>
                                <h3>Do you provide ongoing support?</h3>
                                <p>
                                    Yes! We offer comprehensive maintenance and support packages to ensure your application stays updated,
                                    secure, and performs optimally.
                                </p>
                            </div>

                            <div className={styles.faqItem}>
                                <h3>What technologies do you work with?</h3>
                                <p>
                                    We specialize in modern web technologies including React, Next.js, Node.js, Python, and mobile
                                    development with React Native and Flutter.
                                </p>
                            </div>

                            <div className={styles.faqItem}>
                                <h3>Can you work with our existing team?</h3>
                                <p>
                                    We can integrate with your existing development team or work as your dedicated development partner,
                                    whatever works best for your project.
                                </p>
                            </div>
                        </div>
                    </section>
                </main>

                <Footer />

                {/* <footer className={styles.footer}>
                    <div className={styles.footerContent}>
                        <div className={styles.footerSection}>
                            <h4>Get To Know Us</h4>
                            <ul>
                                <li>
                                    <a href="/about">About Webina</a>
                                </li>
                                <li>
                                    <a href="/blog">News & Blogs</a>
                                </li>
                                <li>
                                    <a href="/careers">Careers</a>
                                </li>
                                <li>
                                    <a href="/contact">Contact</a>
                                </li>
                            </ul>
                        </div>

                        <div className={styles.footerSection}>
                            <h4>Worth Visiting</h4>
                            <ul>
                                <li>
                                    <a href="/portfolio">Portfolio</a>
                                </li>
                                <li>
                                    <a href="/services">Our Services</a>
                                </li>
                                <li>
                                    <a href="/maintenance">Maintenance</a>
                                </li>
                            </ul>
                        </div>

                        <div className={styles.footerSection}>
                            <h4>Products</h4>
                            <ul>
                                <li>
                                    <a href="/templates">Website Templates</a>
                                </li>
                                <li>
                                    <a href="/themes">Themes</a>
                                </li>
                                <li>
                                    <a href="/portfolio">Portfolio</a>
                                </li>
                                <li>
                                    <a href="/blog">Blogs</a>
                                </li>
                            </ul>
                        </div>

                        <div className={styles.footerLogo}>
                            <div className={styles.logo}>
                                <span>WD</span>
                            </div>
                            <p>WEBINA DIGITAL</p>
                            <p>Privacy & Policy</p>
                            <p>Terms and Conditions</p>
                        </div>
                    </div>

                    <div className={styles.footerBottom}>
                        <p>&copy; 2024 WEBINA DIGITAL LTD © 2024 All Rights Reserved</p>
                        <div className={styles.socialLinks}>
                            <a href="#" aria-label="Facebook">
                                📘
                            </a>
                            <a href="#" aria-label="Twitter">
                                🐦
                            </a>
                            <a href="#" aria-label="LinkedIn">
                                💼
                            </a>
                            <a href="#" aria-label="Instagram">
                                📷
                            </a>
                        </div>
                    </div>
                </footer> */}
            </div>
        </>
    )
}
