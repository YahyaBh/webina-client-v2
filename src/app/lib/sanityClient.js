import { createClient } from '@sanity/client';
import imageUrlBuilder from '@sanity/image-url';


const client = createClient({
    projectId: 'oq3x0aj3',
    dataset: 'production',
    useCdn: false,
    token: "sk8Xes4lQdDsmviiQa7woZmtySvBQa9sFGHdMF2aeQ4QaWl4Wf6jn4otYROwUZU0Kc4izxb0dzCke7KrWhynMOLcQoZu4VF3JNwWprErcNZujfh7WJxFjwDAle43TkORzSVCnKcw2Y3tcykQoU80bW9IiEm1aDSNnuiFapWXarW1z7yDpMSY",
    apiVersion: "2023-10-01"
});

const builder = imageUrlBuilder(client)

export function imageUrlFor(source) {
    return builder.image(source).url()
}

export default client;

