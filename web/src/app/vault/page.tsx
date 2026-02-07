"use client";

import dynamic from 'next/dynamic';

const VaultScene = dynamic(() => import('./VaultScene'), {
    ssr: false,
    loading: () => (
        <div style={{
            width: '100vw',
            height: '100vh',
            background: '#000',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            color: '#fff',
            fontSize: '1.2rem',
            fontFamily: 'var(--font-display)'
        }}>
            <div style={{ textAlign: 'center' }}>
                <div style={{
                    width: '50px',
                    height: '50px',
                    border: '2px solid rgba(255,255,255,0.1)',
                    borderTop: '2px solid #fff',
                    borderRadius: '50%',
                    animation: 'spin 0.8s linear infinite',
                    margin: '0 auto 1rem'
                }} />
                Loading The Vault...
            </div>
        </div>
    )
});

export default function VaultPage() {
    return (
        <main style={{ width: '100vw', height: '100vh', overflow: 'hidden', background: '#000' }}>
            <VaultScene />
        </main>
    );
}
