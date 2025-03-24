import Head from "next/head";
import client from "@/app/lib/sanityClient";
import BlogPostPage from "./BlogPage";
import { notFound } from "next/navigation";

export async function generateStaticParams() {
  const posts = await client.fetch(
    `*[_type == "post"]{
      slug {
        current
      }
    }`
  );

  return posts.map((post) => ({
    slug: post.slug.current,
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

  const pageTitle = `${postData.title} | WEBINA DIGITAL`;
  const pageDescription = `Read about ${postData.title} on our blog. Discover insights and trends in web development, UI/UX design, and digital transformation at WEBINA DIGITAL.`;
  const canonicalUrl = `https://webinadigital.com/blog/${postData.slug.current}`
  
  
  return (
    <>
      <Head>
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <title>{pageTitle}</title>
        <meta name="description" content={pageDescription} />
        <meta name="robots" content="index, follow" />
        <link rel="canonical" href={canonicalUrl} />
        <meta property="og:title" content={pageTitle} />
        <meta property="og:description" content={pageDescription} />
        <meta property="og:url" content={canonicalUrl} />
        <meta property="og:type" content="article" />
        {postData.mainImage?.asset?.url && (
          <meta property="og:image" content={postData.mainImage.asset.url} />
        )}
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content={pageTitle} />
        <meta name="twitter:description" content={pageDescription} />
        {postData.mainImage?.asset?.url && (
          <meta name="twitter:image" content={postData.mainImage.asset.url} />
        )}
        <script type="application/ld+json">
          {JSON.stringify({
            "@context": canonicalUrl,
            "@type": "BlogPosting",
            headline: postData.title,
            image: postData.mainImage?.asset?.url || "",
            author: {
              "@type": "Person",
              name: postData.author?.name || "WEBINA DIGITAL",
            },
            datePublished: postData.publishedAt,
            url: canonicalUrl,
            description: pageDescription,
          })}
        </script>
      </Head>
      <BlogPostPage postData={postData} />
    </>
  );
}
