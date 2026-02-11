"use client";

import { useState } from 'react';

export default function Footer() {
    const [email, setEmail] = useState('');
    const [subscribed, setSubscribed] = useState(false);

    const handleSubscribe = (e: React.FormEvent) => {
        e.preventDefault();
        if (email) {
            setSubscribed(true);
            setTimeout(() => setSubscribed(false), 3000);
            setEmail('');
        }
    };

    const links = {
        company: [
            { name: 'Work', href: '/#work' },
            { name: 'Services', href: '/#services' },
            { name: 'Contact', href: '/contact' },
            // { name: 'Careers', href: '#' },
        ],
        services: [
            { name: 'Immersive Experiences', href: '#' },
            { name: 'Web Development', href: '#' },
            { name: 'AI Solutions', href: '#' },
            { name: 'Brand Design', href: '#' },
        ],
        social: [
            { name: 'Twitter', href: '#', icon: 'M23 3a10.9 10.9 0 0 1-3.14 1.53 4.48 4.48 0 0 0-7.86 3v1A10.66 10.66 0 0 1 3 4s-4 9 5 13a11.64 11.64 0 0 1-7 2c9 5 20 0 20-11.5a4.5 4.5 0 0 0-.08-.83A7.72 7.72 0 0 0 23 3z' },
            { name: 'LinkedIn', href: '#', icon: 'M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z M2 9h4v12H2z M4 2a2 2 0 1 1-2 2 2 2 0 0 1 2-2z' },
            // { name: 'GitHub', href: '#', icon: 'M9 19c-5 1.5-5-2.5-7-3m14 6v-3.87a3.37 3.37 0 0 0-.94-2.61c3.14-.35 6.44-1.54 6.44-7A5.44 5.44 0 0 0 20 4.77 5.07 5.07 0 0 0 19.91 1S18.73.65 16 2.48a13.38 13.38 0 0 0-7 0C6.27.65 5.09 1 5.09 1A5.07 5.07 0 0 0 5 4.77a5.44 5.44 0 0 0-1.5 3.78c0 5.42 3.3 6.61 6.44 7A3.37 3.37 0 0 0 9 18.13V22' },
            // { name: 'Dribbble', href: '#', icon: 'M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2z' },
        ]
    };

    return (
        <footer className="bg-[#020205] border-t border-white/5">
            <div className="max-w-7xl mx-auto px-6 md:px-12 py-32">
                <div className="grid grid-cols-1 lg:grid-cols-12 gap-24 mb-24">

                    {/* Brand Column */}
                    <div className="lg:col-span-5 space-y-10">
                        <a href="#" className="flex items-center gap-4">
                            <div className="w-12 h-12 rounded-[6px] bg-gradient-to-br from-[#00d4ff] to-[#00ff88] flex items-center justify-center">
                                <span className="text-[#030308] font-bold text-xl">O</span>
                            </div>
                            <span className="text-2xl font-bold tracking-tight">
                                <span className="text-white">Obsidian</span>
                                <span className="text-white/50">Labs</span>
                            </span>
                        </a>
                        <p className="text-white/40 leading-relaxed max-w-sm text-lg">
                            Premium digital solutions for forward-thinking enterprises. Building the future of digital experiences.
                        </p>

                        {/* Newsletter */}
                        {/* <div className="max-w-md pt-4">
                            <h4 className="text-sm font-semibold text-white mb-6 uppercase tracking-wider">Stay Updated</h4>
                            <form onSubmit={handleSubscribe} className="relative">
                                <input
                                    type="email"
                                    placeholder="Enter your email"
                                    value={email}
                                    onChange={(e) => setEmail(e.target.value)}
                                    className="w-full bg-white/5 border border-white/10 rounded-[8px] px-6 py-5 pr-16 text-white placeholder-white/30 focus:outline-none focus:border-[#00d4ff]/50 transition-colors"
                                />
                                <button
                                    type="submit"
                                    className="absolute right-3 top-1/2 -translate-y-1/2 w-12 h-12 rounded-[6px] bg-[#00d4ff] flex items-center justify-center hover:bg-[#00d4ff]/90 transition-colors"
                                >
                                    {subscribed ? (
                                        <svg className="w-6 h-6 text-[#030308]" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" /></svg>
                                    ) : (
                                        <svg className="w-6 h-6 text-[#030308]" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" /></svg>
                                    )}
                                </button>
                            </form>
                        </div> */}
                    </div>

                    {/* Links */}
                    <div className="lg:col-span-2 space-y-8">
                        <h4 className="text-sm font-semibold text-white uppercase tracking-wider">Company</h4>
                        <ul className="space-y-6">
                            {links.company.map((link) => (
                                <li key={link.name}>
                                    <a href={link.href} className="text-base text-white/40 hover:text-white transition-colors">
                                        {link.name}
                                    </a>
                                </li>
                            ))}
                        </ul>
                    </div>

                    <div className="lg:col-span-2 space-y-8">
                        <h4 className="text-sm font-semibold text-white uppercase tracking-wider">Services</h4>
                        <ul className="space-y-6">
                            {links.services.map((link) => (
                                <li key={link.name}>
                                    <a href={link.href} className="text-base text-white/40 hover:text-white transition-colors">
                                        {link.name}
                                    </a>
                                </li>
                            ))}
                        </ul>
                    </div>

                    <div className="lg:col-span-3 space-y-8">
                        <h4 className="text-sm font-semibold text-white uppercase tracking-wider">Connect</h4>
                        <div className="space-y-6">
                            <div>
                                <span className="text-xs text-white/30 uppercase tracking-widest">Email</span>
                                <p className="text-white/60 mt-2 text-lg">labsobsidian6@gmail.com</p>
                            </div>

                        </div>

                        {/* Social */}
                        <div className="flex items-center gap-4 pt-6">
                            {links.social.map((social) => (
                                <a
                                    key={social.name}
                                    href={social.href}
                                    className="w-12 h-12 rounded-full bg-white/5 flex items-center justify-center text-white/40 hover:text-white hover:bg-white/10 transition-all"
                                    aria-label={social.name}
                                >
                                    <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d={social.icon} />
                                    </svg>
                                </a>
                            ))}
                        </div>
                    </div>
                </div>

                {/* Bottom Bar */}
                <div className="pt-12 border-t border-white/5 flex flex-col md:flex-row items-center justify-between gap-6 text-sm text-white/30">
                    <p>© {new Date().getFullYear()} ObsidianLabs. All rights reserved.</p>
                    <div className="flex items-center gap-10">
                        <a href="#" className="hover:text-white transition-colors">Privacy</a>
                        <a href="#" className="hover:text-white transition-colors">Terms</a>
                        <a href="#" className="hover:text-white transition-colors">Cookies</a>
                    </div>
                </div>
            </div>
        </footer>
    );
}
