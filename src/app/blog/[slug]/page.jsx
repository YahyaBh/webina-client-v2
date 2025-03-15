"use client"
import { useState } from 'react';
import Image from "next/image";
import client from "@/app/lib/sanityClient";
import Navbar from "@/app/Layouts/Navbar/Navbar";
import { PortableText } from "@portabletext/react";
import "./page.scss";

export default async function BlogPostPage({ params }) {
    const post = await getPostBySlug(params.slug);


    const [postData, setPostData] = useState();

    async function getPostBySlug(slug) {
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
            { slug }
        );

        setPostData(data);
    }

    if (!post) {
        return (
            <div className="not-found">
                <h1>Post Not Found</h1>
                <p>The blog post you are looking for does not exist.</p>
            </div>
        );
    }

    return (
        <>
            <Navbar />
            <main className="blogPostMain">
                <div className="hero">
                    <h1>{post.title}</h1>
                    <p>By {post.author.name}</p>
                </div>

                <section className="postContent">
                    {postData.mainImage && (
                        <div className="imageWrapper">
                            <Image
                                src={post.mainImage.asset.url || "/placeholder.svg"}
                                alt={post.title}
                                width={800}
                                height={400}
                                className="image"
                            />
                        </div>
                    )}

                    <div className="content">
                        <time className="date">
                            {new Date(post.publishedAt).toLocaleDateString("en-US", {
                                month: "long",
                                day: "numeric",
                                year: "numeric",
                            })}
                        </time>

                        <div className="body">
                            <PortableText
                                value={post.body}
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
                                                    src={value.asset.url}
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
                            {post.author.image && (
                                <Image
                                    src={post.author.image.asset.url || "/placeholder.svg"}
                                    alt={post.author.name}
                                    width={40}
                                    height={40}
                                    className="authorImage"
                                />
                            )}
                            <span>{post.author.name}</span>
                        </div>
                    </div>
                </section>
            </main>
        </>
    );
}