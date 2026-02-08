"use client";

import { useEffect, useRef, useState, ReactNode } from 'react';

interface ScrollRevealProps {
    children: ReactNode;
    direction?: 'up' | 'down' | 'left' | 'right' | 'scale';
    delay?: number;
    duration?: number;
    className?: string;
    once?: boolean;
}

export default function ScrollReveal({
    children,
    direction = 'up',
    delay = 0,
    duration = 0.8,
    className = '',
    once = true
}: ScrollRevealProps) {
    const [isVisible, setIsVisible] = useState(false);
    const ref = useRef<HTMLDivElement>(null);

    useEffect(() => {
        const observer = new IntersectionObserver(
            ([entry]) => {
                if (entry.isIntersecting) {
                    setIsVisible(true);
                    if (once) observer.disconnect();
                } else if (!once) {
                    setIsVisible(false);
                }
            },
            { threshold: 0.1, rootMargin: '0px 0px -50px 0px' }
        );

        if (ref.current) {
            observer.observe(ref.current);
        }

        return () => observer.disconnect();
    }, [once]);

    const getInitialTransform = () => {
        switch (direction) {
            case 'up': return 'translateY(40px)';
            case 'down': return 'translateY(-40px)';
            case 'left': return 'translateX(40px)';
            case 'right': return 'translateX(-40px)';
            case 'scale': return 'scale(0.9)';
            default: return 'translateY(40px)';
        }
    };

    return (
        <div
            ref={ref}
            className={`transition-all ${className}`}
            style={{
                opacity: isVisible ? 1 : 0,
                transform: isVisible ? 'none' : getInitialTransform(),
                filter: isVisible ? 'blur(0px)' : 'blur(10px)',
                transitionDuration: `${duration}s`,
                transitionTimingFunction: 'cubic-bezier(0.34, 1.56, 0.64, 1)',
                transitionDelay: `${delay}s`,
            }}
        >
            {children}
        </div>
    );
}
