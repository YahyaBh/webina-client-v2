"use client"
import React from 'react'
import LogoD from '../../../public/assets/Home/Navbar/WEBINA-Logo.png'


import './Loading.scss'
import Image from 'next/image'

const Loading = () => {



    return (
        <div className='home-load'>
            <Image src={LogoD} alt="logo" />
        </div>
    )
}

export default Loading