import Cookies from 'js-cookie';
import jwt from 'jsonwebtoken';
import client from '@/app/lib/sanityClient';

export async function POST(req) {

    const { token } = await req.json();

    if (!token) {
        return new Response(JSON.stringify({ message: 'Unable to retrieve authorization token' }), { status: 400 });
    }

    try {
        const decoded = jwt.verify(token, process.env.JWT_SECRET_KEY);

        const currentTime = Math.floor(Date.now() / 1000);
        const tokenAge = currentTime - decoded.iat;

        const user = await client.fetch(`*[_type == "user" && token == $token][0]`, {
            token: token,
        });

        if (!user) {
            return new Response(JSON.stringify({ error: 'User not found' }), { status: 404 });
        } else {
            if (tokenAge > 24 * 60 * 60) {

                await client
                    .patch(user._id)
                    .set({ token: '' })
                    .commit();

                return new Response(JSON.stringify({ message: 'Token is no longer available , please resubmit verification' }), { status: 400 });
            }
            else {

                client
                    .patch(user._id)
                    .set({ verified: true, token: '' })
                    .commit();


                    

                return new Response(JSON.stringify({ error: 'User has been successfully verified', user: user }), { status: 200 });

        }
    }


    } catch (err) {
    return new Response(JSON.stringify({ error: 'Invalid or expired token', message: err.message }), { status: 400 });
}
}
