export default function robots() {
    const baseUrl = process.env.NEXT_PUBLIC_URL || 'https://webinadigital.com';
    return {
        rules: {
            userAgent: '*',
            allow: '/',
        },
        sitemap: `${baseUrl}/sitemap.xml`,
    };
}