"use client";

import { useEffect } from 'react';
import CustomCursor from './lib/Cursor';

const ClientWrapper = ({ children }) => {

    useEffect(() => {
        if (typeof window !== 'undefined') {
            document.body.style.overflow = 'hidden';
        }
    }, []);

    return <div>
        <CustomCursor />
        {children}
    </div>
}

export default ClientWrapper;
