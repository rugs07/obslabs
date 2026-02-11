"use client";

import { motion } from 'framer-motion';
import ScrollReveal from '../dom/ScrollReveal';

const capabilities = [
    {
        title: '3D Assets',
        description: 'Production-ready, real-time optimized models. Game, web & AR/VR compatible assets.',
        icon: (
            <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M19 11H5m14 0a2 2 0 012 2v6a2 2 0 01-2 2H5a2 2 0 01-2-2v-6a2 2 0 012-2m14 0V9a2 2 0 00-2-2M5 11V9a2 2 0 012-2m0 0V5a2 2 0 012-2h6a2 2 0 012 2v2M7 7h10" /></svg>
        )
    },
    {
        title: 'Immersive Experiences',
        description: 'Interactive 3D & real-time environments. AR/VR simulations & virtual walkthroughs.',
        icon: (
            <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M21 12a9 9 0 01-9 9m9-9a9 9 0 00-9-9m9 9H3m9 9a9 9 0 01-9-9m9 9c1.657 0 3-4.03 3-9s-1.343-9-3-9m0 18c-1.657 0-3-4.03-3-9s1.343-9 3-9m-9 9a9 9 0 019-9" /></svg>
        )
    },
    {
        title: 'Web & SaaS',
        description: 'Scalable platforms using React & Next.js. High-performance dashboards & web apps.',
        icon: (
            <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9.75 17L9 20l-1 1h8l-1-1-.75-3M3 13h18M5 17h14a2 2 0 002-2V5a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" /></svg>
        )
    },
    {
        title: 'Design',
        description: 'Strong brand identities & UI systems. Clean, usable & conversion-focused design.',
        icon: (
            <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M7 21a4 4 0 01-4-4V5a2 2 0 012-2h4a2 2 0 012 2v12a4 4 0 01-4 4zm0 0h12a2 2 0 002-2v-4a2 2 0 00-2-2h-2.343M11 7.343l1.657-1.657a2 2 0 012.828 0l2.829 2.829a2 2 0 010 2.828l-8.486 8.485M7 17h.01" /></svg>
        )
    },
    {
        title: 'AI Agents',
        description: 'Intelligent automation for support & ops. Custom AI workflows & assistants.',
        icon: (
            <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M13 10V3L4 14h7v7l9-11h-7z" /></svg>
        )
    },
    {
        title: 'Web3',
        description: 'Decentralized apps & smart contracts. Digital assets, wallets & on-chain access.',
        icon: (
            <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M19.428 15.428a2 2 0 00-1.022-.547l-2.384-.477a6 6 0 00-3.86.517l-.318.158a6 6 0 01-3.86.517L6.05 15.21a2 2 0 00-1.806.547M8 4h8l-1 1v5.172a2 2 0 00.586 1.414l5 5c1.26 1.26.367 3.414-1.415 3.414H4.828c-1.782 0-2.674-2.154-1.414-3.414l5-5A2 2 0 009 10.172V5L8 4z" /></svg>
        )
    },
];

export default function CapabilitiesSection() {
    return (
        <section id="capabilities" className="py-[var(--section-padding-y)] mt-[100px] bg-[#030308] relative overflow-hidden">
            {/* Background Glows */}
            <div className="absolute top-0 left-0 w-[500px] h-[500px] bg-[#00d4ff]/5 rounded-full blur-[120px] pointer-events-none" />
            <div className="absolute bottom-0 right-0 w-[500px] h-[500px] bg-[#ff00aa]/5 rounded-full blur-[120px] pointer-events-none" />

            <div className="max-w-7xl mx-auto px-6 md:px-12 relative z-10">

                {/* Section Header */}
                <ScrollReveal>
                    <div className="text-center my-24">
                        <span className="text-sm font-medium tracking-[0.2em] text-[#00d4ff] uppercase mb-4 block">Services</span>
                        <h2 className="text-4xl md:text-6xl font-bold text-white tracking-tight mb-6">
                            What We <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#00d4ff] to-[#00ff88]">Build</span>
                        </h2>
                        <p className="text-white/50 max-w-2xl mx-auto text-lg leading-relaxed font-light">
                            Engineering the future with a comprehensive suite of digital capabilities.
                        </p>
                    </div>
                </ScrollReveal>

                {/* Capabilities Grid */}
                <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {capabilities.map((item, i) => (
                        <ScrollReveal key={i} delay={i * 0.1}>
                            <motion.div
                                whileHover={{ y: -10 }}
                                className="group h-full p-8 rounded-[10px] bg-white/[0.02] border border-white/5 hover:bg-white/[0.04] hover:border-[#00d4ff]/30 transition-all duration-500 cursor-pointer relative overflow-hidden"
                            >
                                {/* Hover Gradient */}
                                <div className="absolute inset-0 bg-gradient-to-br from-[#00d4ff]/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />

                                <div className="relative z-10 flex flex-col h-full">
                                    <div className="w-14 h-14 rounded-[8px] bg-white/5 border border-white/10 flex items-center justify-center text-[#00d4ff] mb-6 group-hover:scale-110 group-hover:bg-[#00d4ff]/10 group-hover:border-[#00d4ff]/50 transition-all duration-500">
                                        {item.icon}
                                    </div>

                                    <h3 className="text-2xl font-bold text-white mb-4 group-hover:text-[#00d4ff] transition-colors">
                                        {item.title}
                                    </h3>

                                    <p className="text-white/50 text-base leading-relaxed group-hover:text-white/70 transition-colors">
                                        {item.description}
                                    </p>
                                </div>
                            </motion.div>
                        </ScrollReveal>
                    ))}
                </div>
            </div>
        </section>
    );
}
