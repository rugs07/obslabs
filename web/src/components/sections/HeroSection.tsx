"use client";

import { useRef } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';
import ScrollReveal from '../dom/ScrollReveal';
import ShardButton from '../ui/buttons/ShardButton';
import MagneticButton from '../ui/buttons/MagneticButton';

const stats = [
    { value: '100+', label: 'Projects Delivered', suffix: '' },
    { value: '50', label: 'Global Clients', suffix: '+' },
    { value: '99', label: 'Client Satisfaction', suffix: '%' },
];

export default function HeroSection() {
    const heroRef = useRef<HTMLDivElement>(null);
    const { scrollYProgress } = useScroll({
        target: heroRef,
        offset: ["start start", "end start"]
    });

    const heroOpacity = useTransform(scrollYProgress, [0, 0.5], [1, 0]);
    const heroScale = useTransform(scrollYProgress, [0, 0.5], [1, 0.95]);

    return (
        <motion.section
            ref={heroRef}
            style={{ opacity: heroOpacity, scale: heroScale }}
            className="relative min-h-screen flex items-center justify-center overflow-hidden"
        >
            {/* Hero Content */}
            <div className="relative z-10 w-full max-w-7xl mx-auto px-6 md:px-12 py-40">
                <div className="grid lg:grid-cols-12 gap-16 lg:gap-24 items-center">

                    {/* Left Column - Main Headline (col-span-7) */}
                    <div className="lg:col-span-7 text-left">
                        <ScrollReveal>
                            <div className="inline-flex items-center gap-4 px-6 py-3 bg-[#030308]/50 border border-white/10 rounded-full backdrop-blur-md mb-8">
                                <span className="w-1.5 h-1.5 bg-white rounded-full animate-pulse" />
                                <span className="text-[10px] font-medium tracking-[0.3em] text-white/60 uppercase">ObsidianLabs v2.0</span>
                            </div>
                        </ScrollReveal>

                        <ScrollReveal delay={0.1}>
                            <h1 className="text-5xl md:text-7xl lg:text-8xl font-bold leading-tight tracking-tight mb-8">
                                <span className="text-white block font-light tracking-[0.1em] text-2xl md:text-3xl lg:text-4xl mb-4 opacity-80">ARCHITECTURE FOR THE</span>
                                <span className="text-transparent bg-clip-text bg-gradient-to-b from-white via-white to-white/10 filter drop-shadow-[0_0_30px_rgba(255,255,255,0.3)]">
                                    INFINITE
                                </span>
                            </h1>
                        </ScrollReveal>

                        <ScrollReveal delay={0.2}>
                            <p className="text-lg md:text-xl text-white/40 max-w-lg leading-relaxed font-light tracking-wide mb-12">
                                Sculpting digital voids into tangible realities.
                                <br className="hidden md:block" />
                                Engineered for the visionary.
                            </p>
                        </ScrollReveal>

                        <ScrollReveal delay={0.3}>
                            <div className="flex flex-col sm:flex-row items-center sm:items-start gap-6">
                                <MagneticButton strength={40}>
                                    <ShardButton href="/vault" variant="primary" size="lg">
                                        <span className="relative z-10 flex items-center gap-3 px-4">
                                            <span className="tracking-[0.1em]">ENTER THE VAULT</span>
                                            <svg className="w-4 h-4 text-white/50" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M14 5l7 7m0 0l-7 7m7-7H3" /></svg>
                                        </span>
                                    </ShardButton>
                                </MagneticButton>
                            </div>
                        </ScrollReveal>
                    </div>

                    {/* Right Column - Stats Vertical List (col-span-5) */}
                    <div className="lg:col-span-5 flex flex-col justify-center space-y-8 pl-0 lg:pl-12 border-l border-white/5">
                        {stats.map((stat, i) => (
                            <ScrollReveal key={i} delay={0.4 + i * 0.1} direction="left">
                                <div className="group">
                                    <div className="flex items-baseline gap-2 mb-1">
                                        <span className="text-4xl md:text-5xl font-light text-white tracking-tight group-hover:text-white transition-colors duration-500">
                                            {stat.value}
                                        </span>
                                        <span className="text-xl text-white/40 font-light">{stat.suffix}</span>
                                    </div>
                                    <span className="text-xs text-white/30 uppercase tracking-[0.2em] group-hover:text-white/60 transition-colors">{stat.label}</span>
                                </div>
                            </ScrollReveal>
                        ))}
                    </div>
                </div>
            </div>

            {/* Scroll Indicator */}
            <div className="absolute bottom-12 left-1/2 -translate-x-1/2">
                <motion.div
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1, y: [0, 10, 0] }}
                    transition={{ delay: 1, duration: 2, repeat: Infinity }}
                    className="flex flex-col items-center gap-4 text-white/20"
                >
                    <span className="text-[10px] tracking-[0.3em] uppercase font-light">Explore</span>
                    <div className="w-[1px] h-16 bg-gradient-to-b from-white/0 via-white/20 to-white/0" />
                </motion.div>
            </div>
        </motion.section>
    );
}
