"use client";

import { motion } from 'framer-motion';
import ScrollReveal from '../dom/ScrollReveal';

const projects = [
    {
        title: 'Quantum Gallery',
        category: 'Immersive Experience',
        description: 'Virtual museum platform with photorealistic 3D environments',
        year: '2024',
    },
    {
        title: 'NexGen Dashboard',
        category: 'SaaS Platform',
        description: 'Enterprise analytics suite with real-time data visualization',
        year: '2024',
    },
    {
        title: 'Aurora AI',
        category: 'AI Solution',
        description: 'Intelligent automation system for customer engagement',
        year: '2023',
    },
    {
        title: 'CryptoVault',
        category: 'Web3 Platform',
        description: 'Secure decentralized finance application',
        year: '2023',
    },
];

export default function WorkSection() {
    return (
        <section id="work" className="py-[var(--section-padding-y)] mt-[200px] bg-[#030308] relative overflow-hidden">
            {/* Background Glows */}
            <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-[#00d4ff]/5 rounded-full blur-[120px] pointer-events-none" />
            <div className="absolute bottom-0 left-0 w-[500px] h-[500px] bg-[#ff00aa]/5 rounded-full blur-[120px] pointer-events-none" />

            <div className="max-w-7xl mx-auto px-6 md:px-12 relative z-10">

                {/* Section Header */}
                <ScrollReveal>
                    <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-12 mb-24">
                        <div>
                            <span className="text-sm font-medium tracking-[0.2em] text-[#00d4ff] uppercase mb-4 block">Portfolio</span>
                            <h2 className="text-4xl md:text-6xl font-bold text-white tracking-tight">
                                Selected <span className="text-white/40">Work</span>
                            </h2>
                        </div>
                        <p className="text-white/50 max-w-md text-lg leading-relaxed font-light">
                            Crafting digital experiences that push boundaries and drive real-world results for global brands.
                        </p>
                    </div>
                </ScrollReveal>

                {/* Projects Grid */}
                <div className="grid md:grid-cols-2 gap-12 perspective-[2000px]">
                    {projects.map((project, i) => (
                        <ScrollReveal key={i} delay={i * 0.1}>
                            <motion.div
                                whileHover={{
                                    scale: 1.02,
                                    rotateX: 5,
                                    rotateY: 5,
                                    z: 50
                                }}
                                transition={{ type: "spring", stiffness: 300, damping: 20 }}
                                className="group relative rounded-3xl bg-white/[0.02] border border-white/5 overflow-hidden hover:border-white/20 transition-colors duration-700 cursor-pointer transform-style-3d shadow-2xl hover:shadow-[#00d4ff]/20"
                            >

                                {/* Image Area Placeholder */}
                                <div className="aspect-[16/10] bg-gradient-to-br from-[#0a0a1f] to-[#15102a] relative overflow-hidden transform-style-3d">
                                    {/* Animated Grid Background */}
                                    <div className="absolute inset-0 bg-[linear-gradient(rgba(0,212,255,0.03)_1px,transparent_1px),linear-gradient(90deg,rgba(0,212,255,0.03)_1px,transparent_1px)] bg-[size:40px_40px] opacity-20 group-hover:opacity-40 transition-opacity duration-700" />

                                    {/* Number Watermark - Parallax Depth */}
                                    <div className="absolute inset-0 flex items-center justify-center translate-z-20">
                                        <span className="text-9xl font-bold text-white/[0.02] group-hover:text-white/[0.05] transition-colors duration-700 scale-150 transform group-hover:translate-z-10">{String(i + 1).padStart(2, '0')}</span>
                                    </div>

                                    {/* Hover Overlay Gradient */}
                                    <div className="absolute inset-0 bg-gradient-to-t from-[#030308] via-transparent to-transparent opacity-60" />
                                </div>

                                {/* Content */}
                                <div className="absolute inset-0 flex flex-col justify-end p-8 md:p-10">
                                    <div className="transform translate-y-4 group-hover:translate-y-0 transition-transform duration-500">
                                        <div className="flex items-center justify-between mb-4">
                                            <span className="text-xs font-medium tracking-widest text-[#00d4ff] uppercase">{project.category}</span>
                                            <span className="text-xs text-white/40">{project.year}</span>
                                        </div>
                                        <h3 className="text-3xl font-bold text-white mb-3 group-hover:text-[#00d4ff] transition-colors duration-300">
                                            {project.title}
                                        </h3>
                                        <p className="text-white/60 text-sm leading-relaxed opacity-0 group-hover:opacity-100 transition-opacity duration-500 delay-100 max-w-sm">
                                            {project.description}
                                        </p>

                                        {/* Action Icon */}
                                        <div className="absolute bottom-10 right-10 opacity-0 group-hover:opacity-100 transition-all duration-500 delay-200 transform translate-x-4 group-hover:translate-x-0">
                                            <div className="w-12 h-12 rounded-full bg-white/10 backdrop-blur-md flex items-center justify-center border border-white/20 hover:bg-[#00d4ff] hover:border-[#00d4ff] hover:text-[#030308] text-white transition-all">
                                                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" /></svg>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </motion.div>
                        </ScrollReveal>
                    ))}
                </div>
            </div>
        </section>
    );
}
