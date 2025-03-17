"use client";
import Image from "next/image";
import "./page.scss";
import client, { imageUrlFor } from "@/app/lib/sanityClient";
import Navbar from "../Layouts/Navbar/Navbar";
import { useEffect, useState } from "react";
import Loading from "../Loading/Loading";
import Link from "next/link";

export default function BlogPage() {

    const [loading, setLoading] = useState(true);
    const [blogs, setBlogs] = useState([]);

    useEffect(() => {
        getPosts();
    }, []);

    async function getPosts() {
        const data = await client.fetch(`*[_type == "post"] {
            title,
            slug,
            mainImage {
                asset->{
                    _id,
                    url
                }
            },
            publishedAt,
            excerpt,
            body,
            author->{
                name,
                image {
                    asset->{
                        _id,
                        url
                    }
                }
            }
        }`);

        setBlogs(data);
        setLoading(false);
    }

    { loading ? <Loading /> : "" }
    return (
        <>
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
        </>
    );
}