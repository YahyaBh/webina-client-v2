import { createClient } from '@sanity/client';
import imageUrlBuilder from '@sanity/image-url';


const client = createClient({
    projectId: process.env.NEXT_PUBLIC_SANITY_PROJECT_ID,
    dataset: process.env.NEXT_PUBLIC_SANITY_DATASET,
    useCdn: false,
    token: process.env.NEXT_PUBLIC_SANITY_PROJECT_TOEKN,
    apiVersion: process.env.NEXT_PUBLIC_SANITY_API_VERSION
});

const builder = imageUrlBuilder(client)

export function imageUrlFor(source) {
    return builder?.image(source)?.url()
}

export default client;

