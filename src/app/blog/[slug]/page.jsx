"use client"
import { useEffect, useState } from 'react';
import Image from "next/image";
import client, { imageUrlFor } from "@/app/lib/sanityClient";
import Navbar from "@/app/Layouts/Navbar/Navbar";
import { PortableText } from "@portabletext/react";
import "./page.scss";
import Loading from '@/app/Loading/Loading';
import Footer from '@/app/Layouts/Footer/Footer';
import { AnimatePresence, motion } from 'framer-motion';

export default function BlogPostPage({ params }) {
    const [postData, setPostData] = useState(null);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);

    useEffect(() => {
        const fetchPost = async () => {
            try {
                setLoading(true);
                const data = await client.fetch(
                    `*[_type == "post" && slug.current == $slug][0] {
                            title,
                            slug,
                            mainImage {
                            asset->{
                                _id,
                                url
                            }
                            },
                            publishedAt,
                            body,
                            categories[]->{
                            _id,
                            title
                            },
                            author->{
                            name,
                            image {
                                asset->{
                                _id,
                                url
                                }
                            }
                            }
                    }`,
                    { slug: params.slug }
                );

                if (!data) {
                    setError('Post not found');
                } else {
                    setPostData(data);
                }
            } catch (err) {
                setError(err.message);
            } finally {
                setLoading(false);
            }
        };

        fetchPost();
    }, [params.slug]);

    const slideUpVariant = {
        hidden: { y: '100%', opacity: 1 },
        visible: { y: 0, opacity: 1, transition: { duration: 0.5, ease: 'easeInOut' } },
        exit: { y: '-100%', opacity: 0, transition: { duration: 0.5, ease: 'easeInOut' } }
    };

    const homeContentVariant = {
        hidden: { opacity: 0 },
        visible: { opacity: 1, transition: { duration: 0.5, delay: 0.3 } }
    };

    if (error) {
        return (
            <div className="not-found">
                <h1>Error Loading Post</h1>
                <p>{error}</p>
            </div>
        );
    }

    if (!postData && !loading) {
        return (
            <div className="not-found">
                <h1>Post Not Found</h1>
                <p>The blog post you are looking for does not exist.</p>
            </div>
        );
    }

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
                <Navbar />
                <main className="blogPostMain">
                    <div className="hero">
                        <h1>{postData?.title}</h1>
                        <p>By {postData?.author?.name ?? "Unknown"}</p>
                    </div>

                    <section className="postContent">
                        {postData?.mainImage && (
                            <div className="imageWrapper">
                                <Image
                                    src={imageUrlFor(postData?.mainImage) || "/placeholder.svg"}
                                    alt={postData?.title}
                                    width={800}
                                    height={400}
                                    className="image"
                                />
                            </div>
                        )}

                        <div className="content">
                            <time className="date">
                                {new Date(postData?.publishedAt).toLocaleDateString("en-US", {
                                    month: "long",
                                    day: "numeric",
                                    year: "numeric",
                                })}
                            </time>

                            <div className='tags'>
                                {postData?.categories?.map((tag) => (
                                    <span key={tag._id} className="tag">
                                        {tag.title}
                                    </span>
                                ))}
                            </div>

                            <div className="body">
                                <PortableText
                                    value={postData?.body}
                                    components={{
                                        block: {
                                            normal: ({ children }) => <p>{children}</p>,
                                            h1: ({ children }) => <h1>{children}</h1>,
                                            h2: ({ children }) => <h2>{children}</h2>,
                                            h3: ({ children }) => <h3>{children}</h3>,
                                            blockquote: ({ children }) => (
                                                <blockquote>{children}</blockquote>
                                            ),
                                        },
                                        list: {
                                            bullet: ({ children }) => <ul>{children}</ul>,
                                            number: ({ children }) => <ol>{children}</ol>,
                                        },
                                        listItem: {
                                            bullet: ({ children }) => <li>{children}</li>,
                                            number: ({ children }) => <li>{children}</li>,
                                        },
                                        types: {
                                            image: ({ value }) => (
                                                <div className="blockImage">
                                                    <Image
                                                        src={imageUrlFor(value) || "/placeholder.svg"}
                                                        alt={value.alt || "Image"}
                                                        width={800}
                                                        height={400}
                                                        className="image"
                                                    />
                                                    {value.caption && (
                                                        <figcaption>{value.caption}</figcaption>
                                                    )}
                                                </div>
                                            ),
                                        },
                                    }}
                                />
                            </div>

                            <div className="author">
                                {postData?.author?.image && (
                                    <Image
                                        src={imageUrlFor(postData?.author.image) || "/placeholder.svg"}
                                        alt={postData?.author?.name ?? postData?.author.name}
                                        width={40}
                                        height={40}
                                        className="authorImage"
                                    />
                                )}
                                <span>{postData?.author?.name ?? 'Unknown'}</span>
                            </div>
                        </div>
                    </section>
                </main>

                <Footer />
            </motion.div>
        </>
    );
}