import Head from "next/head";
import client from "../lib/sanityClient";
import Home from "./Home";

async function getData() {
    try {
        const data = await client.fetch(`*[_type == "homePage"][0] { 
        _id,
        videoId,
        homeTitle,
        homeWords,
        promoDate,
        "featuredFeedbacks": featuredFeedbacks[] -> { _id, name, message, date, image, rating, slug },
        "services": services[] -> { _id, title, description, icon, mainService },
        "featuredPosts": featuredPosts[] -> { _id, title, slug, mainImage },
        "projects": projects[] -> { _id, title, mainImage, tag, description } 
    }`);
        return data;
    } catch (err) {
        console.error("Error fetching data:", err);
        return null;
    }
}

export default async function Page() {
    const data = await getData();

    // Dynamic meta values based on the fetched data.
    const metaTitle = "WEBINA DIGITAL | Home";
    const metaDescription =
        data?.homeWords ||
        "Welcome to WEBINA DIGITAL. Explore our digital solutions, innovative projects, and industry insights.";
    const canonicalUrl = "https://webinadigital.com";

    return (
        <>
            <Head>
                <title>{metaTitle}</title>
                <meta name="description" content={metaDescription} />
                <meta
                    name="keywords"
                    content="Web Development, Digital Solutions, UI/UX Design, Digital Transformation, WEBINA DIGITAL"
                />
                <meta name="robots" content="index, follow" />
                <meta name="viewport" content="width=device-width, initial-scale=1" />
                <link rel="canonical" href={canonicalUrl} />

                <meta property="og:title" content={metaTitle} />
                <meta property="og:description" content={metaDescription} />
                <meta property="og:type" content="website" />
                <meta property="og:url" content={canonicalUrl} />

                <meta name="twitter:card" content="summary_large_image" />
                <meta name="twitter:title" content={metaTitle} />
                <meta name="twitter:description" content={metaDescription} />
                <script type="application/ld+json">
                    {JSON.stringify({
                        "@context": "https://schema.org",
                        "@type": "WebSite",
                        url: canonicalUrl,
                        name: metaTitle,
                        description: metaDescription,
                    })}
                </script>
            </Head>
            <Home data={data} />
        </>
    );
}
