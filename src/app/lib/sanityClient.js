import { createClient } from '@sanity/client';
import imageUrlBuilder from '@sanity/image-url';


const client = createClient({
    projectId: '89in6ek1',
    dataset: 'website_client',
    useCdn: false,
    token: 'skNejp46NBPRG3edLQUU588rMdrvnPDJoTkAauWTzXM4yclvIYTsMnwAsYaIYEY2v5ShAG3j5piyzQ5DBHkFYkvCDrM91DkdARgIa4td3PrDgcsAJAS6UCdyjlEgsOGESczxC17Jj5Z0vrVqnV8Mm2ZfWoGw0S3pOO5vo5QLsMIqat7DgF0x',
    apiVersion: '2025-03-10'
});

const builder = imageUrlBuilder(client)

export function imageUrlFor(source) {
    return builder?.image(source)?.url()
}

export default client;

