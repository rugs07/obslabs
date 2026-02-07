"use client";

import { createContext, useContext, useState, useCallback, ReactNode } from 'react';

type ToastType = 'success' | 'error' | 'info' | 'warning';

interface Toast {
    id: number;
    message: string;
    type: ToastType;
}

interface ToastContextType {
    showToast: (message: string, type?: ToastType) => void;
}

const ToastContext = createContext<ToastContextType | undefined>(undefined);

export function ToastProvider({ children }: { children: ReactNode }) {
    const [toasts, setToasts] = useState<Toast[]>([]);

    const showToast = useCallback((message: string, type: ToastType = 'info') => {
        const id = Date.now();
        setToasts((prev) => [...prev, { id, message, type }]);

        setTimeout(() => {
            setToasts((prev) => prev.filter((t) => t.id !== id));
        }, 3000);
    }, []);

    const getToastColors = (type: ToastType) => {
        switch (type) {
            case 'success':
                return { bg: '#1a1a1a', border: '#ffffff' };
            case 'error':
                return { bg: '#1a0000', border: '#ff3333' };
            case 'warning':
                return { bg: '#1a1500', border: '#d4af37' };
            default:
                return { bg: '#111111', border: '#333333' };
        }
    };

    return (
        <ToastContext.Provider value={{ showToast }}>
            {children}
            <div
                style={{
                    position: 'fixed',
                    top: '2rem',
                    right: '2rem',
                    zIndex: 10000,
                    display: 'flex',
                    flexDirection: 'column',
                    gap: '1rem',
                }}
            >
                {toasts.map((toast) => {
                    const colors = getToastColors(toast.type);
                    return (
                        <div
                            key={toast.id}
                            style={{
                                background: `linear-gradient(135deg, ${colors.bg}, rgba(0, 0, 0, 0.9))`,
                                border: `1px solid ${colors.border}`,
                                borderRadius: '8px',
                                padding: '1rem 1.5rem',
                                color: 'white',
                                fontSize: '0.9rem',
                                fontWeight: 500,
                                boxShadow: `0 4px 20px rgba(0, 0, 0, 0.3), 0 0 40px ${colors.bg}40`,
                                animation: 'toast-in 0.3s ease-out',
                                minWidth: '250px',
                                maxWidth: '400px',
                            }}
                        >
                            {toast.message}
                        </div>
                    );
                })}
            </div>
        </ToastContext.Provider>
    );
}

export function useToast() {
    const context = useContext(ToastContext);
    if (!context) throw new Error('useToast must be used within ToastProvider');
    return context;
}
