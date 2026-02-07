"use client";

import AnimatedText from './AnimatedText';
import ScrollReveal from './ScrollReveal';
import ProjectCard from './ProjectCard';
import GlowButton from './GlowButton';
import ContactFormWithToast from './ContactFormWithToast';

// Stats data
const stats = [
    { value: '100+', label: 'Projects Delivered' },
    { value: '50+', label: 'Global Clients' },
    { value: '6', label: 'Core Services' },
];

// Portfolio projects
const projects = [
    { title: 'Virtual Museum Platform', subtitle: '3D Assets & Immersive Experience' },
    { title: 'DeFi Dashboard', subtitle: 'Web3 & SaaS Application' },
    { title: 'AI Support Agent', subtitle: 'Custom AI Workflow Automation' },
    { title: 'Enterprise Design System', subtitle: 'Brand Identity & UI Kit' },
];

// Services offered
const services = [
    {
        name: '3D Assets',
        description: 'Production-ready, real-time optimized models',
        features: ['Game-ready models', 'Web & AR/VR compatible', 'PBR materials', 'LOD optimization'],
    },
    {
        name: 'Immersive Experiences',
        description: 'Interactive 3D & real-time environments',
        features: ['AR/VR simulations', 'Virtual walkthroughs', 'Real-time rendering', 'Interactive spaces'],
    },
    {
        name: 'Web & SaaS',
        description: 'Scalable platforms using React & Next.js',
        features: ['High-performance dashboards', 'Scalable web apps', 'API development', 'Cloud deployment'],
    },
    {
        name: 'Design',
        description: 'Strong brand identities & UI systems',
        features: ['Brand identity', 'UI/UX design', 'Design systems', 'Conversion optimization'],
    },
    {
        name: 'AI Agents',
        description: 'Intelligent automation for support & ops',
        features: ['Custom AI workflows', 'Support automation', 'AI assistants', 'Process optimization'],
    },
    {
        name: 'Web3',
        description: 'Decentralized apps & smart contracts',
        features: ['Smart contracts', 'dApps', 'Digital wallets', 'On-chain access'],
    },
];

export default function Overlay() {
    return (
        <div style={{ width: '100%' }}>
            {/* ============================================
          HERO SECTION
          ============================================ */}
            <section
                id="vision"
                style={{
                    height: '100vh',
                    display: 'flex',
                    flexDirection: 'column',
                    justifyContent: 'center',
                    alignItems: 'center',
                    textAlign: 'center',
                    padding: 'var(--section-padding)',
                    position: 'relative',
                }}
            >
                {/* Main Title */}
                <div style={{ marginBottom: '4rem', position: 'relative', zIndex: 10 }}>
                    <AnimatedText
                        text="Architecture"
                        as="h1"
                        className="hero-title neon-text"
                        delay={0.3}
                        staggerDelay={0.1}
                    />
                    <div
                        style={{
                            fontSize: 'clamp(2.5rem, 6vw, 5rem)',
                            fontWeight: 300,
                            letterSpacing: '0.02em',
                            lineHeight: 1.2,
                            fontFamily: 'var(--font-display)',
                            marginTop: '0.5rem',
                            textShadow: '0 4px 30px rgba(0,0,0,0.6)',
                        }}
                    >
                        <span>for the </span>
                        <span className="text-gradient" style={{ fontWeight: 400 }}>Infinite</span>
                    </div>
                </div>

                {/* Tagline */}
                <ScrollReveal delay={0.8}>
                    <p
                        style={{
                            fontSize: 'clamp(1.1rem, 2.5vw, 1.4rem)',
                            color: 'var(--secondary)',
                            maxWidth: '650px',
                            fontWeight: 300,
                            lineHeight: 1.8,
                            marginBottom: '4rem',
                            textShadow: '0 2px 10px rgba(0,0,0,0.5)',
                            position: 'relative',
                        }}
                    >
                        Digital infrastructure for the next generation.
                        <br />
                        <span style={{ color: '#00e5cc', fontWeight: 500 }}>3D. AI. Web3. Design.</span>
                    </p>
                </ScrollReveal>

                {/* Stats */}
                <ScrollReveal delay={1.2}>
                    <div
                        style={{
                            display: 'flex',
                            gap: 'clamp(3rem, 6vw, 6rem)',
                            marginBottom: '6rem',
                            flexWrap: 'wrap',
                            justifyContent: 'center',
                        }}
                    >
                        {stats.map((stat, i) => (
                            <div
                                key={i}
                                className="glass glow-hover"
                                style={{
                                    textAlign: 'center',
                                    padding: '2rem 2.5rem',
                                    borderRadius: '12px',
                                    minWidth: '180px',
                                    transition: 'all 0.5s cubic-bezier(0.34, 1.56, 0.64, 1)',
                                }}
                            >
                                <div
                                    style={{
                                        fontSize: 'clamp(2rem, 4vw, 3rem)',
                                        fontWeight: 700,
                                        fontFamily: 'var(--font-display)',
                                        background: 'linear-gradient(135deg, #fff, #a855f7)',
                                        WebkitBackgroundClip: 'text',
                                        WebkitTextFillColor: 'transparent',
                                        filter: 'drop-shadow(0 0 20px rgba(168, 85, 247, 0.4))',
                                    }}
                                >
                                    {stat.value}
                                </div>
                                <div
                                    className="font-mono"
                                    style={{
                                        fontSize: '0.75rem',
                                        color: 'var(--secondary)',
                                        letterSpacing: '0.1em',
                                        marginTop: '0.5rem',
                                    }}
                                >
                                    {stat.label}
                                </div>
                            </div>
                        ))}
                    </div>
                </ScrollReveal>

                {/* Vault Entry Button */}
                <ScrollReveal delay={1.4}>
                    <div style={{ display: 'flex', gap: '1.5rem', justifyContent: 'center', marginBottom: '3rem', pointerEvents: 'auto' }}>
                        <a href="/vault" style={{ textDecoration: 'none' }}>
                            <GlowButton variant="glow">
                                🏛️ Enter The Virtual Vault
                            </GlowButton>
                        </a>
                        <GlowButton variant="outline" onClick={() => document.getElementById('services')?.scrollIntoView({ behavior: 'smooth' })}>
                            Explore Services
                        </GlowButton>
                    </div>
                </ScrollReveal>

                {/* Scroll Indicator */}
                <div
                    className="float"
                    style={{
                        position: 'absolute',
                        bottom: '3rem',
                        display: 'flex',
                        flexDirection: 'column',
                        alignItems: 'center',
                        gap: '0.75rem',
                        opacity: 0.5,
                    }}
                >
                    <span style={{ fontSize: '0.7rem', letterSpacing: '0.2em' }}>SCROLL TO EXPLORE</span>
                    <svg width="20" height="30" viewBox="0 0 20 30" fill="none" stroke="currentColor" strokeWidth="1.5">
                        <rect x="1" y="1" width="18" height="28" rx="9" />
                        <circle cx="10" cy="10" r="2" fill="currentColor">
                            <animate attributeName="cy" values="8;14;8" dur="1.5s" repeatCount="indefinite" />
                        </circle>
                    </svg>
                </div>

                {/* Hero title styles */}
                <style jsx>{`
          .hero-title {
            font-size: clamp(3.5rem, 9vw, 8rem);
            font-weight: 800;
            letter-spacing: -0.03em;
            line-height: 1.1;
            text-transform: uppercase;
            font-family: var(--font-display);
            text-shadow: 0 10px 50px rgba(0,0,0,0.6);
          }
          
          .hero-title.neon-text {
            text-shadow:
              0 0 7px rgba(0, 229, 204, 0.9),
              0 0 10px rgba(0, 229, 204, 0.7),
              0 0 21px rgba(0, 229, 204, 0.5),
              0 0 42px rgba(0, 229, 204, 0.3),
              0 10px 50px rgba(0, 0, 0, 0.6);
          }
        `}</style>
            </section>

            {/* ============================================
          PORTFOLIO SECTION
          ============================================ */}
            <section
                id="portfolio"
                style={{
                    minHeight: '100vh',
                    display: 'flex',
                    flexDirection: 'column',
                    justifyContent: 'center',
                    padding: 'var(--section-padding) 0',
                }}
            >
                <ScrollReveal>
                    <div style={{ padding: '0 clamp(2rem, 5vw, 4rem)', marginBottom: '3rem' }}>
                        <div className="section-label">SELECTED WORKS</div>
                        <h2 className="section-title text-glow" style={{ fontFamily: 'var(--font-display)' }}>
                            The Vault
                        </h2>
                        <div className="section-divider" />
                    </div>
                </ScrollReveal>

                {/* Horizontal Scroll Container */}
                <div
                    style={{
                        display: 'flex',
                        gap: '2rem',
                        overflowX: 'auto',
                        padding: '2rem clamp(2rem, 5vw, 4rem)',
                        scrollSnapType: 'x mandatory',
                        scrollbarWidth: 'none',
                        msOverflowStyle: 'none',
                        pointerEvents: 'auto',
                    }}
                >
                    {projects.map((project, i) => (
                        <ProjectCard
                            key={i}
                            title={project.title}
                            subtitle={project.subtitle}
                            index={i + 1}
                        />
                    ))}
                </div>
            </section>

            {/* ============================================
          SERVICES SECTION
          ============================================ */}
            <section
                id="services"
                style={{
                    minHeight: '100vh',
                    display: 'flex',
                    flexDirection: 'column',
                    alignItems: 'center',
                    justifyContent: 'center',
                    padding: 'var(--section-padding)',
                }}
            >
                <ScrollReveal>
                    <div style={{ textAlign: 'center', marginBottom: '4rem' }}>
                        <div className="section-label">CAPABILITIES</div>
                        <h2
                            className="section-title text-glow"
                            style={{ fontFamily: 'var(--font-display)', textAlign: 'center' }}
                        >
                            What We Build
                        </h2>
                    </div>
                </ScrollReveal>

                {/* Service Cards */}
                <div
                    style={{
                        display: 'grid',
                        gridTemplateColumns: 'repeat(auto-fit, minmax(320px, 1fr))',
                        gap: '2rem',
                        width: '100%',
                        maxWidth: '1400px',
                    }}
                >
                    {services.map((service, i) => (
                        <ScrollReveal key={i} delay={i * 0.1} direction="up">
                            <div
                                className="glass glow-hover hover-lift"
                                style={{
                                    padding: '2.5rem 2rem',
                                    display: 'flex',
                                    flexDirection: 'column',
                                    gap: '1.5rem',
                                    height: '100%',
                                    position: 'relative',
                                    pointerEvents: 'auto',
                                    borderRadius: '8px',
                                    transition: 'all 0.4s cubic-bezier(0.4, 0, 0.2, 1)',
                                }}
                            >
                                {/* Service Number */}
                                <div
                                    className="font-mono"
                                    style={{
                                        fontSize: '0.7rem',
                                        color: '#ffffff',
                                        letterSpacing: '0.15em',
                                    }}
                                >
                                    {String(i + 1).padStart(2, '0')}
                                </div>

                                {/* Service Name */}
                                <h3
                                    style={{
                                        fontSize: '1.5rem',
                                        fontWeight: 500,
                                        fontFamily: 'var(--font-display)',
                                        color: '#fff',
                                    }}
                                >
                                    {service.name}
                                </h3>

                                {/* Description */}
                                <p
                                    style={{
                                        fontSize: '0.95rem',
                                        color: 'var(--secondary)',
                                        lineHeight: 1.6,
                                    }}
                                >
                                    {service.description}
                                </p>

                                {/* Features List */}
                                <ul style={{ listStyle: 'none', flex: 1, marginTop: '1rem' }}>
                                    {service.features.map((feature: string, j: number) => (
                                        <li
                                            key={j}
                                            style={{
                                                display: 'flex',
                                                alignItems: 'center',
                                                gap: '0.75rem',
                                                padding: '0.5rem 0',
                                                color: 'rgba(224, 224, 224, 0.7)',
                                                fontSize: '0.85rem',
                                            }}
                                        >
                                            <svg
                                                width="12"
                                                height="12"
                                                viewBox="0 0 24 24"
                                                fill="none"
                                                stroke="#ffffff"
                                                strokeWidth="3"
                                            >
                                                <polyline points="20 6 9 17 4 12" />
                                            </svg>
                                            {feature}
                                        </li>
                                    ))}
                                </ul>

                                <GlowButton
                                    variant="outline"
                                    onClick={() => console.log(`Learn more about ${service.name}`)}
                                >
                                    Learn More →
                                </GlowButton>
                            </div>
                        </ScrollReveal>
                    ))}
                </div>
            </section>

            {/* ============================================
          CONTACT SECTION
          ============================================ */}
            < section
                id="contact"
                style={{
                    minHeight: '60vh',
                    display: 'flex',
                    flexDirection: 'column',
                    alignItems: 'center',
                    justifyContent: 'center',
                    padding: 'var(--section-padding)',
                    borderTop: '1px solid rgba(255,255,255,0.05)',
                    background: 'linear-gradient(to bottom, transparent, rgba(5, 5, 7, 0.8))',
                }}
            >
                <ScrollReveal>
                    <h2
                        style={{
                            fontSize: 'clamp(2rem, 5vw, 4rem)',
                            fontWeight: 300,
                            fontFamily: 'var(--font-display)',
                            textAlign: 'center',
                            marginBottom: '1rem',
                        }}
                    >
                        Ready to <span className="text-gradient">defy gravity</span>?
                    </h2>
                </ScrollReveal>

                <ScrollReveal delay={0.2}>
                    <p
                        style={{
                            color: 'var(--secondary)',
                            textAlign: 'center',
                            maxWidth: '500px',
                            marginBottom: '3rem',
                        }}
                    >
                        Please drop us a line. We'd love to hear from you.
                    </p>
                </ScrollReveal>

                {/* Contact Form with Microinteractions */}
                <ScrollReveal delay={0.4}>
                    <ContactFormWithToast />
                </ScrollReveal>


                {/* Footer */}
                <footer
                    style={{
                        marginTop: '6rem',
                        padding: '4rem 2rem 2rem 2rem',
                        borderTop: '1px solid rgba(0, 229, 204, 0.1)',
                    }}
                >
                    <div
                        style={{
                            maxWidth: '1400px',
                            margin: '0 auto',
                            display: 'grid',
                            gridTemplateColumns: 'repeat(auto-fit, minmax(250px, 1fr))',
                            gap: '3rem',
                            marginBottom: '3rem',
                        }}
                    >
                        {/* Company Info */}
                        <div>
                            <h3
                                className="font-display"
                                style={{
                                    fontSize: '1.5rem',
                                    marginBottom: '1rem',
                                    background: 'linear-gradient(135deg, #fff, #e5e4e2)',
                                    WebkitBackgroundClip: 'text',
                                    WebkitTextFillColor: 'transparent',
                                }}
                            >
                                ObsidianLabs
                            </h3>
                            <p style={{ color: 'var(--secondary)', fontSize: '0.9rem', lineHeight: 1.6 }}>
                                Digital infrastructure for the next generation. We build 3D, AI, Web3, and design solutions.
                            </p>
                        </div>

                        {/* Services */}
                        <div>
                            <h4
                                className="font-mono"
                                style={{
                                    fontSize: '0.75rem',
                                    color: '#ffffff',
                                    letterSpacing: '0.15em',
                                    marginBottom: '1rem',
                                }}
                            >
                                SERVICES
                            </h4>
                            <ul style={{ listStyle: 'none', display: 'flex', flexDirection: 'column', gap: '0.5rem' }}>
                                {['3D Assets', 'Immersive Experiences', 'Web & SaaS', 'Design', 'AI Agents', 'Web3'].map((service) => (
                                    <li key={service}>
                                        <a
                                            href="#services"
                                            style={{
                                                color: 'var(--secondary)',
                                                fontSize: '0.85rem',
                                                transition: 'color 0.3s',
                                            }}
                                            onMouseEnter={(e) => (e.currentTarget.style.color = '#ffffff')}
                                            onMouseLeave={(e) => (e.currentTarget.style.color = 'var(--secondary)')}
                                        >
                                            {service}
                                        </a>
                                    </li>
                                ))}
                            </ul>
                        </div>

                        {/* Quick Links */}
                        <div>
                            <h4
                                className="font-mono"
                                style={{
                                    fontSize: '0.75rem',
                                    color: '#ffffff',
                                    letterSpacing: '0.15em',
                                    marginBottom: '1rem',
                                }}
                            >
                                EXPLORE
                            </h4>
                            <ul style={{ listStyle: 'none', display: 'flex', flexDirection: 'column', gap: '0.5rem' }}>
                                {[
                                    { label: 'Portfolio', href: '#portfolio' },
                                    { label: 'Services', href: '#services' },
                                    { label: 'Contact', href: '#contact' },
                                ].map((link) => (
                                    <li key={link.label}>
                                        <a
                                            href={link.href}
                                            style={{
                                                color: 'var(--secondary)',
                                                fontSize: '0.85rem',
                                                transition: 'color 0.3s',
                                            }}
                                            onMouseEnter={(e) => (e.currentTarget.style.color = '#ffffff')}
                                            onMouseLeave={(e) => (e.currentTarget.style.color = 'var(--secondary)')}
                                        >
                                            {link.label}
                                        </a>
                                    </li>
                                ))}
                            </ul>
                        </div>

                        {/* Contact */}
                        <div>
                            <h4
                                className="font-mono"
                                style={{
                                    fontSize: '0.75rem',
                                    color: '#ffffff',
                                    letterSpacing: '0.15em',
                                    marginBottom: '1rem',
                                }}
                            >
                                CONNECT
                            </h4>
                            <ul style={{ listStyle: 'none', display: 'flex', flexDirection: 'column', gap: '0.5rem' }}>
                                {['Twitter', 'LinkedIn', 'GitHub'].map((social) => (
                                    <li key={social}>
                                        <a
                                            href="#"
                                            style={{
                                                color: 'var(--secondary)',
                                                fontSize: '0.85rem',
                                                transition: 'color 0.3s',
                                            }}
                                            onMouseEnter={(e) => (e.currentTarget.style.color = '#ffffff')}
                                            onMouseLeave={(e) => (e.currentTarget.style.color = 'var(--secondary)')}
                                        >
                                            {social}
                                        </a>
                                    </li>
                                ))}
                            </ul>
                        </div>
                    </div>

                    {/* Bottom Bar */}
                    <div
                        style={{
                            borderTop: '1px solid rgba(255, 255, 255, 0.05)',
                            paddingTop: '2rem',
                            display: 'flex',
                            justifyContent: 'space-between',
                            flexWrap: 'wrap',
                            gap: '1rem',
                            color: '#666',
                            fontSize: '0.75rem',
                        }}
                    >
                        <div>© 2026 ObsidianLabs. All rights reserved.</div>
                        <div style={{ display: 'flex', gap: '1.5rem' }}>
                            <a
                                href="#"
                                style={{ color: '#666', transition: 'color 0.3s' }}
                                onMouseEnter={(e) => (e.currentTarget.style.color = '#00e5cc')}
                                onMouseLeave={(e) => (e.currentTarget.style.color = '#666')}
                            >
                                Privacy Policy
                            </a>
                            <a
                                href="#"
                                style={{ color: '#666', transition: 'color 0.3s' }}
                                onMouseEnter={(e) => (e.currentTarget.style.color = '#00e5cc')}
                                onMouseLeave={(e) => (e.currentTarget.style.color = '#666')}
                            >
                                Terms of Service
                            </a>
                        </div>
                    </div>
                </footer>
            </section >
        </div >
    );
}
