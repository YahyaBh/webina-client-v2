'use client';

import { useEffect, useRef } from 'react';
import ReactDOM from 'react-dom';
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
            // Update dot position with transform for smoother animation
            cursorDot.current.style.transform = `translate3d(${mouseX - 3}px, ${mouseY - 3}px, 0)`;
            // Circle follows with a delay
            circleX += (mouseX - circleX) * 0.15;
            circleY += (mouseY - circleY) * 0.15;
            cursorCircle.current.style.transform = `translate3d(${circleX - 15}px, ${circleY - 15}px, 0)`;
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
                // Hover state: hide dot, change circle styles
                if (cursorDot.current && cursorCircle.current) {
                    cursorDot.current.style.opacity = 0;
                    cursorCircle.current.style.opacity = 0.6;
                    cursorCircle.current.style.backgroundColor = '#ffe662';
                    cursorCircle.current.style.borderColor = '#000';
                    cursorCircle.current.style.width = '35px';
                    cursorCircle.current.style.height = '35px';
                }
            } else {
                // Return to default state
                if (cursorDot.current && cursorCircle.current) {
                    cursorDot.current.style.opacity = 1;
                    cursorCircle.current.style.backgroundColor = 'transparent';
                    cursorCircle.current.style.borderColor = '#ffe662';
                    cursorCircle.current.style.width = '25px';
                    cursorCircle.current.style.height = '25px';
                }
            }
        };

        document?.addEventListener('mousemove', mouseMoveHandler);
        document?.addEventListener('mouseover', handleHover);

        requestRef.current = requestAnimationFrame(animate);

        return () => {
            cancelAnimationFrame(requestRef.current);
            document?.removeEventListener('mousemove', mouseMoveHandler);
            document?.removeEventListener('mouseover', handleHover);
        };
    }, []);

    // Render cursor elements as a portal to document?.body
    return ReactDOM.createPortal(
        <>
            <div ref={cursorDot} className="cursor-dot" />
            <div ref={cursorCircle} className="cursor-circle" />
        </>,
        document?.body
    );
};

export default CustomCursor;
