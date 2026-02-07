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

    const baseStyles: React.CSSProperties = {
        display: 'inline-flex',
        alignItems: 'center',
        justifyContent: 'center',
        gap: '0.75rem',
        padding: variant === 'glow' ? '1.25rem 3rem' : '1rem 2.5rem',
        fontSize: '0.9rem',
        fontWeight: 600,
        letterSpacing: '0.05em',
        textTransform: 'uppercase',
        cursor: 'pointer',
        transition: 'all 0.5s cubic-bezier(0.34, 1.56, 0.64, 1)',
        border: 'none',
        position: 'relative',
        overflow: 'hidden',
        transform: isHovered ? 'translateY(-2px) scale(1.02)' : 'translateY(0) scale(1)',
    };

    const variantStyles: Record<string, React.CSSProperties> = {
        primary: {
            background: 'white',
            color: 'black',
            boxShadow: isHovered
                ? '0 10px 40px rgba(255, 255, 255, 0.3), 0 0 0 1px rgba(255, 255, 255, 0.1)'
                : '0 4px 20px rgba(255, 255, 255, 0.1)',
        },
        outline: {
            background: isHovered ? 'rgba(255, 255, 255, 0.08)' : 'transparent',
            color: 'white',
            border: '1px solid rgba(255, 255, 255, 0.2)',
            borderColor: isHovered ? 'rgba(255, 255, 255, 0.4)' : 'rgba(255, 255, 255, 0.2)',
        },
        glow: {
            background: 'linear-gradient(135deg, #ffffff, #e5e4e2)',
            color: 'black',
            borderRadius: '4px',
            boxShadow: isHovered
                ? '0 0 40px rgba(255, 255, 255, 0.6), 0 0 80px rgba(255, 255, 255, 0.3), 0 20px 60px rgba(0, 0, 0, 0.4)'
                : '0 0 20px rgba(255, 255, 255, 0.2), 0 0 40px rgba(255, 255, 255, 0.05)',
        },
    };

    const combinedStyles = { ...baseStyles, ...variantStyles[variant] };

    const content = (
        <>
            {/* Shimmer effect */}
            <span
                style={{
                    position: 'absolute',
                    top: 0,
                    left: isHovered ? '-100%' : '-200%',
                    width: '100%',
                    height: '100%',
                    background: variant === 'primary'
                        ? 'linear-gradient(90deg, transparent, rgba(0, 0, 0, 0.1), transparent)'
                        : 'linear-gradient(90deg, transparent, rgba(255, 255, 255, 0.2), transparent)',
                    transform: 'skewX(-20deg)',
                    transition: 'left 0.6s ease-out',
                    pointerEvents: 'none',
                }}
            />
            {children}
            {icon && <span style={{ display: 'flex', alignItems: 'center', transition: 'transform 0.3s' }}>{icon}</span>}
        </>
    );

    const handleMouseEnter = () => setIsHovered(true);
    const handleMouseLeave = () => setIsHovered(false);

    if (href) {
        return (
            <a
                href={href}
                className={`btn-${variant} ${className}`}
                style={combinedStyles}
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
            className={`btn-${variant} btn-press ${className}`}
            style={combinedStyles}
            onMouseEnter={handleMouseEnter}
            onMouseLeave={handleMouseLeave}
        >
            {content}
        </button>
    );
}
