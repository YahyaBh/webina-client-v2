import Head from "next/head";
import client from "../lib/sanityClient";
import BlogPage from "./layout";

export const metadata = {
    title: "WEBINA DIGITAL | Blog",
    description:
        "Discover the latest insights and trends in web development, UI/UX design, social media managment, and digital marketing at Webina Digital's blog. Explore expert tips and strategies to drive your business forward.",
    keywords:
        "Web Development, UI/UX Design, Digital Transformation, Webina Digital Blog, Tech Trends, Software Development, Digital Strategy, Social Media Management, Digital Marketing, Web Development",
    openGraph: {
        title: "Our Blog | Webina Digital",
        description:
            "Stay updated with the latest insights on web development, UI/UX design, social media managment, and digital transformation.",
        type: "website",
        url: "https://webinadigital.com/blogs",
    },
    twitter: {
        card: "summary_large_image",
        title: "Our Blog | Webina Digital",
        description:
            "Discover the latest insights and trends in web development, UI/UX design, social media managment, and digital transformation.",
    },
};

async function getData() {
    try {
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
        return data;
    } catch (err) {
        console.error("Error fetching data:", err);
        return null;
    }
}

export default async function Page() {
    const data = await getData();

    return (
        <>
            <Head>
                <meta name="viewport" content="width=device-width, initial-scale=1" />
                <link rel="canonical" href="https://webinadigital.com/blogs" />
                <meta name="robots" content="index, follow" />
                <script type="application/ld+json">
                    {JSON.stringify({
                        "@context": "https://schema.org",
                        "@type": "Blog",
                        "name": "WEBINA DIGITAL Blog",
                        "url": "https://webinadigital.com/blogs",
                        "description":
                            "Discover the latest insights and trends in web development, UI/UX design, social media managment, and digital marketing at Webina Digital's blog. Explore expert tips and strategies to drive your business forward.",
                    })}
                </script>
            </Head>
            <BlogPage data={data} />
        </>
    );
}
