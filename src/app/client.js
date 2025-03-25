"use client";

import dynamic from 'next/dynamic';
import { useEffect, useState , Suspense } from 'react';



const CustomCursor = dynamic(() => import('./lib/Cursor'), {
    ssr: false,
});

const ClientWrapper = ({ children }) => {
    const [isClient, setIsClient] = useState(false);

    useEffect(() => {
        setIsClient(true);
        document.body.style.overflow = 'auto';
    }, []);

    return isClient ? <div>
        <Suspense fallback={null}>
            <CustomCursor />
        </Suspense>
        {children}
    </div> : null;
}

export default ClientWrapper;
