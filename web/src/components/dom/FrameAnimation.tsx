"use client";

import { useState, useEffect, useCallback, useRef } from 'react';
import Image from 'next/image';

const TOTAL_FRAMES = 40;
const FRAME_RATE = 24; // FPS for smooth animation

// Generate frame paths
const framePaths = Array.from({ length: TOTAL_FRAMES }, (_, i) =>
    `/frames/ezgif-frame-${String(i + 1).padStart(3, '0')}.jpg`
);

export default function FrameAnimation() {
    const [currentFrame, setCurrentFrame] = useState(0);
    const [isHovering, setIsHovering] = useState(false);
    const [isLoaded, setIsLoaded] = useState(false);
    const animationRef = useRef<number | null>(null);
    const lastFrameTime = useRef<number>(0);

    // Preload all images for smooth animation
    useEffect(() => {
        const preloadImages = async () => {
            const imagePromises = framePaths.map((src) => {
                return new Promise<void>((resolve) => {
                    const img = new window.Image();
                    img.src = src;
                    img.onload = () => resolve();
                    img.onerror = () => resolve(); // Continue even if one fails
                });
            });
            await Promise.all(imagePromises);
            setIsLoaded(true);
        };
        preloadImages();
    }, []);

    // Animation loop - ALWAYS RUNNING
    const animate = useCallback((timestamp: number) => {
        if (!lastFrameTime.current) {
            lastFrameTime.current = timestamp;
        }

        const elapsed = timestamp - lastFrameTime.current;
        const frameInterval = 1000 / FRAME_RATE;

        if (elapsed >= frameInterval) {
            setCurrentFrame((prev) => (prev + 1) % TOTAL_FRAMES);
            lastFrameTime.current = timestamp - (elapsed % frameInterval);
        }

        animationRef.current = requestAnimationFrame(animate);
    }, []);

    // Start animation as soon as images are loaded - ALWAYS PLAY
    useEffect(() => {
        if (isLoaded) {
            lastFrameTime.current = 0;
            animationRef.current = requestAnimationFrame(animate);
        }

        return () => {
            if (animationRef.current) {
                cancelAnimationFrame(animationRef.current);
            }
        };
    }, [isLoaded, animate]);

    // Track mouse position on document level for hover detection
    useEffect(() => {
        const handleMouseMove = () => {
            if (!isHovering) setIsHovering(true);
        };

        const handleMouseLeave = () => setIsHovering(false);

        document.addEventListener('mousemove', handleMouseMove);
        document.documentElement.addEventListener('mouseleave', handleMouseLeave);

        return () => {
            document.removeEventListener('mousemove', handleMouseMove);
            document.documentElement.removeEventListener('mouseleave', handleMouseLeave);
        };
    }, [isHovering]);

    return (
        <div className="frame-animation-container">
            {/* Background animation layer */}
            <div className={`frame-animation-bg ${isHovering ? 'active' : ''}`}>
                {framePaths.map((src, index) => (
                    <Image
                        key={src}
                        src={src}
                        alt={`Frame ${index + 1}`}
                        fill
                        sizes="100vw"
                        quality={100}
                        priority={index < 5} // Prioritize first few frames
                        className={`frame-image ${index === currentFrame ? 'visible' : 'hidden'}`}
                        style={{
                            objectFit: 'cover',
                            objectPosition: 'center',
                        }}
                    />
                ))}
                {/* Vignette overlay */}
                <div className="frame-vignette" />
            </div>

            {/* Hover indicator */}
            <div className={`hover-glow ${isHovering ? 'active' : ''}`} />
        </div>
    );
}
