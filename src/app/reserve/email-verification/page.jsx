'use client';
import React, { useEffect, Suspense } from "react";
import './page.scss';
import toast from 'react-hot-toast';
import Loading from "../../Loading/Loading";
import { useSearchParams } from "next/navigation";
import Cookies from "js-cookie";
import axios from "axios";

const EmailVerificationContent = () => {
    const searchParams = useSearchParams();
    const token = searchParams.get('token');

    useEffect(() => {
        if (!token) return;

        axios.post(process.env.NEXT_PUBLIC_URL + 'api/verifyEmail', { token })
            .then((res) => {
                if (res.status === 200) {
                    toast.success('Email is verified successfully');
                    Cookies.set('userVerificationToken', token);
                    window.location.href = `${process.env.NEXT_PUBLIC_URL}/reserve?verification=checked`;
                }
            })
            .catch(() => {
                toast.error('Email is not verified');
            });
    }, [token]);

    return <Loading />;
};

const EmailVerificationPage = () => {
    return (
        <Suspense fallback={<Loading />}>
            <EmailVerificationContent />
        </Suspense>
    );
};

export default EmailVerificationPage;
