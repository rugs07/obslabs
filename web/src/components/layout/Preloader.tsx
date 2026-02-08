"use client";

import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

export default function Preloader() {
    const [isLoading, setIsLoading] = useState(true);
    const [progress, setProgress] = useState(0);
    const [status, setStatus] = useState("INITIALIZING SYSTEM...");

    useEffect(() => {
        const timer = setInterval(() => {
            setProgress((prev) => {
                if (prev >= 100) {
                    clearInterval(timer);
                    setTimeout(() => setIsLoading(false), 800);
                    return 100;
                }

                // Random jumps for "hacker" feel
                const jump = Math.random() * 10;
                return Math.min(prev + jump, 100);
            });
        }, 100);

        // Status text updates
        const statusTimer = setInterval(() => {
            const statuses = [
                "LOADING ASSETS...",
                "CALIBRATING OPTICS...",
                "ESTABLISHING UPLINK...",
                "DECRYPTING VAULT...",
                "ACCESS GRANTED"
            ];
            const currentStatus = statuses[Math.floor((progress / 100) * statuses.length)] || statuses[4];
            setStatus(currentStatus);
        }, 300);

        return () => {
            clearInterval(timer);
            clearInterval(statusTimer);
        };
    }, [progress]);

    return (
        <AnimatePresence>
            {isLoading && (
                <motion.div
                    initial={{ opacity: 1 }}
                    exit={{ opacity: 0 }}
                    transition={{ duration: 0.8, ease: "easeInOut" }}
                    className="fixed inset-0 z-[999] bg-[#0a0a1f] flex flex-col items-center justify-center font-mono"
                >
                    {/* Aurora Background Orbs */}
                    <div className="absolute top-1/3 left-1/4 w-64 h-64 bg-[#00d4ff]/20 rounded-full blur-[100px] animate-pulse" />
                    <div className="absolute bottom-1/3 right-1/4 w-48 h-48 bg-[#ff00aa]/15 rounded-full blur-[80px] animate-pulse" style={{ animationDelay: '-1s' }} />

                    <div className="w-full max-w-md px-6 relative z-10">
                        {/* System Header - Aurora styled */}
                        <div className="flex justify-between text-xs text-[#00d4ff]/50 mb-2 uppercase tracking-widest">
                            <span>Obsidian.sys</span>
                            <span>v2.0.4</span>
                        </div>

                        {/* Progress Bar - Aurora gradient */}
                        <div className="relative w-full h-1 bg-[#00d4ff]/10 rounded-full overflow-hidden mb-4">
                            <motion.div
                                className="absolute top-0 left-0 h-full bg-gradient-to-r from-[#00d4ff] via-[#00ff88] to-[#ff00aa] transition-all duration-100 ease-linear shadow-[0_0_15px_rgba(0,212,255,0.7),0_0_30px_rgba(0,212,255,0.4)]"
                                style={{ width: `${progress}%` }}
                            />
                        </div>

                        {/* Status Grid */}
                        <div className="flex justify-between items-end">
                            <span className="text-sm font-bold text-transparent bg-clip-text bg-gradient-to-r from-[#00d4ff] to-[#00ff88] tracking-widest">{Math.round(progress)}%</span>
                            <span className="text-xs text-[#00d4ff]/60 tracking-wider animate-pulse">{status}</span>
                        </div>
                    </div>
                </motion.div>
            )}
        </AnimatePresence>
    );
}
