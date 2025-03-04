import { createClient } from '@sanity/client';
import imageUrlBuilder from '@sanity/image-url';


const client = createClient({
    projectId: '89in6ek1',
    dataset: 'production',
    useCdn: false,
    token: 'skjGTUZ8xyiSL0Br23O7sdYKJi57oFjJW6fOnqiCobbuZmcn5HY62MQdZqQjgqdA7ekpEt7DMXy8EYVdknHlw4liG1fWLOsaA6S4qp1JIM3ooLLbE1ncfgICvjaXr70jlrAcUg1jYPwUoq1Uqy8wN6AFtvvsBHnsZE8sll2To6OqVbsjZHFF',
    apiVersion: '2025-03-10'
});

const builder = imageUrlBuilder(client)

export function imageUrlFor(source) {
    return builder?.image(source)?.url()
}

export default client;

