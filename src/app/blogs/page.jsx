import BlogPage from "./layout";

export const metadata = {
    title: "Our Blog | Webina Digital",
    description: "Stay updated with the latest insights on web development, UI/UX design, and digital transformation.",
    openGraph: {
        title: "Our Blog | Webina Digital",
        description: "Stay updated with the latest insights on web development, UI/UX design, and digital transformation.",
        type: "website",
        url: "https://webinadigital.com/blog",
    },
};

export default function BlogLayout() {
    return <BlogPage />;
}