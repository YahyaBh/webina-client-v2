'use client'
import React, {  useEffect } from "react"
import './page.scss'
import toast from 'react-hot-toast';
import Loading from "../../Loading/Loading";
import { useSearchParams } from "next/navigation";
import Cookies from "js-cookie";
import axios from "axios";

const page = () => {


    const searchParams = useSearchParams();
    const token = searchParams.get('token');

    useEffect(() => {

        const url = `${process.env.NEXT_PUBLIC_URL}api/verifyEmail`

        axios.post(url, { token: token })
            .then((res) => {
                if (res.status === 200) {
                    toast.success('Email is verified successfully');
                    Cookies.set('userVerificationToken');
                    window.location.href = `${process.env.NEXT_PUBLIC_URL}/reserve?verification=checked`;
                }
            })
            .catch((err) => {
                window.location.href = `${process.env.NEXT_PUBLIC_URL}/reserve`;
                console.log(err);
                toast.error('Email Is Not Verified');
            })

    }, []);


    return (
        <>
            <Loading />
        </>
    )
}

export default page
