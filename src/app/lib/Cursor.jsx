'use client';

import { useEffect, useRef } from 'react';
import './Cursor.scss'

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

        // Hover handlers
        const hoverables = ['A', 'BUTTON', 'INPUT', 'TEXTAREA'];

        const mouseEnterHandler = () => {
            cursorDot.current.style.opacity = 0; // Hide the dot
            cursorCircle.current.style.backgroundColor = 'black'; // Fill the circle
            cursorCircle.current.style.borderColor = 'transparent'; // Remove the border
            cursorCircle.current.style.width = '40px'; // Increase size
            cursorCircle.current.style.height = '40px';
        };

        const mouseLeaveHandler = () => {
            cursorDot.current.style.opacity = 1; // Show the dot
            cursorCircle.current.style.backgroundColor = 'transparent'; // Make the circle hollow
            cursorCircle.current.style.borderColor = 'black'; // Restore the border
            cursorCircle.current.style.width = '30px'; // Restore size
            cursorCircle.current.style.height = '30px';
        };

        // Add event listeners
        document.addEventListener('mousemove', mouseMoveHandler);

        hoverables.forEach(tag => {
            document.querySelectorAll(tag).forEach(element => {
                element.addEventListener('mouseenter', mouseEnterHandler);
                element.addEventListener('mouseleave', mouseLeaveHandler);
            });
        });

        // Start animation
        requestRef.current = requestAnimationFrame(animate);

        // Cleanup
        return () => {
            cancelAnimationFrame(requestRef.current);
            document.removeEventListener('mousemove', mouseMoveHandler);

            hoverables.forEach(tag => {
                document.querySelectorAll(tag).forEach(element => {
                    element.removeEventListener('mouseenter', mouseEnterHandler);
                    element.removeEventListener('mouseleave', mouseLeaveHandler);
                });
            });
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