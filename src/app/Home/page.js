import client from "../lib/sanityClient";
import Home from "./Home"; // Your client component

// Fetch data on the server
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
    const data = await getData(); // Fetch data on the server

    // Pass the fetched data to the client component
    return <Home data={data} />;
}