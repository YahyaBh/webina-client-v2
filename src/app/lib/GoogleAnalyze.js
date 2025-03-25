'use client'; // Mark as Client Component

import { useEffect } from 'react';
import Script from 'next/script';

const GoogleAnalytics = () => {
    useEffect(() => {
        window.dataLayer = window.dataLayer || [];
        function gtag() { dataLayer.push(arguments); }
        gtag('js', new Date());
        gtag('config', 'G-F64FY2RVPK');
    }, []);

    return (
        <>
            <Script
                strategy="afterInteractive"
                src={`https://www.googletagmanager.com/gtag/js?id=G-F64FY2RVPK`}
            />
        </>
    );
};

export default GoogleAnalytics;