"use client";

import CustomCursor from './lib/Cursor';

const ClientWrapper = ({ children }) => {

    return <div>
        <CustomCursor />
        {children}
    </div>
}

export default ClientWrapper;
