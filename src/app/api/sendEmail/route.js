import { NextResponse } from 'next/server';
import nodemailer from 'nodemailer';
import client from '@/app/lib/sanityClient';


const jwt = require('jsonwebtoken');

export async function POST(request) {
    const { user } = await request.json();

    if (!user.first_name || !user.last_name || !user.email || !user.phone || !user.service || !user.meeting || !user.date || !user.time) {
        return NextResponse.json({ message: 'Please fill all the fields' }, { status: 400 });
    } else {
        const transporter = nodemailer.createTransport({
            service: "gmail",
            port: 587,
            auth: {
                user: process.env.EMAIL_USER,
                pass: process.env.EMAIL_PASSWORD
            }
        });

        try {

            const findEmail = await client.fetch(`*[_type == "user" && email == "${user.email}"]`);

            if (findEmail.length > 0 && findEmail[0].token === '') {
                return NextResponse.json({ message: 'Email already registered and verified' }, { status: 400 });
            } else {

                const newUser = {
                    _type: 'user',
                    name: user.name + ' ' + user.last_name,
                    email: user.email,
                    phone: user.phone,
                    service: {
                        _type: 'reference',
                        _ref: user?.service?._ref || '',
                    },
                    meetingDate: user.date,
                    meetingTime: user.time,
                    meetingType: Array.isArray(user.meeting) ? user.meeting : [user.meeting],
                };

                const result = await client.create(newUser);

                const token = jwt.sign({ userId: result._id, email: user.email }, process.env.JWT_SECRET_KEY, { expiresIn: '24h' });

                await client
                    .patch(result._id)
                    .set({ token: token })
                    .commit();

                try {

                    const verificationLink = `${process.env.NEXT_PUBLIC_URL}consultation/email-verification?token=${token}`;

                    await transporter.sendMail({
                        from: process.env.EMAIL_USER,
                        to: user.email,
                        subject: `WEBINA DIGITAL EMAIL VERIFICATION REQUIRED`,
                        html: `
                            <html>
                                <body>
                                <div style="max-width: 600px; margin: 0 auto; padding: 20px; background-color: #ffffff; border-radius: 8px; box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);">
                                    <div style="text-align: center; padding: 20px 0;">
                                    <img
                                        src="https://studyabroadagency.com/logo.png"
                                        alt="StudyAbroad Agency Logo"
                                        style="max-width: 150px;"
                                    />
                                    </div>
                        
                                    <div style="padding: 20px; text-align: center;">
                                    <h1 style="font-size: 24px; color: #333333; margin-bottom: 20px;">
                                        Verify Your Email Address
                                    </h1>
                                    <p style="font-size: 16px; color: #555555; line-height: 1.6;">
                                        Thank you for signing up with StudyAbroad Agency! To complete your registration, please verify your email address by clicking the button below:
                                    </p>
                                    <a
                                        href="${verificationLink}"
                                        style="display: inline-block; margin: 20px 0; padding: 12px 24px; font-size: 16px; color: #ffffff; background-color: #007bff; border-radius: 4px; text-decoration: none;"
                                    >
                                        Verify Email
                                    </a>
                                    <p style="font-size: 16px; color: #555555; line-height: 1.6;">
                                        If you did not sign up for an account with StudyAbroad Agency, please ignore this email.
                                    </p>
                                    </div>
                        
                                    <div style="text-align: center; padding: 20px; font-size: 14px; color: #888888;">
                                    <p style="margin: 0;">&copy; 2023 StudyAbroad Agency. All rights reserved.</p>
                                    <p style="margin: 0;">123 Education Street, Knowledge City, World 12345</p>
                                    </div>
                                </div>
                                </body>
                            </html>
                            `,
                    });

                    return NextResponse.json({ message: 'Email sent succesfully' });

                } catch (error) {
                    return NextResponse.json({ error: 'Failed to send email', message: error.message }, { status: 500 });
                }
            }



        } catch (error) {
            return NextResponse.json({ message: 'Failed to create user or send email', error: error.message }, { status: 500 });
        }
    }





}
