"use client";

import ScrollReveal from '../dom/ScrollReveal';

const process = [
    { step: '01', title: 'Discovery', desc: 'Deep dive into your vision, goals, and requirements' },
    { step: '02', title: 'Strategy', desc: 'Craft a tailored roadmap for maximum impact' },
    { step: '03', title: 'Design', desc: 'Create stunning visuals and user experiences' },
    { step: '04', title: 'Develop', desc: 'Build with cutting-edge technology and precision' },
    { step: '05', title: 'Launch', desc: 'Deploy and optimize for real-world performance' },
];

export default function ProcessSection() {
    return (
        <section className="bg-[#030308] relative py-20">
            <div className="max-w-7xl mx-auto px-6 md:px-12 relative z-10">

                <ScrollReveal>
                    <div className="grid lg:grid-cols-2 gap-24 lg:gap-32 items-start">
                        {/* Left - Title */}
                        <div className="">
                            <span className="text-sm font-medium tracking-[0.2em] text-[#ffba00] uppercase mb-4 block">Methodology</span>
                            <h2 className="text-4xl md:text-6xl font-bold text-white tracking-tight leading-tight mb-8">
                                How We <br />
                                <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#ffba00] to-[#ffaa00]">Create</span>
                            </h2>
                            <p className="text-white/50 text-xl leading-relaxed max-w-md font-light">
                                A systematic approach to innovation. We deconstruct complex problems and rebuild them as elegant digital solutions.
                            </p>
                        </div>

                        {/* Right - Steps */}
                        {process.map((item, i) => (
                            <ScrollReveal key={i} delay={i * 0.1}>
                                <div className="relative group pl-24 py-8 border-b border-white/5 last:border-0 hover:bg-white/[0.01] transition-colors duration-500">
                                    {/* Large Background Number */}
                                    <div className="absolute left-0 top-0 text-8xl font-bold text-white/[0.05] -translate-y-2 select-none pointer-events-none font-display">
                                        {item.step}
                                    </div>

                                    <div className="relative z-10">
                                        <h3 className="text-2xl font-bold text-white mb-2 group-hover:text-white transition-colors duration-300 tracking-tight">
                                            {item.title}
                                        </h3>
                                        <p className="text-white/40 text-lg leading-relaxed max-w-md group-hover:text-white/60 transition-colors">
                                            {item.desc}
                                        </p>
                                    </div>
                                </div>
                            </ScrollReveal>
                        ))}
                    </div>
                </ScrollReveal>
            </div>
        </section>
    );
}
