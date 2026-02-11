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

    const isHovered = transform.includes('scale(1.05)');

    return (
        <div
            ref={cardRef}
            onMouseMove={handleMouseMove}
            onMouseLeave={handleMouseLeave}
            className="w-full h-[400px] rounded-[6px] flex flex-col justify-end p-10 relative overflow-hidden bg-black/40 backdrop-blur-sm border border-white/10 cursor-pointer transition-all duration-500 hover:border-white/30 hover:bg-black/60"
            style={{
                transform,
                boxShadow: isHovered
                    ? '0 30px 100px rgba(0, 0, 0, 0.9), 0 0 80px rgba(255, 255, 255, 0.1), 0 2px 4px rgba(255, 255, 255, 0.2)'
                    : '0 10px 40px rgba(0, 0, 0, 0.6)',
            }}
        >
            {/* Animated glow effect following cursor */}
            <div
                className={`absolute inset-0 pointer-events-none transition-opacity duration-300 ${isHovered ? 'opacity-100' : 'opacity-0'}`}
                style={{
                    background: `radial-gradient(circle at ${glowPosition.x}% ${glowPosition.y}%, rgba(255, 255, 255, 0.1) 0%, transparent 50%)`,
                }}
            />

            {/* Top accent line */}
            <div
                className={`absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-white/30 to-transparent transition-opacity duration-300 ${isHovered ? 'opacity-100' : 'opacity-0'}`}
            />

            {/* Dynamic Background Gradient Mesh */}
            <div className={`absolute inset-0 opacity-40 transition-opacity duration-500 group-hover:opacity-60 bg-[radial-gradient(circle_at_50%_50%,_var(--tw-gradient-stops))] ${index === 1 ? 'from-purple-900/50 via-black to-black' :
                index === 2 ? 'from-cyan-900/50 via-black to-black' :
                    index === 3 ? 'from-pink-900/50 via-black to-black' :
                        'from-gray-900/50 via-black to-black'
                }`} />

            {/* Grid Pattern Overlay */}
            <div className="absolute inset-0 opacity-20 bg-[linear-gradient(rgba(255,255,255,0.05)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.05)_1px,transparent_1px)] bg-[size:40px_40px] [mask-image:radial-gradient(ellipse_at_center,black_40%,transparent_80%)]" />

            {/* Gradient overlay for text legibility */}
            <div className="absolute inset-0 bg-gradient-to-t from-[rgba(5,5,8,0.95)] via-[rgba(5,5,8,0.4)] to-transparent z-[1] pointer-events-none" />

            {/* Content */}
            <div className="relative z-[2]">
                <div className="text-sm font-semibold tracking-[0.15em] text-cyan-200 mb-4 uppercase">
                    Project {String(index).padStart(2, '0')}
                </div>
                <h3 className="text-3xl md:text-4xl font-bold mb-4 font-display leading-tight">
                    {title}
                </h3>
                <p className="text-lg text-gray-200 font-light leading-[1.6]">{subtitle}</p>

                {/* View button */}
                <div
                    className={`inline-flex items-center gap-3 mt-8 text-base font-bold tracking-wide text-white transition-all duration-300 ${isHovered ? 'opacity-100 translate-x-2' : 'opacity-70 translate-x-0'
                        }`}
                >
                    VIEW EXPERIENCE
                    <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3">
                        <path d="M5 12h14M12 5l7 7-7 7" />
                    </svg>
                </div>
            </div>
        </div>
    );
}
