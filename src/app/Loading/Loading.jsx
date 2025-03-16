import LogoD from '../../../public/assets/Home/Navbar/WEBINA-Logo.png'
import Image from 'next/image'
import './Loading.scss'

const Loading = () => {

    return (
        <div className='home-load'>
            <Image src={LogoD} alt="logo" />
        </div>
    )
}

export default Loading