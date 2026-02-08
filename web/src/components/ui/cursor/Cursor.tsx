"use client";

import { useEffect, useState } from 'react';
import { motion, useMotionValue, useSpring } from 'framer-motion';

export default function Cursor() {
    const [isHovered, setIsHovered] = useState(false);
    const [isVisible, setIsVisible] = useState(false);

    const mouseX = useMotionValue(0);
    const mouseY = useMotionValue(0);

    const springConfig = { damping: 25, stiffness: 400, mass: 0.5 };
    const springX = useSpring(mouseX, springConfig);
    const springY = useSpring(mouseY, springConfig);

    useEffect(() => {
        // Only run on client and non-touch devices
        if (typeof window === 'undefined' || window.matchMedia('(pointer: coarse)').matches) return;

        setIsVisible(true);

        const moveMouse = (e: MouseEvent) => {
            mouseX.set(e.clientX);
            mouseY.set(e.clientY);
        };

        const handleMouseEnter = () => setIsHovered(true);
        const handleMouseLeave = () => setIsHovered(false);

        // Add event listeners to all interactive elements
        const addListeners = () => {
            document.querySelectorAll('a, button, input, textarea, select, [role="button"]').forEach((el) => {
                el.addEventListener('mouseenter', handleMouseEnter);
                el.addEventListener('mouseleave', handleMouseLeave);
            });
        };

        // Initial add
        addListeners();

        // Observe DOM changes to add listeners to new elements
        const observer = new MutationObserver(addListeners);
        observer.observe(document.body, { childList: true, subtree: true });

        window.addEventListener('mousemove', moveMouse);

        return () => {
            window.removeEventListener('mousemove', moveMouse);
            observer.disconnect();
            document.querySelectorAll('a, button, input').forEach((el) => {
                el.removeEventListener('mouseenter', handleMouseEnter);
                el.removeEventListener('mouseleave', handleMouseLeave);
            });
        };
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, []);

    if (!isVisible) return null;

    return (
        <div className="fixed inset-0 z-[9999] pointer-events-none mix-blend-difference overflow-hidden">
            {/* Main Cursor Dot */}
            <motion.div
                className="absolute w-3 h-3 bg-white rounded-full -translate-x-1/2 -translate-y-1/2"
                style={{
                    x: mouseX,
                    y: mouseY,
                    scale: isHovered ? 0 : 1,
                }}
                transition={{ duration: 0.2 }}
            />

            {/* Trailing Ring */}
            <motion.div
                className="absolute w-8 h-8 rounded-full border border-white/50 -translate-x-1/2 -translate-y-1/2"
                style={{
                    x: springX,
                    y: springY,
                }}
                animate={{
                    scale: isHovered ? 2.5 : 1,
                    backgroundColor: isHovered ? 'rgba(255, 255, 255, 0.1)' : 'rgba(255, 255, 255, 0)',
                    borderColor: isHovered ? 'rgba(255, 255, 255, 0)' : 'rgba(255, 255, 255, 0.5)',
                }}
                transition={{ type: "spring", stiffness: 400, damping: 25 }}
            />
        </div>
    );
}
