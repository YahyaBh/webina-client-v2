import client from "../lib/sanityClient";
import BlogPage from "./blogs";

export const metadata = {
    title: "WEBINA DIGITAL | Blog",
    description:
        "Discover the latest insights and trends in web development, UI/UX design, social media management, and digital marketing at Webina Digital's blog. Explore expert tips and strategies to drive your business forward.",
    keywords: [
        "Web Development",
        "UI/UX Design",
        "Digital Transformation",
        "Webina Digital Blog",
        "Tech Trends",
        "Software Development",
        "Digital Strategy",
        "Social Media Management",
        "Digital Marketing",
    ],
    metadataBase: new URL("https://webinadigital.com"),
    alternates: {
        canonical: "/blogs",
    },
    robots: {
        index: true,
        follow: true,
    },
    openGraph: {
        title: "Our Blog | Webina Digital",
        description:
            "Stay updated with the latest insights on web development, UI/UX design, social media management, and digital transformation.",
        url: "https://webinadigital.com/blogs",
        siteName: "Webina Digital",
        locale: "en_US",
        type: "website",
    },
    twitter: {
        card: "summary_large_image",
        title: "Our Blog | Webina Digital",
        description:
            "Discover the latest insights and trends in web development, UI/UX design, social media management, and digital transformation.",
    },
    other: {
        "viewport": "width=device-width, initial-scale=1",
        "ld+json": JSON.stringify({
            "@context": "https://schema.org",
            "@type": "Blog",
            name: "WEBINA DIGITAL Blog",
            url: "https://webinadigital.com/blogs",
            description:
                "Discover the latest insights and trends in web development, UI/UX design, social media management, and digital marketing at Webina Digital's blog. Explore expert tips and strategies to drive your business forward.",
        }),
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
        console.log(data);

        return data;
    } catch (err) {
        return err;
    }
}

export default async function Page() {
    const blogs = await getData();

    return (
        <BlogPage data={blogs} />
    );
}
