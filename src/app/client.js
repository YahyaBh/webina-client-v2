"use client";

import { useEffect, useState } from 'react';
import CustomCursor from './lib/Cursor';

const ClientWrapper = ({ children }) => {
    const [isClient, setIsClient] = useState(false);

    useEffect(() => {
        setIsClient(true);
        document.body.style.overflow = 'auto';
    }, []);

    return isClient ? <div>
        <CustomCursor />
        {children}
    </div> : null;
}

export default ClientWrapper;
