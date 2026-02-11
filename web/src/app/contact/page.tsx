"use client";

import dynamic from 'next/dynamic';
import Navbar from '@/components/layout/Navbar';
import Footer from '@/components/layout/Footer';
import ContactFormWithToast from '@/components/forms/ContactFormWithToast';
import ScrollReveal from '@/components/dom/ScrollReveal';

const Scene = dynamic(() => import('@/components/canvas/Scene'), { ssr: false });
const Shards = dynamic(() => import('@/components/canvas/Shards'), { ssr: false });

export default function ContactPage() {
    return (
        <main className="w-full min-h-screen relative bg-[#030308]">
            <Navbar />

            {/* Background */}
            <div className="fixed inset-0 z-[0] pointer-events-none opacity-50">
                <Scene>
                    <Shards />
                </Scene>
            </div>

            <div className="relative z-[2] pt-32 pb-16 md:pt-40 md:pb-20">
                <div className="max-w-7xl mx-auto px-6 md:px-12">
                    <div className="grid lg:grid-cols-2 gap-16 lg:gap-32 items-start">

                        {/* Left - Info */}
                        <ScrollReveal>
                            <div className="pt-0 lg:pt-8">
                                <span className="text-sm font-medium tracking-widest text-[#00d4ff] uppercase">Contact</span>
                                <h1 className="text-5xl md:text-7xl font-bold text-white mt-6 mb-8 md:mb-10 leading-tight">
                                    Let&apos;s Start a
                                    <br />
                                    <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#00d4ff] to-[#00ff88]">
                                        Conversation
                                    </span>
                                </h1>
                                <p className="text-white/40 text-lg md:text-xl leading-relaxed mb-12 md:mb-16 max-w-lg">
                                    Have a project in mind? We&apos;d love to hear about it. Drop us a message and we&apos;ll get back to you within 24 hours.
                                </p>

                                <div className="space-y-8 md:space-y-12">
                                    <div className="flex items-center gap-6 md:gap-8 group">
                                        <div className="w-16 h-16 md:w-20 md:h-20 rounded-full bg-white/5 flex items-center justify-center border border-white/5 group-hover:border-[#00d4ff]/30 group-hover:bg-[#00d4ff]/10 transition-all duration-500">
                                            <svg className="w-6 h-6 md:w-8 md:h-8 text-[#00d4ff]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                                            </svg>
                                        </div>
                                        <div>
                                            <span className="text-xs text-white/30 uppercase tracking-widest block mb-1 md:mb-2">Email Us</span>
                                            <a href="mailto:labsobsidian6@gmail.com" className="text-white text-xl md:text-2xl font-light hover:text-[#00d4ff] transition-colors break-all">
                                                labsobsidian6@gmail.com
                                            </a>
                                        </div>
                                    </div>


                                </div>
                            </div>
                        </ScrollReveal>

                        {/* Right - Form */}
                        <ScrollReveal delay={0.2}>
                            <div className="p-8 md:p-16 rounded-[6px] md:rounded-[12px] bg-white/[0.02] border border-white/5 backdrop-blur-sm relative overflow-hidden mt-12 lg:mt-0">
                                <div className="absolute top-0 right-0 w-64 h-64 bg-[#00d4ff]/5 rounded-full blur-[80px] pointer-events-none" />
                                <ContactFormWithToast />
                            </div>
                        </ScrollReveal>
                    </div>
                </div>
            </div>

            <Footer />
        </main>
    );
}
