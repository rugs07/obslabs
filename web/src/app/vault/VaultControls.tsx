"use client";

import { useEffect } from 'react';

interface VaultControlsProps {
    isZoomed: boolean;
}

export default function VaultControls({ isZoomed }: VaultControlsProps) {
    useEffect(() => {
        // ESC key handler
        const handleKeyDown = (e: KeyboardEvent) => {
            if (e.key === 'Escape') {
                window.location.href = '/';
            }
        };

        window.addEventListener('keydown', handleKeyDown);
        return () => window.removeEventListener('keydown', handleKeyDown);
    }, []);

    return null;
}
