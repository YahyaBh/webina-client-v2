// app/blog/[slug]/page.js (Server Component)
import client from "@/app/lib/sanityClient";
import BlogPostPage from "./BlogPage";
import { notFound } from 'next/navigation';

export async function generateStaticParams() {
    const posts = await client.fetch(
        `*[_type == "post"]{
      slug {
        current
      }
    }`
    );

    return posts.map((post) => ({
        slug: post.slug.current
    }));
}

export default async function Page({ params }) {
    const postData = await client.fetch(
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

    if (!postData) notFound();

    return <BlogPostPage postData={postData} />;
}