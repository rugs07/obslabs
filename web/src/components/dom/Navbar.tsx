"use client";

import { useState, useEffect } from 'react';
import Image from 'next/image';

export default function Navbar() {
    const [scrolled, setScrolled] = useState(false);
    const [isVisible, setIsVisible] = useState(false);

    useEffect(() => {
        // Animate navbar on mount
        setTimeout(() => setIsVisible(true), 100);

        const handleScroll = () => {
            setScrolled(window.scrollY > 50);
        };

        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    const navLinks = [
        { label: 'VISION', href: '#vision' },
        { label: 'PORTFOLIO', href: '#portfolio' },
        { label: 'SERVICES', href: '#services' },
    ];

    return (
        <nav
            style={{
                position: 'fixed',
                top: 0,
                left: 0,
                width: '100%',
                height: 'var(--nav-height)',
                display: 'flex',
                justifyContent: 'space-between',
                alignItems: 'center',
                padding: '0 clamp(1.5rem, 4vw, 4rem)',
                zIndex: 100,
                background: scrolled ? 'rgba(5, 5, 7, 0.7)' : 'transparent',
                backdropFilter: scrolled ? 'blur(20px) saturate(180%)' : 'none',
                borderBottom: scrolled ? '1px solid rgba(255, 255, 255, 0.08)' : '1px solid transparent',
                transition: 'all 0.5s cubic-bezier(0.34, 1.56, 0.64, 1)',
                opacity: isVisible ? 1 : 0,
                transform: isVisible ? 'translateY(0)' : 'translateY(-20px)',
                boxShadow: scrolled ? '0 10px 40px rgba(0,0,0,0.5)' : 'none',
            }}
        >
            {/* Logo */}
            <a
                href="#vision"
                style={{
                    display: 'flex',
                    alignItems: 'center',
                    gap: '1rem',
                    cursor: 'pointer',
                }}
            >
                <Image
                    src="/AgencyLogo.png"
                    alt="ObsidianLabs"
                    width={40}
                    height={40}
                    style={{ filter: 'invert(1)', opacity: 0.9 }}
                />
                <span
                    style={{
                        fontWeight: 700,
                        fontSize: '1.1rem',
                        letterSpacing: '0.1em',
                        fontFamily: 'var(--font-display)',
                    }}
                >
                    OBSIDIAN
                </span>
            </a>

            {/* Nav Links */}
            <div
                style={{
                    display: 'flex',
                    alignItems: 'center',
                    gap: '3rem',
                }}
                className="hide-mobile"
            >
                {navLinks.map((link, i) => (
                    <a
                        key={link.label}
                        href={link.href}
                        style={{
                            position: 'relative',
                            fontSize: '0.8rem',
                            fontWeight: 400,
                            letterSpacing: '0.1em',
                            color: 'rgba(255, 255, 255, 0.7)',
                            transition: 'color 0.3s',
                            padding: '0.5rem 0',
                        }}
                        onMouseEnter={(e) => {
                            e.currentTarget.style.color = 'white';
                            const underline = e.currentTarget.querySelector('.nav-underline') as HTMLElement;
                            if (underline) underline.style.transform = 'scaleX(1)';
                        }}
                        onMouseLeave={(e) => {
                            e.currentTarget.style.color = 'rgba(255, 255, 255, 0.7)';
                            const underline = e.currentTarget.querySelector('.nav-underline') as HTMLElement;
                            if (underline) underline.style.transform = 'scaleX(0)';
                        }}
                    >
                        {link.label}
                        <span
                            className="nav-underline"
                            style={{
                                position: 'absolute',
                                bottom: 0,
                                left: 0,
                                width: '100%',
                                height: '1px',
                                background: 'linear-gradient(90deg, #00e5cc, #0099cc)',
                                transform: 'scaleX(0)',
                                transformOrigin: 'left',
                                transition: 'transform 0.3s cubic-bezier(0.4, 0, 0.2, 1)',
                            }}
                        />
                    </a>
                ))}

                {/* CTA Button */}
                <a
                    href="#contact"
                    style={{
                        display: 'inline-flex',
                        alignItems: 'center',
                        gap: '0.5rem',
                        padding: '0.75rem 1.5rem',
                        background: 'transparent',
                        border: '1px solid rgba(255, 255, 255, 0.2)',
                        color: 'white',
                        fontSize: '0.75rem',
                        fontWeight: 500,
                        letterSpacing: '0.1em',
                        cursor: 'pointer',
                        transition: 'all 0.3s',
                    }}
                    onMouseEnter={(e) => {
                        e.currentTarget.style.borderColor = '#00e5cc';
                        e.currentTarget.style.background = 'rgba(0, 229, 204, 0.1)';
                        e.currentTarget.style.boxShadow = '0 0 20px rgba(0, 229, 204, 0.2)';
                    }}
                    onMouseLeave={(e) => {
                        e.currentTarget.style.borderColor = 'rgba(255, 255, 255, 0.2)';
                        e.currentTarget.style.background = 'transparent';
                        e.currentTarget.style.boxShadow = 'none';
                    }}
                >
                    BOOK A CALL
                    <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                        <path d="M5 12h14M12 5l7 7-7 7" />
                    </svg>
                </a>
            </div>

            {/* Mobile Menu Button */}
            <button
                className="hide-desktop"
                style={{
                    background: 'none',
                    border: 'none',
                    color: 'white',
                    cursor: 'pointer',
                    padding: '0.5rem',
                }}
            >
                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                    <path d="M3 12h18M3 6h18M3 18h18" />
                </svg>
            </button>
        </nav>
    );
}
