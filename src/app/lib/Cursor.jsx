'use client'; // Ensure this runs only on the client side

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
            cursorCircle.current?.classList.add('hover');
        };

        const mouseLeaveHandler = () => {
            cursorCircle.current?.classList.remove('hover');
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