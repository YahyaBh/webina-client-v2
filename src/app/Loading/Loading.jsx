import { motion } from 'framer-motion';
import LogoD from '../../../public/WEBINA-Logo.webp';
import Image from 'next/image';
import './Loading.scss';

const loadingVariants = {
    initial: { y: 0, opacity: 1 },
    animate: { y: 0, opacity: 1 },
    exit: {
        y: '-100vh',
        opacity: 0,
        transition: { duration: 0.5, ease: 'easeInOut' }
    },
};

const logoVariants = {
    animate: {
        scale: [1, 1.05, 1], // scales from 1 to 1.05 and back to 1
        transition: {
            duration: 2,
            ease: 'easeInOut',
            repeat: Infinity,
        },
    },
};

const Loading = () => {
    return (
        <motion.div
            className="home-load"
            variants={loadingVariants}
            initial="initial"
            animate="animate"
            exit="exit"
            style={{
                position: 'fixed',
                top: 0,
                left: 0,
                right: 0,
                bottom: 0,
                zIndex: 99,
            }}
        >
            <motion.div variants={logoVariants} animate="animate">
                <Image src={LogoD} alt="logo" />
            </motion.div>
        </motion.div>
    );
};

export default Loading;
