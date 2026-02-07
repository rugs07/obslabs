"use client";

import { useState, MouseEvent } from 'react';

interface RippleProps {
    children: React.ReactNode;
    onClick?: () => void;
    className?: string;
    style?: React.CSSProperties;
}

interface Ripple {
    x: number;
    y: number;
    size: number;
    key: number;
}

export default function RippleButton({ children, onClick, className = '', style = {} }: RippleProps) {
    const [ripples, setRipples] = useState<Ripple[]>([]);

    const handleClick = (e: MouseEvent<HTMLDivElement>) => {
        const rect = e.currentTarget.getBoundingClientRect();
        const size = Math.max(rect.width, rect.height);
        const x = e.clientX - rect.left - size / 2;
        const y = e.clientY - rect.top - size / 2;

        const newRipple = {
            x,
            y,
            size,
            key: Date.now(),
        };

        setRipples([...ripples, newRipple]);

        setTimeout(() => {
            setRipples((prev) => prev.filter((r) => r.key !== newRipple.key));
        }, 600);

        onClick?.();
    };

    return (
        <div
            onClick={handleClick}
            className={className}
            style={{
                position: 'relative',
                overflow: 'hidden',
                cursor: 'pointer',
                ...style,
            }}
        >
            {children}
            {ripples.map((ripple) => (
                <span
                    key={ripple.key}
                    style={{
                        position: 'absolute',
                        left: ripple.x,
                        top: ripple.y,
                        width: ripple.size,
                        height: ripple.size,
                        borderRadius: '50%',
                        background: 'rgba(255, 255, 255, 0.3)',
                        transform: 'scale(0)',
                        animation: 'ripple 0.6s ease-out',
                        pointerEvents: 'none',
                    }}
                />
            ))}
        </div>
    );
}
