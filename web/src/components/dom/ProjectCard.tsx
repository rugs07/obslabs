"use client";

import { ReactNode, useRef, useState } from 'react';

interface ProjectCardProps {
    title: string;
    subtitle: string;
    index: number;
    children?: ReactNode;
}

export default function ProjectCard({ title, subtitle, index }: ProjectCardProps) {
    const cardRef = useRef<HTMLDivElement>(null);
    const [transform, setTransform] = useState('perspective(1000px) rotateX(0) rotateY(0)');
    const [glowPosition, setGlowPosition] = useState({ x: 50, y: 50 });

    const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
        if (!cardRef.current) return;

        const rect = cardRef.current.getBoundingClientRect();
        const x = e.clientX - rect.left;
        const y = e.clientY - rect.top;

        const centerX = rect.width / 2;
        const centerY = rect.height / 2;

        const rotateX = (y - centerY) / 20;
        const rotateY = (centerX - x) / 20;

        setTransform(`perspective(1000px) rotateX(${rotateX}deg) rotateY(${rotateY}deg) scale(1.05)`);
        setGlowPosition({ x: (x / rect.width) * 100, y: (y / rect.height) * 100 });
    };

    const handleMouseLeave = () => {
        setTransform('perspective(1000px) rotateX(0) rotateY(0) scale(1)');
        setGlowPosition({ x: 50, y: 50 });
    };

    return (
        <div
            ref={cardRef}
            onMouseMove={handleMouseMove}
            onMouseLeave={handleMouseLeave}
            style={{
                minWidth: '55vw',
                height: '55vh',
                scrollSnapAlign: 'center',
                borderRadius: '12px',
                display: 'flex',
                flexDirection: 'column',
                justifyContent: 'flex-end',
                padding: '2.5rem',
                position: 'relative',
                overflow: 'hidden',
                background: 'rgba(255, 255, 255, 0.02)',
                border: '1px solid rgba(255, 255, 255, 0.1)',
                transform,
                transition: 'transform 0.2s ease-out, box-shadow 0.4s ease',
                cursor: 'pointer',
                boxShadow: transform.includes('scale(1.05)')
                    ? '0 30px 100px rgba(0, 0, 0, 0.9), 0 0 80px rgba(255, 255, 255, 0.1), 0 2px 4px rgba(255, 255, 255, 0.2)'
                    : '0 10px 40px rgba(0, 0, 0, 0.6)',
            }}
        >
            {/* Animated glow effect following cursor */}
            <div
                style={{
                    position: 'absolute',
                    top: 0,
                    left: 0,
                    right: 0,
                    bottom: 0,
                    background: `radial-gradient(circle at ${glowPosition.x}% ${glowPosition.y}%, rgba(255, 255, 255, 0.1) 0%, transparent 50%)`,
                    pointerEvents: 'none',
                    transition: 'opacity 0.3s',
                    opacity: transform.includes('scale(1.05)') ? 1 : 0,
                }}
            />

            {/* Top accent line */}
            <div
                style={{
                    position: 'absolute',
                    top: 0,
                    left: 0,
                    right: 0,
                    height: '1px',
                    background: 'linear-gradient(90deg, transparent, rgba(255, 255, 255, 0.3), transparent)',
                    opacity: transform.includes('scale(1.05)') ? 1 : 0,
                    transition: 'opacity 0.3s',
                }}
            />

            {/* Gradient overlay */}
            <div
                style={{
                    position: 'absolute',
                    top: 0,
                    left: 0,
                    width: '100%',
                    height: '100%',
                    background: 'linear-gradient(to top, rgba(5, 5, 7, 0.95) 0%, rgba(5, 5, 7, 0.5) 40%, transparent 100%)',
                    zIndex: 1,
                    pointerEvents: 'none',
                }}
            />

            {/* Content */}
            <div style={{ position: 'relative', zIndex: 2 }}>
                <div
                    style={{
                        fontSize: '0.75rem',
                        fontWeight: 500,
                        letterSpacing: '0.2em',
                        color: '#ffffff',
                        marginBottom: '0.75rem',
                        textTransform: 'uppercase',
                    }}
                >
                    Project {String(index).padStart(2, '0')}
                </div>
                <h3
                    style={{
                        fontSize: 'clamp(1.5rem, 3vw, 2.5rem)',
                        fontWeight: 300,
                        marginBottom: '0.5rem',
                        fontFamily: 'var(--font-display)',
                    }}
                >
                    {title}
                </h3>
                <p style={{ color: '#8a8a9a', fontSize: '1rem' }}>{subtitle}</p>

                {/* View button */}
                <div
                    style={{
                        display: 'inline-flex',
                        alignItems: 'center',
                        gap: '0.5rem',
                        marginTop: '1.5rem',
                        fontSize: '0.85rem',
                        fontWeight: 500,
                        letterSpacing: '0.1em',
                        color: 'white',
                        opacity: transform.includes('scale(1.05)') ? 1 : 0.7,
                        transition: 'opacity 0.3s, transform 0.3s',
                        transform: transform.includes('scale(1.05)') ? 'translateX(8px)' : 'none',
                    }}
                >
                    VIEW EXPERIENCE
                    <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                        <path d="M5 12h14M12 5l7 7-7 7" />
                    </svg>
                </div>
            </div>
        </div>
    );
}
