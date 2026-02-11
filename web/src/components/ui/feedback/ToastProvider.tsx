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

    const getToastClasses = (type: ToastType) => {
        switch (type) {
            case 'success':
                return 'bg-gradient-to-br from-[#1a1a1a] to-black/90 border-white shadow-[0_4px_20px_rgba(0,0,0,0.3),0_0_40px_rgba(26,26,26,0.25)]';
            case 'error':
                return 'bg-gradient-to-br from-[#1a0000] to-black/90 border-[#ff3333] shadow-[0_4px_20px_rgba(0,0,0,0.3),0_0_40px_rgba(26,0,0,0.25)]';
            case 'warning':
                return 'bg-gradient-to-br from-[#1a1500] to-black/90 border-[#d4af37] shadow-[0_4px_20px_rgba(0,0,0,0.3),0_0_40px_rgba(26,21,0,0.25)]';
            default:
                return 'bg-gradient-to-br from-[#111111] to-black/90 border-[#333333] shadow-[0_4px_20px_rgba(0,0,0,0.3),0_0_40px_rgba(17,17,17,0.25)]';
        }
    };

    return (
        <ToastContext.Provider value={{ showToast }}>
            {children}
            <div className="fixed top-8 right-8 z-[10000] flex flex-col gap-4">
                {toasts.map((toast) => (
                    <div
                        key={toast.id}
                        className={`rounded-[4px] px-6 py-4 text-white text-sm font-medium border animate-[toast-in_0.3s_ease-out] min-w-[250px] max-w-[400px] ${getToastClasses(toast.type)}`}
                    >
                        {toast.message}
                    </div>
                ))}
            </div>
        </ToastContext.Provider>
    );
}

export function useToast() {
    const context = useContext(ToastContext);
    if (!context) throw new Error('useToast must be used within ToastProvider');
    return context;
}
