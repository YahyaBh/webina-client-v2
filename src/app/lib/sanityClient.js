import { createClient } from '@sanity/client';
import imageUrlBuilder from '@sanity/image-url';


const client = createClient({
    projectId: '89in6ek1',
    dataset: 'production',
    useCdn: false,
    token: 'sk6lMT3aWBmhNbjOjo6elzLHf9UFj0AFOvunSJeC9bHt8UuwukW9aNe8rVYr0QaTBkLmXUQvEm6ULGbLFtIawQWHPeK45fiFXE5lU1COQrjYKS7iaEoI3KYEIWZJky5PtBEBoaZGA2cp240pwnuNfYpBtSJ0fdl9yR6ewSyn8GESArSbxyXx',
    apiVersion: '2025-03-10'
});

const builder = imageUrlBuilder(client)

export function imageUrlFor(source) {
    return builder?.image(source)?.url()
}

export default client;

