import { createClient } from '@sanity/client';
import imageUrlBuilder from '@sanity/image-url';


const client = createClient({
    projectId: 'oq3x0aj3',
    dataset: 'production',
    useCdn: false,
    token: "skiux9c90MWxXJvCQEmdpJKQLOoHk35F6FhgQaPNNIfLil2ixbm0UVj6p5sEokPTl5Umi1yXgSKvQZWjiGv8s7PYHp4DL08qEpA0h52mb6ueQWHS8gTdgE1nJJUDJZeu9sv0evWy1xxFUVpuO2CfJKp9uKqIYdQDzEyb2luW9JRGl60PCXBv",
    apiVersion: "2023-10-01"
});

const builder = imageUrlBuilder(client)

export function imageUrlFor(source) {
    return builder.image(source).url()
}

export default client;

