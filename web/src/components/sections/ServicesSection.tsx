"use client";

import ScrollReveal from '../dom/ScrollReveal';

const services = [
    {
        number: '01',
        name: 'Immersive Experiences',
        description: 'Virtual environments, AR/VR applications, and interactive 3D spaces that captivate and engage.',
    },
    {
        number: '02',
        name: 'Web & SaaS Platforms',
        description: 'High-performance web applications, dashboards, and scalable SaaS solutions built for growth.',
    },
    {
        number: '03',
        name: 'AI & Automation',
        description: 'Intelligent systems, custom AI agents, and workflow automation that transform operations.',
    },
    {
        number: '04',
        name: 'Brand & Design',
        description: 'Premium brand identities, design systems, and user experiences that leave lasting impressions.',
    },
];

export default function ServicesSection() {
    return (
        <section id="services" className="py-[var(--section-padding-y)] bg-gradient-to-b from-[#030308] via-[#050510] to-[#030308] relative overflow-hidden">
            {/* Background Elements */}
            <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_0%,rgba(0,212,255,0.03),transparent_70%)] pointer-events-none" />

            <div className="max-w-7xl mx-auto px-6 md:px-12 relative z-10">

                {/* Section Header */}
                <ScrollReveal>
                    <div className="text-center mb-32 relative">
                        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[300px] h-[100px] bg-[#ff00aa]/20 rounded-full blur-[100px] pointer-events-none" />
                        <span className="text-sm font-medium tracking-[0.2em] text-[#ff00aa] uppercase mb-4 block">Expertise</span>
                        <h2 className="text-4xl md:text-6xl font-bold text-white tracking-tight">
                            Engineering <span className="text-white/40">Excellence</span>
                        </h2>
                        <div className="w-24 h-1 bg-gradient-to-r from-[#00d4ff] to-[#ff00aa] mx-auto mt-8 rounded-full opacity-80" />
                    </div>
                </ScrollReveal>

                {/* Services List */}
                <div className="grid md:grid-cols-2 gap-8">
                    {services.map((service, i) => (
                        <ScrollReveal key={i} delay={i * 0.1}>
                            <div className="group h-full p-8 md:p-12 rounded-3xl bg-white/[0.02] border border-white/5 hover:bg-white/[0.04] hover:border-[#00d4ff]/30 transition-all duration-500 cursor-pointer relative overflow-hidden">
                                {/* Hover Gradient */}
                                <div className="absolute inset-0 bg-gradient-to-br from-[#00d4ff]/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />

                                <div className="relative z-10 flex flex-col h-full">
                                    <div className="flex justify-between items-start mb-8">
                                        <span className="text-xl font-mono text-[#00d4ff] opacity-60 group-hover:opacity-100 transition-opacity">{service.number}</span>
                                        <div className="w-10 h-10 rounded-full border border-white/10 flex items-center justify-center group-hover:border-[#00d4ff]/50 group-hover:bg-[#00d4ff]/10 transition-all transform group-hover:rotate-45">
                                            <svg className="w-4 h-4 text-white/30 group-hover:text-[#00d4ff]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 12h14M12 5l7 7-7 7" />
                                            </svg>
                                        </div>
                                    </div>

                                    <h3 className="text-3xl font-bold text-white mb-4 group-hover:text-[#00d4ff] transition-colors">
                                        {service.name}
                                    </h3>

                                    <p className="text-white/50 text-lg leading-relaxed mt-auto group-hover:text-white/70 transition-colors">
                                        {service.description}
                                    </p>
                                </div>
                            </div>
                        </ScrollReveal>
                    ))}
                </div>
            </div>
        </section>
    );
}
