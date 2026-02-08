"use client";

import { ReactNode, useState } from 'react';

interface GlowButtonProps {
    children: ReactNode;
    variant?: 'primary' | 'outline' | 'glow';
    href?: string;
    onClick?: () => void;
    className?: string;
    icon?: ReactNode;
}

export default function GlowButton({
    children,
    variant = 'primary',
    href,
    onClick,
    className = '',
    icon
}: GlowButtonProps) {
    const [isHovered, setIsHovered] = useState(false);

    const baseClasses = `inline-flex items-center justify-center gap-3 text-sm font-semibold tracking-[0.05em] uppercase cursor-pointer transition-all duration-500 border-none relative overflow-hidden ${isHovered ? '-translate-y-0.5 scale-[1.02]' : 'translate-y-0 scale-100'
        }`;

    const variantClasses = {
        primary: `bg-white text-black font-bold ${isHovered
            ? 'shadow-[0_0_40px_rgba(255,255,255,0.5),0_0_80px_rgba(0,229,204,0.3)] scale-[1.03]'
            : 'shadow-[0_0_20px_rgba(255,255,255,0.2)]'
            } px-10 py-4 active:scale-95 active:shadow-[0_0_10px_rgba(255,255,255,0.4)]`,
        outline: `${isHovered ? 'bg-white/10 border-white/60' : 'bg-transparent border-white/20'} text-white border ${isHovered
            ? 'shadow-[0_0_20px_rgba(255,255,255,0.2)]'
            : ''
            } px-10 py-4 active:scale-95 active:bg-white/20`,
        glow: `bg-gradient-to-br from-white to-[#e5e4e2] text-black font-bold rounded ${isHovered
            ? 'shadow-[0_0_50px_rgba(0,229,204,0.6),0_0_100px_rgba(0,229,204,0.3)] scale-[1.03]'
            : 'shadow-[0_0_30px_rgba(0,229,204,0.2)]'
            } px-12 py-5 active:scale-95`,
    };

    const shimmerClasses = `absolute top-0 w-full h-full transform -skew-x-[20deg] pointer-events-none transition-all duration-700 ease-out ${variant === 'primary' || variant === 'glow'
        ? 'bg-gradient-to-r from-transparent via-white/80 to-transparent'
        : 'bg-gradient-to-r from-transparent via-white/30 to-transparent'
        } ${isHovered ? 'translate-x-[200%]' : '-translate-x-[200%]'}`;

    const content = (
        <>
            {/* Shimmer effect */}
            <span className={shimmerClasses} />
            {children}
            {icon && <span className="flex items-center transition-transform duration-300">{icon}</span>}
        </>
    );

    const handleMouseEnter = () => setIsHovered(true);
    const handleMouseLeave = () => setIsHovered(false);

    const combinedClasses = `${baseClasses} ${variantClasses[variant]} ${className}`;

    if (href) {
        return (
            <a
                href={href}
                className={combinedClasses}
                onMouseEnter={handleMouseEnter}
                onMouseLeave={handleMouseLeave}
            >
                {content}
            </a>
        );
    }

    return (
        <button
            onClick={onClick}
            className={combinedClasses}
            onMouseEnter={handleMouseEnter}
            onMouseLeave={handleMouseLeave}
        >
            {content}
        </button>
    );
}
