"use client";

import ScrollReveal from '../dom/ScrollReveal';
import ShardButton from '../ui/buttons/ShardButton';
import MagneticButton from '../ui/buttons/MagneticButton';

export default function CTASection() {
    return (
        <section className="py-[var(--section-padding-y)] bg-gradient-to-b from-[#030308] to-[#050510] relative overflow-hidden">
            {/* Background Texture */}
            <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_50%,rgba(0,212,255,0.05),transparent_60%)] pointer-events-none" />
            <div className="absolute top-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-white/10 to-transparent" />
            <div className="absolute bottom-0 inset-x-0 h-px bg-gradient-to-r from-transparent via-white/10 to-transparent" />

            <div className="max-w-5xl mx-auto px-6 md:px-12 text-center relative z-10">
                <ScrollReveal>
                    <span className="inline-block py-1 px-3 rounded-full bg-white/5 border border-white/10 text-xs font-medium tracking-widest text-[#00d4ff] uppercase mb-8 backdrop-blur-md">
                        Start Your Journey
                    </span>
                    <h2 className="text-5xl md:text-7xl lg:text-8xl font-bold text-white mb-10 leading-tight tracking-tight">
                        Ready to Build
                        <br />
                        <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#00d4ff] via-[#00ff88] to-[#ff00aa] animate-gradient bg-[length:200%_auto]">
                            Something Great?
                        </span>
                    </h2>
                    <p className="text-xl md:text-2xl text-white/50 mb-12 md:mb-16 max-w-2xl mx-auto leading-relaxed font-light">
                        Let&apos;s discuss your project and explore how we can help bring your vision to life.
                    </p>
                    <div className="flex justify-center">
                        <MagneticButton strength={50}>
                            <ShardButton href="/contact" variant="primary" size="xl">
                                <span className="px-8 text-lg">Get in Touch</span>
                                <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                                </svg>
                            </ShardButton>
                        </MagneticButton>
                    </div>
                </ScrollReveal>
            </div>
        </section>
    );
}
