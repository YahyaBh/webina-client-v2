import React, { useContext, useEffect, useState } from 'react'
// import Logo from '../../../public/assets/Home/Navbar/WEBINA2.png'
import LogoD from '../../../public/assets/Home/Navbar/WEBINA-Logo.png'


import './Loading.scss'
import Image from 'next/image'
// import { ThemeContext } from '../Context/ThemeContext'

const Loading = () => {

    // const { isDarkMode } = useContext(ThemeContext);

    // useEffect(() => {
    //     isDarkMode ? setCurrentImage(LogoD) : setCurrentImage(Logo)
    // }, [isDarkMode])



    return (
        <div className='home-load'>
            <Image src={LogoD} alt="logo" />
        </div>
    )
}

export default Loading