'use client';

import { useEffect, useRef } from 'react';
import './Cursor.scss';

const CustomCursor = () => {
    const cursorDot = useRef(null);
    const cursorCircle = useRef(null);
    const requestRef = useRef();

    let mouseX = 0;
    let mouseY = 0;
    let circleX = 0;
    let circleY = 0;

    const animate = () => {
        if (cursorDot.current && cursorCircle.current) {
            // Dot position (direct follow)
            cursorDot.current.style.left = `${mouseX - 3}px`;
            cursorDot.current.style.top = `${mouseY - 3}px`;

            // Circle position (delayed follow)
            circleX += (mouseX - circleX) * 0.15;
            circleY += (mouseY - circleY) * 0.15;
            cursorCircle.current.style.left = `${circleX - 15}px`;
            cursorCircle.current.style.top = `${circleY - 15}px`;
        }
        requestRef.current = requestAnimationFrame(animate);
    };

    useEffect(() => {
        const mouseMoveHandler = (e) => {
            mouseX = e.clientX;
            mouseY = e.clientY;
        };

        const handleHover = (e) => {
            const tagName = e.target.tagName;
            const hoverables = ['A', 'BUTTON', 'INPUT', 'TEXTAREA'];

            if (hoverables.includes(tagName)) {
                cursorDot.current.style.opacity = 0;
                cursorCircle.current.style.opacity = .6;
                cursorCircle.current.style.backgroundColor = '#ffe662';
                cursorCircle.current.style.borderColor = '#000';
                cursorCircle.current.style.width = '35px';
                cursorCircle.current.style.height = '35px';
            } else {
                cursorDot.current.style.opacity = 1;
                cursorCircle.current.style.backgroundColor = 'transparent';
                cursorCircle.current.style.borderColor = '#ffe662'; // Restore the border
                cursorCircle.current.style.width = '25px'; // Restore size
                cursorCircle.current.style.height = '25px';
            }
        };

        // Add event listeners
        document.addEventListener('mousemove', mouseMoveHandler);
        document.addEventListener('mouseover', handleHover); // Delegated hover detection

        // Start animation
        requestRef.current = requestAnimationFrame(animate);

        // Cleanup
        return () => {
            cancelAnimationFrame(requestRef.current);
            document.removeEventListener('mousemove', mouseMoveHandler);
            document.removeEventListener('mouseover', handleHover);
        };
    }, []);

    return (
        <>
            <div ref={cursorDot} className="cursor-dot" />
            <div ref={cursorCircle} className="cursor-circle" />
        </>
    );
};

export default CustomCursor;
