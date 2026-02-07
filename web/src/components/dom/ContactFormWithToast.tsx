"use client";

import { useState } from 'react';
import GlowButton from './GlowButton';
import RippleButton from './RippleButton';
import { useToast } from './ToastProvider';
import Spinner from './Spinner';

export default function ContactFormWithToast() {
    const { showToast } = useToast();
    const [isSubmitting, setIsSubmitting] = useState(false);
    const [formData, setFormData] = useState({ name: '', email: '', message: '' });

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();

        // Validation
        if (!formData.name || !formData.email || !formData.message) {
            showToast('Please fill in all fields', 'warning');
            return;
        }

        setIsSubmitting(true);

        // Simulate API call
        setTimeout(() => {
            setIsSubmitting(false);
            showToast('Message sent successfully! We\'ll get back to you soon.', 'success');
            setFormData({ name: '', email: '', message: '' });
        }, 1500);
    };

    return (
        <form
            onSubmit={handleSubmit}
            style={{
                maxWidth: '500px',
                display: 'flex',
                flexDirection: 'column',
                gap: '1.5rem',
            }}
        >
            <input
                type="text"
                placeholder="Your Name"
                value={formData.name}
                onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                style={{
                    padding: '1rem 1.5rem',
                    background: 'rgba(255, 255, 255, 0.03)',
                    border: '1px solid rgba(255, 255, 255, 0.1)',
                    borderRadius: '4px',
                    color: 'white',
                    fontSize: '1rem',
                    outline: 'none',
                    transition: 'all 0.3s',
                }}
                onFocus={(e) => {
                    e.target.style.borderColor = '#00e5cc';
                    e.target.style.background = 'rgba(0, 229, 204, 0.05)';
                }}
                onBlur={(e) => {
                    e.target.style.borderColor = 'rgba(255, 255, 255, 0.1)';
                    e.target.style.background = 'rgba(255, 255, 255, 0.03)';
                }}
            />

            <input
                type="email"
                placeholder="Your Email"
                value={formData.email}
                onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                style={{
                    padding: '1rem 1.5rem',
                    background: 'rgba(255, 255, 255, 0.03)',
                    border: '1px solid rgba(255, 255, 255, 0.1)',
                    borderRadius: '4px',
                    color: 'white',
                    fontSize: '1rem',
                    outline: 'none',
                    transition: 'all 0.3s',
                }}
                onFocus={(e) => {
                    e.target.style.borderColor = '#00e5cc';
                    e.target.style.background = 'rgba(0, 229, 204, 0.05)';
                }}
                onBlur={(e) => {
                    e.target.style.borderColor = 'rgba(255, 255, 255, 0.1)';
                    e.target.style.background = 'rgba(255, 255, 255, 0.03)';
                }}
            />

            <textarea
                placeholder="Your Message"
                rows={5}
                value={formData.message}
                onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                style={{
                    padding: '1rem 1.5rem',
                    background: 'rgba(255, 255, 255, 0.03)',
                    border: '1px solid rgba(255, 255, 255, 0.1)',
                    borderRadius: '4px',
                    color: 'white',
                    fontSize: '1rem',
                    outline: 'none',
                    resize: 'vertical',
                    transition: 'all 0.3s',
                    fontFamily: 'inherit',
                }}
                onFocus={(e) => {
                    e.target.style.borderColor = '#00e5cc';
                    e.target.style.background = 'rgba(0, 229, 204, 0.05)';
                }}
                onBlur={(e) => {
                    e.target.style.borderColor = 'rgba(255, 255, 255, 0.1)';
                    e.target.style.background = 'rgba(255, 255, 255, 0.03)';
                }}
            />

            <RippleButton
                style={{
                    alignSelf: 'flex-start',
                }}
            >
                <GlowButton variant="glow">
                    {isSubmitting ? (
                        <div style={{ display: 'flex', alignItems: 'center', gap: '0.75rem' }}>
                            <Spinner size="sm" color="white" />
                            Sending...
                        </div>
                    ) : (
                        'Send Message'
                    )}
                </GlowButton>
            </RippleButton>
        </form>
    );
}
