"use client";
import Image from "next/image";
import "./page.scss";
import { imageUrlFor } from "@/app/lib/sanityClient";
import Navbar from "../Layouts/Navbar/Navbar";
import { useEffect, useState } from "react";
import Loading from "../Loading/Loading";
import Link from "next/link";
import Footer from "../Layouts/Footer/Footer";
import { AnimatePresence, motion } from 'framer-motion';
import toast from "react-hot-toast";

export default function BlogPage({ data }) {

    const [loading, setLoading] = useState(true);
    const [blogs, setBlogs] = useState([]);

    useEffect(() => {
        getPosts();
    }, []);

    async function getPosts() {

        if (data) {
            setBlogs(data);
        } else {
            toast.error("Something went wrong");
            window.history.back();
        }

        setLoading(false);
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
                <Navbar transparent={true} />
                <main className={"blogMain"}>
                    <div className={"hero"}>
                        <h1>Latest Insights</h1>
                        <p>Discover the latest trends in web development and digital transformation</p>
                    </div>

                    <section className={"posts"}>
                        {blogs.map((post) => (
                            <article key={post.slug.current} className={"post"}>
                                <Link href={`/blog/${post.slug.current}`}>
                                    {post.mainImage && (
                                        <div className={"imageWrapper"}>
                                            <Image
                                                src={imageUrlFor(post.mainImage) || "/placeholder.svg"}
                                                alt={post.title}
                                                width={400}
                                                height={250}
                                                className={"image"}
                                            />
                                        </div>
                                    )}
                                    <div className={"content"}>
                                        <time className={"date"}>
                                            {new Date(post.publishedAt).toLocaleDateString("en-US", {
                                                month: "long",
                                                day: "numeric",
                                                year: "numeric",
                                            })}
                                        </time>
                                        <h2>{post.title}</h2>
                                        <p>{post.excerpt}</p>
                                        <div className={"author"}>
                                            {post.author.image && (
                                                <Image
                                                    src={imageUrlFor(post.author.image) || "/placeholder.svg"}
                                                    alt={post.author.name}
                                                    width={40}
                                                    height={40}
                                                    className={"authorImage"}
                                                />
                                            )}
                                            <span>{post.author.name}</span>
                                        </div>
                                    </div>
                                </Link>
                            </article>
                        ))}
                    </section>
                </main>

                <Footer />
            </motion.div>
        </>
    );
}