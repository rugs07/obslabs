"use client";

import { useEffect, useRef, useState } from 'react';

interface AnimatedTextProps {
    text: string;
    className?: string;
    delay?: number;
    staggerDelay?: number;
    as?: 'h1' | 'h2' | 'h3' | 'p' | 'span';
}

export default function AnimatedText({
    text,
    className = '',
    delay = 0,
    staggerDelay = 0.08,
    as: Component = 'span'
}: AnimatedTextProps) {
    const [isVisible, setIsVisible] = useState(false);
    const ref = useRef<HTMLElement>(null);

    useEffect(() => {
        const observer = new IntersectionObserver(
            ([entry]) => {
                if (entry.isIntersecting) {
                    setTimeout(() => setIsVisible(true), delay * 1000);
                    observer.disconnect();
                }
            },
            { threshold: 0.1 }
        );

        if (ref.current) {
            observer.observe(ref.current);
        }

        return () => observer.disconnect();
    }, [delay]);

    const words = text.split(' ');

    return (
        <Component
            ref={ref as any}
            className={`block ${className}`}
        >
            {words.map((word, i) => (
                <span
                    key={i}
                    className="inline-block overflow-hidden mr-[0.3em]"
                >
                    <span
                        className={`inline-block transition-all duration-600 ${isVisible ? 'translate-y-0 opacity-100' : 'translate-y-full opacity-0'
                            }`}
                        style={{
                            transitionTimingFunction: 'cubic-bezier(0.34, 1.56, 0.64, 1)',
                            transitionDelay: `${i * staggerDelay}s`,
                        }}
                    >
                        {word}
                    </span>
                </span>
            ))}
        </Component>
    );
}
