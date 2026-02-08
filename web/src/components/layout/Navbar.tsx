"use client";

import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import Link from 'next/link';
import ShardButton from '@/components/ui/buttons/ShardButton';
import MagneticButton from '@/components/ui/buttons/MagneticButton';

export default function Navbar() {
    const [scrolled, setScrolled] = useState(false);
    const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            setScrolled(window.scrollY > 50);
        };
        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    const navItems = [
        { name: 'Work', href: '/#work' },
        { name: 'Services', href: '/#services' },
        { name: 'Process', href: '/#process' },
    ];

    return (
        <>
            <motion.nav
                initial={{ y: -100 }}
                animate={{ y: 0 }}
                transition={{ duration: 1, ease: [0.16, 1, 0.3, 1] }}
                className={`fixed top-0 left-0 w-full z-50 px-6 md:px-12 transition-all duration-500 ${scrolled ? 'py-4' : 'py-6'
                    }`}
            >
                <div className={`max-w-7xl mx-auto flex items-center justify-between p-2 rounded-full transition-all duration-500 ${scrolled
                        ? 'bg-[#030308]/80 backdrop-blur-xl border border-white/10 shadow-lg shadow-black/20 pr-3 pl-6'
                        : 'bg-transparent border-transparent px-0'
                    }`}>

                    {/* Logo Area */}
                    <Link href="/" className="group flex items-center gap-3">
                        <div className="w-8 h-8 bg-white/5 border border-white/10 rounded-full flex items-center justify-center backdrop-blur-md group-hover:bg-white/10 transition-colors">
                            <div className="w-3 h-3 bg-white/80 rounded-sm transform rotate-45 group-hover:rotate-90 transition-transform duration-700" />
                        </div>
                        <span className="text-sm font-bold tracking-[0.2em] text-white uppercase opacity-80 group-hover:opacity-100 transition-opacity">
                            Obsidian
                        </span>
                    </Link>

                    {/* Desktop Nav */}
                    <div className={`hidden md:flex items-center gap-2 p-1.5 rounded-full transition-all duration-500 ${scrolled ? 'bg-transparent border-transparent' : 'bg-[#030308]/50 border border-white/10 backdrop-blur-md'
                        }`}>
                        {navItems.map((item) => (
                            <MagneticButton key={item.name} strength={20}>
                                <Link
                                    href={item.href}
                                    className="px-5 py-2 rounded-full text-[11px] font-medium tracking-[0.15em] text-white/60 uppercase hover:text-white hover:bg-white/5 transition-all"
                                >
                                    {item.name}
                                </Link>
                            </MagneticButton>
                        ))}
                    </div>

                    {/* Contact Action */}
                    <div className="hidden md:block">
                        <MagneticButton strength={30}>
                            <Link
                                href="/contact"
                                className={`flex items-center justify-center rounded-full text-[11px] font-bold tracking-[0.15em] uppercase transition-all duration-500 ${scrolled
                                        ? 'bg-white text-black hover:bg-[#00d4ff] h-8 px-5'
                                        : 'bg-white text-black hover:bg-[#00d4ff] h-10 px-6'
                                    }`}
                            >
                                Get in Touch
                            </Link>
                        </MagneticButton>
                    </div>

                    {/* Mobile Toggle */}
                    <button
                        onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
                        className="md:hidden p-2 text-white/70 hover:text-white"
                    >
                        <div className="space-y-1.5">
                            <span className={`block w-6 h-px bg-current transition-transform duration-300 ${mobileMenuOpen ? 'rotate-45 translate-y-[3.5px]' : ''}`} />
                            <span className={`block w-6 h-px bg-current transition-transform duration-300 ${mobileMenuOpen ? '-rotate-45 -translate-y-[3.5px]' : ''}`} />
                        </div>
                    </button>
                </div>
            </motion.nav>

            {/* Mobile Menu Overlay */}
            <AnimatePresence>
                {mobileMenuOpen && (
                    <motion.div
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        exit={{ opacity: 0 }}
                        className="fixed inset-0 z-40 bg-[#030308]/95 backdrop-blur-xl flex items-center justify-center"
                    >
                        <div className="flex flex-col items-center gap-8">
                            {navItems.map((item, i) => (
                                <motion.div
                                    key={item.name}
                                    initial={{ opacity: 0, y: 20 }}
                                    animate={{ opacity: 1, y: 0 }}
                                    transition={{ delay: i * 0.1 }}
                                >
                                    <Link
                                        href={item.href}
                                        onClick={() => setMobileMenuOpen(false)}
                                        className="text-3xl font-light tracking-widest text-white hover:text-[#00d4ff] transition-colors uppercase"
                                    >
                                        {item.name}
                                    </Link>
                                </motion.div>
                            ))}
                        </div>
                    </motion.div>
                )}
            </AnimatePresence>
        </>
    );
}
